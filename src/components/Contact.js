export function renderContact() {
  return `
    <section class="contact" id="contact">
      <div class="container">
        <div class="section-header" id="contact-header">
          <div class="section-label">Liên Hệ</div>
          <h2 class="section-title">Kết Nối Với Chúng Tôi</h2>
          <p class="section-subtitle">Hãy để lại thông tin và chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.</p>
        </div>
        <div class="contact-grid" id="contact-grid">
          <div class="contact-info" id="contact-info">
            <div class="contact-info-item" id="contact-addr">
              <div class="contact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4>Địa Chỉ</h4>
                <p>167 Louis I, LK34, KĐT mới Hoàng Văn Thụ, Hoàng Mai, Hà Nội</p>
              </div>
            </div>
            <div class="contact-info-item" id="contact-phone">
              <div class="contact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 8 8l1-1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h4>Hotline</h4>
                <a href="tel:0867036698">0867 036 698</a>
              </div>
            </div>
            <div class="contact-info-item" id="contact-email">
              <div class="contact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:nchieu@xinchen.vn">nchieu@xinchen.vn</a>
              </div>
            </div>
            <div class="contact-map" id="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.5!2d105.849!3d20.980!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac!2zSG_DoG5nIE1haQ!5e0!3m2!1svi!2svn!4v1"
                width="100%" height="200" style="border:0; border-radius:12px;" allowfullscreen loading="lazy"
                title="Ondata Vietnam Location">
              </iframe>
            </div>
          </div>
          <form class="contact-form" id="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="contact-name">Họ và tên *</label>
                <input type="text" id="contact-name" name="name" placeholder="Nguyễn Văn A" required />
              </div>
              <div class="form-group">
                <label for="contact-company">Công ty / Doanh nghiệp</label>
                <input type="text" id="contact-company" name="company" placeholder="Tên công ty" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="contact-phone-input">Số điện thoại *</label>
                <input type="tel" id="contact-phone-input" name="phone" placeholder="0xxx xxx xxx" required />
              </div>
              <div class="form-group">
                <label for="contact-email-input">Email</label>
                <input type="email" id="contact-email-input" name="email" placeholder="email@example.com" />
              </div>
            </div>
            <div class="form-group form-group-full">
              <label for="contact-interest">Nhu cầu</label>
              <select id="contact-interest" name="interest">
                <option value="">-- Chọn nhu cầu --</option>
                <option value="aio">Máy tính All-in-One</option>
                <option value="monitor">Màn hình máy tính</option>
                <option value="parts">Linh kiện máy tính</option>
                <option value="distribute">Đại lý / Phân phối sỉ</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div class="form-group form-group-full">
              <label for="contact-message">Lời nhắn</label>
              <textarea id="contact-message" name="message" rows="4" placeholder="Mô tả nhu cầu của bạn..."></textarea>
            </div>
            <button type="submit" class="btn-primary btn-full" id="contact-submit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Gửi Thông Tin
            </button>
            <div class="form-success" id="form-success">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Cảm ơn! Chúng tôi sẽ liên hệ bạn sớm nhất.
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}
