export function renderServices() {
  return `
    <section class="services" id="services">
      <div class="container">
        <div class="section-header" id="services-header">
          <div class="section-label light">Sản Phẩm & Dịch Vụ</div>
          <h2 class="section-title light">Giải Pháp Công Nghệ Toàn Diện</h2>
          <p class="section-subtitle light">Cung cấp đầy đủ thiết bị và linh kiện công nghệ chất lượng cao, phù hợp với mọi nhu cầu.</p>
        </div>
        <div class="services-grid" id="services-grid">
          <div class="service-card" id="service-aio">
            <div class="service-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3>Máy Tính All-in-One</h3>
            <p>Thiết kế tích hợp màn hình và máy tính trong một, tiết kiệm không gian, thẩm mỹ cao, phù hợp văn phòng và gia đình.</p>
            <div class="service-tag">Sản phẩm chủ lực</div>
          </div>
          <div class="service-card service-card-featured" id="service-monitor">
            <div class="service-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>
            </div>
            <h3>Màn Hình Máy Tính</h3>
            <p>Màn hình Full HD và 2K với độ phân giải cao, màu sắc chân thực, tần số quét cao cho trải nghiệm hình ảnh vượt trội.</p>
            <div class="service-tag">Phổ biến</div>
          </div>
          <div class="service-card" id="service-parts">
            <div class="service-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <h3>Linh Kiện Máy Tính</h3>
            <p>RAM, SSD, bo mạch chủ và các linh kiện chính hãng với giá cạnh tranh, nhập khẩu trực tiếp.</p>
            <div class="service-tag">Đa dạng</div>
          </div>
          <div class="service-card" id="service-distribute">
            <div class="service-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </div>
            <h3>Phân Phối Sỉ</h3>
            <p>Đối tác phân phối chính thức tại Việt Nam, cung cấp sản phẩm số lượng lớn cho đại lý và doanh nghiệp.</p>
            <div class="service-tag">B2B</div>
          </div>
          <div class="service-card" id="service-consult">
            <div class="service-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3>Tư Vấn & Hỗ Trợ</h3>
            <p>Đội ngũ chuyên gia sẵn sàng tư vấn lựa chọn thiết bị phù hợp với ngân sách và nhu cầu sử dụng.</p>
            <div class="service-tag">Miễn phí</div>
          </div>
          <div class="service-card" id="service-warranty">
            <div class="service-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Bảo Hành Chính Hãng</h3>
            <p>Toàn bộ sản phẩm được bảo hành chính hãng, hỗ trợ kỹ thuật nhanh chóng và cam kết chất lượng tuyệt đối.</p>
            <div class="service-tag">Bảo hành</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
