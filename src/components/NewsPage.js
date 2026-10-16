import { NEWS_CATEGORIES, ARTICLES } from '../data/news.js';

/* ── SVG Illustrations for News Thumbnails ──────────── */
function getArticleGraphic(id, isHero = false) {
  if (isHero) {
    return `
      <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" class="news-art-svg" style="width:100%;height:100%;object-fit:cover;display:block;">
        <defs>
          <!-- Room background -->
          <linearGradient id="desk-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#f5f7f6"/>
            <stop offset="60%" stop-color="#e8ede9"/>
            <stop offset="100%" stop-color="#cbd6ce"/>
          </linearGradient>
          <!-- Wooden table top -->
          <linearGradient id="table-wood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#dfaf7c"/>
            <stop offset="30%" stop-color="#d49e68"/>
            <stop offset="70%" stop-color="#e3b687"/>
            <stop offset="100%" stop-color="#cf975f"/>
          </linearGradient>
          <!-- Laptop screen glow -->
          <linearGradient id="scr-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f2615"/>
            <stop offset="40%" stop-color="#1f4b2a"/>
            <stop offset="80%" stop-color="#3c7a3f"/>
            <stop offset="100%" stop-color="#7ea835"/>
          </linearGradient>
        </defs>

        <!-- Background wall with soft bokeh window light -->
        <rect width="900" height="270" fill="url(#desk-bg)"/>
        <circle cx="200" cy="120" r="140" fill="#ffffff" opacity="0.35"/>
        <circle cx="750" cy="90" r="110" fill="#ffffff" opacity="0.25"/>

        <!-- Desk table surface -->
        <polygon points="0,270 900,270 900,420 0,420" fill="url(#table-wood)"/>
        <!-- Desk edge bevel highlight -->
        <line x1="0" y1="271" x2="900" y2="271" stroke="#ffebc9" stroke-width="2.5" opacity="0.8"/>

        <!-- LEFT: Potted Green Succulent Plant -->
        <ellipse cx="200" cy="275" rx="36" ry="9" fill="#000000" opacity="0.18"/>
        <!-- White ceramic pot -->
        <polygon points="172,220 228,220 222,274 178,274" fill="#ffffff" stroke="#d5ddd7" stroke-width="1.5"/>
        <ellipse cx="200" cy="220" rx="28" ry="7" fill="#6d5444"/>
        <!-- Leaves -->
        <path d="M 200 220 Q 185 170 170 150 Q 190 175 200 220" fill="#3c733f"/>
        <path d="M 200 220 Q 200 155 202 135 Q 208 165 200 220" fill="#528e4e"/>
        <path d="M 200 220 Q 215 170 230 155 Q 215 178 200 220" fill="#366b39"/>
        <path d="M 200 220 Q 165 195 150 185 Q 175 205 200 220" fill="#67a957"/>
        <path d="M 200 220 Q 235 195 248 185 Q 225 205 200 220" fill="#67a957"/>

        <!-- Small second pot / cactus -->
        <ellipse cx="280" cy="272" rx="22" ry="6" fill="#000000" opacity="0.14"/>
        <polygon points="262,238 298,238 294,272 266,272" fill="#ffffff" stroke="#d5ddd7" stroke-width="1.2"/>
        <ellipse cx="280" cy="238" rx="18" ry="4.5" fill="#6d5444"/>
        <ellipse cx="280" cy="216" rx="14" ry="24" fill="#4d8b4b"/>

        <!-- RIGHT: Ceramic pen holder with brushes & pencils -->
        <ellipse cx="760" cy="278" rx="38" ry="9" fill="#000000" opacity="0.16"/>
        <polygon points="730,205 790,205 784,276 736,276" fill="#ffffff" stroke="#d5ddd7" stroke-width="1.5"/>
        <ellipse cx="760" cy="205" rx="30" ry="7" fill="#4d5450"/>
        <!-- Pencils sticking out -->
        <line x1="745" y1="205" x2="725" y2="135" stroke="#e09132" stroke-width="5" stroke-linecap="round"/>
        <line x1="760" y1="205" x2="755" y2="120" stroke="#327ce0" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="772" y1="205" x2="785" y2="130" stroke="#527d24" stroke-width="5" stroke-linecap="round"/>
        <line x1="782" y1="205" x2="805" y2="148" stroke="#d64545" stroke-width="4" stroke-linecap="round"/>

        <!-- Coffee mug / water flask -->
        <ellipse cx="630" cy="272" rx="20" ry="6" fill="#000000" opacity="0.14"/>
        <rect x="614" y="165" width="32" height="106" rx="10" fill="#ffffff" stroke="#cad5cd" stroke-width="1.2"/>
        <rect x="622" y="152" width="16" height="14" rx="3" fill="#9ca89f"/>

        <!-- CENTER: LAPTOP ON DESK (Main Focus) -->
        <!-- Shadow -->
        <ellipse cx="480" cy="318" rx="190" ry="14" fill="#000000" opacity="0.25"/>

        <!-- Open Screen Lid -->
        <rect x="315" y="132" width="330" height="210" rx="10" fill="#2d3830" stroke="#9bb1a1" stroke-width="1.5"/>
        <!-- Inner screen bezel -->
        <rect x="323" y="140" width="314" height="194" rx="5" fill="#0b120c"/>
        <!-- Screen display area -->
        <rect x="328" y="145" width="304" height="184" rx="2" fill="url(#scr-glow)"/>
        <!-- Abstract wave on screen -->
        <path d="M 328 260 Q 400 180 480 240 T 632 200 L 632 329 L 328 329 Z" fill="#2e6d37" opacity="0.6"/>
        <path d="M 328 290 Q 420 220 520 270 T 632 240 L 632 329 L 328 329 Z" fill="#7ea835" opacity="0.5"/>
        <text x="480" y="235" text-anchor="middle" font-family="'Outfit',sans-serif" font-weight="800" font-size="20" fill="#ffffff" letter-spacing="4" opacity="0.6">ONDATA</text>

        <!-- Base / Keyboard Deck -->
        <polygon points="275,340 315,302 645,302 685,340" fill="#cfd9d2" stroke="#9bb1a1" stroke-width="1.2"/>
        <polygon points="325,306 635,306 648,333 312,333" fill="#232d26"/>
        <rect x="440" y="334" width="80" height="6" rx="2" fill="#bac8bf"/>
      </svg>
    `;
  }

  // Smaller list thumbnails
  switch (id) {
    case 'meo-tang-tuoi-tho-pin-laptop':
      return `
        <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" class="news-art-svg" style="width:100%;height:100%;object-fit:cover;display:block;">
          <defs>
            <linearGradient id="n-bg-1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#111c14"/>
              <stop offset="100%" stop-color="#1f3823"/>
            </linearGradient>
          </defs>
          <rect width="240" height="150" fill="url(#n-bg-1)"/>
          <!-- Laptop silhouette -->
          <rect x="50" y="30" width="140" height="85" rx="5" fill="#0d140e" stroke="#334d38" stroke-width="1.5"/>
          <rect x="55" y="35" width="130" height="74" rx="2" fill="#050a06"/>
          <polygon points="35,115 50,105 190,105 205,115" fill="#2c3e30"/>
          <!-- Glowing Battery Icon in center of screen -->
          <rect x="95" y="55" width="46" height="24" rx="4" fill="none" stroke="#7ea835" stroke-width="2.2"/>
          <rect x="142" y="62" width="4" height="10" rx="1.5" fill="#7ea835"/>
          <rect x="99" y="59" width="28" height="16" rx="2" fill="#7ea835" opacity="0.85"/>
          <!-- Lightning bolt inside battery -->
          <polygon points="114,61 108,68 113,68 110,75 118,67 113,67" fill="#ffffff"/>
        </svg>
      `;

    case 'xu-huong-man-hinh-2025':
      return `
        <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" class="news-art-svg" style="width:100%;height:100%;object-fit:cover;display:block;">
          <defs>
            <linearGradient id="n-bg-2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#0c1624"/>
              <stop offset="100%" stop-color="#182e44"/>
            </linearGradient>
            <linearGradient id="curved-scr" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#1e3a5f"/>
              <stop offset="50%" stop-color="#38bdf8"/>
              <stop offset="100%" stop-color="#527d24"/>
            </linearGradient>
          </defs>
          <rect width="240" height="150" fill="url(#n-bg-2)"/>
          <!-- Curved monitor screen -->
          <path d="M 40 40 Q 120 28 200 40 L 200 100 Q 120 88 40 100 Z" fill="url(#curved-scr)" stroke="#475569" stroke-width="1.5"/>
          <!-- Monitor stand -->
          <polygon points="112,100 128,100 125,124 115,124" fill="#64748b"/>
          <ellipse cx="120" cy="126" rx="35" ry="6" fill="#334155"/>
          <text x="120" y="68" text-anchor="middle" font-family="'Outfit',sans-serif" font-size="11" font-weight="800" fill="#ffffff" letter-spacing="2">240Hz OLED</text>
        </svg>
      `;

    case 'so-sanh-ram-ddr4-va-ddr5':
      return `
        <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" class="news-art-svg" style="width:100%;height:100%;object-fit:cover;display:block;">
          <defs>
            <linearGradient id="n-bg-3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#101820"/>
              <stop offset="100%" stop-color="#1a2e22"/>
            </linearGradient>
          </defs>
          <rect width="240" height="150" fill="url(#n-bg-3)"/>
          <!-- Dual RAM sticks in perspective -->
          <!-- Stick 1: DDR5 -->
          <rect x="40" y="40" width="160" height="30" rx="3" fill="#18241b" stroke="#7ea835" stroke-width="1.5"/>
          <line x1="45" y1="67" x2="195" y2="67" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="52" y="58" font-family="'Outfit',sans-serif" font-size="10" font-weight="800" fill="#7ea835">DDR5 6400MHz</text>
          
          <!-- Stick 2: DDR4 -->
          <rect x="40" y="82" width="160" height="30" rx="3" fill="#1b2028" stroke="#64748b" stroke-width="1.2"/>
          <line x1="45" y1="109" x2="195" y2="109" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="52" y="100" font-family="'Outfit',sans-serif" font-size="10" font-weight="700" fill="#94a3b8">DDR4 3200MHz</text>
        </svg>
      `;

    default:
      return '';
  }
}

