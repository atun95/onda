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
import { renderAboutPage, initAboutPageInteractions } from './components/AboutPage.js';
import { renderChatBox, initChatBoxInteractions } from './components/ChatBox.js';
import { getProductById, getProductsByCat, PRODUCTS, searchProducts } from './data/products.js';

/* ── App State ──────────────────────────────────────────── */
let cartCount = 0;
let activeNewsFilter = 'all';

// Map category id → display info used by catalog hero
const CATEGORY_META = {
  aio:         { label: 'Máy tính All-in-one', sub: 'Thiết kế tinh gọn, hiệu năng vượt trội all-in-one' },
  monitor:     { label: 'Màn hình',            sub: 'Hiển thị sắc nét, công nghệ bảo vệ mắt đỉnh cao' },
  keyboard:    { label: 'Bàn phím',            sub: 'Cảm giác gõ êm ái, switch bền bỉ, thiết kế tinh xảo' },
  mouse:       { label: 'Chuột',               sub: 'Độ nhạy chuẩn xác, công thái học vừa vặn lòng bàn tay' },
  ram:         { label: 'RAM',                 sub: 'Tốc độ vượt trội, đa nhiệm bền bỉ' },
  accessories: { label: 'Phụ kiện',            sub: 'Hoàn thiện góc làm việc và trải nghiệm đỉnh cao' },
  laptop:      { label: 'Máy tính All-in-one', sub: 'Thiết kế tinh gọn, hiệu năng vượt trội all-in-one' },
  desktop:     { label: 'Máy tính All-in-one', sub: 'Thiết kế tinh gọn, hiệu năng vượt trội all-in-one' },
  all:         { label: 'Sản phẩm',            sub: 'Tất cả sản phẩm chính hãng Ondata' },
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

/* ── Router (Clean URLs without #) ───────────────────────── */
function getRoute() {
  // Gracefully upgrade legacy hash URLs e.g. #/san-pham to /san-pham
  if (window.location.hash && window.location.hash.startsWith('#/')) {
    const clean = window.location.hash.slice(1);
    window.history.replaceState({}, '', clean);
  }

  let path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path.startsWith('/dist')) {
    path = path.replace(/^\/dist/, '') || '/';
  }

  if (path.startsWith('/san-pham')) {
    const parts = path.split('/').filter(Boolean); // ['san-pham', ...]
    const catOrId = parts[1] || 'all';
    const id = parts[2] || null;

    if (id) {
      return { page: 'detail', cat: catOrId, id };
    }
    if (catOrId !== 'all') {
      const prod = getProductById(catOrId);
      if (prod) {
        return { page: 'detail', cat: prod.cat, id: prod.id };
      }
    }
    return { page: 'catalog', cat: catOrId };
  }

  if (path.startsWith('/ve-ondata') || path.startsWith('/gioi-thieu')) {
    return { page: 'about' };
  }

  if (path.startsWith('/tin-tuc')) {
    return { page: 'news' };
  }

  if (path.startsWith('/lien-he')) {
    return { page: 'contact' };
  }

  if (path.startsWith('/ho-tro')) {
    const parts = path.split('/').filter(Boolean);
    const sub = parts[1] || null;
    return { page: 'support', sub };
  }

  return { page: 'home' };
}

