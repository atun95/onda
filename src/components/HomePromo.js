export function renderHomePromo() {
  return `
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
  `;
}
