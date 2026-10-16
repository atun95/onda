import './style.css';
import { renderNavbar } from './components/Navbar.js';
import { renderHomeHero } from './components/HomeHero.js';
import { renderHomeFeatured } from './components/HomeFeatured.js';
import { renderHomePromo } from './components/HomePromo.js';
import { renderHomeNews } from './components/HomeNews.js';
import { renderFooter } from './components/Footer.js';
import { renderProductCatalog, initCatalogInteractions } from './components/ProductCatalog.js';
import { renderProductDetail, initProductDetailInteractions } from './components/ProductDetail.js';
import { renderNewsPage, initNewsPageInteractions } from './components/NewsPage.js';
import { renderContactPage, initContactPageInteractions } from './components/ContactPage.js';
import { renderSupportPage, initSupportPageInteractions } from './components/SupportPage.js';
import { getProductById, getProductsByCat, PRODUCTS, searchProducts } from './data/products.js';

/* ── App State ──────────────────────────────────────────── */
let cartCount = 0;
let activeNewsFilter = 'all';

// Map category id → display info used by catalog hero
const CATEGORY_META = {
  laptop:      { label: 'Máy tính xách tay', sub: 'Hiệu năng mạnh mẽ, đồng hành mọi hành trình' },
  desktop:     { label: 'Máy tính để bàn',   sub: 'Sức mạnh không giới hạn cho mọi tác vụ' },
  monitor:     { label: 'Màn hình',           sub: 'Hiển thị sắc nét, trải nghiệm đỉnh cao' },
  ram:         { label: 'RAM',                sub: 'Tốc độ vượt trội, đa nhiệm mượt mà' },
  keyboard:    { label: 'Bàn phím',           sub: 'Gõ phím chuyên nghiệp, cảm giác tuyệt vời' },
  mouse:       { label: 'Chuột',              sub: 'Chính xác từng click, gaming & văn phòng' },
  accessories: { label: 'Phụ kiện',           sub: 'Hoàn thiện setup của bạn' },
  other:       { label: 'Thiết bị khác',      sub: 'Khám phá thêm các sản phẩm công nghệ' },
  all:         { label: 'Sản phẩm',           sub: 'Tất cả sản phẩm chính hãng Ondata' },
};

/* ── Toast ──────────────────────────────────────────────── */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast-alert';
  toast.innerHTML = `<span style="color:#7ea835;font-weight:700;">✓</span> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ── Router ─────────────────────────────────────────────── */
function getRoute() {
  // hash format:  #/                          → home
  //               #/san-pham                  → catalog (all)
  //               #/san-pham/laptop           → catalog (category)
  //               #/san-pham/laptop/laptop-pro-15 → product detail
  //               #/tin-tuc                   → news page
  //               #/lien-he                   → contact page
  //               #/ho-tro                    → support hub
  //               #/ho-tro/:sub               → support subpage
  const hash = window.location.hash || '#/';
  if (hash.startsWith('#/san-pham')) {
    const parts = hash.split('/');
    const cat = parts[2] || 'all';
    const id  = parts[3] || null;
    if (id) return { page: 'detail', cat, id };
    return { page: 'catalog', cat };
  }
  if (hash.startsWith('#/tin-tuc')) {
    return { page: 'news' };
  }
  if (hash.startsWith('#/lien-he')) {
    return { page: 'contact' };
  }
  if (hash.startsWith('#/ho-tro')) {
    const parts = hash.split('/');
    const sub = parts[2] || null;
    return { page: 'support', sub };
  }
  return { page: 'home' };
}

function navigate(path) {
  window.location.hash = path;
}

/* ── Page: Home ─────────────────────────────────────────── */
function renderHome() {
  return `
    ${renderHomeHero()}
    ${renderHomeFeatured()}
    ${renderHomePromo()}
    ${renderHomeNews()}
  `;
}

function initHomeInteractions() {
  // Sidebar category links → navigate to catalog
  document.querySelectorAll('.sidebar-item a[data-cat]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(`#/san-pham/${link.dataset.cat}`);
    });
  });

  // "Xem tất cả" links → catalog
  document.querySelectorAll('a[href="#featured-products"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      navigate('#/san-pham/all');
    });
  });

  // Newsletter
  const newsForm = document.getElementById('newsletter-form');
  if (newsForm) {
    newsForm.onsubmit = e => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      if (emailInput?.value) {
        showToast(`Đã đăng ký nhận tin thành công: ${emailInput.value}`);
        emailInput.value = '';
      }
    };
  }

  // Product cards on homepage → navigate to detail page
  document.querySelectorAll('.product-item-card').forEach(card => {
    card.onclick = () => {
      const id  = card.dataset.id;
      const cat = card.dataset.cat;
      if (id && cat) {
        navigate(`#/san-pham/${cat}/${id}`);
      } else {
        navigate('#/san-pham/all');
      }
    };
  });
}

