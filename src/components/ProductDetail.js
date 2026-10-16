import { formatPrice } from '../data/products.js';

/* ── Spec icon SVGs ──────────────────────────────────── */
function specIcon(type) {
  const icons = {
    cpu:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>`,
    ram:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="8" width="20" height="8" rx="1"/><path d="M6 8V6M10 8V6M14 8V6M18 8V6M6 16v2M10 16v2M14 16v2M18 16v2"/></svg>`,
    hdd:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="12" rx="10" ry="6"/><path d="M2 12v4c0 3.31 4.48 6 10 6s10-2.69 10-6v-4"/><path d="M15 10h.01"/></svg>`,
    monitor: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>`,
    gpu:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 7V5M10 7V5M18 7V5M14 7V5M6 17v2M10 17v2M18 17v2M14 17v2"/></svg>`,
    shield:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  };
  return icons[type] || icons.shield;
}

/* ── Star rating SVG renderer ────────────────────────── */
function renderStars(rating) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.4;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) {
      html += `<svg class="star-icon star-full" width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    } else if (i === full && hasHalf) {
      html += `
        <svg class="star-icon star-half" width="16" height="16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stop-color="#f59e0b"/>
              <stop offset="50%" stop-color="#e5e7eb"/>
            </linearGradient>
          </defs>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half-star)"/>
        </svg>`;
    } else {
      html += `<svg class="star-icon star-empty" width="16" height="16" viewBox="0 0 24 24" fill="#e5e7eb" stroke="#d1d5db"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    }
  }
  return html;
}

