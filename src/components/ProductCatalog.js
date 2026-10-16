import { getProductsByCat, formatPrice } from '../data/products.js';

export function renderProductCatalog(activeCat = 'all', meta = { label: 'Sản phẩm', sub: 'Tất cả sản phẩm chính hãng Ondata' }) {
  const categories = [
    { id: 'laptop',      label: 'Máy tính xách tay', icon: laptopIcon() },
    { id: 'desktop',     label: 'Máy tính để bàn',   icon: desktopIcon() },
    { id: 'monitor',     label: 'Màn hình',           icon: monitorIcon() },
    { id: 'ram',         label: 'RAM',                icon: ramIcon() },
    { id: 'keyboard',    label: 'Bàn phím',           icon: keyboardIcon() },
    { id: 'mouse',       label: 'Chuột',              icon: mouseIcon() },
    { id: 'accessories', label: 'Phụ kiện',           icon: accessoriesIcon() },
    { id: 'other',       label: 'Thiết bị khác',      icon: otherIcon() },
  ];

  const tabs = ['Tất cả', 'Văn phòng', 'Gaming', 'Đồ họa', 'Ultrabook'];
  const brands = ['Ondata', 'ASUS', 'Acer', 'HP', 'Lenovo', 'Dell', 'Khác'];
  const priceRanges = ['Dưới 10 triệu', '10 - 15 triệu', '15 - 20 triệu', 'Trên 20 triệu'];
  const ramOptions = ['8GB', '16GB', '32GB'];
  const statusOptions = ['Còn hàng', 'Hết hàng', 'Đặt hàng'];

  // Load real products for this category
  const products = getProductsByCat(activeCat);

  const productCards = products.length > 0
    ? products.map((p, i) => `
        <div class="catalog-product-card" id="catalog-product-${p.id}" data-product-id="${p.id}" data-product-cat="${p.cat}" style="cursor:pointer;">
          ${p.badge ? `<span class="badge-tag">${p.badge}</span>` : ''}
          <div class="catalog-product-thumb">
            <div class="catalog-thumb-visual">
              <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="width:100%">
                <defs>
                  <linearGradient id="cg${i}" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1a2e1d"/>
                    <stop offset="100%" stop-color="#0d1a10"/>
                  </linearGradient>
                </defs>
                <rect width="160" height="110" rx="6" fill="url(#cg${i})"/>
                <ellipse cx="80" cy="55" rx="48" ry="28" fill="#7ea835" opacity=".12"/>
                <text x="80" y="60" text-anchor="middle" font-family="Outfit,sans-serif" font-weight="800" font-size="13" fill="#7ea835" opacity=".7">ONDATA</text>
              </svg>
            </div>
          </div>
          <div class="catalog-product-info">
            <p class="catalog-product-name">${p.name}</p>
            <div class="catalog-product-pricing">
              <span class="catalog-product-price" style="color:#527d24;">Liên hệ</span>
            </div>
            <div class="catalog-product-stars">
              <span class="stars-gold">${'★'.repeat(Math.floor(p.stars))}${p.stars % 1 >= 0.5 ? '½' : ''}</span>
              <span class="reviews-count">(${p.reviews})</span>
            </div>
          </div>
        </div>`)
      .join('')
    : `<div class="catalog-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" opacity=".3">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
        <p>Chưa có sản phẩm trong danh mục này</p>
       </div>`;

  return `
    <section class="catalog-page" id="catalog-page">
      <div class="catalog-container">

        <!-- BREADCRUMB -->
        <nav class="catalog-breadcrumb" aria-label="Breadcrumb">
          <a href="#" class="crumb-link" id="crumb-home">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="#" class="crumb-link" id="crumb-products">Sản phẩm</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">${meta.label}</span>
        </nav>

        <div class="catalog-layout">

          <!-- ===== LEFT SIDEBAR ===== -->
          <aside class="catalog-sidebar" id="catalog-sidebar">
            <div class="catsidebar-header">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              Danh mục sản phẩm
            </div>
            <ul class="catsidebar-menu">
              ${categories.map(cat => `
                <li class="catsidebar-item">
                  <a href="#" class="catsidebar-link${cat.id === activeCat ? ' catsidebar-link--active' : ''}" id="cat-${cat.id}" data-cat="${cat.id}">
                    <span class="catsidebar-icon">${cat.icon}</span>
                    <span>${cat.label}</span>
                  </a>
                </li>
              `).join('')}
            </ul>
          </aside>

          <!-- ===== RIGHT CONTENT ===== -->
          <div class="catalog-content">

            <!-- CATEGORY HERO BANNER -->
            <div class="catalog-hero" id="catalog-hero">
              <div class="catalog-hero-text">
                <h1 class="catalog-hero-title">${meta.label}</h1>
                <p class="catalog-hero-sub">${meta.sub}</p>
              </div>
              <div class="catalog-hero-visual">
                <div class="chl-wrap">
                  <div class="chl-screen">
                    <div class="chl-glow"></div>
                    <div class="chl-logo-text">ONDATA</div>
                  </div>
                  <div class="chl-base">
                    <div class="chl-notch"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- TYPE FILTER TABS -->
            <div class="catalog-tabs" id="catalog-tabs" role="tablist">
              ${tabs.map((tab, i) => `
                <button class="catalog-tab${i === 0 ? ' catalog-tab--active' : ''}" id="tab-${i}" role="tab" data-tab="${i}">
                  ${tab}
                </button>
              `).join('')}
            </div>

            <!-- FILTER TOGGLE + SORT ROW -->
            <div class="catalog-filter-row">
              <button class="catalog-filter-toggle catalog-filters--open" id="catalog-filter-toggle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                </svg>
                Bộ lọc
                <svg class="filter-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div class="catalog-sort">
                <span class="sort-label">Sắp xếp</span>
                <div class="sort-select-wrap">
                  <select class="sort-select" id="catalog-sort-select">
                    <option>Phổ biến</option>
                    <option>Mới nhất</option>
                    <option>Đánh giá cao</option>
                  </select>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- FILTER PANEL + PRODUCT AREA -->
            <div class="catalog-body" id="catalog-body">

              <!-- FILTER PANEL -->
              <div class="catalog-filters" id="catalog-filters">

                <div class="filter-group" id="fg-group-brand">
                  <div class="filter-group-title" data-group="brand">
                    Thương hiệu
                    <svg class="fg-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="18 15 12 9 6 15"/>
                    </svg>
                  </div>
                  <div class="filter-group-body" id="fg-brand">
                    ${brands.map((b, i) => `
                      <label class="filter-checkbox" id="filter-brand-${i}">
                        <input type="checkbox" name="brand" value="${b}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${b}</span>
                      </label>
                    `).join('')}
                  </div>
                </div>

                <div class="filter-group" id="fg-group-ram">
                  <div class="filter-group-title" data-group="ram">
                    RAM
                    <svg class="fg-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="18 15 12 9 6 15"/>
                    </svg>
                  </div>
                  <div class="filter-group-body" id="fg-ram">
                    ${ramOptions.map((r, i) => `
                      <label class="filter-checkbox" id="filter-ram-${i}">
                        <input type="checkbox" name="ram" value="${r}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${r}</span>
                      </label>
                    `).join('')}
                  </div>
                </div>

                <div class="filter-group" id="fg-group-status">
                  <div class="filter-group-title" data-group="status">
                    Tình trạng
                    <svg class="fg-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="18 15 12 9 6 15"/>
                    </svg>
                  </div>
                  <div class="filter-group-body" id="fg-status">
                    ${statusOptions.map((s, i) => `
                      <label class="filter-checkbox" id="filter-status-${i}">
                        <input type="checkbox" name="status" value="${s}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${s}</span>
                      </label>
                    `).join('')}
                  </div>
                </div>

                <button class="filter-reset-btn" id="filter-reset-btn">Xóa bộ lọc</button>
              </div>

              <!-- PRODUCT GRID -->
              <div class="catalog-products-area" id="catalog-products-area">
                <div class="catalog-products-grid" id="catalog-products-grid">
                  ${productCards}
                </div>

                <!-- PAGINATION -->
                <div class="catalog-pagination" id="catalog-pagination">
                  <button class="page-btn page-btn--arrow" id="page-prev" disabled aria-label="Trang trước">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="15 18 9 12 15 6"/>
                    </svg>
                  </button>
                  <button class="page-btn page-btn--num page-btn--active" id="page-1" data-page="1">1</button>
                  <button class="page-btn page-btn--num" id="page-2" data-page="2">2</button>
                  <button class="page-btn page-btn--num" id="page-3" data-page="3">3</button>
                  <button class="page-btn page-btn--arrow" id="page-next" aria-label="Trang sau">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                </div>
              </div>

            </div><!-- end catalog-body -->

          </div><!-- end catalog-content -->

        </div><!-- end catalog-layout -->

      </div><!-- end catalog-container -->
    </section>
  `;
}

