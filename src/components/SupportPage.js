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
      desc: 'Tư vấn, hướng dẫn sử dụng, khắc phục sự cố từ xa và thủ tục bảo hành sản phẩm Ondata.',
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
      desc: 'Cách Ondata thu thập, sử dụng và bảo vệ thông tin cá nhân trên onda.vn.',
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
          <h1 class="sp-sub-title">Chính sách hỗ trợ kỹ thuật</h1>
          <p class="sp-sub-desc">Áp dụng cho sản phẩm thương hiệu ONDATA (màn hình, máy tính All in One, máy tính để bàn, linh kiện) do Công ty TNHH Máy Tính Xin Chen phân phối tại Việt Nam.</p>
        </div>

        <div class="sp-sub-banner">
          ${supportBanner('/images/banners/banner-tech.jpg', 'Hỗ trợ kỹ thuật')}
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">1. Mục đích và phạm vi</h2>
          <p class="sp-muted">Hỗ trợ kỹ thuật là dịch vụ tư vấn, hướng dẫn và xử lý sự cố. Việc sửa chữa, thay thế linh kiện hoặc đổi sản phẩm được thực hiện theo <a href="/ho-tro/bao-hanh" class="sp-inline-link">Chính sách bảo hành ONDATA</a>.</p>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">2. Nội dung hỗ trợ kỹ thuật</h2>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> Tư vấn lựa chọn sản phẩm, cấu hình và phụ kiện phù hợp với nhu cầu sử dụng.</li>
            <li><span class="sp-check">✓</span> Hướng dẫn lắp đặt, kết nối, cài đặt và sử dụng sản phẩm ban đầu.</li>
            <li><span class="sp-check">✓</span> Hướng dẫn kiểm tra và khắc phục sự cố từ xa (qua điện thoại, email).</li>
            <li><span class="sp-check">✓</span> Hướng dẫn cập nhật phần mềm, trình điều khiển (driver) và tài liệu sản phẩm do nhà sản xuất cung cấp.</li>
            <li><span class="sp-check">✓</span> Xác định lỗi sơ bộ và hướng dẫn thủ tục bảo hành khi sản phẩm cần được kiểm tra, sửa chữa hoặc thay thế.</li>
            <li><span class="sp-check">✓</span> Hỗ trợ đại lý và khách hàng dự án về thông tin kỹ thuật, tương thích sản phẩm.</li>
          </ul>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">3. Kênh tiếp nhận hỗ trợ</h2>
          <div class="sp-table-wrap">
            <table class="sp-table sp-table--channels">
              <thead>
                <tr>
                  <th>Kênh</th>
                  <th>Thông tin</th>
                  <th>Sử dụng cho</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hotline</td>
                  <td><a href="tel:0867036698" class="sp-inline-link">0867036698</a></td>
                  <td>Sự cố cần hỗ trợ nhanh, hướng dẫn xử lý từ xa</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><a href="mailto:nchieu@xinchen.vn" class="sp-inline-link">nchieu@xinchen.vn</a></td>
                  <td>Gửi mô tả lỗi, hình ảnh/video, tài liệu kèm theo</td>
                </tr>
                <tr>
                  <td>Phòng Kinh doanh</td>
                  <td><a href="tel:0916666804" class="sp-inline-link">0916666804</a></td>
                  <td>Tư vấn sản phẩm, báo giá, đại lý và dự án</td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td><a href="https://onda.vn" class="sp-inline-link" target="_blank" rel="noopener">onda.vn</a></td>
                  <td>Thông tin sản phẩm và chính sách</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="sp-muted">Thời gian làm việc: Thứ Hai đến hết sáng Thứ Bảy (8h30 – 12h00 và 13h30 – 18h00). Yêu cầu gửi ngoài giờ làm việc được xử lý vào ngày làm việc tiếp theo.</p>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">4. Thông tin khách hàng cần cung cấp</h2>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> Tên sản phẩm/mã sản phẩm và số sê-ri (trên tem sản phẩm).</li>
            <li><span class="sp-check">✓</span> Mã đơn hàng, hóa đơn hoặc phiếu bảo hành.</li>
            <li><span class="sp-check">✓</span> Mô tả lỗi: thời điểm phát sinh, tần suất, thông báo lỗi hiển thị (nếu có).</li>
            <li><span class="sp-check">✓</span> Môi trường sử dụng: thiết bị kết nối, cáp, nguồn điện, hệ điều hành/phần mềm liên quan.</li>
            <li><span class="sp-check">✓</span> Hình ảnh hoặc video thể hiện lỗi (nếu có).</li>
          </ul>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">5. Quy trình hỗ trợ kỹ thuật</h2>
          <div class="sp-steps-list">
            <div class="sp-step-item">
              <span class="sp-step-num">1</span>
              <div>Khách hàng liên hệ hotline <a href="tel:0867036698" class="sp-inline-link">0867036698</a> hoặc email <a href="mailto:nchieu@xinchen.vn" class="sp-inline-link">nchieu@xinchen.vn</a>, cung cấp thông tin theo mục 4.</div>
            </div>
            <div class="sp-step-item">
              <span class="sp-step-num">2</span>
              <div>Bộ phận kỹ thuật tiếp nhận, xác nhận thông tin sản phẩm và tình trạng bảo hành.</div>
            </div>
            <div class="sp-step-item">
              <span class="sp-step-num">3</span>
              <div>Hướng dẫn khách hàng kiểm tra và khắc phục lỗi từ xa (kiểm tra cáp, nguồn, cổng kết nối, cài đặt, driver…).</div>
            </div>
            <div class="sp-step-item">
              <span class="sp-step-num">4</span>
              <div>Nếu sự cố chưa được giải quyết, Công ty hướng dẫn gửi hoặc mang sản phẩm đến trụ sở/văn phòng Hà Nội để kiểm tra theo Chính sách bảo hành.</div>
            </div>
            <div class="sp-step-item">
              <span class="sp-step-num">5</span>
              <div>Thông báo kết quả và hướng xử lý cho khách hàng; lưu thông tin yêu cầu để theo dõi.</div>
            </div>
          </div>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">6. Quyền và trách nhiệm</h2>
          <h3 class="sp-subhead">Công ty</h3>
          <p class="sp-muted">Tiếp nhận yêu cầu trong giờ làm việc, tư vấn chính xác và trung thực, thông báo rõ hướng xử lý và chi phí (nếu có) trước khi thực hiện.</p>
          <h3 class="sp-subhead">Khách hàng</h3>
          <p class="sp-muted">Cung cấp thông tin đầy đủ, chính xác; thực hiện theo hướng dẫn an toàn; sao lưu dữ liệu trước khi gửi sản phẩm. Công ty không chịu trách nhiệm về dữ liệu lưu trên thiết bị của khách hàng. Khách hàng không tự ý tháo, sửa chữa hoặc nâng cấp sản phẩm khi chưa có hướng dẫn của Công ty.</p>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">7. Chi phí hỗ trợ</h2>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> Tư vấn và hướng dẫn xử lý sự cố từ xa qua hotline, email không thu phí.</li>
            <li><span class="sp-check">✓</span> Sửa chữa, thay thế linh kiện trong thời hạn và đúng điều kiện bảo hành được miễn phí theo Chính sách bảo hành.</li>
            <li><span class="sp-check">✓</span> Sản phẩm ngoài bảo hành hoặc không đủ điều kiện bảo hành được báo phí trước khi thực hiện.</li>
          </ul>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">8. Liên quan đến bảo hành</h2>
          <p class="sp-muted">Các điều kiện, trường hợp không được bảo hành, thời hạn và thời gian xử lý (thông thường từ 07 đến 15 ngày làm việc) được áp dụng theo <a href="/ho-tro/bao-hanh" class="sp-inline-link">Chính sách bảo hành</a> của ONDATA.</p>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">Thông tin liên hệ</h2>
          <div class="sp-table-wrap">
            <table class="sp-table">
              <tbody>
                <tr>
                  <td>Thương hiệu</td>
                  <td>ONDATA</td>
                </tr>
                <tr>
                  <td>Đơn vị phân phối</td>
                  <td>Công ty TNHH Máy Tính Xin Chen (XIN CHEN Computer Company Limited)</td>
                </tr>
                <tr>
                  <td>Trụ sở chính</td>
                  <td>68 đường Ký Hoà, phường Chợ Lớn, TP. Hồ Chí Minh</td>
                </tr>
                <tr>
                  <td>Văn phòng Hà Nội</td>
                  <td>167 Louis I, LK34, KĐT mới Hoàng Văn Thụ, Hoàng Mai, Hà Nội</td>
                </tr>
                <tr>
                  <td>Hotline</td>
                  <td><a href="tel:0867036698" class="sp-inline-link">0867036698</a></td>
                </tr>
                <tr>
                  <td>Phòng Kinh doanh</td>
                  <td><a href="tel:0916666804" class="sp-inline-link">0916666804</a></td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><a href="mailto:nchieu@xinchen.vn" class="sp-inline-link">nchieu@xinchen.vn</a></td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td><a href="https://onda.vn" class="sp-inline-link" target="_blank" rel="noopener">onda.vn</a></td>
                </tr>
                <tr>
                  <td>Thời gian làm việc</td>
                  <td>Thứ Hai đến hết sáng Thứ Bảy (8h30 – 12h00 và 13h30 – 18h00)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="sp-notice-box sp-notice-box--center">
          <div>
            ONDATA VIỆT NAM — đơn vị vận hành: <strong>Công ty TNHH Máy Tính Xin Chen</strong>.
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
          <h1 class="sp-sub-title">Chính sách bảo mật thông tin</h1>
          <p class="sp-sub-desc">Áp dụng cho khách hàng, đối tác và người truy cập website onda.vn. Trong chính sách này, “ONDATA” hoặc “Công ty” chỉ hoạt động kinh doanh sản phẩm thương hiệu ONDATA tại Việt Nam do Công ty TNHH Máy Tính Xin Chen thực hiện.</p>
        </div>

        <div class="sp-sub-banner">
          ${supportBanner('/images/banners/banner-privacy.jpg', 'Chính sách bảo mật')}
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">1. Mục đích và phạm vi áp dụng</h2>
          <p class="sp-muted">Công ty TNHH Máy Tính Xin Chen (đơn vị nhập khẩu, phân phối và vận hành kinh doanh thương hiệu ONDATA tại Việt Nam) coi việc bảo vệ thông tin cá nhân của khách hàng là trách nhiệm quan trọng. Chính sách này nêu rõ mục đích, phạm vi thu thập, cách sử dụng, thời gian lưu trữ và các biện pháp bảo vệ thông tin cá nhân khi khách hàng truy cập website onda.vn, liên hệ tư vấn, đăng ký làm đại lý hoặc mua sản phẩm ONDATA tại Công ty.</p>
          <p class="sp-muted">Chính sách được xây dựng phù hợp với quy định của pháp luật Việt Nam về bảo vệ dữ liệu cá nhân, bảo vệ quyền lợi người tiêu dùng và thương mại điện tử.</p>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">2. Mục đích thu thập thông tin</h2>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> Tiếp nhận, xử lý đơn hàng, báo giá, hợp đồng; giao hàng và thực hiện bảo hành, đổi trả.</li>
            <li><span class="sp-check">✓</span> Liên hệ tư vấn sản phẩm, xác nhận thông tin đơn hàng, chăm sóc khách hàng và hỗ trợ kỹ thuật.</li>
            <li><span class="sp-check">✓</span> Đăng ký, xét duyệt và quản lý đại lý, nhà phân phối.</li>
            <li><span class="sp-check">✓</span> Gửi thông tin về sản phẩm, chương trình khuyến mại khi khách hàng đồng ý nhận.</li>
            <li><span class="sp-check">✓</span> Cải thiện chất lượng website, sản phẩm và dịch vụ; phòng ngừa gian lận, bảo đảm an toàn giao dịch.</li>
            <li><span class="sp-check">✓</span> Thực hiện nghĩa vụ kế toán, thuế và các nghĩa vụ khác theo quy định của pháp luật.</li>
          </ul>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">3. Phạm vi thông tin thu thập</h2>
          <div class="sp-table-wrap">
            <table class="sp-table">
              <thead>
                <tr>
                  <th>Nhóm thông tin</th>
                  <th>Nội dung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Thông tin định danh, liên hệ</td>
                  <td>Họ tên, tên công ty, số điện thoại, email, địa chỉ nhận hàng, địa chỉ xuất hóa đơn.</td>
                </tr>
                <tr>
                  <td>Thông tin giao dịch</td>
                  <td>Sản phẩm đặt mua, số lượng, giá trị đơn hàng, hình thức thanh toán, lịch sử mua hàng, thông tin bảo hành.</td>
                </tr>
                <tr>
                  <td>Thông tin doanh nghiệp</td>
                  <td>Dành cho đại lý và khách hàng B2B: tên doanh nghiệp, mã số thuế, người đại diện, thông tin liên hệ phục vụ hợp đồng và hóa đơn.</td>
                </tr>
                <tr>
                  <td>Thông tin kỹ thuật</td>
                  <td>Địa chỉ IP, loại thiết bị, trình duyệt, thời gian truy cập, cookie nhằm vận hành và cải thiện website.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="sp-muted">Công ty không thu thập số thẻ thanh toán của khách hàng. Khi thanh toán chuyển khoản, khách hàng thực hiện trực tiếp qua ngân hàng của mình.</p>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">4. Phạm vi sử dụng và chia sẻ thông tin</h2>
          <p class="sp-muted">Công ty chỉ sử dụng thông tin cho các mục đích nêu tại mục 2. Công ty không bán, trao đổi hoặc cho thuê thông tin cá nhân của khách hàng cho bên thứ ba. Thông tin chỉ được chia sẻ trong các trường hợp:</p>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> Đơn vị vận chuyển, đối tác thanh toán, đơn vị bảo hành được ủy quyền, trong phạm vi cần thiết để thực hiện đơn hàng và dịch vụ; các đơn vị này có nghĩa vụ bảo mật thông tin.</li>
            <li><span class="sp-check">✓</span> Có sự đồng ý của khách hàng.</li>
            <li><span class="sp-check">✓</span> Theo yêu cầu bằng văn bản của cơ quan nhà nước có thẩm quyền theo quy định của pháp luật.</li>
            <li><span class="sp-check">✓</span> Cần thiết để bảo vệ quyền, lợi ích hợp pháp của Công ty hoặc của khách hàng khác trong trường hợp có hành vi vi phạm.</li>
          </ul>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">5. Thời gian lưu trữ</h2>
          <p class="sp-muted">Thông tin cá nhân được lưu trữ trong thời gian cần thiết để thực hiện các mục đích nêu trên và theo thời hạn lưu trữ chứng từ kế toán, thuế theo quy định. Khi hết mục đích sử dụng hoặc khi khách hàng yêu cầu hợp lệ, Công ty sẽ xóa hoặc ẩn danh thông tin, trừ trường hợp pháp luật yêu cầu phải lưu giữ.</p>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">6. Biện pháp bảo vệ thông tin</h2>
          <ul class="sp-checklist">
            <li><span class="sp-check">✓</span> Dữ liệu được lưu trữ trên hệ thống có kiểm soát truy cập; chỉ nhân viên có nhiệm vụ liên quan mới được tiếp cận.</li>
            <li><span class="sp-check">✓</span> Nhân viên được yêu cầu cam kết bảo mật thông tin khách hàng.</li>
            <li><span class="sp-check">✓</span> Áp dụng các biện pháp kỹ thuật phù hợp (mật khẩu, phân quyền, sao lưu dữ liệu, kết nối bảo mật) để phòng ngừa truy cập trái phép, mất mát hoặc thay đổi dữ liệu.</li>
            <li><span class="sp-check">✓</span> Khi phát hiện sự cố lộ lọt thông tin, Công ty sẽ kịp thời xử lý, thông báo cho khách hàng bị ảnh hưởng và cơ quan có thẩm quyền theo quy định.</li>
          </ul>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">7. Quyền của khách hàng</h2>
          <p class="sp-muted">Khách hàng có quyền: được biết về việc xử lý thông tin của mình; đồng ý hoặc không đồng ý, rút lại sự đồng ý; truy cập, xem, chỉnh sửa thông tin; yêu cầu cung cấp, xóa, hạn chế xử lý thông tin; từ chối nhận thông tin quảng cáo; khiếu nại, tố cáo theo quy định của pháp luật.</p>
          <p class="sp-muted">Để thực hiện các quyền này, khách hàng gửi yêu cầu về email <a href="mailto:nchieu@xinchen.vn" class="sp-inline-link">nchieu@xinchen.vn</a> hoặc gọi hotline <a href="tel:0867036698" class="sp-inline-link">0867036698</a>. Công ty sẽ phản hồi trong thời hạn quy định của pháp luật và không quá 07 ngày làm việc đối với yêu cầu thông thường.</p>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">8. Cookie</h2>
          <p class="sp-muted">Website có thể sử dụng cookie để ghi nhớ thiết lập của người dùng và thống kê lượng truy cập. Người dùng có thể tắt hoặc xóa cookie trong trình duyệt; việc này có thể làm một số chức năng của website hoạt động không đầy đủ.</p>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">9. Thay đổi chính sách</h2>
          <p class="sp-muted">Công ty có thể cập nhật chính sách này khi cần thiết. Phiên bản mới được đăng trên website onda.vn và có hiệu lực kể từ thời điểm đăng tải. Việc tiếp tục sử dụng website, dịch vụ sau thời điểm đó được hiểu là khách hàng chấp nhận nội dung cập nhật.</p>
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">Thông tin liên hệ</h2>
          <div class="sp-table-wrap">
            <table class="sp-table">
              <tbody>
                <tr>
                  <td>Thương hiệu</td>
                  <td>ONDATA</td>
                </tr>
                <tr>
                  <td>Đơn vị phân phối</td>
                  <td>Công ty TNHH Máy Tính Xin Chen (XIN CHEN Computer Company Limited)</td>
                </tr>
                <tr>
                  <td>Trụ sở chính</td>
                  <td>68 đường Ký Hoà, phường Chợ Lớn, TP. Hồ Chí Minh</td>
                </tr>
                <tr>
                  <td>Văn phòng Hà Nội</td>
                  <td>167 Louis I, LK34, KĐT mới Hoàng Văn Thụ, Hoàng Mai, Hà Nội</td>
                </tr>
                <tr>
                  <td>Hotline</td>
                  <td><a href="tel:0867036698" class="sp-inline-link">0867036698</a></td>
                </tr>
                <tr>
                  <td>Phòng Kinh doanh</td>
                  <td><a href="tel:0916666804" class="sp-inline-link">0916666804</a></td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><a href="mailto:nchieu@xinchen.vn" class="sp-inline-link">nchieu@xinchen.vn</a></td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td><a href="https://onda.vn" class="sp-inline-link" target="_blank" rel="noopener">onda.vn</a></td>
                </tr>
                <tr>
                  <td>Thời gian làm việc</td>
                  <td>Thứ Hai đến hết sáng Thứ Bảy (8h30 – 12h00 và 13h30 – 18h00)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="sp-notice-box sp-notice-box--center">
          <div>
            ONDATA VIỆT NAM — đơn vị vận hành: <strong>Công ty TNHH Máy Tính Xin Chen</strong>.
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
