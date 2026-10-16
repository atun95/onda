export function renderFooter() {
  return `
    <footer class="footer" id="footer">
      <div class="container">
        <div class="footer-main-grid">
          <!-- Col 1: Brand -->
          <div class="footer-col-brand">
            <a href="/" class="footer-brand-logo">
              <img src="/logo tach nen.png" alt="ONDATA" class="footer-logo-img" style="height: 34px; width: auto; filter: brightness(0) invert(1);" />
            </a>
          </div>

          <!-- Col 2: Sản phẩm -->
          <div class="footer-col-nav">
            <h4 class="footer-col-heading">Sản phẩm</h4>
            <ul class="footer-link-list">
              <li><a href="/san-pham/laptop">Máy tính xách tay</a></li>
              <li><a href="/san-pham/desktop">Máy tính để bàn</a></li>
              <li><a href="/san-pham/monitor">Màn hình</a></li>
              <li><a href="/san-pham/ram">RAM</a></li>
              <li><a href="/san-pham/keyboard">Bàn phím</a></li>
              <li><a href="/san-pham/mouse">Chuột</a></li>
              <li><a href="/san-pham/accessories">Phụ kiện</a></li>
            </ul>
          </div>

          <!-- Col 3: Hỗ trợ khách hàng -->
          <div class="footer-col-nav">
            <h4 class="footer-col-heading">Hỗ trợ khách hàng</h4>
            <ul class="footer-link-list">
              <li><a href="/ho-tro/warranty">Chính sách bảo hành</a></li>
              <li><a href="/ho-tro/returns">Đổi trả - Hoàn tiền</a></li>
              <li><a href="/ho-tro/guide">Hướng dẫn mua hàng</a></li>
              <li><a href="/ho-tro/tech">Hỗ trợ kỹ thuật</a></li>
              <li><a href="/ho-tro/faq">FAQ</a></li>
            </ul>
          </div>

          <!-- Col 4: Kết nối với Ondata & Đăng ký nhận tin -->
          <div class="footer-col-connect">
            <h4 class="footer-col-heading">Kết nối với Ondata</h4>
            <div class="social-links-row">
              <a href="#" class="social-circle-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" class="social-circle-btn" aria-label="Zalo / Messenger">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
              <a href="#" class="social-circle-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" class="social-circle-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#000"/></svg>
              </a>
            </div>

            <div class="newsletter-box">
              <div class="newsletter-label">Đăng ký nhận tin</div>
              <form class="newsletter-form" id="newsletter-form" onsubmit="event.preventDefault();">
                <input type="email" placeholder="Nhập email của bạn" id="newsletter-email" required />
                <button type="submit" class="btn-newsletter-action">Đăng ký</button>
              </form>
            </div>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom-bar">
          <p>© 2025 Ondata. All rights reserved.</p>
          <div class="footer-legal-links">
            <a href="#">Chính sách bảo mật</a>
            <span>|</span>
            <a href="#">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