/* ── Page: Product Detail ───────────────────────────── */
function initDetailPageInteractions(product) {
  initProductDetailInteractions(product);

  // Catalog product cards → navigate to detail
  document.querySelectorAll('.catsidebar-link[data-cat]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(`#/san-pham/${link.dataset.cat}`);
    });
  });
}

/* ── Page: Catalog ──────────────────────────────────── */
function renderCatalogPage(cat) {
  const meta = CATEGORY_META[cat] || CATEGORY_META.all;
  return renderProductCatalog(cat, meta);
}

function initCatalogPageInteractions(activeCat) {
  initCatalogInteractions();

  // Sidebar links inside catalog → change category
  document.querySelectorAll('.catsidebar-link[data-cat]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(`#/san-pham/${link.dataset.cat}`);
    });
  });
}

/* ── Shared navbar / shared interactions ────────────────── */
function initSharedInteractions() {
  // Mobile Hamburger
  const hamburger = document.getElementById('nav-hamburger');
  const navMenu   = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.onclick = () => navMenu.classList.toggle('mobile-open');
  }

  // Interactive Product Search
  const searchInput    = document.getElementById('search-input');
  const searchDropdown = document.getElementById('search-dropdown');
  const searchBtn      = document.querySelector('.search-btn');

  if (searchInput && searchDropdown) {
    let currentResults = [];
    let selectedIndex = -1;

    const getCatIcon = cat => {
      switch (cat) {
        case 'laptop':  return '💻';
        case 'monitor': return '📺';
        case 'desktop': return '🖥️';
        case 'ram':     return '💾';
        case 'keyboard':return '⌨️';
        case 'mouse':   return '🖱️';
        default:        return '⚡';
      }
    };

    const getCatName = cat => CATEGORY_META[cat]?.label || 'Sản phẩm';

    const renderDropdown = query => {
      const q = (query || '').trim();
      if (!q) {
        currentResults = PRODUCTS.slice(0, 5);
        selectedIndex = -1;
        searchDropdown.innerHTML = `
          <div class="search-header-label">Sản phẩm gợi ý</div>
          ${currentResults.map((p, idx) => `
            <div class="search-item" data-id="${p.id}" data-cat="${p.cat}" data-idx="${idx}">
              <span class="search-item-icon">${getCatIcon(p.cat)}</span>
              <div class="search-item-details">
                <span class="search-item-name">${p.name}</span>
                <span class="search-item-cat">${p.badge ? `<span class="search-badge">${p.badge}</span>` : ''} ${getCatName(p.cat)}</span>
              </div>
              <span class="search-item-price">Liên hệ</span>
            </div>
          `).join('')}
        `;
      } else {
        currentResults = searchProducts(q);
        selectedIndex = -1;
        if (currentResults.length > 0) {
          searchDropdown.innerHTML = `
            <div class="search-header-label">Tìm thấy ${currentResults.length} sản phẩm</div>
            ${currentResults.map((p, idx) => `
              <div class="search-item" data-id="${p.id}" data-cat="${p.cat}" data-idx="${idx}">
                <span class="search-item-icon">${getCatIcon(p.cat)}</span>
                <div class="search-item-details">
                  <span class="search-item-name">${p.name}</span>
                  <span class="search-item-cat">${p.badge ? `<span class="search-badge">${p.badge}</span>` : ''} ${getCatName(p.cat)}</span>
                </div>
                <span class="search-item-price">Liên hệ</span>
              </div>
            `).join('')}
          `;
        } else {
          searchDropdown.innerHTML = `
            <div class="search-empty">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.4">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <span>Không tìm thấy sản phẩm cho "<strong>${q}</strong>"</span>
            </div>
          `;
        }
      }

      // Click on search item → navigate directly to product detail page
      searchDropdown.querySelectorAll('.search-item').forEach(item => {
        item.addEventListener('mousedown', e => {
          e.preventDefault();
          const id  = item.dataset.id;
          const cat = item.dataset.cat;
          if (id && cat) {
            goToProduct(cat, id);
          }
        });
      });
    };

    const goToProduct = (cat, id) => {
      searchDropdown.classList.remove('show');
      searchInput.blur();
      navigate(`#/san-pham/${cat}/${id}`);
    };

    const executeSearch = () => {
      if (selectedIndex >= 0 && currentResults[selectedIndex]) {
        const p = currentResults[selectedIndex];
        goToProduct(p.cat, p.id);
        return;
      }
      const q = searchInput.value.trim();
      if (!q) {
        if (currentResults.length > 0) {
          goToProduct(currentResults[0].cat, currentResults[0].id);
        }
        return;
      }
      const matches = searchProducts(q);
      if (matches.length > 0) {
        goToProduct(matches[0].cat, matches[0].id);
      } else {
        showToast(`Không tìm thấy sản phẩm phù hợp với "${q}"`);
      }
    };

    searchInput.addEventListener('focus', () => {
      renderDropdown(searchInput.value);
      searchDropdown.classList.add('show');
    });

    searchInput.addEventListener('input', () => {
      renderDropdown(searchInput.value);
      searchDropdown.classList.add('show');
    });

    searchInput.addEventListener('keydown', e => {
      const items = searchDropdown.querySelectorAll('.search-item');
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (items.length > 0) {
          selectedIndex = (selectedIndex + 1) % items.length;
          updateActiveItem(items);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (items.length > 0) {
          selectedIndex = (selectedIndex - 1 + items.length) % items.length;
          updateActiveItem(items);
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        executeSearch();
      } else if (e.key === 'Escape') {
        searchDropdown.classList.remove('show');
      }
    });

    const updateActiveItem = items => {
      items.forEach((it, idx) => {
        it.classList.toggle('search-item--active', idx === selectedIndex);
        if (idx === selectedIndex) {
          it.scrollIntoView({ block: 'nearest' });
        }
      });
    };

    if (searchBtn) {
      searchBtn.addEventListener('click', e => {
        e.preventDefault();
        executeSearch();
      });
    }

    document.addEventListener('click', e => {
      if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target) && !searchBtn?.contains(e.target)) {
        searchDropdown.classList.remove('show');
      }
    });
  }

  // Back-to-top
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (!backToTop) return;
    backToTop.classList.toggle('visible', window.scrollY > 300);
  });
  if (backToTop) backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Navbar: "Trang chủ" link
  const menuHome = document.getElementById('menu-home');
  if (menuHome) {
    menuHome.addEventListener('click', e => {
      e.preventDefault();
      navigate('#/');
    });
  }

  // Navbar: "Sản phẩm" link
  const menuProducts = document.getElementById('menu-products');
  if (menuProducts) {
    menuProducts.addEventListener('click', e => {
      e.preventDefault();
      navigate('#/san-pham/all');
    });
  }

  // Navbar: "Tin tức" link
  const menuNews = document.getElementById('menu-news');
  if (menuNews) {
    menuNews.addEventListener('click', e => {
      e.preventDefault();
      navigate('#/tin-tuc');
    });
  }

  // Navbar: "Liên hệ" link
  const menuContact = document.getElementById('menu-contact');
  if (menuContact) {
    menuContact.addEventListener('click', e => {
      e.preventDefault();
      navigate('#/lien-he');
    });
  }

  // Navbar: "Hỗ trợ" link
  const menuSupport = document.getElementById('menu-support');
  if (menuSupport) {
    menuSupport.addEventListener('click', e => {
      e.preventDefault();
      navigate('#/ho-tro');
    });
  }

  // Cart badge sync
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = cartCount;
}

