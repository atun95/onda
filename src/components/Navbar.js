export function renderNavbar() {
  return `
    <header class="navbar" id="navbar">
      <div class="nav-container">
        <a href="#" class="nav-logo" id="nav-logo-link" data-page="home">
          <img src="/logo tach nen.png" alt="Ondata Logo" class="logo-img" id="logo-main" />
        </a>
        <div class="nav-search" id="nav-search">
          <input type="text" placeholder="Tìm kiếm sản phẩm, mã, thương hiệu..." id="search-input" />
          <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
        <nav class="nav-links" id="nav-links">
          <a class="nav-link" data-page="home" id="nav-home">Trang chủ</a>
          <a class="nav-link" data-page="products" id="nav-products">Sản phẩm ▾</a>
          <a class="nav-link" data-page="blog" id="nav-blog">Tin tức</a>
          <a class="nav-link" data-page="about" id="nav-about">Về Ondata</a>
          <a class="nav-link" data-page="support" id="nav-support">Hỗ trợ</a>
        </nav>
        <div class="nav-actions" id="nav-actions">
          <a class="nav-action-btn" data-page="account" id="nav-account" title="Tài khoản">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </a>
          <a class="nav-action-btn" data-page="cart" id="nav-cart" title="Giỏ hàng">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span class="badge">3</span>
          </a>
        </div>
        <button class="nav-hamburger" id="hamburger-btn" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `;
}