/* ── SVG Icon helpers ────────────────────────────────── */
function laptopIcon() {
  return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`;
}
function desktopIcon() {
  return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/></svg>`;
}
function monitorIcon() {
  return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>`;
}
function ramIcon() {
  return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="8" width="20" height="8" rx="1"/><path d="M6 8V6M10 8V6M14 8V6M18 8V6M6 16v2M10 16v2M14 16v2M18 16v2"/></svg>`;
}
function keyboardIcon() {
  return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/></svg>`;
}
function mouseIcon() {
  return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="2" width="10" height="18" rx="5"/><path d="M12 2v7M7 9h10"/></svg>`;
}
function accessoriesIcon() {
  return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>`;
}
function otherIcon() {
  return `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>`;
}

/* ── Interactions ────────────────────────────────────── */
export function initCatalogInteractions() {
  // NOTE: sidebar category links are handled by the router in main.js

  // Type tabs
  document.querySelectorAll('.catalog-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.catalog-tab').forEach(t => t.classList.remove('catalog-tab--active'));
      tab.classList.add('catalog-tab--active');
    });
  });

  // Filter panel toggle
  const filterToggle = document.getElementById('catalog-filter-toggle');
  const filterPanel = document.getElementById('catalog-filters');
  if (filterToggle && filterPanel) {
    filterToggle.addEventListener('click', () => {
      filterPanel.classList.toggle('filters-hidden');
      filterToggle.classList.toggle('catalog-filters--open');
    });
  }

  // Filter group collapse
  document.querySelectorAll('.filter-group-title').forEach(title => {
    title.addEventListener('click', () => {
      const groupId = title.getAttribute('data-group');
      const body = document.getElementById(`fg-${groupId}`);
      if (body) {
        body.classList.toggle('fg-collapsed');
        title.classList.toggle('fg-title-collapsed');
      }
    });
  });

  // Reset filters
  const resetBtn = document.getElementById('filter-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.querySelectorAll('.catalog-filters input[type="checkbox"]').forEach(cb => { cb.checked = false; });
    });
  }

  // Pagination
  let currentPage = 1;
  const pageButtons = document.querySelectorAll('.page-btn--num');
  const prevBtn = document.getElementById('page-prev');
  const nextBtn = document.getElementById('page-next');

  function setActivePage(page) {
    currentPage = page;
    pageButtons.forEach(btn => {
      btn.classList.toggle('page-btn--active', parseInt(btn.dataset.page) === currentPage);
    });
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === pageButtons.length;
  }

  pageButtons.forEach(btn => btn.addEventListener('click', () => setActivePage(parseInt(btn.dataset.page))));
  if (prevBtn) prevBtn.addEventListener('click', () => { if (currentPage > 1) setActivePage(currentPage - 1); });
  if (nextBtn) nextBtn.addEventListener('click', () => { if (currentPage < pageButtons.length) setActivePage(currentPage + 1); });

  // Product card click → navigate to detail page
  document.querySelectorAll('.catalog-product-card[data-product-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id  = card.dataset.productId;
      const cat = card.dataset.productCat;
      if (id && cat) {
        window.location.hash = `#/san-pham/${cat}/${id}`;
      }
    });
  });
}
