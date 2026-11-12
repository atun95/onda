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
          <div class="about-story-banner">
            <img src="/images/banners/banner-about-story.jpg" alt="Câu chuyện thương hiệu Ondata" />
            <a class="banner-hotspot" style="left:75.3%;top:15.5%;width:19.5%;height:70%" href="tel:0867036698" aria-label="Hotline 0867 036 698"></a>
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
              <div class="stat-number">T2–T7</div>
              <div class="stat-label">Hỗ trợ kỹ thuật</div>
              <p class="stat-sub">8h30–12h00 và 13h30–18h00, hết sáng thứ Bảy</p>
            </div>
          </div>
        </div>
      </section>

      <!-- STORY & MISSION -->
      <section class="about-story-section">
        <div class="container">
          <div class="about-section-header">
            <span class="section-sub-label">SỨ MỆNH & TẦM NHÌN</span>
            <h2 class="section-main-title">Sứ Mệnh & Tầm Nhìn Của Ondata</h2>
          </div>

          <div class="about-story-grid">
            <div class="story-card">
              <div class="story-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Sứ mệnh</h3>
              <p>
                Trở thành nền tảng phân phối công nghệ hàng đầu, xây dựng hệ sinh thái đối tác phát triển bền vững tại Việt Nam.
              </p>
            </div>

            <div class="story-card">
              <div class="story-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
                </svg>
              </div>
              <h3>Tầm nhìn</h3>
              <p>
                Kết nối nguồn công nghệ chất lượng, tạo giá trị và đồng hành cùng đối tác trên hành trình phát triển bền vững.
              </p>
            </div>

            <div class="story-card">
              <div class="story-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3>Cam kết</h3>
              <p>
                Luôn thực hiện đúng những gì đã cam kết, đảm bảo trách nhiệm trong chất lượng sản phẩm, dịch vụ và tiến độ hợp tác. Lấy sự hài lòng và lợi ích lâu dài của khách hàng, đối tác làm thước đo cho mọi hoạt động.
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
              <h4>Uy tín – Nền tảng niềm tin</h4>
              <p>Minh bạch trong kinh doanh, nhất quán trong cam kết và đặt chữ tín lên hàng đầu trong mọi hoạt động.</p>
            </div>
            <div class="value-item">
              <div class="value-index">02</div>
              <h4>Cam kết – Trách nhiệm đồng hành</h4>
              <p>Luôn có trách nhiệm với sản phẩm, dịch vụ và những giá trị đã cam kết với khách hàng, đối tác.</p>
            </div>
            <div class="value-item">
              <div class="value-index">03</div>
              <h4>Kết nối – Sức mạnh hợp tác</h4>
              <p>Kết nối nguồn cung công nghệ, khách hàng và đối tác, cùng xây dựng hệ sinh thái phân phối hiệu quả.</p>
            </div>
            <div class="value-item">
              <div class="value-index">04</div>
              <h4>Phát triển bền vững – Giá trị lâu dài</h4>
              <p>Không ngừng đổi mới, nâng cao năng lực và tạo dựng giá trị lâu dài cho doanh nghiệp, khách hàng và đối tác.</p>
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
          </div>

          <div class="ecosystem-grid">
            <div class="ecosystem-card" onclick="window.navigate('/san-pham/aio')" style="cursor:pointer;">
              <h3>Máy tính All-in-one</h3>
              <p>Máy tính tích hợp màn hình và cấu hình trong một thiết kế gọn gàng, hiện đại, tối ưu không gian làm việc.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>

            <div class="ecosystem-card" onclick="window.navigate('/san-pham/monitor')" style="cursor:pointer;">
              <h3>Màn hình máy tính</h3>
              <p>Đa dạng màn hình với chất lượng hiển thị sắc nét, đáp ứng nhu cầu học tập, làm việc và giải trí.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>

            <div class="ecosystem-card" onclick="window.navigate('/san-pham/ram')" style="cursor:pointer;">
              <h3>Linh kiện máy tính</h3>
              <p>Các linh kiện thiết yếu giúp xây dựng, nâng cấp và tối ưu hiệu suất hệ thống máy tính.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>

            <div class="ecosystem-card" onclick="window.navigate('/san-pham/accessories')" style="cursor:pointer;">
              <h3>Phụ kiện máy tính</h3>
              <p>Đa dạng phụ kiện hỗ trợ kết nối, vận hành và nâng cao trải nghiệm sử dụng máy tính.</p>
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
