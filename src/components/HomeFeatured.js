import { PRODUCTS, CATEGORIES_LIST } from '../data/products.js';

function getDeviceSvg(cat, name) {
  switch (cat) {
    case 'aio':
      return `
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="3" width="20" height="13" rx="2"/>
          <circle cx="12" cy="5" r="0.75" fill="currentColor"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke-width="2"/>
          <line x1="12" y1="16" x2="12" y2="21" stroke-width="2"/>
          <line x1="4" y1="13.5" x2="20" y2="13.5" stroke-dasharray="1 2" stroke-width="0.8"/>
        </svg>
      `;
    case 'monitor':
      return `
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <polyline points="7 21 12 17 17 21" stroke-width="1.8"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke-width="1.8"/>
        </svg>
      `;
    case 'keyboard':
      return `
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <line x1="5" y1="9" x2="5.01" y2="9" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="9" y1="9" x2="9.01" y2="9" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="13" y1="9" x2="13.01" y2="9" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="17" y1="9" x2="17.01" y2="9" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="5" y1="12" x2="5.01" y2="12" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="9" y1="12" x2="9.01" y2="12" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="13" y1="12" x2="13.01" y2="12" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="17" y1="12" x2="17.01" y2="12" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="7" y1="15.5" x2="17" y2="15.5" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `;
    case 'mouse':
      return `
        <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="5" y="2" width="14" height="20" rx="7"/>
          <line x1="12" y1="6" x2="12" y2="10" stroke-width="2" stroke-linecap="round"/>
          <line x1="12" y1="2" x2="12" y2="6" stroke-width="1"/>
        </svg>
      `;
    case 'ram':
      return `
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="7" width="20" height="10" rx="1.5"/>
          <line x1="6" y1="17" x2="6" y2="19.5" stroke-width="1.8"/>
          <line x1="9" y1="17" x2="9" y2="19.5" stroke-width="1.8"/>
          <line x1="12" y1="17" x2="12" y2="19.5" stroke-width="1.8"/>
          <line x1="15" y1="17" x2="15" y2="19.5" stroke-width="1.8"/>
          <line x1="18" y1="17" x2="18" y2="19.5" stroke-width="1.8"/>
          <circle cx="7" cy="11" r="1" fill="currentColor"/>
          <circle cx="12" cy="11" r="1" fill="currentColor"/>
          <circle cx="17" cy="11" r="1" fill="currentColor"/>
        </svg>
      `;
    case 'accessories':
    default:
      return `
        <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="7" width="18" height="10" rx="2"/>
          <circle cx="8" cy="12" r="1.5"/>
          <circle cx="16" cy="12" r="1.5"/>
          <line x1="12" y1="7" x2="12" y2="17" stroke-dasharray="2 2"/>
        </svg>
      `;
  }
}

function getCatHeaderIcon(cat) {
  switch (cat) {
    case 'aio':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="16" x2="12" y2="21"/></svg>`;
    case 'monitor':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>`;
    case 'keyboard':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="6" y1="9" x2="6.01" y2="9"/><line x1="10" y1="9" x2="10.01" y2="9"/><line x1="14" y1="9" x2="14.01" y2="9"/><line x1="18" y1="9" x2="18.01" y2="9"/><line x1="7" y1="15" x2="17" y2="15"/></svg>`;
    case 'mouse':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="7"/><line x1="12" y1="6" x2="12" y2="10"/></svg>`;
    case 'ram':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="1"/><line x1="6" y1="17" x2="6" y2="19"/><line x1="10" y1="17" x2="10" y2="19"/><line x1="14" y1="17" x2="14" y2="19"/><line x1="18" y1="17" x2="18" y2="19"/></svg>`;
    case 'accessories':
    default:
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
  }
}

export function renderHomeFeatured() {
  const categoryBlocks = CATEGORIES_LIST.map(cat => {
    // Lấy danh sách sản phẩm thuộc danh mục này (tầm 5 sản phẩm)
    const catProducts = PRODUCTS.filter(p => p.cat === cat.id).slice(0, 5);

    const productCardsHtml = catProducts.map(p => `
      <div class="product-item-card" data-id="${p.id}" data-cat="${p.cat}" style="cursor:pointer;">
        ${p.badge ? `<span class="badge-tag">${p.badge}</span>` : ''}
        <div class="product-thumb-container">
          <div class="tech-device-render">
            ${getDeviceSvg(p.cat, p.name)}
            <span class="device-label">${p.name.split(' ')[0]} ${p.name.split(' ')[1] || ''}</span>
          </div>
        </div>
        <div class="product-info-box">
          <h3 class="product-name" title="${p.name}">
            ${p.name} <span class="product-ext-icon">↗</span>
          </h3>
          <div class="product-pricing">
            <span class="current-price" style="color:#527d24;">Liên hệ</span>
          </div>
          <div class="product-stars-row">
            <span class="stars-gold">${'★'.repeat(Math.floor(p.stars))}${p.stars % 1 >= 0.5 ? '½' : ''}</span>
            <span class="reviews-count">(${p.reviews})</span>
          </div>
        </div>
      </div>
    `).join('');

    return `
      <!-- Row Danh mục: ${cat.name} -->
      <div class="home-category-row-block" id="cat-block-${cat.id}">
        <div class="section-top-bar">
          <div class="category-header-title-wrap">
            <span class="category-header-icon">${getCatHeaderIcon(cat.id)}</span>
            <div>
              <h2 class="section-heading">${cat.name}</h2>
              <span class="category-header-sub">${cat.desc}</span>
            </div>
          </div>
          <a href="/san-pham/${cat.id}" class="see-all-link">
            Xem tất cả
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </div>

        <div class="featured-grid-5">
          ${productCardsHtml}
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="home-featured-section" id="featured-products">
      <div class="container">
        <!-- Main Section Title -->
        <div class="featured-main-header">
          <div class="fmh-left">
            <span class="fmh-badge">HỆ THỐNG SẢN PHẨM ONDATA</span>
            <h2 class="fmh-title">Danh Mục Thiết Bị Chính Hãng</h2>
          </div>
        </div>

        <!-- 6 Rows Danh Mục (Mỗi mục 1 hàng 5 sản phẩm) -->
        <div class="featured-categories-rows">
          ${categoryBlocks}
        </div>
      </div>
    </section>
  `;
}
