/* ============================================================
   CONTACT PAGE COMPONENT (MATCHING USER MOCKUP)
   ============================================================ */



export function renderContactPage() {
  return `
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
  `;
}

export function initContactPageInteractions(showToast) {
  // Breadcrumb home link
  document.getElementById('contact-crumb-home')?.addEventListener('click', e => {
    e.preventDefault();
    window.location.hash = '#/';
  });

  // Contact form submission
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value;
      const phone = document.getElementById('contact-phone')?.value;

      if (showToast) {
        showToast(`Cảm ơn ${name || 'bạn'}! Tin nhắn liên hệ đã được gửi thành công.`);
      }

      form.reset();
    });
  }

  // Partner register button
  const partnerBtn = document.getElementById('btn-partner-register');
  if (partnerBtn) {
    partnerBtn.addEventListener('click', () => {
      if (showToast) {
        showToast('Cảm ơn bạn đã quan tâm hợp tác! Nhân viên Ondata sẽ liên hệ trong 24 giờ.');
      }
    });
  }
}
