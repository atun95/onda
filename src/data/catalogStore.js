import { CATEGORIES_LIST, removeVietnameseTones, replaceProducts } from './products.js';

const ICONS = ['monitor', 'cpu', 'gpu', 'ram', 'shield', 'hdd'];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function sanitizeHtml(html) {
  return String(html)
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, '')
    .replace(/\son\w+\s*=\s*(['"]).*?\1/gi, '')
    .replace(/javascript:/gi, '');
}

function toDetailHtml(detail) {
  const raw = String(detail || '').trim();
  if (!raw) return '';
  if (/<[a-z][\s\S]*>/i.test(raw)) return sanitizeHtml(raw);
  return raw
    .split(/\n{2,}/)
    .map((block) => `<p>${escapeHtml(block).replace(/\n/g, '<br>')}</p>`)
    .join('');
}

function parseSpecs(text) {
  const pairs = [];
  String(text || '').split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;
    const idx = trimmed.indexOf(':');
    if (idx === -1) pairs.push(['Thông số', trimmed]);
    else pairs.push([trimmed.slice(0, idx).trim() || 'Thông số', trimmed.slice(idx + 1).trim()]);
  });
  return pairs.filter(([, value]) => value);
}

function parseNotes(notes) {
  const seo = { title: '', description: '', keywords: '' };
  String(notes || '').split('\n').forEach((line) => {
    const match = line.match(/^\s*(Tiêu đề SEO|Meta description|Từ khóa chính|Từ khóa phụ|Từ khóa)\s*:\s*(.*)$/i);
    if (!match) return;
    const label = match[1].toLowerCase();
    const value = match[2].trim();
    if (label.includes('tiêu')) seo.title = value;
    else if (label.includes('meta')) seo.description = value;
    else if (label.includes('phụ')) seo.keywords = seo.keywords ? `${seo.keywords}, ${value}` : value;
    else if (label.includes('chính') || label.startsWith('từ khóa')) seo.keywords = seo.keywords ? `${value}, ${seo.keywords}` : value;
  });
  return seo;
}

function cleanImages(images) {
  return (Array.isArray(images) ? images : [])
    .map((image) => String(image || '').trim())
    .filter((image) => /^https?:\/\//i.test(image) || image.startsWith('/'));
}

export function rowToProduct(row) {
  const pairs = parseSpecs(row.specs);
  const techSpecs = {};
  pairs.forEach(([label, value], index) => {
    const key = techSpecs[label] ? `${label} (${index + 1})` : label;
    techSpecs[key] = value;
  });
  const seo = parseNotes(row.notes);
  const images = cleanImages(row.images);
  return {
    id: row.id,
    cat: row.category,
    stt: Number(row.stt) || 0,
    name: row.name,
    images,
    badge: 'Mới',
    price: 0,
    stars: 5,
    reviews: 0,
    seo: {
      title: seo.title || row.name,
      description: seo.description || row.shortDesc || '',
      keywords: seo.keywords || '',
    },
    specs: pairs.slice(0, 6).map(([label, value], index) => ({
      icon: ICONS[index % ICONS.length],
      label,
      value,
    })),
    desc: row.shortDesc || '',
    features: [],
    techSpecs,
    detailHtml: toDetailHtml(row.detail),
    notes: row.notes || '',
  };
}

export function rowsToProducts(rows) {
  return [...rows]
    .map(rowToProduct)
    .sort((a, b) => a.stt - b.stt || a.name.localeCompare(b.name, 'vi'));
}

export function applyCatalogRows(rows) {
  replaceProducts(rowsToProducts(rows));
}

export async function loadCatalog() {
  try {
    const response = await fetch('/data/catalog.json', { cache: 'no-store' });
    if (!response.ok) return null;
    const rows = await response.json();
    if (!Array.isArray(rows)) return null;
    applyCatalogRows(rows);
    return rows;
  } catch {
    return null;
  }
}

export function categoryName(id) {
  return CATEGORIES_LIST.find((category) => category.id === id)?.name || id;
}

export function makeProductId(name, rows) {
  const base = removeVietnameseTones(name).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'san-pham';
  let id = base;
  let count = 2;
  const taken = new Set(rows.map((row) => row.id));
  while (taken.has(id)) {
    id = `${base}-${count}`;
    count += 1;
  }
  return id;
}
