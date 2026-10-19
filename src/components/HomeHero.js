export function renderHomeHero() {
  return `
    <section class="home-top-section">
      <div class="container">
        <div class="home-top-grid">
          <!-- Sidebar: Danh mục sản phẩm -->
          <aside class="sidebar-categories" id="sidebar-categories">
            <div class="sidebar-header">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <span>Danh mục sản phẩm</span>
            </div>
            <ul class="sidebar-menu">
              <li class="sidebar-item" data-cat="aio">
                <a href="#" data-cat="aio">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>
                  </span>
                  <span>Máy tính All-in-one</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="monitor">
                <a href="#" data-cat="monitor">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg>
                  </span>
                  <span>Màn hình</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="keyboard">
                <a href="#" data-cat="keyboard">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg>
                  </span>
                  <span>Bàn phím</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="mouse">
                <a href="#" data-cat="mouse">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg>
                  </span>
                  <span>Chuột</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="ram">
                <a href="#" data-cat="ram">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg>
                  </span>
                  <span>RAM</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="accessories">
                <a href="#" data-cat="accessories">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </span>
                  <span>Phụ kiện</span>
                </a>
              </li>
            </ul>
          </aside>

          <!-- Banner Lớn: Hiệu năng vượt trội Cho mọi nhu cầu -->
          <div class="main-hero-banner">
            <div class="banner-content">
              <div class="banner-logo-badge">
                <span class="banner-brand">ONDATA</span>
              </div>
              <h1 class="banner-title">
                Hiệu năng vượt trội<br/>
                Cho mọi nhu cầu
              </h1>
              <p class="banner-subtitle">
                Máy tính - Màn hình - Linh kiện - Phụ kiện chính hãng
              </p>
              <a href="#featured-products" class="btn-banner-cta">
                Khám phá ngay
              </a>
            </div>

            <!-- Laptop Illustration on Right -->
            <div class="banner-visual">
              <div class="laptop-illustration">
                <div class="laptop-display">
                  <div class="display-inner">
                    <div class="display-glow"></div>
                    <span class="display-text">ONDATA</span>
                  </div>
                </div>
                <div class="laptop-base">
                  <div class="laptop-notch"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 Thẻ Cam Kết / Lợi Ích Dịch Vụ -->
        <div class="assurance-bar">
          <div class="assurance-item">
            <div class="assurance-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div class="assurance-info">
              <h4>Hàng chính hãng</h4>
              <p>100%</p>
            </div>
          </div>

          <div class="assurance-item">
            <div class="assurance-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <div class="assurance-info">
              <h4>Bảo hành chính hãng</h4>
              <p>Tận tâm</p>
            </div>
          </div>

          <div class="assurance-item">
            <div class="assurance-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <div class="assurance-info">
              <h4>Giao hàng toàn quốc</h4>
              <p>Nhanh chóng</p>
            </div>
          </div>

          <div class="assurance-item">
            <div class="assurance-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
            </div>
            <div class="assurance-info">
              <h4>Hỗ trợ kỹ thuật</h4>
              <p>Chuyên nghiệp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
