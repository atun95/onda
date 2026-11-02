import { CATEGORIES_LIST } from '../data/products.js';
import { applyCatalogRows, categoryName, makeProductId } from '../data/catalogStore.js';

const TOKEN_KEY = 'ondata-admin-token';
const EMPTY_FORM = {
  id: '',
  stt: 1,
  category: 'monitor',
  name: '',
  specs: '',
  notes: '',
  shortDesc: '',
  detail: '',
  images: [],
};

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function authHeaders(token) {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
}

async function api(url, options = {}) {
  const response = await fetch(url, options);
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }
  if (!data || typeof data !== 'object' || data.ok !== true) {
    const error = new Error(
      (data && data.message) || 'Hosting chưa nhận đủ file lưu sản phẩm. Hãy tải lên thư mục api và data.',
    );
    error.status = response.ok ? 502 : response.status;
    throw error;
  }
  return data;
}

export function renderAdminPage() {
  return `<div id="admin-root" class="admin-page"></div>`;
}

export function initAdminPage() {
  const root = document.getElementById('admin-root');
  if (!root) return;
  const token = sessionStorage.getItem(TOKEN_KEY);
  if (!token) {
    paintLogin(root);
    return;
  }
  root.innerHTML = `<p class="admin-status">Đang mở trang quản trị...</p>`;
  api('/api/session.php', { headers: authHeaders(token) })
    .then(() => paintDashboard(root, token))
    .catch(() => {
      sessionStorage.removeItem(TOKEN_KEY);
      paintLogin(root, 'Phiên đăng nhập đã hết. Hãy đăng nhập lại.');
    });
}

function paintLogin(root, message = '') {
  root.innerHTML = `
    <div class="admin-login">
      <div class="admin-login-panel">
        <form class="admin-login-form" id="admin-login-form">
          <h2>Đăng nhập</h2>
          ${message ? `<p class="admin-alert">${escapeHtml(message)}</p>` : ''}
          <label>Tài khoản<input name="username" autocomplete="username" required></label>
          <label>Mật khẩu<input name="password" type="password" autocomplete="current-password" required></label>
          <button class="admin-btn" type="submit">Vào trang quản trị</button>
          <a class="admin-back" href="/">Về trang chủ</a>
        </form>
      </div>
    </div>
  `;
  root.querySelector('#admin-login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector('button');
    button.disabled = true;
    try {
      const data = await api('/api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.username.value.trim(),
          password: form.password.value,
        }),
      });
      sessionStorage.setItem(TOKEN_KEY, data.token);
      paintDashboard(root, data.token);
    } catch (error) {
      paintLogin(root, error.message);
    }
  });
}

