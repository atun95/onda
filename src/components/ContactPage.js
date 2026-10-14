export function renderContactPage() {
  return `
    <div class="page-content">
      <section class="contact-page">
        <div class="container-sm">
          <div class="breadcrumb">
            <a href="#" data-page="home">Trang chủ</a>
            <span class="separator">›</span>
            <span class="current">Liên hệ</span>
          </div>
          
          <div class="contact-page-header">
            <h1>Liên hệ với Ondata</h1>
            <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
          </div>
          
          <div class="contact-info-cards" id="contact-info-cards">
            <div class="contact-info-card">
              <div class="ci-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 8 8l1-1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div class="ci-text">
                <h4>Hotline</h4>
                <a href="tel:18001234">1800 1234</a>
                <p style="font-size:0.72rem;color:var(--text-muted);font-weight:400;">(8:00 - 22:00)</p>
              </div>
            </div>
            
            <div class="contact-info-card">
              <div class="ci-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div class="ci-text">
                <h4>Email</h4>
                <a href="mailto:support@onda.vn">support@onda.vn</a>
                <p style="font-size:0.72rem;color:var(--text-muted);font-weight:400;">(Phản hồi trong 24h)</p>
              </div>
            </div>
            
            <div class="contact-info-card">
              <div class="ci-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="ci-text">
                <h4>Địa chỉ</h4>
                <p>Số 10 Nguyễn Văn Cừ, Long Biên, Hà Nội</p>
              </div>
            </div>
          </div>
          
          <div class="contact-form-section" id="contact-form-section">
            <h2>Gửi tin nhắn cho chúng tôi</h2>
            <form class="contact-form" id="contact-form" style="border:none;padding:0;border-radius:0;">
              <div class="form-row">
                <div class="form-group">
                  <label for="contact-name">Họ và tên *</label>
                  <input type="text" id="contact-name" name="name" placeholder="" required />
                </div>
                <div class="form-group">
                  <label for="contact-phone-input">Số điện thoại *</label>
                  <input type="tel" id="contact-phone-input" name="phone" placeholder="" required />
                </div>
              </div>
              <div class="form-group form-group-full">
                <label for="contact-email-input">Email *</label>
                <input type="email" id="contact-email-input" name="email" placeholder="" required />
              </div>
              <div class="form-group form-group-full">
                <label for="contact-message">Nội dung *</label>
                <textarea id="contact-message" name="message" rows="4" placeholder="Nhập nội dung..." required></textarea>
              </div>
              <button type="submit" class="btn-outline btn-full" id="contact-submit">
                Gửi liên hệ
              </button>
              <div class="form-success" id="form-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Cảm ơn! Chúng tôi sẽ liên hệ bạn sớm nhất.
              </div>
            </form>
          </div>
          
          <div class="partner-cta" id="partner-cta">
            <div class="partner-cta-text">
              <h3>Hợp tác đại lý</h3>
              <p>Cùng Ondata phát triển bền vững, khai thác nhiều cơ hội kinh doanh hấp dẫn.</p>
              <a class="btn-primary" data-page="contact">Đăng ký ngay</a>
            </div>
            <div class="partner-cta-img">
              <img src="/office.jpg" alt="Hợp tác đại lý Ondata" style="border-radius:var(--radius);width:100%;height:140px;object-fit:cover;" />
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
