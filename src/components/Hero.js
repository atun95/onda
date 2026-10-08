export function renderHero() {
  return `
    <section class="hero" id="hero">
      <div class="hero-bg-overlay"></div>
      <div class="hero-particles" id="hero-particles"></div>
      <div class="hero-content" id="hero-content">
        <div class="hero-badge" id="hero-badge">
          <span class="badge-dot"></span>
          Thương hiệu được bảo hộ tại Việt Nam từ 2026
        </div>
        <h1 class="hero-title" id="hero-title">
          Nối Nguồn<br/>
          <span class="hero-title-accent">Công Nghệ</span>
        </h1>
        <p class="hero-subtitle" id="hero-subtitle">
          Phân phối thiết bị công nghệ chất lượng cao — máy tính All-in-One, màn hình, linh kiện từ thương hiệu Onda (Trung Quốc) với hơn <strong>35 năm kinh nghiệm</strong> toàn cầu.
        </p>
        <div class="hero-actions" id="hero-actions">
          <a href="#services" class="btn-primary" id="hero-cta-primary">Khám Phá Sản Phẩm</a>
          <a href="#contact" class="btn-outline" id="hero-cta-secondary">Liên Hệ Ngay</a>
        </div>
        <div class="hero-stats" id="hero-stats">
          <div class="hero-stat">
            <span class="stat-num">35+</span>
            <span class="stat-label">Năm kinh nghiệm</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="stat-num">1989</span>
            <span class="stat-label">Năm thành lập</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <span class="stat-num">100%</span>
            <span class="stat-label">Chất lượng bảo đảm</span>
          </div>
        </div>
      </div>
      <div class="hero-visual" id="hero-visual">
        <div class="hero-img-frame">
          <img src="/office.jpg" alt="Ondata Showroom" class="hero-office-img" id="hero-office-img" />
        </div>
      </div>
      <div class="hero-scroll-hint" id="hero-scroll-hint">
        <span>Cuộn xuống</span>
        <div class="scroll-arrow"></div>
      </div>
    </section>
  `;
}
