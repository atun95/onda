export function renderSupportPage() {
  return `
    <div class="page-content">
      <section class="support-page">
        <div class="container">
          <div class="breadcrumb">
            <a href="#" data-page="home">Trang chủ</a>
            <span class="separator">›</span>
            <span class="current">Hỗ trợ</span>
          </div>
          
          <div class="support-hero">
            <div class="support-hero-text">
              <h1>Hỗ trợ khách hàng</h1>
              <p>Chúng tôi luôn sẵn sàng đồng hành, giải đáp mọi thắc mắc và hỗ trợ bạn trong suốt quá trình sử dụng sản phẩm.</p>
            </div>
            <div class="support-hero-img">
              <img src="/office.jpg" alt="Hỗ trợ khách hàng" />
            </div>
          </div>

          <div class="support-cards" id="support-cards">
            <div class="support-card" id="support-warranty">
              <div class="support-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Chính sách bảo hành & đổi trả</h3>
              <p>Thông tin chi tiết về điều kiện, quy trình bảo hành và đổi trả sản phẩm.</p>
              <div class="support-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
            
            <div class="support-card" id="support-technical">
              <div class="support-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3>Hỗ trợ kỹ thuật</h3>
              <p>Hướng dẫn sử dụng, cài đặt, khắc phục sự cố và các yêu cầu hỗ trợ kỹ thuật.</p>
              <div class="support-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
            
            <div class="support-card" id="support-order">
              <div class="support-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h3>Tra cứu đơn hàng</h3>
              <p>Kiểm tra trạng thái đơn hàng và thông tin giao hàng nhanh chóng.</p>
              <div class="support-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
            
            <div class="support-card" id="support-contact">
              <div class="support-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 8 8l1-1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3>Liên hệ hỗ trợ</h3>
              <p>Hotline, Zalo, Email và biểu mẫu liên hệ với đội ngũ hỗ trợ.</p>
              <div class="support-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
            
            <div class="support-card" id="support-privacy">
              <div class="support-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3>Chính sách bảo mật</h3>
              <p>Cam kết bảo vệ thông tin cá nhân của khách hàng.</p>
              <div class="support-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
