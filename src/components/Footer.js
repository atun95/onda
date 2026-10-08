export function renderFooter() {
  return `
    <footer class="footer" id="footer">
      <div class="footer-top">
        <div class="container footer-top-grid">
          <div class="footer-brand" id="footer-brand">
            <img src="/logo tach nen.png" alt="Ondata" class="footer-logo" />
            <p class="footer-slogan">ONDATA – Nối Nguồn Công Nghệ</p>
            <p class="footer-desc">Phân phối và kinh doanh thiết bị công nghệ, máy tính All-in-One và linh kiện chất lượng cao tại Việt Nam.</p>
          </div>
          <div class="footer-col" id="footer-links">
            <h5>Liên Kết</h5>
            <ul>
              <li><a href="#about">Về Chúng Tôi</a></li>
              <li><a href="#services">Sản Phẩm &amp; Dịch Vụ</a></li>
              <li><a href="#why-us">Tại Sao Chọn Chúng Tôi</a></li>
              <li><a href="#contact">Liên Hệ</a></li>
            </ul>
          </div>
          <div class="footer-col" id="footer-products">
            <h5>Sản Phẩm</h5>
            <ul>
              <li><a href="#services">Máy tính All-in-One</a></li>
              <li><a href="#services">Màn hình máy tính</a></li>
              <li><a href="#services">Linh kiện &amp; phụ kiện</a></li>
              <li><a href="#contact">Phân phối sỉ</a></li>
            </ul>
          </div>
          <div class="footer-col" id="footer-contact-col">
            <h5>Liên Hệ</h5>
            <ul>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                167 Louis I, LK34, Hoàng Mai, HN
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 8 8l1-1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:0867036698">0867 036 698</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:nchieu@xinchen.vn">nchieu@xinchen.vn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom" id="footer-bottom">
        <div class="container footer-bottom-inner">
          <p>© 2026 Ondata Việt Nam. Bảo lưu mọi quyền. Thương hiệu được bảo hộ tại Việt Nam từ 2026</p>
        </div>
      </div>
    </footer>

    <button class="back-to-top" id="back-to-top" aria-label="Lên đầu trang">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
  `;
}
