import fs from 'fs';
import path from 'path';
import { createHash, randomBytes, timingSafeEqual } from 'crypto';
import { ADMIN_PASSWORD, ADMIN_USER } from './auth.js';

const CATS = new Set(['aio', 'monitor', 'keyboard', 'mouse', 'ram', 'accessories']);
const tokens = new Set();

function digest(value) {
  return createHash('sha256').update(String(value)).digest();
}

function safeEqual(a, b) {
  return timingSafeEqual(digest(a), digest(b));
}

function catalogPath(root) {
  return path.join(root, 'public', 'data', 'catalog.json');
}

function readCatalog(root) {
  const file = catalogPath(root);
  if (!fs.existsSync(file)) return [];
  const rows = JSON.parse(fs.readFileSync(file, 'utf8'));
  return Array.isArray(rows) ? rows : [];
}

function writeCatalog(root, rows) {
  const file = catalogPath(root);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(rows, null, 2), 'utf8');
  fs.renameSync(tmp, file);
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function readBody(req, limit = 5_000_000) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > limit) {
        reject(new Error('Dữ liệu quá lớn'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function saveUploadedImage(root, dataUrl) {
  const match = String(dataUrl || '').match(/^data:(image\/(?:jpeg|png|webp|gif));base64,([a-z0-9+/=\r\n]+)$/i);
  if (!match) throw new Error('Chỉ nhận ảnh JPG, PNG, WEBP hoặc GIF');
  const mime = match[1].toLowerCase();
  const buffer = Buffer.from(match[2], 'base64');
  if (!buffer.length || buffer.length > 8_000_000) throw new Error('Mỗi ảnh tối đa 8MB');
  const ext = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif' }[mime];
  const dir = path.join(root, 'public', 'images', 'products');
  fs.mkdirSync(dir, { recursive: true });
  const filename = `${Date.now()}-${randomBytes(4).toString('hex')}.${ext}`;
  fs.writeFileSync(path.join(dir, filename), buffer);
  return `/images/products/${filename}`;
}

function tokenFrom(req) {
  const header = req.headers.authorization || '';
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : '';
}

function cleanText(value, max) {
  return String(value || '').slice(0, max);
}

function validateRows(rows) {
  if (!Array.isArray(rows) || rows.length > 500) return 'Danh sách sản phẩm không hợp lệ';
  for (const row of rows) {
    if (!row || typeof row !== 'object') return 'Sản phẩm không hợp lệ';
    if (!CATS.has(row.category)) return 'Danh mục không hợp lệ';
    if (!cleanText(row.name, 300).trim()) return 'Tên sản phẩm không được để trống';
    if (!Array.isArray(row.images) || row.images.length > 12) return 'Link ảnh không hợp lệ';
  }
  return '';
}

export function createAdminApi(root) {
  return async function adminApi(req, res, next) {
    const url = (req.url || '').split('?')[0];
    const login = url === '/api/login.php' || url === '/api/admin/login';
    const session = url === '/api/session.php' || url === '/api/admin/session';
    const upload = url === '/api/upload.php' || url === '/api/admin/upload';
    const catalog = url === '/api/catalog.php' || url === '/api/admin/catalog';
    if (!login && !session && !upload && !catalog) return next();

    try {
      if (req.method === 'POST' && login) {
        const body = JSON.parse((await readBody(req)) || '{}');
        if (!safeEqual(body.username || '', ADMIN_USER) || !safeEqual(body.password || '', ADMIN_PASSWORD)) {
          return send(res, 401, { ok: false, message: 'Sai tài khoản hoặc mật khẩu' });
        }
        const token = randomBytes(24).toString('hex');
        tokens.add(token);
        return send(res, 200, { ok: true, token });
      }

      if (req.method === 'GET' && session) {
        return send(res, tokens.has(tokenFrom(req)) ? 200 : 401, { ok: tokens.has(tokenFrom(req)) });
      }

      if (req.method === 'POST' && upload) {
        if (!tokens.has(tokenFrom(req))) {
          return send(res, 401, { ok: false, message: 'Phiên đăng nhập đã hết. Hãy đăng nhập lại.' });
        }
        const body = JSON.parse((await readBody(req, 12_000_000)) || '{}');
        const image = saveUploadedImage(root, body.dataUrl);
        return send(res, 200, { ok: true, image });
      }

      if ((req.method === 'POST' || req.method === 'PUT') && catalog) {
        if (!tokens.has(tokenFrom(req))) {
          return send(res, 401, { ok: false, message: 'Phiên đăng nhập đã hết. Hãy đăng nhập lại.' });
        }
        const body = JSON.parse((await readBody(req)) || '{}');
        const error = validateRows(body.rows);
        if (error) return send(res, 400, { ok: false, message: error });
        const rows = body.rows.map((row) => ({
          id: cleanText(row.id, 120).trim(),
          stt: Number(row.stt) || 0,
          category: row.category,
          name: cleanText(row.name, 300).trim(),
          specs: cleanText(row.specs, 20000),
          notes: cleanText(row.notes, 20000),
          shortDesc: cleanText(row.shortDesc, 5000),
          detail: cleanText(row.detail, 100000),
          images: row.images.map((image) => cleanText(image, 500).trim()).filter(Boolean).slice(0, 12),
        }));
        writeCatalog(root, rows);
        return send(res, 200, { ok: true, rows });
      }

      return send(res, 404, { ok: false, message: 'Không tìm thấy' });
    } catch (error) {
      return send(res, 500, { ok: false, message: error.message || 'Không lưu được sản phẩm' });
    }
  };
}

export function readPublicCatalog(root) {
  return readCatalog(root);
}
