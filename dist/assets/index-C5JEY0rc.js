(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();function V(t=0){return`
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

        <!-- Subrow Menu: Trang chủ, Sản phẩm, Khuyến mãi, Tin tức, Liên hệ, Hỗ trợ -->
        <nav class="nav-menu" id="nav-menu">
          <a href="/" class="nav-menu-link active" id="menu-home">Trang chủ</a>
          <div class="nav-dropdown-wrap">
            <a href="/san-pham/all" class="nav-menu-link" id="menu-products">
              Sản phẩm
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
          </div>
          <a href="#promo-banner" class="nav-menu-link" id="menu-promo">Khuyến mãi</a>
          <a href="/tin-tuc" class="nav-menu-link" id="menu-news">Tin tức</a>
          <a href="/lien-he" class="nav-menu-link" id="menu-contact">Liên hệ</a>
          <a href="/ho-tro" class="nav-menu-link" id="menu-support">Hỗ trợ</a>
        </nav>
      </div>
    </header>
  `}function K(){return`
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
                <a href="#" data-cat="laptop">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="12" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
                  </span>
                  <span>Máy tính xách tay</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="desktop">
                <a href="#" data-cat="desktop">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  </span>
                  <span>Máy tính để bàn</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="monitor">
                <a href="#" data-cat="monitor">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>
                  </span>
                  <span>Màn hình</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="ram">
                <a href="#" data-cat="ram">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="1"/><line x1="6" y1="17" x2="6" y2="19"/><line x1="10" y1="17" x2="10" y2="19"/><line x1="14" y1="17" x2="14" y2="19"/><line x1="18" y1="17" x2="18" y2="19"/></svg>
                  </span>
                  <span>RAM</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="keyboard">
                <a href="#" data-cat="keyboard">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6.01" y2="8"/><line x1="10" y1="8" x2="10.01" y2="8"/><line x1="14" y1="8" x2="14.01" y2="8"/><line x1="18" y1="8" x2="18.01" y2="8"/><line x1="6" y1="12" x2="6.01" y2="12"/><line x1="10" y1="12" x2="10.01" y2="12"/><line x1="14" y1="12" x2="14.01" y2="12"/><line x1="18" y1="12" x2="18.01" y2="12"/><line x1="7" y1="16" x2="17" y2="16"/></svg>
                  </span>
                  <span>Bàn phím</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="mouse">
                <a href="#" data-cat="mouse">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="7"/><line x1="12" y1="6" x2="12" y2="10"/></svg>
                  </span>
                  <span>Chuột</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="accessories">
                <a href="#" data-cat="accessories">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                  </span>
                  <span>Phụ kiện</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="other">
                <a href="#" data-cat="other">
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
  `}function Q(){return`
    <section class="home-featured-section" id="featured-products">
      <div class="container">
        <div class="section-top-bar">
          <h2 class="section-heading">Sản phẩm nổi bật</h2>
          <a href="/san-pham/all" class="see-all-link">
            Xem tất cả
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </div>

        <div class="featured-grid">
          <!-- Card 1: Laptop Ondata Pro 15 -->
          <div class="product-item-card" data-id="laptop-pro-15" data-cat="laptop" style="cursor:pointer;">
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
              <h3 class="product-name">Laptop Ondata Pro 15 <span class="product-ext-icon">↗</span></h3>
              <div class="product-pricing">
                <span class="current-price" style="color:#527d24;">Liên hệ</span>
              </div>
              <div class="product-stars-row">
                <span class="stars-gold">★★★★★</span>
                <span class="reviews-count">(24)</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Màn hình Ondata 27" -->
          <div class="product-item-card" data-id="monitor-27-curved" data-cat="monitor" style="cursor:pointer;">
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
              <h3 class="product-name">Màn hình Ondata 27" <span class="product-ext-icon">↗</span></h3>
              <div class="product-pricing">
                <span class="current-price" style="color:#527d24;">Liên hệ</span>
              </div>
              <div class="product-stars-row">
                <span class="stars-gold">★★★★★</span>
                <span class="reviews-count">(18)</span>
              </div>
            </div>
          </div>

          <!-- Card 3: Máy tính để bàn Ondata -->
          <div class="product-item-card" data-id="desktop-master" data-cat="desktop" style="cursor:pointer;">
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
              <h3 class="product-name">Máy tính để bàn Ondata <span class="product-ext-icon">↗</span></h3>
              <div class="product-pricing">
                <span class="current-price" style="color:#527d24;">Liên hệ</span>
              </div>
              <div class="product-stars-row">
                <span class="stars-gold">★★★★★</span>
                <span class="reviews-count">(12)</span>
              </div>
            </div>
          </div>

          <!-- Card 4: RAM DDR5 16GB -->
          <div class="product-item-card" data-id="ram-ddr5-16" data-cat="ram" style="cursor:pointer;">
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
              <h3 class="product-name">RAM DDR5 16GB <span class="product-ext-icon">↗</span></h3>
              <div class="product-pricing">
                <span class="current-price" style="color:#527d24;">Liên hệ</span>
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
  `}function U(){return`
    <section class="home-promo-section" id="promo-banner">
      <div class="container">
        <div class="promo-banner-card">
          <div class="promo-left-content">
            <span class="promo-badge-text">Chính sách B2B & Dự án</span>
            <h2 class="promo-headline">Chiết khấu đến 20%</h2>
            <a href="/lien-he" class="btn-promo-action">
              Liên hệ ngay
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
  `}function F(){return`
    <section class="home-news-section" id="news">
      <div class="container">
        <div class="section-top-bar">
          <h2 class="section-heading">Tin tức & Kiến thức</h2>
          <a href="/tin-tuc" class="see-all-link">
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
              <div class="news-date">08/10/2025</div>
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
              <div class="news-date">06/10/2025</div>
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
              <h3 class="news-title">Xu hướng màn hình 2025</h3>
              <div class="news-date">03/10/2025</div>
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
                  <line x1="18" y1="17" x2="18" y2="19"/>
                </svg>
              </div>
            </div>
            <div class="news-body">
              <h3 class="news-title">So sánh RAM DDR4 và DDR5</h3>
              <div class="news-date">01/10/2025</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `}function W(){return`
    <footer class="footer" id="footer">
      <div class="container">
        <div class="footer-main-grid">
          <!-- Col 1: Brand -->
          <div class="footer-col-brand">
            <a href="/" class="footer-brand-logo">
              <img src="/logo tach nen.png" alt="ONDATA" class="footer-logo-img" style="height: 34px; width: auto; filter: brightness(0) invert(1);" />
            </a>
          </div>

          <!-- Col 2: Sản phẩm -->
          <div class="footer-col-nav">
            <h4 class="footer-col-heading">Sản phẩm</h4>
            <ul class="footer-link-list">
              <li><a href="/san-pham/laptop">Máy tính xách tay</a></li>
              <li><a href="/san-pham/desktop">Máy tính để bàn</a></li>
              <li><a href="/san-pham/monitor">Màn hình</a></li>
              <li><a href="/san-pham/ram">RAM</a></li>
              <li><a href="/san-pham/keyboard">Bàn phím</a></li>
              <li><a href="/san-pham/mouse">Chuột</a></li>
              <li><a href="/san-pham/accessories">Phụ kiện</a></li>
            </ul>
          </div>

          <!-- Col 3: Hỗ trợ khách hàng -->
          <div class="footer-col-nav">
            <h4 class="footer-col-heading">Hỗ trợ khách hàng</h4>
            <ul class="footer-link-list">
              <li><a href="/ho-tro/warranty">Chính sách bảo hành</a></li>
              <li><a href="/ho-tro/returns">Đổi trả - Hoàn tiền</a></li>
              <li><a href="/ho-tro/guide">Hướng dẫn mua hàng</a></li>
              <li><a href="/ho-tro/tech">Hỗ trợ kỹ thuật</a></li>
              <li><a href="/ho-tro/faq">FAQ</a></li>
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
          <p>© 2025 Ondata. All rights reserved.</p>
          <div class="footer-legal-links">
            <a href="#">Chính sách bảo mật</a>
            <span>|</span>
            <a href="#">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  `}const w=[{id:"laptop-pro-15",cat:"laptop",name:"Laptop Ondata Pro 15",badge:"Bán chạy",price:1599e4,oldPrice:1799e4,discount:11,stars:4.5,reviews:24,specs:[{icon:"cpu",label:"CPU",value:"Intel Core i5-1240P"},{icon:"ram",label:"RAM",value:"16GB DDR4"},{icon:"hdd",label:"Ổ cứng",value:"SSD 512GB"},{icon:"monitor",label:"Màn hình",value:'15.6" FHD (1920×1080)'},{icon:"gpu",label:"Card đồ họa",value:"Intel Iris Xe"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Laptop Ondata Pro 15 được thiết kế dành cho người dùng cần hiệu năng ổn định, thiết kế hiện đại và màn hình sắc nét. Sản phẩm phù hợp cho học tập, văn phòng, học lập trình và giải trí.",features:["Hiệu năng ổn định, xử lý mượt mà","Thiết kế mỏng nhẹ, sang trọng","Màn hình FHD cho trải nghiệm hình ảnh sống động","Bảo hành chính hãng 24 tháng"],techSpecs:{CPU:"Intel Core i5-1240P (12 nhân, 16 luồng, 4.4GHz)",RAM:"16GB DDR4 3200MHz (có thể nâng cấp lên 32GB)","Ổ cứng":"SSD NVMe 512GB PCIe Gen 4","Màn hình":'15.6" IPS FHD 1920×1080, 144Hz, 100% sRGB',"Card đồ họa":"Intel Iris Xe Graphics",Pin:"72Wh, sạc nhanh 65W","Hệ điều hành":"Windows 11 Home","Cổng kết nối":"2× USB-A 3.2, 1× USB-C, HDMI 2.0, SD Card","Kết nối không dây":"WiFi 6E, Bluetooth 5.2","Trọng lượng":"1.75 kg","Kích thước":"357 × 230 × 17.9 mm","Màu sắc":"Xám bạc, Đen nhám"}},{id:"laptop-gaming-16",cat:"laptop",name:"Laptop Gaming Ondata 16",badge:"Mới",price:2289e4,oldPrice:2599e4,discount:12,stars:4.5,reviews:18,specs:[{icon:"cpu",label:"CPU",value:"Intel Core i7-13700H"},{icon:"ram",label:"RAM",value:"16GB DDR5"},{icon:"hdd",label:"Ổ cứng",value:"SSD 1TB NVMe"},{icon:"monitor",label:"Màn hình",value:'16" QHD 165Hz'},{icon:"gpu",label:"Card đồ họa",value:"NVIDIA RTX 4060 8GB"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Laptop Gaming Ondata 16 mang đến hiệu năng chơi game đỉnh cao với NVIDIA RTX 4060, màn hình QHD 165Hz và tản nhiệt thông minh. Chiếc laptop lý tưởng cho game thủ và nhà sáng tạo nội dung.",features:["Card đồ họa RTX 4060 – chơi game 1080p siêu mượt","Màn hình QHD 165Hz, màu sắc chính xác","Tản nhiệt kép, duy trì hiệu năng tối đa","RGB per-key keyboard, tùy chỉnh không giới hạn"],techSpecs:{CPU:"Intel Core i7-13700H (14 nhân, 20 luồng, 5.0GHz)",RAM:"16GB DDR5 4800MHz (tối đa 64GB)","Ổ cứng":"SSD NVMe 1TB PCIe Gen 4 + khe mở rộng","Màn hình":'16" IPS QHD 2560×1600, 165Hz, 100% DCI-P3',"Card đồ họa":"NVIDIA GeForce RTX 4060 8GB GDDR6",Pin:"90Wh, sạc nhanh 140W","Hệ điều hành":"Windows 11 Home","Cổng kết nối":"3× USB-A 3.2, 2× USB-C (TB4), HDMI 2.1, RJ45","Kết nối không dây":"WiFi 6E, Bluetooth 5.3","Trọng lượng":"2.3 kg","Kích thước":"356 × 255 × 22.9 mm","Màu sắc":"Đen carbon"}},{id:"laptop-air-14",cat:"laptop",name:"Laptop Ondata Air 14",badge:"Mới",price:1299e4,oldPrice:null,discount:0,stars:4,reviews:12,specs:[{icon:"cpu",label:"CPU",value:"Intel Core i3-1315U"},{icon:"ram",label:"RAM",value:"8GB DDR4"},{icon:"hdd",label:"Ổ cứng",value:"SSD 256GB"},{icon:"monitor",label:"Màn hình",value:'14" FHD IPS'},{icon:"gpu",label:"Card đồ họa",value:"Intel UHD Graphics"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Ondata Air 14 – mỏng, nhẹ, thời trang. Thiết kế siêu mỏng chỉ 14.9mm cùng trọng lượng 1.3kg, lý tưởng cho sinh viên và người đi làm năng động.",features:["Thiết kế siêu mỏng 14.9mm, nhẹ chỉ 1.3kg","Pin 12 giờ sử dụng liên tục","Màn hình IPS góc nhìn rộng 178°","Âm thanh Dolby Atmos, loa kép stereo"],techSpecs:{CPU:"Intel Core i3-1315U (6 nhân, 8 luồng, 4.5GHz)",RAM:"8GB DDR4 3200MHz","Ổ cứng":"SSD NVMe 256GB PCIe Gen 3","Màn hình":'14" IPS FHD 1920×1080, 60Hz, 250 nits',"Card đồ họa":"Intel UHD Graphics",Pin:"52Wh, sạc nhanh 45W","Hệ điều hành":"Windows 11 Home","Cổng kết nối":"2× USB-A, 1× USB-C, HDMI 1.4","Kết nối không dây":"WiFi 5, Bluetooth 5.0","Trọng lượng":"1.3 kg","Kích thước":"323 × 213 × 14.9 mm","Màu sắc":"Bạc, Vàng hồng"}},{id:"monitor-27-curved",cat:"monitor",name:'Màn hình Ondata 27" Curved',badge:"Bán chạy",price:799e4,oldPrice:899e4,discount:11,stars:5,reviews:31,specs:[{icon:"monitor",label:"Kích thước",value:'27" cong 1500R'},{icon:"gpu",label:"Độ phân giải",value:"QHD 2560×1440"},{icon:"cpu",label:"Tần số quét",value:"165Hz"},{icon:"shield",label:"Thời gian đáp ứng",value:"1ms MPRT"},{icon:"ram",label:"Tấm nền",value:"VA"},{icon:"shield",label:"Bảo hành",value:"36 tháng"}],desc:'Màn hình cong Ondata 27" mang đến trải nghiệm hình ảnh bao trùm với độ phân giải QHD sắc nét, tần số quét 165Hz mượt mà và thời gian đáp ứng 1ms. Hoàn hảo cho gaming và làm việc chuyên nghiệp.',features:["Màn hình cong 1500R tạo cảm giác immersive","QHD 2560×1440 – rõ nét hơn FHD 77%","165Hz + 1ms đáp ứng – zero blur trong gaming","AMD FreeSync Premium, G-Sync Compatible"],techSpecs:{"Kích thước":"27 inch cong 1500R","Độ phân giải":"QHD 2560 × 1440 (2K)","Tấm nền":"VA","Tần số quét":"165Hz","Thời gian đáp ứng":"1ms MPRT","Độ sáng":"350 nits (peak 450 nits)","Tỉ lệ tương phản":"3000:1 (static)","Cổng kết nối":"2× HDMI 2.0, 1× DisplayPort 1.4, 4× USB-A 3.0 hub","Điều chỉnh":"Nghiêng, xoay 90°, điều chỉnh chiều cao","Chứng chỉ":"VESA, Eye Care, Flicker Free","Bảo hành":"36 tháng chính hãng"}},{id:"desktop-master",cat:"desktop",name:"Máy tính để bàn Ondata Master",badge:"Mới",price:1899e4,oldPrice:215e5,discount:12,stars:4.5,reviews:9,specs:[{icon:"cpu",label:"CPU",value:"Intel Core i7-13700K"},{icon:"ram",label:"RAM",value:"32GB DDR5"},{icon:"hdd",label:"Ổ cứng",value:"SSD 1TB + HDD 2TB"},{icon:"gpu",label:"Card đồ họa",value:"RTX 4070 12GB"},{icon:"monitor",label:"Nguồn",value:"750W 80+ Gold"},{icon:"shield",label:"Bảo hành",value:"36 tháng"}],desc:"Máy tính để bàn Ondata Master – cỗ máy sức mạnh cho đồ họa, video editing và gaming 4K. Được trang bị RTX 4070 và i7-13700K, không có tác vụ nào là quá khó.",features:["RTX 4070 – render nhanh, gaming 4K siêu mượt","Case kính cường lực, LED RGB đồng bộ","Tản nhiệt nước AIO 240mm","SSD NVMe Gen 4 + HDD lưu trữ lớn"],techSpecs:{CPU:"Intel Core i7-13700K (16 nhân, 24 luồng, 5.4GHz)",RAM:"32GB DDR5 6000MHz (4× khe, tối đa 128GB)",SSD:"NVMe PCIe Gen 4 1TB",HDD:"SATA 2TB 7200 RPM","Card đồ họa":"NVIDIA GeForce RTX 4070 12GB GDDR6X",Nguồn:"750W 80+ Gold, Modular","Bo mạch chủ":"ASUS Z790 Prime WiFi",Case:"Fractal Design Meshify C TG – kính cường lực","Tản nhiệt":"AIO 240mm + 4 fan ARGB","Kết nối":"WiFi 6E, Bluetooth 5.2, 2.5Gbps LAN"}},{id:"ram-ddr5-16",cat:"ram",name:"RAM Ondata DDR5 16GB 5600MHz",badge:"Bán chạy",price:129e4,oldPrice:149e4,discount:13,stars:5,reviews:36,specs:[{icon:"ram",label:"Dung lượng",value:"16GB (1× 16GB)"},{icon:"cpu",label:"Chuẩn",value:"DDR5"},{icon:"gpu",label:"Tốc độ",value:"5600MHz"},{icon:"monitor",label:"Timing",value:"CL36-36-36-76"},{icon:"hdd",label:"Điện áp",value:"1.1V"},{icon:"shield",label:"Bảo hành",value:"Vĩnh viễn"}],desc:"RAM DDR5 Ondata 16GB 5600MHz – nâng cấp hoàn hảo cho hệ thống thế hệ mới. Hiệu năng vượt trội DDR4, độ trễ thấp và bảo hành vĩnh viễn.",features:["DDR5 5600MHz – băng thông tối đa 44.8 GB/s","On-Die ECC tự sửa lỗi dữ liệu","Tản nhiệt nhôm cao cấp","Bảo hành vĩnh viễn chính hãng"],techSpecs:{"Dung lượng":"16GB (1 thanh)",Chuẩn:"DDR5","Tốc độ":"5600MHz (PC5-44800)",Timing:"CL36-36-36-76","Điện áp":"1.1V","Form factor":"DIMM (288 chân)","Tương thích":"Intel LGA1700, AMD AM5","Tản nhiệt":"Nhôm mỏng profile thấp",RGB:"Không","Bảo hành":"Vĩnh viễn"}}];function L(t){return t?(t=t.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"),t=t.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"),t=t.replace(/ì|í|ị|ỉ|ĩ/g,"i"),t=t.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"),t=t.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"),t=t.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"),t=t.replace(/đ/g,"d"),t=t.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,"A"),t=t.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g,"E"),t=t.replace(/Ì|Í|Ị|Ỉ|Ĩ/g,"I"),t=t.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,"O"),t=t.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"U"),t=t.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,"Y"),t=t.replace(/Đ/g,"D"),t=t.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g,""),t=t.replace(/\u02C6|\u0306|\u031B/g,""),t.toLowerCase().trim()):""}function R(t){if(!t||!t.trim())return w;const e=L(t);return w.filter(s=>{const i=L(s.name),n=L(s.cat),o=s.desc?L(s.desc):"",d=s.id.toLowerCase();return i.includes(e)||n.includes(e)||d.includes(e)||o.includes(e)})}function z(t){return t==="desktop-workstation"&&(t="desktop-master"),t==="ram-ddr5-16gb"&&(t="ram-ddr5-16"),w.find(e=>e.id===t)||null}function j(t){return t==="all"?w:w.filter(e=>e.cat===t)}function O(t){return"Liên hệ"}function X(t="all",e={label:"Sản phẩm",sub:"Tất cả sản phẩm chính hãng Ondata"}){const s=[{id:"laptop",label:"Máy tính xách tay",icon:Z()},{id:"desktop",label:"Máy tính để bàn",icon:Y()},{id:"monitor",label:"Màn hình",icon:_()},{id:"ram",label:"RAM",icon:J()},{id:"keyboard",label:"Bàn phím",icon:tt()},{id:"mouse",label:"Chuột",icon:et()},{id:"accessories",label:"Phụ kiện",icon:st()},{id:"other",label:"Thiết bị khác",icon:nt()}],i=["Tất cả","Văn phòng","Gaming","Đồ họa","Ultrabook"],n=["Ondata","ASUS","Acer","HP","Lenovo","Dell","Khác"],o=["8GB","16GB","32GB"],d=["Còn hàng","Hết hàng","Đặt hàng"],c=j(t),l=c.length>0?c.map((a,h)=>`
        <div class="catalog-product-card" id="catalog-product-${a.id}" data-product-id="${a.id}" data-product-cat="${a.cat}" style="cursor:pointer;">
          ${a.badge?`<span class="badge-tag">${a.badge}</span>`:""}
          <div class="catalog-product-thumb">
            <div class="catalog-thumb-visual">
              <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="width:100%">
                <defs>
                  <linearGradient id="cg${h}" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1a2e1d"/>
                    <stop offset="100%" stop-color="#0d1a10"/>
                  </linearGradient>
                </defs>
                <rect width="160" height="110" rx="6" fill="url(#cg${h})"/>
                <ellipse cx="80" cy="55" rx="48" ry="28" fill="#7ea835" opacity=".12"/>
                <text x="80" y="60" text-anchor="middle" font-family="Outfit,sans-serif" font-weight="800" font-size="13" fill="#7ea835" opacity=".7">ONDATA</text>
              </svg>
            </div>
          </div>
          <div class="catalog-product-info">
            <p class="catalog-product-name">${a.name}</p>
            <div class="catalog-product-pricing">
              <span class="catalog-product-price" style="color:#527d24;">Liên hệ</span>
            </div>
            <div class="catalog-product-stars">
              <span class="stars-gold">${"★".repeat(Math.floor(a.stars))}${a.stars%1>=.5?"½":""}</span>
              <span class="reviews-count">(${a.reviews})</span>
            </div>
          </div>
        </div>`).join(""):`<div class="catalog-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" opacity=".3">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
        <p>Chưa có sản phẩm trong danh mục này</p>
       </div>`;return`
    <section class="catalog-page" id="catalog-page">
      <div class="catalog-container">

        <!-- BREADCRUMB -->
        <nav class="catalog-breadcrumb" aria-label="Breadcrumb">
          <a href="/" class="crumb-link" id="crumb-home">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/san-pham/all" class="crumb-link" id="crumb-products">Sản phẩm</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">${e.label}</span>
        </nav>

        <div class="catalog-layout">

          <!-- ===== LEFT SIDEBAR ===== -->
          <aside class="catalog-sidebar" id="catalog-sidebar">
            <div class="catsidebar-header">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              Danh mục sản phẩm
            </div>
            <ul class="catsidebar-menu">
              ${s.map(a=>`
                <li class="catsidebar-item">
                  <a href="/san-pham/${a.id}" class="catsidebar-link${a.id===t?" catsidebar-link--active":""}" id="cat-${a.id}" data-cat="${a.id}">
                    <span class="catsidebar-icon">${a.icon}</span>
                    <span>${a.label}</span>
                  </a>
                </li>
              `).join("")}
            </ul>
          </aside>

          <!-- ===== RIGHT CONTENT ===== -->
          <div class="catalog-content">

            <!-- CATEGORY HERO BANNER -->
            <div class="catalog-hero" id="catalog-hero">
              <div class="catalog-hero-text">
                <h1 class="catalog-hero-title">${e.label}</h1>
                <p class="catalog-hero-sub">${e.sub}</p>
              </div>
              <div class="catalog-hero-visual">
                <div class="chl-wrap">
                  <div class="chl-screen">
                    <div class="chl-glow"></div>
                    <div class="chl-logo-text">ONDATA</div>
                  </div>
                  <div class="chl-base">
                    <div class="chl-notch"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- TYPE FILTER TABS -->
            <div class="catalog-tabs" id="catalog-tabs" role="tablist">
              ${i.map((a,h)=>`
                <button class="catalog-tab${h===0?" catalog-tab--active":""}" id="tab-${h}" role="tab" data-tab="${h}">
                  ${a}
                </button>
              `).join("")}
            </div>

            <!-- FILTER TOGGLE + SORT ROW -->
            <div class="catalog-filter-row">
              <button class="catalog-filter-toggle catalog-filters--open" id="catalog-filter-toggle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                </svg>
                Bộ lọc
                <svg class="filter-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div class="catalog-sort">
                <span class="sort-label">Sắp xếp</span>
                <div class="sort-select-wrap">
                  <select class="sort-select" id="catalog-sort-select">
                    <option>Phổ biến</option>
                    <option>Mới nhất</option>
                    <option>Đánh giá cao</option>
                  </select>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- FILTER PANEL + PRODUCT AREA -->
            <div class="catalog-body" id="catalog-body">

              <!-- FILTER PANEL -->
              <div class="catalog-filters" id="catalog-filters">

                <div class="filter-group" id="fg-group-brand">
                  <div class="filter-group-title" data-group="brand">
                    Thương hiệu
                    <svg class="fg-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="18 15 12 9 6 15"/>
                    </svg>
                  </div>
                  <div class="filter-group-body" id="fg-brand">
                    ${n.map((a,h)=>`
                      <label class="filter-checkbox" id="filter-brand-${h}">
                        <input type="checkbox" name="brand" value="${a}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${a}</span>
                      </label>
                    `).join("")}
                  </div>
                </div>

                <div class="filter-group" id="fg-group-ram">
                  <div class="filter-group-title" data-group="ram">
                    RAM
                    <svg class="fg-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="18 15 12 9 6 15"/>
                    </svg>
                  </div>
                  <div class="filter-group-body" id="fg-ram">
                    ${o.map((a,h)=>`
                      <label class="filter-checkbox" id="filter-ram-${h}">
                        <input type="checkbox" name="ram" value="${a}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${a}</span>
                      </label>
                    `).join("")}
                  </div>
                </div>

                <div class="filter-group" id="fg-group-status">
                  <div class="filter-group-title" data-group="status">
                    Tình trạng
                    <svg class="fg-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="18 15 12 9 6 15"/>
                    </svg>
                  </div>
                  <div class="filter-group-body" id="fg-status">
                    ${d.map((a,h)=>`
                      <label class="filter-checkbox" id="filter-status-${h}">
                        <input type="checkbox" name="status" value="${a}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${a}</span>
                      </label>
                    `).join("")}
                  </div>
                </div>

                <button class="filter-reset-btn" id="filter-reset-btn">Xóa bộ lọc</button>
              </div>

              <!-- PRODUCT GRID -->
              <div class="catalog-products-area" id="catalog-products-area">
                <div class="catalog-products-grid" id="catalog-products-grid">
                  ${l}
                </div>

                <!-- PAGINATION -->
                <div class="catalog-pagination" id="catalog-pagination">
                  <button class="page-btn page-btn--arrow" id="page-prev" disabled aria-label="Trang trước">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="15 18 9 12 15 6"/>
                    </svg>
                  </button>
                  <button class="page-btn page-btn--num page-btn--active" id="page-1" data-page="1">1</button>
                  <button class="page-btn page-btn--num" id="page-2" data-page="2">2</button>
                  <button class="page-btn page-btn--num" id="page-3" data-page="3">3</button>
                  <button class="page-btn page-btn--arrow" id="page-next" aria-label="Trang sau">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                </div>
              </div>

            </div><!-- end catalog-body -->

          </div><!-- end catalog-content -->

        </div><!-- end catalog-layout -->

      </div><!-- end catalog-container -->
    </section>
  `}function Z(){return'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>'}function Y(){return'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/></svg>'}function _(){return'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>'}function J(){return'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="8" width="20" height="8" rx="1"/><path d="M6 8V6M10 8V6M14 8V6M18 8V6M6 16v2M10 16v2M14 16v2M18 16v2"/></svg>'}function tt(){return'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/></svg>'}function et(){return'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="2" width="10" height="18" rx="5"/><path d="M12 2v7M7 9h10"/></svg>'}function st(){return'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>'}function nt(){return'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>'}function it(){document.querySelectorAll(".catalog-tab").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll(".catalog-tab").forEach(a=>a.classList.remove("catalog-tab--active")),l.classList.add("catalog-tab--active")})});const t=document.getElementById("catalog-filter-toggle"),e=document.getElementById("catalog-filters");t&&e&&t.addEventListener("click",()=>{e.classList.toggle("filters-hidden"),t.classList.toggle("catalog-filters--open")}),document.querySelectorAll(".filter-group-title").forEach(l=>{l.addEventListener("click",()=>{const a=l.getAttribute("data-group"),h=document.getElementById(`fg-${a}`);h&&(h.classList.toggle("fg-collapsed"),l.classList.toggle("fg-title-collapsed"))})});const s=document.getElementById("filter-reset-btn");s&&s.addEventListener("click",()=>{document.querySelectorAll('.catalog-filters input[type="checkbox"]').forEach(l=>{l.checked=!1})});let i=1;const n=document.querySelectorAll(".page-btn--num"),o=document.getElementById("page-prev"),d=document.getElementById("page-next");function c(l){i=l,n.forEach(a=>{a.classList.toggle("page-btn--active",parseInt(a.dataset.page)===i)}),o&&(o.disabled=i===1),d&&(d.disabled=i===n.length)}n.forEach(l=>l.addEventListener("click",()=>c(parseInt(l.dataset.page)))),o&&o.addEventListener("click",()=>{i>1&&c(i-1)}),d&&d.addEventListener("click",()=>{i<n.length&&c(i+1)}),document.querySelectorAll(".catalog-product-card[data-product-id]").forEach(l=>{l.addEventListener("click",()=>{const a=l.dataset.productId,h=l.dataset.productCat;a&&h&&(window.location.hash=`#/san-pham/${h}/${a}`)})})}function at(t){const e={cpu:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>',ram:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="8" width="20" height="8" rx="1"/><path d="M6 8V6M10 8V6M14 8V6M18 8V6M6 16v2M10 16v2M14 16v2M18 16v2"/></svg>',hdd:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="12" rx="10" ry="6"/><path d="M2 12v4c0 3.31 4.48 6 10 6s10-2.69 10-6v-4"/><path d="M15 10h.01"/></svg>',monitor:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>',gpu:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 7V5M10 7V5M18 7V5M14 7V5M6 17v2M10 17v2M18 17v2M14 17v2"/></svg>',shield:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'};return e[t]||e.shield}function T(t){const e=Math.floor(t),s=t%1>=.4;let i="";for(let n=0;n<5;n++)n<e?i+='<svg class="star-icon star-full" width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>':n===e&&s?i+=`
        <svg class="star-icon star-half" width="16" height="16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stop-color="#f59e0b"/>
              <stop offset="50%" stop-color="#e5e7eb"/>
            </linearGradient>
          </defs>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half-star)"/>
        </svg>`:i+='<svg class="star-icon star-empty" width="16" height="16" viewBox="0 0 24 24" fill="#e5e7eb" stroke="#d1d5db"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';return i}function S(t=0,e="Laptop Ondata Pro 15"){switch(t){case 0:return`
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
        </svg>`;case 1:return`
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
        </svg>`;case 2:return`
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
        </svg>`;case 3:return`
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
        </svg>`;case 4:return`
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
          ${[0,1,2,3,4].map(s=>`
            <g transform="translate(90, ${70+s*32})">
              ${[0,1,2,3,4,5,6,7,8,9,10,11].map(i=>`
                <rect x="${i*30}" y="0" width="26" height="24" rx="3.5" fill="url(#kb-grad)" stroke="#3f5244" stroke-width="0.8"/>
              `).join("")}
            </g>
          `).join("")}

          <!-- Large trackpad -->
          <rect x="180" y="255" width="180" height="72" rx="6" fill="#c7d2cb" stroke="#8d9d93" stroke-width="1.2"/>
          <text x="270" y="295" text-anchor="middle" font-family="'Outfit',sans-serif" font-size="11" fill="#78887e" font-weight="600">Precision Touchpad</text>
        </svg>`;default:return""}}function ot(t,e=!1){const s=["Chính diện","Góc nghiêng","Mặt lưng","Cạnh bên","Bàn phím"];return`
    <button class="pd-thumb-btn${e?" pd-thumb-btn--active":""}" data-thumb="${t}" aria-label="${s[t]}">
      <div class="pd-thumb-mini-preview">
        ${S(t)}
      </div>
      <span class="pd-thumb-caption">${s[t]}</span>
    </button>
  `}function ct(t){if(!t)return`
      <section class="pd-page">
        <div class="pd-container">
          <div class="pd-not-found">
            <h2>Sản phẩm không tồn tại</h2>
            <p>Vui lòng kiểm tra lại đường dẫn hoặc quay lại danh mục sản phẩm.</p>
            <a href="/san-pham/all" class="pd-btn-back">← Quay lại danh mục</a>
          </div>
        </div>
      </section>
    `;O(t.price),t.oldPrice&&O(t.oldPrice),t.discount||t.oldPrice&&Math.round((1-t.price/t.oldPrice)*100);const e=(t.specs||[]).map(o=>`
    <li class="pd-spec-item">
      <span class="pd-spec-icon">${at(o.icon)}</span>
      <span class="pd-spec-label">${o.label}:</span>
      <span class="pd-spec-val">${o.value}</span>
    </li>
  `).join(""),s=Object.entries(t.techSpecs||{}).map(([o,d])=>`
    <tr class="pd-ts-row">
      <td class="pd-ts-key">${o}</td>
      <td class="pd-ts-val">${d}</td>
    </tr>
  `).join(""),i=(t.features||[]).map(o=>`
    <li class="pd-feature-item">
      <span class="pd-check-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
      <span class="pd-feature-text">${o}</span>
    </li>
  `).join(""),n=[0,1,2,3,4].map(o=>ot(o,o===0)).join("");return`
    <section class="pd-page" id="pd-page">
      <div class="pd-container">

        <!-- 1. BREADCRUMB -->
        <nav class="catalog-breadcrumb pd-breadcrumb" aria-label="Breadcrumb">
          <a href="/" class="crumb-link" id="pd-crumb-home">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/san-pham/${t.cat}" class="crumb-link" id="pd-crumb-cat">Sản phẩm</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">${t.name}</span>
        </nav>

        <!-- 2. MAIN PRODUCT CARD: GALLERY + INFO -->
        <div class="pd-card">
          <div class="pd-layout-grid">

            <!-- LEFT: GALLERY -->
            <div class="pd-gallery-col">
              <div class="pd-hero-preview-box" id="pd-hero-preview-box">
                <div class="pd-hero-art" id="pd-hero-art">
                  ${S(0,t.name)}
                </div>
              </div>

              <!-- Thumbnails carousel row -->
              <div class="pd-thumbs-bar" id="pd-thumbs-bar">
                ${n}
              </div>
            </div>

            <!-- RIGHT: INFO & ACTIONS -->
            <div class="pd-info-col">
              <h1 class="pd-title" id="pd-title">${t.name}</h1>

              <!-- Rating row -->
              <div class="pd-rating-row">
                <div class="pd-stars-wrap">
                  ${T(t.stars||4.5)}
                </div>
                <span class="pd-rating-count">(${t.reviews||24} đánh giá)</span>
                ${t.badge?`<span class="pd-top-badge">${t.badge}</span>`:""}
              </div>

              <!-- Price section: Liên hệ -->
              <div class="pd-pricing-box">
                <span class="pd-price" id="pd-price">Liên hệ</span>
              </div>

              <!-- Key Specs List with Grey Icons -->
              <ul class="pd-specs-list">
                ${e}
              </ul>

              <!-- Actions: Liên hệ báo giá & Hotline (k bán lẻ) -->
              <div class="pd-actions-group">
                <a href="/lien-he" class="pd-btn-quote" id="pd-btn-quote">
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
              Đánh giá (${t.reviews||24})
            </button>
          </div>

          <!-- Tab Content Container -->
          <div class="pd-tab-card">

            <!-- Tab 1: Description -->
            <div class="pd-panel" id="pd-panel-desc" role="tabpanel">
              <p class="pd-lead-desc">${t.desc}</p>
              <ul class="pd-features-list">
                ${i}
              </ul>

              <div class="pd-editorial-block">
                <h3 class="pd-editorial-title">Đặc điểm nổi bật của ${t.name}</h3>
                <p>Được hoàn thiện với tiêu chuẩn khắt khe, ${t.name} đem lại sự cân bằng hoàn hảo giữa hiệu suất làm việc ấn tượng, độ bền chuẩn doanh nghiệp và khả năng tản nhiệt tối ưu cho người dùng Việt Nam.</p>
              </div>
            </div>

            <!-- Tab 2: Tech Specs -->
            <div class="pd-panel pd-panel--hidden" id="pd-panel-tech" role="tabpanel">
              <table class="pd-tech-table">
                <tbody>
                  ${s}
                </tbody>
              </table>
            </div>

            <!-- Tab 3: Reviews -->
            <div class="pd-panel pd-panel--hidden" id="pd-panel-reviews" role="tabpanel">
              <div class="pd-reviews-summary">
                <div class="pd-score-box">
                  <div class="pd-big-score">${t.stars||4.5}</div>
                  <div class="pd-stars-wrap">${T(t.stars||4.5)}</div>
                  <span class="pd-score-sub">${t.reviews||24} đánh giá từ khách hàng</span>
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
                  <div class="pd-stars-wrap">${T(5)}</div>
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
                  <div class="pd-stars-wrap">${T(5)}</div>
                  <p class="pd-review-comment">Giao hàng cực kỳ nhanh, đóng gói cẩn thận có xốp chống sốc dày. Máy nhẹ hơn tưởng tượng, bàn phím gõ nảy và êm tay. Nhân viên tư vấn kỹ càng.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `}function lt(t,e){var f,p;if(!t)return;const s=document.querySelectorAll(".pd-thumb-btn"),i=document.getElementById("pd-hero-art");s.forEach(r=>{r.addEventListener("click",()=>{const y=parseInt(r.dataset.thumb,10);s.forEach(b=>b.classList.remove("pd-thumb-btn--active")),r.classList.add("pd-thumb-btn--active"),i&&(i.style.opacity="0",i.style.transform="scale(0.96)",setTimeout(()=>{i.innerHTML=S(y,t.name),i.style.opacity="1",i.style.transform="scale(1)"},160))})});const n=document.getElementById("pd-qty-input"),o=document.getElementById("pd-qty-minus"),d=document.getElementById("pd-qty-plus");n&&o&&d&&(o.addEventListener("click",()=>{let r=parseInt(n.value,10)||1;r>1&&(n.value=r-1)}),d.addEventListener("click",()=>{let r=parseInt(n.value,10)||1;r<99&&(n.value=r+1)}),n.addEventListener("change",()=>{let r=parseInt(n.value,10)||1;r<1&&(r=1),r>99&&(r=99),n.value=r}));const c=document.getElementById("pd-btn-cart");c&&c.addEventListener("click",()=>{parseInt(n==null?void 0:n.value,10);const r=c.innerHTML;c.classList.add("pd-btn-cart--added"),c.innerHTML=`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>Đã thêm vào giỏ!</span>
      `,setTimeout(()=>{c.classList.remove("pd-btn-cart--added"),c.innerHTML=r},2e3)});const l=document.getElementById("pd-btn-buy");l&&l.addEventListener("click",()=>{parseInt(n==null?void 0:n.value,10)});const a=document.querySelectorAll(".pd-tab-btn"),h=document.querySelectorAll(".pd-panel");a.forEach(r=>{r.addEventListener("click",()=>{a.forEach(b=>{b.classList.remove("pd-tab-btn--active"),b.setAttribute("aria-selected","false")}),r.classList.add("pd-tab-btn--active"),r.setAttribute("aria-selected","true");const y=r.dataset.tab;h.forEach(b=>{const C=b.id===`pd-panel-${y}`;b.classList.toggle("pd-panel--hidden",!C)})})}),(f=document.getElementById("pd-crumb-home"))==null||f.addEventListener("click",r=>{r.preventDefault(),window.location.hash="#/"}),(p=document.getElementById("pd-crumb-cat"))==null||p.addEventListener("click",r=>{r.preventDefault(),window.location.hash=`#/san-pham/${t.cat}`})}const rt=[{id:"all",label:"Tất cả"},{id:"buying-guide",label:"Tư vấn chọn mua"},{id:"tips",label:"Hướng dẫn sử dụng"},{id:"trends",label:"Xu hướng công nghệ"}],D=[{id:"chon-laptop-sinh-vien",featured:!0,category:"buying-guide",categoryLabel:"Tư vấn chọn mua",title:"Cách chọn laptop phù hợp cho sinh viên",date:"08/10/2025",readTime:"5 phút đọc",summary:"Tổng hợp kinh nghiệm chọn mua laptop tối ưu theo ngành học: Kinh tế, CNTT, Thiết kế đồ họa và Y dược với mức ngân sách hợp lý nhất.",content:`
      <p>Bước vào giảng đường đại học, một chiếc laptop phù hợp là người bạn đồng hành không thể thiếu. Tùy thuộc vào ngành học và nhu cầu sử dụng thực tế, sinh viên cần cân nhắc các yếu tố then chốt như CPU, RAM, thời lượng pin và trọng lượng máy.</p>
      <h3>1. Xác định nhu cầu theo chuyên ngành</h3>
      <p>• <strong>Khối Kinh tế, Xã hội, Ngôn ngữ:</strong> Ưu tiên laptop mỏng nhẹ dưới 1.5kg, pin từ 8-10 tiếng, cấu hình Core i3/i5 hoặc Ryzen 5, RAM 8GB - 16GB để phục vụ soạn thảo văn bản, làm slide và thuyết trình.</p>
      <p>• <strong>Khối Công nghệ thông tin, Lập trình:</strong> Cần chip đa nhân hiệu năng cao (Core i5/i7 thế hệ 12 trở lên), RAM tối thiểu 16GB, ổ cứng SSD NVMe tốc độ cao để chạy máy ảo, Docker và biên dịch code mượt mà.</p>
      <p>• <strong>Khối Thiết kế đồ họa, Kiến trúc:</strong> Đòi hỏi màn hình chuẩn màu 100% sRGB, độ phân giải cao và card đồ họa rời chuyên dụng (RTX 3050 trở lên).</p>
      <h3>2. Tầm ngân sách tham khảo</h3>
      <p>Mức giá từ 12 - 18 triệu đồng hiện nay đã có thể sở hữu các dòng máy Ondata Pro với cấu hình mạnh mẽ, bảo hành chính hãng 24 tháng và thiết kế kim loại sang trọng.</p>
    `},{id:"meo-tang-tuoi-tho-pin-laptop",featured:!1,category:"tips",categoryLabel:"Hướng dẫn sử dụng",title:"5 mẹo tăng tuổi thọ pin laptop",date:"06/10/2025",readTime:"4 phút đọc",summary:"Những thói quen sử dụng đơn giản nhưng giúp kéo dài độ bền pin Lithium-ion trên laptop thêm từ 2 - 3 năm.",content:`
      <p>Pin laptop bị chai nhanh là nỗi lo của hầu hết người dùng. Áp dụng ngay 5 nguyên tắc vàng dưới đây:</p>
      <p>1. <strong>Bật chế độ giới hạn sạc (Battery Care):</strong> Giới hạn mức sạc tối đa ở ngưỡng 80% khi cắm sạc liên tục tại bàn làm việc.</p>
      <p>2. <strong>Tránh để pin cạn kiệt về 0%:</strong> Nên cắm sạc khi pin còn khoảng 15 - 20% để bảo toàn chu kỳ sạc.</p>
      <p>3. <strong>Giữ máy luôn mát mẻ:</strong> Nhiệt độ cao là kẻ thù số 1 của pin. Hãy sử dụng giá đỡ tản nhiệt hoặc kê cao đuôi máy khi làm tác vụ nặng.</p>
      <p>4. <strong>Điều chỉnh độ sáng màn hình hợp lý:</strong> Màn hình tiêu thụ tới 40% điện năng của máy.</p>
      <p>5. <strong>Cập nhật Driver và BIOS định kỳ:</strong> Giúp tối ưu hóa việc quản lý điện áp của hệ thống.</p>
    `},{id:"xu-huong-man-hinh-2025",featured:!1,category:"trends",categoryLabel:"Xu hướng công nghệ",title:"Xu hướng màn hình 2025 – Những điều cần biết",date:"05/10/2025",readTime:"6 phút đọc",summary:"Công nghệ màn hình cong 1500R, tấm nền OLED tần số quét 240Hz và tỷ lệ 16:10 đang dần định hình tiêu chuẩn làm việc và giải trí mới.",content:`
      <p>Năm 2025 đánh dấu bước chuyển mình mạnh mẽ trong ngành sản xuất tấm nền màn hình:</p>
      <p>• <strong>Tần số quét cao trở thành tiêu chuẩn:</strong> Mức 165Hz - 240Hz không còn độc quyền cho giới game thủ mà đã phủ sóng tới các dòng màn hình văn phòng cao cấp, mang lại trải nghiệm cuộn trang và làm việc mượt mà vượt bậc.</p>
      <p>• <strong>Độ cong 1500R ôm trọn góc nhìn:</strong> Giúp mắt điều tiết tự nhiên hơn khi nhìn từ tâm sang các góc mép màn hình, giảm mỏi mắt khi làm việc nhiều giờ liền.</p>
      <p>• <strong>Kết nối Type-C All-in-One:</strong> Một cáp duy nhất vừa truyền hình ảnh 4K, truyền dữ liệu vừa sạc ngược 65W - 90W cho laptop.</p>
    `},{id:"so-sanh-ram-ddr4-va-ddr5",featured:!1,category:"buying-guide",categoryLabel:"Tư vấn chọn mua",title:"So sánh RAM DDR4 và DDR5: Nên chọn loại nào?",date:"01/10/2025",readTime:"4 phút đọc",summary:"Phân tích chi tiết về tốc độ băng thông, điện năng tiêu thụ và chi phí đầu tư giữa chuẩn DDR4 phổ thông và thế hệ DDR5 tiên tiến.",content:`
      <p>Khi build PC hoặc nâng cấp laptop, người dùng thường băn khoăn liệu DDR5 đã thực sự cần thiết hay DDR4 vẫn còn đủ dùng:</p>
      <p>• <strong>Băng thông và tốc độ:</strong> DDR5 khởi điểm ở mức 4800MHz - 6400MHz, gần gấp đôi so với chuẩn DDR4 3200MHz, giúp giải quyết các tác vụ render video 4K và nạp texture game nhanh hơn đáng kể.</p>
      <p>• <strong>Mức giá và độ tương thích:</strong> Hiện nay giá RAM DDR5 đã hạ nhiệt rất nhiều và tiệm cận với DDR4, khiến đây trở thành sự lựa chọn đầu tư dài hạn thông minh cho các dàn máy mới thế hệ 13 và 14.</p>
    `}];function P(t,e=!1){if(e)return`
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
    `;switch(t){case"meo-tang-tuoi-tho-pin-laptop":return`
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
      `;case"xu-huong-man-hinh-2025":return`
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
      `;case"so-sanh-ram-ddr4-va-ddr5":return`
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
      `;default:return""}}function dt(t="all"){const e=D.find(c=>c.featured)||D[0],s=D.filter(c=>!c.featured),i=rt.map(c=>`
    <button 
      class="news-filter-btn${c.id===t?" news-filter-btn--active":""}" 
      data-filter="${c.id}"
      id="filter-btn-${c.id}"
    >
      ${c.label}
    </button>
  `).join(""),n=t==="all"?s:s.filter(c=>c.category===t),o=t==="all"||e.category===t,d=n.length>0?n.map(c=>`
        <article class="news-list-card" data-article-id="${c.id}" id="news-card-${c.id}">
          <div class="news-list-thumb">
            ${P(c.id,!1)}
          </div>
          <div class="news-list-content">
            <h3 class="news-list-title">${c.title}</h3>
            <div class="news-list-date">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>${c.date}</span>
            </div>
          </div>
          <div class="news-list-badge-wrap">
            <span class="news-badge news-badge--pill">${c.categoryLabel}</span>
          </div>
        </article>
      `).join(""):'<div class="news-empty-notice">Không có bài viết trong danh mục này.</div>';return`
    <section class="news-page" id="news-page">
      <div class="news-container">

        <!-- 1. BREADCRUMB -->
        <nav class="catalog-breadcrumb news-breadcrumb" aria-label="Breadcrumb">
          <a href="/" class="crumb-link" id="news-crumb-home">Trang chủ</a>
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
          ${i}
        </div>

        <!-- 4. FEATURED HERO ARTICLE (Top Large Card) -->
        ${o?`
          <article class="news-hero-card" data-article-id="${e.id}" id="news-hero-article">
            <div class="news-hero-image-wrap">
              ${P(e.id,!0)}
            </div>
            <div class="news-hero-footer">
              <div class="news-hero-info">
                <h2 class="news-hero-title">${e.title}</h2>
                <div class="news-hero-date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>${e.date}</span>
                </div>
              </div>
              <div class="news-hero-badge-wrap">
                <span class="news-badge news-badge--pill">${e.categoryLabel}</span>
              </div>
            </div>
          </article>
        `:""}

        <!-- 5. ARTICLES STACK LIST (Vertical list cards) -->
        <div class="news-list-stack" id="news-list-stack">
          ${d}
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
  `}function ht(t){var c;(c=document.getElementById("news-crumb-home"))==null||c.addEventListener("click",l=>{l.preventDefault(),window.location.hash="#/"}),document.querySelectorAll(".news-filter-btn").forEach(l=>{l.addEventListener("click",()=>{const a=l.dataset.filter;t&&t(a)})});const e=document.getElementById("news-modal"),s=document.getElementById("news-modal-body"),i=document.getElementById("news-modal-close"),n=document.getElementById("news-modal-backdrop");function o(l){const a=D.find(h=>h.id===l);!a||!e||!s||(s.innerHTML=`
      <div class="news-detail-badge">${a.categoryLabel}</div>
      <h2 class="news-detail-title">${a.title}</h2>
      <div class="news-detail-meta">
        <span>📅 ${a.date}</span>
        <span>⏱️ ${a.readTime}</span>
      </div>
      <div class="news-detail-summary">${a.summary}</div>
      <div class="news-detail-content">${a.content}</div>
    `,e.classList.add("news-modal--open"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden")}function d(){e&&(e.classList.remove("news-modal--open"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="")}i==null||i.addEventListener("click",d),n==null||n.addEventListener("click",d),document.querySelectorAll("[data-article-id]").forEach(l=>{l.addEventListener("click",()=>{o(l.dataset.articleId)})})}function pt(){return`
    <section class="contact-page" id="contact-page">
      <div class="contact-container">

        <!-- 1. BREADCRUMB -->
        <nav class="catalog-breadcrumb contact-breadcrumb" aria-label="Breadcrumb">
          <a href="#/" class="crumb-link" id="contact-crumb-home">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Liên hệ</span>
        </nav>

        <!-- 2. PAGE HEADER -->
        <div class="contact-header">
          <h1 class="contact-title">Liên hệ với Ondata</h1>
          <p class="contact-subtitle">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
        </div>

        <!-- 3. THREE CONTACT INFO CARDS -->
        <div class="contact-cards-grid">
          <!-- Card 1: Hotline -->
          <div class="contact-info-card">
            <div class="contact-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div class="contact-card-info">
              <h3 class="contact-card-label">Hotline</h3>
              <p class="contact-card-val contact-card-val--highlight">1800 1234</p>
              <p class="contact-card-sub">(8:00 - 22:00)</p>
            </div>
          </div>

          <!-- Card 2: Email -->
          <div class="contact-info-card">
            <div class="contact-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div class="contact-card-info">
              <h3 class="contact-card-label">Email</h3>
              <p class="contact-card-val">support@onda.vn</p>
              <p class="contact-card-sub">(Phản hồi trong 24h)</p>
            </div>
          </div>

          <!-- Card 3: Address -->
          <div class="contact-info-card">
            <div class="contact-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div class="contact-card-info">
              <h3 class="contact-card-label">Địa chỉ</h3>
              <p class="contact-card-val contact-card-val--addr">Số 10 Nguyễn Văn Cừ,</p>
              <p class="contact-card-sub">Long Biên, Hà Nội</p>
            </div>
          </div>
        </div>

        <!-- 4. CONTACT FORM SECTION -->
        <div class="contact-form-section">
          <div class="contact-form-header">
            <h2 class="contact-form-title">Gửi tin nhắn cho chúng tôi</h2>
            <p class="contact-form-subtitle">Điền thông tin bên dưới, chuyên viên Ondata sẽ liên hệ tư vấn và phản hồi nhanh chóng trong vòng 24 giờ.</p>
          </div>

          <form class="contact-form" id="contact-form">
            <!-- Row 1: Họ tên + SĐT -->
            <div class="contact-form-row">
              <div class="contact-field-group">
                <label for="contact-name" class="contact-field-label">Họ và tên <span class="req">*</span></label>
                <input 
                  type="text" 
                  id="contact-name" 
                  class="contact-input" 
                  required 
                  placeholder="Ví dụ: Nguyễn Văn A"
                />
              </div>

              <div class="contact-field-group">
                <label for="contact-phone" class="contact-field-label">Số điện thoại <span class="req">*</span></label>
                <input 
                  type="tel" 
                  id="contact-phone" 
                  class="contact-input" 
                  required 
                  placeholder="Ví dụ: 0987 654 321"
                />
              </div>
            </div>

            <!-- Row 2: Email -->
            <div class="contact-field-group">
              <label for="contact-email" class="contact-field-label">Email <span class="req">*</span></label>
              <input 
                type="email" 
                id="contact-email" 
                class="contact-input" 
                required 
                placeholder="Ví dụ: hotro@domain.com"
              />
            </div>

            <!-- Row 3: Nội dung -->
            <div class="contact-field-group">
              <label for="contact-message" class="contact-field-label">Nội dung liên hệ <span class="req">*</span></label>
              <textarea 
                id="contact-message" 
                class="contact-textarea" 
                rows="4" 
                required 
                placeholder="Nhập thông tin sản phẩm cần tư vấn, báo giá hoặc yêu cầu hỗ trợ..."
              ></textarea>
            </div>

            <!-- Row 4: Submit Button -->
            <button type="submit" class="contact-submit-btn" id="contact-submit-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              <span>Gửi liên hệ ngay</span>
            </button>
          </form>
        </div>

        <!-- 5. PARTNER / DEALER BANNER -->
        <div class="contact-partner-card">
          <div class="contact-partner-content">
            <h2 class="contact-partner-title">Hợp tác đại lý</h2>
            <p class="contact-partner-desc">
              Cùng Ondata phát triển bền vững, khai thác nhiều cơ hội kinh doanh hấp dẫn.
            </p>
            <button type="button" class="contact-partner-btn" id="btn-partner-register">
              Đăng ký ngay
            </button>
          </div>

          <div class="contact-partner-visual">
            <div class="partner-img-placeholder">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>Khung hình ảnh (thêm ảnh sau)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `}function gt(t){var i;(i=document.getElementById("contact-crumb-home"))==null||i.addEventListener("click",n=>{n.preventDefault(),window.location.hash="#/"});const e=document.getElementById("contact-form");e&&e.addEventListener("submit",n=>{var d,c;n.preventDefault();const o=(d=document.getElementById("contact-name"))==null?void 0:d.value;(c=document.getElementById("contact-phone"))==null||c.value,t&&t(`Cảm ơn ${o||"bạn"}! Tin nhắn liên hệ đã được gửi thành công.`),e.reset()});const s=document.getElementById("btn-partner-register");s&&s.addEventListener("click",()=>{t&&t("Cảm ơn bạn đã quan tâm hợp tác! Nhân viên Ondata sẽ liên hệ trong 24 giờ.")})}function k(t){switch(t){case"hero":return`
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
      `;case"shield-banner":return`
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
      `;case"tech-banner":return`
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
      `;case"track-banner":return`
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
      `;case"contact-banner":return`
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
      `;case"privacy-banner":return`
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
      `;default:return""}}function vt(){const e=[{id:"bao-hanh",title:"Chính sách bảo hành<br>& đổi trả",desc:"Thông tin chi tiết về điều kiện, quy trình bảo hành và đổi trả sản phẩm.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>'},{id:"ky-thuat",title:"Hỗ trợ kỹ thuật",desc:"Hướng dẫn sử dụng, cài đặt, khắc phục sự cố và các yêu cầu hỗ trợ kỹ thuật.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'},{id:"tra-cuu",title:"Tra cứu đơn hàng",desc:"Kiểm tra trạng thái đơn hàng và thông tin giao hàng nhanh chóng.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'},{id:"lien-he",title:"Liên hệ hỗ trợ",desc:"Hotline, Zalo, Email và biểu mẫu liên hệ với đội ngũ hỗ trợ.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'},{id:"bao-mat",title:"Chính sách bảo mật",desc:"Cam kết bảo vệ thông tin cá nhân của khách hàng.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'}].map(s=>`
    <div class="sp-card" data-sub="${s.id}" id="sp-card-${s.id}">
      <div class="sp-card-icon-wrap">
        ${s.icon}
      </div>
      <h3 class="sp-card-title">${s.title}</h3>
      <p class="sp-card-desc">${s.desc}</p>
      <div class="sp-card-btn-wrap">
        <button class="sp-card-circle-btn" aria-label="Xem chi tiết ${s.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
  `).join("");return`
    <section class="sp-page" id="sp-page">
      <div class="sp-container">

        <!-- 1. BREADCRUMB -->
        <nav class="catalog-breadcrumb sp-breadcrumb" aria-label="Breadcrumb">
          <a href="/" class="crumb-link" id="sp-crumb-home">Trang chủ</a>
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
            ${k("hero")}
          </div>
        </div>

        <!-- 3. FIVE SUPPORT CARDS GRID -->
        <div class="sp-cards-grid">
          ${e}
        </div>

      </div>
    </section>
  `}function ut(){return`
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
        <!-- Breadcrumb -->
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Chính sách bảo hành & đổi trả</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Chính sách bảo hành & đổi trả</h1>
          <p class="sp-sub-desc">Đảm bảo quyền lợi của bạn với chính sách minh bạch, rõ ràng và thuận tiện.</p>
        </div>

        <!-- Graphic Banner -->
        <div class="sp-sub-banner">
          ${k("shield-banner")}
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
          <a href="/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `}function ft(){const t=[{title:"Hướng dẫn sử dụng sản phẩm",sub:"Tài liệu hướng dẫn, video minh họa",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'},{title:"Cài đặt phần mềm & driver",sub:"Tải driver, phần mềm cần thiết",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'},{title:"Khắc phục sự cố thường gặp",sub:"Các lỗi phổ biến và cách xử lý",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'},{title:"Gửi yêu cầu hỗ trợ",sub:"Điền biểu mẫu để được hỗ trợ trực tiếp",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>'}];return`
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Hỗ trợ kỹ thuật</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Hỗ trợ kỹ thuật</h1>
          <p class="sp-sub-desc">Hướng dẫn sử dụng, cài đặt và giải quyết sự cố một cách nhanh chóng.</p>
        </div>

        <div class="sp-sub-banner">
          ${k("tech-banner")}
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">Các hỗ trợ nổi bật</h2>
          <div class="sp-topics-list">
            ${t.map(e=>`
              <div class="sp-topic-card" style="cursor:pointer;">
                <div class="sp-topic-icon">${e.icon}</div>
                <div class="sp-topic-info">
                  <strong>${e.title}</strong>
                  <span>${e.sub}</span>
                </div>
                <div class="sp-topic-arrow">›</div>
              </div>
            `).join("")}
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
          <a href="/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `}function mt(){return`
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Tra cứu đơn hàng</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Tra cứu đơn hàng</h1>
          <p class="sp-sub-desc">Nhập mã đơn hàng hoặc số điện thoại để kiểm tra trạng thái đơn hàng của bạn.</p>
        </div>

        <div class="sp-sub-banner">
          ${k("track-banner")}
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
          <a href="/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `}function bt(){return`
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Liên hệ hỗ trợ</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Liên hệ hỗ trợ</h1>
          <p class="sp-sub-desc">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn một cách nhanh chóng nhất.</p>
        </div>

        <div class="sp-sub-banner">
          ${k("contact-banner")}
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
          <a href="/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `}function yt(){return`
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Chính sách bảo mật</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Chính sách bảo mật</h1>
          <p class="sp-sub-desc">Bảo vệ thông tin cá nhân của bạn là ưu tiên hàng đầu của Ondata.</p>
        </div>

        <div class="sp-sub-banner">
          ${k("privacy-banner")}
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
          <a href="/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `}function wt(t=null){switch(t){case"bao-hanh":return ut();case"ky-thuat":return ft();case"tra-cuu":return mt();case"lien-he":return bt();case"bao-mat":return yt();default:return vt()}}function kt(t=null,e){var h;(h=document.getElementById("sp-crumb-home"))==null||h.addEventListener("click",f=>{f.preventDefault(),window.navigate?window.navigate("/"):window.location.assign("/")}),document.querySelectorAll(".sp-card[data-sub]").forEach(f=>{f.addEventListener("click",()=>{const p=f.dataset.sub;p&&(window.navigate?window.navigate(`/ho-tro/${p}`):window.location.assign(`/ho-tro/${p}`))})});const s=document.getElementById("btn-tab-warranty"),i=document.getElementById("btn-tab-exchange"),n=document.getElementById("panel-warranty"),o=document.getElementById("panel-exchange");s&&i&&n&&o&&(s.addEventListener("click",()=>{s.classList.add("sp-tab-pill--active"),i.classList.remove("sp-tab-pill--active"),n.classList.remove("sp-tab-panel--hidden"),o.classList.add("sp-tab-panel--hidden")}),i.addEventListener("click",()=>{i.classList.add("sp-tab-pill--active"),s.classList.remove("sp-tab-pill--active"),o.classList.remove("sp-tab-panel--hidden"),n.classList.add("sp-tab-panel--hidden")}));const d=document.getElementById("btn-track-submit"),c=document.getElementById("track-input"),l=document.getElementById("track-result");d&&c&&l&&d.addEventListener("click",()=>{const f=c.value.trim();if(!f){e&&e("Vui lòng nhập mã đơn hàng hoặc số điện thoại!");return}l.style.display="block",e&&e(`Đã tìm thấy thông tin đơn hàng: ${f}`)});const a=document.getElementById("sp-quick-form");a&&a.addEventListener("submit",f=>{f.preventDefault(),e&&e("Cảm ơn bạn! Yêu cầu hỗ trợ đã được gửi thành công."),a.reset()})}let q=0,N="all";const A={laptop:{label:"Máy tính xách tay",sub:"Hiệu năng mạnh mẽ, đồng hành mọi hành trình"},desktop:{label:"Máy tính để bàn",sub:"Sức mạnh không giới hạn cho mọi tác vụ"},monitor:{label:"Màn hình",sub:"Hiển thị sắc nét, trải nghiệm đỉnh cao"},ram:{label:"RAM",sub:"Tốc độ vượt trội, đa nhiệm mượt mà"},keyboard:{label:"Bàn phím",sub:"Gõ phím chuyên nghiệp, cảm giác tuyệt vời"},mouse:{label:"Chuột",sub:"Chính xác từng click, gaming & văn phòng"},accessories:{label:"Phụ kiện",sub:"Hoàn thiện setup của bạn"},other:{label:"Thiết bị khác",sub:"Khám phá thêm các sản phẩm công nghệ"},all:{label:"Sản phẩm",sub:"Tất cả sản phẩm chính hãng Ondata"}};function E(t){let e=document.querySelector(".toast-container");e||(e=document.createElement("div"),e.className="toast-container",document.body.appendChild(e));const s=document.createElement("div");s.className="toast-alert",s.innerHTML=`<span style="color:#7ea835;font-weight:700;">✓</span> <span>${t}</span>`,e.appendChild(s),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(10px)",setTimeout(()=>s.remove(),300)},3e3)}function xt(){if(window.location.hash&&window.location.hash.startsWith("#/")){const e=window.location.hash.slice(1);window.history.replaceState({},"",e)}let t=window.location.pathname.replace(/\/+$/,"")||"/";if(t.startsWith("/dist")&&(t=t.replace(/^\/dist/,"")||"/"),t.startsWith("/san-pham")){const e=t.split("/").filter(Boolean),s=e[1]||"all",i=e[2]||null;if(i)return{page:"detail",cat:s,id:i};if(s!=="all"){const n=z(s);if(n)return{page:"detail",cat:n.cat,id:n.id}}return{page:"catalog",cat:s}}return t.startsWith("/tin-tuc")?{page:"news"}:t.startsWith("/lien-he")?{page:"contact"}:t.startsWith("/ho-tro")?{page:"support",sub:t.split("/").filter(Boolean)[1]||null}:{page:"home"}}function m(t){const e=t.startsWith("#/")?t.slice(1):t;window.location.pathname!==e&&window.history.pushState({},"",e),B(),window.scrollTo({top:0,behavior:"smooth"})}window.navigate=m;function Bt(){return`
    ${K()}
    ${Q()}
    ${U()}
    ${F()}
  `}function Ct(){document.querySelectorAll(".sidebar-item a[data-cat]").forEach(e=>{e.addEventListener("click",s=>{s.preventDefault(),m(`/san-pham/${e.dataset.cat}`)})}),document.querySelectorAll('a[href="#featured-products"], a[href="/san-pham/all"]').forEach(e=>{e.addEventListener("click",s=>{s.preventDefault(),m("/san-pham/all")})});const t=document.getElementById("newsletter-form");t&&(t.onsubmit=e=>{e.preventDefault();const s=document.getElementById("newsletter-email");s!=null&&s.value&&(E(`Đã đăng ký nhận tin thành công: ${s.value}`),s.value="")}),document.querySelectorAll(".product-item-card").forEach(e=>{e.onclick=()=>{const s=e.dataset.id,i=e.dataset.cat;m(s&&i?`/san-pham/${i}/${s}`:"/san-pham/all")}})}function Mt(t){lt(t),document.querySelectorAll(".catsidebar-link[data-cat]").forEach(e=>{e.addEventListener("click",s=>{s.preventDefault(),m(`/san-pham/${e.dataset.cat}`)})})}function Lt(t){const e=A[t]||A.all;return X(t,e)}function Tt(t){it(),document.querySelectorAll(".catsidebar-link[data-cat]").forEach(e=>{e.addEventListener("click",s=>{s.preventDefault(),m(`/san-pham/${e.dataset.cat}`)})})}function Dt(){const t=document.getElementById("nav-hamburger"),e=document.getElementById("nav-menu");t&&e&&(t.onclick=()=>e.classList.toggle("mobile-open"));const s=document.getElementById("search-input"),i=document.getElementById("search-dropdown"),n=document.querySelector(".search-btn");if(s&&i){let p=[],r=-1;const y=g=>{switch(g){case"laptop":return"💻";case"monitor":return"📺";case"desktop":return"🖥️";case"ram":return"💾";case"keyboard":return"⌨️";case"mouse":return"🖱️";default:return"⚡"}},b=g=>{var u;return((u=A[g])==null?void 0:u.label)||"Sản phẩm"},C=g=>{const u=(g||"").trim();u?(p=R(u),r=-1,p.length>0?i.innerHTML=`
            <div class="search-header-label">Tìm thấy ${p.length} sản phẩm</div>
            ${p.map((v,x)=>`
              <div class="search-item" data-id="${v.id}" data-cat="${v.cat}" data-idx="${x}">
                <span class="search-item-icon">${y(v.cat)}</span>
                <div class="search-item-details">
                  <span class="search-item-name">${v.name}</span>
                  <span class="search-item-cat">${v.badge?`<span class="search-badge">${v.badge}</span>`:""} ${b(v.cat)}</span>
                </div>
                <span class="search-item-price">Liên hệ</span>
              </div>
            `).join("")}
          `:i.innerHTML=`
            <div class="search-empty">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.4">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <span>Không tìm thấy sản phẩm cho "<strong>${u}</strong>"</span>
            </div>
          `):(p=w.slice(0,5),r=-1,i.innerHTML=`
          <div class="search-header-label">Sản phẩm gợi ý</div>
          ${p.map((v,x)=>`
            <div class="search-item" data-id="${v.id}" data-cat="${v.cat}" data-idx="${x}">
              <span class="search-item-icon">${y(v.cat)}</span>
              <div class="search-item-details">
                <span class="search-item-name">${v.name}</span>
                <span class="search-item-cat">${v.badge?`<span class="search-badge">${v.badge}</span>`:""} ${b(v.cat)}</span>
              </div>
              <span class="search-item-price">Liên hệ</span>
            </div>
          `).join("")}
        `),i.querySelectorAll(".search-item").forEach(v=>{v.addEventListener("mousedown",x=>{x.preventDefault();const I=v.dataset.id,$=v.dataset.cat;I&&$&&M($,I)})})},M=(g,u)=>{i.classList.remove("show"),s.blur(),m(`/san-pham/${g}/${u}`)},H=()=>{if(r>=0&&p[r]){const v=p[r];M(v.cat,v.id);return}const g=s.value.trim();if(!g){p.length>0&&M(p[0].cat,p[0].id);return}const u=R(g);u.length>0?M(u[0].cat,u[0].id):E(`Không tìm thấy sản phẩm phù hợp với "${g}"`)};s.addEventListener("focus",()=>{C(s.value),i.classList.add("show")}),s.addEventListener("input",()=>{C(s.value),i.classList.add("show")}),s.addEventListener("keydown",g=>{const u=i.querySelectorAll(".search-item");g.key==="ArrowDown"?(g.preventDefault(),u.length>0&&(r=(r+1)%u.length,G(u))):g.key==="ArrowUp"?(g.preventDefault(),u.length>0&&(r=(r-1+u.length)%u.length,G(u))):g.key==="Enter"?(g.preventDefault(),H()):g.key==="Escape"&&i.classList.remove("show")});const G=g=>{g.forEach((u,v)=>{u.classList.toggle("search-item--active",v===r),v===r&&u.scrollIntoView({block:"nearest"})})};n&&n.addEventListener("click",g=>{g.preventDefault(),H()}),document.addEventListener("click",g=>{!s.contains(g.target)&&!i.contains(g.target)&&!(n!=null&&n.contains(g.target))&&i.classList.remove("show")})}const o=document.getElementById("back-to-top");window.addEventListener("scroll",()=>{o&&o.classList.toggle("visible",window.scrollY>300)}),o&&(o.onclick=()=>window.scrollTo({top:0,behavior:"smooth"}));const d=document.getElementById("menu-home");d&&d.addEventListener("click",p=>{p.preventDefault(),m("/")});const c=document.getElementById("menu-products");c&&c.addEventListener("click",p=>{p.preventDefault(),m("/san-pham/all")});const l=document.getElementById("menu-news");l&&l.addEventListener("click",p=>{p.preventDefault(),m("/tin-tuc")});const a=document.getElementById("menu-contact");a&&a.addEventListener("click",p=>{p.preventDefault(),m("/lien-he")});const h=document.getElementById("menu-support");h&&h.addEventListener("click",p=>{p.preventDefault(),m("/ho-tro")});const f=document.getElementById("cart-badge");f&&(f.textContent=q)}function B(){var a,h,f,p,r;const t=document.querySelector("#app");if(!t)return;const e=xt(),s=e.page==="home",i=e.page==="catalog",n=e.page==="detail",o=e.page==="news",d=e.page==="contact",c=e.page==="support";document.body.classList.add("theme-onda-dark");let l=null;n&&(l=z(e.id)),t.innerHTML=`
    ${V(q)}
    <main id="main-content">
      ${s?Bt():""}
      ${i?Lt(e.cat):""}
      ${n?ct(l):""}
      ${o?dt(N):""}
      ${d?pt():""}
      ${c?wt(e.sub):""}
    </main>
    ${W()}
    <button class="back-to-top" id="back-to-top" aria-label="Lên đầu trang">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
  `,window.scrollTo({top:0}),Dt(),s&&Ct(),i&&Tt(e.cat),n&&Mt(l),o&&ht(y=>{N=y,B()}),d&&gt(E),c&&kt(e.sub,E),(a=document.getElementById("menu-home"))==null||a.classList.toggle("active",s),(h=document.getElementById("menu-products"))==null||h.classList.toggle("active",i||n),(f=document.getElementById("menu-news"))==null||f.classList.toggle("active",o),(p=document.getElementById("menu-contact"))==null||p.classList.toggle("active",d),(r=document.getElementById("menu-support"))==null||r.classList.toggle("active",c)}window.addEventListener("popstate",B);window.addEventListener("hashchange",B);document.addEventListener("click",t=>{const e=t.target.closest("a");if(!e)return;const s=e.getAttribute("href");if(s){if(s.startsWith("#")&&!s.startsWith("#/")){const i=document.querySelector(s);i&&(t.preventDefault(),i.scrollIntoView({behavior:"smooth"}));return}if(s.startsWith("/")&&!s.startsWith("//")){t.preventDefault(),m(s);return}if(s.startsWith("#/")){t.preventDefault(),m(s.slice(1));return}}});B();
