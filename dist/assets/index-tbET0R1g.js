(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();function ot(t=0){return`
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
  `}function ct(){return`
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

          <!-- Banner Lớn: Hiệu năng vượt trội Cho mọi nhu cầu -->
          <div class="main-hero-banner">
            <div class="banner-content">
              <div class="banner-logo-badge">
                <span class="banner-brand">ONDATA</span>
              </div>
              <h1 class="banner-title">
                Hiệu năng vượt trội<br/>
                Cho mọi nhu cầu
              </h1>
              <p class="banner-subtitle">
                Máy tính - Màn hình - Linh kiện - Phụ kiện chính hãng
              </p>
              <a href="#featured-products" class="btn-banner-cta">
                Khám phá ngay
              </a>
            </div>

            <!-- Laptop Illustration on Right -->
            <div class="banner-visual">
              <div class="laptop-illustration">
                <div class="laptop-display">
                  <div class="display-inner">
                    <div class="display-glow"></div>
                    <span class="display-text">ONDATA</span>
                  </div>
                </div>
                <div class="laptop-base">
                  <div class="laptop-notch"></div>
                </div>
              </div>
            </div>
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
  `}const z=["/images/monitors/monitor-01.png?v=2","/images/monitors/monitor-02.png?v=2"],K=[{id:"aio",name:"Máy tính All-in-one",icon:"aio",desc:"Máy tính tất cả trong một tinh gọn, mạnh mẽ"},{id:"monitor",name:"Màn hình",icon:"monitor",desc:"Hiển thị sắc nét, tần số quét cao, bảo vệ mắt"},{id:"keyboard",name:"Bàn phím",icon:"keyboard",desc:"Bàn phím cơ & công thái học gõ êm mượt"},{id:"mouse",name:"Chuột",icon:"mouse",desc:"Chuột quang học, wireless độ nhạy cao"},{id:"ram",name:"RAM",icon:"ram",desc:"Bộ nhớ DDR4/DDR5 tốc độ cao, đa nhiệm tối ưu"},{id:"accessories",name:"Phụ kiện",icon:"accessories",desc:"Giá treo, hub chuyển đổi, lót chuột cao cấp"}];let C=[{id:"od215100vv",cat:"monitor",name:"Màn hình ONDATA OD215100VV 21.5 inch 100Hz Full HD VA",images:z,badge:"Mới",price:0,stars:5,reviews:0,seo:{title:"Màn hình ONDATA OD215100VV 21.5 inch 100Hz Full HD VA",description:"Màn hình ONDATA OD215100VV 21.5 inch Full HD, 100Hz, tấm nền VA, 95% sRGB, HDMI + VGA, giảm ánh sáng xanh.",keywords:"màn hình ONDATA OD215100VV, màn hình 21.5 inch, màn hình 100Hz, màn hình VA Full HD, màn hình văn phòng, màn hình 95% sRGB, màn hình HDMI VGA"},specs:[{icon:"monitor",label:"Kích thước",value:'21.5" VA Full HD'},{icon:"cpu",label:"Tần số quét",value:"100Hz"},{icon:"gpu",label:"Độ tương phản",value:"3000:1 (Typ.)"},{icon:"ram",label:"Dải màu",value:"95% sRGB"},{icon:"shield",label:"Kết nối",value:"HDMI + VGA"},{icon:"shield",label:"Treo tường",value:"VESA 75×75 mm"}],desc:"Màn hình ONDATA OD215100VV là màn hình LCD 21.5 inch, độ phân giải Full HD 1920×1080, tấm nền VA, tần số quét 100Hz. Màn hình phủ 95% sRGB, có công nghệ giảm ánh sáng xanh và đủ hai cổng HDMI, VGA. Sản phẩm phù hợp cho văn phòng, học tập, giải trí và công việc thiết kế cơ bản.",features:["Tần số quét 100Hz, thao tác mượt hơn màn hình 60Hz","Tấm nền VA, độ tương phản 3000:1","Phủ 95% sRGB, 16.7 triệu màu","HDMI + VGA, hỗ trợ VESA 75×75 mm"],techSpecs:{Model:"OD215100VV","Kích thước":"21.5 inch, tỷ lệ 16:9","Vùng hiển thị":"478.654 (H) × 260.28 (V) mm","Tấm nền / đèn nền":"VA / ELED","Độ phân giải":"1920 × 1080 (Full HD), 102 PPI","Tần số quét":"100Hz","Thời gian phản hồi":"14ms (Typ.)","Độ sáng":"250 cd/m² (Max.)","Độ tương phản":"3000:1 (Typ.)","Dải màu":"95% sRGB (BT.709), 16.7 triệu màu","Góc nhìn":"178° (H) / 178° (V)","Cổng vào":"HDMI + VGA","Nguồn điện":"12V / 2.5A, adapter rời","Công suất":"Tối đa 26W; chờ < 0.5W","Nhiệt độ hoạt động / lưu trữ":"0°C ~ 40°C / -20°C ~ 60°C","Độ ẩm hoạt động / lưu trữ":"10~80% RH / 5~90% (không ngưng tụ)","Chân đế":"Chữ V, cố định",VESA:"75 × 75 mm","Kích thước sản phẩm":"494 × 153 × 367 mm","Kích thước đóng gói":"546 × 93 × 346 mm","Màu vỏ":"Đen"},detailHtml:`
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
    `},{id:"od238120iv",cat:"monitor",name:'Màn hình ONDATA OD238120IV 23.8" IPS Full HD 120Hz',images:z,badge:"Mới",price:0,stars:5,reviews:0,seo:{title:'Màn hình ONDATA OD238120IV 23.8" IPS Full HD 120Hz',description:"ONDATA OD238120IV màn hình 23.8 inch IPS, Full HD, 120Hz mượt mà, phủ 95% sRGB, HDMI + VGA, hỗ trợ VESA.",keywords:"màn hình ONDATA OD238120IV, màn hình 24 inch 120Hz, màn hình 23.8 inch IPS, màn hình Full HD 120Hz, màn hình văn phòng 24 inch, màn hình ONDATA 120Hz, màn hình máy tính 120Hz giá tốt"},specs:[{icon:"monitor",label:"Kích thước",value:'23.8" IPS Full HD'},{icon:"cpu",label:"Tần số quét",value:"120Hz"},{icon:"gpu",label:"Tấm nền",value:"IPS, góc nhìn 178°"},{icon:"ram",label:"Dải màu",value:"95% sRGB"},{icon:"shield",label:"Kết nối",value:"HDMI + VGA"},{icon:"shield",label:"Treo tường",value:"VESA 75×75 mm"}],desc:"Màn hình ONDATA OD238120IV mang tần số quét 120Hz lên phân khúc màn hình 24 inch phổ thông, kết hợp tấm nền IPS Full HD cho màu sắc đẹp, góc nhìn rộng. Thiết kế viền mỏng, chân đế chữ V gọn gàng và khả năng treo tường VESA 75×75mm giúp máy phù hợp từ bàn làm việc gia đình đến văn phòng, phòng máy và cửa hàng.",features:["Tần số quét 120Hz, mượt hơn thấy rõ so với 60Hz","Tấm nền IPS, góc nhìn 178°","Độ phủ màu 95% sRGB, 16.7 triệu màu","Viền mỏng, VESA 75×75mm, HDMI + VGA"],techSpecs:{Model:"OD238120IV","Kích thước":"23.8 inch, tỷ lệ 16:9","Công nghệ LCD":"IPS, đèn nền DLED","Độ phân giải":"1920 × 1080 (Full HD)","Tần số quét":"120Hz","Độ phủ màu":"95% sRGB (BT.709)","Màu hiển thị":"16.7 triệu màu","Độ sáng":"250 cd/m² (tối đa)","Độ tương phản":"1000:1","Thời gian phản hồi":"14ms (Typ.)","Góc nhìn":"178° (H) / 178° (V)","Vùng hiển thị":"527.04 (H) × 296.46 (V) mm","Cổng kết nối":"Vào: VGA + HDMI; Ra: không có","Nguồn điện":"Adapter ngoài 12V/2.5A","Công suất":"Tối đa 30W; chờ < 0.5W","Nhiệt độ / độ ẩm hoạt động":"0°C ~ 40°C / 10 ~ 80% RH","Nhiệt độ / độ ẩm bảo quản":"-20°C ~ 60°C / 5 ~ 90% (không ngưng tụ)","Chân đế":"Chữ V cố định","Treo tường":"VESA 75×75mm","Kích thước sản phẩm":"539 × 153 × 407 mm","Kích thước đóng gói":"617 × 110 × 406 mm","Màu vỏ":"Đen","Đèn báo":"Xanh: đang hoạt động; đỏ: không tín hiệu hoặc chế độ chờ"},detailHtml:`
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
    `},{id:"od270100iv",cat:"monitor",name:"Màn hình ONDATA OD270100IV 27 inch IPS 100Hz Full HD",images:z,badge:"Mới",price:0,stars:5,reviews:0,seo:{title:"Màn hình ONDATA OD270100IV 27 inch IPS 100Hz Full HD",description:"Màn hình ONDATA OD270100IV 27 inch IPS Full HD 100Hz, 95% sRGB, giảm ánh sáng xanh, HDMI + VGA, tặng kèm cáp HDMI.",keywords:"màn hình ONDATA OD270100IV, màn hình 27 inch 100Hz, màn hình IPS 27 inch Full HD, màn hình máy tính 27 inch, màn hình văn phòng 27 inch, màn hình ONDATA chính hãng, màn hình HDMI VGA 27 inch"},specs:[{icon:"monitor",label:"Kích thước",value:'27" IPS Full HD'},{icon:"cpu",label:"Tần số quét",value:"100Hz"},{icon:"gpu",label:"Tấm nền",value:"IPS, góc nhìn 178°"},{icon:"ram",label:"Dải màu",value:"95% sRGB"},{icon:"shield",label:"Kết nối",value:"HDMI + VGA, tặng cáp HDMI"},{icon:"shield",label:"Treo tường",value:"VESA 75×75 mm"}],desc:"Màn hình ONDATA OD270100IV là màn hình 27 inch tấm nền IPS, độ phân giải Full HD 1920×1080, tần số quét 100Hz. Màn hình có độ phủ màu 95% sRGB, công nghệ giảm ánh sáng xanh và kết nối HDMI + VGA, phù hợp cho văn phòng, học tập, thiết kế cơ bản và giải trí hằng ngày.",features:["Tần số quét 100Hz, mượt hơn màn hình 60Hz","Tấm nền IPS, góc nhìn rộng 178°","Dải màu 95% sRGB, màn hình lớn 27 inch","HDMI + VGA, VESA 75×75mm, tặng kèm cáp HDMI"],techSpecs:{Model:"OD270100IV","Kích thước màn hình":"27 inch","Tấm nền / đèn nền":"IPS / DLED","Tỷ lệ khung hình":"16:9","Độ phân giải":"1920×1080 (Full HD)","Tần số quét":"100Hz","Độ sáng":"250 cd/m² (tối đa)","Độ tương phản":"1000:1","Thời gian phản hồi":"14ms (Typ.)","Màu hiển thị":"16.7 triệu màu","Độ phủ màu":"95% sRGB (BT.709)","Góc nhìn":"178° (H) / 178° (V)","Vùng hiển thị":"597.888 (H) × 336.312 (V) mm","Cổng vào":"HDMI + VGA","Cổng ra":"Không có","Nguồn điện":"Adapter ngoài 12V/2.5A","Công suất":"Tối đa 30W; chế độ chờ < 0.5W","Điều khiển":"1 nút điều hướng","Chân đế":"Chữ V, cố định","Chuẩn treo tường":"VESA 75×75mm","Kích thước sản phẩm":"613.3 × 153 × 441 mm","Kích thước đóng gói":"682 × 123 × 440 mm","Màu vỏ":"Đen","Nhiệt độ hoạt động":"0°C ~ 40°C","Độ ẩm hoạt động":"10% ~ 80% RH","Điều kiện lưu trữ":"-20°C ~ 60°C; độ ẩm 5% ~ 90% (không ngưng tụ)"},detailHtml:`
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
    `}];function O(t){return t?(t=t.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"),t=t.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"),t=t.replace(/ì|í|ị|ỉ|ĩ/g,"i"),t=t.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"),t=t.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"),t=t.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"),t=t.replace(/đ/g,"d"),t=t.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,"A"),t=t.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g,"E"),t=t.replace(/Ì|Í|Ị|Ỉ|Ĩ/g,"I"),t=t.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,"O"),t=t.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"U"),t=t.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,"Y"),t=t.replace(/Đ/g,"D"),t=t.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g,""),t=t.replace(/\u02C6|\u0306|\u031B/g,""),t.toLowerCase().trim()):""}function X(t){if(!t||!t.trim())return C;const n=O(t);return C.filter(e=>{const s=O(e.name),i=O(e.cat),a=e.desc?O(e.desc):"",r=e.id.toLowerCase();return s.includes(n)||i.includes(n)||r.includes(n)||a.includes(n)})}function it(t){return t&&C.find(n=>n.id===t)||null}function lt(t){return!t||t==="all"?C:C.filter(n=>n.cat===t)}function Y(t){return"Liên hệ"}function rt(t){C=Array.isArray(t)?t:[]}function ht(t,n){switch(t){case"aio":return`
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
      `}}function dt(t){switch(t){case"aio":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>';case"monitor":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg>';case"keyboard":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg>';case"mouse":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg>';case"ram":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg>';case"accessories":default:return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'}}function pt(){return`
    <section class="home-featured-section" id="featured-products">
      <div class="container">


        <!-- 6 Rows Danh Mục (Mỗi mục 1 hàng 5 sản phẩm) -->
        <div class="featured-categories-rows">
          ${K.map(n=>{const s=C.filter(i=>i.cat===n.id).slice(0,5).map(i=>{var a;return`
      <div class="product-item-card" data-id="${i.id}" data-cat="${i.cat}" style="cursor:pointer;">
        ${i.badge?`<span class="badge-tag">${i.badge}</span>`:""}
        <div class="product-thumb-container">
          ${(a=i.images)!=null&&a[0]?`<img class="product-thumb-photo" src="${i.images[0]}" alt="${String(i.name).replace(/"/g,"&quot;")}" />`:`<div class="tech-device-render">
            ${ht(i.cat,i.name)}
            <span class="device-label">${i.name.split(" ")[0]} ${i.name.split(" ")[1]||""}</span>
          </div>`}
        </div>
        <div class="product-info-box">
          <h3 class="product-name" title="${String(i.name).replace(/"/g,"&quot;")}">
            ${i.name} <span class="product-ext-icon">↗</span>
          </h3>
          <div class="product-pricing">
            <span class="current-price" style="color:#527d24;">Liên hệ</span>
          </div>
          <div class="product-stars-row">
            <span class="stars-gold">${"★".repeat(Math.floor(i.stars))}${i.stars%1>=.5?"½":""}</span>
            <span class="reviews-count">(${i.reviews})</span>
          </div>
        </div>
      </div>
    `}).join("");return`
      <!-- Row Danh mục: ${n.name} -->
      <div class="home-category-row-block" id="cat-block-${n.id}">
        <div class="section-top-bar">
          <div class="category-header-title-wrap">
            <span class="category-header-icon">${dt(n.id)}</span>
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
          ${s||'<p class="featured-empty">Sản phẩm sẽ được cập nhật.</p>'}
        </div>
      </div>
    `}).join("")}
        </div>
      </div>
    </section>
  `}function gt(){return`
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
  `}function ut(){return`
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
            <a href="#">Chính sách bảo mật</a>
            <span>|</span>
            <a href="#">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  `}function vt(t="all",n={label:"Sản phẩm",sub:"Tất cả sản phẩm chính hãng Ondata"}){const e=[{id:"aio",label:"Máy tính All-in-one",icon:mt()},{id:"monitor",label:"Màn hình",icon:ft()},{id:"keyboard",label:"Bàn phím",icon:bt()},{id:"mouse",label:"Chuột",icon:yt()},{id:"ram",label:"RAM",icon:wt()},{id:"accessories",label:"Phụ kiện",icon:kt()}],s=["Tất cả","Văn phòng","Gaming","Đồ họa","Ultrabook"],i=["Ondata","ASUS","Acer","HP","Lenovo","Dell","Khác"],a=["8GB","16GB","32GB"],r=["Còn hàng","Hết hàng","Đặt hàng"],l=lt(t),g=l.length>0?l.map((d,m)=>{var b;return`
        <div class="catalog-product-card" id="catalog-product-${d.id}" data-product-id="${d.id}" data-product-cat="${d.cat}" style="cursor:pointer;">
          ${d.badge?`<span class="badge-tag">${d.badge}</span>`:""}
          <div class="catalog-product-thumb">
            ${(b=d.images)!=null&&b[0]?`<img class="catalog-thumb-photo" src="${d.images[0]}" alt="${String(d.name).replace(/"/g,"&quot;")}" />`:`<div class="catalog-thumb-visual">
              <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="width:100%">
                <defs>
                  <linearGradient id="cg${m}" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1a2e1d"/>
                    <stop offset="100%" stop-color="#0d1a10"/>
                  </linearGradient>
                </defs>
                <rect width="160" height="110" rx="6" fill="url(#cg${m})"/>
                <ellipse cx="80" cy="55" rx="48" ry="28" fill="#7ea835" opacity=".12"/>
                <text x="80" y="60" text-anchor="middle" font-family="Outfit,sans-serif" font-weight="800" font-size="13" fill="#7ea835" opacity=".7">ONDATA</text>
              </svg>
            </div>`}
          </div>
          <div class="catalog-product-info">
            <p class="catalog-product-name">${d.name}</p>
            <div class="catalog-product-pricing">
              <span class="catalog-product-price" style="color:#527d24;">Liên hệ</span>
            </div>
            <div class="catalog-product-stars">
              <span class="stars-gold">${"★".repeat(Math.floor(d.stars))}${d.stars%1>=.5?"½":""}</span>
              <span class="reviews-count">(${d.reviews})</span>
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
              ${e.map(d=>`
                <li class="catsidebar-item">
                  <a href="/san-pham/${d.id}" class="catsidebar-link${d.id===t?" catsidebar-link--active":""}" id="cat-${d.id}" data-cat="${d.id}">
                    <span class="catsidebar-icon">${d.icon}</span>
                    <span>${d.label}</span>
                  </a>
                </li>
              `).join("")}
            </ul>
          </aside>

          <!-- ===== RIGHT CONTENT ===== -->
          <div class="catalog-content">

            <!-- CATEGORY HERO BANNER -->
            <div class="catalog-hero" id="catalog-hero">
              <div class="catalog-hero-text">
                <h1 class="catalog-hero-title">${n.label}</h1>
                <p class="catalog-hero-sub">${n.sub}</p>
              </div>
              <div class="catalog-hero-visual">
                <div class="chl-wrap">
                  <div class="chl-screen">
                    <div class="chl-glow"></div>
                    <div class="chl-logo-text">ONDATA</div>
                  </div>
                  <div class="chl-base">
                    <div class="chl-notch"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- TYPE FILTER TABS -->
            <div class="catalog-tabs" id="catalog-tabs" role="tablist">
              ${s.map((d,m)=>`
                <button class="catalog-tab${m===0?" catalog-tab--active":""}" id="tab-${m}" role="tab" data-tab="${m}">
                  ${d}
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
                    ${i.map((d,m)=>`
                      <label class="filter-checkbox" id="filter-brand-${m}">
                        <input type="checkbox" name="brand" value="${d}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${d}</span>
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
                    ${a.map((d,m)=>`
                      <label class="filter-checkbox" id="filter-ram-${m}">
                        <input type="checkbox" name="ram" value="${d}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${d}</span>
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
                    ${r.map((d,m)=>`
                      <label class="filter-checkbox" id="filter-status-${m}">
                        <input type="checkbox" name="status" value="${d}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${d}</span>
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
                  ${g}
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
  `}function mt(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>'}function ft(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg>'}function bt(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg>'}function yt(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg>'}function wt(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg>'}function kt(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'}function xt(){var d,m,b;document.querySelectorAll(".catalog-tab").forEach(v=>{v.addEventListener("click",()=>{document.querySelectorAll(".catalog-tab").forEach(h=>h.classList.remove("catalog-tab--active")),v.classList.add("catalog-tab--active")})});const t=document.getElementById("catalog-filter-toggle"),n=document.getElementById("catalog-filters"),e=()=>{n&&(n.classList.remove("show-mobile"),document.body.classList.remove("filter-open"),t&&t.classList.remove("catalog-filters--open"))};t&&n&&t.addEventListener("click",()=>{if(window.matchMedia("(max-width: 860px)").matches){const h=!n.classList.contains("show-mobile");n.classList.toggle("show-mobile",h),document.body.classList.toggle("filter-open",h),t.classList.toggle("catalog-filters--open",h)}else n.classList.toggle("filters-hidden"),t.classList.toggle("catalog-filters--open")}),(d=document.getElementById("filter-sheet-close"))==null||d.addEventListener("click",()=>{window.matchMedia("(max-width: 860px)").matches?e():n&&(n.classList.add("filters-hidden"),t==null||t.classList.remove("catalog-filters--open"))}),(m=document.getElementById("filter-apply-btn"))==null||m.addEventListener("click",e),(b=document.getElementById("filter-backdrop"))==null||b.addEventListener("click",e),document.querySelectorAll(".filter-group-title").forEach(v=>{v.addEventListener("click",()=>{const h=v.getAttribute("data-group"),o=document.getElementById(`fg-${h}`);o&&(o.classList.toggle("fg-collapsed"),v.classList.toggle("fg-title-collapsed"))})});const s=document.getElementById("filter-reset-btn");s&&s.addEventListener("click",()=>{document.querySelectorAll('.catalog-filters input[type="checkbox"]').forEach(v=>{v.checked=!1})});let i=1;const a=document.querySelectorAll(".page-btn--num"),r=document.getElementById("page-prev"),l=document.getElementById("page-next");function g(v){i=v,a.forEach(h=>{h.classList.toggle("page-btn--active",parseInt(h.dataset.page)===i)}),r&&(r.disabled=i===1),l&&(l.disabled=i===a.length)}a.forEach(v=>v.addEventListener("click",()=>g(parseInt(v.dataset.page)))),r&&r.addEventListener("click",()=>{i>1&&g(i-1)}),l&&l.addEventListener("click",()=>{i<a.length&&g(i+1)}),document.querySelectorAll(".catalog-product-card[data-product-id]").forEach(v=>{v.addEventListener("click",()=>{const h=v.dataset.productId,o=v.dataset.productCat;h&&o&&(window.location.hash=`#/san-pham/${o}/${h}`)})})}function Tt(t){const n={cpu:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>',ram:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="8" width="20" height="8" rx="1"/><path d="M6 8V6M10 8V6M14 8V6M18 8V6M6 16v2M10 16v2M14 16v2M18 16v2"/></svg>',hdd:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="12" rx="10" ry="6"/><path d="M2 12v4c0 3.31 4.48 6 10 6s10-2.69 10-6v-4"/><path d="M15 10h.01"/></svg>',monitor:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>',gpu:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 7V5M10 7V5M18 7V5M14 7V5M6 17v2M10 17v2M18 17v2M14 17v2"/></svg>',shield:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'};return n[t]||n.shield}function N(t){const n=Math.floor(t),e=t%1>=.4;let s="";for(let i=0;i<5;i++)i<n?s+='<svg class="star-icon star-full" width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>':i===n&&e?s+=`
        <svg class="star-icon star-half" width="16" height="16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stop-color="#f59e0b"/>
              <stop offset="50%" stop-color="#e5e7eb"/>
            </linearGradient>
          </defs>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half-star)"/>
        </svg>`:s+='<svg class="star-icon star-empty" width="16" height="16" viewBox="0 0 24 24" fill="#e5e7eb" stroke="#d1d5db"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';return s}function F(t=0,n="Laptop Ondata Pro 15"){switch(t){case 0:return`
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
              ${[0,1,2,3,4,5,6,7,8,9,10,11].map(s=>`
                <rect x="${s*30}" y="0" width="26" height="24" rx="3.5" fill="url(#kb-grad)" stroke="#3f5244" stroke-width="0.8"/>
              `).join("")}
            </g>
          `).join("")}

          <!-- Large trackpad -->
          <rect x="180" y="255" width="180" height="72" rx="6" fill="#c7d2cb" stroke="#8d9d93" stroke-width="1.2"/>
          <text x="270" y="295" text-anchor="middle" font-family="'Outfit',sans-serif" font-size="11" fill="#78887e" font-weight="600">Precision Touchpad</text>
        </svg>`;default:return""}}function At(t){return String(t??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function Q(t,n,e){return`<img class="${e}" src="${t}" alt="${At(n)}" />`}function Z(t,n=!1,e=null){var i;if((i=e==null?void 0:e.images)!=null&&i.length){const a=`Ảnh ${t+1}`;return`
      <button class="pd-thumb-btn pd-thumb-btn--photo${n?" pd-thumb-btn--active":""}" data-thumb="${t}" aria-label="${a}">
        <div class="pd-thumb-mini-preview">
          ${Q(e.images[t],e.name,"pd-thumb-photo")}
        </div>
        <span class="pd-thumb-caption">${a}</span>
      </button>
    `}const s=["Chính diện","Góc nghiêng","Mặt lưng","Cạnh bên","Bàn phím"];return`
    <button class="pd-thumb-btn${n?" pd-thumb-btn--active":""}" data-thumb="${t}" aria-label="${s[t]}">
      <div class="pd-thumb-mini-preview">
        ${F(t)}
      </div>
      <span class="pd-thumb-caption">${s[t]}</span>
    </button>
  `}function Bt(t){if(!t)return`
      <section class="pd-page">
        <div class="pd-container">
          <div class="pd-not-found">
            <h2>Sản phẩm không tồn tại</h2>
            <p>Vui lòng kiểm tra lại đường dẫn hoặc quay lại danh mục sản phẩm.</p>
            <a href="/san-pham/all" class="pd-btn-back">← Quay lại danh mục</a>
          </div>
        </div>
      </section>
    `;Y(t.price),t.oldPrice&&Y(t.oldPrice),t.discount||t.oldPrice&&Math.round((1-t.price/t.oldPrice)*100);const n=(t.specs||[]).map(l=>`
    <li class="pd-spec-item">
      <span class="pd-spec-icon">${Tt(l.icon)}</span>
      <span class="pd-spec-label">${l.label}:</span>
      <span class="pd-spec-val">${l.value}</span>
    </li>
  `).join(""),e=Object.entries(t.techSpecs||{}).map(([l,g])=>`
    <tr class="pd-ts-row">
      <td class="pd-ts-key">${l}</td>
      <td class="pd-ts-val">${g}</td>
    </tr>
  `).join(""),s=(t.features||[]).map(l=>`
    <li class="pd-feature-item">
      <span class="pd-check-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
      <span class="pd-feature-text">${l}</span>
    </li>
  `).join(""),i=Array.isArray(t.images)&&t.images.length>0,a=i?t.images.map((l,g)=>Z(g,g===0,t)).join(""):[0,1,2,3,4].map(l=>Z(l,l===0)).join(""),r=i?Q(t.images[0],t.name,"pd-hero-photo"):F(0,t.name);return`
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
                  ${r}
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
                  ${N(t.stars||4.5)}
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
              <h4 class="pd-trust-title">Hỗ trợ kỹ thuật 24/7</h4>
              <p class="pd-trust-sub">Tư vấn miễn phí</p>
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
                  ${s}
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
                  <div class="pd-stars-wrap">${N(t.stars||4.5)}</div>
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
                  <div class="pd-stars-wrap">${N(5)}</div>
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
                  <div class="pd-stars-wrap">${N(5)}</div>
                  <p class="pd-review-comment">Giao hàng cực kỳ nhanh, đóng gói cẩn thận có xốp chống sốc dày. Máy nhẹ hơn tưởng tượng, bàn phím gõ nảy và êm tay. Nhân viên tư vấn kỹ càng.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `}function Ct(t,n){var b,v;if(!t)return;const e=document.querySelectorAll(".pd-thumb-btn"),s=document.getElementById("pd-hero-art");e.forEach(h=>{h.addEventListener("click",()=>{const o=parseInt(h.dataset.thumb,10);e.forEach(c=>c.classList.remove("pd-thumb-btn--active")),h.classList.add("pd-thumb-btn--active"),s&&(s.style.opacity="0",s.style.transform="scale(0.96)",setTimeout(()=>{var c;s.innerHTML=(c=t.images)!=null&&c[o]?Q(t.images[o],t.name,"pd-hero-photo"):F(o,t.name),s.style.opacity="1",s.style.transform="scale(1)"},160))})});const i=document.getElementById("pd-qty-input"),a=document.getElementById("pd-qty-minus"),r=document.getElementById("pd-qty-plus");i&&a&&r&&(a.addEventListener("click",()=>{let h=parseInt(i.value,10)||1;h>1&&(i.value=h-1)}),r.addEventListener("click",()=>{let h=parseInt(i.value,10)||1;h<99&&(i.value=h+1)}),i.addEventListener("change",()=>{let h=parseInt(i.value,10)||1;h<1&&(h=1),h>99&&(h=99),i.value=h}));const l=document.getElementById("pd-btn-cart");l&&l.addEventListener("click",()=>{parseInt(i==null?void 0:i.value,10);const h=l.innerHTML;l.classList.add("pd-btn-cart--added"),l.innerHTML=`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>Đã thêm vào giỏ!</span>
      `,setTimeout(()=>{l.classList.remove("pd-btn-cart--added"),l.innerHTML=h},2e3)});const g=document.getElementById("pd-btn-buy");g&&g.addEventListener("click",()=>{parseInt(i==null?void 0:i.value,10)});const d=document.querySelectorAll(".pd-tab-btn"),m=document.querySelectorAll(".pd-panel");d.forEach(h=>{h.addEventListener("click",()=>{d.forEach(c=>{c.classList.remove("pd-tab-btn--active"),c.setAttribute("aria-selected","false")}),h.classList.add("pd-tab-btn--active"),h.setAttribute("aria-selected","true");const o=h.dataset.tab;m.forEach(c=>{const u=c.id===`pd-panel-${o}`;c.classList.toggle("pd-panel--hidden",!u)})})}),(b=document.getElementById("pd-crumb-home"))==null||b.addEventListener("click",h=>{h.preventDefault(),window.location.hash="#/"}),(v=document.getElementById("pd-crumb-cat"))==null||v.addEventListener("click",h=>{h.preventDefault(),window.location.hash=`#/san-pham/${t.cat}`})}const Mt=[{id:"all",label:"Tất cả"},{id:"buying-guide",label:"Tư vấn chọn mua"},{id:"tips",label:"Hướng dẫn sử dụng"},{id:"trends",label:"Xu hướng công nghệ"}],R=[{id:"chon-laptop-sinh-vien",featured:!0,category:"buying-guide",categoryLabel:"Tư vấn chọn mua",title:"Cách chọn laptop phù hợp cho sinh viên",date:"08/10/2025",readTime:"5 phút đọc",summary:"Tổng hợp kinh nghiệm chọn mua laptop tối ưu theo ngành học: Kinh tế, CNTT, Thiết kế đồ họa và Y dược với mức ngân sách hợp lý nhất.",content:`
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
    `}];function _(t,n=!1){if(n)return`
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
      `;default:return""}}function Ht(t="all"){const n=R.find(l=>l.featured)||R[0],e=R.filter(l=>!l.featured),s=Mt.map(l=>`
    <button 
      class="news-filter-btn${l.id===t?" news-filter-btn--active":""}" 
      data-filter="${l.id}"
      id="filter-btn-${l.id}"
    >
      ${l.label}
    </button>
  `).join(""),i=t==="all"?e:e.filter(l=>l.category===t),a=t==="all"||n.category===t,r=i.length>0?i.map(l=>`
        <article class="news-list-card" data-article-id="${l.id}" id="news-card-${l.id}">
          <div class="news-list-thumb">
            ${_(l.id,!1)}
          </div>
          <div class="news-list-content">
            <h3 class="news-list-title">${l.title}</h3>
            <div class="news-list-date">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>${l.date}</span>
            </div>
          </div>
          <div class="news-list-badge-wrap">
            <span class="news-badge news-badge--pill">${l.categoryLabel}</span>
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
          ${s}
        </div>

        <!-- 4. FEATURED HERO ARTICLE (Top Large Card) -->
        ${a?`
          <article class="news-hero-card" data-article-id="${n.id}" id="news-hero-article">
            <div class="news-hero-image-wrap">
              ${_(n.id,!0)}
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
          ${r}
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
  `}function Lt(t){var l;(l=document.getElementById("news-crumb-home"))==null||l.addEventListener("click",g=>{g.preventDefault(),window.location.hash="#/"}),document.querySelectorAll(".news-filter-btn").forEach(g=>{g.addEventListener("click",()=>{const d=g.dataset.filter;t&&t(d)})});const n=document.getElementById("news-modal"),e=document.getElementById("news-modal-body"),s=document.getElementById("news-modal-close"),i=document.getElementById("news-modal-backdrop");function a(g){const d=R.find(m=>m.id===g);!d||!n||!e||(e.innerHTML=`
      <div class="news-detail-badge">${d.categoryLabel}</div>
      <h2 class="news-detail-title">${d.title}</h2>
      <div class="news-detail-meta">
        <span>📅 ${d.date}</span>
        <span>⏱️ ${d.readTime}</span>
      </div>
      <div class="news-detail-summary">${d.summary}</div>
      <div class="news-detail-content">${d.content}</div>
    `,n.classList.add("news-modal--open"),n.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden")}function r(){n&&(n.classList.remove("news-modal--open"),n.setAttribute("aria-hidden","true"),document.body.style.overflow="")}s==null||s.addEventListener("click",r),i==null||i.addEventListener("click",r),document.querySelectorAll("[data-article-id]").forEach(g=>{g.addEventListener("click",()=>{a(g.dataset.articleId)})})}function Et(){return`
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
  `}function Dt(t){var s;(s=document.getElementById("contact-crumb-home"))==null||s.addEventListener("click",i=>{i.preventDefault(),window.location.hash="#/"});const n=document.getElementById("contact-form");n&&n.addEventListener("submit",i=>{var r,l;i.preventDefault();const a=(r=document.getElementById("contact-name"))==null?void 0:r.value;(l=document.getElementById("contact-phone"))==null||l.value,t&&t(`Cảm ơn ${a||"bạn"}! Tin nhắn liên hệ đã được gửi thành công.`),n.reset()});const e=document.getElementById("btn-partner-register");e&&e.addEventListener("click",()=>{t&&t("Cảm ơn bạn đã quan tâm hợp tác! Nhân viên Ondata sẽ liên hệ trong 24 giờ.")})}function D(t){switch(t){case"hero":return`
        <svg viewBox="0 0 540 320" xmlns="http://www.w3.org/2000/svg" class="sp-hero-svg" style="width:100%;height:100%;object-fit:cover;display:block;">
          <defs>
            <linearGradient id="sp-room" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#18241b"/>
              <stop offset="60%" stop-color="#111a14"/>
              <stop offset="100%" stop-color="#0a0f0c"/>
            </linearGradient>
            <linearGradient id="sp-table" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1e2d22"/>
              <stop offset="100%" stop-color="#121b14"/>
            </linearGradient>
            <linearGradient id="sp-scr" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#142c19"/>
              <stop offset="60%" stop-color="#2a5f36"/>
              <stop offset="100%" stop-color="#8a9b4e"/>
            </linearGradient>
            <radialGradient id="sun-window" cx="20%" cy="20%" r="80%">
              <stop offset="0%" stop-color="#8a9b4e" stop-opacity="0.15"/>
              <stop offset="60%" stop-color="#8a9b4e" stop-opacity="0.04"/>
              <stop offset="100%" stop-color="#8a9b4e" stop-opacity="0"/>
            </radialGradient>
          </defs>

          <!-- Ambient Room Background -->
          <rect width="540" height="320" fill="url(#sp-room)"/>
          <rect width="540" height="320" fill="url(#sun-window)"/>

          <!-- Plant in background -->
          <ellipse cx="110" cy="190" rx="20" ry="5" fill="#000" opacity="0.3"/>
          <polygon points="96,140 124,140 120,188 100,188" fill="#18261c" stroke="#2e4233" stroke-width="1.2"/>
          <path d="M 110 140 Q 95 90 80 80 Q 100 100 110 140" fill="#3b7240"/>
          <path d="M 110 140 Q 115 80 125 70 Q 120 105 110 140" fill="#528e4e"/>
          <path d="M 110 140 Q 130 100 145 95 Q 125 115 110 140" fill="#67a957"/>

          <!-- Table Surface -->
          <polygon points="0,185 540,185 540,320 0,320" fill="url(#sp-table)"/>
          <line x1="0" y1="185" x2="540" y2="185" stroke="rgba(138, 155, 78, 0.25)" stroke-width="1.5"/>

          <!-- Modern Laptop in Perspective -->
          <ellipse cx="320" cy="275" rx="170" ry="14" fill="#000000" opacity="0.4"/>

          <!-- Screen Lid -->
          <polygon points="210,80 430,70 455,225 235,240" fill="#1b241e" stroke="#3d5243" stroke-width="1.2"/>
          <polygon points="216,86 424,76 448,220 240,234" fill="#0b120c"/>
          <polygon points="220,90 420,80 442,214 242,228" fill="url(#sp-scr)"/>

          <text x="330" y="155" text-anchor="middle" font-family="'Outfit',sans-serif" font-weight="800" font-size="18" fill="#ffffff" letter-spacing="3" opacity="0.8" transform="rotate(-2 330 155)">ONDATA</text>

          <!-- Base Keyboard Deck -->
          <polygon points="170,250 235,240 455,225 510,250" fill="#d2ded5" stroke="#9bb1a1" stroke-width="1.2"/>
          <polygon points="160,252 505,252 485,270 175,270" fill="#bac8be"/>
          <polygon points="220,242 450,230 460,248 210,250" fill="#243026"/>
        </svg>
      `;case"shield-banner":return`
        <svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
          <defs>
            <linearGradient id="bg-sh" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#14281a"/>
              <stop offset="50%" stop-color="#24502d"/>
              <stop offset="100%" stop-color="#468848"/>
            </linearGradient>
            <radialGradient id="gl-sh" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#7ea835" stop-opacity="0.6"/>
              <stop offset="100%" stop-color="#7ea835" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="500" height="160" fill="url(#bg-sh)"/>
          <ellipse cx="250" cy="80" rx="120" ry="60" fill="url(#gl-sh)"/>
          <!-- Big Shield Icon -->
          <path d="M 250 40 Q 275 40 285 55 Q 285 95 250 120 Q 215 95 215 55 Q 225 40 250 40 Z" fill="none" stroke="#ffffff" stroke-width="4.5"/>
          <polyline points="236,78 246,88 266,66" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;case"tech-banner":return`
        <svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
          <defs>
            <linearGradient id="bg-tc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0f1f18"/>
              <stop offset="60%" stop-color="#1c3e27"/>
              <stop offset="100%" stop-color="#2d6438"/>
            </linearGradient>
          </defs>
          <rect width="500" height="160" fill="url(#bg-tc)"/>
          <!-- Circuit Lines -->
          <line x1="40" y1="40" x2="200" y2="40" stroke="#7ea835" stroke-width="1.5" opacity="0.3"/>
          <line x1="200" y1="40" x2="230" y2="70" stroke="#7ea835" stroke-width="1.5" opacity="0.3"/>
          <circle cx="40" cy="40" r="4" fill="#7ea835" opacity="0.5"/>
          <circle cx="230" cy="70" r="4" fill="#7ea835" opacity="0.5"/>
          <!-- Wrench Tool -->
          <g transform="translate(225, 45)">
            <path d="M 38 12 C 34 8 28 8 24 10 L 18 16 L 34 32 L 40 26 C 42 22 42 16 38 12 Z M 14 20 L 4 30 C 1 33 1 37 4 40 C 7 43 11 43 14 40 L 24 30 Z" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round"/>
          </g>
        </svg>
      `;case"track-banner":return`
        <svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
          <defs>
            <linearGradient id="bg-tr" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1c2d20"/>
              <stop offset="50%" stop-color="#2a4730"/>
              <stop offset="100%" stop-color="#3d6c44"/>
            </linearGradient>
          </defs>
          <rect width="500" height="160" fill="url(#bg-tr)"/>
          <!-- Isometric Cardboard Package Box -->
          <g transform="translate(220, 40)">
            <polygon points="30,10 60,25 30,40 0,25" fill="#e2c199" stroke="#b5936d" stroke-width="1.5"/>
            <polygon points="0,25 30,40 30,75 0,60" fill="#cca378" stroke="#b5936d" stroke-width="1.5"/>
            <polygon points="60,25 30,40 30,75 60,60" fill="#ba9267" stroke="#b5936d" stroke-width="1.5"/>
            <!-- Ondata tape on box -->
            <polygon points="24,13 36,19 36,43 24,37" fill="#7ea835" opacity="0.8"/>
          </g>
        </svg>
      `;case"contact-banner":return`
        <svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
          <defs>
            <linearGradient id="bg-ct" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#152b1b"/>
              <stop offset="50%" stop-color="#244d2d"/>
              <stop offset="100%" stop-color="#417947"/>
            </linearGradient>
          </defs>
          <rect width="500" height="160" fill="url(#bg-ct)"/>
          <!-- Headset Support Icon -->
          <g transform="translate(215, 38)">
            <path d="M 12 40 A 28 28 0 0 1 58 40" fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round"/>
            <rect x="6" y="36" width="10" height="22" rx="4" fill="#ffffff"/>
            <rect x="54" y="36" width="10" height="22" rx="4" fill="#ffffff"/>
            <path d="M 60 52 Q 62 68 45 70" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
            <circle cx="42" cy="70" r="3.5" fill="#7ea835"/>
          </g>
        </svg>
      `;case"privacy-banner":return`
        <svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
          <defs>
            <linearGradient id="bg-pr" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0e1f2b"/>
              <stop offset="50%" stop-color="#163942"/>
              <stop offset="100%" stop-color="#235c55"/>
            </linearGradient>
            <radialGradient id="gl-pr" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.4"/>
              <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="500" height="160" fill="url(#bg-pr)"/>
          <ellipse cx="250" cy="80" rx="100" ry="50" fill="url(#gl-pr)"/>
          <!-- Security Lock Graphic -->
          <g transform="translate(225, 42)">
            <rect x="10" y="30" width="34" height="30" rx="4" fill="#ffffff"/>
            <path d="M 17 30 L 17 18 A 10 10 0 0 1 37 18 L 37 30" fill="none" stroke="#ffffff" stroke-width="3.5"/>
            <circle cx="27" cy="43" r="3.5" fill="#163942"/>
            <line x1="27" y1="46" x2="27" y2="52" stroke="#163942" stroke-width="2.5"/>
          </g>
        </svg>
      `;default:return""}}function St(){const n=[{id:"bao-hanh",title:"Chính sách bảo hành<br>& đổi trả",desc:"Thông tin chi tiết về điều kiện, quy trình bảo hành và đổi trả sản phẩm.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>'},{id:"ky-thuat",title:"Hỗ trợ kỹ thuật",desc:"Hướng dẫn sử dụng, cài đặt, khắc phục sự cố và các yêu cầu hỗ trợ kỹ thuật.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'},{id:"tra-cuu",title:"Tra cứu đơn hàng",desc:"Kiểm tra trạng thái đơn hàng và thông tin giao hàng nhanh chóng.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'},{id:"lien-he",title:"Liên hệ hỗ trợ",desc:"Hotline, Zalo, Email và biểu mẫu liên hệ với đội ngũ hỗ trợ.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'},{id:"bao-mat",title:"Chính sách bảo mật",desc:"Cam kết bảo vệ thông tin cá nhân của khách hàng.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'}].map(e=>`
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
  `).join("");return`
    <section class="sp-page" id="sp-page">
      <div class="sp-container">

        <!-- 1. BREADCRUMB -->
        <nav class="catalog-breadcrumb sp-breadcrumb" aria-label="Breadcrumb">
          <a href="/" class="crumb-link" id="sp-crumb-home">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Hỗ trợ</span>
        </nav>

        <!-- 2. HERO SECTION (Split Left Text, Right Sunlit Laptop) -->
        <div class="sp-hero-card">
          <div class="sp-hero-left">
            <h1 class="sp-hero-title">Hỗ trợ khách hàng</h1>
            <p class="sp-hero-subtitle">
              Chúng tôi luôn sẵn sàng đồng hành, giải đáp mọi thắc mắc và hỗ trợ bạn trong suốt quá trình sử dụng sản phẩm.
            </p>
          </div>
          <div class="sp-hero-right">
            ${D("hero")}
          </div>
        </div>

        <!-- 3. FIVE SUPPORT CARDS GRID -->
        <div class="sp-cards-grid">
          ${n}
        </div>

      </div>
    </section>
  `}function $t(){return`
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
        <!-- Breadcrumb -->
        <nav class="catalog-breadcrumb sp-breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/ho-tro">Hỗ trợ</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Chính sách bảo hành & đổi trả</span>
        </nav>

        <div class="sp-sub-header">
          <h1 class="sp-sub-title">Chính sách bảo hành & đổi trả</h1>
          <p class="sp-sub-desc">Đảm bảo quyền lợi của bạn với chính sách minh bạch, rõ ràng và thuận tiện.</p>
        </div>

        <!-- Graphic Banner -->
        <div class="sp-sub-banner">
          ${D("shield-banner")}
        </div>

        <!-- Tabs Toggle -->
        <div class="sp-tab-toggle-bar">
          <button class="sp-tab-pill sp-tab-pill--active" id="btn-tab-warranty" data-tab="warranty">Bảo hành</button>
          <button class="sp-tab-pill" id="btn-tab-exchange" data-tab="exchange">Đổi trả</button>
        </div>

        <!-- Tab 1: Bảo hành -->
        <div class="sp-tab-panel" id="panel-warranty">
          <div class="sp-block">
            <h2 class="sp-block-title">1. Điều kiện bảo hành</h2>
            <ul class="sp-checklist">
              <li><span class="sp-check">✓</span> Sản phẩm còn trong thời hạn bảo hành chính hãng (12 - 36 tháng).</li>
              <li><span class="sp-check">✓</span> Có tem bảo hành nguyên vẹn, phiếu bảo hành hoặc hóa đơn mua hàng.</li>
              <li><span class="sp-check">✓</span> Lỗi phần cứng do nhà sản xuất, không phải do va đập, ngấm nước hoặc tác động bên ngoài.</li>
            </ul>
          </div>

          <div class="sp-block">
            <h2 class="sp-block-title">2. Quy trình bảo hành</h2>
            <div class="sp-steps-list">
              <div class="sp-step-item">
                <span class="sp-step-num">1</span>
                <div>
                  <strong>Liên hệ trung tâm bảo hành hoặc hotline</strong>
                  <p>Gọi <a href="tel:0867036698" style="color:inherit;font-weight:600;">0867036698</a> hoặc nhắn Zalo hỗ trợ để được nhân viên tiếp nhận và tư vấn.</p>
                </div>
              </div>
              <div class="sp-step-item">
                <span class="sp-step-num">2</span>
                <div>
                  <strong>Cung cấp thông tin sản phẩm và mô tả lỗi</strong>
                  <p>Cung cấp mã số Serial/IMEI và triệu chứng lỗi để kỹ thuật viên chuẩn bị linh kiện.</p>
                </div>
              </div>
              <div class="sp-step-item">
                <span class="sp-step-num">3</span>
                <div>
                  <strong>Nhận hướng dẫn xử lý hoặc gửi máy</strong>
                  <p>Gửi sản phẩm miễn phí qua bưu điện hoặc mang trực tiếp tới trạm bảo hành gần nhất.</p>
                </div>
              </div>
              <div class="sp-step-item">
                <span class="sp-step-num">4</span>
                <div>
                  <strong>Kiểm tra, sửa chữa và bàn giao</strong>
                  <p>Bàn giao sản phẩm hoạt động hoàn hảo trong vòng 3 - 7 ngày làm việc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 2: Đổi trả (hidden by default) -->
        <div class="sp-tab-panel sp-tab-panel--hidden" id="panel-exchange">
          <div class="sp-block">
            <h2 class="sp-block-title">1. Điều kiện đổi trả</h2>
            <ul class="sp-checklist">
              <li><span class="sp-check">✓</span> Đổi mới 1 - 1 trong vòng 7 ngày đầu nếu phát sinh lỗi từ nhà sản xuất.</li>
              <li><span class="sp-check">✓</span> Sản phẩm còn nguyên hộp, đầy đủ phụ kiện và quà tặng kèm theo.</li>
              <li><span class="sp-check">✓</span> Vỏ máy không bị trầy xước, cấn móp hay biến dạng vật lý.</li>
            </ul>
          </div>
          <div class="sp-block">
            <h2 class="sp-block-title">2. Quy trình đổi trả nhanh</h2>
            <div class="sp-steps-list">
              <div class="sp-step-item">
                <span class="sp-step-num">1</span>
                <div><strong>Kiểm tra xác nhận lỗi:</strong> Kỹ thuật viên kiểm tra máy tại chỗ trong 15 phút.</div>
              </div>
              <div class="sp-step-item">
                <span class="sp-step-num">2</span>
                <div><strong>Xuất đổi máy mới:</strong> Cấp ngay sản phẩm mới nguyên seal cùng mẫu hoặc hoàn tiền 100%.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Note Box -->
        <div class="sp-notice-box">
          <span class="sp-notice-icon">💡</span>
          <div>
            <strong>Lưu ý:</strong> Vui lòng xem chi tiết điều kiện bảo hành và đổi trả trong phiếu bảo hành đi kèm sản phẩm hoặc liên hệ hotline để được hướng dẫn chi tiết.
          </div>
        </div>

        <div class="sp-back-wrap">
          <a href="/ho-tro" class="sp-btn-back">← Quay lại danh mục hỗ trợ</a>
        </div>
      </div>
    </section>
  `}function It(){const t=[{title:"Hướng dẫn sử dụng sản phẩm",sub:"Tài liệu hướng dẫn, video minh họa",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'},{title:"Cài đặt phần mềm & driver",sub:"Tải driver, phần mềm cần thiết",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'},{title:"Khắc phục sự cố thường gặp",sub:"Các lỗi phổ biến và cách xử lý",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'},{title:"Gửi yêu cầu hỗ trợ",sub:"Điền biểu mẫu để được hỗ trợ trực tiếp",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>'}];return`
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
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
          ${D("tech-banner")}
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">Các hỗ trợ nổi bật</h2>
          <div class="sp-topics-list">
            ${t.map(n=>`
              <div class="sp-topic-card" style="cursor:pointer;">
                <div class="sp-topic-icon">${n.icon}</div>
                <div class="sp-topic-info">
                  <strong>${n.title}</strong>
                  <span>${n.sub}</span>
                </div>
                <div class="sp-topic-arrow">›</div>
              </div>
            `).join("")}
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
  `}function Ot(){return`
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
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
          ${D("track-banner")}
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
  `}function Vt(){return`
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
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
          ${D("contact-banner")}
        </div>

        <!-- Channels Grid -->
        <div class="sp-contact-grid">
          <div class="sp-ch-item">
            <div class="sp-ch-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <strong>Hotline</strong>
              <div class="sp-ch-val" style="color:#527d24;font-weight:800;font-size:1.1rem;"><a href="tel:0867036698" style="color:inherit;">0867036698</a></div>
              <small>8:00 - 22:00 (Tất cả các ngày)</small>
            </div>
          </div>

          <div class="sp-ch-item">
            <div class="sp-ch-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div>
              <strong>Zalo</strong>
              <div class="sp-ch-val">@OndataSupport</div>
              <small>Hỗ trợ trực tuyến nhanh chóng</small>
            </div>
          </div>

          <div class="sp-ch-item">
            <div class="sp-ch-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <strong>Email</strong>
              <div class="sp-ch-val">nchieu@xinchen.vn</div>
              <small>Phản hồi trong 24 giờ</small>
            </div>
          </div>

          <div class="sp-ch-item">
            <div class="sp-ch-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
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
  `}function Gt(){return`
    <section class="sp-page" id="sp-sub-page">
      <div class="sp-detail-container">
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
          ${D("privacy-banner")}
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
  `}function Nt(t=null){switch(t){case"bao-hanh":return $t();case"ky-thuat":return It();case"tra-cuu":return Ot();case"lien-he":return Vt();case"bao-mat":return Gt();default:return St()}}function Rt(t=null,n){var m;(m=document.getElementById("sp-crumb-home"))==null||m.addEventListener("click",b=>{b.preventDefault(),window.navigate?window.navigate("/"):window.location.assign("/")}),document.querySelectorAll(".sp-card[data-sub]").forEach(b=>{b.addEventListener("click",()=>{const v=b.dataset.sub;v&&(window.navigate?window.navigate(`/ho-tro/${v}`):window.location.assign(`/ho-tro/${v}`))})});const e=document.getElementById("btn-tab-warranty"),s=document.getElementById("btn-tab-exchange"),i=document.getElementById("panel-warranty"),a=document.getElementById("panel-exchange");e&&s&&i&&a&&(e.addEventListener("click",()=>{e.classList.add("sp-tab-pill--active"),s.classList.remove("sp-tab-pill--active"),i.classList.remove("sp-tab-panel--hidden"),a.classList.add("sp-tab-panel--hidden")}),s.addEventListener("click",()=>{s.classList.add("sp-tab-pill--active"),e.classList.remove("sp-tab-pill--active"),a.classList.remove("sp-tab-panel--hidden"),i.classList.add("sp-tab-panel--hidden")}));const r=document.getElementById("btn-track-submit"),l=document.getElementById("track-input"),g=document.getElementById("track-result");r&&l&&g&&r.addEventListener("click",()=>{const b=l.value.trim();if(!b){n&&n("Vui lòng nhập mã đơn hàng hoặc số điện thoại!");return}g.style.display="block",n&&n(`Đã tìm thấy thông tin đơn hàng: ${b}`)});const d=document.getElementById("sp-quick-form");d&&d.addEventListener("submit",b=>{b.preventDefault(),n&&n("Cảm ơn bạn! Yêu cầu hỗ trợ đã được gửi thành công."),d.reset()})}function qt(){return`
    <div class="about-page" id="about-page">
      <!-- HERO BANNER -->
      <section class="about-hero">
        <div class="container">
          <div class="about-hero-grid">
            <div class="about-hero-content">
              <div class="about-badge-pill">
                <span class="pulse-dot"></span>
                <span>Thương hiệu công nghệ Việt Nam</span>
              </div>
              <h1 class="about-hero-title">
                Kiến tạo tương lai công nghệ cùng <span class="highlight-text">ONDATA</span>
              </h1>
              <p class="about-hero-desc">
                ONDATA tự hào là thương hiệu tiên phong nghiên cứu, sản xuất và phân phối các giải pháp máy tính All-in-one, màn hình chuyên nghiệp, linh kiện phần cứng và hệ sinh thái phụ kiện công nghệ đạt chuẩn chất lượng quốc tế tại Việt Nam.
              </p>
              <div class="about-hero-actions">
                <a href="/san-pham/all" class="btn-about-primary">
                  <span>Khám phá sản phẩm</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="/lien-he" class="btn-about-secondary">
                  <span>Hợp tác & Đại lý</span>
                </a>
              </div>
            </div>

            <div class="about-hero-visual">
              <div class="about-visual-card">
                <div class="visual-glow"></div>
                <div class="about-brand-emblem">
                  <div class="emblem-circle">
                    <img src="/logo tach nen.png" alt="ONDATA" class="about-emblem-logo" onerror="this.onerror=null; this.src='/logo.png';" />
                  </div>
                  <div class="emblem-tag">INNOVATION & RELIABILITY</div>
                </div>
                <div class="floating-badge badge-top-right">
                  <span class="fb-icon">✓</span>
                  <div>
                    <strong>100% Chính hãng</strong>
                    <small>Tiêu chuẩn quốc tế</small>
                  </div>
                </div>
                <div class="floating-badge badge-bottom-left">
                  <span class="fb-icon">★</span>
                  <div>
                    <strong>Bảo hành 24 - 36T</strong>
                    <small>Tận nơi trên toàn quốc</small>
                  </div>
                </div>
              </div>
            </div>
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
              <div class="stat-number">24/7</div>
              <div class="stat-label">Hỗ trợ kỹ thuật</div>
              <p class="stat-sub">Đội ngũ kỹ sư phần cứng đồng hành liên tục</p>
            </div>
          </div>
        </div>
      </section>

      <!-- STORY & MISSION -->
      <section class="about-story-section">
        <div class="container">
          <div class="about-section-header">
            <span class="section-sub-label">CÂU CHUYỆN THƯƠNG HIỆU</span>
            <h2 class="section-main-title">Sứ Mệnh & Tầm Nhìn Của Ondata</h2>
            <p class="section-main-desc">
              Chúng tôi tin rằng công nghệ hiện đại phải đi liền với sự tối giản, bền bỉ và dễ tiếp cận cho mọi người dùng Việt.
            </p>
          </div>

          <div class="about-story-grid">
            <div class="story-card">
              <div class="story-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
                </svg>
              </div>
              <h3>Tầm Nhìn Chiến Lược</h3>
              <p>
                Trở thành thương hiệu công nghệ phần cứng hàng đầu tại Việt Nam và Đông Nam Á, tiên phong định hình xu hướng máy tính All-in-one tinh gọn, bền bỉ, tiết kiệm năng lượng và thân thiện với môi trường làm việc thông minh.
              </p>
            </div>

            <div class="story-card">
              <div class="story-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Sứ Mệnh Phụng Sự</h3>
              <p>
                Cung cấp hệ thống giải pháp phần cứng tối ưu chi phí đầu tư cho doanh nghiệp, cơ quan giáo dục và người dùng cá nhân. Đồng thời mang tới dịch vụ bảo hành vàng tận tâm, phản hồi nhanh chóng và minh bạch.
              </p>
            </div>

            <div class="story-card">
              <div class="story-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3>Cam Kết Chất Lượng</h3>
              <p>
                Từng sản phẩm mang thương hiệu Ondata đều trải qua quy trình kiểm thử lão hóa (Burn-in Test) nghiêm ngặt trong 72 giờ trước khi xuất xưởng, đảm bảo độ bền vượt trội và tỷ lệ lỗi kỹ thuật tiệm cận mức 0%.
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
              <h4>Đột Phá (Innovation)</h4>
              <p>Liên tục đổi mới thiết kế tinh giản, tích hợp công nghệ mới nhất vào từng dòng máy All-in-one và màn hình.</p>
            </div>
            <div class="value-item">
              <div class="value-index">02</div>
              <h4>Bền Bỉ (Durability)</h4>
              <p>Linh kiện tuyển chọn chuẩn công nghiệp, hoạt động mát mẻ và ổn định liên tục 24/7 dưới mọi điều kiện thời tiết nhiệt đới.</p>
            </div>
            <div class="value-item">
              <div class="value-index">03</div>
              <h4>Tối Ưu (Optimization)</h4>
              <p>Tối ưu hóa giữa chi phí và hiệu năng sử dụng thực tế, mang lại giá trị hoàn vốn cao nhất cho khách hàng doanh nghiệp.</p>
            </div>
            <div class="value-item">
              <div class="value-index">04</div>
              <h4>Đồng Hành (Companion)</h4>
              <p>Chính sách bảo hành tận nơi chu đáo, đổi mới nhanh chóng và luôn lắng nghe đóng góp để hoàn thiện sản phẩm.</p>
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
            <p class="section-main-desc">Từ thiết bị chính đến phụ kiện ngoại vi, Ondata mang tới góc làm việc hiện đại và đồng bộ.</p>
          </div>

          <div class="ecosystem-grid">
            <div class="ecosystem-card" onclick="window.navigate('/san-pham/aio')" style="cursor:pointer;">
              <h3>Máy tính All-in-one</h3>
              <p>Thiết kế nguyên khối sang trọng, tích hợp CPU, loa, webcam và WiFi mượt mà trong thân máy siêu mỏng.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>

            <div class="ecosystem-card" onclick="window.navigate('/san-pham/monitor')" style="cursor:pointer;">
              <h3>Màn hình Ondata</h3>
              <p>Độ phân giải 2K/4K, màn hình cong 1500R/1000R, tần số quét 100Hz – 240Hz chuẩn màu đồ họa và gaming.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>

            <div class="ecosystem-card" onclick="window.navigate('/san-pham/keyboard')" style="cursor:pointer;">
              <h3>Bàn phím cơ & Văn phòng</h3>
              <p>Switch bền bỉ 100 triệu lần nhấn, cấu trúc Gasket Mount êm ái, công nghệ từ tính Rapid Trigger thi đấu.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>

            <div class="ecosystem-card" onclick="window.navigate('/san-pham/mouse')" style="cursor:pointer;">
              <h3>Chuột quang & Không dây</h3>
              <p>Cảm biến PixArt chuẩn xác, thiết kế công thái học đứng chống mỏi cổ tay và nút bấm Silent giảm tiếng ồn.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>

            <div class="ecosystem-card" onclick="window.navigate('/san-pham/ram')" style="cursor:pointer;">
              <h3>RAM Bộ nhớ cao cấp</h3>
              <p>Chuẩn DDR4/DDR5 tốc độ cao, tản nhiệt nhôm mát lạnh, bảo hành trọn đời an tâm tuyệt đối.</p>
              <span class="eco-link">Xem danh mục →</span>
            </div>

            <div class="ecosystem-card" onclick="window.navigate('/san-pham/accessories')" style="cursor:pointer;">
              <h3>Phụ kiện công nghệ</h3>
              <p>Giá treo màn hình trợ lực khí nén, Hub chuyển đổi 8-in-1 Type-C, pad chuột XXL và giá đỡ laptop nhôm.</p>
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
  `}function Pt(){return`
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
  `}function zt(t){document.getElementById("floating-contact-widget");const n=document.getElementById("chatbox-window"),e=document.getElementById("chatbox-toggle-btn"),s=document.getElementById("chatbox-btn-close"),i=document.getElementById("chatbox-form"),a=document.getElementById("chatbox-input"),r=document.getElementById("chatbox-messages"),l=e==null?void 0:e.querySelector(".icon-chat-open"),g=e==null?void 0:e.querySelector(".icon-chat-close");if(!e||!n)return;function d(){n.classList.add("chatbox-window--active"),l&&(l.style.display="none"),g&&(g.style.display="inline-block"),setTimeout(()=>a==null?void 0:a.focus(),200)}function m(){n.classList.remove("chatbox-window--active"),l&&(l.style.display="inline-block"),g&&(g.style.display="none")}e.addEventListener("click",h=>{h.stopPropagation(),n.classList.contains("chatbox-window--active")?m():d()}),s==null||s.addEventListener("click",h=>{h.stopPropagation(),m()});function b(h,o=!0){if(!r)return;const c=document.createElement("div");c.className=`chat-msg ${o?"chat-msg--outgoing":"chat-msg--incoming"}`,c.innerHTML=`
      <div class="msg-bubble">${h}</div>
      <span class="msg-time">Vừa xong</span>
    `,r.appendChild(c),r.scrollTop=r.scrollHeight}function v(h){const o=document.createElement("div");o.className="chat-typing-indicator",o.innerHTML="<span></span><span></span><span></span>",r.appendChild(o),r.scrollTop=r.scrollHeight,setTimeout(()=>{o.remove();let c="Cảm ơn bạn đã nhắn tin! Chuyên viên Ondata đã nhận được yêu cầu và sẽ phản hồi ngay.";const u=h.toLowerCase();u.includes("all-in-one")||u.includes("aio")||u.includes("máy tính")?c='Dạ máy tính All-in-one Ondata One 24" và Pro 27" 2K hiện đang có sẵn cấu hình i5/i7 cực mạnh, bảo hành chính hãng 24-36 tháng. Quý khách vui lòng để lại SĐT hoặc gọi Hotline <strong>0867036698</strong> để được báo giá ưu đãi nhất ạ!':u.includes("màn hình")||u.includes("monitor")?c='Dạ Ondata có màn hình từ 24" IPS 100Hz đến màn hình cong 27" 165Hz và 34" Ultrawide sắc nét chuẩn màu đồ họa & gaming. Quý khách có thể xem chi tiết tại mục Sản phẩm hoặc liên hệ hotline <strong>0867036698</strong> để được hỗ trợ ạ!':u.includes("báo giá")||u.includes("đại lý")||u.includes("dự án")?c="Dạ phòng kinh doanh Ondata luôn có chính sách chiết khấu đại lý và giá dự án hấp dẫn. Vui lòng gửi email tới <strong>nchieu@xinchen.vn</strong> hoặc gọi hotline <strong>0867036698</strong> để nhận bảng báo giá ngay ạ!":(u.includes("bảo hành")||u.includes("kỹ thuật"))&&(c="Dạ sản phẩm Ondata được bảo hành chính hãng 24 đến 36 tháng (RAM bảo hành trọn đời), tiếp nhận xử lý tận nơi. Mọi sự cố kỹ thuật quý khách hãy liên hệ Hotline <strong>0867036698</strong> để được hỗ trợ tức thì!"),b(c,!1)},700)}i==null||i.addEventListener("submit",h=>{h.preventDefault();const o=a==null?void 0:a.value.trim();o&&(b(o,!0),a.value="",v(o))}),document.querySelectorAll(".chat-quick-btn").forEach(h=>{h.addEventListener("click",()=>{const o=h.dataset.query;o&&(b(o,!0),v(o))})})}const J=["monitor","cpu","gpu","ram","shield","hdd"];function jt(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Kt(t){return String(t).replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi,"").replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi,"").replace(/\son\w+\s*=\s*(['"]).*?\1/gi,"").replace(/javascript:/gi,"")}function Ft(t){const n=String(t||"").trim();return n?/<[a-z][\s\S]*>/i.test(n)?Kt(n):n.split(/\n{2,}/).map(e=>`<p>${jt(e).replace(/\n/g,"<br>")}</p>`).join(""):""}function Qt(t){const n=[];return String(t||"").split(`
`).forEach(e=>{const s=e.trim();if(!s)return;const i=s.indexOf(":");i===-1?n.push(["Thông số",s]):n.push([s.slice(0,i).trim()||"Thông số",s.slice(i+1).trim()])}),n.filter(([,e])=>e)}function Wt(t){const n={title:"",description:"",keywords:""};return String(t||"").split(`
`).forEach(e=>{const s=e.match(/^\s*(Tiêu đề SEO|Meta description|Từ khóa chính|Từ khóa phụ|Từ khóa)\s*:\s*(.*)$/i);if(!s)return;const i=s[1].toLowerCase(),a=s[2].trim();i.includes("tiêu")?n.title=a:i.includes("meta")?n.description=a:i.includes("phụ")?n.keywords=n.keywords?`${n.keywords}, ${a}`:a:(i.includes("chính")||i.startsWith("từ khóa"))&&(n.keywords=n.keywords?`${a}, ${n.keywords}`:a)}),n}function Ut(t){return(Array.isArray(t)?t:[]).map(n=>String(n||"").trim()).filter(n=>/^https?:\/\//i.test(n)||n.startsWith("/"))}function Xt(t){const n=Qt(t.specs),e={};n.forEach(([a,r],l)=>{const g=e[a]?`${a} (${l+1})`:a;e[g]=r});const s=Wt(t.notes),i=Ut(t.images);return{id:t.id,cat:t.category,stt:Number(t.stt)||0,name:t.name,images:i,badge:"Mới",price:0,stars:5,reviews:0,seo:{title:s.title||t.name,description:s.description||t.shortDesc||"",keywords:s.keywords||""},specs:n.slice(0,6).map(([a,r],l)=>({icon:J[l%J.length],label:a,value:r})),desc:t.shortDesc||"",features:[],techSpecs:e,detailHtml:Ft(t.detail),notes:t.notes||""}}function Yt(t){return(Array.isArray(t)?t:[]).filter(e=>!e.hidden).map(Xt).sort((e,s)=>e.stt-s.stt||e.name.localeCompare(s.name,"vi"))}function q(t){rt(Yt(t))}async function Zt(){try{const t=await fetch("/data/catalog.json",{cache:"no-store"});if(!t.ok)return null;const n=await t.json();return Array.isArray(n)?(q(n),n):null}catch{return null}}function _t(t){var n;return((n=K.find(e=>e.id===t))==null?void 0:n.name)||t}function Jt(t,n){const e=O(t).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"san-pham";let s=e,i=2;const a=new Set(n.map(r=>r.id));for(;a.has(s);)s=`${e}-${i}`,i+=1;return s}const H="ondata-admin-token",I={id:"",stt:1,category:"monitor",name:"",specs:"",notes:"",shortDesc:"",detail:"",images:[]};function x(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function V(t){return{"Content-Type":"application/json",Authorization:`Bearer ${t}`}}async function E(t,n={}){const e=await fetch(t,n),s=await e.text();let i=null;try{i=s?JSON.parse(s):null}catch{i=null}if(!i||typeof i!="object"||Array.isArray(i)){const a=new Error("Hosting chưa nhận đủ file lưu sản phẩm. Hãy tải lên thư mục api và data.");throw a.status=e.ok?502:e.status,a}if(i.ok!==!0){const a=new Error(i.message||"Không thực hiện được");throw a.status=e.ok?400:e.status,a}return i}function tn(){return'<div id="admin-root" class="admin-page"></div>'}function nn(){const t=document.getElementById("admin-root");if(!t)return;const n=sessionStorage.getItem(H);if(!n){L(t);return}t.innerHTML='<p class="admin-status">Đang mở trang quản trị...</p>',E("/api/session.php",{headers:V(n)}).then(()=>st(t,n)).catch(()=>{sessionStorage.removeItem(H),L(t,"Phiên đăng nhập đã hết. Hãy đăng nhập lại.")})}function L(t,n=""){t.innerHTML=`
    <div class="admin-login">
      <div class="admin-login-panel">
        <form class="admin-login-form" id="admin-login-form">
          <h2>Đăng nhập</h2>
          ${n?`<p class="admin-alert">${x(n)}</p>`:""}
          <label>Tài khoản<input name="username" autocomplete="username" required></label>
          <label>Mật khẩu<input name="password" type="password" autocomplete="current-password" required></label>
          <button class="admin-btn" type="submit">Vào trang quản trị</button>
          <a class="admin-back" href="/">Về trang chủ</a>
        </form>
      </div>
    </div>
  `,t.querySelector("#admin-login-form").addEventListener("submit",async e=>{e.preventDefault();const s=e.currentTarget,i=s.querySelector("button");i.disabled=!0;try{const a=await E("/api/login.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s.username.value.trim(),password:s.password.value})});sessionStorage.setItem(H,a.token),st(t,a.token)}catch(a){L(t,a.message)}})}async function st(t,n){let e=[];try{e=await(await fetch("/data/catalog.json",{cache:"no-store"})).json(),Array.isArray(e)||(e=[])}catch{e=[]}let s={...I,stt:M(e)},i="",a="visible";const r=()=>{var b,v,h;const l=[...e].sort((o,c)=>Number(o.stt)-Number(c.stt)||o.name.localeCompare(c.name,"vi")),g=l.filter(o=>!o.hidden),d=l.filter(o=>o.hidden),m=(o,c,u)=>o.length?o.map(p=>{var A;return`
      <li class="admin-list-item ${p.id===s.id?"admin-list-item--active":""}">
        <div class="admin-list-thumb">
          ${(A=p.images)!=null&&A[0]?`<img src="${x(p.images[0])}" alt="">`:"<span>Ảnh</span>"}
        </div>
        <div class="admin-list-copy">
          <strong>${x(p.name)}</strong>
          <span>${x(_t(p.category))}</span>
        </div>
        <div class="admin-row-actions">
          <button type="button" data-edit="${x(p.id)}">Sửa</button>
          <button type="button" data-hide="${x(p.id)}">${u}</button>
          <button type="button" class="admin-btn--danger" data-delete="${x(p.id)}">Xóa</button>
        </div>
      </li>
    `}).join(""):`<li class="admin-empty">${c}</li>`;t.innerHTML=`
      <div class="admin-app">
        <aside class="admin-side">
          <div>
            <p class="admin-brand">ONDATA</p>
          </div>
          <nav class="admin-nav">
            <button type="button" class="admin-nav-item ${a==="visible"?"admin-nav-item--active":""}" data-section="visible">
              <span>Sản phẩm đang hiển thị</span>
              <em>${g.length}</em>
            </button>
            <button type="button" class="admin-nav-item ${a==="hidden"?"admin-nav-item--active":""}" data-section="hidden">
              <span>Sản phẩm đang ẩn</span>
              <em>${d.length}</em>
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
              <h1>${a==="add"?s.id?"Sửa sản phẩm":"Thêm sản phẩm mới":a==="hidden"?"Sản phẩm đang ẩn":"Sản phẩm đang hiển thị"}</h1>
            </div>
            <div class="admin-stat">${g.length} đang hiện · ${d.length} đang ẩn</div>
          </header>
          ${i?`<p class="admin-alert ${i.ok?"admin-alert--ok":""}">${x(i.text)}</p>`:""}
          <div class="admin-workspace">
            ${a==="add"?`
            <form class="admin-card" id="admin-product-form">
              <div class="admin-card-head">
                <h2>${s.id?"Sửa sản phẩm":"Thêm sản phẩm mới"}</h2>
              </div>

              <section class="admin-section">
                <h3>Thông tin chính</h3>
                <label>Danh mục
                  <select name="category">
                    ${K.map(o=>`
                      <option value="${o.id}" ${o.id===s.category?"selected":""}>${x(o.name)}</option>
                    `).join("")}
                  </select>
                </label>
                <label>Tên sản phẩm<input name="name" required value="${x(s.name)}" placeholder="Màn hình ONDATA ..."></label>
              </section>

              <section class="admin-section">
                <h3>Nội dung</h3>
                <label>Thông số kỹ thuật
                  <textarea name="specs" rows="7" placeholder="Mỗi dòng một thông số. Ví dụ:&#10;Kích thước: 23.8 inch&#10;Tần số quét: 120Hz">${x(s.specs)}</textarea>
                </label>
                <label>Lưu ý khi đăng sản phẩm
                  <textarea name="notes" rows="5" placeholder="Tiêu đề SEO: ...&#10;Meta description: ...&#10;Từ khóa chính: ...&#10;Từ khóa phụ: ...">${x(s.notes)}</textarea>
                </label>
                <label>Mô tả ngắn<textarea name="shortDesc" rows="3">${x(s.shortDesc)}</textarea></label>
                <label>Mô tả chi tiết<textarea name="detail" rows="8" placeholder="Xuống dòng để tách đoạn. Một dòng trống để tách đoạn mới.">${x(s.detail)}</textarea></label>
              </section>

              <section class="admin-section">
                <h3>Ảnh sản phẩm</h3>
                <div class="admin-photos" id="admin-photos">
                  ${(s.images||[]).map((o,c)=>`
                    <figure class="admin-photo">
                      <img src="${x(o)}" alt="Ảnh ${c+1}">
                      <button type="button" data-remove-image="${c}">Gỡ</button>
                      ${c===0?'<span class="admin-photo-badge">Ảnh bìa</span>':""}
                    </figure>
                  `).join("")}
                </div>
                <label class="admin-upload">
                  Chọn ảnh từ máy
                  <input id="admin-image-input" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple>
                </label>
                <p class="admin-hint">Chọn nhiều ảnh một lần. Ảnh đầu tiên là ảnh bìa. Mỗi ảnh tối đa 8MB.</p>
              </section>

              <div class="admin-form-actions">
                <button class="admin-btn" type="submit">${s.id?"Lưu thay đổi":"Đăng sản phẩm"}</button>
                <button class="admin-btn admin-btn--ghost" type="button" id="admin-reset">Làm mới form</button>
              </div>
            </form>
            `:`
            <section class="admin-card admin-list-card">
              <ul class="admin-list">
                ${a==="hidden"?m(d,"Chưa có sản phẩm đang ẩn.","Hiện"):m(g,"Chưa có sản phẩm đang hiển thị.","Ẩn")}
              </ul>
            </section>
            `}
          </div>
        </main>
      </div>
    `,t.querySelectorAll("[data-section]").forEach(o=>{o.addEventListener("click",()=>{a=o.dataset.section,a==="add"&&(s={...I,stt:M(e)}),i="",r()})}),t.querySelector("#admin-logout").addEventListener("click",()=>{sessionStorage.removeItem(H),L(t)}),(b=t.querySelector("#admin-image-input"))==null||b.addEventListener("change",async o=>{const c=[...o.target.files];if(!c.length)return;s=tt(t,s);const u=t.querySelector(".admin-hint");u&&(u.textContent="Đang tải ảnh lên...");try{for(const p of c){if(s.images.length>=12)break;const A=await en(p),B=await E("/api/upload.php",{method:"POST",headers:V(n),body:JSON.stringify({dataUrl:A})});s.images.push(B.image)}i={ok:!0,text:"Đã tải ảnh lên. Bấm lưu sản phẩm để cập nhật website."},r()}catch(p){if(p.status===401){sessionStorage.removeItem(H),L(t,p.message);return}i={ok:!1,text:p.message},r()}}),t.querySelectorAll("[data-remove-image]").forEach(o=>{o.addEventListener("click",()=>{s=tt(t,s),s.images.splice(Number(o.dataset.removeImage),1),r()})}),(v=t.querySelector("#admin-reset"))==null||v.addEventListener("click",()=>{s={...I,stt:M(e)},i="",r()}),(h=t.querySelector("#admin-product-form"))==null||h.addEventListener("submit",async o=>{var S;o.preventDefault();const c=o.currentTarget,u=c.name.value.trim();if(!u)return;const p={id:s.id||Jt(u,e),stt:s.id&&Number(s.stt)||M(e),category:c.category.value,name:u,specs:c.specs.value,notes:c.notes.value,shortDesc:c.shortDesc.value,detail:c.detail.value,images:s.images||[],hidden:!!s.hidden},A=s.id?e.map(T=>T.id===s.id?p:T):[...e,p],B=c.querySelector('button[type="submit"]');B.disabled=!0;try{const T=await E("/api/catalog.php",{method:"POST",headers:V(n),body:JSON.stringify({rows:A})});if(!Array.isArray(T.rows))throw new Error(T.message||"Không nhận được danh sách sản phẩm từ hosting.");e=T.rows,q(e),a=p.hidden?"hidden":"visible",s={...I,stt:M(e)},i={ok:!0,text:"Đã lưu. Sản phẩm đã được cập nhật trên website."},r()}catch(T){if(T.status===401){sessionStorage.removeItem(H),L(t,T.message);return}B.disabled=!1;let f=t.querySelector(".admin-alert");f||(f=document.createElement("p"),f.className="admin-alert",(S=t.querySelector(".admin-top"))==null||S.insertAdjacentElement("afterend",f)),f.classList.remove("admin-alert--ok"),f.textContent=T.message}}),t.querySelectorAll("[data-edit]").forEach(o=>{o.addEventListener("click",()=>{const c=e.find(u=>u.id===o.dataset.edit);c&&(s={...c,images:[...c.images||[]]},i="",a="add",r())})}),t.querySelectorAll("[data-hide]").forEach(o=>{o.addEventListener("click",async()=>{const c=e.find(p=>p.id===o.dataset.hide);if(!c)return;const u=e.map(p=>p.id===c.id?{...p,hidden:!p.hidden}:p);try{const p=await E("/api/catalog.php",{method:"POST",headers:V(n),body:JSON.stringify({rows:u})});if(!Array.isArray(p.rows))throw new Error(p.message||"Không nhận được danh sách sản phẩm từ hosting.");e=p.rows,q(e),s.id===c.id&&(s={...s,hidden:!c.hidden}),a=c.hidden?"visible":"hidden",i={ok:!0,text:c.hidden?"Đã hiện sản phẩm trên website.":"Đã ẩn sản phẩm khỏi website."},r()}catch(p){if(p.status===401){sessionStorage.removeItem(H),L(t,p.message);return}i={ok:!1,text:p.message},r()}})}),t.querySelectorAll("[data-delete]").forEach(o=>{o.addEventListener("click",async()=>{const c=e.find(p=>p.id===o.dataset.delete);if(!c||!window.confirm(`Xóa sản phẩm "${c.name}"?`))return;const u=e.filter(p=>p.id!==c.id);try{const p=await E("/api/catalog.php",{method:"POST",headers:V(n),body:JSON.stringify({rows:u})});if(!Array.isArray(p.rows))throw new Error(p.message||"Không nhận được danh sách sản phẩm từ hosting.");e=p.rows,q(e),s.id===c.id&&(s={...I,stt:M(e)}),i={ok:!0,text:"Đã xóa sản phẩm."},r()}catch(p){i={ok:!1,text:p.message},r()}})})};r()}function tt(t,n){const e=t.querySelector("#admin-product-form");return e?{...n,category:e.category.value,name:e.name.value,specs:e.specs.value,notes:e.notes.value,shortDesc:e.shortDesc.value,detail:e.detail.value}:n}function en(t){return new Promise((n,e)=>{if(!/^image\/(jpeg|png|webp|gif)$/.test(t.type)){e(new Error("Chỉ nhận ảnh JPG, PNG, WEBP hoặc GIF"));return}if(t.size>8e6){e(new Error("Mỗi ảnh tối đa 8MB"));return}const s=new FileReader;s.onload=()=>n(s.result),s.onerror=()=>e(new Error("Không đọc được ảnh trên máy")),s.readAsDataURL(t)})}function M(t){return t.reduce((e,s)=>Math.max(e,Number(s.stt)||0),0)+1}let at=0,nt="all";const j={aio:{label:"Máy tính All-in-one",sub:"Thiết kế tinh gọn, hiệu năng vượt trội all-in-one"},monitor:{label:"Màn hình",sub:"Hiển thị sắc nét, công nghệ bảo vệ mắt đỉnh cao"},keyboard:{label:"Bàn phím",sub:"Cảm giác gõ êm ái, switch bền bỉ, thiết kế tinh xảo"},mouse:{label:"Chuột",sub:"Độ nhạy chuẩn xác, công thái học vừa vặn lòng bàn tay"},ram:{label:"RAM",sub:"Tốc độ vượt trội, đa nhiệm bền bỉ"},accessories:{label:"Phụ kiện",sub:"Hoàn thiện góc làm việc và trải nghiệm đỉnh cao"},laptop:{label:"Máy tính All-in-one",sub:"Thiết kế tinh gọn, hiệu năng vượt trội all-in-one"},desktop:{label:"Máy tính All-in-one",sub:"Thiết kế tinh gọn, hiệu năng vượt trội all-in-one"},all:{label:"Sản phẩm",sub:"Tất cả sản phẩm chính hãng Ondata"}};function P(t){let n=document.querySelector(".toast-container");n||(n=document.createElement("div"),n.className="toast-container",document.body.appendChild(n));const e=document.createElement("div");e.className="toast-alert",e.innerHTML=`<span style="color:#7ea835;font-weight:700;">✓</span> <span>${t}</span>`,n.appendChild(e),setTimeout(()=>{e.style.opacity="0",e.style.transform="translateY(10px)",setTimeout(()=>e.remove(),300)},3e3)}function sn(){if(window.location.hash&&window.location.hash.startsWith("#/")){const n=window.location.hash.slice(1);window.history.replaceState({},"",n)}let t=window.location.pathname.replace(/\/+$/,"")||"/";if(t.startsWith("/dist")&&(t=t.replace(/^\/dist/,"")||"/"),t.startsWith("/san-pham")){const n=t.split("/").filter(Boolean),e=n[1]||"all",s=n[2]||null;if(s)return{page:"detail",cat:e,id:s};if(e!=="all"){const i=it(e);if(i)return{page:"detail",cat:i.cat,id:i.id}}return{page:"catalog",cat:e}}return t.startsWith("/ve-ondata")||t.startsWith("/gioi-thieu")?{page:"about"}:t.startsWith("/tin-tuc")?{page:"news"}:t.startsWith("/lien-he")?{page:"contact"}:t.startsWith("/ho-tro")?{page:"support",sub:t.split("/").filter(Boolean)[1]||null}:t.startsWith("/admin")?{page:"admin"}:{page:"home"}}function k(t){const n=t.startsWith("#/")?t.slice(1):t;window.location.pathname!==n&&window.history.pushState({},"",n),G(),window.scrollTo({top:0,behavior:"smooth"})}window.navigate=k;function an(){return`
    ${ct()}
    ${pt()}
    ${gt()}
  `}function on(){document.querySelectorAll(".sidebar-item a[data-cat]").forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),k(`/san-pham/${n.dataset.cat}`)})}),document.querySelectorAll('a[href="#featured-products"], a[href="/san-pham/all"]').forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),k("/san-pham/all")})});const t=document.getElementById("newsletter-form");t&&(t.onsubmit=n=>{n.preventDefault();const e=document.getElementById("newsletter-email");e!=null&&e.value&&(P(`Đã đăng ký nhận tin thành công: ${e.value}`),e.value="")}),document.querySelectorAll(".product-item-card").forEach(n=>{n.onclick=()=>{const e=n.dataset.id,s=n.dataset.cat;k(e&&s?`/san-pham/${s}/${e}`:"/san-pham/all")}})}function cn(t){Ct(t),document.querySelectorAll(".catsidebar-link[data-cat]").forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),k(`/san-pham/${n.dataset.cat}`)})})}function ln(t){const n=j[t]||j.all;return vt(t,n)}function rn(t){xt(),document.querySelectorAll(".catsidebar-link[data-cat]").forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),k(`/san-pham/${n.dataset.cat}`)})})}function hn(){const t=document.getElementById("nav-hamburger"),n=document.getElementById("nav-menu");if(t&&n){const o=c=>{n.classList.toggle("mobile-open",c),t.classList.toggle("is-open",c),document.body.classList.toggle("menu-open",c);const u=document.getElementById("navbar");c?(document.documentElement.style.setProperty("--mobile-nav-h",`${u?u.offsetHeight:120}px`),document.body.appendChild(n)):u&&n.parentElement===document.body&&u.querySelector(".nav-container").appendChild(n)};t.onclick=()=>o(!n.classList.contains("mobile-open")),n.querySelectorAll("a").forEach(c=>{c.addEventListener("click",()=>o(!1))})}const e=document.getElementById("nav-search-icon");e&&(e.onclick=()=>{const o=document.getElementById("search-input");o&&o.focus()});const s=document.getElementById("search-input"),i=document.getElementById("search-dropdown"),a=document.querySelector(".search-btn");if(s&&i){let o=[],c=-1;const u=f=>{switch(f){case"aio":case"laptop":case"desktop":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>';case"monitor":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg>';case"keyboard":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg>';case"mouse":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg>';case"ram":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg>';case"accessories":default:return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'}},p=f=>{var w;return((w=j[f])==null?void 0:w.label)||"Sản phẩm"},A=f=>{const w=(f||"").trim();w?(o=X(w),c=-1,o.length>0?i.innerHTML=`
            <div class="search-header-label">Tìm thấy ${o.length} sản phẩm</div>
            ${o.map((y,$)=>`
              <div class="search-item" data-id="${y.id}" data-cat="${y.cat}" data-idx="${$}">
                <span class="search-item-icon">${u(y.cat)}</span>
                <div class="search-item-details">
                  <span class="search-item-name">${y.name}</span>
                  <span class="search-item-cat">${y.badge?`<span class="search-badge">${y.badge}</span>`:""} ${p(y.cat)}</span>
                </div>
                <span class="search-item-price">Liên hệ</span>
              </div>
            `).join("")}
          `:i.innerHTML=`
            <div class="search-empty">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.4">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <span>Không tìm thấy sản phẩm cho "<strong>${w}</strong>"</span>
            </div>
          `):(o=C.slice(0,5),c=-1,i.innerHTML=`
          <div class="search-header-label">Sản phẩm gợi ý</div>
          ${o.map((y,$)=>`
            <div class="search-item" data-id="${y.id}" data-cat="${y.cat}" data-idx="${$}">
              <span class="search-item-icon">${u(y.cat)}</span>
              <div class="search-item-details">
                <span class="search-item-name">${y.name}</span>
                <span class="search-item-cat">${y.badge?`<span class="search-badge">${y.badge}</span>`:""} ${p(y.cat)}</span>
              </div>
              <span class="search-item-price">Liên hệ</span>
            </div>
          `).join("")}
        `),i.querySelectorAll(".search-item").forEach(y=>{y.addEventListener("mousedown",$=>{$.preventDefault();const W=y.dataset.id,U=y.dataset.cat;W&&U&&B(U,W)})})},B=(f,w)=>{i.classList.remove("show"),s.blur(),k(`/san-pham/${f}/${w}`)},S=()=>{if(c>=0&&o[c]){const y=o[c];B(y.cat,y.id);return}const f=s.value.trim();if(!f){o.length>0&&B(o[0].cat,o[0].id);return}const w=X(f);w.length>0?B(w[0].cat,w[0].id):P(`Không tìm thấy sản phẩm phù hợp với "${f}"`)};s.addEventListener("focus",()=>{A(s.value),i.classList.add("show")}),s.addEventListener("input",()=>{A(s.value),i.classList.add("show")}),s.addEventListener("keydown",f=>{const w=i.querySelectorAll(".search-item");f.key==="ArrowDown"?(f.preventDefault(),w.length>0&&(c=(c+1)%w.length,T(w))):f.key==="ArrowUp"?(f.preventDefault(),w.length>0&&(c=(c-1+w.length)%w.length,T(w))):f.key==="Enter"?(f.preventDefault(),S()):f.key==="Escape"&&i.classList.remove("show")});const T=f=>{f.forEach((w,y)=>{w.classList.toggle("search-item--active",y===c),y===c&&w.scrollIntoView({block:"nearest"})})};a&&a.addEventListener("click",f=>{f.preventDefault(),S()}),document.addEventListener("click",f=>{!s.contains(f.target)&&!i.contains(f.target)&&!(a!=null&&a.contains(f.target))&&i.classList.remove("show")})}const r=document.getElementById("back-to-top");window.addEventListener("scroll",()=>{r&&r.classList.toggle("visible",window.scrollY>300)}),r&&(r.onclick=()=>window.scrollTo({top:0,behavior:"smooth"}));const l=document.getElementById("menu-home");l&&l.addEventListener("click",o=>{o.preventDefault(),k("/")});const g=document.getElementById("menu-about");g&&g.addEventListener("click",o=>{o.preventDefault(),k("/ve-ondata")});const d=document.getElementById("menu-products");d&&d.addEventListener("click",o=>{o.preventDefault(),k("/san-pham/all")});const m=document.getElementById("menu-news");m&&m.addEventListener("click",o=>{o.preventDefault(),k("/tin-tuc")});const b=document.getElementById("menu-contact");b&&b.addEventListener("click",o=>{o.preventDefault(),k("/lien-he")});const v=document.getElementById("menu-support");v&&v.addEventListener("click",o=>{o.preventDefault(),k("/ho-tro")});const h=document.getElementById("cart-badge");h&&(h.textContent=at)}const et={title:"Ondata Việt Nam – Hiệu Năng Vượt Trội Cho Mọi Nhu Cầu",description:"Ondata Việt Nam - Máy tính xách tay, máy tính để bàn, màn hình, linh kiện và phụ kiện công nghệ chính hãng Onda."};function dn(t){var s,i,a;document.title=((s=t==null?void 0:t.seo)==null?void 0:s.title)||et.title;const n=document.querySelector('meta[name="description"]');n&&n.setAttribute("content",((i=t==null?void 0:t.seo)==null?void 0:i.description)||et.description);let e=document.querySelector('meta[name="keywords"]');(a=t==null?void 0:t.seo)!=null&&a.keywords?(e||(e=document.createElement("meta"),e.setAttribute("name","keywords"),document.head.appendChild(e)),e.setAttribute("content",t.seo.keywords)):e&&e.remove()}function G(){var b,v,h,o,c,u;const t=document.querySelector("#app");if(!t)return;const n=sn(),e=n.page==="home",s=n.page==="about",i=n.page==="catalog",a=n.page==="detail",r=n.page==="news",l=n.page==="contact",g=n.page==="support",d=n.page==="admin";if(document.body.classList.add("theme-onda-dark"),d){document.title="Quản trị sản phẩm | Ondata",t.innerHTML=tn(),nn();return}let m=null;a&&(m=it(n.id)),dn(a?m:null),t.innerHTML=`
    ${ot(at)}
    <main id="main-content">
      ${e?an():""}
      ${s?qt():""}
      ${i?ln(n.cat):""}
      ${a?Bt(m):""}
      ${r?Ht(nt):""}
      ${l?Et():""}
      ${g?Nt(n.sub):""}
    </main>
    ${ut()}
    ${Pt()}
    <button class="back-to-top" id="back-to-top" aria-label="Lên đầu trang">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
  `,window.scrollTo({top:0}),hn(),zt(),e&&on(),i&&rn(n.cat),a&&cn(m),r&&Lt(p=>{nt=p,G()}),l&&Dt(P),g&&Rt(n.sub,P),(b=document.getElementById("menu-home"))==null||b.classList.toggle("active",e),(v=document.getElementById("menu-about"))==null||v.classList.toggle("active",s),(h=document.getElementById("menu-products"))==null||h.classList.toggle("active",i||a),(o=document.getElementById("menu-news"))==null||o.classList.toggle("active",r),(c=document.getElementById("menu-contact"))==null||c.classList.toggle("active",l),(u=document.getElementById("menu-support"))==null||u.classList.toggle("active",g)}window.addEventListener("popstate",G);window.addEventListener("hashchange",G);document.addEventListener("click",t=>{const n=t.target.closest("a");if(!n)return;const e=n.getAttribute("href");if(e){if(e.startsWith("#")&&!e.startsWith("#/")){const s=document.querySelector(e);s&&(t.preventDefault(),s.scrollIntoView({behavior:"smooth"}));return}if(e.startsWith("/")&&!e.startsWith("//")){t.preventDefault(),k(e);return}if(e.startsWith("#/")){t.preventDefault(),k(e.slice(1));return}}});Zt().finally(G);