export function navigate(path) {
  const target = path.startsWith('#/') ? path.slice(1) : path;
  if (window.location.pathname !== target) {
    window.history.pushState({}, '', target);
  }
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.navigate = navigate;

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
      navigate(`/san-pham/${link.dataset.cat}`);
    });
  });

  // "Xem tất cả" links → catalog
  document.querySelectorAll('a[href="#featured-products"], a[href="/san-pham/all"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      navigate('/san-pham/all');
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
        navigate(`/san-pham/${cat}/${id}`);
      } else {
        navigate('/san-pham/all');
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
      navigate(`/san-pham/${link.dataset.cat}`);
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
      navigate(`/san-pham/${link.dataset.cat}`);
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
        case 'aio':
        case 'laptop':
        case 'desktop':
          return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>`;
        case 'monitor':
          return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg>`;
        case 'keyboard':
          return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg>`;
        case 'mouse':
          return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg>`;
        case 'ram':
          return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg>`;
        case 'accessories':
        default:
          return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`;
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
      navigate(`/san-pham/${cat}/${id}`);
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
      navigate('/');
    });
  }

  // Navbar: "Về Ondata" link
  const menuAbout = document.getElementById('menu-about');
  if (menuAbout) {
    menuAbout.addEventListener('click', e => {
      e.preventDefault();
      navigate('/ve-ondata');
    });
  }

  // Navbar: "Sản phẩm" link
  const menuProducts = document.getElementById('menu-products');
  if (menuProducts) {
    menuProducts.addEventListener('click', e => {
      e.preventDefault();
      navigate('/san-pham/all');
    });
  }

  // Navbar: "Tin tức" link
  const menuNews = document.getElementById('menu-news');
  if (menuNews) {
    menuNews.addEventListener('click', e => {
      e.preventDefault();
      navigate('/tin-tuc');
    });
  }

  // Navbar: "Liên hệ" link
  const menuContact = document.getElementById('menu-contact');
  if (menuContact) {
    menuContact.addEventListener('click', e => {
      e.preventDefault();
      navigate('/lien-he');
    });
  }

  // Navbar: "Hỗ trợ" link
  const menuSupport = document.getElementById('menu-support');
  if (menuSupport) {
    menuSupport.addEventListener('click', e => {
      e.preventDefault();
      navigate('/ho-tro');
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
  const isAbout   = route.page === 'about';
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
    ${renderNavbar(cartCount, isAbout || isCatalog || isDetail || isNews || isContact || isSupport)}
    <main id="main-content">
      ${ isHome    ? renderHome()                      : '' }
      ${ isAbout   ? renderAboutPage()                 : '' }
      ${ isCatalog ? renderCatalogPage(route.cat)      : '' }
      ${ isDetail  ? renderProductDetail(product)      : '' }
      ${ isNews    ? renderNewsPage(activeNewsFilter)  : '' }
      ${ isContact ? renderContactPage()               : '' }
      ${ isSupport ? renderSupportPage(route.sub)      : '' }
    </main>
    ${renderFooter()}
    ${renderChatBox()}
    <button class="back-to-top" id="back-to-top" aria-label="Lên đầu trang">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
  `;

  window.scrollTo({ top: 0 });
  initSharedInteractions();
  initChatBoxInteractions(showToast);

  if (isHome)    initHomeInteractions();
  if (isAbout)   initAboutPageInteractions();
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
  document.getElementById('menu-about')?.classList.toggle('active', isAbout);
  document.getElementById('menu-products')?.classList.toggle('active', isCatalog || isDetail);
  document.getElementById('menu-news')?.classList.toggle('active', isNews);
  document.getElementById('menu-contact')?.classList.toggle('active', isContact);
  document.getElementById('menu-support')?.classList.toggle('active', isSupport);
}

/* ── Boot ────────────────────────────────────────────────── */
window.addEventListener('popstate', renderApp);
window.addEventListener('hashchange', renderApp);

// Global Link Interceptor for clean SPA navigation
document.addEventListener('click', e => {
  const link = e.target.closest('a');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href) return;

  // Hash-only internal anchors e.g. #promo-banner
  if (href.startsWith('#') && !href.startsWith('#/')) {
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  // Internal clean route paths: /..., /san-pham, /lien-he
  if (href.startsWith('/') && !href.startsWith('//')) {
    e.preventDefault();
    navigate(href);
    return;
  }

  // Legacy hash paths: #/...
  if (href.startsWith('#/')) {
    e.preventDefault();
    navigate(href.slice(1));
    return;
  }
});

renderApp();
