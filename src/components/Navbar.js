export function renderNavbar(cartCount = 0) {
  return `
    <header class="navbar" id="navbar">
      <div class="nav-container">
        <!-- Top Row: Logo, Search Bar, Icons -->
        <div class="nav-top">
          <a href="/" class="nav-logo" id="nav-logo">
            <img src="/logo tach nen.png" alt="ONDATA" class="logo-img" onerror="this.onerror=null; this.src='/logo.png';" />
          </a>

          <div class="nav-search">
            <input 
              type="text" 
              placeholder="Tìm kiếm sản phẩm, mã, thương hiệu..." 
              id="search-input" 
              autocomplete="off"
            />
            <button class="search-btn" aria-label="Tìm kiếm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            <div class="search-dropdown" id="search-dropdown"></div>
          </div>

          <div class="nav-actions">
            <a href="#" class="nav-action-icon" id="btn-account" title="Tài khoản">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </a>
            <a href="#" class="nav-action-icon" id="btn-wishlist" title="Yêu thích">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
            </a>
            <a href="/lien-he" class="nav-quote-pill" id="btn-nav-quote" title="Liên hệ báo giá">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Báo giá</span>
            </a>
            <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        <!-- Subrow Menu: Trang chủ, Về Ondata, Sản phẩm, Khuyến mãi, Tin tức, Liên hệ, Hỗ trợ -->
        <nav class="nav-menu" id="nav-menu">
          <a href="/" class="nav-menu-link active" id="menu-home">Trang chủ</a>
          <a href="/ve-ondata" class="nav-menu-link" id="menu-about">Về Ondata</a>
          <div class="nav-dropdown-wrap">
            <a href="/san-pham/all" class="nav-menu-link" id="menu-products">
              Sản phẩm
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav-dropdown-menu">
              <a href="/san-pham/aio" class="nav-dropdown-item">
                <span class="ndi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg></span>
                <span>Máy tính All-in-one</span>
              </a>
              <a href="/san-pham/monitor" class="nav-dropdown-item">
                <span class="ndi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg></span>
                <span>Màn hình</span>
              </a>
              <a href="/san-pham/keyboard" class="nav-dropdown-item">
                <span class="ndi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg></span>
                <span>Bàn phím</span>
              </a>
              <a href="/san-pham/mouse" class="nav-dropdown-item">
                <span class="ndi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg></span>
                <span>Chuột</span>
              </a>
              <a href="/san-pham/ram" class="nav-dropdown-item">
                <span class="ndi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg></span>
                <span>RAM</span>
              </a>
              <a href="/san-pham/accessories" class="nav-dropdown-item">
                <span class="ndi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span>
                <span>Phụ kiện</span>
              </a>
            </div>
          </div>
          <a href="#promo-banner" class="nav-menu-link" id="menu-promo">Khuyến mãi</a>
          <a href="/tin-tuc" class="nav-menu-link" id="menu-news">Tin tức</a>
          <a href="/lien-he" class="nav-menu-link" id="menu-contact">Liên hệ</a>
          <a href="/ho-tro" class="nav-menu-link" id="menu-support">Hỗ trợ</a>
        </nav>
      </div>
    </header>
  `;
}