/* ═══════════════════════════════════════════════════════
   MAIN RENDER FUNCTION
   ══════════════════════════════════════════════════════ */
export function renderNewsPage(activeFilter = 'all') {
  const featuredArticle = ARTICLES.find(a => a.featured) || ARTICLES[0];
  const listArticles    = ARTICLES.filter(a => !a.featured);

  // Filter tabs
  const tabsHtml = NEWS_CATEGORIES.map(cat => `
    <button 
      class="news-filter-btn${cat.id === activeFilter ? ' news-filter-btn--active' : ''}" 
      data-filter="${cat.id}"
      id="filter-btn-${cat.id}"
    >
      ${cat.label}
    </button>
  `).join('');

  // Determine which list articles to show based on filter
  const filteredList = activeFilter === 'all'
    ? listArticles
    : listArticles.filter(a => a.category === activeFilter);

  // Determine if hero article matches filter
  const showHero = activeFilter === 'all' || featuredArticle.category === activeFilter;

  // Build list article items
  const listItemsHtml = filteredList.length > 0
    ? filteredList.map(a => `
        <article class="news-list-card" data-article-id="${a.id}" id="news-card-${a.id}">
          <div class="news-list-thumb">
            ${getArticleGraphic(a.id, false)}
          </div>
          <div class="news-list-content">
            <h3 class="news-list-title">${a.title}</h3>
            <div class="news-list-date">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>${a.date}</span>
            </div>
          </div>
          <div class="news-list-badge-wrap">
            <span class="news-badge news-badge--pill">${a.categoryLabel}</span>
          </div>
        </article>
      `).join('')
    : `<div class="news-empty-notice">Không có bài viết trong danh mục này.</div>`;

  return `
    <section class="news-page" id="news-page">
      <div class="news-container">

        <!-- 1. BREADCRUMB -->
        <nav class="catalog-breadcrumb news-breadcrumb" aria-label="Breadcrumb">
          <a href="#/" class="crumb-link" id="news-crumb-home">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Tin tức & Kiến thức</span>
        </nav>

        <!-- 2. PAGE HEADER -->
        <div class="news-header">
          <h1 class="news-main-title">Kiến thức công nghệ</h1>
          <p class="news-main-subtitle">Cập nhật xu hướng, mẹo sử dụng và kinh nghiệm chọn thiết bị.</p>
        </div>

        <!-- 3. CATEGORY FILTER BUTTONS -->
        <div class="news-filter-bar" id="news-filter-bar">
          ${tabsHtml}
        </div>

        <!-- 4. FEATURED HERO ARTICLE (Top Large Card) -->
        ${showHero ? `
          <article class="news-hero-card" data-article-id="${featuredArticle.id}" id="news-hero-article">
            <div class="news-hero-image-wrap">
              ${getArticleGraphic(featuredArticle.id, true)}
            </div>
            <div class="news-hero-footer">
              <div class="news-hero-info">
                <h2 class="news-hero-title">${featuredArticle.title}</h2>
                <div class="news-hero-date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>${featuredArticle.date}</span>
                </div>
              </div>
              <div class="news-hero-badge-wrap">
                <span class="news-badge news-badge--pill">${featuredArticle.categoryLabel}</span>
              </div>
            </div>
          </article>
        ` : ''}

        <!-- 5. ARTICLES STACK LIST (Vertical list cards) -->
        <div class="news-list-stack" id="news-list-stack">
          ${listItemsHtml}
        </div>

      </div>

      <!-- Article Detail Modal -->
      <div class="news-modal" id="news-modal" aria-hidden="true">
        <div class="news-modal-backdrop" id="news-modal-backdrop"></div>
        <div class="news-modal-dialog">
          <button class="news-modal-close" id="news-modal-close" aria-label="Đóng">✕</button>
          <div class="news-modal-body" id="news-modal-body"></div>
        </div>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   INTERACTIONS & EVENT BINDINGS
   ══════════════════════════════════════════════════════ */
export function initNewsPageInteractions(onFilterChange) {
  // Breadcrumb home link
  document.getElementById('news-crumb-home')?.addEventListener('click', e => {
    e.preventDefault();
    window.location.hash = '#/';
  });

  // Filter category buttons
  document.querySelectorAll('.news-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      if (onFilterChange) onFilterChange(filter);
    });
  });

  // Modal setup
  const modal      = document.getElementById('news-modal');
  const modalBody  = document.getElementById('news-modal-body');
  const modalClose = document.getElementById('news-modal-close');
  const backdrop   = document.getElementById('news-modal-backdrop');

  function openArticle(articleId) {
    const article = ARTICLES.find(a => a.id === articleId);
    if (!article || !modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="news-detail-badge">${article.categoryLabel}</div>
      <h2 class="news-detail-title">${article.title}</h2>
      <div class="news-detail-meta">
        <span>📅 ${article.date}</span>
        <span>⏱️ ${article.readTime}</span>
      </div>
      <div class="news-detail-summary">${article.summary}</div>
      <div class="news-detail-content">${article.content}</div>
    `;

    modal.classList.add('news-modal--open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('news-modal--open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);

  // Click on cards to read
  document.querySelectorAll('[data-article-id]').forEach(card => {
    card.addEventListener('click', () => {
      openArticle(card.dataset.articleId);
    });
  });
}
