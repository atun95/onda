export function renderNavbar() {
  return `
    <header class="navbar" id="navbar">
      <div class="nav-container">
        <a href="#" class="nav-logo" id="nav-logo-link">
          <img src="/logo tach nen.png" alt="Ondata Logo" class="logo-img" id="logo-main" />
        </a>
        <nav class="nav-links" id="nav-links">
          <a href="#about" class="nav-link" id="nav-about">Về Chúng Tôi</a>
          <a href="#services" class="nav-link" id="nav-services">Sản Phẩm & Dịch Vụ</a>
          <a href="#why-us" class="nav-link" id="nav-why">Tại Sao Chọn Chúng Tôi</a>
          <a href="#contact" class="nav-link" id="nav-contact">Liên Hệ</a>
          <a href="tel:0867036698" class="nav-cta" id="nav-cta-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 8 8l1-1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            0867 036 698
          </a>
        </nav>
        <button class="nav-hamburger" id="hamburger-btn" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `;
}
