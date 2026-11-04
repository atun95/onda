/* ============================================================
   SUPPORT PAGE COMPONENT (MATCHING USER MOCKUP)
   Main Support Hub + 5 Detail Subpages:
   1. Chính sách bảo hành & đổi trả
   2. Hỗ trợ kỹ thuật
   3. Tra cứu đơn hàng
   4. Liên hệ hỗ trợ
   5. Chính sách bảo mật
   ============================================================ */

function supportBanner(src, alt) {
  return `<img class="sp-banner-img" src="${src}" alt="${alt}" />`;
}

/* ═══════════════════════════════════════════════════════
   1. MAIN SUPPORT HUB VIEW (#/ho-tro)
   ══════════════════════════════════════════════════════ */
export function renderMainSupportHub() {
  const cards = [
    {
      id: 'bao-hanh',
      title: 'Chính sách bảo hành',
      desc: 'Điều kiện, thời hạn theo từng dòng sản phẩm và địa điểm bảo hành Ondata.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
    },
    {
      id: 'ky-thuat',
      title: 'Hỗ trợ kỹ thuật',
      desc: 'Hướng dẫn sử dụng, cài đặt, khắc phục sự cố và các yêu cầu hỗ trợ kỹ thuật.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    },
    {
      id: 'tra-cuu',
      title: 'Tra cứu đơn hàng',
      desc: 'Kiểm tra trạng thái đơn hàng và thông tin giao hàng nhanh chóng.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    },
    {
      id: 'lien-he',
      title: 'Liên hệ hỗ trợ',
      desc: 'Hotline, Zalo, Email và biểu mẫu liên hệ với đội ngũ hỗ trợ.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    },
    {
      id: 'bao-mat',
      title: 'Chính sách bảo mật',
      desc: 'Cam kết bảo vệ thông tin cá nhân của khách hàng.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    },
  ];

  const cardsHtml = cards.map(c => `
    <div class="sp-card" data-sub="${c.id}" id="sp-card-${c.id}">
      <div class="sp-card-icon-wrap">
        ${c.icon}
      </div>
      <h3 class="sp-card-title">${c.title}</h3>
      <p class="sp-card-desc">${c.desc}</p>
      <div class="sp-card-btn-wrap">
        <button class="sp-card-circle-btn" aria-label="Xem chi tiết ${c.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
  `).join('');

  return `
    <section class="sp-page" id="sp-page">
      <div class="sp-container">

        <!-- 1. BREADCRUMB -->
        <nav class="catalog-breadcrumb sp-breadcrumb" aria-label="Breadcrumb">
          <a href="/" class="crumb-link" id="sp-crumb-home">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Hỗ trợ</span>
        </nav>

        <!-- 2. HERO SECTION (Split Left Text, Right Sunlit Laptop) -->
        <div class="sp-hero-banner">
          <img src="/images/banners/banner-support.jpg" alt="Trung tâm hỗ trợ Ondata" />
          <a class="banner-hotspot" style="left:50.56%;top:16.85%;width:20.25%;height:31.03%" href="/ho-tro/bao-hanh">Bảo hành và đổi trả</a>
          <a class="banner-hotspot" style="left:71.92%;top:16.85%;width:20.25%;height:31.03%" href="/ho-tro/ky-thuat">Hỗ trợ kỹ thuật</a>
          <a class="banner-hotspot" style="left:50.56%;top:51.88%;width:20.25%;height:31.27%" href="/ho-tro/tra-cuu">Tra cứu đơn hàng</a>
          <a class="banner-hotspot" style="left:71.92%;top:51.88%;width:20.25%;height:31.27%" href="/ho-tro/lien-he">Liên hệ hỗ trợ</a>
        </div>

        <!-- 3. FIVE SUPPORT CARDS GRID -->
        <div class="sp-cards-grid">
          ${cardsHtml}
        </div>

      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   2. DETAIL SUBPAGE 1: CHÍNH SÁCH BẢO HÀNH & ĐỔI TRẢ
   ══════════════════════════════════════════════════════ */
export function renderSubBaoHanh() {
  return `
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container sp-detail-container--policy">
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Chính sách bảo hành</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Chính sách bảo hành sản phẩm Ondata</h1>
          <p class="sp-sub-desc">Chính sách này áp dụng cho sản phẩm Ondata phân phối tại Việt Nam: phần quy định chung dùng cho mọi sản phẩm, phần chính sách riêng theo từng dòng sản phẩm.</p>
        </div>

        <div class="sp-sub-banner">
          ${supportBanner('/images/banners/banner-warranty.jpg', 'Bảo hành và đổi trả')}
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">1. Quy định chung</h2>
          <h3 class="sp-subhead">Điều kiện bảo hành</h3>
          <p class="sp-muted">Sản phẩm được bảo hành khi đáp ứng đầy đủ các điều kiện sau:</p>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> Còn trong hạn bảo hành.</li>
            <li><span class="sp-check">✓</span> Hư hỏng do chất lượng linh kiện hoặc lỗi kỹ thuật trong quy trình sản xuất.</li>
            <li><span class="sp-check">✓</span> Còn nguyên dạng, không va đập, không tháo gỡ; tem bảo hành, nhãn niêm phong và nhãn nhận dạng còn nguyên trạng.</li>
            <li><span class="sp-check">✓</span> Số series và part number trùng khớp theo model sản phẩm.</li>
          </ul>

          <h3 class="sp-subhead">Từ chối bảo hành</h3>
          <p class="sp-muted">Sản phẩm thuộc một trong các trường hợp sau sẽ không được bảo hành:</p>
          <ul class="sp-checklist">
            <li><span class="sp-x">✕</span> Hết hạn bảo hành, hoặc không mua từ nguồn phân phối chính thức của Ondata.</li>
            <li><span class="sp-x">✕</span> Rách tem, mất tem ngày tháng năm; hoặc bị thay đổi, sửa chữa ngoài Trung tâm bảo hành của Ondata.</li>
            <li><span class="sp-x">✕</span> Hư hỏng do thiên tai, hỏa hoạn, lụt lội, sét đánh; côn trùng, động vật chui vào.</li>
            <li><span class="sp-x">✕</span> Hư hỏng do bụi bẩn, ẩm ướt, thấm nước; có vết mốc, rỉ sét, ăn mòn, oxy hóa; biến dạng do nhiệt hoặc tác động bên ngoài.</li>
            <li><span class="sp-x">✕</span> Hư hỏng do dùng sai điện thế, dòng điện chỉ định; lắp đặt, bảo trì, sử dụng không đúng hướng dẫn.</li>
            <li><span class="sp-x">✕</span> Phụ kiện kèm theo như dây cáp, đầu nối tín hiệu.</li>
          </ul>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">2. Chính sách theo sản phẩm</h2>
          <h3 class="sp-subhead">2.1. Màn hình</h3>
          <div class="sp-table-wrap">
            <table class="sp-table">
              <thead>
                <tr>
                  <th>Hạng mục</th>
                  <th>Thời hạn / cam kết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Màn hình 22 – 27 inch</td>
                  <td>3 năm</td>
                </tr>
                <tr>
                  <td>Màn hình từ 32 inch trở lên</td>
                  <td>2 năm</td>
                </tr>
                <tr>
                  <td>Adaptor đi kèm LCD</td>
                  <td>36 tháng</td>
                </tr>
                <tr>
                  <td>Cam kết bảo hành toàn quốc</td>
                  <td>3 – 7 ngày (không tính ngày nghỉ, ngày lễ)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> 12 tháng đầu: lỗi do nhà sản xuất được đổi 1 đổi 1 (giá trị tương đương).</li>
            <li><span class="sp-check">✓</span> Thời gian còn lại: bảo hành các linh kiện bị lỗi kỹ thuật.</li>
          </ul>

          <h3 class="sp-subhead">Quy định điểm chết</h3>
          <p class="sp-muted">Màn hình được bảo hành khi số điểm chết đạt mức sau:</p>
          <div class="sp-table-wrap">
            <table class="sp-table">
              <thead>
                <tr>
                  <th>Kích thước</th>
                  <th>Số điểm chết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Từ 19 đến 22 inch</td>
                  <td>Từ 3 điểm trở lên</td>
                </tr>
                <tr>
                  <td>Từ 23 inch trở lên</td>
                  <td>Từ 5 điểm trở lên</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="sp-subhead">Từ chối bảo hành riêng đối với màn hình</h3>
          <p class="sp-muted">Panel trầy xước, nứt vỡ, móp méo do va chạm, tì đè, lau bằng vật cứng hoặc tác động mạnh từ bên ngoài; màn hình bị chảy mực; số điểm chết ít hơn mức quy định ở trên.</p>

          <h3 class="sp-subhead">Thay panel ngoài bảo hành</h3>
          <p class="sp-muted">Mức phí tính theo giá bán lẻ niêm yết trên website tại thời điểm thay thế:</p>
          <div class="sp-table-wrap">
            <table class="sp-table">
              <thead>
                <tr>
                  <th>Thời điểm</th>
                  <th>Mức phí</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12 tháng đầu</td>
                  <td>45% giá bán lẻ</td>
                </tr>
                <tr>
                  <td>24 tháng tiếp theo</td>
                  <td>55% giá bán lẻ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="sp-muted">Không hỗ trợ thay panel với màn hình từ 30 inch trở lên. Panel thay thế được bảo hành theo thời gian bảo hành còn lại của màn hình.</p>

          <h3 class="sp-subhead">2.2. Sản phẩm khác</h3>
          <p class="sp-muted">Đang được cập nhật.</p>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">3. Địa điểm bảo hành và liên hệ</h2>
          <div class="sp-table-wrap">
            <table class="sp-table">
              <thead>
                <tr>
                  <th>Khu vực</th>
                  <th>Địa chỉ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hà Nội</td>
                  <td>167 Louis 1, Khu đô thị Louis City, Phường Hoàng Mai, TP. Hà Nội</td>
                </tr>
                <tr>
                  <td>Hồ Chí Minh</td>
                  <td>68 Ký Hòa, Phường Chợ Lớn, TP. Hồ Chí Minh</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="sp-muted">Liên hệ: <a href="tel:0867036698" class="sp-inline-link">0867036698</a></p>
        </div>

        <div class="sp-notice-box">
          <span class="sp-notice-icon">💡</span>
          <div>
            Thương hiệu Ondata được phân phối bởi <strong>CÔNG TY TNHH MÁY TÍNH XIN CHEN</strong> tại Việt Nam.
          </div>
        </div>

        <div class="sp-back-wrap">
          <a href="/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   3. DETAIL SUBPAGE 2: HỖ TRỢ KỸ THUẬT
   ══════════════════════════════════════════════════════ */
export function renderSubKyThuat() {
  const topics = [
    {
      title: 'Hướng dẫn sử dụng sản phẩm',
      sub: 'Tài liệu hướng dẫn, video minh họa',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c5d68a" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    },
    {
      title: 'Cài đặt phần mềm & driver',
      sub: 'Tải driver, phần mềm cần thiết',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c5d68a" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    },
    {
      title: 'Khắc phục sự cố thường gặp',
      sub: 'Các lỗi phổ biến và cách xử lý',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c5d68a" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    },
    {
      title: 'Gửi yêu cầu hỗ trợ',
      sub: 'Điền biểu mẫu để được hỗ trợ trực tiếp',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c5d68a" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    },
  ];

  return `
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container sp-detail-container--policy">
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Hỗ trợ kỹ thuật</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Hỗ trợ kỹ thuật</h1>
          <p class="sp-sub-desc">Hướng dẫn sử dụng, cài đặt và giải quyết sự cố một cách nhanh chóng.</p>
        </div>

        <div class="sp-sub-banner">
          ${supportBanner('/images/banners/banner-tech.jpg', 'Hỗ trợ kỹ thuật')}
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">Các hỗ trợ nổi bật</h2>
          <div class="sp-topics-list">
            ${topics.map(t => `
              <div class="sp-topic-card" style="cursor:pointer;">
                <div class="sp-topic-icon">${t.icon}</div>
                <div class="sp-topic-info">
                  <strong>${t.title}</strong>
                  <span>${t.sub}</span>
                </div>
                <div class="sp-topic-arrow">›</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Urgent Support Box -->
        <div class="sp-urgent-box">
          <div class="sp-urgent-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5d68a" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div class="sp-urgent-info">
            <strong>Cần hỗ trợ gấp?</strong>
            <span>Liên hệ hotline <strong>0867036698</strong> (8:00 - 22:00, tất cả các ngày)</span>
          </div>
        </div>

        <div class="sp-back-wrap">
          <a href="/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   4. DETAIL SUBPAGE 3: TRA CỨU ĐƠN HÀNG
   ══════════════════════════════════════════════════════ */
export function renderSubTraCuu() {
  return `
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container sp-detail-container--policy">
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Tra cứu đơn hàng</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Tra cứu đơn hàng</h1>
          <p class="sp-sub-desc">Nhập mã đơn hàng hoặc số điện thoại để kiểm tra trạng thái đơn hàng của bạn.</p>
        </div>

        <div class="sp-sub-banner">
          ${supportBanner('/images/banners/banner-track.jpg', 'Tra cứu đơn hàng')}
        </div>

        <!-- Tracking Search Form -->
        <div class="sp-track-form-box">
          <div class="sp-track-input-wrap">
            <input 
              type="text" 
              class="sp-track-input" 
              id="track-input" 
              placeholder="Nhập mã đơn hàng hoặc số điện thoại..."
              value="OND123456"
            />
            <button class="sp-track-btn" id="btn-track-submit">Tra cứu</button>
          </div>

          <!-- Live Result Box -->
          <div class="sp-track-result" id="track-result" style="display:block;">
            <div class="sp-result-header">
              <div>
                <span class="sp-order-id">Mã đơn: <strong>OND123456</strong></span>
                <span class="sp-order-status">Đang vận chuyển</span>
              </div>
              <span class="sp-order-date">Cập nhật: 15/10/2026 14:30</span>
            </div>
            <div class="sp-timeline">
              <div class="sp-tl-step sp-tl-step--done">
                <div class="sp-tl-dot">✓</div>
                <span>Đã đặt hàng</span>
              </div>
              <div class="sp-tl-step sp-tl-step--done">
                <div class="sp-tl-dot">✓</div>
                <span>Đã đóng gói</span>
              </div>
              <div class="sp-tl-step sp-tl-step--active">
                <div class="sp-tl-dot">🚚</div>
                <span>Đang giao hàng</span>
              </div>
              <div class="sp-tl-step">
                <div class="sp-tl-dot">4</div>
                <span>Hoàn tất</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Instructions -->
        <div class="sp-block">
          <h2 class="sp-block-title">Hướng dẫn tra cứu</h2>
          <div class="sp-steps-list">
            <div class="sp-step-item">
              <span class="sp-step-num">1</span>
              <div>Nhập mã đơn hàng bạn đã nhận qua SMS hoặc email xác nhận mua hàng.</div>
            </div>
            <div class="sp-step-item">
              <span class="sp-step-num">2</span>
              <div>Nhấn "Tra cứu" để xem trạng thái đơn hàng và tiến độ giao hàng theo thời gian thực.</div>
            </div>
            <div class="sp-step-item">
              <span class="sp-step-num">3</span>
              <div>Nếu cần hỗ trợ thay đổi địa chỉ hoặc hẹn giờ giao, vui lòng liên hệ hotline hoặc Zalo.</div>
            </div>
          </div>
        </div>

        <div class="sp-notice-box">
          <span class="sp-notice-icon">💡</span>
          <div>
            <strong>Lưu ý:</strong> Mã đơn hàng có định dạng chuẩn: <strong>OND123456</strong> (Ví dụ: OND123456).
          </div>
        </div>

        <div class="sp-back-wrap">
          <a href="/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   5. DETAIL SUBPAGE 4: LIÊN HỆ HỖ TRỢ
   ══════════════════════════════════════════════════════ */
export function renderSubLienHe() {
  return `
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container sp-detail-container--policy">
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Liên hệ hỗ trợ</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Liên hệ hỗ trợ</h1>
          <p class="sp-sub-desc">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn một cách nhanh chóng nhất.</p>
        </div>

        <div class="sp-sub-banner">
          ${supportBanner('/images/banners/banner-contact.jpg', 'Liên hệ hỗ trợ')}
        </div>

        <!-- Channels Grid -->
        <div class="sp-contact-grid">
          <div class="sp-ch-item">
            <div class="sp-ch-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c5d68a" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <strong>Hotline</strong>
              <div class="sp-ch-val" style="color:#527d24;font-weight:800;font-size:1.1rem;"><a href="tel:0867036698" style="color:inherit;">0867036698</a></div>
              <small>8:00 - 22:00 (Tất cả các ngày)</small>
            </div>
          </div>

          <div class="sp-ch-item">
            <div class="sp-ch-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c5d68a" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div>
              <strong>Zalo</strong>
              <div class="sp-ch-val">@OndataSupport</div>
              <small>Hỗ trợ trực tuyến nhanh chóng</small>
            </div>
          </div>

          <div class="sp-ch-item">
            <div class="sp-ch-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c5d68a" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <strong>Email</strong>
              <div class="sp-ch-val">nchieu@xinchen.vn</div>
              <small>Phản hồi trong 24 giờ</small>
            </div>
          </div>

          <div class="sp-ch-item">
            <div class="sp-ch-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c5d68a" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <strong>Địa chỉ</strong>
              <div class="sp-ch-val">167 Louis I, LK34, KĐT mới Hoàng Văn Thụ,</div>
              <small>Hoàng Mai, Hà Nội</small>
            </div>
          </div>
        </div>

        <!-- Quick Form -->
        <div class="sp-form-card">
          <h2 class="sp-block-title">Gửi yêu cầu hỗ trợ</h2>
          <p class="sp-form-sub">Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.</p>

          <form id="sp-quick-form" class="sp-quick-form">
            <input type="text" placeholder="Họ và tên của bạn..." required class="sp-input"/>
            <input type="tel" placeholder="Số điện thoại liên hệ..." required class="sp-input"/>
            <textarea placeholder="Mô tả yêu cầu cần hỗ trợ..." rows="3" required class="sp-textarea"></textarea>
            <button type="submit" class="sp-submit-btn">Gửi yêu cầu</button>
          </form>
        </div>

        <div class="sp-back-wrap">
          <a href="/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   6. DETAIL SUBPAGE 5: CHÍNH SÁCH BẢO MẬT
   ══════════════════════════════════════════════════════ */
export function renderSubBaoMat() {
  return `
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container sp-detail-container--policy">
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Chính sách bảo mật</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Chính sách bảo mật</h1>
          <p class="sp-sub-desc">Bảo vệ thông tin cá nhân của bạn là ưu tiên hàng đầu của Ondata.</p>
        </div>

        <div class="sp-sub-banner">
          ${supportBanner('/images/banners/banner-privacy.jpg', 'Chính sách bảo mật')}
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">1. Thông tin chúng tôi thu thập</h2>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> Họ tên, số điện thoại, địa chỉ email.</li>
            <li><span class="sp-check">✓</span> Địa chỉ giao hàng và nhận bảo hành.</li>
            <li><span class="sp-check">✓</span> Thông tin giao dịch thanh toán (mã giao dịch, thời gian).</li>
          </ul>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">2. Mục đích sử dụng</h2>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> Xử lý đơn hàng, đóng gói và vận chuyển sản phẩm đến tay khách hàng.</li>
            <li><span class="sp-check">✓</span> Hỗ trợ bảo hành, bảo trì định kỳ và chăm sóc khách hàng sau bán.</li>
            <li><span class="sp-check">✓</span> Cải thiện chất lượng dịch vụ và gửi thông báo chương trình ưu đãi độc quyền.</li>
          </ul>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">3. Bảo mật thông tin</h2>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> Áp dụng công nghệ mã hóa SSL 256-bit hiện đại.</li>
            <li><span class="sp-check">✓</span> Tuyệt đối không chia sẻ hoặc bán dữ liệu khách hàng cho bên thứ ba.</li>
          </ul>
        </div>

        <div class="sp-notice-box">
          <span class="sp-notice-icon">🔒</span>
          <div>
            <strong>Cam kết:</strong> Ondata cam kết bảo vệ thông tin cá nhân của bạn theo đúng quy định pháp luật hiện hành và tiêu chuẩn an toàn thông tin quốc tế.
          </div>
        </div>

        <div class="sp-back-wrap">
          <a href="/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `;
}

/* ═══════════════════════════════════════════════════════
   7. MAIN RENDER ROUTER FOR SUPPORT
   ══════════════════════════════════════════════════════ */
export function renderSupportPage(subRoute = null) {
  switch (subRoute) {
    case 'bao-hanh':
    case 'warranty': return renderSubBaoHanh();
    case 'ky-thuat': return renderSubKyThuat();
    case 'tra-cuu': return renderSubTraCuu();
    case 'lien-he': return renderSubLienHe();
    case 'bao-mat': return renderSubBaoMat();
    default: return renderMainSupportHub();
  }
}

/* ═══════════════════════════════════════════════════════
   8. INTERACTIONS
   ══════════════════════════════════════════════════════ */
export function initSupportPageInteractions(subRoute = null, showToast) {
  // Breadcrumb home link
  document.getElementById('sp-crumb-home')?.addEventListener('click', e => {
    e.preventDefault();
    window.navigate ? window.navigate('/') : window.location.assign('/');
  });

  // Main hub cards click -> navigate to subroute
  document.querySelectorAll('.sp-card[data-sub]').forEach(card => {
    card.addEventListener('click', () => {
      const sub = card.dataset.sub;
      if (sub) window.navigate ? window.navigate(`/ho-tro/${sub}`) : window.location.assign(`/ho-tro/${sub}`);
    });
  });

  // Subpage 1: Tab toggling (Bảo hành vs Đổi trả)
  const btnWarranty = document.getElementById('btn-tab-warranty');
  const btnExchange = document.getElementById('btn-tab-exchange');
  const panelWarranty = document.getElementById('panel-warranty');
  const panelExchange = document.getElementById('panel-exchange');

  if (btnWarranty && btnExchange && panelWarranty && panelExchange) {
    btnWarranty.addEventListener('click', () => {
      btnWarranty.classList.add('sp-tab-pill--active');
      btnExchange.classList.remove('sp-tab-pill--active');
      panelWarranty.classList.remove('sp-tab-panel--hidden');
      panelExchange.classList.add('sp-tab-panel--hidden');
    });

    btnExchange.addEventListener('click', () => {
      btnExchange.classList.add('sp-tab-pill--active');
      btnWarranty.classList.remove('sp-tab-pill--active');
      panelExchange.classList.remove('sp-tab-panel--hidden');
      panelWarranty.classList.add('sp-tab-panel--hidden');
    });
  }

  // Subpage 3: Order tracking button
  const trackBtn = document.getElementById('btn-track-submit');
  const trackInput = document.getElementById('track-input');
  const trackResult = document.getElementById('track-result');

  if (trackBtn && trackInput && trackResult) {
    trackBtn.addEventListener('click', () => {
      const val = trackInput.value.trim();
      if (!val) {
        if (showToast) showToast('Vui lòng nhập mã đơn hàng hoặc số điện thoại!');
        return;
      }
      trackResult.style.display = 'block';
      if (showToast) showToast(`Đã tìm thấy thông tin đơn hàng: ${val}`);
    });
  }

  // Subpage 4: Quick form submit
  const quickForm = document.getElementById('sp-quick-form');
  if (quickForm) {
    quickForm.addEventListener('submit', e => {
      e.preventDefault();
      if (showToast) showToast('Cảm ơn bạn! Yêu cầu hỗ trợ đã được gửi thành công.');
      quickForm.reset();
    });
  }
}
