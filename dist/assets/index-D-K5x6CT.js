(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function v(n=0){return`
    <header class="navbar" id="navbar">
      <div class="nav-container">
        <!-- Top Row: Logo, Search Bar, Icons -->
        <div class="nav-top">
          <a href="#" class="nav-logo" id="nav-logo">
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
            <div class="search-dropdown" id="search-dropdown">
              <div class="search-item">💻 Laptop Ondata Pro 15</div>
              <div class="search-item">📺 Màn hình Ondata 27" Curved</div>
              <div class="search-item">🖥️ Máy tính để bàn Ondata Master</div>
              <div class="search-item">💾 RAM DDR5 16GB 5600MHz</div>
            </div>
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
            <a href="#" class="nav-action-icon" id="btn-cart" title="Giỏ hàng">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span class="cart-badge" id="cart-badge">${n}</span>
            </a>
            <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        <!-- Subrow Menu: Trang chủ, Sản phẩm, Khuyến mãi, Tin tức, Về Ondata, Hỗ trợ -->
        <nav class="nav-menu" id="nav-menu">
          <a href="#" class="nav-menu-link active" id="menu-home">Trang chủ</a>
          <div class="nav-dropdown-wrap">
            <a href="#featured-products" class="nav-menu-link" id="menu-products">
              Sản phẩm
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
          </div>
          <a href="#promo-banner" class="nav-menu-link" id="menu-promo">Khuyến mãi</a>
          <a href="#news" class="nav-menu-link" id="menu-news">Tin tức</a>
          <a href="#footer" class="nav-menu-link" id="menu-about">Về Ondata</a>
          <a href="#footer" class="nav-menu-link" id="menu-support">Hỗ trợ</a>
        </nav>
      </div>
    </header>
  `}function p(){return`
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
              <li class="sidebar-item" data-cat="laptop">
                <a href="#featured-products">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="12" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
                  </span>
                  <span>Máy tính xách tay</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="desktop">
                <a href="#featured-products">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  </span>
                  <span>Máy tính để bàn</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="monitor">
                <a href="#featured-products">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>
                  </span>
                  <span>Màn hình</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="ram">
                <a href="#featured-products">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="1"/><line x1="6" y1="17" x2="6" y2="19"/><line x1="10" y1="17" x2="10" y2="19"/><line x1="14" y1="17" x2="14" y2="19"/><line x1="18" y1="17" x2="18" y2="19"/></svg>
                  </span>
                  <span>RAM</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="keyboard">
                <a href="#featured-products">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6.01" y2="8"/><line x1="10" y1="8" x2="10.01" y2="8"/><line x1="14" y1="8" x2="14.01" y2="8"/><line x1="18" y1="8" x2="18.01" y2="8"/><line x1="6" y1="12" x2="6.01" y2="12"/><line x1="10" y1="12" x2="10.01" y2="12"/><line x1="14" y1="12" x2="14.01" y2="12"/><line x1="18" y1="12" x2="18.01" y2="12"/><line x1="7" y1="16" x2="17" y2="16"/></svg>
                  </span>
                  <span>Bàn phím</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="mouse">
                <a href="#featured-products">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="7"/><line x1="12" y1="6" x2="12" y2="10"/></svg>
                  </span>
                  <span>Chuột</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="accessory">
                <a href="#featured-products">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                  </span>
                  <span>Phụ kiện</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="other">
                <a href="#featured-products">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                  </span>
                  <span>Thiết bị khác</span>
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
  `}function u(){return`
    <section class="home-featured-section" id="featured-products">
      <div class="container">
        <div class="section-top-bar">
          <h2 class="section-heading">Sản phẩm nổi bật</h2>
          <a href="#featured-products" class="see-all-link">
            Xem tất cả
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </div>

        <div class="featured-grid">
          <!-- Card 1: Laptop Ondata Pro 15 -->
          <div class="product-item-card">
            <span class="badge-tag">Bán chạy</span>
            <div class="product-thumb-container">
              <div class="tech-device-render">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="3" y="4" width="18" height="12" rx="2"/>
                  <line x1="2" y1="20" x2="22" y2="20"/>
                </svg>
                <span class="device-label">Laptop Ondata Pro</span>
              </div>
            </div>
            <div class="product-info-box">
              <h3 class="product-name">Laptop Ondata Pro 15</h3>
              <div class="product-pricing">
                <span class="current-price">15.990.000đ</span>
                <span class="old-price">17.890.000đ</span>
              </div>
              <div class="product-stars-row">
                <span class="stars-gold">★★★★★</span>
                <span class="reviews-count">(24)</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Màn hình Ondata 27" -->
          <div class="product-item-card">
            <div class="product-thumb-container">
              <div class="tech-device-render">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <polyline points="8 21 12 17 16 21"/>
                </svg>
                <span class="device-label">Màn hình Ondata 27"</span>
              </div>
            </div>
            <div class="product-info-box">
              <h3 class="product-name">Màn hình Ondata 27"</h3>
              <div class="product-pricing">
                <span class="current-price">7.990.000đ</span>
              </div>
              <div class="product-stars-row">
                <span class="stars-gold">★★★★★</span>
                <span class="reviews-count">(18)</span>
              </div>
            </div>
          </div>

          <!-- Card 3: Máy tính để bàn Ondata -->
          <div class="product-item-card">
            <div class="product-thumb-container">
              <div class="tech-device-render">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="4" y="2" width="16" height="20" rx="2"/>
                  <circle cx="12" cy="6" r="1"/>
                  <line x1="8" y1="18" x2="16" y2="18"/>
                </svg>
                <span class="device-label">Máy tính để bàn</span>
              </div>
            </div>
            <div class="product-info-box">
              <h3 class="product-name">Máy tính để bàn Ondata</h3>
              <div class="product-pricing">
                <span class="current-price">12.990.000đ</span>
              </div>
              <div class="product-stars-row">
                <span class="stars-gold">★★★★★</span>
                <span class="reviews-count">(12)</span>
              </div>
            </div>
          </div>

          <!-- Card 4: RAM DDR5 16GB -->
          <div class="product-item-card">
            <div class="product-thumb-container">
              <div class="tech-device-render">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="7" width="20" height="10" rx="1"/>
                  <line x1="6" y1="17" x2="6" y2="19"/>
                  <line x1="10" y1="17" x2="10" y2="19"/>
                  <line x1="14" y1="17" x2="14" y2="19"/>
                  <line x1="18" y1="17" x2="18" y2="19"/>
                </svg>
                <span class="device-label">RAM DDR5 16GB</span>
              </div>
            </div>
            <div class="product-info-box">
              <h3 class="product-name">RAM DDR5 16GB</h3>
              <div class="product-pricing">
                <span class="current-price">1.290.000đ</span>
              </div>
              <div class="product-stars-row">
                <span class="stars-gold">★★★★★</span>
                <span class="reviews-count">(36)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function g(){return`
    <section class="home-promo-section" id="promo-banner">
      <div class="container">
        <div class="promo-banner-card">
          <div class="promo-left-content">
            <span class="promo-badge-text">Ưu đãi tháng 10</span>
            <h2 class="promo-headline">Giảm đến 20%</h2>
            <a href="#featured-products" class="btn-promo-action">
              Mua ngay
            </a>
          </div>

          <div class="promo-right-visual">
            <div class="hardware-showcase">
              <div class="device-monitor">
                <div class="monitor-screen"></div>
                <div class="monitor-stand"></div>
              </div>
              <div class="device-pc-case">
                <div class="pc-led-strip"></div>
              </div>
              <div class="device-laptop">
                <div class="laptop-mini-screen"></div>
              </div>
              <div class="device-keyboard"></div>
              <div class="device-mouse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function m(){return`
    <section class="home-news-section" id="news">
      <div class="container">
        <div class="section-top-bar">
          <h2 class="section-heading">Tin tức & Kiến thức</h2>
          <a href="#blog" class="see-all-link">
            Xem tất cả
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </div>

        <div class="news-grid">
          <!-- Card 1 -->
          <article class="news-card">
            <div class="news-thumb-wrapper">
              <div class="news-thumb-graphic news-bg-1">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="3" y="4" width="18" height="12" rx="2"/>
                  <line x1="2" y1="20" x2="22" y2="20"/>
                </svg>
              </div>
            </div>
            <div class="news-body">
              <h3 class="news-title">Cách chọn laptop phù hợp cho sinh viên</h3>
              <div class="news-date">08/10/2026</div>
            </div>
          </article>

          <!-- Card 2 -->
          <article class="news-card">
            <div class="news-thumb-wrapper">
              <div class="news-thumb-graphic news-bg-2">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="7" width="16" height="10" rx="2"/>
                  <line x1="22" y1="11" x2="22" y2="13"/>
                  <line x1="6" y1="11" x2="6" y2="13"/>
                  <line x1="10" y1="11" x2="10" y2="13"/>
                </svg>
              </div>
            </div>
            <div class="news-body">
              <h3 class="news-title">5 mẹo tăng tuổi thọ pin laptop</h3>
              <div class="news-date">06/10/2026</div>
            </div>
          </article>

          <!-- Card 3 -->
          <article class="news-card">
            <div class="news-thumb-wrapper">
              <div class="news-thumb-graphic news-bg-3">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <polyline points="8 21 12 17 16 21"/>
                </svg>
              </div>
            </div>
            <div class="news-body">
              <h3 class="news-title">Xu hướng màn hình 2026</h3>
              <div class="news-date">03/10/2026</div>
            </div>
          </article>

          <!-- Card 4 -->
          <article class="news-card">
            <div class="news-thumb-wrapper">
              <div class="news-thumb-graphic news-bg-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="7" width="20" height="10" rx="1"/>
                  <line x1="6" y1="17" x2="6" y2="19"/>
                  <line x1="10" y1="17" x2="10" y2="19"/>
                  <line x1="14" y1="17" x2="14" y2="19"/>
                </svg>
              </div>
            </div>
            <div class="news-body">
              <h3 class="news-title">So sánh RAM DDR4 và DDR5</h3>
              <div class="news-date">01/10/2026</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `}function w(){return`
    <footer class="footer" id="footer">
      <div class="container">
        <div class="footer-main-grid">
          <!-- Col 1: Brand -->
          <div class="footer-col-brand">
            <a href="#" class="footer-brand-logo">
              <img src="/logo trang tach nen.png" alt="ONDATA" class="logo-img" onerror="this.onerror=null; this.src='/logo tach nen.png'; this.style.filter='brightness(0) invert(1)';" />
            </a>
            <p class="footer-slogan">Nối nguồn công nghệ</p>
          </div>

          <!-- Col 2: Sản phẩm -->
          <div class="footer-col-nav">
            <h4 class="footer-col-heading">Sản phẩm</h4>
            <ul class="footer-link-list">
              <li><a href="#products">Máy tính xách tay</a></li>
              <li><a href="#products">Máy tính để bàn</a></li>
              <li><a href="#products">Màn hình</a></li>
              <li><a href="#products">RAM</a></li>
              <li><a href="#products">Bàn phím</a></li>
              <li><a href="#products">Chuột</a></li>
              <li><a href="#products">Phụ kiện</a></li>
            </ul>
          </div>

          <!-- Col 3: Hỗ trợ khách hàng -->
          <div class="footer-col-nav">
            <h4 class="footer-col-heading">Hỗ trợ khách hàng</h4>
            <ul class="footer-link-list">
              <li><a href="#support">Chính sách bảo hành</a></li>
              <li><a href="#support">Đổi trả - Hoàn tiền</a></li>
              <li><a href="#support">Hướng dẫn mua hàng</a></li>
              <li><a href="#support">Hỗ trợ kỹ thuật</a></li>
              <li><a href="#support">FAQ</a></li>
            </ul>
          </div>

          <!-- Col 4: Kết nối với Ondata & Đăng ký nhận tin -->
          <div class="footer-col-connect">
            <h4 class="footer-col-heading">Kết nối với Ondata</h4>
            <div class="social-links-row">
              <a href="#" class="social-circle-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" class="social-circle-btn" aria-label="Zalo / Messenger">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
              <a href="#" class="social-circle-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" class="social-circle-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#000"/></svg>
              </a>
            </div>

            <div class="newsletter-box">
              <div class="newsletter-label">Đăng ký nhận tin</div>
              <form class="newsletter-form" id="newsletter-form" onsubmit="event.preventDefault();">
                <input type="email" placeholder="Nhập email của bạn" id="newsletter-email" required />
                <button type="submit" class="btn-newsletter-action">Đăng ký</button>
              </form>
            </div>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom-bar">
          <p>© 2026 Ondata. All rights reserved.</p>
          <div class="footer-legal-links">
            <a href="#">Chính sách bảo mật</a>
            <span>|</span>
            <a href="#">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  `}let c=0;function h(n){let a=document.querySelector(".toast-container");a||(a=document.createElement("div"),a.className="toast-container",document.body.appendChild(a));const i=document.createElement("div");i.className="toast-alert",i.innerHTML=`<span style="color:#7ea835; font-weight:700;">✓</span> <span>${n}</span>`,a.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(10px)",setTimeout(()=>i.remove(),300)},3e3)}function f(){const n=document.querySelector("#app");n&&(n.innerHTML=`
    ${v(c)}
    <main id="main-content">
      ${p()}
      ${u()}
      ${g()}
      ${m()}
    </main>
    ${w()}
    
    <button class="back-to-top" id="back-to-top" aria-label="Lên đầu trang">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
  `,y())}function y(){const n=document.getElementById("nav-hamburger"),a=document.getElementById("nav-menu");n&&a&&(n.onclick=()=>a.classList.toggle("mobile-open"));const i=document.getElementById("search-input"),r=document.getElementById("search-dropdown");i&&r&&(i.onfocus=()=>r.classList.add("show"),i.oninput=()=>r.classList.add("show"),document.addEventListener("click",t=>{!i.contains(t.target)&&!r.contains(t.target)&&r.classList.remove("show")}));const e=document.getElementById("newsletter-form");e&&(e.onsubmit=t=>{t.preventDefault();const o=document.getElementById("newsletter-email");o&&o.value&&(h(`Đã đăng ký nhận tin thành công: ${o.value}`),o.value="")});const s=document.getElementById("back-to-top");window.onscroll=()=>{s&&(window.scrollY>300?s.classList.add("visible"):s.classList.remove("visible"))},s&&(s.onclick=()=>window.scrollTo({top:0,behavior:"smooth"})),document.querySelectorAll(".product-item-card").forEach(t=>{t.onclick=()=>{var d;const o=((d=t.querySelector(".product-name"))==null?void 0:d.innerText)||"Sản phẩm";c++;const l=document.getElementById("cart-badge");l&&(l.innerText=c),h(`Đã thêm "${o}" vào giỏ hàng!`)}})}f();
