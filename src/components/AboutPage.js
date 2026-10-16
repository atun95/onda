/* ============================================================
   ABOUT PAGE COMPONENT - VỀ ONDATA VIETNAM
   Thương hiệu công nghệ phần cứng & giải pháp All-in-one hàng đầu
   ============================================================ */

export function renderAboutPage() {
  return `
    <div class="about-page" id="about-page">
      <!-- HERO BANNER -->
      <section class="about-hero">
        <div class="container">
          <div class="about-hero-grid">
            <div class="about-hero-content">
              <div class="about-badge-pill">
                <span class="pulse-dot"></span>
                <span>Thương hiệu công nghệ Việt Nam</span>
              </div>
              <h1 class="about-hero-title">
                Kiến tạo tương lai công nghệ cùng <span class="highlight-text">ONDATA</span>
              </h1>
              <p class="about-hero-desc">
                ONDATA tự hào là thương hiệu tiên phong nghiên cứu, sản xuất và phân phối các giải pháp máy tính All-in-one, màn hình chuyên nghiệp, linh kiện phần cứng và hệ sinh thái phụ kiện công nghệ đạt chuẩn chất lượng quốc tế tại Việt Nam.
              </p>
              <div class="about-hero-actions">
                <a href="/san-pham/all" class="btn-about-primary">
                  <span>Khám phá sản phẩm</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="/lien-he" class="btn-about-secondary">
                  <span>Hợp tác & Đại lý</span>
                </a>
              </div>
            </div>

            <div class="about-hero-visual">
              <div class="about-visual-card">
                <div class="visual-glow"></div>
                <div class="about-brand-emblem">
                  <div class="emblem-circle">
                    <img src="/logo tach nen.png" alt="ONDATA" class="about-emblem-logo" onerror="this.onerror=null; this.src='/logo.png';" />
                  </div>
                  <div class="emblem-tag">INNOVATION & RELIABILITY</div>
                </div>
                <div class="floating-badge badge-top-right">
                  <span class="fb-icon">✓</span>
                  <div>
                    <strong>100% Chính hãng</strong>
                    <small>Tiêu chuẩn quốc tế</small>
                  </div>
                </div>
                <div class="floating-badge badge-bottom-left">
                  <span class="fb-icon">★</span>
                  <div>
                    <strong>Bảo hành 24 - 36T</strong>
                    <small>Tận nơi trên toàn quốc</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- METRICS / STATS BAR -->
      <section class="about-stats-section">
        <div class="container">
          <div class="about-stats-grid">
            <div class="stat-box">
              <div class="stat-number">50.000+</div>
              <div class="stat-label">Khách hàng tin cậy</div>
              <p class="stat-sub">Cá nhân, trường học và doanh nghiệp toàn quốc</p>
            </div>
            <div class="stat-box">
              <div class="stat-number">63</div>
              <div class="stat-label">Tỉnh thành phủ sóng</div>
              <p class="stat-sub">Hệ thống phân phối và trạm dịch vụ bảo hành</p>
            </div>
            <div class="stat-box">
              <div class="stat-number">99.8%</div>
              <div class="stat-label">Tỷ lệ hài lòng</div>
              <p class="stat-sub">Đánh giá cao về độ ổn định và dịch vụ chăm sóc</p>
            </div>
            <div class="stat-box">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Hỗ trợ kỹ thuật</div>
              <p class="stat-sub">Đội ngũ kỹ sư phần cứng đồng hành liên tục</p>
            </div>
          </div>
        </div>
      </section>

      <!-- STORY & MISSION -->
      <section class="about-story-section">
        <div class="container">
          <div class="about-section-header">
            <span class="section-sub-label">CÂU CHUYỆN THƯƠNG HIỆU</span>
            <h2 class="section-main-title">Sứ Mệnh & Tầm Nhìn Của Ondata</h2>
            <p class="section-main-desc">
              Chúng tôi tin rằng công nghệ hiện đại phải đi liền với sự tối giản, bền bỉ và dễ tiếp cận cho mọi người dùng Việt.
            </p>
          </div>

          <div class="about-story-grid">
            <div class="story-card">
              <div class="story-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
                </svg>
              </div>
              <h3>Tầm Nhìn Chiến Lược</h3>
              <p>
                Trở thành thương hiệu công nghệ phần cứng hàng đầu tại Việt Nam và Đông Nam Á, tiên phong định hình xu hướng máy tính All-in-one tinh gọn, bền bỉ, tiết kiệm năng lượng và thân thiện với môi trường làm việc thông minh.
              </p>
            </div>

            <div class="story-card">
              <div class="story-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Sứ Mệnh Phụng Sự</h3>
              <p>
                Cung cấp hệ thống giải pháp phần cứng tối ưu chi phí đầu tư cho doanh nghiệp, cơ quan giáo dục và người dùng cá nhân. Đồng thời mang tới dịch vụ bảo hành vàng tận tâm, phản hồi nhanh chóng và minh bạch.
              </p>
            </div>

            <div class="story-card">
              <div class="story-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3>Cam Kết Chất Lượng</h3>
              <p>
                Từng sản phẩm mang thương hiệu Ondata đều trải qua quy trình kiểm thử lão hóa (Burn-in Test) nghiêm ngặt trong 72 giờ trước khi xuất xưởng, đảm bảo độ bền vượt trội và tỷ lệ lỗi kỹ thuật tiệm cận mức 0%.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4 GIÁ TRỊ CỐT LÕI -->
      <section class="about-values-section">
        <div class="container">
          <div class="about-section-header">
            <span class="section-sub-label">GIÁ TRỊ CỐT LÕI</span>
            <h2 class="section-main-title">4 Trụ Cột Tạo Nên Bản Sắc Ondata</h2>
          </div>

          <div class="values-grid">
            <div class="value-item">
              <div class="value-index">01</div>
              <h4>Đột Phá (Innovation)</h4>
              <p>Liên tục đổi mới thiết kế tinh giản, tích hợp công nghệ mới nhất vào từng dòng máy All-in-one và màn hình.</p>
            </div>
            <div class="value-item">
              <div class="value-index">02</div>
              <h4>Bền Bỉ (Durability)</h4>
              <p>Linh kiện tuyển chọn chuẩn công nghiệp, hoạt động mát mẻ và ổn định liên tục 24/7 dưới mọi điều kiện thời tiết nhiệt đới.</p>
            </div>
            <div class="value-item">
              <div class="value-index">03</div>
              <h4>Tối Ưu (Optimization)</h4>
              <p>Tối ưu hóa giữa chi phí và hiệu năng sử dụng thực tế, mang lại giá trị hoàn vốn cao nhất cho khách hàng doanh nghiệp.</p>
            </div>
            <div class="value-item">
              <div class="value-index">04</div>
              <h4>Đồng Hành (Companion)</h4>
              <p>Chính sách bảo hành tận nơi chu đáo, đổi mới nhanh chóng và luôn lắng nghe đóng góp để hoàn thiện sản phẩm.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- HỆ SINH THÁI SẢN PHẨM ONDATA -->
      <section class="about-ecosystem-section">
        <div class="container">
          <div class="about-section-header">
            <span class="section-sub-label">HỆ SINH THÁI</span>
            <h2 class="section-main-title">Hệ Sinh Thái Sản Phẩm Toàn Diện</h2>
            <p class="section-main-desc">Từ thiết bị chính đến phụ kiện ngoại vi, Ondata mang tới góc làm việc hiện đại và đồng bộ.</p>
          </div>

          <div class="ecosystem-grid">
            <div class="ecosystem-card" onclick="window.navigate('/san-pham/aio')" style="cursor:pointer;">
              <div class="eco-icon">🖥️</div>
              <h3>Máy tính All-in-one</h3>
              <p>Thiết kế nguyên khối sang trọng, tích hợp CPU, loa, webcam và WiFi mượt mà trong thân máy siêu mỏng.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>

            <div class="ecosystem-card" onclick="window.navigate('/san-pham/monitor')" style="cursor:pointer;">
              <div class="eco-icon">📺</div>
              <h3>Màn hình Ondata</h3>
              <p>Độ phân giải 2K/4K, màn hình cong 1500R/1000R, tần số quét 100Hz – 240Hz chuẩn màu đồ họa và gaming.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>

            <div class="ecosystem-card" onclick="window.navigate('/san-pham/keyboard')" style="cursor:pointer;">
              <div class="eco-icon">⌨️</div>
              <h3>Bàn phím cơ & Văn phòng</h3>
              <p>Switch bền bỉ 100 triệu lần nhấn, cấu trúc Gasket Mount êm ái, công nghệ từ tính Rapid Trigger thi đấu.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>

            <div class="ecosystem-card" onclick="window.navigate('/san-pham/mouse')" style="cursor:pointer;">
              <div class="eco-icon">🖱️</div>
              <h3>Chuột quang & Không dây</h3>
              <p>Cảm biến PixArt chuẩn xác, thiết kế công thái học đứng chống mỏi cổ tay và nút bấm Silent giảm tiếng ồn.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>

            <div class="ecosystem-card" onclick="window.navigate('/san-pham/ram')" style="cursor:pointer;">
              <div class="eco-icon">💾</div>
              <h3>RAM Bộ nhớ cao cấp</h3>
              <p>Chuẩn DDR4/DDR5 tốc độ cao, tản nhiệt nhôm mát lạnh, bảo hành trọn đời an tâm tuyệt đối.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>

            <div class="ecosystem-card" onclick="window.navigate('/san-pham/accessories')" style="cursor:pointer;">
              <div class="eco-icon">🔌</div>
              <h3>Phụ kiện công nghệ</h3>
              <p>Giá treo màn hình trợ lực khí nén, Hub chuyển đổi 8-in-1 Type-C, pad chuột XXL và giá đỡ laptop nhôm.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA BANNER -->
      <section class="about-cta-section">
        <div class="container">
          <div class="about-cta-box">
            <div class="cta-text">
              <h2>Sẵn sàng nâng cấp góc làm việc của bạn?</h2>
              <p>Liên hệ đội ngũ chuyên viên Ondata để nhận báo giá dự án, chính sách đại lý hoặc tư vấn cấu hình phù hợp.</p>
            </div>
            <div class="cta-buttons">
              <a href="/lien-he" class="btn-cta-highlight">Liên hệ ngay</a>
              <a href="/ho-tro" class="btn-cta-outline">Trung tâm hỗ trợ</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initAboutPageInteractions() {
  // Add subtle interaction handlers if needed
}
