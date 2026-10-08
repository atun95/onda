export function renderAbout() {
  return `
    <section class="about" id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-text" id="about-text">
            <div class="section-label">Về Chúng Tôi</div>
            <h2 class="section-title">Ondata Việt Nam – Đại Diện Chính Thức Onda</h2>
            <p class="about-desc">
              <strong>Ondata</strong> là thương hiệu con thuộc thương hiệu <strong>Onda</strong> đến từ Trung Quốc, được thành lập từ năm <strong>1989</strong> với trụ sở chính tại Quảng Châu.
            </p>
            <p class="about-desc">
              Onda cung cấp đa dạng các sản phẩm liên quan đến máy tính như linh kiện, màn hình và máy tính <strong>All-in-One</strong>. Năm 2026, Ondata chính thức được bảo hộ thương hiệu tại Việt Nam.
            </p>
            <div class="about-values" id="about-values">
              <div class="value-item" id="value-vision">
                <div class="value-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/></svg>
                </div>
                <div>
                  <h4>Tầm nhìn</h4>
                  <p>Trở thành nền tảng phân phối công nghệ hàng đầu, xây dựng hệ sinh thái đối tác phát triển bền vững tại Việt Nam.</p>
                </div>
              </div>
              <div class="value-item" id="value-mission">
                <div class="value-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div>
                  <h4>Sứ mệnh</h4>
                  <p>Kết nối nguồn công nghệ chất lượng, tạo giá trị và đồng hành cùng đối tác trên hành trình phát triển bền vững.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-visual" id="about-visual">
            <div class="about-card-stack">
              <div class="about-card about-card-main" id="about-card-main">
                <div class="about-card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>Máy tính All-in-One</h3>
                <p>Thiết kế tích hợp, hiệu năng cao</p>
              </div>
              <div class="about-card about-card-2" id="about-card-2">
                <div class="about-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/></svg>
                </div>
                <h3>Linh Kiện Máy Tính</h3>
                <p>Nhập khẩu chính hãng</p>
              </div>
              <div class="about-card about-card-3" id="about-card-3">
                <div class="about-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 13s3-8 10-8 10 8 10 8"/><path d="M2 13s3 8 10 8 10-8 10-8"/><circle cx="12" cy="13" r="3"/></svg>
                </div>
                <h3>Màn Hình</h3>
                <p>Full HD & 2K chất lượng cao</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