/* ── Main render ────────────────────────────────────────── */
function renderApp() {
  const app = document.querySelector('#app');
  if (!app) return;

  const route = getRoute();

  const isHome    = route.page === 'home';
  const isCatalog = route.page === 'catalog';
  const isDetail  = route.page === 'detail';
  const isNews    = route.page === 'news';
  const isContact = route.page === 'contact';
  const isSupport = route.page === 'support';

  // Áp dụng đồng nhất nền xanh đen (#0e1012) theo onda.vn cho toàn bộ các trang
  document.body.classList.add('theme-onda-dark');

  let product = null;
  if (isDetail) product = getProductById(route.id);

  app.innerHTML = `
    ${renderNavbar(cartCount, isCatalog || isDetail || isNews || isContact || isSupport)}
    <main id="main-content">
      ${ isHome    ? renderHome()                      : '' }
      ${ isCatalog ? renderCatalogPage(route.cat)      : '' }
      ${ isDetail  ? renderProductDetail(product)      : '' }
      ${ isNews    ? renderNewsPage(activeNewsFilter)  : '' }
      ${ isContact ? renderContactPage()               : '' }
      ${ isSupport ? renderSupportPage(route.sub)      : '' }
    </main>
    ${renderFooter()}
    <button class="back-to-top" id="back-to-top" aria-label="Lên đầu trang">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
  `;

  window.scrollTo({ top: 0 });
  initSharedInteractions();

  if (isHome)    initHomeInteractions();
  if (isCatalog) initCatalogPageInteractions(route.cat);
  if (isDetail)  initDetailPageInteractions(product);
  if (isNews) {
    initNewsPageInteractions(filter => {
      activeNewsFilter = filter;
      renderApp();
    });
  }
  if (isContact) {
    initContactPageInteractions(showToast);
  }
  if (isSupport) {
    initSupportPageInteractions(route.sub, showToast);
  }

  document.getElementById('menu-home')?.classList.toggle('active', isHome);
  document.getElementById('menu-products')?.classList.toggle('active', isCatalog || isDetail);
  document.getElementById('menu-news')?.classList.toggle('active', isNews);
  document.getElementById('menu-contact')?.classList.toggle('active', isContact);
  document.getElementById('menu-support')?.classList.toggle('active', isSupport);
}

/* ── Boot ────────────────────────────────────────────────── */
window.addEventListener('hashchange', renderApp);
renderApp();