/* ── Realistic Product Views (5 angles) ──────────────── */
export function getProductViewSVG(viewIndex = 0, productName = 'Laptop Ondata Pro 15') {
  switch (viewIndex) {
    case 0: // Front open view with green wave display
      return `
        <svg viewBox="0 0 540 380" xmlns="http://www.w3.org/2000/svg" class="pd-hero-svg">
          <defs>
            <!-- Screen wallpaper: Ondata elegant green wave -->
            <linearGradient id="wp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#07130a"/>
              <stop offset="35%" stop-color="#14341b"/>
              <stop offset="70%" stop-color="#2d6a36"/>
              <stop offset="100%" stop-color="#82b037"/>
            </linearGradient>
            <radialGradient id="screen-glare" cx="20%" cy="20%" r="80%">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.18"/>
              <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
            </radialGradient>
            <!-- Aluminum chassis gradients -->
            <linearGradient id="alu-lid" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="0%" stop-color="#e6ece8"/>
              <stop offset="100%" stop-color="#cfd8d2"/>
            </linearGradient>
            <linearGradient id="alu-base" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="0%" stop-color="#dfe6e1"/>
              <stop offset="40%" stop-color="#cad4ce"/>
              <stop offset="100%" stop-color="#b6c2ba"/>
            </linearGradient>
            <!-- Drop shadow -->
            <radialGradient id="desk-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#000000" stop-opacity="0.28"/>
              <stop offset="70%" stop-color="#000000" stop-opacity="0.08"/>
              <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
            </radialGradient>
          </defs>

          <!-- Ground shadow -->
          <ellipse cx="270" cy="354" rx="220" ry="14" fill="url(#desk-shadow)"/>

          <!-- 1. Screen Lid Backing -->
          <rect x="74" y="24" width="392" height="260" rx="14" fill="url(#alu-lid)" stroke="#9cb0a2" stroke-width="1.2"/>

          <!-- 2. Screen Bezel -->
          <rect x="83" y="33" width="374" height="242" rx="6" fill="#0d1410"/>

          <!-- Webcam dot & sensor -->
          <circle cx="270" cy="40" r="2.5" fill="#1b2e21"/>
          <circle cx="270" cy="40" r="1.2" fill="#58a065"/>
          <circle cx="282" cy="40" r="1" fill="#2b4733"/>

          <!-- 3. Screen Display Area -->
          <rect x="88" y="47" width="364" height="222" rx="2" fill="url(#wp-grad)"/>

          <!-- Wallpaper abstract silk waves -->
          <path d="M 88 200 Q 180 100 270 190 T 452 140 L 452 269 L 88 269 Z" fill="#204c27" opacity="0.6"/>
          <path d="M 88 170 Q 200 70 300 160 T 452 110 L 452 269 L 88 269 Z" fill="#2e6d37" opacity="0.5"/>
          <path d="M 88 220 Q 190 140 280 210 T 452 170 L 452 269 L 88 269 Z" fill="#498d4a" opacity="0.45"/>
          <path d="M 120 269 Q 220 180 340 240 T 452 210 L 452 269 Z" fill="#7ea835" opacity="0.55"/>
          <path d="M 180 269 Q 270 210 370 260 L 452 269 Z" fill="#a4d44b" opacity="0.4"/>

          <!-- Subtle Ondata brand watermark on screen -->
          <text x="270" y="165" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="800" font-size="28" fill="#ffffff" letter-spacing="8" opacity="0.42">ONDATA</text>

          <!-- Screen glare reflection -->
          <rect x="88" y="47" width="364" height="222" rx="2" fill="url(#screen-glare)"/>

          <!-- Bottom bezel logo -->
          <text x="270" y="272" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="7.5" fill="#697a6f" letter-spacing="2">ONDATA</text>

          <!-- 4. Hinge -->
          <rect x="180" y="282" width="180" height="7" rx="2" fill="#58675d"/>

          <!-- 5. Base Chassis / Keyboard deck -->
          <path d="M 38 335 L 74 286 L 466 286 L 502 335 Q 508 343 496 345 L 44 345 Q 32 343 38 335 Z" fill="url(#alu-base)" stroke="#a1b3a7" stroke-width="1.2"/>

          <!-- Chamfered front edge highlight -->
          <line x1="44" y1="344" x2="496" y2="344" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
          <!-- Front lip notch for easy opening -->
          <rect x="245" y="342" width="50" height="3" rx="1.5" fill="#88988e"/>

          <!-- Keyboard well (perspective) -->
          <polygon points="106,292 434,292 448,328 92,328" fill="#243028" stroke="#3b4d40" stroke-width="0.8"/>
          <!-- Key grid lines suggestion -->
          <line x1="120" y1="300" x2="420" y2="300" stroke="#3d4e42" stroke-width="0.8"/>
          <line x1="114" y1="310" x2="426" y2="310" stroke="#3d4e42" stroke-width="0.8"/>
          <line x1="108" y1="320" x2="432" y2="320" stroke="#3d4e42" stroke-width="0.8"/>

          <!-- Trackpad -->
          <rect x="225" y="330" width="90" height="12" rx="2" fill="#bac5be" stroke="#8d9d92" stroke-width="0.8"/>
        </svg>`;

    case 1: // Angled 3/4 perspective view
      return `
        <svg viewBox="0 0 540 380" xmlns="http://www.w3.org/2000/svg" class="pd-hero-svg">
          <defs>
            <radialGradient id="desk-shadow-ang" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#000000" stop-opacity="0.25"/>
              <stop offset="80%" stop-color="#000000" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="wp-grad-ang" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#0a1a0f"/>
              <stop offset="50%" stop-color="#24592d"/>
              <stop offset="100%" stop-color="#7ea835"/>
            </linearGradient>
          </defs>
          <ellipse cx="270" cy="345" rx="220" ry="16" fill="url(#desk-shadow-ang)"/>
          
          <!-- Angled screen lid -->
          <polygon points="120,40 380,20 440,240 180,270" fill="#d4ddd6" stroke="#9bb0a2" stroke-width="1.2"/>
          <polygon points="132,48 372,30 428,232 188,258" fill="#0d1410"/>
          <polygon points="140,56 364,38 418,224 196,248" fill="url(#wp-grad-ang)"/>
          <text x="290" y="150" font-family="'Outfit',sans-serif" font-weight="800" font-size="22" fill="#fff" opacity="0.4" transform="rotate(-4 290 150)">ONDATA PRO</text>

          <!-- Base perspective -->
          <polygon points="180,270 440,240 500,290 210,340" fill="#c3cdc5" stroke="#90a296" stroke-width="1.2"/>
          <polygon points="70,320 210,340 500,290 380,265" fill="#e2eae4" stroke="#a0b3a7" stroke-width="1.2"/>
          
          <!-- Keyboard deck angle -->
          <polygon points="190,278 410,252 460,285 240,318" fill="#222d26"/>
          <!-- Trackpad -->
          <polygon points="160,322 230,328 220,336 150,330" fill="#cbd5ce" stroke="#899a8f"/>
        </svg>`;

    case 2: // Closed lid top view
      return `
        <svg viewBox="0 0 540 380" xmlns="http://www.w3.org/2000/svg" class="pd-hero-svg">
          <defs>
            <radialGradient id="desk-shadow-top" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#000000" stop-opacity="0.22"/>
              <stop offset="80%" stop-color="#000000" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="lid-brushed" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#eaf0eb"/>
              <stop offset="45%" stop-color="#d6e0d9"/>
              <stop offset="55%" stop-color="#ced8d1"/>
              <stop offset="100%" stop-color="#bcc8bf"/>
            </linearGradient>
          </defs>
          <ellipse cx="270" cy="330" rx="200" ry="14" fill="url(#desk-shadow-top)"/>

          <!-- Laptop Lid -->
          <rect x="90" y="55" width="360" height="250" rx="14" fill="url(#lid-brushed)" stroke="#9cb0a2" stroke-width="1.5"/>
          <!-- Brushed metal highlights -->
          <line x1="90" y1="80" x2="450" y2="80" stroke="#ffffff" stroke-width="1" opacity="0.4"/>
          <line x1="90" y1="280" x2="450" y2="280" stroke="#000000" stroke-width="0.8" opacity="0.1"/>

          <!-- Centered Premium Ondata Metallic Emblem -->
          <circle cx="270" cy="180" r="38" fill="#c4d0c7" stroke="#7ea835" stroke-width="1.8"/>
          <text x="270" y="186" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="14" fill="#527d24" letter-spacing="4">ONDATA</text>
        </svg>`;

    case 3: // Side profile showing ultra-thin wedge and ports
      return `
        <svg viewBox="0 0 540 380" xmlns="http://www.w3.org/2000/svg" class="pd-hero-svg">
          <defs>
            <radialGradient id="shadow-side" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#000000" stop-opacity="0.2"/>
              <stop offset="80%" stop-color="#000000" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <ellipse cx="270" cy="265" rx="230" ry="12" fill="url(#shadow-side)"/>

          <!-- Open side profile triangle/wedge -->
          <!-- Screen side -->
          <polygon points="120,70 128,70 210,240 202,240" fill="#aab8ae" stroke="#89998e" stroke-width="1"/>
          <!-- Display glare line -->
          <line x1="128" y1="74" x2="204" y2="236" stroke="#7ea835" stroke-width="2.5"/>

          <!-- Base body side -->
          <polygon points="195,240 450,244 470,256 190,256" fill="#cad5cd" stroke="#8e9e93" stroke-width="1.2"/>
          
          <!-- Ports cutout -->
          <!-- USB-C -->
          <rect x="230" y="247" width="16" height="5" rx="2" fill="#2d3731"/>
          <!-- USB-C #2 -->
          <rect x="255" y="247" width="16" height="5" rx="2" fill="#2d3731"/>
          <!-- Audio 3.5mm jack -->
          <circle cx="290" cy="249.5" r="3.2" fill="#2d3731"/>
          <!-- LED power indicator -->
          <circle cx="310" cy="249.5" r="2" fill="#7ea835"/>

          <text x="270" y="310" text-anchor="middle" font-family="'Outfit',sans-serif" font-weight="600" font-size="13" fill="#64748b">Thiết kế mỏng nhẹ 17.9 mm – Đầy đủ cổng kết nối Thunderbolt 4 & USB-C</text>
        </svg>`;

    case 4: // Keyboard workspace detail
      return `
        <svg viewBox="0 0 540 380" xmlns="http://www.w3.org/2000/svg" class="pd-hero-svg">
          <defs>
            <linearGradient id="kb-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1e2821"/>
              <stop offset="100%" stop-color="#141c16"/>
            </linearGradient>
          </defs>
          <!-- Surface -->
          <rect x="50" y="40" width="440" height="300" rx="12" fill="#dbe3dd" stroke="#a3b4a8" stroke-width="1.5"/>

          <!-- Keyboard Well -->
          <rect x="80" y="60" width="380" height="180" rx="6" fill="#202922" stroke="#37453a" stroke-width="1"/>

          <!-- Keys rows representation -->
          ${[0,1,2,3,4].map(r => `
            <g transform="translate(90, ${70 + r * 32})">
              ${[0,1,2,3,4,5,6,7,8,9,10,11].map(c => `
                <rect x="${c * 30}" y="0" width="26" height="24" rx="3.5" fill="url(#kb-grad)" stroke="#3f5244" stroke-width="0.8"/>
              `).join('')}
            </g>
          `).join('')}

          <!-- Large trackpad -->
          <rect x="180" y="255" width="180" height="72" rx="6" fill="#c7d2cb" stroke="#8d9d93" stroke-width="1.2"/>
          <text x="270" y="295" text-anchor="middle" font-family="'Outfit',sans-serif" font-size="11" fill="#78887e" font-weight="600">Precision Touchpad</text>
        </svg>`;

    default:
      return '';
  }
}

