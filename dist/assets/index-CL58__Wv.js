(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();function vt(t=0){return`
    <header class="navbar" id="navbar">
      <div class="nav-container">
        <!-- Top Row: Logo, Search Bar, Icons -->
        <div class="nav-top">
          <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
          <a href="/" class="nav-logo" id="nav-logo">
            <img src="/logo tach nen.png" alt="ONDATA" class="logo-img" onerror="this.onerror=null; this.src='/logo.png';" />
          </a>

          <div class="nav-search">
            <input 
              type="text" 
              placeholder="Tìm kiếm sản phẩm, mã, thương hiệu..." 
              id="search-input" 
              autocomplete="off"
            />
            <button class="search-btn" aria-label="Tìm kiếm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            <div class="search-dropdown" id="search-dropdown"></div>
          </div>

          <div class="nav-actions">
            <button class="nav-search-icon" id="nav-search-icon" type="button" aria-label="Tìm kiếm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            <a href="#" class="nav-action-icon" id="btn-account" title="Tài khoản">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </a>
            <a href="#" class="nav-action-icon" id="btn-wishlist" title="Yêu thích">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
            </a>
            <a href="/lien-he" class="nav-quote-pill" id="btn-nav-quote" title="Liên hệ báo giá">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Báo giá</span>
            </a>
          </div>
        </div>

        <!-- Subrow Menu: Trang chủ, Về Ondata, Sản phẩm, Khuyến mãi, Tin tức, Liên hệ, Hỗ trợ -->
        <nav class="nav-menu" id="nav-menu">
          <a href="/" class="nav-menu-link active" id="menu-home">Trang chủ</a>
          <a href="/ve-ondata" class="nav-menu-link" id="menu-about">Về Ondata</a>
          <div class="nav-dropdown-wrap">
            <a href="/san-pham/all" class="nav-menu-link" id="menu-products">
              Sản phẩm
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav-dropdown-menu">
              <a href="/san-pham/aio" class="nav-dropdown-item">
                <span class="ndi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg></span>
                <span>Máy tính All-in-one</span>
              </a>
              <a href="/san-pham/monitor" class="nav-dropdown-item">
                <span class="ndi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg></span>
                <span>Màn hình</span>
              </a>
              <a href="/san-pham/keyboard" class="nav-dropdown-item">
                <span class="ndi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg></span>
                <span>Bàn phím</span>
              </a>
              <a href="/san-pham/mouse" class="nav-dropdown-item">
                <span class="ndi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg></span>
                <span>Chuột</span>
              </a>
              <a href="/san-pham/ram" class="nav-dropdown-item">
                <span class="ndi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg></span>
                <span>RAM</span>
              </a>
              <a href="/san-pham/accessories" class="nav-dropdown-item">
                <span class="ndi-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span>
                <span>Phụ kiện</span>
              </a>
            </div>
          </div>
          <a href="/lien-he" class="nav-menu-link" id="menu-contact">Liên hệ</a>
          <a href="/ho-tro" class="nav-menu-link" id="menu-support">Hỗ trợ</a>

          <div class="mobile-menu-foot">
            <a href="#" class="mm-chip" id="btn-account-mobile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Tài khoản
            </a>
            <a href="#" class="mm-chip" id="btn-wishlist-mobile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              Đã lưu
            </a>
            <div class="mm-hotline">
              <div>
                <span>Hotline</span>
                <a href="tel:0867036698">0867036698</a>
              </div>
              <span class="mm-hours">8:00 – 22:00</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  `}function bt(){return`
    <section class="home-top-section">
      <div class="container">
        <div class="home-mobile-cats" aria-label="Danh mục">
          <a href="/san-pham/aio">Máy tính All-in-one</a>
          <a href="/san-pham/monitor">Màn hình</a>
          <a href="/san-pham/keyboard">Bàn phím</a>
          <a href="/san-pham/mouse">Chuột</a>
          <a href="/san-pham/ram">RAM</a>
          <a href="/san-pham/accessories">Phụ kiện</a>
        </div>
        <div class="home-top-grid">
          <!-- Sidebar: Danh mục sản phẩm -->
          <aside class="sidebar-categories" id="sidebar-categories">
            <div class="sidebar-header">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <span>Danh mục sản phẩm</span>
            </div>
            <ul class="sidebar-menu">
              <li class="sidebar-item" data-cat="aio">
                <a href="#" data-cat="aio">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>
                  </span>
                  <span>Máy tính All-in-one</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="monitor">
                <a href="#" data-cat="monitor">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg>
                  </span>
                  <span>Màn hình</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="keyboard">
                <a href="#" data-cat="keyboard">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg>
                  </span>
                  <span>Bàn phím</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="mouse">
                <a href="#" data-cat="mouse">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg>
                  </span>
                  <span>Chuột</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="ram">
                <a href="#" data-cat="ram">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg>
                  </span>
                  <span>RAM</span>
                </a>
              </li>
              <li class="sidebar-item" data-cat="accessories">
                <a href="#" data-cat="accessories">
                  <span class="sidebar-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </span>
                  <span>Phụ kiện</span>
                </a>
              </li>
            </ul>
          </aside>

          <div class="main-hero-banner main-hero-banner--photo">
            <img src="/images/banners/banner-home.jpg" alt="Ondata — Nâng cấp lên 120Hz. Màn hình nhập khẩu và phân phối chính thức." />
            <a class="banner-hotspot" style="left:7.66%;top:73.86%;width:13.75%;height:9.65%" href="/san-pham/monitor">Xem sản phẩm</a>
            <a class="banner-hotspot" style="left:22.55%;top:73.86%;width:14.67%;height:9.65%" href="/lien-he">Nhận báo giá sỉ</a>
          </div>
        </div>

        <!-- 4 Thẻ Cam Kết / Lợi Ích Dịch Vụ -->
        <div class="assurance-bar">
          <div class="assurance-item">
            <div class="assurance-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div class="assurance-info">
              <h4>Hàng chính hãng</h4>
              <p>100%</p>
            </div>
          </div>

          <div class="assurance-item">
            <div class="assurance-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <div class="assurance-info">
              <h4>Bảo hành chính hãng</h4>
              <p>Tận tâm</p>
            </div>
          </div>

          <div class="assurance-item">
            <div class="assurance-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <div class="assurance-info">
              <h4>Giao hàng toàn quốc</h4>
              <p>Nhanh chóng</p>
            </div>
          </div>

          <div class="assurance-item">
            <div class="assurance-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
            </div>
            <div class="assurance-info">
              <h4>Hỗ trợ kỹ thuật</h4>
              <p>Chuyên nghiệp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}const U=["/images/monitors/monitor-01.png?v=2","/images/monitors/monitor-02.png?v=2"],z=[{id:"aio",name:"Máy tính All-in-one",icon:"aio",desc:"Máy tính tất cả trong một tinh gọn, mạnh mẽ"},{id:"monitor",name:"Màn hình",icon:"monitor",desc:"Hiển thị sắc nét, tần số quét cao, bảo vệ mắt"},{id:"keyboard",name:"Bàn phím",icon:"keyboard",desc:"Bàn phím cơ & công thái học gõ êm mượt"},{id:"mouse",name:"Chuột",icon:"mouse",desc:"Chuột quang học, wireless độ nhạy cao"},{id:"ram",name:"RAM",icon:"ram",desc:"Bộ nhớ DDR4/DDR5 tốc độ cao, đa nhiệm tối ưu"},{id:"accessories",name:"Phụ kiện",icon:"accessories",desc:"Giá treo, hub chuyển đổi, lót chuột cao cấp"}];let A=[{id:"od215100vv",cat:"monitor",name:"Màn hình ONDATA OD215100VV 21.5 inch 100Hz Full HD VA",images:U,badge:"Mới",price:0,stars:5,reviews:0,seo:{title:"Màn hình ONDATA OD215100VV 21.5 inch 100Hz Full HD VA",description:"Màn hình ONDATA OD215100VV 21.5 inch Full HD, 100Hz, tấm nền VA, 95% sRGB, HDMI + VGA, giảm ánh sáng xanh.",keywords:"màn hình ONDATA OD215100VV, màn hình 21.5 inch, màn hình 100Hz, màn hình VA Full HD, màn hình văn phòng, màn hình 95% sRGB, màn hình HDMI VGA"},specs:[{icon:"monitor",label:"Kích thước",value:'21.5" VA Full HD'},{icon:"cpu",label:"Tần số quét",value:"100Hz"},{icon:"gpu",label:"Độ tương phản",value:"3000:1 (Typ.)"},{icon:"ram",label:"Dải màu",value:"95% sRGB"},{icon:"shield",label:"Kết nối",value:"HDMI + VGA"},{icon:"shield",label:"Treo tường",value:"VESA 75×75 mm"}],desc:"Màn hình ONDATA OD215100VV là màn hình LCD 21.5 inch, độ phân giải Full HD 1920×1080, tấm nền VA, tần số quét 100Hz. Màn hình phủ 95% sRGB, có công nghệ giảm ánh sáng xanh và đủ hai cổng HDMI, VGA. Sản phẩm phù hợp cho văn phòng, học tập, giải trí và công việc thiết kế cơ bản.",features:["Tần số quét 100Hz, thao tác mượt hơn màn hình 60Hz","Tấm nền VA, độ tương phản 3000:1","Phủ 95% sRGB, 16.7 triệu màu","HDMI + VGA, hỗ trợ VESA 75×75 mm"],techSpecs:{Model:"OD215100VV","Kích thước":"21.5 inch, tỷ lệ 16:9","Vùng hiển thị":"478.654 (H) × 260.28 (V) mm","Tấm nền / đèn nền":"VA / ELED","Độ phân giải":"1920 × 1080 (Full HD), 102 PPI","Tần số quét":"100Hz","Thời gian phản hồi":"14ms (Typ.)","Độ sáng":"250 cd/m² (Max.)","Độ tương phản":"3000:1 (Typ.)","Dải màu":"95% sRGB (BT.709), 16.7 triệu màu","Góc nhìn":"178° (H) / 178° (V)","Cổng vào":"HDMI + VGA","Nguồn điện":"12V / 2.5A, adapter rời","Công suất":"Tối đa 26W; chờ < 0.5W","Nhiệt độ hoạt động / lưu trữ":"0°C ~ 40°C / -20°C ~ 60°C","Độ ẩm hoạt động / lưu trữ":"10~80% RH / 5~90% (không ngưng tụ)","Chân đế":"Chữ V, cố định",VESA:"75 × 75 mm","Kích thước sản phẩm":"494 × 153 × 367 mm","Kích thước đóng gói":"546 × 93 × 346 mm","Màu vỏ":"Đen"},detailHtml:`
      <h2>Màn hình ONDATA OD215100VV 21.5 inch Full HD 100Hz tấm nền VA</h2>
      <p>Màn hình ONDATA OD215100VV là màn hình LCD 21.5 inch, độ phân giải Full HD 1920×1080, tấm nền VA, tần số quét 100Hz. Màn hình phủ 95% sRGB, có công nghệ giảm ánh sáng xanh và đủ hai cổng HDMI, VGA. Sản phẩm phù hợp cho văn phòng, học tập, giải trí và công việc thiết kế cơ bản.</p>
      <h3>Vì sao nên chọn màn hình ONDATA OD215100VV?</h3>
      <h3>1. Tần số quét 100Hz, thao tác mượt hơn màn hình 60Hz</h3>
      <p>Tần số quét 100Hz giúp chuyển động liền mạch hơn mức 60Hz phổ biến. Bạn sẽ thấy rõ khi cuộn trang web, kéo thả cửa sổ, xem video hoặc chơi game nhẹ. Thời gian phản hồi 14ms (Typ.) hỗ trợ hình ảnh chuyển cảnh gọn hơn.</p>
      <h3>2. Tấm nền VA, độ tương phản 3000:1</h3>
      <p>Tấm nền VA cho màu sắc đồng đều và độ tương phản 3000:1 (Typ.), vùng tối sâu, hình ảnh có chiều sâu. Góc nhìn rộng 178° (H) / 178° (V), nhiều người ngồi xem cùng lúc vẫn thấy rõ hình.</p>
      <h3>3. Phủ 95% sRGB, 16.7 triệu màu</h3>
      <p>Dải màu 95% sRGB (BT.709) cùng 16.7 triệu màu đáp ứng tốt việc chỉnh sửa ảnh, thiết kế đồ họa cơ bản và xem nội dung đa phương tiện.</p>
      <h3>4. Full HD sắc nét, độ sáng 250 cd/m²</h3>
      <p>Độ phân giải 1920×1080 (102 PPI) ở kích thước 21.5 inch cho chữ và hình ảnh rõ nét. Độ sáng tối đa 250 cd/m² phù hợp môi trường văn phòng và gia đình.</p>
      <h3>5. Công nghệ giảm ánh sáng xanh</h3>
      <p>Chế độ giảm ánh sáng xanh (Low Blue Light) giúp việc nhìn màn hình lâu thoải mái hơn trong những buổi làm việc, học tập kéo dài.</p>
      <h3>6. Kết nối HDMI + VGA, hỗ trợ VESA 75×75mm</h3>
      <p>Cổng HDMI dùng cho máy tính, laptop, đầu thu đời mới. Cổng VGA giúp tận dụng thiết bị đời cũ. Màn hình hỗ trợ chuẩn VESA 75×75mm nên có thể gắn giá treo hoặc tay đỡ để tiết kiệm diện tích bàn.</p>
      <h3>7. Thiết kế gọn, tiết kiệm điện</h3>
      <p>Màn hình màu đen, chân đế cố định hình chữ V. Công suất tối đa 26W, tiêu thụ chờ dưới 0.5W. Đèn báo xanh khi hoạt động, đỏ khi không có tín hiệu hoặc ở chế độ chờ.</p>
    `},{id:"od238120iv",cat:"monitor",name:'Màn hình ONDATA OD238120IV 23.8" IPS Full HD 120Hz',images:U,badge:"Mới",price:0,stars:5,reviews:0,seo:{title:'Màn hình ONDATA OD238120IV 23.8" IPS Full HD 120Hz',description:"ONDATA OD238120IV màn hình 23.8 inch IPS, Full HD, 120Hz mượt mà, phủ 95% sRGB, HDMI + VGA, hỗ trợ VESA.",keywords:"màn hình ONDATA OD238120IV, màn hình 24 inch 120Hz, màn hình 23.8 inch IPS, màn hình Full HD 120Hz, màn hình văn phòng 24 inch, màn hình ONDATA 120Hz, màn hình máy tính 120Hz giá tốt"},specs:[{icon:"monitor",label:"Kích thước",value:'23.8" IPS Full HD'},{icon:"cpu",label:"Tần số quét",value:"120Hz"},{icon:"gpu",label:"Tấm nền",value:"IPS, góc nhìn 178°"},{icon:"ram",label:"Dải màu",value:"95% sRGB"},{icon:"shield",label:"Kết nối",value:"HDMI + VGA"},{icon:"shield",label:"Treo tường",value:"VESA 75×75 mm"}],desc:"Màn hình ONDATA OD238120IV mang tần số quét 120Hz lên phân khúc màn hình 24 inch phổ thông, kết hợp tấm nền IPS Full HD cho màu sắc đẹp, góc nhìn rộng. Thiết kế viền mỏng, chân đế chữ V gọn gàng và khả năng treo tường VESA 75×75mm giúp máy phù hợp từ bàn làm việc gia đình đến văn phòng, phòng máy và cửa hàng.",features:["Tần số quét 120Hz, mượt hơn thấy rõ so với 60Hz","Tấm nền IPS, góc nhìn 178°","Độ phủ màu 95% sRGB, 16.7 triệu màu","Viền mỏng, VESA 75×75mm, HDMI + VGA"],techSpecs:{Model:"OD238120IV","Kích thước":"23.8 inch, tỷ lệ 16:9","Công nghệ LCD":"IPS, đèn nền DLED","Độ phân giải":"1920 × 1080 (Full HD)","Tần số quét":"120Hz","Độ phủ màu":"95% sRGB (BT.709)","Màu hiển thị":"16.7 triệu màu","Độ sáng":"250 cd/m² (tối đa)","Độ tương phản":"1000:1","Thời gian phản hồi":"14ms (Typ.)","Góc nhìn":"178° (H) / 178° (V)","Vùng hiển thị":"527.04 (H) × 296.46 (V) mm","Cổng kết nối":"Vào: VGA + HDMI; Ra: không có","Nguồn điện":"Adapter ngoài 12V/2.5A","Công suất":"Tối đa 30W; chờ < 0.5W","Nhiệt độ / độ ẩm hoạt động":"0°C ~ 40°C / 10 ~ 80% RH","Nhiệt độ / độ ẩm bảo quản":"-20°C ~ 60°C / 5 ~ 90% (không ngưng tụ)","Chân đế":"Chữ V cố định","Treo tường":"VESA 75×75mm","Kích thước sản phẩm":"539 × 153 × 407 mm","Kích thước đóng gói":"617 × 110 × 406 mm","Màu vỏ":"Đen","Đèn báo":"Xanh: đang hoạt động; đỏ: không tín hiệu hoặc chế độ chờ"},detailHtml:`
      <h2>Màn hình ONDATA OD238120IV 23.8 inch IPS Full HD 120Hz</h2>
      <p>Đã đến lúc nói lời tạm biệt với màn hình 60Hz. Màn hình ONDATA OD238120IV mang tần số quét 120Hz lên phân khúc màn hình 24 inch phổ thông, kết hợp tấm nền IPS Full HD cho màu sắc đẹp, góc nhìn rộng. Thiết kế viền mỏng, chân đế chữ V gọn gàng và khả năng treo tường VESA 75×75mm giúp máy phù hợp từ bàn làm việc gia đình đến văn phòng, phòng máy và cửa hàng.</p>
      <h3>Vì sao nên chọn màn hình ONDATA OD238120IV?</h3>
      <h3>Tần số quét 120Hz: mượt hơn thấy rõ</h3>
      <p>Tần số quét 120Hz làm mới hình ảnh gấp đôi màn hình 60Hz. Bạn sẽ thấy sự khác biệt ngay khi di chuột, cuộn trang web, kéo cửa sổ hay xem video chuyển động nhanh. Đây là nâng cấp đáng giá cho cả người làm văn phòng lẫn người chơi game nhẹ.</p>
      <p class="pd-note">Lưu ý: để đạt 120Hz ở độ phân giải 1920×1080, thiết bị xuất hình và cáp kết nối cần hỗ trợ chế độ này (khuyến nghị dùng cổng HDMI).</p>
      <h3>Tấm nền IPS, góc nhìn 178°</h3>
      <p>Nhờ tấm nền IPS, màu sắc giữ ổn định dù bạn nhìn thẳng hay nhìn nghiêng. Màn hình có góc nhìn 178° theo cả chiều ngang và dọc, rất tiện khi cần chia sẻ màn hình cho đồng nghiệp hoặc khách hàng cùng xem.</p>
      <h3>Độ phủ màu 95% sRGB, hiển thị 16.7 triệu màu</h3>
      <p>Dải màu rộng 95% sRGB (BT.709) cho hình ảnh tự nhiên, đủ đáp ứng công việc chỉnh sửa ảnh, thiết kế cơ bản, làm slide hay xem phim. Độ phân giải Full HD 1920×1080 trên kích thước 23.8 inch cho hình ảnh sắc nét.</p>
      <h3>Công nghệ giảm ánh sáng xanh</h3>
      <p>Màn hình hỗ trợ giảm ánh sáng xanh, giúp việc làm việc và học tập nhiều giờ liên tục dễ chịu hơn cho mắt.</p>
      <h3>Thiết kế gọn, dễ lắp đặt</h3>
      <ul>
        <li>Viền mỏng hiện đại, vỏ đen dễ phối với mọi không gian.</li>
        <li>Chân đế chữ V cố định, vững chắc, chiếm ít diện tích bàn.</li>
        <li>Hỗ trợ treo tường hoặc giá đỡ chuẩn VESA 75×75mm.</li>
        <li>Kết nối HDMI và VGA, phù hợp cả máy tính đời mới lẫn thiết bị cũ.</li>
      </ul>
      <h3>Tiết kiệm điện năng</h3>
      <p>Công suất tiêu thụ tối đa 30W, ở chế độ chờ dưới 0.5W. Phù hợp khi trang bị số lượng lớn cho văn phòng, trường học, phòng máy.</p>
    `},{id:"od270100iv",cat:"monitor",name:"Màn hình ONDATA OD270100IV 27 inch IPS 100Hz Full HD",images:U,badge:"Mới",price:0,stars:5,reviews:0,seo:{title:"Màn hình ONDATA OD270100IV 27 inch IPS 100Hz Full HD",description:"Màn hình ONDATA OD270100IV 27 inch IPS Full HD 100Hz, 95% sRGB, giảm ánh sáng xanh, HDMI + VGA, tặng kèm cáp HDMI.",keywords:"màn hình ONDATA OD270100IV, màn hình 27 inch 100Hz, màn hình IPS 27 inch Full HD, màn hình máy tính 27 inch, màn hình văn phòng 27 inch, màn hình ONDATA chính hãng, màn hình HDMI VGA 27 inch"},specs:[{icon:"monitor",label:"Kích thước",value:'27" IPS Full HD'},{icon:"cpu",label:"Tần số quét",value:"100Hz"},{icon:"gpu",label:"Tấm nền",value:"IPS, góc nhìn 178°"},{icon:"ram",label:"Dải màu",value:"95% sRGB"},{icon:"shield",label:"Kết nối",value:"HDMI + VGA, tặng cáp HDMI"},{icon:"shield",label:"Treo tường",value:"VESA 75×75 mm"}],desc:"Màn hình ONDATA OD270100IV là màn hình 27 inch tấm nền IPS, độ phân giải Full HD 1920×1080, tần số quét 100Hz. Màn hình có độ phủ màu 95% sRGB, công nghệ giảm ánh sáng xanh và kết nối HDMI + VGA, phù hợp cho văn phòng, học tập, thiết kế cơ bản và giải trí hằng ngày.",features:["Tần số quét 100Hz, mượt hơn màn hình 60Hz","Tấm nền IPS, góc nhìn rộng 178°","Dải màu 95% sRGB, màn hình lớn 27 inch","HDMI + VGA, VESA 75×75mm, tặng kèm cáp HDMI"],techSpecs:{Model:"OD270100IV","Kích thước màn hình":"27 inch","Tấm nền / đèn nền":"IPS / DLED","Tỷ lệ khung hình":"16:9","Độ phân giải":"1920×1080 (Full HD)","Tần số quét":"100Hz","Độ sáng":"250 cd/m² (tối đa)","Độ tương phản":"1000:1","Thời gian phản hồi":"14ms (Typ.)","Màu hiển thị":"16.7 triệu màu","Độ phủ màu":"95% sRGB (BT.709)","Góc nhìn":"178° (H) / 178° (V)","Vùng hiển thị":"597.888 (H) × 336.312 (V) mm","Cổng vào":"HDMI + VGA","Cổng ra":"Không có","Nguồn điện":"Adapter ngoài 12V/2.5A","Công suất":"Tối đa 30W; chế độ chờ < 0.5W","Điều khiển":"1 nút điều hướng","Chân đế":"Chữ V, cố định","Chuẩn treo tường":"VESA 75×75mm","Kích thước sản phẩm":"613.3 × 153 × 441 mm","Kích thước đóng gói":"682 × 123 × 440 mm","Màu vỏ":"Đen","Nhiệt độ hoạt động":"0°C ~ 40°C","Độ ẩm hoạt động":"10% ~ 80% RH","Điều kiện lưu trữ":"-20°C ~ 60°C; độ ẩm 5% ~ 90% (không ngưng tụ)"},detailHtml:`
      <h2>Màn hình ONDATA OD270100IV 27 inch IPS Full HD 100Hz</h2>
      <p>Màn hình ONDATA OD270100IV là màn hình 27 inch tấm nền IPS, độ phân giải Full HD 1920×1080, tần số quét 100Hz. Màn hình có độ phủ màu 95% sRGB, công nghệ giảm ánh sáng xanh và kết nối HDMI + VGA, phù hợp cho văn phòng, học tập, thiết kế cơ bản và giải trí hằng ngày.</p>
      <p><strong>Giá bán:</strong> Liên hệ – gọi 0916666804 để nhận báo giá cho khách lẻ và đơn hàng số lượng lớn.</p>
      <h3>Vì sao nên chọn màn hình 27 inch ONDATA OD270100IV?</h3>
      <h3>1. Tần số quét 100Hz – mượt hơn màn hình 60Hz</h3>
      <p>Tần số quét 100Hz giúp thao tác cuộn trang, kéo chuột và xem video mượt mà, rõ nét hơn so với màn hình 60Hz phổ thông. Bạn cần chọn 100Hz trong cài đặt hiển thị của máy tính để sử dụng đúng tần số này.</p>
      <h3>2. Tấm nền IPS – màu chuẩn, góc nhìn rộng 178°</h3>
      <p>Tấm nền IPS cho màu sắc đồng đều, nhất quán, góc nhìn rộng đến 178° theo cả chiều ngang và dọc. Hình ảnh không bị ám màu khi nhìn lệch, thuận tiện khi nhiều người cùng xem.</p>
      <h3>3. Dải màu 95% sRGB</h3>
      <p>Màn hình hiển thị 16.7 triệu màu với độ phủ 95% sRGB (BT.709), đáp ứng tốt việc chỉnh sửa ảnh cơ bản, thiết kế đồ họa và xem phim.</p>
      <h3>4. Màn hình lớn 27 inch, Full HD</h3>
      <p>Tỷ lệ 16:9 cùng độ phân giải 1920×1080 giúp mở nhiều cửa sổ cùng lúc, thuận tiện cho kế toán, lập trình, thiết kế và làm việc nhóm.</p>
      <h3>5. Công nghệ giảm ánh sáng xanh</h3>
      <p>Công nghệ giảm ánh sáng xanh hỗ trợ trải nghiệm xem dễ chịu hơn khi sử dụng màn hình trong thời gian dài.</p>
      <h3>6. Kết nối HDMI + VGA, hỗ trợ treo tường VESA 75×75mm</h3>
      <p>Màn hình có cổng HDMI và VGA nên kết nối được với máy tính để bàn, laptop và nhiều thiết bị khác. Chuẩn VESA 75×75mm cho phép gắn giá treo tường (phụ kiện mua thêm) để tiết kiệm diện tích bàn.</p>
      <h3>7. Thiết kế đen gọn gàng, chân đế chữ V</h3>
      <p>Viền mỏng hiện đại, chân đế chữ V cố định, vận hành đơn giản với một nút điều hướng và đèn báo trạng thái dễ nhận biết (xanh khi hoạt động, đỏ khi không có tín hiệu hoặc chờ).</p>
      <h3>Phụ kiện đi kèm trong hộp</h3>
      <ul>
        <li>Màn hình ONDATA OD270100IV</li>
        <li>Chân đế</li>
        <li>Adapter nguồn</li>
        <li>Cáp HDMI</li>
        <li>Sách hướng dẫn sử dụng</li>
      </ul>
      <p>Phụ kiện mua thêm: giá treo tường.</p>
    `}];function P(t){return t?(t=t.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"),t=t.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"),t=t.replace(/ì|í|ị|ỉ|ĩ/g,"i"),t=t.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"),t=t.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"),t=t.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"),t=t.replace(/đ/g,"d"),t=t.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,"A"),t=t.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g,"E"),t=t.replace(/Ì|Í|Ị|Ỉ|Ĩ/g,"I"),t=t.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,"O"),t=t.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"U"),t=t.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,"Y"),t=t.replace(/Đ/g,"D"),t=t.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g,""),t=t.replace(/\u02C6|\u0306|\u031B/g,""),t.toLowerCase().trim()):""}function nt(t){if(!t||!t.trim())return A;const n=P(t);return A.filter(e=>{const i=P(e.name),s=P(e.cat),a=e.desc?P(e.desc):"",h=e.id.toLowerCase();return i.includes(n)||s.includes(n)||h.includes(n)||a.includes(n)})}function pt(t){return t&&A.find(n=>n.id===t)||null}function ft(t){return!t||t==="all"?A:A.filter(n=>n.cat===t)}function et(t){return"Liên hệ"}function yt(t){A=Array.isArray(t)?t:[]}function kt(t,n){switch(t){case"aio":return`
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="3" width="20" height="13" rx="2"/>
          <circle cx="12" cy="5" r="0.75" fill="currentColor"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke-width="2"/>
          <line x1="12" y1="16" x2="12" y2="21" stroke-width="2"/>
          <line x1="4" y1="13.5" x2="20" y2="13.5" stroke-dasharray="1 2" stroke-width="0.8"/>
        </svg>
      `;case"monitor":return`
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <polyline points="7 21 12 17 17 21" stroke-width="1.8"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke-width="1.8"/>
        </svg>
      `;case"keyboard":return`
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <line x1="5" y1="9" x2="5.01" y2="9" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="9" y1="9" x2="9.01" y2="9" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="13" y1="9" x2="13.01" y2="9" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="17" y1="9" x2="17.01" y2="9" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="5" y1="12" x2="5.01" y2="12" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="9" y1="12" x2="9.01" y2="12" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="13" y1="12" x2="13.01" y2="12" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="17" y1="12" x2="17.01" y2="12" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="7" y1="15.5" x2="17" y2="15.5" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `;case"mouse":return`
        <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="5" y="2" width="14" height="20" rx="7"/>
          <line x1="12" y1="6" x2="12" y2="10" stroke-width="2" stroke-linecap="round"/>
          <line x1="12" y1="2" x2="12" y2="6" stroke-width="1"/>
        </svg>
      `;case"ram":return`
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="7" width="20" height="10" rx="1.5"/>
          <line x1="6" y1="17" x2="6" y2="19.5" stroke-width="1.8"/>
          <line x1="9" y1="17" x2="9" y2="19.5" stroke-width="1.8"/>
          <line x1="12" y1="17" x2="12" y2="19.5" stroke-width="1.8"/>
          <line x1="15" y1="17" x2="15" y2="19.5" stroke-width="1.8"/>
          <line x1="18" y1="17" x2="18" y2="19.5" stroke-width="1.8"/>
          <circle cx="7" cy="11" r="1" fill="currentColor"/>
          <circle cx="12" cy="11" r="1" fill="currentColor"/>
          <circle cx="17" cy="11" r="1" fill="currentColor"/>
        </svg>
      `;case"accessories":default:return`
        <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="7" width="18" height="10" rx="2"/>
          <circle cx="8" cy="12" r="1.5"/>
          <circle cx="16" cy="12" r="1.5"/>
          <line x1="12" y1="7" x2="12" y2="17" stroke-dasharray="2 2"/>
        </svg>
      `}}function wt(t){switch(t){case"aio":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>';case"monitor":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg>';case"keyboard":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg>';case"mouse":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg>';case"ram":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg>';case"accessories":default:return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'}}function xt(){return`
    <section class="home-featured-section" id="featured-products">
      <div class="container">


        <!-- 6 Rows Danh Mục (Mỗi mục 1 hàng 5 sản phẩm) -->
        <div class="featured-categories-rows">
          ${z.map(n=>{const i=A.filter(s=>s.cat===n.id).slice(0,5).map(s=>{var a;return`
      <div class="product-item-card" data-id="${s.id}" data-cat="${s.cat}" style="cursor:pointer;">
        ${s.badge?`<span class="badge-tag">${s.badge}</span>`:""}
        <div class="product-thumb-container">
          ${(a=s.images)!=null&&a[0]?`<img class="product-thumb-photo" src="${s.images[0]}" alt="${String(s.name).replace(/"/g,"&quot;")}" />`:`<div class="tech-device-render">
            ${kt(s.cat,s.name)}
            <span class="device-label">${s.name.split(" ")[0]} ${s.name.split(" ")[1]||""}</span>
          </div>`}
        </div>
        <div class="product-info-box">
          <h3 class="product-name" title="${String(s.name).replace(/"/g,"&quot;")}">
            ${s.name} <span class="product-ext-icon">↗</span>
          </h3>
          <div class="product-pricing">
            <span class="current-price" style="color:#527d24;">Liên hệ</span>
          </div>
          <div class="product-stars-row">
            <span class="stars-gold">${"★".repeat(Math.floor(s.stars))}${s.stars%1>=.5?"½":""}</span>
            <span class="reviews-count">(${s.reviews})</span>
          </div>
        </div>
      </div>
    `}).join("");return`
      <!-- Row Danh mục: ${n.name} -->
      <div class="home-category-row-block" id="cat-block-${n.id}">
        <div class="section-top-bar">
          <div class="category-header-title-wrap">
            <span class="category-header-icon">${wt(n.id)}</span>
            <div>
              <h2 class="section-heading">${n.name}</h2>
              <span class="category-header-sub">${n.desc}</span>
            </div>
          </div>
          <a href="/san-pham/${n.id}" class="see-all-link">
            Xem tất cả
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </div>

        <div class="featured-grid-5">
          ${i||'<p class="featured-empty">Sản phẩm sẽ được cập nhật.</p>'}
        </div>
      </div>
    `}).join("")}
        </div>
      </div>
    </section>
  `}function Tt(){return`
    <section class="home-promo-section" id="promo-banner">
      <div class="container">
        <div class="promo-banner-card">
          <div class="promo-left-content">
            <span class="promo-badge-text">Chính sách B2B & Dự án</span>
            <h2 class="promo-headline">Chiết khấu đến 20%</h2>
            <a href="/lien-he" class="btn-promo-action">
              Liên hệ ngay
            </a>
          </div>

          <div class="promo-right-visual">
            <div class="hardware-showcase">
              <div class="device-monitor">
                <div class="monitor-screen"></div>
                <div class="monitor-stand"></div>
              </div>
              <div class="device-pc-case">
                <div class="pc-led-strip"></div>
              </div>
              <div class="device-laptop">
                <div class="laptop-mini-screen"></div>
              </div>
              <div class="device-keyboard"></div>
              <div class="device-mouse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function Ct(){return`
    <footer class="footer" id="footer">
      <div class="container">
        <div class="footer-main-grid">
          <!-- Col 1: Brand -->
          <div class="footer-col-brand">
            <a href="/" class="footer-brand-logo">
              <img src="/logo tach nen.png" alt="ONDATA" class="footer-logo-img" style="height: 34px; width: auto; filter: brightness(0) invert(1);" />
            </a>
            <p style="color: #9aa89b; font-size: 0.88rem; margin-top: 12px; line-height: 1.6;">
              Thương hiệu công nghệ tiên phong cung cấp giải pháp máy tính All-in-one, màn hình và linh kiện phần cứng chính hãng tại Việt Nam.
            </p>
            <div style="margin-top: 10px; font-size: 0.84rem; color: #b5c2b6; line-height: 1.6;">
              <p>167 Louis I, LK34, KĐT mới Hoàng Văn Thụ, Hoàng Mai</p>
              <p>Hotline: <a href="tel:0867036698" style="color: #a8bb68; font-weight: 600;">0867036698</a></p>
              <p>Email: <a href="mailto:nchieu@xinchen.vn" style="color: #a8bb68;">nchieu@xinchen.vn</a></p>
            </div>
          </div>

          <!-- Col 2: Sản phẩm -->
          <div class="footer-col-nav">
            <h4 class="footer-col-heading">Sản phẩm</h4>
            <ul class="footer-link-list">
              <li><a href="/san-pham/aio">Máy tính All-in-one</a></li>
              <li><a href="/san-pham/monitor">Màn hình</a></li>
              <li><a href="/san-pham/keyboard">Bàn phím</a></li>
              <li><a href="/san-pham/mouse">Chuột</a></li>
              <li><a href="/san-pham/ram">RAM</a></li>
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
              <a href="https://www.facebook.com/share/1DyrmpdgvU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://m.me/61593699315764" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Zalo / Messenger">
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
            <a href="/ho-tro/bao-mat">Chính sách bảo mật</a>
            <span>|</span>
            <a href="#">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  `}function At(t="all",n={label:"Sản phẩm",sub:"Tất cả sản phẩm chính hãng Ondata"}){const e=[{id:"aio",label:"Máy tính All-in-one",icon:Ht()},{id:"monitor",label:"Màn hình",icon:Bt()},{id:"keyboard",label:"Bàn phím",icon:Mt()},{id:"mouse",label:"Chuột",icon:Lt()},{id:"ram",label:"RAM",icon:Et()},{id:"accessories",label:"Phụ kiện",icon:Dt()}],i=["Tất cả","Văn phòng","Gaming","Đồ họa","Ultrabook"],s=["Ondata","ASUS","Acer","HP","Lenovo","Dell","Khác"],a=["8GB","16GB","32GB"],h=["Còn hàng","Hết hàng","Đặt hàng"],c=ft(t),u=c.length>0?c.map((r,b)=>{var y;return`
        <div class="catalog-product-card" id="catalog-product-${r.id}" data-product-id="${r.id}" data-product-cat="${r.cat}" style="cursor:pointer;">
          ${r.badge?`<span class="badge-tag">${r.badge}</span>`:""}
          <div class="catalog-product-thumb">
            ${(y=r.images)!=null&&y[0]?`<img class="catalog-thumb-photo" src="${r.images[0]}" alt="${String(r.name).replace(/"/g,"&quot;")}" />`:`<div class="catalog-thumb-visual">
              <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="width:100%">
                <defs>
                  <linearGradient id="cg${b}" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1a2e1d"/>
                    <stop offset="100%" stop-color="#0d1a10"/>
                  </linearGradient>
                </defs>
                <rect width="160" height="110" rx="6" fill="url(#cg${b})"/>
                <ellipse cx="80" cy="55" rx="48" ry="28" fill="#7ea835" opacity=".12"/>
                <text x="80" y="60" text-anchor="middle" font-family="Outfit,sans-serif" font-weight="800" font-size="13" fill="#7ea835" opacity=".7">ONDATA</text>
              </svg>
            </div>`}
          </div>
          <div class="catalog-product-info">
            <p class="catalog-product-name">${r.name}</p>
            <div class="catalog-product-pricing">
              <span class="catalog-product-price" style="color:#527d24;">Liên hệ</span>
            </div>
            <div class="catalog-product-stars">
              <span class="stars-gold">${"★".repeat(Math.floor(r.stars))}${r.stars%1>=.5?"½":""}</span>
              <span class="reviews-count">(${r.reviews})</span>
            </div>
          </div>
        </div>`}).join(""):`<div class="catalog-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" opacity=".3">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
        <p>Chưa có sản phẩm trong danh mục này</p>
       </div>`;return`
    <section class="catalog-page" id="catalog-page">
      <div class="catalog-container">

        <!-- BREADCRUMB -->
        <nav class="catalog-breadcrumb" aria-label="Breadcrumb">
          <a href="/" class="crumb-link" id="crumb-home">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/san-pham/all" class="crumb-link" id="crumb-products">Sản phẩm</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">${n.label}</span>
        </nav>

        <div class="catalog-hero catalog-hero--photo" id="catalog-hero">
          <img src="/images/banners/banner-products.jpg" alt="Sản phẩm màn hình Ondata — hiển thị mượt mà cho văn phòng, học tập và giải trí." />
        </div>

        <div class="catalog-layout">

          <!-- ===== LEFT SIDEBAR ===== -->
          <aside class="catalog-sidebar" id="catalog-sidebar">
            <div class="catsidebar-header">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              Danh mục sản phẩm
            </div>
            <ul class="catsidebar-menu">
              ${e.map(r=>`
                <li class="catsidebar-item">
                  <a href="/san-pham/${r.id}" class="catsidebar-link${r.id===t?" catsidebar-link--active":""}" id="cat-${r.id}" data-cat="${r.id}">
                    <span class="catsidebar-icon">${r.icon}</span>
                    <span>${r.label}</span>
                  </a>
                </li>
              `).join("")}
            </ul>
          </aside>

          <!-- ===== RIGHT CONTENT ===== -->
          <div class="catalog-content">

            <!-- TYPE FILTER TABS -->
            <div class="catalog-tabs" id="catalog-tabs" role="tablist">
              ${i.map((r,b)=>`
                <button class="catalog-tab${b===0?" catalog-tab--active":""}" id="tab-${b}" role="tab" data-tab="${b}">
                  ${r}
                </button>
              `).join("")}
            </div>

            <!-- FILTER TOGGLE + SORT ROW -->
            <div class="catalog-filter-row">
              <button class="catalog-filter-toggle catalog-filters--open" id="catalog-filter-toggle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                </svg>
                Bộ lọc
                <svg class="filter-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div class="catalog-sort">
                <span class="sort-label">Sắp xếp</span>
                <div class="sort-select-wrap">
                  <select class="sort-select" id="catalog-sort-select">
                    <option>Phổ biến</option>
                    <option>Mới nhất</option>
                    <option>Đánh giá cao</option>
                  </select>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- FILTER PANEL + PRODUCT AREA -->
            <div class="catalog-body" id="catalog-body">

              <!-- FILTER PANEL -->
              <div class="filter-backdrop" id="filter-backdrop"></div>
              <div class="catalog-filters" id="catalog-filters">
                <div class="filter-sheet-head">
                  <span class="filter-sheet-handle"></span>
                  <div class="filter-sheet-title-row">
                    <h3>Bộ lọc</h3>
                    <button type="button" class="filter-sheet-close" id="filter-sheet-close" aria-label="Đóng bộ lọc">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                  </div>
                </div>

                <div class="filter-group" id="fg-group-brand">
                  <div class="filter-group-title" data-group="brand">
                    Thương hiệu
                    <svg class="fg-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="18 15 12 9 6 15"/>
                    </svg>
                  </div>
                  <div class="filter-group-body" id="fg-brand">
                    ${s.map((r,b)=>`
                      <label class="filter-checkbox" id="filter-brand-${b}">
                        <input type="checkbox" name="brand" value="${r}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${r}</span>
                      </label>
                    `).join("")}
                  </div>
                </div>

                <div class="filter-group" id="fg-group-ram">
                  <div class="filter-group-title" data-group="ram">
                    RAM
                    <svg class="fg-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="18 15 12 9 6 15"/>
                    </svg>
                  </div>
                  <div class="filter-group-body" id="fg-ram">
                    ${a.map((r,b)=>`
                      <label class="filter-checkbox" id="filter-ram-${b}">
                        <input type="checkbox" name="ram" value="${r}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${r}</span>
                      </label>
                    `).join("")}
                  </div>
                </div>

                <div class="filter-group" id="fg-group-status">
                  <div class="filter-group-title" data-group="status">
                    Tình trạng
                    <svg class="fg-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="18 15 12 9 6 15"/>
                    </svg>
                  </div>
                  <div class="filter-group-body" id="fg-status">
                    ${h.map((r,b)=>`
                      <label class="filter-checkbox" id="filter-status-${b}">
                        <input type="checkbox" name="status" value="${r}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${r}</span>
                      </label>
                    `).join("")}
                  </div>
                </div>

                <div class="filter-sheet-actions">
                  <button class="filter-reset-btn" id="filter-reset-btn" type="button">Xóa bộ lọc</button>
                  <button class="filter-apply-btn" id="filter-apply-btn" type="button">Xem kết quả</button>
                </div>
              </div>

              <!-- PRODUCT GRID -->
              <div class="catalog-products-area" id="catalog-products-area">
                <div class="catalog-products-grid" id="catalog-products-grid">
                  ${u}
                </div>

                <!-- PAGINATION -->
                <div class="catalog-pagination" id="catalog-pagination">
                  <button class="page-btn page-btn--arrow" id="page-prev" disabled aria-label="Trang trước">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="15 18 9 12 15 6"/>
                    </svg>
                  </button>
                  <button class="page-btn page-btn--num page-btn--active" id="page-1" data-page="1">1</button>
                  <button class="page-btn page-btn--num" id="page-2" data-page="2">2</button>
                  <button class="page-btn page-btn--num" id="page-3" data-page="3">3</button>
                  <button class="page-btn page-btn--arrow" id="page-next" aria-label="Trang sau">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                </div>
              </div>

            </div><!-- end catalog-body -->

          </div><!-- end catalog-content -->

        </div><!-- end catalog-layout -->

      </div><!-- end catalog-container -->
    </section>
  `}function Ht(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>'}function Bt(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg>'}function Mt(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg>'}function Lt(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg>'}function Et(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg>'}function Dt(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'}function St(){var r,b,y;document.querySelectorAll(".catalog-tab").forEach(f=>{f.addEventListener("click",()=>{document.querySelectorAll(".catalog-tab").forEach(g=>g.classList.remove("catalog-tab--active")),f.classList.add("catalog-tab--active")})});const t=document.getElementById("catalog-filter-toggle"),n=document.getElementById("catalog-filters"),e=()=>{n&&(n.classList.remove("show-mobile"),document.body.classList.remove("filter-open"),t&&t.classList.remove("catalog-filters--open"))};t&&n&&t.addEventListener("click",()=>{if(window.matchMedia("(max-width: 860px)").matches){const g=!n.classList.contains("show-mobile");n.classList.toggle("show-mobile",g),document.body.classList.toggle("filter-open",g),t.classList.toggle("catalog-filters--open",g)}else n.classList.toggle("filters-hidden"),t.classList.toggle("catalog-filters--open")}),(r=document.getElementById("filter-sheet-close"))==null||r.addEventListener("click",()=>{window.matchMedia("(max-width: 860px)").matches?e():n&&(n.classList.add("filters-hidden"),t==null||t.classList.remove("catalog-filters--open"))}),(b=document.getElementById("filter-apply-btn"))==null||b.addEventListener("click",e),(y=document.getElementById("filter-backdrop"))==null||y.addEventListener("click",e),document.querySelectorAll(".filter-group-title").forEach(f=>{f.addEventListener("click",()=>{const g=f.getAttribute("data-group"),p=document.getElementById(`fg-${g}`);p&&(p.classList.toggle("fg-collapsed"),f.classList.toggle("fg-title-collapsed"))})});const i=document.getElementById("filter-reset-btn");i&&i.addEventListener("click",()=>{document.querySelectorAll('.catalog-filters input[type="checkbox"]').forEach(f=>{f.checked=!1})});let s=1;const a=document.querySelectorAll(".page-btn--num"),h=document.getElementById("page-prev"),c=document.getElementById("page-next");function u(f){s=f,a.forEach(g=>{g.classList.toggle("page-btn--active",parseInt(g.dataset.page)===s)}),h&&(h.disabled=s===1),c&&(c.disabled=s===a.length)}a.forEach(f=>f.addEventListener("click",()=>u(parseInt(f.dataset.page)))),h&&h.addEventListener("click",()=>{s>1&&u(s-1)}),c&&c.addEventListener("click",()=>{s<a.length&&u(s+1)}),document.querySelectorAll(".catalog-product-card[data-product-id]").forEach(f=>{f.addEventListener("click",()=>{const g=f.dataset.productId,p=f.dataset.productCat;g&&p&&(window.location.hash=`#/san-pham/${p}/${g}`)})})}function $t(t){const n={cpu:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>',ram:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="8" width="20" height="8" rx="1"/><path d="M6 8V6M10 8V6M14 8V6M18 8V6M6 16v2M10 16v2M14 16v2M18 16v2"/></svg>',hdd:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="12" rx="10" ry="6"/><path d="M2 12v4c0 3.31 4.48 6 10 6s10-2.69 10-6v-4"/><path d="M15 10h.01"/></svg>',monitor:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>',gpu:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 7V5M10 7V5M18 7V5M14 7V5M6 17v2M10 17v2M18 17v2M14 17v2"/></svg>',shield:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'};return n[t]||n.shield}function F(t){const n=Math.floor(t),e=t%1>=.4;let i="";for(let s=0;s<5;s++)s<n?i+='<svg class="star-icon star-full" width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>':s===n&&e?i+=`
        <svg class="star-icon star-half" width="16" height="16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stop-color="#f59e0b"/>
              <stop offset="50%" stop-color="#e5e7eb"/>
            </linearGradient>
          </defs>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half-star)"/>
        </svg>`:i+='<svg class="star-icon star-empty" width="16" height="16" viewBox="0 0 24 24" fill="#e5e7eb" stroke="#d1d5db"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';return i}function Z(t=0,n="Laptop Ondata Pro 15"){switch(t){case 0:return`
        <svg viewBox="0 0 540 380" xmlns="http://www.w3.org/2000/svg" class="pd-hero-svg">
          <defs>
            <!-- Screen wallpaper: Ondata elegant green wave -->
            <linearGradient id="wp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#07130a"/>
              <stop offset="35%" stop-color="#14341b"/>
              <stop offset="70%" stop-color="#2d6a36"/>
              <stop offset="100%" stop-color="#82b037"/>
            </linearGradient>
            <radialGradient id="screen-glare" cx="20%" cy="20%" r="80%">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.18"/>
              <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
            </radialGradient>
            <!-- Aluminum chassis gradients -->
            <linearGradient id="alu-lid" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="0%" stop-color="#e6ece8"/>
              <stop offset="100%" stop-color="#cfd8d2"/>
            </linearGradient>
            <linearGradient id="alu-base" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="0%" stop-color="#dfe6e1"/>
              <stop offset="40%" stop-color="#cad4ce"/>
              <stop offset="100%" stop-color="#b6c2ba"/>
            </linearGradient>
            <!-- Drop shadow -->
            <radialGradient id="desk-shadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#000000" stop-opacity="0.28"/>
              <stop offset="70%" stop-color="#000000" stop-opacity="0.08"/>
              <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
            </radialGradient>
          </defs>

          <!-- Ground shadow -->
          <ellipse cx="270" cy="354" rx="220" ry="14" fill="url(#desk-shadow)"/>

          <!-- 1. Screen Lid Backing -->
          <rect x="74" y="24" width="392" height="260" rx="14" fill="url(#alu-lid)" stroke="#9cb0a2" stroke-width="1.2"/>

          <!-- 2. Screen Bezel -->
          <rect x="83" y="33" width="374" height="242" rx="6" fill="#0d1410"/>

          <!-- Webcam dot & sensor -->
          <circle cx="270" cy="40" r="2.5" fill="#1b2e21"/>
          <circle cx="270" cy="40" r="1.2" fill="#58a065"/>
          <circle cx="282" cy="40" r="1" fill="#2b4733"/>

          <!-- 3. Screen Display Area -->
          <rect x="88" y="47" width="364" height="222" rx="2" fill="url(#wp-grad)"/>

          <!-- Wallpaper abstract silk waves -->
          <path d="M 88 200 Q 180 100 270 190 T 452 140 L 452 269 L 88 269 Z" fill="#204c27" opacity="0.6"/>
          <path d="M 88 170 Q 200 70 300 160 T 452 110 L 452 269 L 88 269 Z" fill="#2e6d37" opacity="0.5"/>
          <path d="M 88 220 Q 190 140 280 210 T 452 170 L 452 269 L 88 269 Z" fill="#498d4a" opacity="0.45"/>
          <path d="M 120 269 Q 220 180 340 240 T 452 210 L 452 269 Z" fill="#7ea835" opacity="0.55"/>
          <path d="M 180 269 Q 270 210 370 260 L 452 269 Z" fill="#a4d44b" opacity="0.4"/>

          <!-- Subtle Ondata brand watermark on screen -->
          <text x="270" y="165" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="800" font-size="28" fill="#ffffff" letter-spacing="8" opacity="0.42">ONDATA</text>

          <!-- Screen glare reflection -->
          <rect x="88" y="47" width="364" height="222" rx="2" fill="url(#screen-glare)"/>

          <!-- Bottom bezel logo -->
          <text x="270" y="272" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="7.5" fill="#697a6f" letter-spacing="2">ONDATA</text>

          <!-- 4. Hinge -->
          <rect x="180" y="282" width="180" height="7" rx="2" fill="#58675d"/>

          <!-- 5. Base Chassis / Keyboard deck -->
          <path d="M 38 335 L 74 286 L 466 286 L 502 335 Q 508 343 496 345 L 44 345 Q 32 343 38 335 Z" fill="url(#alu-base)" stroke="#a1b3a7" stroke-width="1.2"/>

          <!-- Chamfered front edge highlight -->
          <line x1="44" y1="344" x2="496" y2="344" stroke="#ffffff" stroke-width="1" opacity="0.8"/>
          <!-- Front lip notch for easy opening -->
          <rect x="245" y="342" width="50" height="3" rx="1.5" fill="#88988e"/>

          <!-- Keyboard well (perspective) -->
          <polygon points="106,292 434,292 448,328 92,328" fill="#243028" stroke="#3b4d40" stroke-width="0.8"/>
          <!-- Key grid lines suggestion -->
          <line x1="120" y1="300" x2="420" y2="300" stroke="#3d4e42" stroke-width="0.8"/>
          <line x1="114" y1="310" x2="426" y2="310" stroke="#3d4e42" stroke-width="0.8"/>
          <line x1="108" y1="320" x2="432" y2="320" stroke="#3d4e42" stroke-width="0.8"/>

          <!-- Trackpad -->
          <rect x="225" y="330" width="90" height="12" rx="2" fill="#bac5be" stroke="#8d9d92" stroke-width="0.8"/>
        </svg>`;case 1:return`
        <svg viewBox="0 0 540 380" xmlns="http://www.w3.org/2000/svg" class="pd-hero-svg">
          <defs>
            <radialGradient id="desk-shadow-ang" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#000000" stop-opacity="0.25"/>
              <stop offset="80%" stop-color="#000000" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="wp-grad-ang" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#0a1a0f"/>
              <stop offset="50%" stop-color="#24592d"/>
              <stop offset="100%" stop-color="#7ea835"/>
            </linearGradient>
          </defs>
          <ellipse cx="270" cy="345" rx="220" ry="16" fill="url(#desk-shadow-ang)"/>
          
          <!-- Angled screen lid -->
          <polygon points="120,40 380,20 440,240 180,270" fill="#d4ddd6" stroke="#9bb0a2" stroke-width="1.2"/>
          <polygon points="132,48 372,30 428,232 188,258" fill="#0d1410"/>
          <polygon points="140,56 364,38 418,224 196,248" fill="url(#wp-grad-ang)"/>
          <text x="290" y="150" font-family="'Outfit',sans-serif" font-weight="800" font-size="22" fill="#fff" opacity="0.4" transform="rotate(-4 290 150)">ONDATA PRO</text>

          <!-- Base perspective -->
          <polygon points="180,270 440,240 500,290 210,340" fill="#c3cdc5" stroke="#90a296" stroke-width="1.2"/>
          <polygon points="70,320 210,340 500,290 380,265" fill="#e2eae4" stroke="#a0b3a7" stroke-width="1.2"/>
          
          <!-- Keyboard deck angle -->
          <polygon points="190,278 410,252 460,285 240,318" fill="#222d26"/>
          <!-- Trackpad -->
          <polygon points="160,322 230,328 220,336 150,330" fill="#cbd5ce" stroke="#899a8f"/>
        </svg>`;case 2:return`
        <svg viewBox="0 0 540 380" xmlns="http://www.w3.org/2000/svg" class="pd-hero-svg">
          <defs>
            <radialGradient id="desk-shadow-top" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#000000" stop-opacity="0.22"/>
              <stop offset="80%" stop-color="#000000" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="lid-brushed" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#eaf0eb"/>
              <stop offset="45%" stop-color="#d6e0d9"/>
              <stop offset="55%" stop-color="#ced8d1"/>
              <stop offset="100%" stop-color="#bcc8bf"/>
            </linearGradient>
          </defs>
          <ellipse cx="270" cy="330" rx="200" ry="14" fill="url(#desk-shadow-top)"/>

          <!-- Laptop Lid -->
          <rect x="90" y="55" width="360" height="250" rx="14" fill="url(#lid-brushed)" stroke="#9cb0a2" stroke-width="1.5"/>
          <!-- Brushed metal highlights -->
          <line x1="90" y1="80" x2="450" y2="80" stroke="#ffffff" stroke-width="1" opacity="0.4"/>
          <line x1="90" y1="280" x2="450" y2="280" stroke="#000000" stroke-width="0.8" opacity="0.1"/>

          <!-- Centered Premium Ondata Metallic Emblem -->
          <circle cx="270" cy="180" r="38" fill="#c4d0c7" stroke="#7ea835" stroke-width="1.8"/>
          <text x="270" y="186" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="14" fill="#527d24" letter-spacing="4">ONDATA</text>
        </svg>`;case 3:return`
        <svg viewBox="0 0 540 380" xmlns="http://www.w3.org/2000/svg" class="pd-hero-svg">
          <defs>
            <radialGradient id="shadow-side" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#000000" stop-opacity="0.2"/>
              <stop offset="80%" stop-color="#000000" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <ellipse cx="270" cy="265" rx="230" ry="12" fill="url(#shadow-side)"/>

          <!-- Open side profile triangle/wedge -->
          <!-- Screen side -->
          <polygon points="120,70 128,70 210,240 202,240" fill="#aab8ae" stroke="#89998e" stroke-width="1"/>
          <!-- Display glare line -->
          <line x1="128" y1="74" x2="204" y2="236" stroke="#7ea835" stroke-width="2.5"/>

          <!-- Base body side -->
          <polygon points="195,240 450,244 470,256 190,256" fill="#cad5cd" stroke="#8e9e93" stroke-width="1.2"/>
          
          <!-- Ports cutout -->
          <!-- USB-C -->
          <rect x="230" y="247" width="16" height="5" rx="2" fill="#2d3731"/>
          <!-- USB-C #2 -->
          <rect x="255" y="247" width="16" height="5" rx="2" fill="#2d3731"/>
          <!-- Audio 3.5mm jack -->
          <circle cx="290" cy="249.5" r="3.2" fill="#2d3731"/>
          <!-- LED power indicator -->
          <circle cx="310" cy="249.5" r="2" fill="#7ea835"/>

          <text x="270" y="310" text-anchor="middle" font-family="'Outfit',sans-serif" font-weight="600" font-size="13" fill="#64748b">Thiết kế mỏng nhẹ 17.9 mm – Đầy đủ cổng kết nối Thunderbolt 4 & USB-C</text>
        </svg>`;case 4:return`
        <svg viewBox="0 0 540 380" xmlns="http://www.w3.org/2000/svg" class="pd-hero-svg">
          <defs>
            <linearGradient id="kb-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1e2821"/>
              <stop offset="100%" stop-color="#141c16"/>
            </linearGradient>
          </defs>
          <!-- Surface -->
          <rect x="50" y="40" width="440" height="300" rx="12" fill="#dbe3dd" stroke="#a3b4a8" stroke-width="1.5"/>

          <!-- Keyboard Well -->
          <rect x="80" y="60" width="380" height="180" rx="6" fill="#202922" stroke="#37453a" stroke-width="1"/>

          <!-- Keys rows representation -->
          ${[0,1,2,3,4].map(e=>`
            <g transform="translate(90, ${70+e*32})">
              ${[0,1,2,3,4,5,6,7,8,9,10,11].map(i=>`
                <rect x="${i*30}" y="0" width="26" height="24" rx="3.5" fill="url(#kb-grad)" stroke="#3f5244" stroke-width="0.8"/>
              `).join("")}
            </g>
          `).join("")}

          <!-- Large trackpad -->
          <rect x="180" y="255" width="180" height="72" rx="6" fill="#c7d2cb" stroke="#8d9d93" stroke-width="1.2"/>
          <text x="270" y="295" text-anchor="middle" font-family="'Outfit',sans-serif" font-size="11" fill="#78887e" font-weight="600">Precision Touchpad</text>
        </svg>`;default:return""}}function It(t){return String(t??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function J(t,n,e){return`<img class="${e}" src="${t}" alt="${It(n)}" />`}function it(t,n=!1,e=null){var s;if((s=e==null?void 0:e.images)!=null&&s.length){const a=`Ảnh ${t+1}`;return`
      <button class="pd-thumb-btn pd-thumb-btn--photo${n?" pd-thumb-btn--active":""}" data-thumb="${t}" aria-label="${a}">
        <div class="pd-thumb-mini-preview">
          ${J(e.images[t],e.name,"pd-thumb-photo")}
        </div>
        <span class="pd-thumb-caption">${a}</span>
      </button>
    `}const i=["Chính diện","Góc nghiêng","Mặt lưng","Cạnh bên","Bàn phím"];return`
    <button class="pd-thumb-btn${n?" pd-thumb-btn--active":""}" data-thumb="${t}" aria-label="${i[t]}">
      <div class="pd-thumb-mini-preview">
        ${Z(t)}
      </div>
      <span class="pd-thumb-caption">${i[t]}</span>
    </button>
  `}function Ot(t){if(!t)return`
      <section class="pd-page">
        <div class="pd-container">
          <div class="pd-not-found">
            <h2>Sản phẩm không tồn tại</h2>
            <p>Vui lòng kiểm tra lại đường dẫn hoặc quay lại danh mục sản phẩm.</p>
            <a href="/san-pham/all" class="pd-btn-back">← Quay lại danh mục</a>
          </div>
        </div>
      </section>
    `;et(t.price),t.oldPrice&&et(t.oldPrice),t.discount||t.oldPrice&&Math.round((1-t.price/t.oldPrice)*100);const n=(t.specs||[]).map(c=>`
    <li class="pd-spec-item">
      <span class="pd-spec-icon">${$t(c.icon)}</span>
      <span class="pd-spec-label">${c.label}:</span>
      <span class="pd-spec-val">${c.value}</span>
    </li>
  `).join(""),e=Object.entries(t.techSpecs||{}).map(([c,u])=>`
    <tr class="pd-ts-row">
      <td class="pd-ts-key">${c}</td>
      <td class="pd-ts-val">${u}</td>
    </tr>
  `).join(""),i=(t.features||[]).map(c=>`
    <li class="pd-feature-item">
      <span class="pd-check-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
      <span class="pd-feature-text">${c}</span>
    </li>
  `).join(""),s=Array.isArray(t.images)&&t.images.length>0,a=s?t.images.map((c,u)=>it(u,u===0,t)).join(""):[0,1,2,3,4].map(c=>it(c,c===0)).join(""),h=s?J(t.images[0],t.name,"pd-hero-photo"):Z(0,t.name);return`
    <section class="pd-page" id="pd-page">
      <div class="pd-container">

        <!-- 1. BREADCRUMB -->
        <nav class="catalog-breadcrumb pd-breadcrumb" aria-label="Breadcrumb">
          <a href="/" class="crumb-link" id="pd-crumb-home">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/san-pham/${t.cat}" class="crumb-link" id="pd-crumb-cat">Sản phẩm</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">${t.name}</span>
        </nav>

        <!-- 2. MAIN PRODUCT CARD: GALLERY + INFO -->
        <div class="pd-card">
          <div class="pd-layout-grid">

            <!-- LEFT: GALLERY -->
            <div class="pd-gallery-col">
              <div class="pd-hero-preview-box" id="pd-hero-preview-box">
                <div class="pd-hero-art" id="pd-hero-art">
                  ${h}
                </div>
              </div>

              <!-- Thumbnails carousel row -->
              <div class="pd-thumbs-bar" id="pd-thumbs-bar">
                ${a}
              </div>
            </div>

            <!-- RIGHT: INFO & ACTIONS -->
            <div class="pd-info-col">
              <h1 class="pd-title" id="pd-title">${t.name}</h1>

              <!-- Rating row -->
              <div class="pd-rating-row">
                <div class="pd-stars-wrap">
                  ${F(t.stars||4.5)}
                </div>
                <span class="pd-rating-count">(${t.reviews??24} đánh giá)</span>
                ${t.badge?`<span class="pd-top-badge">${t.badge}</span>`:""}
              </div>

              <!-- Price section: Liên hệ -->
              <div class="pd-pricing-box">
                <span class="pd-price" id="pd-price">Liên hệ</span>
              </div>

              <!-- Key Specs List with Grey Icons -->
              <ul class="pd-specs-list">
                ${n}
              </ul>

              <!-- Actions: Liên hệ báo giá & Hotline (k bán lẻ) -->
              <div class="pd-actions-group">
                <a href="/lien-he" class="pd-btn-quote" id="pd-btn-quote">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Liên hệ báo giá</span>
                </a>

                <a href="tel:0867036698" class="pd-btn-hotline" id="pd-btn-hotline">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Hotline: 0867036698</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        <!-- 3. TRUST / SERVICE BADGES BAR (3 Columns) -->
        <div class="pd-trust-bar">
          <div class="pd-trust-item">
            <div class="pd-trust-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="1.8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <div class="pd-trust-text">
              <h4 class="pd-trust-title">Miễn phí giao hàng toàn quốc</h4>
              <p class="pd-trust-sub">Cho đơn hàng từ 1.000.000đ</p>
            </div>
          </div>

          <div class="pd-trust-item">
            <div class="pd-trust-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="1.8">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="pd-trust-text">
              <h4 class="pd-trust-title">Hỗ trợ kỹ thuật</h4>
              <p class="pd-trust-sub">Tư vấn miễn phí trong giờ làm việc</p>
            </div>
          </div>

          <div class="pd-trust-item">
            <div class="pd-trust-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="1.8">
                <path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/>
                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
                <polyline points="9 8 11 10 15 6"/>
              </svg>
            </div>
            <div class="pd-trust-text">
              <h4 class="pd-trust-title">Bảo hành chính hãng 24 tháng</h4>
              <p class="pd-trust-sub">Đổi mới trong 7 ngày</p>
            </div>
          </div>
        </div>

        <!-- 4. PRODUCT TABS (Chi tiết / Thông số / Đánh giá) -->
        <div class="pd-tabs-section">
          <!-- Tab headers -->
          <div class="pd-tabs-nav" role="tablist">
            <button class="pd-tab-btn pd-tab-btn--active" id="pd-tab-desc" data-tab="desc" role="tab" aria-selected="true">
              Thông tin chi tiết
            </button>
            <button class="pd-tab-btn" id="pd-tab-tech" data-tab="tech" role="tab" aria-selected="false">
              Thông số kỹ thuật
            </button>
            <button class="pd-tab-btn" id="pd-tab-reviews" data-tab="reviews" role="tab" aria-selected="false">
              Đánh giá (${t.reviews??24})
            </button>
          </div>

          <!-- Tab Content Container -->
          <div class="pd-tab-card">

            <!-- Tab 1: Description -->
            <div class="pd-panel" id="pd-panel-desc" role="tabpanel">
              <p class="pd-lead-desc">${t.desc}</p>
              ${t.detailHtml?`
                <div class="pd-article">${t.detailHtml}</div>
              `:`
                <ul class="pd-features-list">
                  ${i}
                </ul>
                <div class="pd-editorial-block">
                  <h3 class="pd-editorial-title">Đặc điểm nổi bật của ${t.name}</h3>
                  <p>Được hoàn thiện với tiêu chuẩn khắt khe, ${t.name} đem lại sự cân bằng hoàn hảo giữa hiệu suất làm việc ấn tượng, độ bền chuẩn doanh nghiệp và khả năng tản nhiệt tối ưu cho người dùng Việt Nam.</p>
                </div>
              `}
            </div>

            <!-- Tab 2: Tech Specs -->
            <div class="pd-panel pd-panel--hidden" id="pd-panel-tech" role="tabpanel">
              <table class="pd-tech-table">
                <tbody>
                  ${e}
                </tbody>
              </table>
            </div>

            <!-- Tab 3: Reviews -->
            <div class="pd-panel pd-panel--hidden" id="pd-panel-reviews" role="tabpanel">
              <div class="pd-reviews-summary">
                <div class="pd-score-box">
                  <div class="pd-big-score">${t.stars||4.5}</div>
                  <div class="pd-stars-wrap">${F(t.stars||4.5)}</div>
                  <span class="pd-score-sub">${t.reviews??24} đánh giá từ khách hàng</span>
                </div>

                <div class="pd-breakdown-box">
                  <div class="pd-bar-row">
                    <span>5 sao</span>
                    <div class="pd-bar-track"><div class="pd-bar-fill" style="width: 80%"></div></div>
                    <span>80%</span>
                  </div>
                  <div class="pd-bar-row">
                    <span>4 sao</span>
                    <div class="pd-bar-track"><div class="pd-bar-fill" style="width: 15%"></div></div>
                    <span>15%</span>
                  </div>
                  <div class="pd-bar-row">
                    <span>3 sao</span>
                    <div class="pd-bar-track"><div class="pd-bar-fill" style="width: 5%"></div></div>
                    <span>5%</span>
                  </div>
                  <div class="pd-bar-row">
                    <span>2 sao</span>
                    <div class="pd-bar-track"><div class="pd-bar-fill" style="width: 0%"></div></div>
                    <span>0%</span>
                  </div>
                  <div class="pd-bar-row">
                    <span>1 sao</span>
                    <div class="pd-bar-track"><div class="pd-bar-fill" style="width: 0%"></div></div>
                    <span>0%</span>
                  </div>
                </div>
              </div>

              <!-- Sample Reviews List -->
              <div class="pd-reviews-list">
                <div class="pd-review-card">
                  <div class="pd-review-header">
                    <div class="pd-user-avatar">NL</div>
                    <div>
                      <strong class="pd-user-name">Nguyễn Văn Long</strong>
                      <div class="pd-user-meta">
                        <span class="pd-verified">✓ Đã mua hàng tại Ondata</span>
                        <span class="pd-date">• 2 tuần trước</span>
                      </div>
                    </div>
                  </div>
                  <div class="pd-stars-wrap">${F(5)}</div>
                  <p class="pd-review-comment">Máy chạy rất êm và mát, mở chục tab Chrome và code visual studio không hề bị giật lag. Màn hình màu sắc đẹp, pin dùng được tầm 8 tiếng văn phòng. Đáng giá từng đồng!</p>
                </div>

                <div class="pd-review-card">
                  <div class="pd-review-header">
                    <div class="pd-user-avatar" style="background:#527d24;">TH</div>
                    <div>
                      <strong class="pd-user-name">Trần Minh Hoàng</strong>
                      <div class="pd-user-meta">
                        <span class="pd-verified">✓ Đã mua hàng tại Ondata</span>
                        <span class="pd-date">• 1 tháng trước</span>
                      </div>
                    </div>
                  </div>
                  <div class="pd-stars-wrap">${F(5)}</div>
                  <p class="pd-review-comment">Giao hàng cực kỳ nhanh, đóng gói cẩn thận có xốp chống sốc dày. Máy nhẹ hơn tưởng tượng, bàn phím gõ nảy và êm tay. Nhân viên tư vấn kỹ càng.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `}function Nt(t,n){var y,f;if(!t)return;const e=document.querySelectorAll(".pd-thumb-btn"),i=document.getElementById("pd-hero-art");e.forEach(g=>{g.addEventListener("click",()=>{const p=parseInt(g.dataset.thumb,10);e.forEach(m=>m.classList.remove("pd-thumb-btn--active")),g.classList.add("pd-thumb-btn--active"),i&&(i.style.opacity="0",i.style.transform="scale(0.96)",setTimeout(()=>{var m;i.innerHTML=(m=t.images)!=null&&m[p]?J(t.images[p],t.name,"pd-hero-photo"):Z(p,t.name),i.style.opacity="1",i.style.transform="scale(1)"},160))})});const s=document.getElementById("pd-qty-input"),a=document.getElementById("pd-qty-minus"),h=document.getElementById("pd-qty-plus");s&&a&&h&&(a.addEventListener("click",()=>{let g=parseInt(s.value,10)||1;g>1&&(s.value=g-1)}),h.addEventListener("click",()=>{let g=parseInt(s.value,10)||1;g<99&&(s.value=g+1)}),s.addEventListener("change",()=>{let g=parseInt(s.value,10)||1;g<1&&(g=1),g>99&&(g=99),s.value=g}));const c=document.getElementById("pd-btn-cart");c&&c.addEventListener("click",()=>{parseInt(s==null?void 0:s.value,10);const g=c.innerHTML;c.classList.add("pd-btn-cart--added"),c.innerHTML=`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>Đã thêm vào giỏ!</span>
      `,setTimeout(()=>{c.classList.remove("pd-btn-cart--added"),c.innerHTML=g},2e3)});const u=document.getElementById("pd-btn-buy");u&&u.addEventListener("click",()=>{parseInt(s==null?void 0:s.value,10)});const r=document.querySelectorAll(".pd-tab-btn"),b=document.querySelectorAll(".pd-panel");r.forEach(g=>{g.addEventListener("click",()=>{r.forEach(m=>{m.classList.remove("pd-tab-btn--active"),m.setAttribute("aria-selected","false")}),g.classList.add("pd-tab-btn--active"),g.setAttribute("aria-selected","true");const p=g.dataset.tab;b.forEach(m=>{const k=m.id===`pd-panel-${p}`;m.classList.toggle("pd-panel--hidden",!k)})})}),(y=document.getElementById("pd-crumb-home"))==null||y.addEventListener("click",g=>{g.preventDefault(),window.location.hash="#/"}),(f=document.getElementById("pd-crumb-cat"))==null||f.addEventListener("click",g=>{g.preventDefault(),window.location.hash=`#/san-pham/${t.cat}`})}const Vt=[{id:"all",label:"Tất cả"},{id:"buying-guide",label:"Tư vấn chọn mua"},{id:"tips",label:"Hướng dẫn sử dụng"},{id:"trends",label:"Xu hướng công nghệ"}],W=[{id:"chon-laptop-sinh-vien",featured:!0,category:"buying-guide",categoryLabel:"Tư vấn chọn mua",title:"Cách chọn laptop phù hợp cho sinh viên",date:"08/10/2025",readTime:"5 phút đọc",summary:"Tổng hợp kinh nghiệm chọn mua laptop tối ưu theo ngành học: Kinh tế, CNTT, Thiết kế đồ họa và Y dược với mức ngân sách hợp lý nhất.",content:`
      <p>Bước vào giảng đường đại học, một chiếc laptop phù hợp là người bạn đồng hành không thể thiếu. Tùy thuộc vào ngành học và nhu cầu sử dụng thực tế, sinh viên cần cân nhắc các yếu tố then chốt như CPU, RAM, thời lượng pin và trọng lượng máy.</p>
      <h3>1. Xác định nhu cầu theo chuyên ngành</h3>
      <p>• <strong>Khối Kinh tế, Xã hội, Ngôn ngữ:</strong> Ưu tiên laptop mỏng nhẹ dưới 1.5kg, pin từ 8-10 tiếng, cấu hình Core i3/i5 hoặc Ryzen 5, RAM 8GB - 16GB để phục vụ soạn thảo văn bản, làm slide và thuyết trình.</p>
      <p>• <strong>Khối Công nghệ thông tin, Lập trình:</strong> Cần chip đa nhân hiệu năng cao (Core i5/i7 thế hệ 12 trở lên), RAM tối thiểu 16GB, ổ cứng SSD NVMe tốc độ cao để chạy máy ảo, Docker và biên dịch code mượt mà.</p>
      <p>• <strong>Khối Thiết kế đồ họa, Kiến trúc:</strong> Đòi hỏi màn hình chuẩn màu 100% sRGB, độ phân giải cao và card đồ họa rời chuyên dụng (RTX 3050 trở lên).</p>
      <h3>2. Tầm ngân sách tham khảo</h3>
      <p>Mức giá từ 12 - 18 triệu đồng hiện nay đã có thể sở hữu các dòng máy Ondata Pro với cấu hình mạnh mẽ, bảo hành chính hãng 24 tháng và thiết kế kim loại sang trọng.</p>
    `},{id:"meo-tang-tuoi-tho-pin-laptop",featured:!1,category:"tips",categoryLabel:"Hướng dẫn sử dụng",title:"5 mẹo tăng tuổi thọ pin laptop",date:"06/10/2025",readTime:"4 phút đọc",summary:"Những thói quen sử dụng đơn giản nhưng giúp kéo dài độ bền pin Lithium-ion trên laptop thêm từ 2 - 3 năm.",content:`
      <p>Pin laptop bị chai nhanh là nỗi lo của hầu hết người dùng. Áp dụng ngay 5 nguyên tắc vàng dưới đây:</p>
      <p>1. <strong>Bật chế độ giới hạn sạc (Battery Care):</strong> Giới hạn mức sạc tối đa ở ngưỡng 80% khi cắm sạc liên tục tại bàn làm việc.</p>
      <p>2. <strong>Tránh để pin cạn kiệt về 0%:</strong> Nên cắm sạc khi pin còn khoảng 15 - 20% để bảo toàn chu kỳ sạc.</p>
      <p>3. <strong>Giữ máy luôn mát mẻ:</strong> Nhiệt độ cao là kẻ thù số 1 của pin. Hãy sử dụng giá đỡ tản nhiệt hoặc kê cao đuôi máy khi làm tác vụ nặng.</p>
      <p>4. <strong>Điều chỉnh độ sáng màn hình hợp lý:</strong> Màn hình tiêu thụ tới 40% điện năng của máy.</p>
      <p>5. <strong>Cập nhật Driver và BIOS định kỳ:</strong> Giúp tối ưu hóa việc quản lý điện áp của hệ thống.</p>
    `},{id:"xu-huong-man-hinh-2025",featured:!1,category:"trends",categoryLabel:"Xu hướng công nghệ",title:"Xu hướng màn hình 2025 – Những điều cần biết",date:"05/10/2025",readTime:"6 phút đọc",summary:"Công nghệ màn hình cong 1500R, tấm nền OLED tần số quét 240Hz và tỷ lệ 16:10 đang dần định hình tiêu chuẩn làm việc và giải trí mới.",content:`
      <p>Năm 2025 đánh dấu bước chuyển mình mạnh mẽ trong ngành sản xuất tấm nền màn hình:</p>
      <p>• <strong>Tần số quét cao trở thành tiêu chuẩn:</strong> Mức 165Hz - 240Hz không còn độc quyền cho giới game thủ mà đã phủ sóng tới các dòng màn hình văn phòng cao cấp, mang lại trải nghiệm cuộn trang và làm việc mượt mà vượt bậc.</p>
      <p>• <strong>Độ cong 1500R ôm trọn góc nhìn:</strong> Giúp mắt điều tiết tự nhiên hơn khi nhìn từ tâm sang các góc mép màn hình, giảm mỏi mắt khi làm việc nhiều giờ liền.</p>
      <p>• <strong>Kết nối Type-C All-in-One:</strong> Một cáp duy nhất vừa truyền hình ảnh 4K, truyền dữ liệu vừa sạc ngược 65W - 90W cho laptop.</p>
    `},{id:"so-sanh-ram-ddr4-va-ddr5",featured:!1,category:"buying-guide",categoryLabel:"Tư vấn chọn mua",title:"So sánh RAM DDR4 và DDR5: Nên chọn loại nào?",date:"01/10/2025",readTime:"4 phút đọc",summary:"Phân tích chi tiết về tốc độ băng thông, điện năng tiêu thụ và chi phí đầu tư giữa chuẩn DDR4 phổ thông và thế hệ DDR5 tiên tiến.",content:`
      <p>Khi build PC hoặc nâng cấp laptop, người dùng thường băn khoăn liệu DDR5 đã thực sự cần thiết hay DDR4 vẫn còn đủ dùng:</p>
      <p>• <strong>Băng thông và tốc độ:</strong> DDR5 khởi điểm ở mức 4800MHz - 6400MHz, gần gấp đôi so với chuẩn DDR4 3200MHz, giúp giải quyết các tác vụ render video 4K và nạp texture game nhanh hơn đáng kể.</p>
      <p>• <strong>Mức giá và độ tương thích:</strong> Hiện nay giá RAM DDR5 đã hạ nhiệt rất nhiều và tiệm cận với DDR4, khiến đây trở thành sự lựa chọn đầu tư dài hạn thông minh cho các dàn máy mới thế hệ 13 và 14.</p>
    `}];function st(t,n=!1){if(n)return`
      <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" class="news-art-svg" style="width:100%;height:100%;object-fit:cover;display:block;">
        <defs>
          <!-- Room background -->
          <linearGradient id="desk-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#f5f7f6"/>
            <stop offset="60%" stop-color="#e8ede9"/>
            <stop offset="100%" stop-color="#cbd6ce"/>
          </linearGradient>
          <!-- Wooden table top -->
          <linearGradient id="table-wood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#dfaf7c"/>
            <stop offset="30%" stop-color="#d49e68"/>
            <stop offset="70%" stop-color="#e3b687"/>
            <stop offset="100%" stop-color="#cf975f"/>
          </linearGradient>
          <!-- Laptop screen glow -->
          <linearGradient id="scr-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f2615"/>
            <stop offset="40%" stop-color="#1f4b2a"/>
            <stop offset="80%" stop-color="#3c7a3f"/>
            <stop offset="100%" stop-color="#7ea835"/>
          </linearGradient>
        </defs>

        <!-- Background wall with soft bokeh window light -->
        <rect width="900" height="270" fill="url(#desk-bg)"/>
        <circle cx="200" cy="120" r="140" fill="#ffffff" opacity="0.35"/>
        <circle cx="750" cy="90" r="110" fill="#ffffff" opacity="0.25"/>

        <!-- Desk table surface -->
        <polygon points="0,270 900,270 900,420 0,420" fill="url(#table-wood)"/>
        <!-- Desk edge bevel highlight -->
        <line x1="0" y1="271" x2="900" y2="271" stroke="#ffebc9" stroke-width="2.5" opacity="0.8"/>

        <!-- LEFT: Potted Green Succulent Plant -->
        <ellipse cx="200" cy="275" rx="36" ry="9" fill="#000000" opacity="0.18"/>
        <!-- White ceramic pot -->
        <polygon points="172,220 228,220 222,274 178,274" fill="#ffffff" stroke="#d5ddd7" stroke-width="1.5"/>
        <ellipse cx="200" cy="220" rx="28" ry="7" fill="#6d5444"/>
        <!-- Leaves -->
        <path d="M 200 220 Q 185 170 170 150 Q 190 175 200 220" fill="#3c733f"/>
        <path d="M 200 220 Q 200 155 202 135 Q 208 165 200 220" fill="#528e4e"/>
        <path d="M 200 220 Q 215 170 230 155 Q 215 178 200 220" fill="#366b39"/>
        <path d="M 200 220 Q 165 195 150 185 Q 175 205 200 220" fill="#67a957"/>
        <path d="M 200 220 Q 235 195 248 185 Q 225 205 200 220" fill="#67a957"/>

        <!-- Small second pot / cactus -->
        <ellipse cx="280" cy="272" rx="22" ry="6" fill="#000000" opacity="0.14"/>
        <polygon points="262,238 298,238 294,272 266,272" fill="#ffffff" stroke="#d5ddd7" stroke-width="1.2"/>
        <ellipse cx="280" cy="238" rx="18" ry="4.5" fill="#6d5444"/>
        <ellipse cx="280" cy="216" rx="14" ry="24" fill="#4d8b4b"/>

        <!-- RIGHT: Ceramic pen holder with brushes & pencils -->
        <ellipse cx="760" cy="278" rx="38" ry="9" fill="#000000" opacity="0.16"/>
        <polygon points="730,205 790,205 784,276 736,276" fill="#ffffff" stroke="#d5ddd7" stroke-width="1.5"/>
        <ellipse cx="760" cy="205" rx="30" ry="7" fill="#4d5450"/>
        <!-- Pencils sticking out -->
        <line x1="745" y1="205" x2="725" y2="135" stroke="#e09132" stroke-width="5" stroke-linecap="round"/>
        <line x1="760" y1="205" x2="755" y2="120" stroke="#327ce0" stroke-width="4.5" stroke-linecap="round"/>
        <line x1="772" y1="205" x2="785" y2="130" stroke="#527d24" stroke-width="5" stroke-linecap="round"/>
        <line x1="782" y1="205" x2="805" y2="148" stroke="#d64545" stroke-width="4" stroke-linecap="round"/>

        <!-- Coffee mug / water flask -->
        <ellipse cx="630" cy="272" rx="20" ry="6" fill="#000000" opacity="0.14"/>
        <rect x="614" y="165" width="32" height="106" rx="10" fill="#ffffff" stroke="#cad5cd" stroke-width="1.2"/>
        <rect x="622" y="152" width="16" height="14" rx="3" fill="#9ca89f"/>

        <!-- CENTER: LAPTOP ON DESK (Main Focus) -->
        <!-- Shadow -->
        <ellipse cx="480" cy="318" rx="190" ry="14" fill="#000000" opacity="0.25"/>

        <!-- Open Screen Lid -->
        <rect x="315" y="132" width="330" height="210" rx="10" fill="#2d3830" stroke="#9bb1a1" stroke-width="1.5"/>
        <!-- Inner screen bezel -->
        <rect x="323" y="140" width="314" height="194" rx="5" fill="#0b120c"/>
        <!-- Screen display area -->
        <rect x="328" y="145" width="304" height="184" rx="2" fill="url(#scr-glow)"/>
        <!-- Abstract wave on screen -->
        <path d="M 328 260 Q 400 180 480 240 T 632 200 L 632 329 L 328 329 Z" fill="#2e6d37" opacity="0.6"/>
        <path d="M 328 290 Q 420 220 520 270 T 632 240 L 632 329 L 328 329 Z" fill="#7ea835" opacity="0.5"/>
        <text x="480" y="235" text-anchor="middle" font-family="'Outfit',sans-serif" font-weight="800" font-size="20" fill="#ffffff" letter-spacing="4" opacity="0.6">ONDATA</text>

        <!-- Base / Keyboard Deck -->
        <polygon points="275,340 315,302 645,302 685,340" fill="#cfd9d2" stroke="#9bb1a1" stroke-width="1.2"/>
        <polygon points="325,306 635,306 648,333 312,333" fill="#232d26"/>
        <rect x="440" y="334" width="80" height="6" rx="2" fill="#bac8bf"/>
      </svg>
    `;switch(t){case"meo-tang-tuoi-tho-pin-laptop":return`
        <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" class="news-art-svg" style="width:100%;height:100%;object-fit:cover;display:block;">
          <defs>
            <linearGradient id="n-bg-1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#111c14"/>
              <stop offset="100%" stop-color="#1f3823"/>
            </linearGradient>
          </defs>
          <rect width="240" height="150" fill="url(#n-bg-1)"/>
          <!-- Laptop silhouette -->
          <rect x="50" y="30" width="140" height="85" rx="5" fill="#0d140e" stroke="#334d38" stroke-width="1.5"/>
          <rect x="55" y="35" width="130" height="74" rx="2" fill="#050a06"/>
          <polygon points="35,115 50,105 190,105 205,115" fill="#2c3e30"/>
          <!-- Glowing Battery Icon in center of screen -->
          <rect x="95" y="55" width="46" height="24" rx="4" fill="none" stroke="#7ea835" stroke-width="2.2"/>
          <rect x="142" y="62" width="4" height="10" rx="1.5" fill="#7ea835"/>
          <rect x="99" y="59" width="28" height="16" rx="2" fill="#7ea835" opacity="0.85"/>
          <!-- Lightning bolt inside battery -->
          <polygon points="114,61 108,68 113,68 110,75 118,67 113,67" fill="#ffffff"/>
        </svg>
      `;case"xu-huong-man-hinh-2025":return`
        <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" class="news-art-svg" style="width:100%;height:100%;object-fit:cover;display:block;">
          <defs>
            <linearGradient id="n-bg-2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#0c1624"/>
              <stop offset="100%" stop-color="#182e44"/>
            </linearGradient>
            <linearGradient id="curved-scr" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#1e3a5f"/>
              <stop offset="50%" stop-color="#38bdf8"/>
              <stop offset="100%" stop-color="#527d24"/>
            </linearGradient>
          </defs>
          <rect width="240" height="150" fill="url(#n-bg-2)"/>
          <!-- Curved monitor screen -->
          <path d="M 40 40 Q 120 28 200 40 L 200 100 Q 120 88 40 100 Z" fill="url(#curved-scr)" stroke="#475569" stroke-width="1.5"/>
          <!-- Monitor stand -->
          <polygon points="112,100 128,100 125,124 115,124" fill="#64748b"/>
          <ellipse cx="120" cy="126" rx="35" ry="6" fill="#334155"/>
          <text x="120" y="68" text-anchor="middle" font-family="'Outfit',sans-serif" font-size="11" font-weight="800" fill="#ffffff" letter-spacing="2">240Hz OLED</text>
        </svg>
      `;case"so-sanh-ram-ddr4-va-ddr5":return`
        <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" class="news-art-svg" style="width:100%;height:100%;object-fit:cover;display:block;">
          <defs>
            <linearGradient id="n-bg-3" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#101820"/>
              <stop offset="100%" stop-color="#1a2e22"/>
            </linearGradient>
          </defs>
          <rect width="240" height="150" fill="url(#n-bg-3)"/>
          <!-- Dual RAM sticks in perspective -->
          <!-- Stick 1: DDR5 -->
          <rect x="40" y="40" width="160" height="30" rx="3" fill="#18241b" stroke="#7ea835" stroke-width="1.5"/>
          <line x1="45" y1="67" x2="195" y2="67" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="52" y="58" font-family="'Outfit',sans-serif" font-size="10" font-weight="800" fill="#7ea835">DDR5 6400MHz</text>
          
          <!-- Stick 2: DDR4 -->
          <rect x="40" y="82" width="160" height="30" rx="3" fill="#1b2028" stroke="#64748b" stroke-width="1.2"/>
          <line x1="45" y1="109" x2="195" y2="109" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="52" y="100" font-family="'Outfit',sans-serif" font-size="10" font-weight="700" fill="#94a3b8">DDR4 3200MHz</text>
        </svg>
      `;default:return""}}function qt(t="all"){const n=W.find(c=>c.featured)||W[0],e=W.filter(c=>!c.featured),i=Vt.map(c=>`
    <button 
      class="news-filter-btn${c.id===t?" news-filter-btn--active":""}" 
      data-filter="${c.id}"
      id="filter-btn-${c.id}"
    >
      ${c.label}
    </button>
  `).join(""),s=t==="all"?e:e.filter(c=>c.category===t),a=t==="all"||n.category===t,h=s.length>0?s.map(c=>`
        <article class="news-list-card" data-article-id="${c.id}" id="news-card-${c.id}">
          <div class="news-list-thumb">
            ${st(c.id,!1)}
          </div>
          <div class="news-list-content">
            <h3 class="news-list-title">${c.title}</h3>
            <div class="news-list-date">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>${c.date}</span>
            </div>
          </div>
          <div class="news-list-badge-wrap">
            <span class="news-badge news-badge--pill">${c.categoryLabel}</span>
          </div>
        </article>
      `).join(""):'<div class="news-empty-notice">Không có bài viết trong danh mục này.</div>';return`
    <section class="news-page" id="news-page">
      <div class="news-container">

        <!-- 1. BREADCRUMB -->
        <nav class="catalog-breadcrumb news-breadcrumb" aria-label="Breadcrumb">
          <a href="/" class="crumb-link" id="news-crumb-home">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Tin tức & Kiến thức</span>
        </nav>

        <!-- 2. PAGE HEADER -->
        <div class="news-header">
          <h1 class="news-main-title">Kiến thức công nghệ</h1>
          <p class="news-main-subtitle">Cập nhật xu hướng, mẹo sử dụng và kinh nghiệm chọn thiết bị.</p>
        </div>

        <!-- 3. CATEGORY FILTER BUTTONS -->
        <div class="news-filter-bar" id="news-filter-bar">
          ${i}
        </div>

        <!-- 4. FEATURED HERO ARTICLE (Top Large Card) -->
        ${a?`
          <article class="news-hero-card" data-article-id="${n.id}" id="news-hero-article">
            <div class="news-hero-image-wrap">
              ${st(n.id,!0)}
            </div>
            <div class="news-hero-footer">
              <div class="news-hero-info">
                <h2 class="news-hero-title">${n.title}</h2>
                <div class="news-hero-date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>${n.date}</span>
                </div>
              </div>
              <div class="news-hero-badge-wrap">
                <span class="news-badge news-badge--pill">${n.categoryLabel}</span>
              </div>
            </div>
          </article>
        `:""}

        <!-- 5. ARTICLES STACK LIST (Vertical list cards) -->
        <div class="news-list-stack" id="news-list-stack">
          ${h}
        </div>

      </div>

      <!-- Article Detail Modal -->
      <div class="news-modal" id="news-modal" aria-hidden="true">
        <div class="news-modal-backdrop" id="news-modal-backdrop"></div>
        <div class="news-modal-dialog">
          <button class="news-modal-close" id="news-modal-close" aria-label="Đóng">✕</button>
          <div class="news-modal-body" id="news-modal-body"></div>
        </div>
      </div>
    </section>
  `}function Pt(t){var c;(c=document.getElementById("news-crumb-home"))==null||c.addEventListener("click",u=>{u.preventDefault(),window.location.hash="#/"}),document.querySelectorAll(".news-filter-btn").forEach(u=>{u.addEventListener("click",()=>{const r=u.dataset.filter;t&&t(r)})});const n=document.getElementById("news-modal"),e=document.getElementById("news-modal-body"),i=document.getElementById("news-modal-close"),s=document.getElementById("news-modal-backdrop");function a(u){const r=W.find(b=>b.id===u);!r||!n||!e||(e.innerHTML=`
      <div class="news-detail-badge">${r.categoryLabel}</div>
      <h2 class="news-detail-title">${r.title}</h2>
      <div class="news-detail-meta">
        <span>📅 ${r.date}</span>
        <span>⏱️ ${r.readTime}</span>
      </div>
      <div class="news-detail-summary">${r.summary}</div>
      <div class="news-detail-content">${r.content}</div>
    `,n.classList.add("news-modal--open"),n.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden")}function h(){n&&(n.classList.remove("news-modal--open"),n.setAttribute("aria-hidden","true"),document.body.style.overflow="")}i==null||i.addEventListener("click",h),s==null||s.addEventListener("click",h),document.querySelectorAll("[data-article-id]").forEach(u=>{u.addEventListener("click",()=>{a(u.dataset.articleId)})})}function Rt(){return`
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
        </div>

        <!-- 3. PARTNER / DEALER BANNER -->
        <div class="contact-partner-banner" id="contact-partner-banner">
          <img src="/images/banners/banner-partner.jpg" alt="Ondata — Hợp tác đại lý" />
          <a class="banner-hotspot" style="left:6.2%;top:71%;width:16%;height:22%" href="#contact-form-section" id="btn-partner-register" aria-label="Đăng ký ngay">Đăng ký ngay</a>
          <a class="banner-hotspot" style="left:23.5%;top:71%;width:17%;height:22%" href="tel:0916666804" aria-label="Hotline kinh doanh 0916 666 804">Hotline kinh doanh</a>
        </div>

        <!-- 4. THREE CONTACT INFO CARDS -->
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
              <p class="contact-card-val contact-card-val--highlight"><a href="tel:0867036698" style="color:inherit;">0867036698</a></p>
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
              <p class="contact-card-val"><a href="mailto:nchieu@xinchen.vn" style="color:inherit;">nchieu@xinchen.vn</a></p>
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
              <p class="contact-card-val contact-card-val--addr">167 Louis I, LK34,</p>
              <p class="contact-card-sub">KĐT mới Hoàng Văn Thụ, Hoàng Mai</p>
            </div>
          </div>
        </div>

        <!-- 5. CONTACT FORM SECTION -->
        <div class="contact-form-section" id="contact-form-section">
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

      </div>
    </section>
  `}function Gt(t){var i;(i=document.getElementById("contact-crumb-home"))==null||i.addEventListener("click",s=>{s.preventDefault(),window.location.hash="#/"});const n=document.getElementById("contact-form");n&&n.addEventListener("submit",s=>{var h,c;s.preventDefault();const a=(h=document.getElementById("contact-name"))==null?void 0:h.value;(c=document.getElementById("contact-phone"))==null||c.value,t&&t(`Cảm ơn ${a||"bạn"}! Tin nhắn liên hệ đã được gửi thành công.`),n.reset()});const e=document.getElementById("btn-partner-register");e&&e.addEventListener("click",s=>{s.preventDefault();const a=document.querySelector(".contact-form-section");if(a){a.scrollIntoView({behavior:"smooth"});const h=document.getElementById("contact-name");h&&h.focus()}t&&t("Vui lòng để lại thông tin, Ondata sẽ liên hệ tư vấn chính sách đại lý!")})}function K(t,n){return`<img class="sp-banner-img" src="${t}" alt="${n}" />`}function zt(){return`
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
          ${[{id:"bao-hanh",title:"Chính sách bảo hành",desc:"Điều kiện, thời hạn theo từng dòng sản phẩm và địa điểm bảo hành Ondata.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>'},{id:"ky-thuat",title:"Hỗ trợ kỹ thuật",desc:"Tư vấn, hướng dẫn sử dụng, khắc phục sự cố từ xa và thủ tục bảo hành sản phẩm Ondata.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'},{id:"tra-cuu",title:"Tra cứu đơn hàng",desc:"Kiểm tra trạng thái đơn hàng và thông tin giao hàng nhanh chóng.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'},{id:"lien-he",title:"Liên hệ hỗ trợ",desc:"Hotline, Zalo, Email và biểu mẫu liên hệ với đội ngũ hỗ trợ.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'},{id:"bao-mat",title:"Chính sách bảo mật",desc:"Cách Ondata thu thập, sử dụng và bảo vệ thông tin cá nhân trên onda.vn.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'}].map(e=>`
    <div class="sp-card" data-sub="${e.id}" id="sp-card-${e.id}">
      <div class="sp-card-icon-wrap">
        ${e.icon}
      </div>
      <h3 class="sp-card-title">${e.title}</h3>
      <p class="sp-card-desc">${e.desc}</p>
      <div class="sp-card-btn-wrap">
        <button class="sp-card-circle-btn" aria-label="Xem chi tiết ${e.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
  `).join("")}
        </div>

      </div>
    </section>
  `}function Kt(){return`
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
          ${K("/images/banners/banner-warranty.jpg","Bảo hành và đổi trả")}
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
  `}function jt(){return`
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
          ${K("/images/banners/banner-tech.jpg","Hỗ trợ kỹ thuật")}
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
  `}function Ft(){return`
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
          ${K("/images/banners/banner-track.jpg","Tra cứu đơn hàng")}
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
  `}function Wt(){return`
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
          ${K("/images/banners/banner-contact.jpg","Liên hệ hỗ trợ")}
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
  `}function Qt(){return`
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
          ${K("/images/banners/banner-privacy.jpg","Chính sách bảo mật")}
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
  `}function Xt(t=null){switch(t){case"bao-hanh":case"warranty":return Kt();case"ky-thuat":return jt();case"tra-cuu":return Ft();case"lien-he":return Wt();case"bao-mat":return Qt();default:return zt()}}function Ut(t=null,n){var b;(b=document.getElementById("sp-crumb-home"))==null||b.addEventListener("click",y=>{y.preventDefault(),window.navigate?window.navigate("/"):window.location.assign("/")}),document.querySelectorAll(".sp-card[data-sub]").forEach(y=>{y.addEventListener("click",()=>{const f=y.dataset.sub;f&&(window.navigate?window.navigate(`/ho-tro/${f}`):window.location.assign(`/ho-tro/${f}`))})});const e=document.getElementById("btn-tab-warranty"),i=document.getElementById("btn-tab-exchange"),s=document.getElementById("panel-warranty"),a=document.getElementById("panel-exchange");e&&i&&s&&a&&(e.addEventListener("click",()=>{e.classList.add("sp-tab-pill--active"),i.classList.remove("sp-tab-pill--active"),s.classList.remove("sp-tab-panel--hidden"),a.classList.add("sp-tab-panel--hidden")}),i.addEventListener("click",()=>{i.classList.add("sp-tab-pill--active"),e.classList.remove("sp-tab-pill--active"),a.classList.remove("sp-tab-panel--hidden"),s.classList.add("sp-tab-panel--hidden")}));const h=document.getElementById("btn-track-submit"),c=document.getElementById("track-input"),u=document.getElementById("track-result");h&&c&&u&&h.addEventListener("click",()=>{const y=c.value.trim();if(!y){n&&n("Vui lòng nhập mã đơn hàng hoặc số điện thoại!");return}u.style.display="block",n&&n(`Đã tìm thấy thông tin đơn hàng: ${y}`)});const r=document.getElementById("sp-quick-form");r&&r.addEventListener("submit",y=>{y.preventDefault(),n&&n("Cảm ơn bạn! Yêu cầu hỗ trợ đã được gửi thành công."),r.reset()})}function Yt(){return`
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
  `}function _t(){return`
    <!-- FLOATING CONTACT & CHATBOX WIDGET -->
    <div class="floating-contact-widget" id="floating-contact-widget">
      <!-- CỬA SỔ CHATBOX POPUP -->
      <div class="chatbox-window" id="chatbox-window">
        <!-- Header -->
        <div class="chatbox-header">
          <div class="chatbox-agent-info">
            <div class="chatbox-avatar">
              <span class="chatbox-avatar-online"></span>
              <img src="/logo tach nen.png" alt="Ondata Support" class="agent-logo-img" onerror="this.onerror=null; this.src='/logo.png';" />
            </div>
            <div>
              <h4 class="chatbox-agent-name">Hỗ Trợ Ondata</h4>
              <span class="chatbox-agent-status">Đang trực tuyến (Phản hồi tức thì)</span>
            </div>
          </div>
          <button class="chatbox-btn-close" id="chatbox-btn-close" aria-label="Đóng chat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <!-- Body / Tin nhắn -->
        <div class="chatbox-body" id="chatbox-messages">
          <div class="chat-time-divider">Hôm nay</div>

          <!-- Tin nhắn chào mừng -->
          <div class="chat-msg chat-msg--incoming">
            <div class="msg-bubble">
              Xin chào Quý khách! Cảm ơn bạn đã ghé thăm <strong>Ondata</strong>. Bạn cần hỗ trợ về sản phẩm hay báo giá dịch vụ nào ạ?
            </div>
            <span class="msg-time">Vừa xong</span>
          </div>

          <!-- Gợi ý câu hỏi nhanh -->
          <div class="chat-quick-actions" id="chat-quick-actions">
            <button class="chat-quick-btn" data-query="Tư vấn máy tính All-in-one">
              Tư vấn máy All-in-one
            </button>
            <button class="chat-quick-btn" data-query="Tư vấn màn hình Ondata">
              Chọn màn hình làm việc / gaming
            </button>
            <button class="chat-quick-btn" data-query="Yêu cầu báo giá dự án / đại lý">
              Yêu cầu báo giá dự án & đại lý
            </button>
            <button class="chat-quick-btn" data-query="Hỗ trợ kỹ thuật & bảo hành">
              Chính sách bảo hành & kỹ thuật
            </button>
          </div>
        </div>

        <!-- Footer / Input -->
        <div class="chatbox-footer">
          <form class="chatbox-input-form" id="chatbox-form">
            <input 
              type="text" 
              class="chatbox-input" 
              id="chatbox-input" 
              placeholder="Nhập tin nhắn của bạn..." 
              autocomplete="off"
            />
            <button type="submit" class="chatbox-btn-send" id="chatbox-btn-send" aria-label="Gửi tin nhắn">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
          <div class="chatbox-footer-note">
            Hotline: <a href="tel:0867036698">0867036698</a> • <a href="https://m.me/61593699315764" target="_blank" rel="noopener noreferrer">Chat Messenger</a>
          </div>
        </div>
      </div>

      <!-- CÁC NÚT BẤM FLOATING ICON BÊN NGOÀI -->
      <div class="floating-buttons-stack">
        <!-- Nút 1: Điện thoại / Hotline -->
        <a href="tel:0867036698" class="f-btn f-btn--phone" title="Gọi Hotline: 0867036698" aria-label="Gọi điện thoại">
          <div class="f-btn-waves"></div>
          <span class="f-btn-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </span>
          <span class="f-btn-tooltip">Hotline 0867036698</span>
        </a>

        <!-- Nút 2: Messenger -->
        <a href="https://m.me/61593699315764" target="_blank" rel="noopener noreferrer" class="f-btn f-btn--messenger" title="Chat qua Messenger" aria-label="Facebook Messenger">
          <span class="f-btn-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.518 3.736 7.185v3.557a.75.75 0 0 0 1.134.643l3.24-1.892c.607.137 1.238.21 1.89.21 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.066 12.44-2.584-2.756-5.044 2.756 5.544-5.885 2.65 2.756 4.978-2.756-5.544 5.885z"/>
            </svg>
          </span>
          <span class="f-btn-tooltip">Chat Messenger</span>
        </a>

        <!-- Nút 3: Chatbox Trigger -->
        <button type="button" class="f-btn f-btn--chat" id="chatbox-toggle-btn" title="Mở hộp chat trực tuyến" aria-label="Mở chat">
          <span class="chat-badge-dot"></span>
          <span class="f-btn-icon icon-chat-open">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </span>
          <span class="f-btn-icon icon-chat-close" style="display:none;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </span>
          <span class="f-btn-tooltip">Chat trực tuyến</span>
        </button>
      </div>
    </div>
  `}function Zt(t){document.getElementById("floating-contact-widget");const n=document.getElementById("chatbox-window"),e=document.getElementById("chatbox-toggle-btn"),i=document.getElementById("chatbox-btn-close"),s=document.getElementById("chatbox-form"),a=document.getElementById("chatbox-input"),h=document.getElementById("chatbox-messages"),c=e==null?void 0:e.querySelector(".icon-chat-open"),u=e==null?void 0:e.querySelector(".icon-chat-close");if(!e||!n)return;function r(){n.classList.add("chatbox-window--active"),c&&(c.style.display="none"),u&&(u.style.display="inline-block"),setTimeout(()=>a==null?void 0:a.focus(),200)}function b(){n.classList.remove("chatbox-window--active"),c&&(c.style.display="inline-block"),u&&(u.style.display="none")}e.addEventListener("click",g=>{g.stopPropagation(),n.classList.contains("chatbox-window--active")?b():r()}),i==null||i.addEventListener("click",g=>{g.stopPropagation(),b()});function y(g,p=!0){if(!h)return;const m=document.createElement("div");m.className=`chat-msg ${p?"chat-msg--outgoing":"chat-msg--incoming"}`,m.innerHTML=`
      <div class="msg-bubble">${g}</div>
      <span class="msg-time">Vừa xong</span>
    `,h.appendChild(m),h.scrollTop=h.scrollHeight}function f(g){const p=document.createElement("div");p.className="chat-typing-indicator",p.innerHTML="<span></span><span></span><span></span>",h.appendChild(p),h.scrollTop=h.scrollHeight,setTimeout(()=>{p.remove();let m="Cảm ơn bạn đã nhắn tin! Chuyên viên Ondata đã nhận được yêu cầu và sẽ phản hồi ngay.";const k=g.toLowerCase();k.includes("all-in-one")||k.includes("aio")||k.includes("máy tính")?m='Dạ máy tính All-in-one Ondata One 24" và Pro 27" 2K hiện đang có sẵn cấu hình i5/i7 cực mạnh, bảo hành chính hãng 24-36 tháng. Quý khách vui lòng để lại SĐT hoặc gọi Hotline <strong>0867036698</strong> để được báo giá ưu đãi nhất ạ!':k.includes("màn hình")||k.includes("monitor")?m='Dạ Ondata có màn hình từ 24" IPS 100Hz đến màn hình cong 27" 165Hz và 34" Ultrawide sắc nét chuẩn màu đồ họa & gaming. Quý khách có thể xem chi tiết tại mục Sản phẩm hoặc liên hệ hotline <strong>0867036698</strong> để được hỗ trợ ạ!':k.includes("báo giá")||k.includes("đại lý")||k.includes("dự án")?m="Dạ phòng kinh doanh Ondata luôn có chính sách chiết khấu đại lý và giá dự án hấp dẫn. Vui lòng gửi email tới <strong>nchieu@xinchen.vn</strong> hoặc gọi hotline <strong>0867036698</strong> để nhận bảng báo giá ngay ạ!":(k.includes("bảo hành")||k.includes("kỹ thuật"))&&(m="Dạ sản phẩm Ondata được bảo hành chính hãng 24 đến 36 tháng (RAM bảo hành trọn đời), tiếp nhận xử lý tận nơi. Mọi sự cố kỹ thuật quý khách hãy liên hệ Hotline <strong>0867036698</strong> để được hỗ trợ tức thì!"),y(m,!1)},700)}s==null||s.addEventListener("submit",g=>{g.preventDefault();const p=a==null?void 0:a.value.trim();p&&(y(p,!0),a.value="",f(p))}),document.querySelectorAll(".chat-quick-btn").forEach(g=>{g.addEventListener("click",()=>{const p=g.dataset.query;p&&(y(p,!0),f(p))})})}const at=["monitor","cpu","gpu","ram","shield","hdd"];function Jt(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function tn(t){return String(t).replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi,"").replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi,"").replace(/\son\w+\s*=\s*(['"]).*?\1/gi,"").replace(/javascript:/gi,"")}function nn(t){const n=String(t||"").trim();return n?/<[a-z][\s\S]*>/i.test(n)?tn(n):n.split(/\n{2,}/).map(e=>`<p>${Jt(e).replace(/\n/g,"<br>")}</p>`).join(""):""}function gt(t){const n=t.trim(),e=n.indexOf("	");if(e!==-1)return[n.slice(0,e).trim(),n.slice(e+1).trim()];for(let i=0;i<n.length;i+=1){if(n[i]!==":")continue;const s=n[i-1]||"",a=n[i+1]||"";if(!(/\d/.test(s)&&/\d/.test(a)))return[n.slice(0,i).trim(),n.slice(i+1).trim()]}return[n,""]}function en(t){const n=[];return String(t||"").split(`
`).forEach(e=>{const i=e.trim();if(!i||i.startsWith("@@"))return;const[s,a]=gt(i);(s||a)&&n.push([s,a])}),n.filter(([e,i])=>e||i)}function ct(t){const n=String(t||"").trim();if(!n||n.startsWith("@@"))return null;if(n===":")return{label:"",value:""};const[e,i]=gt(n);return{label:e,value:i}}function R(t){const n=String(t||"").replace(/\r/g,"").split(`
`),e=n.indexOf("@@highlight"),i=n.indexOf("@@specs");if(e===-1){const h=en(t).map(([c,u])=>({label:c,value:u}));return{highlights:h.slice(0,6),rest:h}}const s=n.slice(e+1,i===-1?n.length:i),a=i===-1?[]:n.slice(i+1);return{highlights:s.map(ct).filter(Boolean),rest:a.map(ct).filter(Boolean)}}function sn(t){const n={title:"",description:"",keywords:""};return String(t||"").split(`
`).forEach(e=>{const i=e.match(/^\s*(Tiêu đề SEO|Meta description|Từ khóa chính|Từ khóa phụ|Từ khóa)\s*:\s*(.*)$/i);if(!i)return;const s=i[1].toLowerCase(),a=i[2].trim();s.includes("tiêu")?n.title=a:s.includes("meta")?n.description=a:s.includes("phụ")?n.keywords=n.keywords?`${n.keywords}, ${a}`:a:(s.includes("chính")||s.startsWith("từ khóa"))&&(n.keywords=n.keywords?`${a}, ${n.keywords}`:a)}),n}function an(t){return(Array.isArray(t)?t:[]).map(n=>String(n||"").trim()).filter(n=>/^https?:\/\//i.test(n)||n.startsWith("/"))}function cn(t){const n=R(t.specs),e=n.rest.filter(h=>h.label||h.value).map(h=>[h.label,h.value]),i={};e.forEach(([h,c],u)=>{const r=i[h]?`${h} (${u+1})`:h;i[r]=c});const s=sn(t.notes),a=an(t.images);return{id:t.id,cat:t.category,stt:Number(t.stt)||0,name:t.name,images:a,badge:"Mới",price:0,stars:5,reviews:0,seo:{title:s.title||t.name,description:s.description||t.shortDesc||"",keywords:s.keywords||""},specs:n.highlights.filter(h=>h.label||h.value).map((h,c)=>({icon:at[c%at.length],label:h.label,value:h.value})),desc:t.shortDesc||"",features:[],techSpecs:i,detailHtml:nn(t.detail),notes:t.notes||""}}function hn(t){return(Array.isArray(t)?t:[]).filter(e=>!e.hidden).map(cn).sort((e,i)=>e.stt-i.stt||e.name.localeCompare(i.name,"vi"))}function Q(t){yt(hn(t))}async function on(){try{const t=await fetch("/data/catalog.json",{cache:"no-store"});if(!t.ok)return null;const n=await t.json();return Array.isArray(n)?(Q(n),n):null}catch{return null}}function ln(t){var n;return((n=z.find(e=>e.id===t))==null?void 0:n.name)||t}function rn(t,n){const e=P(t).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"san-pham";let i=e,s=2;const a=new Set(n.map(h=>h.id));for(;a.has(i);)i=`${e}-${s}`,s+=1;return i}const L="ondata-admin-token",q={id:"",stt:1,category:"monitor",name:"",specs:"",notes:"",shortDesc:"",detail:"",images:[]};function w(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function G(t){return{"Content-Type":"application/json",Authorization:`Bearer ${t}`}}async function I(t,n={}){const e=await fetch(t,n),i=await e.text();let s=null;try{s=i?JSON.parse(i):null}catch{s=null}if(!s||typeof s!="object"||Array.isArray(s)){const a=new Error("Hosting chưa nhận đủ file lưu sản phẩm. Hãy tải lên thư mục api và data.");throw a.status=e.ok?502:e.status,a}if(s.ok!==!0){const a=new Error(s.message||"Không thực hiện được");throw a.status=e.ok?400:e.status,a}return s}function dn(){return'<div id="admin-root" class="admin-page"></div>'}function pn(){const t=document.getElementById("admin-root");if(!t)return;const n=sessionStorage.getItem(L);if(!n){E(t);return}t.innerHTML='<p class="admin-status">Đang mở trang quản trị...</p>',I("/api/session.php",{headers:G(n)}).then(()=>ut(t,n)).catch(()=>{sessionStorage.removeItem(L),E(t,"Phiên đăng nhập đã hết. Hãy đăng nhập lại.")})}function E(t,n=""){t.innerHTML=`
    <div class="admin-login">
      <div class="admin-login-panel">
        <form class="admin-login-form" id="admin-login-form">
          <h2>Đăng nhập</h2>
          ${n?`<p class="admin-alert">${w(n)}</p>`:""}
          <label>Tài khoản<input name="username" autocomplete="username" required></label>
          <label>Mật khẩu<input name="password" type="password" autocomplete="current-password" required></label>
          <button class="admin-btn" type="submit">Vào trang quản trị</button>
          <a class="admin-back" href="/">Về trang chủ</a>
        </form>
      </div>
    </div>
  `,t.querySelector("#admin-login-form").addEventListener("submit",async e=>{e.preventDefault();const i=e.currentTarget,s=i.querySelector("button");s.disabled=!0;try{const a=await I("/api/login.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i.username.value.trim(),password:i.password.value})});sessionStorage.setItem(L,a.token),ut(t,a.token)}catch(a){E(t,a.message)}})}async function ut(t,n){let e=[];try{e=await(await fetch("/data/catalog.json",{cache:"no-store"})).json(),Array.isArray(e)||(e=[])}catch{e=[]}let i={...q,stt:M(e)},s="",a="visible",h="all";const c=()=>{var k,H,O,B,N;const u=[...e].sort((d,o)=>Number(d.stt)-Number(o.stt)||d.name.localeCompare(o.name,"vi")),r=u.filter(d=>!d.hidden),b=u.filter(d=>d.hidden),y=a==="hidden"?b:r,f=h==="all"?y:y.filter(d=>d.category===h),g=new Map(z.map(d=>[d.id,y.filter(o=>o.category===d.id).length])),p=a==="hidden"?h==="all"?"Chưa có sản phẩm đang ẩn.":"Không có sản phẩm đang ẩn trong danh mục này.":h==="all"?"Chưa có sản phẩm đang hiển thị.":"Không có sản phẩm đang hiển thị trong danh mục này.",m=(d,o,v)=>d.length?d.map(l=>{var T;return`
      <li class="admin-list-item ${l.id===i.id?"admin-list-item--active":""}">
        <div class="admin-list-thumb">
          ${(T=l.images)!=null&&T[0]?`<img src="${w(l.images[0])}" alt="">`:"<span>Ảnh</span>"}
        </div>
        <div class="admin-list-copy">
          <strong>${w(l.name)}</strong>
          <span>${w(ln(l.category))}</span>
        </div>
        <div class="admin-row-actions">
          <button type="button" data-edit="${w(l.id)}">Sửa</button>
          <button type="button" data-hide="${w(l.id)}">${v}</button>
          <button type="button" class="admin-btn--danger" data-delete="${w(l.id)}">Xóa</button>
        </div>
      </li>
    `}).join(""):`<li class="admin-empty">${o}</li>`;t.innerHTML=`
      <div class="admin-app">
        <aside class="admin-side">
          <div>
            <p class="admin-brand">ONDATA</p>
          </div>
          <nav class="admin-nav">
            <button type="button" class="admin-nav-item ${a==="visible"?"admin-nav-item--active":""}" data-section="visible">
              <span>Sản phẩm đang hiển thị</span>
              <em>${r.length}</em>
            </button>
            <button type="button" class="admin-nav-item ${a==="hidden"?"admin-nav-item--active":""}" data-section="hidden">
              <span>Sản phẩm đang ẩn</span>
              <em>${b.length}</em>
            </button>
            <button type="button" class="admin-nav-item ${a==="add"?"admin-nav-item--active":""}" data-section="add">
              <span>Thêm sản phẩm mới</span>
            </button>
          </nav>
          <div class="admin-side-actions">
            <a class="admin-link" href="/">Xem website</a>
            <button class="admin-link" type="button" id="admin-logout">Đăng xuất</button>
          </div>
        </aside>
        <main class="admin-main">
          <header class="admin-top">
            <div>
              <p class="admin-kicker">Danh mục sản phẩm</p>
              <h1>${a==="add"?i.id?"Sửa sản phẩm":"Thêm sản phẩm mới":a==="hidden"?"Sản phẩm đang ẩn":"Sản phẩm đang hiển thị"}</h1>
            </div>
            <div class="admin-stat">${r.length} đang hiện · ${b.length} đang ẩn</div>
          </header>
          ${s?`<p class="admin-alert ${s.ok?"admin-alert--ok":""}">${w(s.text)}</p>`:""}
          <div class="admin-workspace">
            ${a==="add"?`
            <form class="admin-card admin-pd" id="admin-product-form">
              <div class="admin-pd-grid">
                <div class="admin-pd-gallery">
                  <div class="admin-pd-hero">
                    ${(i.images||[])[0]?`<img src="${w(i.images[0])}" alt="">`:"<span>Ảnh bìa sẽ hiện ở đây</span>"}
                  </div>
                  <div class="admin-pd-thumbs">
                    ${(i.images||[]).map((d,o)=>`
                      <figure class="admin-pd-thumb">
                        <img src="${w(d)}" alt="Ảnh ${o+1}">
                        <button type="button" data-remove-image="${o}">Gỡ</button>
                        ${o===0?"<span>Bìa</span>":""}
                      </figure>
                    `).join("")}
                  </div>
                  <label class="admin-upload">
                    Chọn ảnh từ máy
                    <input id="admin-image-input" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple>
                  </label>
                  <p class="admin-hint">Ảnh đầu tiên là ảnh lớn. Có thể chọn nhiều ảnh.</p>
                </div>
                <div class="admin-pd-info">
                  <label>Danh mục
                    <select name="category">
                      ${z.map(d=>`
                        <option value="${d.id}" ${d.id===i.category?"selected":""}>${w(d.name)}</option>
                      `).join("")}
                    </select>
                  </label>
                  <label class="admin-pd-title">Tên sản phẩm
                    <input name="name" required value="${w(i.name)}" placeholder="Màn hình ONDATA ...">
                  </label>
                  <p class="admin-pd-price">Liên hệ</p>
                  <div class="admin-spec-table admin-highlights">
                    ${ot(R(i.specs).highlights).map(d=>`
                      <div class="admin-spec-row">
                        <input data-highlight-label value="${w(d.label)}" placeholder="Tên thông số">
                        <input data-highlight-value value="${w(d.value)}" placeholder="Giá trị">
                        <button type="button" data-remove-highlight>Gỡ</button>
                      </div>
                    `).join("")}
                  </div>
                  <button class="admin-btn admin-btn--ghost" type="button" id="admin-add-highlight">Thêm thông số</button>
                </div>
              </div>

              <section class="admin-section">
                <h3>Thông tin chi tiết</h3>
                <label>Mô tả ngắn<textarea name="shortDesc" rows="3">${w(i.shortDesc)}</textarea></label>
                <label>Mô tả chi tiết<textarea name="detail" rows="8" placeholder="Xuống dòng để tách đoạn. Một dòng trống để tách đoạn mới.">${w(i.detail)}</textarea></label>
              </section>

              <section class="admin-section">
                <h3>Thông số kỹ thuật</h3>
                <div class="admin-spec-table">
                  ${ot(R(i.specs).rest).map(d=>`
                    <div class="admin-spec-row">
                      <input data-spec-label value="${w(d.label)}" placeholder="Tên thông số">
                      <input data-spec-value value="${w(d.value)}" placeholder="Giá trị">
                      <button type="button" data-remove-spec>Gỡ</button>
                    </div>
                  `).join("")}
                </div>
                <button class="admin-btn admin-btn--ghost" type="button" id="admin-add-spec">Thêm thông số</button>
              </section>

              <section class="admin-section">
                <h3>Lưu ý khi đăng sản phẩm</h3>
                <label>Tiêu đề SEO, mô tả và từ khóa
                  <textarea name="notes" rows="5" placeholder="Tiêu đề SEO: ...&#10;Meta description: ...&#10;Từ khóa chính: ...&#10;Từ khóa phụ: ...">${w(i.notes)}</textarea>
                </label>
              </section>

              <div class="admin-form-actions">
                <button class="admin-btn" type="submit">${i.id?"Lưu thay đổi":"Đăng sản phẩm"}</button>
                <button class="admin-btn admin-btn--ghost" type="button" id="admin-reset">Làm mới form</button>
              </div>
            </form>
            `:`
            <section class="admin-card admin-list-card">
              <div class="admin-filters" role="group" aria-label="Lọc theo danh mục">
                <button type="button" class="admin-filter ${h==="all"?"admin-filter--active":""}" data-category="all">
                  Tất cả <em>${y.length}</em>
                </button>
                ${z.map(d=>`
                  <button type="button" class="admin-filter ${h===d.id?"admin-filter--active":""}" data-category="${d.id}">
                    ${w(d.name)} <em>${g.get(d.id)||0}</em>
                  </button>
                `).join("")}
              </div>
              <ul class="admin-list">
                ${a==="hidden"?m(f,p,"Hiện"):m(f,p,"Ẩn")}
              </ul>
            </section>
            `}
          </div>
        </main>
      </div>
    `,t.querySelectorAll("[data-section]").forEach(d=>{d.addEventListener("click",()=>{a=d.dataset.section,a==="add"&&(i={...q,stt:M(e)}),s="",c()})}),t.querySelectorAll("[data-category]").forEach(d=>{d.addEventListener("click",()=>{h=d.dataset.category||"all",c()})}),t.querySelector("#admin-logout").addEventListener("click",()=>{sessionStorage.removeItem(L),E(t)}),(k=t.querySelector("#admin-image-input"))==null||k.addEventListener("change",async d=>{const o=[...d.target.files];if(!o.length)return;i=$(t,i);const v=t.querySelector(".admin-hint");v&&(v.textContent="Đang tải ảnh lên...");try{for(const l of o){if(i.images.length>=12)break;const T=await un(l),D=await I("/api/upload.php",{method:"POST",headers:G(n),body:JSON.stringify({dataUrl:T})});i.images.push(D.image)}s={ok:!0,text:"Đã tải ảnh lên. Bấm lưu sản phẩm để cập nhật website."},c()}catch(l){if(l.status===401){sessionStorage.removeItem(L),E(t,l.message);return}s={ok:!1,text:l.message},c()}}),t.querySelectorAll("[data-remove-image]").forEach(d=>{d.addEventListener("click",()=>{i=$(t,i),i.images.splice(Number(d.dataset.removeImage),1),c()})}),(H=t.querySelector("#admin-add-highlight"))==null||H.addEventListener("click",()=>{i=$(t,i);const d=R(i.specs);d.highlights.push({label:"",value:""}),i.specs=Y(d),c()}),(O=t.querySelector("#admin-add-spec"))==null||O.addEventListener("click",()=>{i=$(t,i);const d=R(i.specs);d.rest.push({label:"",value:""}),i.specs=Y(d),c()}),t.querySelectorAll("[data-remove-highlight], [data-remove-spec]").forEach(d=>{d.addEventListener("click",()=>{var o;(o=d.closest(".admin-spec-row"))==null||o.remove(),i=$(t,i),c()})}),(B=t.querySelector("#admin-reset"))==null||B.addEventListener("click",()=>{i={...q,stt:M(e)},s="",c()}),(N=t.querySelector("#admin-product-form"))==null||N.addEventListener("submit",async d=>{var tt;d.preventDefault();const o=d.currentTarget,v=o.name.value.trim();if(!v)return;const l=$(t,i),T={id:i.id||rn(v,e),stt:i.id&&Number(i.stt)||M(e),category:o.category.value,name:v,specs:l.specs,notes:o.notes.value,shortDesc:o.shortDesc.value,detail:o.detail.value,images:i.images||[],hidden:!!i.hidden},D=i.id?e.map(C=>C.id===i.id?T:C):[...e,T],V=o.querySelector('button[type="submit"]');V.disabled=!0;try{const C=await I("/api/catalog.php",{method:"POST",headers:G(n),body:JSON.stringify({rows:D})});if(!Array.isArray(C.rows))throw new Error(C.message||"Không nhận được danh sách sản phẩm từ hosting.");e=C.rows,Q(e),a=T.hidden?"hidden":"visible",i={...q,stt:M(e)},s={ok:!0,text:"Đã lưu. Sản phẩm đã được cập nhật trên website."},c()}catch(C){if(C.status===401){sessionStorage.removeItem(L),E(t,C.message);return}V.disabled=!1;let S=t.querySelector(".admin-alert");S||(S=document.createElement("p"),S.className="admin-alert",(tt=t.querySelector(".admin-top"))==null||tt.insertAdjacentElement("afterend",S)),S.classList.remove("admin-alert--ok"),S.textContent=C.message}}),t.querySelectorAll("[data-edit]").forEach(d=>{d.addEventListener("click",()=>{const o=e.find(v=>v.id===d.dataset.edit);o&&(i={...o,images:[...o.images||[]]},s="",a="add",c())})}),t.querySelectorAll("[data-hide]").forEach(d=>{d.addEventListener("click",async()=>{const o=e.find(l=>l.id===d.dataset.hide);if(!o)return;const v=e.map(l=>l.id===o.id?{...l,hidden:!l.hidden}:l);try{const l=await I("/api/catalog.php",{method:"POST",headers:G(n),body:JSON.stringify({rows:v})});if(!Array.isArray(l.rows))throw new Error(l.message||"Không nhận được danh sách sản phẩm từ hosting.");e=l.rows,Q(e),i.id===o.id&&(i={...i,hidden:!o.hidden}),a=o.hidden?"visible":"hidden",s={ok:!0,text:o.hidden?"Đã hiện sản phẩm trên website.":"Đã ẩn sản phẩm khỏi website."},c()}catch(l){if(l.status===401){sessionStorage.removeItem(L),E(t,l.message);return}s={ok:!1,text:l.message},c()}})}),t.querySelectorAll("[data-delete]").forEach(d=>{d.addEventListener("click",async()=>{const o=e.find(l=>l.id===d.dataset.delete);if(!o||!window.confirm(`Xóa sản phẩm "${o.name}"?`))return;const v=e.filter(l=>l.id!==o.id);try{const l=await I("/api/catalog.php",{method:"POST",headers:G(n),body:JSON.stringify({rows:v})});if(!Array.isArray(l.rows))throw new Error(l.message||"Không nhận được danh sách sản phẩm từ hosting.");e=l.rows,Q(e),i.id===o.id&&(i={...q,stt:M(e)}),s={ok:!0,text:"Đã xóa sản phẩm."},c()}catch(l){s={ok:!1,text:l.message},c()}})})};c()}function ht(t,n){const e=String(t||"").trim(),i=String(n||"").trim();return!e&&!i?":":`${e}: ${i}`}function ot(t){return t.length?t:[{label:"",value:""}]}function Y(t){const n=(t.highlights||[]).map(i=>ht(i.label,i.value)),e=(t.rest||[]).map(i=>ht(i.label,i.value));return["@@highlight",...n,"@@specs",...e].join(`
`)}function lt(t,n,e,i){const s=[...t.querySelectorAll(n)],a=[...t.querySelectorAll(e)];return s.map((c,u)=>{var r;return{label:c.value.trim(),value:(((r=a[u])==null?void 0:r.value)||"").trim()}})}function gn(t){const n=lt(t,"[data-highlight-label]","[data-highlight-value]"),e=lt(t,"[data-spec-label]","[data-spec-value]");return!n.length&&!e.length?"":Y({highlights:n,rest:e})}function $(t,n){const e=t.querySelector("#admin-product-form");if(!e)return n;const i=gn(t);return{...n,category:e.category.value,name:e.name.value,specs:i,notes:e.notes.value,shortDesc:e.shortDesc.value,detail:e.detail.value}}function un(t){return new Promise((n,e)=>{if(!/^image\/(jpeg|png|webp|gif)$/.test(t.type)){e(new Error("Chỉ nhận ảnh JPG, PNG, WEBP hoặc GIF"));return}if(t.size>8e6){e(new Error("Mỗi ảnh tối đa 8MB"));return}const i=new FileReader;i.onload=()=>n(i.result),i.onerror=()=>e(new Error("Không đọc được ảnh trên máy")),i.readAsDataURL(t)})}function M(t){return t.reduce((e,i)=>Math.max(e,Number(i.stt)||0),0)+1}let mt=0,rt="all";const _={aio:{label:"Máy tính All-in-one",sub:"Thiết kế tinh gọn, hiệu năng vượt trội all-in-one"},monitor:{label:"Màn hình",sub:"Hiển thị sắc nét, công nghệ bảo vệ mắt đỉnh cao"},keyboard:{label:"Bàn phím",sub:"Cảm giác gõ êm ái, switch bền bỉ, thiết kế tinh xảo"},mouse:{label:"Chuột",sub:"Độ nhạy chuẩn xác, công thái học vừa vặn lòng bàn tay"},ram:{label:"RAM",sub:"Tốc độ vượt trội, đa nhiệm bền bỉ"},accessories:{label:"Phụ kiện",sub:"Hoàn thiện góc làm việc và trải nghiệm đỉnh cao"},laptop:{label:"Máy tính All-in-one",sub:"Thiết kế tinh gọn, hiệu năng vượt trội all-in-one"},desktop:{label:"Máy tính All-in-one",sub:"Thiết kế tinh gọn, hiệu năng vượt trội all-in-one"},all:{label:"Sản phẩm",sub:"Tất cả sản phẩm chính hãng Ondata"}};function X(t){let n=document.querySelector(".toast-container");n||(n=document.createElement("div"),n.className="toast-container",document.body.appendChild(n));const e=document.createElement("div");e.className="toast-alert",e.innerHTML=`<span style="color:#7ea835;font-weight:700;">✓</span> <span>${t}</span>`,n.appendChild(e),setTimeout(()=>{e.style.opacity="0",e.style.transform="translateY(10px)",setTimeout(()=>e.remove(),300)},3e3)}function mn(){if(window.location.hash&&window.location.hash.startsWith("#/")){const n=window.location.hash.slice(1);window.history.replaceState({},"",n)}let t=window.location.pathname.replace(/\/+$/,"")||"/";if(t.startsWith("/dist")&&(t=t.replace(/^\/dist/,"")||"/"),t.startsWith("/san-pham")){const n=t.split("/").filter(Boolean),e=n[1]||"all",i=n[2]||null;if(i)return{page:"detail",cat:e,id:i};if(e!=="all"){const s=pt(e);if(s)return{page:"detail",cat:s.cat,id:s.id}}return{page:"catalog",cat:e}}return t.startsWith("/ve-ondata")||t.startsWith("/gioi-thieu")?{page:"about"}:t.startsWith("/tin-tuc")?{page:"news"}:t.startsWith("/lien-he")?{page:"contact"}:t.startsWith("/ho-tro")?{page:"support",sub:t.split("/").filter(Boolean)[1]||null}:t.startsWith("/admin")?{page:"admin"}:{page:"home"}}function x(t){const n=t.startsWith("#/")?t.slice(1):t;window.location.pathname!==n&&window.history.pushState({},"",n),j(),window.scrollTo({top:0,behavior:"smooth"})}window.navigate=x;function vn(){return`
    ${bt()}
    ${xt()}
    ${Tt()}
  `}function bn(){document.querySelectorAll(".sidebar-item a[data-cat]").forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),x(`/san-pham/${n.dataset.cat}`)})}),document.querySelectorAll('a[href="#featured-products"], a[href="/san-pham/all"]').forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),x("/san-pham/all")})});const t=document.getElementById("newsletter-form");t&&(t.onsubmit=n=>{n.preventDefault();const e=document.getElementById("newsletter-email");e!=null&&e.value&&(X(`Đã đăng ký nhận tin thành công: ${e.value}`),e.value="")}),document.querySelectorAll(".product-item-card").forEach(n=>{n.onclick=()=>{const e=n.dataset.id,i=n.dataset.cat;x(e&&i?`/san-pham/${i}/${e}`:"/san-pham/all")}})}function fn(t){Nt(t),document.querySelectorAll(".catsidebar-link[data-cat]").forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),x(`/san-pham/${n.dataset.cat}`)})})}function yn(t){const n=_[t]||_.all;return At(t,n)}function kn(t){St(),document.querySelectorAll(".catsidebar-link[data-cat]").forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),x(`/san-pham/${n.dataset.cat}`)})})}function wn(){const t=document.getElementById("nav-hamburger"),n=document.getElementById("nav-menu");if(t&&n){const p=m=>{n.classList.toggle("mobile-open",m),t.classList.toggle("is-open",m),document.body.classList.toggle("menu-open",m);const k=document.getElementById("navbar");m?(document.documentElement.style.setProperty("--mobile-nav-h",`${k?k.offsetHeight:120}px`),document.body.appendChild(n)):k&&n.parentElement===document.body&&k.querySelector(".nav-container").appendChild(n)};t.onclick=()=>p(!n.classList.contains("mobile-open")),n.querySelectorAll("a").forEach(m=>{m.addEventListener("click",()=>p(!1))})}const e=document.getElementById("nav-search-icon");e&&(e.onclick=()=>{const p=document.getElementById("search-input");p&&p.focus()});const i=document.getElementById("search-input"),s=document.getElementById("search-dropdown"),a=document.querySelector(".search-btn");if(i&&s){let p=[],m=-1;const k=o=>{switch(o){case"aio":case"laptop":case"desktop":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>';case"monitor":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg>';case"keyboard":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg>';case"mouse":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg>';case"ram":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg>';case"accessories":default:return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'}},H=o=>{var v;return((v=_[o])==null?void 0:v.label)||"Sản phẩm"},O=o=>{const v=(o||"").trim();v?(p=nt(v),m=-1,p.length>0?s.innerHTML=`
            <div class="search-header-label">Tìm thấy ${p.length} sản phẩm</div>
            ${p.map((l,T)=>`
              <div class="search-item" data-id="${l.id}" data-cat="${l.cat}" data-idx="${T}">
                <span class="search-item-icon">${k(l.cat)}</span>
                <div class="search-item-details">
                  <span class="search-item-name">${l.name}</span>
                  <span class="search-item-cat">${l.badge?`<span class="search-badge">${l.badge}</span>`:""} ${H(l.cat)}</span>
                </div>
                <span class="search-item-price">Liên hệ</span>
              </div>
            `).join("")}
          `:s.innerHTML=`
            <div class="search-empty">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.4">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <span>Không tìm thấy sản phẩm cho "<strong>${v}</strong>"</span>
            </div>
          `):(p=A.slice(0,5),m=-1,s.innerHTML=`
          <div class="search-header-label">Sản phẩm gợi ý</div>
          ${p.map((l,T)=>`
            <div class="search-item" data-id="${l.id}" data-cat="${l.cat}" data-idx="${T}">
              <span class="search-item-icon">${k(l.cat)}</span>
              <div class="search-item-details">
                <span class="search-item-name">${l.name}</span>
                <span class="search-item-cat">${l.badge?`<span class="search-badge">${l.badge}</span>`:""} ${H(l.cat)}</span>
              </div>
              <span class="search-item-price">Liên hệ</span>
            </div>
          `).join("")}
        `),s.querySelectorAll(".search-item").forEach(l=>{l.addEventListener("mousedown",T=>{T.preventDefault();const D=l.dataset.id,V=l.dataset.cat;D&&V&&B(V,D)})})},B=(o,v)=>{s.classList.remove("show"),i.blur(),x(`/san-pham/${o}/${v}`)},N=()=>{if(m>=0&&p[m]){const l=p[m];B(l.cat,l.id);return}const o=i.value.trim();if(!o){p.length>0&&B(p[0].cat,p[0].id);return}const v=nt(o);v.length>0?B(v[0].cat,v[0].id):X(`Không tìm thấy sản phẩm phù hợp với "${o}"`)};i.addEventListener("focus",()=>{O(i.value),s.classList.add("show")}),i.addEventListener("input",()=>{O(i.value),s.classList.add("show")}),i.addEventListener("keydown",o=>{const v=s.querySelectorAll(".search-item");o.key==="ArrowDown"?(o.preventDefault(),v.length>0&&(m=(m+1)%v.length,d(v))):o.key==="ArrowUp"?(o.preventDefault(),v.length>0&&(m=(m-1+v.length)%v.length,d(v))):o.key==="Enter"?(o.preventDefault(),N()):o.key==="Escape"&&s.classList.remove("show")});const d=o=>{o.forEach((v,l)=>{v.classList.toggle("search-item--active",l===m),l===m&&v.scrollIntoView({block:"nearest"})})};a&&a.addEventListener("click",o=>{o.preventDefault(),N()}),document.addEventListener("click",o=>{!i.contains(o.target)&&!s.contains(o.target)&&!(a!=null&&a.contains(o.target))&&s.classList.remove("show")})}const h=document.getElementById("back-to-top");window.addEventListener("scroll",()=>{h&&h.classList.toggle("visible",window.scrollY>300)}),h&&(h.onclick=()=>window.scrollTo({top:0,behavior:"smooth"}));const c=document.getElementById("menu-home");c&&c.addEventListener("click",p=>{p.preventDefault(),x("/")});const u=document.getElementById("menu-about");u&&u.addEventListener("click",p=>{p.preventDefault(),x("/ve-ondata")});const r=document.getElementById("menu-products");r&&r.addEventListener("click",p=>{p.preventDefault(),x("/san-pham/all")});const b=document.getElementById("menu-news");b&&b.addEventListener("click",p=>{p.preventDefault(),x("/tin-tuc")});const y=document.getElementById("menu-contact");y&&y.addEventListener("click",p=>{p.preventDefault(),x("/lien-he")});const f=document.getElementById("menu-support");f&&f.addEventListener("click",p=>{p.preventDefault(),x("/ho-tro")});const g=document.getElementById("cart-badge");g&&(g.textContent=mt)}const dt={title:"Ondata Việt Nam – Hiệu Năng Vượt Trội Cho Mọi Nhu Cầu",description:"Ondata Việt Nam - Máy tính xách tay, máy tính để bàn, màn hình, linh kiện và phụ kiện công nghệ chính hãng Onda."};function xn(t){var i,s,a;document.title=((i=t==null?void 0:t.seo)==null?void 0:i.title)||dt.title;const n=document.querySelector('meta[name="description"]');n&&n.setAttribute("content",((s=t==null?void 0:t.seo)==null?void 0:s.description)||dt.description);let e=document.querySelector('meta[name="keywords"]');(a=t==null?void 0:t.seo)!=null&&a.keywords?(e||(e=document.createElement("meta"),e.setAttribute("name","keywords"),document.head.appendChild(e)),e.setAttribute("content",t.seo.keywords)):e&&e.remove()}function j(){var y,f,g,p,m,k;const t=document.querySelector("#app");if(!t)return;const n=mn(),e=n.page==="home",i=n.page==="about",s=n.page==="catalog",a=n.page==="detail",h=n.page==="news",c=n.page==="contact",u=n.page==="support",r=n.page==="admin";if(document.body.classList.add("theme-onda-dark"),r){document.title="Quản trị sản phẩm | Ondata",t.innerHTML=dn(),pn();return}let b=null;a&&(b=pt(n.id)),xn(a?b:null),t.innerHTML=`
    ${vt(mt)}
    <main id="main-content">
      ${e?vn():""}
      ${i?Yt():""}
      ${s?yn(n.cat):""}
      ${a?Ot(b):""}
      ${h?qt(rt):""}
      ${c?Rt():""}
      ${u?Xt(n.sub):""}
    </main>
    ${Ct()}
    ${_t()}
    <button class="back-to-top" id="back-to-top" aria-label="Lên đầu trang">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
  `,window.scrollTo({top:0}),wn(),Zt(),e&&bn(),s&&kn(n.cat),a&&fn(b),h&&Pt(H=>{rt=H,j()}),c&&Gt(X),u&&Ut(n.sub,X),(y=document.getElementById("menu-home"))==null||y.classList.toggle("active",e),(f=document.getElementById("menu-about"))==null||f.classList.toggle("active",i),(g=document.getElementById("menu-products"))==null||g.classList.toggle("active",s||a),(p=document.getElementById("menu-news"))==null||p.classList.toggle("active",h),(m=document.getElementById("menu-contact"))==null||m.classList.toggle("active",c),(k=document.getElementById("menu-support"))==null||k.classList.toggle("active",u)}window.addEventListener("popstate",j);window.addEventListener("hashchange",j);document.addEventListener("click",t=>{const n=t.target.closest("a");if(!n)return;const e=n.getAttribute("href");if(e){if(e.startsWith("#")&&!e.startsWith("#/")){const i=document.querySelector(e);i&&(t.preventDefault(),i.scrollIntoView({behavior:"smooth"}));return}if(e.startsWith("/")&&!e.startsWith("//")){t.preventDefault(),x(e);return}if(e.startsWith("#/")){t.preventDefault(),x(e.slice(1));return}}});on().finally(j);
