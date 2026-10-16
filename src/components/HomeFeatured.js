export function renderHomeFeatured() {
  return `
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
  `;
}
