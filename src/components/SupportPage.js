/* ============================================================
   SUPPORT PAGE COMPONENT (MATCHING USER MOCKUP)
   Main Support Hub + 5 Detail Subpages:
   1. Chính sách bảo hành & đổi trả
   2. Hỗ trợ kỹ thuật
   3. Tra cứu đơn hàng
   4. Liên hệ hỗ trợ
   5. Chính sách bảo mật
   ============================================================ */

/* ── SVG Graphics for Support Cards & Detail Banners ─────── */
function supportGraphic(type) {
  switch (type) {
    case 'hero':
      return `
        <svg viewBox="0 0 540 320" xmlns="http://www.w3.org/2000/svg" class="sp-hero-svg" style="width:100%;height:100%;object-fit:cover;display:block;">
          <defs>
            <linearGradient id="sp-room" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#18241b"/>
              <stop offset="60%" stop-color="#111a14"/>
              <stop offset="100%" stop-color="#0a0f0c"/>
            </linearGradient>
            <linearGradient id="sp-table" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1e2d22"/>
              <stop offset="100%" stop-color="#121b14"/>
            </linearGradient>
            <linearGradient id="sp-scr" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#142c19"/>
              <stop offset="60%" stop-color="#2a5f36"/>
              <stop offset="100%" stop-color="#8a9b4e"/>
            </linearGradient>
            <radialGradient id="sun-window" cx="20%" cy="20%" r="80%">
              <stop offset="0%" stop-color="#8a9b4e" stop-opacity="0.15"/>
              <stop offset="60%" stop-color="#8a9b4e" stop-opacity="0.04"/>
              <stop offset="100%" stop-color="#8a9b4e" stop-opacity="0"/>
            </radialGradient>
          </defs>

          <!-- Ambient Room Background -->
          <rect width="540" height="320" fill="url(#sp-room)"/>
          <rect width="540" height="320" fill="url(#sun-window)"/>

          <!-- Plant in background -->
          <ellipse cx="110" cy="190" rx="20" ry="5" fill="#000" opacity="0.3"/>
          <polygon points="96,140 124,140 120,188 100,188" fill="#18261c" stroke="#2e4233" stroke-width="1.2"/>
          <path d="M 110 140 Q 95 90 80 80 Q 100 100 110 140" fill="#3b7240"/>
          <path d="M 110 140 Q 115 80 125 70 Q 120 105 110 140" fill="#528e4e"/>
          <path d="M 110 140 Q 130 100 145 95 Q 125 115 110 140" fill="#67a957"/>

          <!-- Table Surface -->
          <polygon points="0,185 540,185 540,320 0,320" fill="url(#sp-table)"/>
          <line x1="0" y1="185" x2="540" y2="185" stroke="rgba(138, 155, 78, 0.25)" stroke-width="1.5"/>

          <!-- Modern Laptop in Perspective -->
          <ellipse cx="320" cy="275" rx="170" ry="14" fill="#000000" opacity="0.4"/>

          <!-- Screen Lid -->
          <polygon points="210,80 430,70 455,225 235,240" fill="#1b241e" stroke="#3d5243" stroke-width="1.2"/>
          <polygon points="216,86 424,76 448,220 240,234" fill="#0b120c"/>
          <polygon points="220,90 420,80 442,214 242,228" fill="url(#sp-scr)"/>

          <text x="330" y="155" text-anchor="middle" font-family="'Outfit',sans-serif" font-weight="800" font-size="18" fill="#ffffff" letter-spacing="3" opacity="0.8" transform="rotate(-2 330 155)">ONDATA</text>

          <!-- Base Keyboard Deck -->
          <polygon points="170,250 235,240 455,225 510,250" fill="#d2ded5" stroke="#9bb1a1" stroke-width="1.2"/>
          <polygon points="160,252 505,252 485,270 175,270" fill="#bac8be"/>
          <polygon points="220,242 450,230 460,248 210,250" fill="#243026"/>
        </svg>
      `;

    case 'shield-banner':
      return `
        <svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
          <defs>
            <linearGradient id="bg-sh" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#14281a"/>
              <stop offset="50%" stop-color="#24502d"/>
              <stop offset="100%" stop-color="#468848"/>
            </linearGradient>
            <radialGradient id="gl-sh" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#7ea835" stop-opacity="0.6"/>
              <stop offset="100%" stop-color="#7ea835" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="500" height="160" fill="url(#bg-sh)"/>
          <ellipse cx="250" cy="80" rx="120" ry="60" fill="url(#gl-sh)"/>
          <!-- Big Shield Icon -->
          <path d="M 250 40 Q 275 40 285 55 Q 285 95 250 120 Q 215 95 215 55 Q 225 40 250 40 Z" fill="none" stroke="#ffffff" stroke-width="4.5"/>
          <polyline points="236,78 246,88 266,66" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;

    case 'tech-banner':
      return `
        <svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
          <defs>
            <linearGradient id="bg-tc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0f1f18"/>
              <stop offset="60%" stop-color="#1c3e27"/>
              <stop offset="100%" stop-color="#2d6438"/>
            </linearGradient>
          </defs>
          <rect width="500" height="160" fill="url(#bg-tc)"/>
          <!-- Circuit Lines -->
          <line x1="40" y1="40" x2="200" y2="40" stroke="#7ea835" stroke-width="1.5" opacity="0.3"/>
          <line x1="200" y1="40" x2="230" y2="70" stroke="#7ea835" stroke-width="1.5" opacity="0.3"/>
          <circle cx="40" cy="40" r="4" fill="#7ea835" opacity="0.5"/>
          <circle cx="230" cy="70" r="4" fill="#7ea835" opacity="0.5"/>
          <!-- Wrench Tool -->
          <g transform="translate(225, 45)">
            <path d="M 38 12 C 34 8 28 8 24 10 L 18 16 L 34 32 L 40 26 C 42 22 42 16 38 12 Z M 14 20 L 4 30 C 1 33 1 37 4 40 C 7 43 11 43 14 40 L 24 30 Z" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round"/>
          </g>
        </svg>
      `;

    case 'track-banner':
      return `
        <svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
          <defs>
            <linearGradient id="bg-tr" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1c2d20"/>
              <stop offset="50%" stop-color="#2a4730"/>
              <stop offset="100%" stop-color="#3d6c44"/>
            </linearGradient>
          </defs>
          <rect width="500" height="160" fill="url(#bg-tr)"/>
          <!-- Isometric Cardboard Package Box -->
          <g transform="translate(220, 40)">
            <polygon points="30,10 60,25 30,40 0,25" fill="#e2c199" stroke="#b5936d" stroke-width="1.5"/>
            <polygon points="0,25 30,40 30,75 0,60" fill="#cca378" stroke="#b5936d" stroke-width="1.5"/>
            <polygon points="60,25 30,40 30,75 60,60" fill="#ba9267" stroke="#b5936d" stroke-width="1.5"/>
            <!-- Ondata tape on box -->
            <polygon points="24,13 36,19 36,43 24,37" fill="#7ea835" opacity="0.8"/>
          </g>
        </svg>
      `;

    case 'contact-banner':
      return `
        <svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
          <defs>
            <linearGradient id="bg-ct" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#152b1b"/>
              <stop offset="50%" stop-color="#244d2d"/>
              <stop offset="100%" stop-color="#417947"/>
            </linearGradient>
          </defs>
          <rect width="500" height="160" fill="url(#bg-ct)"/>
          <!-- Headset Support Icon -->
          <g transform="translate(215, 38)">
            <path d="M 12 40 A 28 28 0 0 1 58 40" fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round"/>
            <rect x="6" y="36" width="10" height="22" rx="4" fill="#ffffff"/>
            <rect x="54" y="36" width="10" height="22" rx="4" fill="#ffffff"/>
            <path d="M 60 52 Q 62 68 45 70" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
            <circle cx="42" cy="70" r="3.5" fill="#7ea835"/>
          </g>
        </svg>
      `;

    case 'privacy-banner':
      return `
        <svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
          <defs>
            <linearGradient id="bg-pr" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0e1f2b"/>
              <stop offset="50%" stop-color="#163942"/>
              <stop offset="100%" stop-color="#235c55"/>
            </linearGradient>
            <radialGradient id="gl-pr" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.4"/>
              <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="500" height="160" fill="url(#bg-pr)"/>
          <ellipse cx="250" cy="80" rx="100" ry="50" fill="url(#gl-pr)"/>
          <!-- Security Lock Graphic -->
          <g transform="translate(225, 42)">
            <rect x="10" y="30" width="34" height="30" rx="4" fill="#ffffff"/>
            <path d="M 17 30 L 17 18 A 10 10 0 0 1 37 18 L 37 30" fill="none" stroke="#ffffff" stroke-width="3.5"/>
            <circle cx="27" cy="43" r="3.5" fill="#163942"/>
            <line x1="27" y1="46" x2="27" y2="52" stroke="#163942" stroke-width="2.5"/>
          </g>
        </svg>
      `;

    default:
      return '';
  }
}

/* ═══════════════════════════════════════════════════════
   1. MAIN SUPPORT HUB VIEW (#/ho-tro)
   ══════════════════════════════════════════════════════ */
export function renderMainSupportHub() {
  const cards = [
    {
      id: 'bao-hanh',
      title: 'Chính sách bảo hành<br>& đổi trả',
      desc: 'Thông tin chi tiết về điều kiện, quy trình bảo hành và đổi trả sản phẩm.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
    },
    {
      id: 'ky-thuat',
      title: 'Hỗ trợ kỹ thuật',
      desc: 'Hướng dẫn sử dụng, cài đặt, khắc phục sự cố và các yêu cầu hỗ trợ kỹ thuật.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    },
    {
      id: 'tra-cuu',
      title: 'Tra cứu đơn hàng',
      desc: 'Kiểm tra trạng thái đơn hàng và thông tin giao hàng nhanh chóng.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    },
    {
      id: 'lien-he',
      title: 'Liên hệ hỗ trợ',
      desc: 'Hotline, Zalo, Email và biểu mẫu liên hệ với đội ngũ hỗ trợ.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    },
    {
      id: 'bao-mat',
      title: 'Chính sách bảo mật',
      desc: 'Cam kết bảo vệ thông tin cá nhân của khách hàng.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    },
  ];

  const cardsHtml = cards.map(c => `
    <div class="sp-card" data-sub="${c.id}" id="sp-card-${c.id}">
      <div class="sp-card-icon-wrap">
        ${c.icon}
      </div>
      <h3 class="sp-card-title">${c.title}</h3>
      <p class="sp-card-desc">${c.desc}</p>
      <div class="sp-card-btn-wrap">
        <button class="sp-card-circle-btn" aria-label="Xem chi tiết ${c.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
  `).join('');

  return `
    <section class="sp-page" id="sp-page">
      <div class="sp-container">

        <!-- 1. BREADCRUMB -->
        <nav class="catalog-breadcrumb sp-breadcrumb" aria-label="Breadcrumb">
          <a href="#/" class="crumb-link" id="sp-crumb-home">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Hỗ trợ</span>
        </nav>

        <!-- 2. HERO SECTION (Split Left Text, Right Sunlit Laptop) -->
        <div class="sp-hero-card">
          <div class="sp-hero-left">
            <h1 class="sp-hero-title">Hỗ trợ khách hàng</h1>
            <p class="sp-hero-subtitle">
              Chúng tôi luôn sẵn sàng đồng hành, giải đáp mọi thắc mắc và hỗ trợ bạn trong suốt quá trình sử dụng sản phẩm.
            </p>
          </div>
          <div class="sp-hero-right">
            ${supportGraphic('hero')}
          </div>
        </div>

        <!-- 3. FIVE SUPPORT CARDS GRID -->
        <div class="sp-cards-grid">
          ${cardsHtml}
        </div>

      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   2. DETAIL SUBPAGE 1: CHÍNH SÁCH BẢO HÀNH & ĐỔI TRẢ
   ══════════════════════════════════════════════════════ */
export function renderSubBaoHanh() {
  return `
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
        <!-- Breadcrumb -->
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="#/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="#/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Chính sách bảo hành & đổi trả</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Chính sách bảo hành & đổi trả</h1>
          <p class="sp-sub-desc">Đảm bảo quyền lợi của bạn với chính sách minh bạch, rõ ràng và thuận tiện.</p>
        </div>

        <!-- Graphic Banner -->
        <div class="sp-sub-banner">
          ${supportGraphic('shield-banner')}
        </div>

        <!-- Tabs Toggle -->
        <div class="sp-tab-toggle-bar">
          <button class="sp-tab-pill sp-tab-pill--active" id="btn-tab-warranty" data-tab="warranty">Bảo hành</button>
          <button class="sp-tab-pill" id="btn-tab-exchange" data-tab="exchange">Đổi trả</button>
        </div>

        <!-- Tab 1: Bảo hành -->
        <div class="sp-tab-panel" id="panel-warranty">
          <div class="sp-block">
            <h2 class="sp-block-title">1. Điều kiện bảo hành</h2>
            <ul class="sp-checklist">
              <li><span class="sp-check">✓</span> Sản phẩm còn trong thời hạn bảo hành chính hãng (12 - 36 tháng).</li>
              <li><span class="sp-check">✓</span> Có tem bảo hành nguyên vẹn, phiếu bảo hành hoặc hóa đơn mua hàng.</li>
              <li><span class="sp-check">✓</span> Lỗi phần cứng do nhà sản xuất, không phải do va đập, ngấm nước hoặc tác động bên ngoài.</li>
            </ul>
          </div>

          <div class="sp-block">
            <h2 class="sp-block-title">2. Quy trình bảo hành</h2>
            <div class="sp-steps-list">
              <div class="sp-step-item">
                <span class="sp-step-num">1</span>
                <div>
                  <strong>Liên hệ trung tâm bảo hành hoặc hotline</strong>
                  <p>Gọi 1800 1234 hoặc nhắn Zalo hỗ trợ để được nhân viên tiếp nhận và tư vấn.</p>
                </div>
              </div>
              <div class="sp-step-item">
                <span class="sp-step-num">2</span>
                <div>
                  <strong>Cung cấp thông tin sản phẩm và mô tả lỗi</strong>
                  <p>Cung cấp mã số Serial/IMEI và triệu chứng lỗi để kỹ thuật viên chuẩn bị linh kiện.</p>
                </div>
              </div>
              <div class="sp-step-item">
                <span class="sp-step-num">3</span>
                <div>
                  <strong>Nhận hướng dẫn xử lý hoặc gửi máy</strong>
                  <p>Gửi sản phẩm miễn phí qua bưu điện hoặc mang trực tiếp tới trạm bảo hành gần nhất.</p>
                </div>
              </div>
              <div class="sp-step-item">
                <span class="sp-step-num">4</span>
                <div>
                  <strong>Kiểm tra, sửa chữa và bàn giao</strong>
                  <p>Bàn giao sản phẩm hoạt động hoàn hảo trong vòng 3 - 7 ngày làm việc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 2: Đổi trả (hidden by default) -->
        <div class="sp-tab-panel sp-tab-panel--hidden" id="panel-exchange">
          <div class="sp-block">
            <h2 class="sp-block-title">1. Điều kiện đổi trả</h2>
            <ul class="sp-checklist">
              <li><span class="sp-check">✓</span> Đổi mới 1 - 1 trong vòng 7 ngày đầu nếu phát sinh lỗi từ nhà sản xuất.</li>
              <li><span class="sp-check">✓</span> Sản phẩm còn nguyên hộp, đầy đủ phụ kiện và quà tặng kèm theo.</li>
              <li><span class="sp-check">✓</span> Vỏ máy không bị trầy xước, cấn móp hay biến dạng vật lý.</li>
            </ul>
          </div>
          <div class="sp-block">
            <h2 class="sp-block-title">2. Quy trình đổi trả nhanh</h2>
            <div class="sp-steps-list">
              <div class="sp-step-item">
                <span class="sp-step-num">1</span>
                <div><strong>Kiểm tra xác nhận lỗi:</strong> Kỹ thuật viên kiểm tra máy tại chỗ trong 15 phút.</div>
              </div>
              <div class="sp-step-item">
                <span class="sp-step-num">2</span>
                <div><strong>Xuất đổi máy mới:</strong> Cấp ngay sản phẩm mới nguyên seal cùng mẫu hoặc hoàn tiền 100%.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Note Box -->
        <div class="sp-notice-box">
          <span class="sp-notice-icon">💡</span>
          <div>
            <strong>Lưu ý:</strong> Vui lòng xem chi tiết điều kiện bảo hành và đổi trả trong phiếu bảo hành đi kèm sản phẩm hoặc liên hệ hotline để được hướng dẫn chi tiết.
          </div>
        </div>

        <div class="sp-back-wrap">
          <a href="#/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   3. DETAIL SUBPAGE 2: HỖ TRỢ KỸ THUẬT
   ══════════════════════════════════════════════════════ */
export function renderSubKyThuat() {
  const topics = [
    {
      title: 'Hướng dẫn sử dụng sản phẩm',
      sub: 'Tài liệu hướng dẫn, video minh họa',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    },
    {
      title: 'Cài đặt phần mềm & driver',
      sub: 'Tải driver, phần mềm cần thiết',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    },
    {
      title: 'Khắc phục sự cố thường gặp',
      sub: 'Các lỗi phổ biến và cách xử lý',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    },
    {
      title: 'Gửi yêu cầu hỗ trợ',
      sub: 'Điền biểu mẫu để được hỗ trợ trực tiếp',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    },
  ];

  return `
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="#/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="#/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Hỗ trợ kỹ thuật</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Hỗ trợ kỹ thuật</h1>
          <p class="sp-sub-desc">Hướng dẫn sử dụng, cài đặt và giải quyết sự cố một cách nhanh chóng.</p>
        </div>

        <div class="sp-sub-banner">
          ${supportGraphic('tech-banner')}
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">Các hỗ trợ nổi bật</h2>
          <div class="sp-topics-list">
            ${topics.map(t => `
              <div class="sp-topic-card" style="cursor:pointer;">
                <div class="sp-topic-icon">${t.icon}</div>
                <div class="sp-topic-info">
                  <strong>${t.title}</strong>
                  <span>${t.sub}</span>
                </div>
                <div class="sp-topic-arrow">›</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Urgent Support Box -->
        <div class="sp-urgent-box">
          <div class="sp-urgent-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div class="sp-urgent-info">
            <strong>Cần hỗ trợ gấp?</strong>
            <span>Liên hệ hotline <strong>1800 1234</strong> (8:00 - 22:00, tất cả các ngày)</span>
          </div>
        </div>

        <div class="sp-back-wrap">
          <a href="#/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   4. DETAIL SUBPAGE 3: TRA CỨU ĐƠN HÀNG
   ══════════════════════════════════════════════════════ */
export function renderSubTraCuu() {
  return `
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="#/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="#/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Tra cứu đơn hàng</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Tra cứu đơn hàng</h1>
          <p class="sp-sub-desc">Nhập mã đơn hàng hoặc số điện thoại để kiểm tra trạng thái đơn hàng của bạn.</p>
        </div>

        <div class="sp-sub-banner">
          ${supportGraphic('track-banner')}
        </div>

        <!-- Tracking Search Form -->
        <div class="sp-track-form-box">
          <div class="sp-track-input-wrap">
            <input 
              type="text" 
              class="sp-track-input" 
              id="track-input" 
              placeholder="Nhập mã đơn hàng hoặc số điện thoại..."
              value="OND123456"
            />
            <button class="sp-track-btn" id="btn-track-submit">Tra cứu</button>
          </div>

          <!-- Live Result Box -->
          <div class="sp-track-result" id="track-result" style="display:block;">
            <div class="sp-result-header">
              <div>
                <span class="sp-order-id">Mã đơn: <strong>OND123456</strong></span>
                <span class="sp-order-status">Đang vận chuyển</span>
              </div>
              <span class="sp-order-date">Cập nhật: 15/10/2026 14:30</span>
            </div>
            <div class="sp-timeline">
              <div class="sp-tl-step sp-tl-step--done">
                <div class="sp-tl-dot">✓</div>
                <span>Đã đặt hàng</span>
              </div>
              <div class="sp-tl-step sp-tl-step--done">
                <div class="sp-tl-dot">✓</div>
                <span>Đã đóng gói</span>
              </div>
              <div class="sp-tl-step sp-tl-step--active">
                <div class="sp-tl-dot">🚚</div>
                <span>Đang giao hàng</span>
              </div>
              <div class="sp-tl-step">
                <div class="sp-tl-dot">4</div>
                <span>Hoàn tất</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Instructions -->
        <div class="sp-block">
          <h2 class="sp-block-title">Hướng dẫn tra cứu</h2>
          <div class="sp-steps-list">
            <div class="sp-step-item">
              <span class="sp-step-num">1</span>
              <div>Nhập mã đơn hàng bạn đã nhận qua SMS hoặc email xác nhận mua hàng.</div>
            </div>
            <div class="sp-step-item">
              <span class="sp-step-num">2</span>
              <div>Nhấn "Tra cứu" để xem trạng thái đơn hàng và tiến độ giao hàng theo thời gian thực.</div>
            </div>
            <div class="sp-step-item">
              <span class="sp-step-num">3</span>
              <div>Nếu cần hỗ trợ thay đổi địa chỉ hoặc hẹn giờ giao, vui lòng liên hệ hotline hoặc Zalo.</div>
            </div>
          </div>
        </div>

        <div class="sp-notice-box">
          <span class="sp-notice-icon">💡</span>
          <div>
            <strong>Lưu ý:</strong> Mã đơn hàng có định dạng chuẩn: <strong>OND123456</strong> (Ví dụ: OND123456).
          </div>
        </div>

        <div class="sp-back-wrap">
          <a href="#/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   5. DETAIL SUBPAGE 4: LIÊN HỆ HỖ TRỢ
   ══════════════════════════════════════════════════════ */
export function renderSubLienHe() {
  return `
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="#/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="#/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Liên hệ hỗ trợ</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Liên hệ hỗ trợ</h1>
          <p class="sp-sub-desc">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn một cách nhanh chóng nhất.</p>
        </div>

        <div class="sp-sub-banner">
          ${supportGraphic('contact-banner')}
        </div>

        <!-- Channels Grid -->
        <div class="sp-contact-grid">
          <div class="sp-ch-item">
            <div class="sp-ch-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <strong>Hotline</strong>
              <div class="sp-ch-val" style="color:#527d24;font-weight:800;font-size:1.1rem;">1800 1234</div>
              <small>8:00 - 22:00 (Tất cả các ngày)</small>
            </div>
          </div>

          <div class="sp-ch-item">
            <div class="sp-ch-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div>
              <strong>Zalo</strong>
              <div class="sp-ch-val">@OndataSupport</div>
              <small>Hỗ trợ trực tuyến nhanh chóng</small>
            </div>
          </div>

          <div class="sp-ch-item">
            <div class="sp-ch-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <strong>Email</strong>
              <div class="sp-ch-val">support@ondata.vn</div>
              <small>Phản hồi trong 24 giờ</small>
            </div>
          </div>

          <div class="sp-ch-item">
            <div class="sp-ch-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <strong>Địa chỉ</strong>
              <div class="sp-ch-val">Số 10 Nguyễn Văn Cừ,</div>
              <small>Long Biên, Hà Nội</small>
            </div>
          </div>
        </div>

        <!-- Quick Form -->
        <div class="sp-form-card">
          <h2 class="sp-block-title">Gửi yêu cầu hỗ trợ</h2>
          <p class="sp-form-sub">Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.</p>

          <form id="sp-quick-form" class="sp-quick-form">
            <input type="text" placeholder="Họ và tên của bạn..." required class="sp-input"/>
            <input type="tel" placeholder="Số điện thoại liên hệ..." required class="sp-input"/>
            <textarea placeholder="Mô tả yêu cầu cần hỗ trợ..." rows="3" required class="sp-textarea"></textarea>
            <button type="submit" class="sp-submit-btn">Gửi yêu cầu</button>
          </form>
        </div>

        <div class="sp-back-wrap">
          <a href="#/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   6. DETAIL SUBPAGE 5: CHÍNH SÁCH BẢO MẬT
   ══════════════════════════════════════════════════════ */
export function renderSubBaoMat() {
  return `
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="#/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="#/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Chính sách bảo mật</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Chính sách bảo mật</h1>
          <p class="sp-sub-desc">Bảo vệ thông tin cá nhân của bạn là ưu tiên hàng đầu của Ondata.</p>
        </div>

        <div class="sp-sub-banner">
          ${supportGraphic('privacy-banner')}
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">1. Thông tin chúng tôi thu thập</h2>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> Họ tên, số điện thoại, địa chỉ email.</li>
            <li><span class="sp-check">✓</span> Địa chỉ giao hàng và nhận bảo hành.</li>
            <li><span class="sp-check">✓</span> Thông tin giao dịch thanh toán (mã giao dịch, thời gian).</li>
          </ul>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">2. Mục đích sử dụng</h2>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> Xử lý đơn hàng, đóng gói và vận chuyển sản phẩm đến tay khách hàng.</li>
            <li><span class="sp-check">✓</span> Hỗ trợ bảo hành, bảo trì định kỳ và chăm sóc khách hàng sau bán.</li>
            <li><span class="sp-check">✓</span> Cải thiện chất lượng dịch vụ và gửi thông báo chương trình ưu đãi độc quyền.</li>
          </ul>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">3. Bảo mật thông tin</h2>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> Áp dụng công nghệ mã hóa SSL 256-bit hiện đại.</li>
            <li><span class="sp-check">✓</span> Tuyệt đối không chia sẻ hoặc bán dữ liệu khách hàng cho bên thứ ba.</li>
          </ul>
        </div>

        <div class="sp-notice-box">
          <span class="sp-notice-icon">🔒</span>
          <div>
            <strong>Cam kết:</strong> Ondata cam kết bảo vệ thông tin cá nhân của bạn theo đúng quy định pháp luật hiện hành và tiêu chuẩn an toàn thông tin quốc tế.
          </div>
        </div>

        <div class="sp-back-wrap">
          <a href="#/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   7. MAIN RENDER ROUTER FOR SUPPORT
   ══════════════════════════════════════════════════════ */
export function renderSupportPage(subRoute = null) {
  switch (subRoute) {
    case 'bao-hanh': return renderSubBaoHanh();
    case 'ky-thuat': return renderSubKyThuat();
    case 'tra-cuu':  return renderSubTraCuu();
    case 'lien-he':  return renderSubLienHe();
    case 'bao-mat':  return renderSubBaoMat();
    default:         return renderMainSupportHub();
  }
}

/* ═══════════════════════════════════════════════════════
   8. INTERACTIONS
   ══════════════════════════════════════════════════════ */
export function initSupportPageInteractions(subRoute = null, showToast) {
  // Breadcrumb home link
  document.getElementById('sp-crumb-home')?.addEventListener('click', e => {
    e.preventDefault();
    window.location.hash = '#/';
  });

  // Main hub cards click -> navigate to subroute
  document.querySelectorAll('.sp-card[data-sub]').forEach(card => {
    card.addEventListener('click', () => {
      const sub = card.dataset.sub;
      if (sub) window.location.hash = `#/ho-tro/${sub}`;
    });
  });

  // Subpage 1: Tab toggling (Bảo hành vs Đổi trả)
  const btnWarranty = document.getElementById('btn-tab-warranty');
  const btnExchange = document.getElementById('btn-tab-exchange');
  const panelWarranty = document.getElementById('panel-warranty');
  const panelExchange = document.getElementById('panel-exchange');

  if (btnWarranty && btnExchange && panelWarranty && panelExchange) {
    btnWarranty.addEventListener('click', () => {
      btnWarranty.classList.add('sp-tab-pill--active');
      btnExchange.classList.remove('sp-tab-pill--active');
      panelWarranty.classList.remove('sp-tab-panel--hidden');
      panelExchange.classList.add('sp-tab-panel--hidden');
    });

    btnExchange.addEventListener('click', () => {
      btnExchange.classList.add('sp-tab-pill--active');
      btnWarranty.classList.remove('sp-tab-pill--active');
      panelExchange.classList.remove('sp-tab-panel--hidden');
      panelWarranty.classList.add('sp-tab-panel--hidden');
    });
  }

  // Subpage 3: Order tracking button
  const trackBtn   = document.getElementById('btn-track-submit');
  const trackInput = document.getElementById('track-input');
  const trackResult= document.getElementById('track-result');

  if (trackBtn && trackInput && trackResult) {
    trackBtn.addEventListener('click', () => {
      const val = trackInput.value.trim();
      if (!val) {
        if (showToast) showToast('Vui lòng nhập mã đơn hàng hoặc số điện thoại!');
        return;
      }
      trackResult.style.display = 'block';
      if (showToast) showToast(`Đã tìm thấy thông tin đơn hàng: ${val}`);
    });
  }

  // Subpage 4: Quick form submit
  const quickForm = document.getElementById('sp-quick-form');
  if (quickForm) {
    quickForm.addEventListener('submit', e => {
      e.preventDefault();
      if (showToast) showToast('Cảm ơn bạn! Yêu cầu hỗ trợ đã được gửi thành công.');
      quickForm.reset();
    });
  }
}