/* ── Thumbnail SVG generator ─────────────────────────── */
function renderThumbnail(idx, active = false) {
  const titles = ['Chính diện', 'Góc nghiêng', 'Mặt lưng', 'Cạnh bên', 'Bàn phím'];
  return `
    <button class="pd-thumb-btn${active ? ' pd-thumb-btn--active' : ''}" data-thumb="${idx}" aria-label="${titles[idx]}">
      <div class="pd-thumb-mini-preview">
        ${getProductViewSVG(idx)}
      </div>
      <span class="pd-thumb-caption">${titles[idx]}</span>
    </button>
  `;
}

/* ═══════════════════════════════════════════════════════
   MAIN RENDER FUNCTION
   ══════════════════════════════════════════════════════ */
export function renderProductDetail(product) {
  if (!product) {
    return `
      <section class="pd-page">
        <div class="pd-container">
          <div class="pd-not-found">
            <h2>Sản phẩm không tồn tại</h2>
            <p>Vui lòng kiểm tra lại đường dẫn hoặc quay lại danh mục sản phẩm.</p>
            <a href="#/san-pham/all" class="pd-btn-back">← Quay lại danh mục</a>
          </div>
        </div>
      </section>
    `;
  }

  const priceStr    = formatPrice(product.price);
  const oldPriceStr = product.oldPrice ? formatPrice(product.oldPrice) : '';
  const discount    = product.discount || (product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0);

  // Specs item rows
  const specsHtml = (product.specs || []).map(s => `
    <li class="pd-spec-item">
      <span class="pd-spec-icon">${specIcon(s.icon)}</span>
      <span class="pd-spec-label">${s.label}:</span>
      <span class="pd-spec-val">${s.value}</span>
    </li>
  `).join('');

  // Tech Specs table
  const techSpecsHtml = Object.entries(product.techSpecs || {}).map(([k, v]) => `
    <tr class="pd-ts-row">
      <td class="pd-ts-key">${k}</td>
      <td class="pd-ts-val">${v}</td>
    </tr>
  `).join('');

  // Feature bullets with green checkmarks
  const featuresHtml = (product.features || []).map(f => `
    <li class="pd-feature-item">
      <span class="pd-check-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
      <span class="pd-feature-text">${f}</span>
    </li>
  `).join('');

  // 5 Thumbnails
  const thumbsHtml = [0, 1, 2, 3, 4].map(i => renderThumbnail(i, i === 0)).join('');

  return `
    <section class="pd-page" id="pd-page">
      <div class="pd-container">

        <!-- 1. BREADCRUMB -->
        <nav class="catalog-breadcrumb pd-breadcrumb" aria-label="Breadcrumb">
          <a href="#/" class="crumb-link" id="pd-crumb-home">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="#/san-pham/${product.cat}" class="crumb-link" id="pd-crumb-cat">Sản phẩm</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">${product.name}</span>
        </nav>

        <!-- 2. MAIN PRODUCT CARD: GALLERY + INFO -->
        <div class="pd-card">
          <div class="pd-layout-grid">

            <!-- LEFT: GALLERY -->
            <div class="pd-gallery-col">
              <div class="pd-hero-preview-box" id="pd-hero-preview-box">
                <div class="pd-hero-art" id="pd-hero-art">
                  ${getProductViewSVG(0, product.name)}
                </div>
              </div>

              <!-- Thumbnails carousel row -->
              <div class="pd-thumbs-bar" id="pd-thumbs-bar">
                ${thumbsHtml}
              </div>
            </div>

            <!-- RIGHT: INFO & ACTIONS -->
            <div class="pd-info-col">
              <h1 class="pd-title" id="pd-title">${product.name}</h1>

              <!-- Rating row -->
              <div class="pd-rating-row">
                <div class="pd-stars-wrap">
                  ${renderStars(product.stars || 4.5)}
                </div>
                <span class="pd-rating-count">(${product.reviews || 24} đánh giá)</span>
                ${product.badge ? `<span class="pd-top-badge">${product.badge}</span>` : ''}
              </div>

              <!-- Price section: Liên hệ -->
              <div class="pd-pricing-box">
                <span class="pd-price" id="pd-price">Liên hệ</span>
              </div>

              <!-- Key Specs List with Grey Icons -->
              <ul class="pd-specs-list">
                ${specsHtml}
              </ul>

              <!-- Actions: Liên hệ báo giá & Hotline (k bán lẻ) -->
              <div class="pd-actions-group">
                <a href="#/lien-he" class="pd-btn-quote" id="pd-btn-quote">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Liên hệ báo giá</span>
                </a>

                <a href="tel:18001234" class="pd-btn-hotline" id="pd-btn-hotline">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Hotline: 1800 1234</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        <!-- 3. TRUST / SERVICE BADGES BAR (3 Columns) -->
        <div class="pd-trust-bar">
          <div class="pd-trust-item">
            <div class="pd-trust-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="1.8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <div class="pd-trust-text">
              <h4 class="pd-trust-title">Miễn phí giao hàng toàn quốc</h4>
              <p class="pd-trust-sub">Cho đơn hàng từ 1.000.000đ</p>
            </div>
          </div>

          <div class="pd-trust-item">
            <div class="pd-trust-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="1.8">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="pd-trust-text">
              <h4 class="pd-trust-title">Hỗ trợ kỹ thuật 24/7</h4>
              <p class="pd-trust-sub">Tư vấn miễn phí</p>
            </div>
          </div>

          <div class="pd-trust-item">
            <div class="pd-trust-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="1.8">
                <path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/>
                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
                <polyline points="9 8 11 10 15 6"/>
              </svg>
            </div>
            <div class="pd-trust-text">
              <h4 class="pd-trust-title">Bảo hành chính hãng 24 tháng</h4>
              <p class="pd-trust-sub">Đổi mới trong 7 ngày</p>
            </div>
          </div>
        </div>

        <!-- 4. PRODUCT TABS (Chi tiết / Thông số / Đánh giá) -->
        <div class="pd-tabs-section">
          <!-- Tab headers -->
          <div class="pd-tabs-nav" role="tablist">
            <button class="pd-tab-btn pd-tab-btn--active" id="pd-tab-desc" data-tab="desc" role="tab" aria-selected="true">
              Thông tin chi tiết
            </button>
            <button class="pd-tab-btn" id="pd-tab-tech" data-tab="tech" role="tab" aria-selected="false">
              Thông số kỹ thuật
            </button>
            <button class="pd-tab-btn" id="pd-tab-reviews" data-tab="reviews" role="tab" aria-selected="false">
              Đánh giá (${product.reviews || 24})
            </button>
          </div>

          <!-- Tab Content Container -->
          <div class="pd-tab-card">

            <!-- Tab 1: Description -->
            <div class="pd-panel" id="pd-panel-desc" role="tabpanel">
              <p class="pd-lead-desc">${product.desc}</p>
              <ul class="pd-features-list">
                ${featuresHtml}
              </ul>

              <div class="pd-editorial-block">
                <h3 class="pd-editorial-title">Đặc điểm nổi bật của ${product.name}</h3>
                <p>Được hoàn thiện với tiêu chuẩn khắt khe, ${product.name} đem lại sự cân bằng hoàn hảo giữa hiệu suất làm việc ấn tượng, độ bền chuẩn doanh nghiệp và khả năng tản nhiệt tối ưu cho người dùng Việt Nam.</p>
              </div>
            </div>

            <!-- Tab 2: Tech Specs -->
            <div class="pd-panel pd-panel--hidden" id="pd-panel-tech" role="tabpanel">
              <table class="pd-tech-table">
                <tbody>
                  ${techSpecsHtml}
                </tbody>
              </table>
            </div>

            <!-- Tab 3: Reviews -->
            <div class="pd-panel pd-panel--hidden" id="pd-panel-reviews" role="tabpanel">
              <div class="pd-reviews-summary">
                <div class="pd-score-box">
                  <div class="pd-big-score">${product.stars || 4.5}</div>
                  <div class="pd-stars-wrap">${renderStars(product.stars || 4.5)}</div>
                  <span class="pd-score-sub">${product.reviews || 24} đánh giá từ khách hàng</span>
                </div>

                <div class="pd-breakdown-box">
                  <div class="pd-bar-row">
                    <span>5 sao</span>
                    <div class="pd-bar-track"><div class="pd-bar-fill" style="width: 80%"></div></div>
                    <span>80%</span>
                  </div>
                  <div class="pd-bar-row">
                    <span>4 sao</span>
                    <div class="pd-bar-track"><div class="pd-bar-fill" style="width: 15%"></div></div>
                    <span>15%</span>
                  </div>
                  <div class="pd-bar-row">
                    <span>3 sao</span>
                    <div class="pd-bar-track"><div class="pd-bar-fill" style="width: 5%"></div></div>
                    <span>5%</span>
                  </div>
                  <div class="pd-bar-row">
                    <span>2 sao</span>
                    <div class="pd-bar-track"><div class="pd-bar-fill" style="width: 0%"></div></div>
                    <span>0%</span>
                  </div>
                  <div class="pd-bar-row">
                    <span>1 sao</span>
                    <div class="pd-bar-track"><div class="pd-bar-fill" style="width: 0%"></div></div>
                    <span>0%</span>
                  </div>
                </div>
              </div>

              <!-- Sample Reviews List -->
              <div class="pd-reviews-list">
                <div class="pd-review-card">
                  <div class="pd-review-header">
                    <div class="pd-user-avatar">NL</div>
                    <div>
                      <strong class="pd-user-name">Nguyễn Văn Long</strong>
                      <div class="pd-user-meta">
                        <span class="pd-verified">✓ Đã mua hàng tại Ondata</span>
                        <span class="pd-date">• 2 tuần trước</span>
                      </div>
                    </div>
                  </div>
                  <div class="pd-stars-wrap">${renderStars(5)}</div>
                  <p class="pd-review-comment">Máy chạy rất êm và mát, mở chục tab Chrome và code visual studio không hề bị giật lag. Màn hình màu sắc đẹp, pin dùng được tầm 8 tiếng văn phòng. Đáng giá từng đồng!</p>
                </div>

                <div class="pd-review-card">
                  <div class="pd-review-header">
                    <div class="pd-user-avatar" style="background:#527d24;">TH</div>
                    <div>
                      <strong class="pd-user-name">Trần Minh Hoàng</strong>
                      <div class="pd-user-meta">
                        <span class="pd-verified">✓ Đã mua hàng tại Ondata</span>
                        <span class="pd-date">• 1 tháng trước</span>
                      </div>
                    </div>
                  </div>
                  <div class="pd-stars-wrap">${renderStars(5)}</div>
                  <p class="pd-review-comment">Giao hàng cực kỳ nhanh, đóng gói cẩn thận có xốp chống sốc dày. Máy nhẹ hơn tưởng tượng, bàn phím gõ nảy và êm tay. Nhân viên tư vấn kỹ càng.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   INTERACTIONS & EVENT BINDINGS
   ══════════════════════════════════════════════════════ */
export function initProductDetailInteractions(product, onAddToCart) {
  if (!product) return;

  /* ── Gallery Thumbnail Switching ── */
  const thumbBtns = document.querySelectorAll('.pd-thumb-btn');
  const heroArt   = document.getElementById('pd-hero-art');

  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.thumb, 10);
      thumbBtns.forEach(b => b.classList.remove('pd-thumb-btn--active'));
      btn.classList.add('pd-thumb-btn--active');

      if (heroArt) {
        heroArt.style.opacity = '0';
        heroArt.style.transform = 'scale(0.96)';
        setTimeout(() => {
          heroArt.innerHTML = getProductViewSVG(idx, product.name);
          heroArt.style.opacity = '1';
          heroArt.style.transform = 'scale(1)';
        }, 160);
      }
    });
  });

  /* ── Quantity Controls ── */
  const qtyInput = document.getElementById('pd-qty-input');
  const minusBtn = document.getElementById('pd-qty-minus');
  const plusBtn  = document.getElementById('pd-qty-plus');

  if (qtyInput && minusBtn && plusBtn) {
    minusBtn.addEventListener('click', () => {
      let v = parseInt(qtyInput.value, 10) || 1;
      if (v > 1) qtyInput.value = v - 1;
    });

    plusBtn.addEventListener('click', () => {
      let v = parseInt(qtyInput.value, 10) || 1;
      if (v < 99) qtyInput.value = v + 1;
    });

    qtyInput.addEventListener('change', () => {
      let v = parseInt(qtyInput.value, 10) || 1;
      if (v < 1) v = 1;
      if (v > 99) v = 99;
      qtyInput.value = v;
    });
  }

  /* ── Add to Cart ── */
  const cartBtn = document.getElementById('pd-btn-cart');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      const qty = parseInt(qtyInput?.value, 10) || 1;
      if (onAddToCart) onAddToCart(product, qty);

      const origText = cartBtn.innerHTML;
      cartBtn.classList.add('pd-btn-cart--added');
      cartBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>Đã thêm vào giỏ!</span>
      `;
      setTimeout(() => {
        cartBtn.classList.remove('pd-btn-cart--added');
        cartBtn.innerHTML = origText;
      }, 2000);
    });
  }

  /* ── Buy Now ── */
  const buyBtn = document.getElementById('pd-btn-buy');
  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      const qty = parseInt(qtyInput?.value, 10) || 1;
      if (onAddToCart) onAddToCart(product, qty);
    });
  }

  /* ── Tabs Switching ── */
  const tabBtns = document.querySelectorAll('.pd-tab-btn');
  const panels  = document.querySelectorAll('.pd-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('pd-tab-btn--active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('pd-tab-btn--active');
      btn.setAttribute('aria-selected', 'true');

      const target = btn.dataset.tab;
      panels.forEach(p => {
        const isMatch = p.id === `pd-panel-${target}`;
        p.classList.toggle('pd-panel--hidden', !isMatch);
      });
    });
  });

  /* ── Breadcrumb Routing ── */
  document.getElementById('pd-crumb-home')?.addEventListener('click', e => {
    e.preventDefault();
    window.location.hash = '#/';
  });

  document.getElementById('pd-crumb-cat')?.addEventListener('click', e => {
    e.preventDefault();
    window.location.hash = `#/san-pham/${product.cat}`;
  });
}