async function paintDashboard(root, token) {
  let rows = [];
  try {
    const response = await fetch('/data/catalog.json', { cache: 'no-store' });
    rows = await response.json();
    if (!Array.isArray(rows)) rows = [];
  } catch {
    rows = [];
  }
  let formState = { ...EMPTY_FORM, stt: nextStt(rows) };
  let notice = '';

  const draw = () => {
    const sorted = [...rows].sort((a, b) => Number(a.stt) - Number(b.stt) || a.name.localeCompare(b.name, 'vi'));
    root.innerHTML = `
      <div class="admin-app">
        <aside class="admin-side">
          <div>
            <p class="admin-brand">ONDATA</p>
          </div>
          <nav class="admin-nav">
            <span class="admin-nav-item admin-nav-item--active">Sản phẩm</span>
          </nav>
          <div class="admin-side-actions">
            <a class="admin-link" href="/">Xem website</a>
            <button class="admin-link" type="button" id="admin-logout">Đăng xuất</button>
          </div>
        </aside>
        <main class="admin-main">
          <header class="admin-top">
            <div>
              <p class="admin-kicker">Danh mục sản phẩm</p>
              <h1>Quản lý sản phẩm</h1>
            </div>
            <div class="admin-stat">${sorted.length} sản phẩm</div>
          </header>
          ${notice ? `<p class="admin-alert ${notice.ok ? 'admin-alert--ok' : ''}">${escapeHtml(notice.text)}</p>` : ''}
          <div class="admin-workspace">
            <form class="admin-card" id="admin-product-form">
              <div class="admin-card-head">
                <h2>${formState.id ? 'Sửa sản phẩm' : 'Thêm sản phẩm mới'}</h2>
              </div>

              <section class="admin-section">
                <h3>Thông tin chính</h3>
                <label>Danh mục
                  <select name="category">
                    ${CATEGORIES_LIST.map((category) => `
                      <option value="${category.id}" ${category.id === formState.category ? 'selected' : ''}>${escapeHtml(category.name)}</option>
                    `).join('')}
                  </select>
                </label>
                <label>Tên sản phẩm<input name="name" required value="${escapeHtml(formState.name)}" placeholder="Màn hình ONDATA ..."></label>
              </section>

              <section class="admin-section">
                <h3>Nội dung</h3>
                <label>Thông số kỹ thuật
                  <textarea name="specs" rows="7" placeholder="Mỗi dòng một thông số. Ví dụ:&#10;Kích thước: 23.8 inch&#10;Tần số quét: 120Hz">${escapeHtml(formState.specs)}</textarea>
                </label>
                <label>Lưu ý khi đăng sản phẩm
                  <textarea name="notes" rows="5" placeholder="Tiêu đề SEO: ...&#10;Meta description: ...&#10;Từ khóa chính: ...&#10;Từ khóa phụ: ...">${escapeHtml(formState.notes)}</textarea>
                </label>
                <label>Mô tả ngắn<textarea name="shortDesc" rows="3">${escapeHtml(formState.shortDesc)}</textarea></label>
                <label>Mô tả chi tiết<textarea name="detail" rows="8" placeholder="Xuống dòng để tách đoạn. Một dòng trống để tách đoạn mới.">${escapeHtml(formState.detail)}</textarea></label>
              </section>

              <section class="admin-section">
                <h3>Ảnh sản phẩm</h3>
                <div class="admin-photos" id="admin-photos">
                  ${(formState.images || []).map((src, index) => `
                    <figure class="admin-photo">
                      <img src="${escapeHtml(src)}" alt="Ảnh ${index + 1}">
                      <button type="button" data-remove-image="${index}">Gỡ</button>
                      ${index === 0 ? '<span class="admin-photo-badge">Ảnh bìa</span>' : ''}
                    </figure>
                  `).join('')}
                </div>
                <label class="admin-upload">
                  Chọn ảnh từ máy
                  <input id="admin-image-input" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple>
                </label>
                <p class="admin-hint">Chọn nhiều ảnh một lần. Ảnh đầu tiên là ảnh bìa. Mỗi ảnh tối đa 8MB.</p>
              </section>

              <div class="admin-form-actions">
                <button class="admin-btn" type="submit">${formState.id ? 'Lưu thay đổi' : 'Đăng sản phẩm'}</button>
                <button class="admin-btn admin-btn--ghost" type="button" id="admin-reset">Làm mới form</button>
              </div>
            </form>

            <section class="admin-card admin-list-card">
              <div class="admin-card-head">
                <h2>Đang hiển thị</h2>
              </div>
              <ul class="admin-list">
                ${sorted.length ? sorted.map((row) => `
                  <li class="admin-list-item ${row.id === formState.id ? 'admin-list-item--active' : ''}">
                    <div class="admin-list-thumb">
                      ${row.images?.[0]
                        ? `<img src="${escapeHtml(row.images[0])}" alt="">`
                        : '<span>Ảnh</span>'}
                    </div>
                    <div class="admin-list-copy">
                      <strong>${escapeHtml(row.name)}</strong>
                      <span>${escapeHtml(categoryName(row.category))}</span>
                    </div>
                    <div class="admin-row-actions">
                      <button type="button" data-edit="${escapeHtml(row.id)}">Sửa</button>
                      <button type="button" class="admin-btn--danger" data-delete="${escapeHtml(row.id)}">Xóa</button>
                    </div>
                  </li>
                `).join('') : '<li class="admin-empty">Chưa có sản phẩm.</li>'}
              </ul>
            </section>
          </div>
        </main>
      </div>
    `;

    root.querySelector('#admin-logout').addEventListener('click', () => {
      sessionStorage.removeItem(TOKEN_KEY);
      paintLogin(root);
    });
    root.querySelector('#admin-image-input')?.addEventListener('change', async (event) => {
      const files = [...event.target.files];
      if (!files.length) return;
      formState = readForm(root, formState);
      const hint = root.querySelector('.admin-hint');
      if (hint) hint.textContent = 'Đang tải ảnh lên...';
      try {
        for (const file of files) {
          if (formState.images.length >= 12) break;
          const dataUrl = await readFile(file);
          const saved = await api('/api/upload.php', {
            method: 'POST',
            headers: authHeaders(token),
            body: JSON.stringify({ dataUrl }),
          });
          formState.images.push(saved.image);
        }
        notice = { ok: true, text: 'Đã tải ảnh lên. Bấm lưu sản phẩm để cập nhật website.' };
        draw();
      } catch (error) {
        if (error.status === 401) {
          sessionStorage.removeItem(TOKEN_KEY);
          paintLogin(root, error.message);
          return;
        }
        notice = { ok: false, text: error.message };
        draw();
      }
    });
    root.querySelectorAll('[data-remove-image]').forEach((button) => {
      button.addEventListener('click', () => {
        formState = readForm(root, formState);
        formState.images.splice(Number(button.dataset.removeImage), 1);
        draw();
      });
    });
    root.querySelector('#admin-reset').addEventListener('click', () => {
      formState = { ...EMPTY_FORM, stt: nextStt(rows) };
      notice = '';
      draw();
    });
    root.querySelector('#admin-product-form').addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const name = form.name.value.trim();
      if (!name) return;
      const draft = {
        id: formState.id || makeProductId(name, rows),
        stt: formState.id ? Number(formState.stt) || nextStt(rows) : nextStt(rows),
        category: form.category.value,
        name,
        specs: form.specs.value,
        notes: form.notes.value,
        shortDesc: form.shortDesc.value,
        detail: form.detail.value,
        images: formState.images || [],
      };
      const next = formState.id
        ? rows.map((row) => (row.id === formState.id ? draft : row))
        : [...rows, draft];
      const button = form.querySelector('button[type="submit"]');
      button.disabled = true;
      try {
        const saved = await api('/api/catalog.php', {
          method: 'POST',
          headers: authHeaders(token),
          body: JSON.stringify({ rows: next }),
        });
        if (!Array.isArray(saved.rows)) {
          throw new Error(saved.message || 'Không nhận được danh sách sản phẩm từ hosting.');
        }
        rows = saved.rows;
        applyCatalogRows(rows);
        formState = { ...EMPTY_FORM, stt: nextStt(rows) };
        notice = { ok: true, text: 'Đã lưu. Sản phẩm đã được cập nhật trên website.' };
        draw();
      } catch (error) {
        if (error.status === 401) {
          sessionStorage.removeItem(TOKEN_KEY);
          paintLogin(root, error.message);
          return;
        }
        button.disabled = false;
        let alert = root.querySelector('.admin-alert');
        if (!alert) {
          alert = document.createElement('p');
          alert.className = 'admin-alert';
          root.querySelector('.admin-top')?.insertAdjacentElement('afterend', alert);
        }
        alert.classList.remove('admin-alert--ok');
        alert.textContent = error.message;
      }
    });
    root.querySelectorAll('[data-edit]').forEach((button) => {
      button.addEventListener('click', () => {
        const row = rows.find((item) => item.id === button.dataset.edit);
        if (!row) return;
        formState = {
          ...row,
          images: [...(row.images || [])],
        };
        notice = '';
        draw();
        root.querySelector('#admin-product-form')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
    root.querySelectorAll('[data-delete]').forEach((button) => {
      button.addEventListener('click', async () => {
        const row = rows.find((item) => item.id === button.dataset.delete);
        if (!row) return;
        if (!window.confirm(`Xóa sản phẩm "${row.name}"?`)) return;
        const next = rows.filter((item) => item.id !== row.id);
        try {
        const saved = await api('/api/catalog.php', {
          method: 'POST',
          headers: authHeaders(token),
          body: JSON.stringify({ rows: next }),
        });
        if (!Array.isArray(saved.rows)) {
          throw new Error(saved.message || 'Không nhận được danh sách sản phẩm từ hosting.');
        }
        rows = saved.rows;
        applyCatalogRows(rows);
          if (formState.id === row.id) formState = { ...EMPTY_FORM, stt: nextStt(rows) };
          notice = { ok: true, text: 'Đã xóa sản phẩm.' };
          draw();
        } catch (error) {
          notice = { ok: false, text: error.message };
          draw();
        }
      });
    });
  };

  draw();
}

function readForm(root, current) {
  const form = root.querySelector('#admin-product-form');
  if (!form) return current;
  return {
    ...current,
    category: form.category.value,
    name: form.name.value,
    specs: form.specs.value,
    notes: form.notes.value,
    shortDesc: form.shortDesc.value,
    detail: form.detail.value,
  };
}

function readFile(file) {
  return new Promise((resolve, reject) => {
    if (!/^image\/(jpeg|png|webp|gif)$/.test(file.type)) {
      reject(new Error('Chỉ nhận ảnh JPG, PNG, WEBP hoặc GIF'));
      return;
    }
    if (file.size > 8_000_000) {
      reject(new Error('Mỗi ảnh tối đa 8MB'));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Không đọc được ảnh trên máy'));
    reader.readAsDataURL(file);
  });
}

function nextStt(rows) {
  const max = rows.reduce((highest, row) => Math.max(highest, Number(row.stt) || 0), 0);
  return max + 1;
}
