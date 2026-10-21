(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function V(n=0){return`
    <header class="navbar" id="navbar">
      <div class="nav-container">
        <!-- Top Row: Logo, Search Bar, Icons -->
        <div class="nav-top">
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
            <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
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
          <a href="#promo-banner" class="nav-menu-link" id="menu-promo">Khuyến mãi</a>
          <a href="/tin-tuc" class="nav-menu-link" id="menu-news">Tin tức</a>
          <a href="/lien-he" class="nav-menu-link" id="menu-contact">Liên hệ</a>
          <a href="/ho-tro" class="nav-menu-link" id="menu-support">Hỗ trợ</a>
        </nav>
      </div>
    </header>
  `}function U(){return`
    <section class="home-top-section">
      <div class="container">
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
  `}const j=[{id:"aio",name:"Máy tính All-in-one",icon:"aio",desc:"Máy tính tất cả trong một tinh gọn, mạnh mẽ"},{id:"monitor",name:"Màn hình",icon:"monitor",desc:"Hiển thị sắc nét, tần số quét cao, bảo vệ mắt"},{id:"keyboard",name:"Bàn phím",icon:"keyboard",desc:"Bàn phím cơ & công thái học gõ êm mượt"},{id:"mouse",name:"Chuột",icon:"mouse",desc:"Chuột quang học, wireless độ nhạy cao"},{id:"ram",name:"RAM",icon:"ram",desc:"Bộ nhớ DDR4/DDR5 tốc độ cao, đa nhiệm tối ưu"},{id:"accessories",name:"Phụ kiện",icon:"accessories",desc:"Giá treo, hub chuyển đổi, lót chuột cao cấp"}],k=[{id:"aio-one-24",cat:"aio",name:"Máy tính All-in-one Ondata",badge:"Bán chạy",price:1399e4,oldPrice:1549e4,discount:10,stars:4.8,reviews:38,specs:[{icon:"monitor",label:"Màn hình",value:'23.8" FHD IPS viền siêu mỏng'},{icon:"cpu",label:"CPU",value:"Intel Core i5-12400 (6N/12L)"},{icon:"ram",label:"RAM",value:"16GB DDR4 3200MHz"},{icon:"hdd",label:"Ổ cứng",value:"SSD NVMe 512GB PCIe"},{icon:"gpu",label:"Card đồ họa",value:"Intel UHD Graphics 730"},{icon:"shield",label:"Bảo hành",value:"24 tháng tận nơi"}],desc:'Máy tính All-in-one Ondata One 24" mang đến giải pháp tối ưu cho không gian làm việc hiện đại. Tích hợp đầy đủ CPU, loa âm thanh nổi, webcam bảo mật và kết nối WiFi 6 ngay trong thân máy thanh mảnh.',features:["Thiết kế nguyên khối All-in-one giấu dây gọn gàng",'Màn hình 23.8" FHD IPS tràn viền 3 cạnh, góc nhìn 178°',"Tích hợp Camera Full HD có nắp gạt bảo mật vật lý","Loa kép Stereo tích hợp âm thanh rõ ràng cho hội họp"],techSpecs:{"Kích thước màn hình":"23.8 inch IPS Full HD (1920 × 1080), 75Hz, Anti-glare",CPU:"Intel Core i5-12400 (6 nhân 12 luồng, xung nhịp tối đa 4.40GHz)",RAM:"16GB DDR4 3200MHz (2 khe RAM, hỗ trợ tối đa 64GB)","Ổ cứng":'SSD M.2 NVMe 512GB PCIe Gen 3 (hỗ trợ nâng cấp thêm 2.5" SATA)',"Card đồ họa":"Intel UHD Graphics 730","Camera & Loa":"Webcam 2.0MP 1080p có nắp gạt, Loa kép Stereo 2× 3W","Kết nối":"4× USB 3.0, 2× USB 2.0, 1× HDMI Out, 1× RJ45 LAN Gigabit, Audio Jack 3.5mm","Không dây":"WiFi 6 Dual-Band + Bluetooth 5.2","Phụ kiện kèm theo":"Bộ bàn phím & chuột không dây Ondata đồng bộ","Bảo hành":"24 tháng chính hãng Ondata"}},{id:"aio-pro-27",cat:"aio",name:"Máy tính All-in-one Ondata",badge:"Cao cấp",price:2199e4,oldPrice:245e5,discount:10,stars:4.9,reviews:29,specs:[{icon:"monitor",label:"Màn hình",value:'27" 2K QHD IPS 100Hz'},{icon:"cpu",label:"CPU",value:"Intel Core i7-13700 (16N/24L)"},{icon:"ram",label:"RAM",value:"32GB DDR5 5200MHz"},{icon:"hdd",label:"Ổ cứng",value:"SSD NVMe 1TB Gen 4"},{icon:"gpu",label:"Card đồ họa",value:"Intel UHD Graphics 770"},{icon:"shield",label:"Bảo hành",value:"36 tháng chính hãng"}],desc:'Ondata Pro 27" 2K là mẫu All-in-one đầu bảng dành cho doanh nghiệp và nhà quản lý. Sức mạnh vi xử lý Core i7 thế hệ 13 kết hợp màn hình 27 inch 2K siêu sắc nét mang lại trải nghiệm đỉnh cao.',features:['Màn hình 27" 2K QHD 100Hz chuẩn màu 100% sRGB',"Vi xử lý Core i7-13700 mạnh mẽ xử lý mọi tác vụ phân tích dữ liệu và thiết kế","RAM 32GB DDR5 thế hệ mới đa nhiệm cực nhanh","Chân đế hợp kim nhôm sang trọng nâng hạ và xoay độ nghiêng linh hoạt"],techSpecs:{"Kích thước màn hình":"27 inch IPS QHD (2560 × 1440), 100Hz, 100% sRGB, 350 nits",CPU:"Intel Core i7-13700 (16 nhân, 24 luồng, Turbo Boost 5.20GHz, 30MB Cache)",RAM:"32GB DDR5 5200MHz (tối đa 64GB)","Ổ cứng":"SSD NVMe PCIe 4.0 1TB tốc độ đọc 5000MB/s",Camera:"Pop-up Camera 5MP AI Tracking, Mic lọc ồn đa hướng","Cổng kết nối":"1× USB-C PD/DP, 4× USB 3.2 Gen 2, 1× HDMI 2.0 In, 1× HDMI Out, RJ45 2.5Gbps","Không dây":"WiFi 6E, Bluetooth 5.3","Bảo hành":"36 tháng chính hãng"}},{id:"aio-touch-24",cat:"aio",name:"Máy tính All-in-one Ondata",badge:"Mới",price:165e5,oldPrice:182e5,discount:9,stars:4.7,reviews:19,specs:[{icon:"monitor",label:"Màn hình",value:'23.8" FHD Cảm ứng 10 điểm'},{icon:"cpu",label:"CPU",value:"Intel Core i5-13400 (10N/16L)"},{icon:"ram",label:"RAM",value:"16GB DDR4 3200MHz"},{icon:"hdd",label:"Ổ cứng",value:"SSD NVMe 512GB"},{icon:"gpu",label:"Card đồ họa",value:"Intel Iris Xe / UHD 730"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:'Ondata Touch 24" trang bị màn hình cảm ứng điện dung 10 điểm mượt mà, kính cường lực chống chói. Lý tưởng cho quầy thu ngân, thuyết trình, phòng họp và thiết kế tương tác trực tiếp.',features:["Màn hình cảm ứng 10 điểm chạm siêu nhạy, hỗ trợ bút Stylus","Kính cường lực 7H chống trầy xước và bám vân tay","Chân đế có thể gập ngửa 60 độ thuận tiện vẽ phác thảo","Cấu hình Core i5 thế hệ 13 mượt mà mọi ứng dụng đồ họa 2D"],techSpecs:{"Màn hình":'23.8" IPS FHD Cảm ứng đa điểm, kính cường lực bảo vệ',CPU:"Intel Core i5-13400 (10 nhân, 16 luồng, 4.60GHz)",RAM:"16GB DDR4 3200MHz","Ổ cứng":"SSD NVMe 512GB M.2 PCIe","Cổng giao tiếp":"USB-C, USB 3.2, HDMI In/Out, LAN Gigabit","Bảo hành":"24 tháng"}},{id:"aio-slim-22",cat:"aio",name:"Máy tính All-in-one Ondata",badge:"Tiết kiệm",price:999e4,oldPrice:112e5,discount:11,stars:4.6,reviews:42,specs:[{icon:"monitor",label:"Màn hình",value:'21.5" FHD IPS góc rộng'},{icon:"cpu",label:"CPU",value:"Intel Core i3-12100 (4N/8L)"},{icon:"ram",label:"RAM",value:"8GB DDR4 3200MHz"},{icon:"hdd",label:"Ổ cứng",value:"SSD NVMe 256GB"},{icon:"gpu",label:"Card đồ họa",value:"Intel UHD Graphics 730"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Mẫu All-in-one văn phòng nhỏ gọn, giá thành tối ưu cho trường học, cơ quan và văn phòng kế toán. Thiết kế siêu mỏng tiết kiệm diện tích tối đa trên bàn làm việc.",features:["Thân máy siêu mỏng chỉ 12mm tại điểm mỏng nhất","Tiêu thụ điện năng chỉ bằng 40% máy tính để bàn truyền thống","Vận hành êm ái, độ ồn dưới 20dB","Trọn bộ đã gồm bàn phím & chuột Ondata văn phòng"],techSpecs:{"Màn hình":'21.5" IPS Full HD (1920 × 1080), 75Hz, Anti-Flicker',CPU:"Intel Core i3-12100 (4 nhân 8 luồng, xung nhịp 4.30GHz)",RAM:"8GB DDR4 (nâng cấp tối đa 32GB)","Ổ cứng":"SSD M.2 NVMe 256GB","Kết nối":"WiFi Dual Band, Bluetooth 5.0, 4× USB, HDMI, LAN","Bảo hành":"24 tháng"}},{id:"aio-creator-32",cat:"aio",name:"Máy tính All-in-one Ondata",badge:"Đồ họa",price:369e5,oldPrice:399e5,discount:8,stars:5,reviews:15,specs:[{icon:"monitor",label:"Màn hình",value:'31.5" 4K UHD 100% DCI-P3'},{icon:"cpu",label:"CPU",value:"Intel Core i9-13900 (24N/32L)"},{icon:"ram",label:"RAM",value:"64GB DDR5 5600MHz"},{icon:"hdd",label:"Ổ cứng",value:"SSD NVMe 2TB PCIe 4.0"},{icon:"gpu",label:"Card đồ họa",value:"NVIDIA RTX 4060 8GB GDDR6"},{icon:"shield",label:"Bảo hành",value:"36 tháng"}],desc:'Trạm làm việc All-in-one siêu khủng Ondata Creator 32" 4K dành riêng cho nhà dựng phim 4K, đồ họa 3D và kiến trúc sư. Màn hình 4K HDR rực rỡ tích hợp GPU RTX 4060 rời.',features:["Màn hình 32 inch 4K Ultra HD đạt chuẩn điện ảnh 98% DCI-P3 Delta E < 1.5","Card đồ họa rời NVIDIA RTX 4060 8GB hỗ trợ Ray Tracing và AI DLSS 3","Hệ thống tản nhiệt buồng hơi Vapor Chamber kép mát mẻ tuyệt đối","Âm thanh 4 loa vòm chuẩn Dolby Audio"],techSpecs:{"Màn hình":'31.5" IPS 4K (3840 × 2160), HDR600, 10-bit màu 1.07 tỷ màu',CPU:"Intel Core i9-13900 (24 nhân, 32 luồng, Turbo 5.60GHz)",GPU:"NVIDIA GeForce RTX 4060 8GB GDDR6",RAM:"64GB DDR5 5600MHz","Ổ cứng":"SSD NVMe PCIe Gen 4 2TB","Cổng giao tiếp":"Thunderbolt 4, HDMI 2.1, DisplayPort 1.4, SD 4.0 Card Reader, LAN 2.5G","Bảo hành":"36 tháng"}},{id:"monitor-27-curved",cat:"monitor",name:"Màn hình Ondata",badge:"Bán chạy",price:549e4,oldPrice:62e5,discount:11,stars:4.9,reviews:64,specs:[{icon:"monitor",label:"Kích thước",value:'27" độ cong 1500R'},{icon:"gpu",label:"Độ phân giải",value:"2K QHD 2560×1440"},{icon:"cpu",label:"Tần số quét",value:"165Hz siêu mượt"},{icon:"shield",label:"Thời gian đáp ứng",value:"1ms MPRT"},{icon:"ram",label:"Tấm nền",value:"Fast VA cao cấp"},{icon:"shield",label:"Bảo hành",value:"36 tháng"}],desc:'Màn hình cong Ondata 27" 165Hz bao trọn tầm nhìn với góc cong 1500R hoàn hảo. Tần số quét 165Hz cùng độ phân giải 2K sắc nét mang lại trải nghiệm chiến game và xem phim ngoạn mục.',features:["Độ cong 1500R ôm trọn góc nhìn tự nhiên của mắt","Độ phân giải 2K QHD sắc nét hơn 77% so với chuẩn Full HD","165Hz + 1ms loại bỏ hoàn toàn hiện tượng bóng mờ (ghosting)","Hỗ trợ công nghệ đồng bộ AMD FreeSync & NVIDIA G-Sync Compatible"],techSpecs:{"Kích thước":"27 inch cong 1500R","Độ phân giải":"QHD 2560 × 1440 (2K)","Tấm nền":"Fast VA góc nhìn 178°/178°","Tần số quét":"165Hz (DisplayPort) / 144Hz (HDMI)","Thời gian phản hồi":"1ms MPRT","Độ sáng & Tương phản":"350 nits, tương phản tĩnh 3000:1","Cổng kết nối":"2× HDMI 2.0, 1× DisplayPort 1.4, Audio 3.5mm","Bảo hành":"36 tháng đổi mới năm đầu"}},{id:"monitor-24-ips",cat:"monitor",name:"Màn hình Ondata",badge:"Văn phòng",price:279e4,oldPrice:319e4,discount:13,stars:4.8,reviews:82,specs:[{icon:"monitor",label:"Kích thước",value:'23.8" IPS viền mỏng'},{icon:"gpu",label:"Độ phân giải",value:"FHD 1920×1080"},{icon:"cpu",label:"Tần số quét",value:"100Hz bảo vệ mắt"},{icon:"shield",label:"Màu sắc",value:"99% sRGB chuẩn màu"},{icon:"ram",label:"Công nghệ",value:"Lọc ánh sáng xanh Low Blue"},{icon:"shield",label:"Bảo hành",value:"36 tháng"}],desc:"Mẫu màn hình văn phòng tiêu chuẩn với tấm nền IPS góc nhìn rộng, tần số quét 100Hz dịu mắt hơn hẳn màn 60Hz thông thường. Viền mỏng 3 cạnh tối ưu ghép đa màn hình.",features:["Tấm nền IPS hiển thị màu sắc trung thực 99% sRGB","Tần số quét 100Hz giúp cuộn trang và làm việc không mỏi mắt","Công nghệ Flicker-Free và lọc ánh sáng xanh chứng nhận TÜV Rheinland","Hỗ trợ ngàm VESA 75×75mm tiêu chuẩn"],techSpecs:{"Kích thước":"23.8 inch IPS","Độ phân giải":"Full HD 1920 × 1080","Tần số quét":"100Hz","Thời gian đáp ứng":"4ms GtG","Cổng kết nối":"1× HDMI 1.4, 1× VGA, 1× Audio Out","Bảo hành":"36 tháng"}},{id:"monitor-27-4k",cat:"monitor",name:"Màn hình Ondata",badge:"Chuyên gia",price:849e4,oldPrice:95e5,discount:11,stars:5,reviews:31,specs:[{icon:"monitor",label:"Kích thước",value:'27" IPS 4K UHD'},{icon:"gpu",label:"Độ phân giải",value:"3840×2160 4K"},{icon:"cpu",label:"Màu sắc",value:"100% sRGB, 95% DCI-P3"},{icon:"ram",label:"Cổng sạc",value:"USB-C PD 65W sạc nhanh"},{icon:"shield",label:"Chuẩn màu",value:"Delta E < 2 cân màu sẵn"},{icon:"shield",label:"Bảo hành",value:"36 tháng"}],desc:"Màn hình đồ họa cao cấp 27 inch 4K với cổng kết nối Type-C truyền hình ảnh và sạc nhanh 65W cho laptop chỉ với 1 sợi cáp duy nhất. Chân đế công thái học xoay dọc 90 độ.",features:["Độ phân giải 4K UHD với mật độ điểm ảnh 163 PPI chi tiết sắc sảo","Cân màu sẵn tại nhà máy với Delta E < 2, chuẩn màu đồ họa","Cổng Type-C công suất 65W sạc trực tiếp cho Macbook / Laptop","Chân đế điều chỉnh độ cao, xoay ngang dọc 90° và nghiêng linh hoạt"],techSpecs:{"Kích thước":"27 inch IPS 4K (3840 × 2160)","Độ sáng":"400 nits, chuẩn VESA DisplayHDR 400","Độ sâu màu":"10-bit (8-bit + FRC), 1.07 tỷ màu","Cổng kết nối":"1× USB-C (DP Alt, PD 65W), 2× HDMI 2.0, 1× DP 1.4, 2× USB Hub","Bảo hành":"36 tháng"}},{id:"monitor-gaming-25",cat:"monitor",name:"Màn hình Ondata",badge:"Esports",price:499e4,oldPrice:56e5,discount:11,stars:4.9,reviews:47,specs:[{icon:"monitor",label:"Kích thước",value:'24.5" Fast IPS Esports'},{icon:"gpu",label:"Độ phân giải",value:"FHD 1920×1080"},{icon:"cpu",label:"Tần số quét",value:"240Hz siêu tốc"},{icon:"shield",label:"Thời gian đáp ứng",value:"0.5ms GtG cực nhanh"},{icon:"ram",label:"Công nghệ",value:"G-Sync Compatible"},{icon:"shield",label:"Bảo hành",value:"36 tháng"}],desc:"Vũ khí cho game thủ FPS với kích thước chuẩn giải đấu 24.5 inch, tấm nền Fast IPS 240Hz và độ trễ 0.5ms cho phản xạ bắn súng tức thì không độ trễ.",features:["Tần số quét 240Hz đem lại lợi thế khung hình vượt trội","Thời gian đáp ứng 0.5ms loại bỏ hoàn toàn vệt mờ chuyển động","Kích thước 24.5 inch tối ưu tầm mắt game thủ Valorant, CS2","Chân đế chữ V kim loại vững chắc, có lỗ luồn dây gọn gàng"],techSpecs:{"Kích thước":"24.5 inch Fast IPS","Độ phân giải":"FHD 1920 × 1080","Tần số quét":"240Hz","Thời gian phản hồi":"0.5ms GtG","Cổng kết nối":"2× HDMI 2.0, 1× DisplayPort 1.4, Audio 3.5mm","Bảo hành":"36 tháng"}},{id:"monitor-ultrawide-34",cat:"monitor",name:"Màn hình Ondata",badge:"Mới",price:999e4,oldPrice:115e5,discount:13,stars:5,reviews:23,specs:[{icon:"monitor",label:"Kích thước",value:'34" tỉ lệ 21:9 cong 1000R'},{icon:"gpu",label:"Độ phân giải",value:"WQHD 3440×1440"},{icon:"cpu",label:"Tần số quét",value:"165Hz mượt mà"},{icon:"shield",label:"Độ cong",value:"1000R sâu chuẩn mắt người"},{icon:"ram",label:"Màu sắc",value:"HDR400, 95% DCI-P3"},{icon:"shield",label:"Bảo hành",value:"36 tháng"}],desc:"Màn hình siêu rộng tỉ lệ 21:9 tương đương không gian 2 màn hình ghép lại, không viền ngăn cách. Hoàn hảo cho làm việc đa nhiệm nhiều cửa sổ, biên tập timeline video và trải nghiệm game nhập vai.",features:["Không gian hiển thị rộng hơn 33% so với màn hình 16:9 truyền thống","Độ cong 1000R sâu nhất thị trường mang lại cảm giác bao bọc hoàn toàn","Hỗ trợ chế độ chia màn hình PIP/PBP từ 2 nguồn máy tính khác nhau","Tích hợp loa ngoài âm thanh nổi sống động"],techSpecs:{"Kích thước":"34 inch Ultrawide (21:9), độ cong 1000R","Độ phân giải":"UWQHD 3440 × 1440","Tần số quét":"165Hz","Cổng kết nối":"2× DP 1.4, 2× HDMI 2.0, Audio Out, USB Hub","Bảo hành":"36 tháng"}},{id:"keyboard-k108-rgb",cat:"keyboard",name:"Bàn phím Ondata",badge:"Bán chạy",price:119e4,oldPrice:139e4,discount:14,stars:4.8,reviews:55,specs:[{icon:"keyboard",label:"Layout",value:"Fullsize 108 phím đầy đủ"},{icon:"cpu",label:"Switch",value:"Ondata Custom Red/Brown Switch"},{icon:"gpu",label:"Đèn nền",value:"LED RGB 16.8 triệu màu 18 hiệu ứng"},{icon:"shield",label:"Keycap",value:"PBT Doubleshot chống mờ chữ"},{icon:"ram",label:"Tính năng",value:"Hotswap 5-pin thay switch nóng"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Bàn phím cơ Ondata K108 sở hữu layout Fullsize đầy đủ cụm phím số tiện lợi cho công việc văn phòng lẫn gaming. Tính năng Hotswap cho phép tùy biến switch dễ dàng không cần hàn mạch.",features:["Mạch xuôi Hotswap 5-pin tương thích mọi loại switch Cherry/Gateron","Keycap PBT Doubleshot đúc 2 lớp bền bỉ trọn đời không bóng nhờn","Lót sẵn foam tiêu âm PCB & đáy cho âm gõ đầm chắc, triệt tiêu tiếng rỗng","Núm xoay kim loại điều chỉnh âm lượng và độ sáng LED tiện lợi"],techSpecs:{Layout:"108 phím Fullsize","Kết nối":"Dây cáp bện Type-C có thể tháo rời",Switch:"Ondata Custom Linear/Tactile (độ bền 60 triệu lần nhấn)","Đèn LED":"RGB Per-key tùy chỉnh nhiều chế độ","Trọng lượng":"1.15 kg đầm tay chống trượt","Bảo hành":"24 tháng"}},{id:"keyboard-k87-wireless",cat:"keyboard",name:"Bàn phím Ondata",badge:"Mới",price:149e4,oldPrice:175e4,discount:15,stars:4.9,reviews:41,specs:[{icon:"keyboard",label:"Layout",value:"TKL 87 phím nhỏ gọn"},{icon:"cpu",label:"Kết nối",value:"3 chế độ: 2.4G / BT 5.0 / Dây Type-C"},{icon:"gpu",label:"Pin",value:"4000mAh dùng đến 200 giờ"},{icon:"ram",label:"Cấu trúc",value:"Gasket Mount êm ái"},{icon:"shield",label:"Hệ điều hành",value:"Tương thích Windows / macOS"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Bàn phím cơ không dây 3 chế độ kết nối Ondata K87 sở hữu cấu trúc Gasket Mount cao cấp cho cảm giác gõ êm mượt và âm thanh thock trầm ấm. Pin trâu 4000mAh đồng hành nhiều tuần làm việc.",features:["Kết nối cùng lúc 3 thiết bị Bluetooth, chuyển đổi nhanh bằng phím tắt","Cấu trúc Gasket Mount đàn hồi giảm áp lực lên các đầu ngón tay","Switch đã được lube sẵn (Pre-lubed) từ nhà máy siêu mượt mà","Có gạt chuyển đổi layout tương thích hoàn hảo phím Mac và Win"],techSpecs:{Layout:"TKL 87 phím (Tenkeyless)","Dung lượng pin":"4000mAh Li-ion sạc qua cổng Type-C","Thời lượng sử dụng":"Lên đến 200 giờ (tắt LED) / 35 giờ (bật LED)","Độ trễ không dây":"1ms ở chế độ Receiver 2.4GHz","Bảo hành":"24 tháng"}},{id:"keyboard-k68-compact",cat:"keyboard",name:"Bàn phím Ondata",badge:"Nhỏ gọn",price:89e4,oldPrice:105e4,discount:15,stars:4.7,reviews:62,specs:[{icon:"keyboard",label:"Layout",value:"68 phím Mini tiết kiệm 40% diện tích"},{icon:"cpu",label:"Switch",value:"Ondata Blue/Red Switch"},{icon:"gpu",label:"Đèn nền",value:"Rainbow RGB 12 chế độ"},{icon:"shield",label:"Trọng lượng",value:"Siêu nhẹ chỉ 580g dễ bỏ balo"},{icon:"ram",label:"Cáp kết nối",value:"Cáp Type-C tháo rời"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Thiết kế layout 68 phím giữ lại cụm phím mũi tên thiết yếu nhưng tiết kiệm tối đa diện tích trên bàn làm việc, cho góc di chuột chơi game bắn súng rộng rãi thoải mái.",features:["Gọn gàng tiện lợi bỏ balo mang theo đi làm, đi học","Giữ lại hàng phím mũi tên và Del/PgUp/PgDn tiện ích","Cáp Type-C tháo rời tiện lợi khi di chuyển","Độ bền phím nhấn lên tới 50 triệu lần"],techSpecs:{Layout:"68 phím compact","Kích thước":"310 × 100 × 38 mm","Trọng lượng":"580g","Kết nối":"USB Type-C","Bảo hành":"24 tháng"}},{id:"keyboard-office-silent",cat:"keyboard",name:"Bàn phím Ondata",badge:"Siêu êm",price:49e4,oldPrice:59e4,discount:17,stars:4.6,reviews:73,specs:[{icon:"keyboard",label:"Cấu trúc",value:"Phím cắt kéo Scissor-switch êm ái"},{icon:"cpu",label:"Độ mỏng",value:"Thân kim loại mỏng chỉ 6mm"},{icon:"gpu",label:"Kết nối",value:"Không dây Wireless 2.4GHz + BT"},{icon:"shield",label:"Độ ồn",value:"Gần như triệt tiêu hoàn toàn tiếng ồn"},{icon:"ram",label:"Pin",value:"Pin sạc Type-C dùng 3 tháng"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Bàn phím văn phòng phím phẳng phong cách thời thượng với cơ chế Scissor-switch tương tự bàn phím laptop cao cấp. Không gây tiếng ồn, tạo môi trường làm việc tập trung tuyệt đối.",features:["Cấu trúc phím cắt kéo trợ lực đồng đều gõ cực nhạy và êm","Bề mặt kim loại phay xước sang trọng, chống bám vân tay","Tích hợp pin sạc tiện lợi, không cần thay pin tiểu rời","Phím chức năng Multimedia truy cập nhanh âm nhạc, email"],techSpecs:{"Độ dày":"Chỉ 6mm tại điểm mỏng nhất","Cơ chế phím":"Scissor Keycap thấp",Pin:"500mAh sạc Type-C","Bảo hành":"24 tháng"}},{id:"keyboard-he-magnetic",cat:"keyboard",name:"Bàn phím Ondata",badge:"Esports",price:239e4,oldPrice:279e4,discount:14,stars:5,reviews:18,specs:[{icon:"keyboard",label:"Công nghệ",value:"Switch từ tính Hall Effect không tiếp điểm"},{icon:"cpu",label:"Rapid Trigger",value:"Nhận phím tức thì 0.1mm - 4.0mm"},{icon:"gpu",label:"Polling Rate",value:"8000Hz (0.125ms phản hồi)"},{icon:"shield",label:"Độ bền",value:"100 triệu lần bấm không hao mòn"},{icon:"ram",label:"Vỏ case",value:"Nhôm CNC anode nguyên khối"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Đỉnh cao bàn phím gaming thi đấu với công nghệ cảm biến từ Hall Effect. Cho phép chỉnh điểm nhận phím chính xác từng 0.1mm cùng tính năng Rapid Trigger ngắt phím tức thì khi nhả tay.",features:["Rapid Trigger cho phép bấm liên thanh và dừng di chuyển counter-strafe tức thì","Tần số quét 8000Hz phản hồi nhanh gấp 8 lần phím cơ thông thường","Vỏ hợp kim nhôm CNC đầm chắc, âm thanh gõ đanh gọn sắc sảo","Phần mềm Ondata Hub điều chỉnh độ nhạy từng phím độc lập"],techSpecs:{"Loại switch":"Magnetic Hall Effect Switches","Hành trình nhận phím":"Tùy chỉnh 0.1mm – 4.0mm (bước nhảy 0.1mm)","Tần số gửi tín hiệu":"8000Hz (Polling rate 0.125ms)","Bảo hành":"24 tháng"}},{id:"mouse-m100-wireless",cat:"mouse",name:"Chuột Ondata",badge:"Bán chạy",price:29e4,oldPrice:35e4,discount:17,stars:4.8,reviews:95,specs:[{icon:"mouse",label:"Kết nối",value:"2.4GHz Nano + Bluetooth 5.2"},{icon:"cpu",label:"Độ phân giải",value:"Tùy chỉnh 1000 - 1600 - 2400 DPI"},{icon:"shield",label:"Nút bấm",value:"Silent Click êm ái giảm 90% tiếng ồn"},{icon:"ram",label:"Pin",value:"Pin sạc Type-C dùng 60 ngày"},{icon:"monitor",label:"Khoảng cách",value:"Kết nối ổn định 10m"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Chuột không dây quốc dân Ondata M100 sở hữu thiết kế mỏng nhẹ đối xứng, nút bấm Silent Click không phát ra tiếng lách cách làm phiền người xung quanh. Kết nối linh hoạt qua Bluetooth và đầu thu USB.",features:["Nút bấm tĩnh âm Silent Switch êm ru trong không gian yên tĩnh","Hỗ trợ chuyển đổi nhanh giữa 2 thiết bị (Laptop & PC)","Cổng sạc Type-C tiện lợi không cần mua pin tiểu thay thế","Thiết kế đối xứng vừa vặn cho cả người thuận tay trái và phải"],techSpecs:{"Cảm biến":"Quang học cao cấp",DPI:"1000 / 1600 / 2400 DPI","Số nút bấm":"4 nút (Trái, Phải, Con lăn, Nút DPI)",Pin:"Li-Polymer 500mAh sạc lại","Trọng lượng":"75g siêu nhẹ","Bảo hành":"24 tháng"}},{id:"mouse-m600-gaming",cat:"mouse",name:"Chuột Ondata",badge:"Gaming",price:89e4,oldPrice:109e4,discount:18,stars:4.9,reviews:53,specs:[{icon:"mouse",label:"Cảm biến",value:"PixArt PAW3395 đỉnh cao"},{icon:"cpu",label:"Độ nhạy",value:"Lên đến 26.000 DPI, 650 IPS"},{icon:"shield",label:"Switch",value:"Huano Blue Shell Pink Dot 80 triệu click"},{icon:"ram",label:"Kết nối",value:"3 chế độ: Type-C / 2.4G / Bluetooth"},{icon:"gpu",label:"Trọng lượng",value:"59g công thái học cầm chắc tay"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Trang bị mắt đọc PixArt PAW3395 hàng đầu hiện nay, Ondata M600 mang lại độ chính xác từng điểm ảnh và tracking hoàn hảo khi flick chuột tốc độ cao trong các tựa game esports.",features:["Cảm biến PAW3395 không gia tốc, độ chính xác tuyệt đối 99.8%","Switch Huano tuổi thọ 80 triệu lần nhấn, nảy giòn đanh","Con lăn TTC Gold bọc cao su chống trượt bền bỉ","Trọng lượng nhẹ 59g giúp cổ tay linh hoạt không mỏi khi chơi game lâu"],techSpecs:{"Cảm biến":"PixArt PAW3395 Optical Sensor","DPI tối đa":"26.000 DPI","Gia tốc & Tốc độ":"50G / 650 IPS","Polling Rate":"1000Hz (1ms)","Bảo hành":"24 tháng"}},{id:"mouse-m350-ergo",cat:"mouse",name:"Chuột Ondata",badge:"Công thái học",price:59e4,oldPrice:69e4,discount:14,stars:4.7,reviews:38,specs:[{icon:"mouse",label:"Thiết kế",value:"Góc nghiêng 57° bảo vệ cổ tay"},{icon:"cpu",label:"Kết nối",value:"Không dây Dual-Mode BT & 2.4G"},{icon:"shield",label:"DPI",value:"4 mức: 800 - 1200 - 1600 - 2400 DPI"},{icon:"ram",label:"Tính năng",value:"Nút Forward / Backward bên hông"},{icon:"monitor",label:"Bề mặt",value:"Phủ nhung mịn chống mồ hôi tay"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Chuột công thái học đứng Ondata M350 được nghiên cứu góc nghiêng sinh học 57 độ giúp cổ tay đặt ở tư thế tự nhiên nhất, giải phóng áp lực lên ống cổ tay và ngăn ngừa hội chứng đau cổ tay văn phòng.",features:["Giảm 70% áp lực cơ cẳng tay so với chuột phẳng truyền thống","Hỗ trợ đệm ngón tay cái và các phím duyệt trang web nhanh","Tích hợp pin sạc lithium bền bỉ sạc nhanh qua cổng Type-C","Phù hợp cho dân văn phòng, kế toán và lập trình viên làm việc 8-10h/ngày"],techSpecs:{"Góc nghiêng":"57 độ công thái học","Số nút bấm":"6 nút bấm đa chức năng",Pin:"Lithium 600mAh sạc lại","Bảo hành":"24 tháng"}},{id:"mouse-m800-ultralight",cat:"mouse",name:"Chuột Ondata",badge:"Mới",price:129e4,oldPrice:149e4,discount:13,stars:4.9,reviews:27,specs:[{icon:"mouse",label:"Trọng lượng",value:"Siêu nhẹ chỉ 49g không đục lỗ"},{icon:"cpu",label:"Cảm biến",value:"PAW3395 26K DPI"},{icon:"shield",label:"Polling Rate",value:"Hỗ trợ 4000Hz (0.25ms)"},{icon:"ram",label:"Feet chuột",value:"100% PTFE bo cong mép lướt êm"},{icon:"gpu",label:"Kết nối",value:"Wireless 2.4G không dây độ trễ siêu thấp"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Được tối ưu trọng lượng đỉnh cao chỉ 49g nguyên khối kín hoàn toàn, hỗ trợ Polling Rate lên đến 4KHz cho độ mượt mà tối đa trên các màn hình tần số quét 240Hz/360Hz.",features:["Trọng lượng kỷ lục 49 gram lướt như bay trên mặt pad","Hỗ trợ 4000Hz Polling Rate phản hồi siêu tốc","Feet chuột chất liệu Virgin PTFE 100% lướt nhẹ không ma sát","Dây sạc Paracord siêu mềm không vướng víu khi vừa sạc vừa dùng"],techSpecs:{"Trọng lượng":"49 ± 2 gram","Cảm biến":"PixArt PAW3395 (26000 DPI, 650 IPS)","Polling Rate":"1000Hz / 4000Hz (qua 4K Dongle)","Bảo hành":"24 tháng"}},{id:"mouse-m220-office",cat:"mouse",name:"Chuột Ondata",badge:"Bền bỉ",price:15e4,oldPrice:19e4,discount:21,stars:4.7,reviews:120,specs:[{icon:"mouse",label:"Kết nối",value:"Dây USB cắm là chạy Plug & Play"},{icon:"cpu",label:"Độ phân giải",value:"1600 DPI ổn định mọi bề mặt"},{icon:"shield",label:"Độ bền",value:"10 triệu lần bấm bền bỉ"},{icon:"ram",label:"Dây cáp",value:"Dài 1.5m bọc cao su dẻo chống đứt gãy"},{icon:"monitor",label:"Tương thích",value:"Windows, Mac, Linux, ChromeOS"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Lựa chọn tin cậy cho phòng máy trường học, công ty và quầy dịch vụ. Bền bỉ nồi đồng cối đá, cắm cổng USB nhận ngay lập tức không cần cài đặt phần mềm.",features:["Thiết kế công thái học vừa vặn lòng bàn tay, không mỏi khi cầm lâu","Con lăn cao su có khía rãnh cuộn trang chuẩn xác","Chống chịu va đập tốt, độ bền cao qua nhiều năm sử dụng","Bảo hành chính hãng 24 tháng 1 đổi 1 nhanh chóng"],techSpecs:{"Cổng kết nối":"USB-A 2.0","Độ dài dây":"1.5 mét",DPI:"1600 DPI","Trọng lượng":"85g","Bảo hành":"24 tháng"}},{id:"ram-ddr5-16",cat:"ram",name:"RAM Ondata",badge:"Bán chạy",price:139e4,oldPrice:159e4,discount:13,stars:5,reviews:58,specs:[{icon:"ram",label:"Dung lượng",value:"16GB (1 thanh đơn 16GB)"},{icon:"cpu",label:"Chuẩn",value:"DDR5 thế hệ mới"},{icon:"gpu",label:"Tốc độ Bus",value:"5600MHz (PC5-44800)"},{icon:"monitor",label:"Timing & Volt",value:"CL36-36-36-76 ở 1.25V"},{icon:"hdd",label:"Tính năng",value:"On-Die ECC tự sửa lỗi dữ liệu"},{icon:"shield",label:"Bảo hành",value:"Vĩnh viễn (Trọn đời)"}],desc:"RAM Ondata DDR5 16GB 5600MHz mang lại bước nhảy vọt về băng thông xử lý cho dàn máy Intel Gen 12/13/14 và AMD AM5. Trang bị giáp tản nhiệt nhôm đen nguyên khối giải nhiệt mát mẻ.",features:["Tốc độ 5600MHz cho băng thông truyền tải dữ liệu cực đại","Tích hợp chip IC quản lý nguồn PMIC ổn định điện áp trên thanh RAM","Công nghệ On-Die ECC duy trì độ toàn vẹn của dữ liệu liên tục","Hỗ trợ cấu hình Intel XMP 3.0 & AMD EXPO ép xung 1 click dễ dàng"],techSpecs:{"Dung lượng":"16GB (1× 16GB)","Chuẩn RAM":"DDR5 288-Pin UDIMM",Bus:"5600MHz",Timing:"CL36-36-36-76","Điện áp":"1.25V","Tương thích":"Bo mạch chủ Intel B760/Z790 và AMD B650/X670","Bảo hành":"Trọn đời chính hãng (Lifetime Warranty)"}},{id:"ram-ddr5-32-rgb",cat:"ram",name:"RAM Ondata",badge:"Cao cấp",price:299e4,oldPrice:345e4,discount:13,stars:5,reviews:34,specs:[{icon:"ram",label:"Dung lượng",value:"Kit 32GB (2 thanh × 16GB Dual Channel)"},{icon:"cpu",label:"Chuẩn",value:"DDR5 6000MHz siêu tốc"},{icon:"gpu",label:"Đèn LED",value:"ARGB Aura Sync đồng bộ đa sắc"},{icon:"monitor",label:"Timing",value:"Độ trễ cực thấp CL30-36-36-76"},{icon:"hdd",label:"Tản nhiệt",value:"Hợp kim nhôm dày dặn 2mm"},{icon:"shield",label:"Bảo hành",value:"Vĩnh viễn (Trọn đời)"}],desc:"Bộ kit RAM cao cấp dành cho game thủ và chuyên gia dựng hình. Tốc độ bus 6000MHz với độ trễ thấp CL30 kết hợp dải LED ARGB chuyển màu mượt mà rực rỡ.",features:["Dual-Channel 32GB tối ưu hóa hiệu năng render 3D và đa nhiệm nặng","Độ trễ thấp CL30 tối ưu độ phản hồi trong các tựa game esports","Dải LED ARGB tương thích đồng bộ phần mềm mainboard ASUS, MSI, Gigabyte","Bảo hành trọn đời an tâm tuyệt đối trong suốt vòng đời sử dụng"],techSpecs:{"Dung lượng":"32GB (2× 16GB)",Chuẩn:"DDR5 6000MHz","Độ trễ":"CL30-36-36-76",LED:"Addressable RGB 16.8 triệu màu","Bảo hành":"Trọn đời chính hãng"}},{id:"ram-ddr4-16",cat:"ram",name:"RAM Ondata",badge:"Phổ thông",price:85e4,oldPrice:99e4,discount:14,stars:4.9,reviews:110,specs:[{icon:"ram",label:"Dung lượng",value:"16GB (1 thanh đơn 16GB)"},{icon:"cpu",label:"Chuẩn",value:"DDR4 3200MHz (PC4-25600)"},{icon:"gpu",label:"Độ trễ",value:"CL16-18-18-38"},{icon:"monitor",label:"Điện áp",value:"1.35V tiết kiệm điện"},{icon:"hdd",label:"Tản nhiệt",value:"Giáp nhôm xước mờ cao cấp"},{icon:"shield",label:"Bảo hành",value:"Vĩnh viễn (Trọn đời)"}],desc:"Lựa chọn nâng cấp hoàn hảo và kinh tế nhất cho các cấu hình máy tính văn phòng, gaming tầm trung nền tảng DDR4. Tương thích 100% với mọi bo mạch chủ trên thị trường.",features:["Tốc độ 3200MHz chuẩn JEDEC & XMP 2.0 tương thích tối đa","Tản nhiệt nhôm xước giữ nhiệt độ thanh RAM luôn dưới 45°C","Bo mạch PCB 8 lớp chất lượng cao chống nhiễu tín hiệu","Bảo hành trọn đời 1 đổi 1 nhanh chóng"],techSpecs:{"Dung lượng":"16GB",Chuẩn:"DDR4 288-Pin UDIMM","Tốc độ":"3200MHz",Timing:"CL16-18-18-38","Điện áp":"1.35V","Bảo hành":"Trọn đời chính hãng"}},{id:"ram-ddr4-8",cat:"ram",name:"RAM Ondata",badge:"Tiết kiệm",price:45e4,oldPrice:52e4,discount:13,stars:4.8,reviews:86,specs:[{icon:"ram",label:"Dung lượng",value:"8GB (1 thanh 8GB)"},{icon:"cpu",label:"Chuẩn",value:"DDR4 3200MHz"},{icon:"gpu",label:"Độ trễ",value:"CL16"},{icon:"monitor",label:"Điện áp",value:"1.2V tiêu chuẩn"},{icon:"hdd",label:"Form factor",value:"UDIMM cho PC để bàn"},{icon:"shield",label:"Bảo hành",value:"Vĩnh viễn (Trọn đời)"}],desc:"Thanh RAM tiêu chuẩn giá tốt nhất cho nhu cầu lắp ráp máy văn phòng, trường học và gia đình. Độ bền bỉ cao, hoạt động ổn định liên tục 24/7.",features:["Giải pháp tối ưu chi phí nâng cấp đa nhiệm cho văn phòng","Tương thích mượt mà với vi xử lý Intel Core i3/i5 và AMD Ryzen 3/5","Mạch đồng nguyên chất truyền dẫn dữ liệu chính xác","Bảo hành trọn đời chính hãng"],techSpecs:{"Dung lượng":"8GB",Chuẩn:"DDR4",Bus:"3200MHz","Điện áp":"1.2V","Bảo hành":"Trọn đời"}},{id:"ram-laptop-16",cat:"ram",name:"RAM Ondata",badge:"Laptop & AIO",price:89e4,oldPrice:105e4,discount:15,stars:4.9,reviews:74,specs:[{icon:"ram",label:"Dung lượng",value:"16GB SODIMM cho Laptop/AIO/Mini PC"},{icon:"cpu",label:"Chuẩn",value:"DDR4 3200MHz (PC4-25600S)"},{icon:"gpu",label:"Độ trễ",value:"CL22"},{icon:"monitor",label:"Điện áp",value:"1.2V tiết kiệm pin"},{icon:"hdd",label:"Kích thước",value:"SODIMM 260-Pin nhỏ gọn"},{icon:"shield",label:"Bảo hành",value:"Vĩnh viễn (Trọn đời)"}],desc:"Thanh RAM chuẩn SODIMM nhỏ gọn chuyên dụng nâng cấp dung lượng bộ nhớ cho máy tính All-in-one, Laptop và máy tính tí hon Mini PC. Lắp vào là nhận ngay không cần cấu hình phức tạp.",features:["Nâng cấp tốc độ khởi động ứng dụng và duyệt hàng chục tab Chrome","Tương thích hoàn hảo với các dòng All-in-one và Laptop phổ biến","Tiêu chuẩn điện áp thấp 1.2V giúp kéo dài thời lượng pin laptop","Chip nhớ tuyển chọn kỹ lưỡng qua bài kiểm tra chịu nhiệt khắt khe"],techSpecs:{"Dung lượng":"16GB","Chuẩn chân cắm":"SODIMM 260-Pin","Tốc độ":"DDR4 3200MHz","Điện áp":"1.2V","Bảo hành":"Trọn đời chính hãng"}},{id:"acc-monitor-arm-pro",cat:"accessories",name:"Giá treo màn hình Ondata",badge:"Bán chạy",price:69e4,oldPrice:85e4,discount:19,stars:4.9,reviews:88,specs:[{icon:"accessories",label:"Chịu tải",value:'Màn hình 17" - 35" (2kg - 10kg)'},{icon:"cpu",label:"Cơ chế trợ lực",value:"Piston khí nén Gas Spring êm ái"},{icon:"monitor",label:"Góc xoay",value:"Xoay 360°, ngửa ±90°, xoay ngang ±90°"},{icon:"shield",label:"Chuẩn VESA",value:"Hỗ trợ 75×75mm và 100×100mm"},{icon:"ram",label:"Lắp đặt",value:"Kẹp cạnh bàn hoặc khoan lỗ xuyên bàn"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Tay đỡ màn hình trợ lực khí nén Ondata Arm Pro giải phóng không gian bàn làm việc, cho phép nâng hạ, kéo đẩy và xoay màn hình mọi góc nhìn công thái học chỉ bằng một ngón tay.",features:["Piston trợ lực khí nén bền bỉ vượt qua thử nghiệm 50.000 lần chuyển động","Rãnh quản lý dây cáp thông minh giấu dây HDMI & nguồn gọn gàng","Hỗ trợ cả 2 hình thức kẹp bàn (C-clamp) và xuyên lỗ bàn","Sơn tĩnh điện đen nhám chống trầy xước cao cấp"],techSpecs:{"Tương thích màn hình":"17 đến 35 inch","Tải trọng":"2.0 kg – 10.0 kg","Ngàm VESA":"75×75 mm, 100×100 mm","Vật liệu":"Hợp kim nhôm + Thép cán nguội SPCC","Bảo hành":"24 tháng"}},{id:"acc-hub-8in1",cat:"accessories",name:"Hub chuyển đổi Ondata",badge:"Đa năng",price:55e4,oldPrice:69e4,discount:20,stars:4.8,reviews:65,specs:[{icon:"accessories",label:"Cổng vào",value:"USB Type-C tương thích Thunderbolt"},{icon:"monitor",label:"HDMI",value:"Xuất hình 4K @ 30Hz sắc nét"},{icon:"cpu",label:"Sạc nhanh",value:"Cổng Type-C PD 100W sạc ngược"},{icon:"ram",label:"USB Hub",value:"3× USB 3.0 tốc độ 5Gbps"},{icon:"hdd",label:"Mạng & Thẻ",value:"LAN Gigabit RJ45 + Khe thẻ SD/TF"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Giải pháp mở rộng kết nối toàn diện cho laptop mỏng nhẹ và máy All-in-one. Mở rộng từ 1 cổng Type-C ra 8 cổng kết nối thông dụng gồm HDMI 4K, LAN dây mạng và sạc nhanh 100W.",features:["Vỏ hợp kim nhôm nguyên khối tản nhiệt cực nhanh, chống quá nhiệt","Cổng LAN RJ45 1000Mbps duy trì kết nối mạng ổn định không giật lag","Đọc đồng thời thẻ nhớ SD và MicroSD tốc độ cao cho nhiếp ảnh gia","Tương thích hoàn hảo Macbook M1/M2/M3, Laptop Windows và iPad Pro"],techSpecs:{"Cổng giao tiếp":"1× HDMI 4K, 1× RJ45 Gigabit, 1× USB-C PD 100W, 3× USB 3.0, 1× SD, 1× TF","Chất liệu":"Hợp kim nhôm Anode","Bảo hành":"24 tháng"}},{id:"acc-mousepad-xxl",cat:"accessories",name:"Bàn di chuột Ondata",badge:"Bán chạy",price:19e4,oldPrice:25e4,discount:24,stars:4.9,reviews:142,specs:[{icon:"accessories",label:"Kích thước",value:"XXL 900mm × 400mm cực rộng"},{icon:"cpu",label:"Độ dày",value:"4mm đệm êm ái cho cổ tay"},{icon:"monitor",label:"Bề mặt",value:"Vải dệt Micro-weave Speed lướt mượt"},{icon:"shield",label:"Gia công",value:"May viền bo góc kép chống bong tróc"},{icon:"ram",label:"Mặt đáy",value:"Cao su thiên nhiên chống trượt 100%"},{icon:"shield",label:"Bảo hành",value:"12 tháng"}],desc:"Lót chuột kích thước đại 90x40cm bao trọn cả bàn phím lẫn chuột, tạo nên một góc setup chuyên nghiệp đồng bộ. Bề mặt vải dệt mật độ cao chống bám nước và dễ dàng lau sạch.",features:["Kích thước rộng rãi đặt vừa cả bàn phím cơ Fullsize và chuột di chuyển thoải mái","Mặt vải xử lý phủ lớp chống thấm nước nano trượt nước nhanh chóng","Viền được may chỉ ziczac kép dập chìm chống sờn rách sau nhiều năm","Đế cao su thiên nhiên bám chặt mặt bàn kính lẫn mặt gỗ"],techSpecs:{"Kích thước":"900 × 400 × 4 mm","Chất liệu":"Vải dệt Micro-weave + Đế cao su tự nhiên","Màu sắc":"Đen viền xanh Ondata đặc trưng","Bảo hành":"12 tháng"}},{id:"acc-hdmi-8k",cat:"accessories",name:"Cáp HDMI Ondata",badge:"Chất lượng",price:18e4,oldPrice:23e4,discount:22,stars:4.8,reviews:49,specs:[{icon:"accessories",label:"Chuẩn cáp",value:"HDMI 2.1 Ultra High Speed"},{icon:"monitor",label:"Băng thông",value:"48Gbps truyền tải không nén"},{icon:"gpu",label:"Độ phân giải",value:"Hỗ trợ 8K@60Hz, 4K@120Hz/144Hz"},{icon:"cpu",label:"Công nghệ",value:"Dynamic HDR, eARC, VRR, ALLM"},{icon:"shield",label:"Đầu cắm",value:"Mạ vàng 24K chống oxy hóa, vỏ dù bện"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Cáp HDMI 2.1 chuẩn thế hệ mới với băng thông cực đại 48Gbps, khai thác trọn vẹn tần số quét 144Hz/165Hz của màn hình gaming và độ nét 4K/8K không bị chớp giật hay trễ tín hiệu.",features:["Băng thông 48Gbps xuất hình ảnh HDR 10-bit rực rỡ không suy giảm","Đầu cắm hợp kim kẽm mạ vàng 24K truyền dẫn tín hiệu tối ưu","Vỏ cáp bện sợi dù nylon siêu bền chịu uốn cong hơn 20.000 lần","Tương thích ngược với các cổng HDMI 2.0 / 1.4"],techSpecs:{Chuẩn:"HDMI 2.1","Chiều dài":"2.0 mét","Băng thông":"48Gbps","Độ phân giải hỗ trợ":"8K@60Hz, 4K@144Hz, 2K@240Hz","Bảo hành":"24 tháng"}},{id:"acc-laptop-stand",cat:"accessories",name:"Giá đỡ Ondata",badge:"Tiện ích",price:32e4,oldPrice:39e4,discount:18,stars:4.9,reviews:77,specs:[{icon:"accessories",label:"Chất liệu",value:"Hợp kim nhôm nguyên khối CNC"},{icon:"cpu",label:"Khả năng chỉnh",value:"7 mức điều chỉnh độ cao linh hoạt"},{icon:"monitor",label:"Tương thích",value:'Laptop & Tablet 11" đến 17.3"'},{icon:"shield",label:"Tản nhiệt",value:"Thiết kế thông gió tản nhiệt đáy máy"},{icon:"ram",label:"Đệm silicon",value:"Chống trượt và chống trầy xước vỏ máy"},{icon:"shield",label:"Bảo hành",value:"24 tháng"}],desc:"Giá đỡ laptop hợp kim nhôm Ondata Stand X nâng màn hình lên vừa tầm mắt, giúp thẳng lưng và giải tỏa áp lực cột sống cổ khi làm việc thời gian dài. Có thể gập gọn bỏ túi tặng kèm.",features:["Nâng cao tầm nhìn chuẩn công thái học, chống mỏi cổ và gù lưng","Kết cấu nhôm dày dặn chắc chắn, chịu lực lên đến 15kg không rung lắc","Đệm silicon tại các điểm tiếp xúc bảo vệ máy tính tuyệt đối không trầy xước","Gấp gọn siêu mỏng dễ dàng mang theo trong balo hoặc túi xách"],techSpecs:{"Chất liệu":"Hợp kim nhôm cao cấp + Silicon","Góc điều chỉnh":"15° đến 45° (7 nấc tùy biến)","Trọng lượng":"260g","Tặng kèm":"Túi nỉ đựng chống sốc cao cấp","Bảo hành":"24 tháng"}}];function M(n){return n?(n=n.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"),n=n.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"),n=n.replace(/ì|í|ị|ỉ|ĩ/g,"i"),n=n.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"),n=n.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"),n=n.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"),n=n.replace(/đ/g,"d"),n=n.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,"A"),n=n.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g,"E"),n=n.replace(/Ì|Í|Ị|Ỉ|Ĩ/g,"I"),n=n.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,"O"),n=n.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"U"),n=n.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,"Y"),n=n.replace(/Đ/g,"D"),n=n.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g,""),n=n.replace(/\u02C6|\u0306|\u031B/g,""),n.toLowerCase().trim()):""}function O(n){if(!n||!n.trim())return k;const t=M(n);return k.filter(i=>{const a=M(i.name),e=M(i.cat),o=i.desc?M(i.desc):"",r=i.id.toLowerCase();return a.includes(t)||e.includes(t)||r.includes(t)||o.includes(t)})}function z(n){return n?n==="desktop-master"||n==="desktop-workstation"?k.find(t=>t.id==="aio-one-24")||k[0]:n==="laptop-pro-15"||n==="laptop-gaming-16"||n==="laptop-air-14"?k.find(t=>t.id==="aio-one-24")||k[0]:(n==="ram-ddr5-16gb"&&(n="ram-ddr5-16"),k.find(t=>t.id===n)||null):null}function F(n){return!n||n==="all"?k:k.filter(t=>t.cat===n)}function $(n){return"Liên hệ"}function W(n,t){switch(n){case"aio":return`
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
      `}}function Q(n){switch(n){case"aio":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>';case"monitor":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg>';case"keyboard":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg>';case"mouse":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg>';case"ram":return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg>';case"accessories":default:return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'}}function X(){return`
    <section class="home-featured-section" id="featured-products">
      <div class="container">


        <!-- 6 Rows Danh Mục (Mỗi mục 1 hàng 5 sản phẩm) -->
        <div class="featured-categories-rows">
          ${j.map(t=>{const a=k.filter(e=>e.cat===t.id).slice(0,5).map(e=>`
      <div class="product-item-card" data-id="${e.id}" data-cat="${e.cat}" style="cursor:pointer;">
        ${e.badge?`<span class="badge-tag">${e.badge}</span>`:""}
        <div class="product-thumb-container">
          <div class="tech-device-render">
            ${W(e.cat,e.name)}
            <span class="device-label">${e.name.split(" ")[0]} ${e.name.split(" ")[1]||""}</span>
          </div>
        </div>
        <div class="product-info-box">
          <h3 class="product-name" title="${e.name}">
            ${e.name} <span class="product-ext-icon">↗</span>
          </h3>
          <div class="product-pricing">
            <span class="current-price" style="color:#527d24;">Liên hệ</span>
          </div>
          <div class="product-stars-row">
            <span class="stars-gold">${"★".repeat(Math.floor(e.stars))}${e.stars%1>=.5?"½":""}</span>
            <span class="reviews-count">(${e.reviews})</span>
          </div>
        </div>
      </div>
    `).join("");return`
      <!-- Row Danh mục: ${t.name} -->
      <div class="home-category-row-block" id="cat-block-${t.id}">
        <div class="section-top-bar">
          <div class="category-header-title-wrap">
            <span class="category-header-icon">${Q(t.id)}</span>
            <div>
              <h2 class="section-heading">${t.name}</h2>
              <span class="category-header-sub">${t.desc}</span>
            </div>
          </div>
          <a href="/san-pham/${t.id}" class="see-all-link">
            Xem tất cả
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </div>

        <div class="featured-grid-5">
          ${a}
        </div>
      </div>
    `}).join("")}
        </div>
      </div>
    </section>
  `}function Z(){return`
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
  `}function Y(){return`
    <section class="home-news-section" id="news">
      <div class="container">
        <div class="section-top-bar">
          <h2 class="section-heading">Tin tức & Kiến thức</h2>
          <a href="/tin-tuc" class="see-all-link">
            Xem tất cả
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        </div>

        <div class="news-grid">
          <!-- Card 1 -->
          <article class="news-card">
            <div class="news-thumb-wrapper">
              <div class="news-thumb-graphic news-bg-1">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="3" y="4" width="18" height="12" rx="2"/>
                  <line x1="2" y1="20" x2="22" y2="20"/>
                </svg>
              </div>
            </div>
            <div class="news-body">
              <h3 class="news-title">Cách chọn laptop phù hợp cho sinh viên</h3>
              <div class="news-date">08/10/2025</div>
            </div>
          </article>

          <!-- Card 2 -->
          <article class="news-card">
            <div class="news-thumb-wrapper">
              <div class="news-thumb-graphic news-bg-2">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="7" width="16" height="10" rx="2"/>
                  <line x1="22" y1="11" x2="22" y2="13"/>
                  <line x1="6" y1="11" x2="6" y2="13"/>
                  <line x1="10" y1="11" x2="10" y2="13"/>
                </svg>
              </div>
            </div>
            <div class="news-body">
              <h3 class="news-title">5 mẹo tăng tuổi thọ pin laptop</h3>
              <div class="news-date">06/10/2025</div>
            </div>
          </article>

          <!-- Card 3 -->
          <article class="news-card">
            <div class="news-thumb-wrapper">
              <div class="news-thumb-graphic news-bg-3">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <polyline points="8 21 12 17 16 21"/>
                </svg>
              </div>
            </div>
            <div class="news-body">
              <h3 class="news-title">Xu hướng màn hình 2025</h3>
              <div class="news-date">03/10/2025</div>
            </div>
          </article>

          <!-- Card 4 -->
          <article class="news-card">
            <div class="news-thumb-wrapper">
              <div class="news-thumb-graphic news-bg-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="7" width="20" height="10" rx="1"/>
                  <line x1="6" y1="17" x2="6" y2="19"/>
                  <line x1="10" y1="17" x2="10" y2="19"/>
                  <line x1="14" y1="17" x2="14" y2="19"/>
                  <line x1="18" y1="17" x2="18" y2="19"/>
                </svg>
              </div>
            </div>
            <div class="news-body">
              <h3 class="news-title">So sánh RAM DDR4 và DDR5</h3>
              <div class="news-date">01/10/2025</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `}function J(){return`
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
  `}function _(n="all",t={label:"Sản phẩm",sub:"Tất cả sản phẩm chính hãng Ondata"}){const i=[{id:"aio",label:"Máy tính All-in-one",icon:nn()},{id:"monitor",label:"Màn hình",icon:tn()},{id:"keyboard",label:"Bàn phím",icon:en()},{id:"mouse",label:"Chuột",icon:an()},{id:"ram",label:"RAM",icon:sn()},{id:"accessories",label:"Phụ kiện",icon:cn()}],a=["Tất cả","Văn phòng","Gaming","Đồ họa","Ultrabook"],e=["Ondata","ASUS","Acer","HP","Lenovo","Dell","Khác"],o=["8GB","16GB","32GB"],r=["Còn hàng","Hết hàng","Đặt hàng"],l=F(n),h=l.length>0?l.map((c,d)=>`
        <div class="catalog-product-card" id="catalog-product-${c.id}" data-product-id="${c.id}" data-product-cat="${c.cat}" style="cursor:pointer;">
          ${c.badge?`<span class="badge-tag">${c.badge}</span>`:""}
          <div class="catalog-product-thumb">
            <div class="catalog-thumb-visual">
              <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="width:100%">
                <defs>
                  <linearGradient id="cg${d}" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1a2e1d"/>
                    <stop offset="100%" stop-color="#0d1a10"/>
                  </linearGradient>
                </defs>
                <rect width="160" height="110" rx="6" fill="url(#cg${d})"/>
                <ellipse cx="80" cy="55" rx="48" ry="28" fill="#7ea835" opacity=".12"/>
                <text x="80" y="60" text-anchor="middle" font-family="Outfit,sans-serif" font-weight="800" font-size="13" fill="#7ea835" opacity=".7">ONDATA</text>
              </svg>
            </div>
          </div>
          <div class="catalog-product-info">
            <p class="catalog-product-name">${c.name}</p>
            <div class="catalog-product-pricing">
              <span class="catalog-product-price" style="color:#527d24;">Liên hệ</span>
            </div>
            <div class="catalog-product-stars">
              <span class="stars-gold">${"★".repeat(Math.floor(c.stars))}${c.stars%1>=.5?"½":""}</span>
              <span class="reviews-count">(${c.reviews})</span>
            </div>
          </div>
        </div>`).join(""):`<div class="catalog-empty">
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
          <span class="crumb-current">${t.label}</span>
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
              ${i.map(c=>`
                <li class="catsidebar-item">
                  <a href="/san-pham/${c.id}" class="catsidebar-link${c.id===n?" catsidebar-link--active":""}" id="cat-${c.id}" data-cat="${c.id}">
                    <span class="catsidebar-icon">${c.icon}</span>
                    <span>${c.label}</span>
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
                <h1 class="catalog-hero-title">${t.label}</h1>
                <p class="catalog-hero-sub">${t.sub}</p>
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
              ${a.map((c,d)=>`
                <button class="catalog-tab${d===0?" catalog-tab--active":""}" id="tab-${d}" role="tab" data-tab="${d}">
                  ${c}
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
              <div class="catalog-filters" id="catalog-filters">

                <div class="filter-group" id="fg-group-brand">
                  <div class="filter-group-title" data-group="brand">
                    Thương hiệu
                    <svg class="fg-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="18 15 12 9 6 15"/>
                    </svg>
                  </div>
                  <div class="filter-group-body" id="fg-brand">
                    ${e.map((c,d)=>`
                      <label class="filter-checkbox" id="filter-brand-${d}">
                        <input type="checkbox" name="brand" value="${c}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${c}</span>
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
                    ${o.map((c,d)=>`
                      <label class="filter-checkbox" id="filter-ram-${d}">
                        <input type="checkbox" name="ram" value="${c}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${c}</span>
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
                    ${r.map((c,d)=>`
                      <label class="filter-checkbox" id="filter-status-${d}">
                        <input type="checkbox" name="status" value="${c}">
                        <span class="checkmark"></span>
                        <span class="filter-label-text">${c}</span>
                      </label>
                    `).join("")}
                  </div>
                </div>

                <button class="filter-reset-btn" id="filter-reset-btn">Xóa bộ lọc</button>
              </div>

              <!-- PRODUCT GRID -->
              <div class="catalog-products-area" id="catalog-products-area">
                <div class="catalog-products-grid" id="catalog-products-grid">
                  ${h}
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
  `}function nn(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>'}function tn(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg>'}function en(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg>'}function an(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg>'}function sn(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg>'}function cn(){return'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'}function on(){document.querySelectorAll(".catalog-tab").forEach(h=>{h.addEventListener("click",()=>{document.querySelectorAll(".catalog-tab").forEach(c=>c.classList.remove("catalog-tab--active")),h.classList.add("catalog-tab--active")})});const n=document.getElementById("catalog-filter-toggle"),t=document.getElementById("catalog-filters");n&&t&&n.addEventListener("click",()=>{t.classList.toggle("filters-hidden"),n.classList.toggle("catalog-filters--open")}),document.querySelectorAll(".filter-group-title").forEach(h=>{h.addEventListener("click",()=>{const c=h.getAttribute("data-group"),d=document.getElementById(`fg-${c}`);d&&(d.classList.toggle("fg-collapsed"),h.classList.toggle("fg-title-collapsed"))})});const i=document.getElementById("filter-reset-btn");i&&i.addEventListener("click",()=>{document.querySelectorAll('.catalog-filters input[type="checkbox"]').forEach(h=>{h.checked=!1})});let a=1;const e=document.querySelectorAll(".page-btn--num"),o=document.getElementById("page-prev"),r=document.getElementById("page-next");function l(h){a=h,e.forEach(c=>{c.classList.toggle("page-btn--active",parseInt(c.dataset.page)===a)}),o&&(o.disabled=a===1),r&&(r.disabled=a===e.length)}e.forEach(h=>h.addEventListener("click",()=>l(parseInt(h.dataset.page)))),o&&o.addEventListener("click",()=>{a>1&&l(a-1)}),r&&r.addEventListener("click",()=>{a<e.length&&l(a+1)}),document.querySelectorAll(".catalog-product-card[data-product-id]").forEach(h=>{h.addEventListener("click",()=>{const c=h.dataset.productId,d=h.dataset.productCat;c&&d&&(window.location.hash=`#/san-pham/${d}/${c}`)})})}function ln(n){const t={cpu:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>',ram:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="8" width="20" height="8" rx="1"/><path d="M6 8V6M10 8V6M14 8V6M18 8V6M6 16v2M10 16v2M14 16v2M18 16v2"/></svg>',hdd:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="12" rx="10" ry="6"/><path d="M2 12v4c0 3.31 4.48 6 10 6s10-2.69 10-6v-4"/><path d="M15 10h.01"/></svg>',monitor:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>',gpu:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 7V5M10 7V5M18 7V5M14 7V5M6 17v2M10 17v2M18 17v2M14 17v2"/></svg>',shield:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'};return t[n]||t.shield}function D(n){const t=Math.floor(n),i=n%1>=.4;let a="";for(let e=0;e<5;e++)e<t?a+='<svg class="star-icon star-full" width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>':e===t&&i?a+=`
        <svg class="star-icon star-half" width="16" height="16" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stop-color="#f59e0b"/>
              <stop offset="50%" stop-color="#e5e7eb"/>
            </linearGradient>
          </defs>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half-star)"/>
        </svg>`:a+='<svg class="star-icon star-empty" width="16" height="16" viewBox="0 0 24 24" fill="#e5e7eb" stroke="#d1d5db"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';return a}function A(n=0,t="Laptop Ondata Pro 15"){switch(n){case 0:return`
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
          ${[0,1,2,3,4].map(i=>`
            <g transform="translate(90, ${70+i*32})">
              ${[0,1,2,3,4,5,6,7,8,9,10,11].map(a=>`
                <rect x="${a*30}" y="0" width="26" height="24" rx="3.5" fill="url(#kb-grad)" stroke="#3f5244" stroke-width="0.8"/>
              `).join("")}
            </g>
          `).join("")}

          <!-- Large trackpad -->
          <rect x="180" y="255" width="180" height="72" rx="6" fill="#c7d2cb" stroke="#8d9d93" stroke-width="1.2"/>
          <text x="270" y="295" text-anchor="middle" font-family="'Outfit',sans-serif" font-size="11" fill="#78887e" font-weight="600">Precision Touchpad</text>
        </svg>`;default:return""}}function hn(n,t=!1){const i=["Chính diện","Góc nghiêng","Mặt lưng","Cạnh bên","Bàn phím"];return`
    <button class="pd-thumb-btn${t?" pd-thumb-btn--active":""}" data-thumb="${n}" aria-label="${i[n]}">
      <div class="pd-thumb-mini-preview">
        ${A(n)}
      </div>
      <span class="pd-thumb-caption">${i[n]}</span>
    </button>
  `}function rn(n){if(!n)return`
      <section class="pd-page">
        <div class="pd-container">
          <div class="pd-not-found">
            <h2>Sản phẩm không tồn tại</h2>
            <p>Vui lòng kiểm tra lại đường dẫn hoặc quay lại danh mục sản phẩm.</p>
            <a href="/san-pham/all" class="pd-btn-back">← Quay lại danh mục</a>
          </div>
        </div>
      </section>
    `;$(n.price),n.oldPrice&&$(n.oldPrice),n.discount||n.oldPrice&&Math.round((1-n.price/n.oldPrice)*100);const t=(n.specs||[]).map(o=>`
    <li class="pd-spec-item">
      <span class="pd-spec-icon">${ln(o.icon)}</span>
      <span class="pd-spec-label">${o.label}:</span>
      <span class="pd-spec-val">${o.value}</span>
    </li>
  `).join(""),i=Object.entries(n.techSpecs||{}).map(([o,r])=>`
    <tr class="pd-ts-row">
      <td class="pd-ts-key">${o}</td>
      <td class="pd-ts-val">${r}</td>
    </tr>
  `).join(""),a=(n.features||[]).map(o=>`
    <li class="pd-feature-item">
      <span class="pd-check-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
      <span class="pd-feature-text">${o}</span>
    </li>
  `).join(""),e=[0,1,2,3,4].map(o=>hn(o,o===0)).join("");return`
    <section class="pd-page" id="pd-page">
      <div class="pd-container">

        <!-- 1. BREADCRUMB -->
        <nav class="catalog-breadcrumb pd-breadcrumb" aria-label="Breadcrumb">
          <a href="/" class="crumb-link" id="pd-crumb-home">Trang chủ</a>
          <span class="crumb-sep">›</span>
          <a href="/san-pham/${n.cat}" class="crumb-link" id="pd-crumb-cat">Sản phẩm</a>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">${n.name}</span>
        </nav>

        <!-- 2. MAIN PRODUCT CARD: GALLERY + INFO -->
        <div class="pd-card">
          <div class="pd-layout-grid">

            <!-- LEFT: GALLERY -->
            <div class="pd-gallery-col">
              <div class="pd-hero-preview-box" id="pd-hero-preview-box">
                <div class="pd-hero-art" id="pd-hero-art">
                  ${A(0,n.name)}
                </div>
              </div>

              <!-- Thumbnails carousel row -->
              <div class="pd-thumbs-bar" id="pd-thumbs-bar">
                ${e}
              </div>
            </div>

            <!-- RIGHT: INFO & ACTIONS -->
            <div class="pd-info-col">
              <h1 class="pd-title" id="pd-title">${n.name}</h1>

              <!-- Rating row -->
              <div class="pd-rating-row">
                <div class="pd-stars-wrap">
                  ${D(n.stars||4.5)}
                </div>
                <span class="pd-rating-count">(${n.reviews||24} đánh giá)</span>
                ${n.badge?`<span class="pd-top-badge">${n.badge}</span>`:""}
              </div>

              <!-- Price section: Liên hệ -->
              <div class="pd-pricing-box">
                <span class="pd-price" id="pd-price">Liên hệ</span>
              </div>

              <!-- Key Specs List with Grey Icons -->
              <ul class="pd-specs-list">
                ${t}
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
              Đánh giá (${n.reviews||24})
            </button>
          </div>

          <!-- Tab Content Container -->
          <div class="pd-tab-card">

            <!-- Tab 1: Description -->
            <div class="pd-panel" id="pd-panel-desc" role="tabpanel">
              <p class="pd-lead-desc">${n.desc}</p>
              <ul class="pd-features-list">
                ${a}
              </ul>

              <div class="pd-editorial-block">
                <h3 class="pd-editorial-title">Đặc điểm nổi bật của ${n.name}</h3>
                <p>Được hoàn thiện với tiêu chuẩn khắt khe, ${n.name} đem lại sự cân bằng hoàn hảo giữa hiệu suất làm việc ấn tượng, độ bền chuẩn doanh nghiệp và khả năng tản nhiệt tối ưu cho người dùng Việt Nam.</p>
              </div>
            </div>

            <!-- Tab 2: Tech Specs -->
            <div class="pd-panel pd-panel--hidden" id="pd-panel-tech" role="tabpanel">
              <table class="pd-tech-table">
                <tbody>
                  ${i}
                </tbody>
              </table>
            </div>

            <!-- Tab 3: Reviews -->
            <div class="pd-panel pd-panel--hidden" id="pd-panel-reviews" role="tabpanel">
              <div class="pd-reviews-summary">
                <div class="pd-score-box">
                  <div class="pd-big-score">${n.stars||4.5}</div>
                  <div class="pd-stars-wrap">${D(n.stars||4.5)}</div>
                  <span class="pd-score-sub">${n.reviews||24} đánh giá từ khách hàng</span>
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
                  <div class="pd-stars-wrap">${D(5)}</div>
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
                  <div class="pd-stars-wrap">${D(5)}</div>
                  <p class="pd-review-comment">Giao hàng cực kỳ nhanh, đóng gói cẩn thận có xốp chống sốc dày. Máy nhẹ hơn tưởng tượng, bàn phím gõ nảy và êm tay. Nhân viên tư vấn kỹ càng.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `}function dn(n,t){var b,w;if(!n)return;const i=document.querySelectorAll(".pd-thumb-btn"),a=document.getElementById("pd-hero-art");i.forEach(s=>{s.addEventListener("click",()=>{const p=parseInt(s.dataset.thumb,10);i.forEach(v=>v.classList.remove("pd-thumb-btn--active")),s.classList.add("pd-thumb-btn--active"),a&&(a.style.opacity="0",a.style.transform="scale(0.96)",setTimeout(()=>{a.innerHTML=A(p,n.name),a.style.opacity="1",a.style.transform="scale(1)"},160))})});const e=document.getElementById("pd-qty-input"),o=document.getElementById("pd-qty-minus"),r=document.getElementById("pd-qty-plus");e&&o&&r&&(o.addEventListener("click",()=>{let s=parseInt(e.value,10)||1;s>1&&(e.value=s-1)}),r.addEventListener("click",()=>{let s=parseInt(e.value,10)||1;s<99&&(e.value=s+1)}),e.addEventListener("change",()=>{let s=parseInt(e.value,10)||1;s<1&&(s=1),s>99&&(s=99),e.value=s}));const l=document.getElementById("pd-btn-cart");l&&l.addEventListener("click",()=>{parseInt(e==null?void 0:e.value,10);const s=l.innerHTML;l.classList.add("pd-btn-cart--added"),l.innerHTML=`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <span>Đã thêm vào giỏ!</span>
      `,setTimeout(()=>{l.classList.remove("pd-btn-cart--added"),l.innerHTML=s},2e3)});const h=document.getElementById("pd-btn-buy");h&&h.addEventListener("click",()=>{parseInt(e==null?void 0:e.value,10)});const c=document.querySelectorAll(".pd-tab-btn"),d=document.querySelectorAll(".pd-panel");c.forEach(s=>{s.addEventListener("click",()=>{c.forEach(v=>{v.classList.remove("pd-tab-btn--active"),v.setAttribute("aria-selected","false")}),s.classList.add("pd-tab-btn--active"),s.setAttribute("aria-selected","true");const p=s.dataset.tab;d.forEach(v=>{const f=v.id===`pd-panel-${p}`;v.classList.toggle("pd-panel--hidden",!f)})})}),(b=document.getElementById("pd-crumb-home"))==null||b.addEventListener("click",s=>{s.preventDefault(),window.location.hash="#/"}),(w=document.getElementById("pd-crumb-cat"))==null||w.addEventListener("click",s=>{s.preventDefault(),window.location.hash=`#/san-pham/${n.cat}`})}const pn=[{id:"all",label:"Tất cả"},{id:"buying-guide",label:"Tư vấn chọn mua"},{id:"tips",label:"Hướng dẫn sử dụng"},{id:"trends",label:"Xu hướng công nghệ"}],L=[{id:"chon-laptop-sinh-vien",featured:!0,category:"buying-guide",categoryLabel:"Tư vấn chọn mua",title:"Cách chọn laptop phù hợp cho sinh viên",date:"08/10/2025",readTime:"5 phút đọc",summary:"Tổng hợp kinh nghiệm chọn mua laptop tối ưu theo ngành học: Kinh tế, CNTT, Thiết kế đồ họa và Y dược với mức ngân sách hợp lý nhất.",content:`
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
    `}];function N(n,t=!1){if(t)return`
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
    `;switch(n){case"meo-tang-tuoi-tho-pin-laptop":return`
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
      `;default:return""}}function gn(n="all"){const t=L.find(l=>l.featured)||L[0],i=L.filter(l=>!l.featured),a=pn.map(l=>`
    <button 
      class="news-filter-btn${l.id===n?" news-filter-btn--active":""}" 
      data-filter="${l.id}"
      id="filter-btn-${l.id}"
    >
      ${l.label}
    </button>
  `).join(""),e=n==="all"?i:i.filter(l=>l.category===n),o=n==="all"||t.category===n,r=e.length>0?e.map(l=>`
        <article class="news-list-card" data-article-id="${l.id}" id="news-card-${l.id}">
          <div class="news-list-thumb">
            ${N(l.id,!1)}
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
          ${a}
        </div>

        <!-- 4. FEATURED HERO ARTICLE (Top Large Card) -->
        ${o?`
          <article class="news-hero-card" data-article-id="${t.id}" id="news-hero-article">
            <div class="news-hero-image-wrap">
              ${N(t.id,!0)}
            </div>
            <div class="news-hero-footer">
              <div class="news-hero-info">
                <h2 class="news-hero-title">${t.title}</h2>
                <div class="news-hero-date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>${t.date}</span>
                </div>
              </div>
              <div class="news-hero-badge-wrap">
                <span class="news-badge news-badge--pill">${t.categoryLabel}</span>
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
  `}function un(n){var l;(l=document.getElementById("news-crumb-home"))==null||l.addEventListener("click",h=>{h.preventDefault(),window.location.hash="#/"}),document.querySelectorAll(".news-filter-btn").forEach(h=>{h.addEventListener("click",()=>{const c=h.dataset.filter;n&&n(c)})});const t=document.getElementById("news-modal"),i=document.getElementById("news-modal-body"),a=document.getElementById("news-modal-close"),e=document.getElementById("news-modal-backdrop");function o(h){const c=L.find(d=>d.id===h);!c||!t||!i||(i.innerHTML=`
      <div class="news-detail-badge">${c.categoryLabel}</div>
      <h2 class="news-detail-title">${c.title}</h2>
      <div class="news-detail-meta">
        <span>📅 ${c.date}</span>
        <span>⏱️ ${c.readTime}</span>
      </div>
      <div class="news-detail-summary">${c.summary}</div>
      <div class="news-detail-content">${c.content}</div>
    `,t.classList.add("news-modal--open"),t.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden")}function r(){t&&(t.classList.remove("news-modal--open"),t.setAttribute("aria-hidden","true"),document.body.style.overflow="")}a==null||a.addEventListener("click",r),e==null||e.addEventListener("click",r),document.querySelectorAll("[data-article-id]").forEach(h=>{h.addEventListener("click",()=>{o(h.dataset.articleId)})})}function vn(){return`
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
  `}function mn(n){var a;(a=document.getElementById("contact-crumb-home"))==null||a.addEventListener("click",e=>{e.preventDefault(),window.location.hash="#/"});const t=document.getElementById("contact-form");t&&t.addEventListener("submit",e=>{var r,l;e.preventDefault();const o=(r=document.getElementById("contact-name"))==null?void 0:r.value;(l=document.getElementById("contact-phone"))==null||l.value,n&&n(`Cảm ơn ${o||"bạn"}! Tin nhắn liên hệ đã được gửi thành công.`),t.reset()});const i=document.getElementById("btn-partner-register");i&&i.addEventListener("click",()=>{n&&n("Cảm ơn bạn đã quan tâm hợp tác! Nhân viên Ondata sẽ liên hệ trong 24 giờ.")})}function x(n){switch(n){case"hero":return`
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
      `;default:return""}}function bn(){const t=[{id:"bao-hanh",title:"Chính sách bảo hành<br>& đổi trả",desc:"Thông tin chi tiết về điều kiện, quy trình bảo hành và đổi trả sản phẩm.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>'},{id:"ky-thuat",title:"Hỗ trợ kỹ thuật",desc:"Hướng dẫn sử dụng, cài đặt, khắc phục sự cố và các yêu cầu hỗ trợ kỹ thuật.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'},{id:"tra-cuu",title:"Tra cứu đơn hàng",desc:"Kiểm tra trạng thái đơn hàng và thông tin giao hàng nhanh chóng.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'},{id:"lien-he",title:"Liên hệ hỗ trợ",desc:"Hotline, Zalo, Email và biểu mẫu liên hệ với đội ngũ hỗ trợ.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'},{id:"bao-mat",title:"Chính sách bảo mật",desc:"Cam kết bảo vệ thông tin cá nhân của khách hàng.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'}].map(i=>`
    <div class="sp-card" data-sub="${i.id}" id="sp-card-${i.id}">
      <div class="sp-card-icon-wrap">
        ${i.icon}
      </div>
      <h3 class="sp-card-title">${i.title}</h3>
      <p class="sp-card-desc">${i.desc}</p>
      <div class="sp-card-btn-wrap">
        <button class="sp-card-circle-btn" aria-label="Xem chi tiết ${i.id}">
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
            ${x("hero")}
          </div>
        </div>

        <!-- 3. FIVE SUPPORT CARDS GRID -->
        <div class="sp-cards-grid">
          ${t}
        </div>

      </div>
    </section>
  `}function fn(){return`
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
          ${x("shield-banner")}
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
  `}function yn(){const n=[{title:"Hướng dẫn sử dụng sản phẩm",sub:"Tài liệu hướng dẫn, video minh họa",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'},{title:"Cài đặt phần mềm & driver",sub:"Tải driver, phần mềm cần thiết",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'},{title:"Khắc phục sự cố thường gặp",sub:"Các lỗi phổ biến và cách xử lý",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'},{title:"Gửi yêu cầu hỗ trợ",sub:"Điền biểu mẫu để được hỗ trợ trực tiếp",icon:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>'}];return`
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
          ${x("tech-banner")}
        </div>

        <div class="sp-block">
          <h2 class="sp-block-title">Các hỗ trợ nổi bật</h2>
          <div class="sp-topics-list">
            ${n.map(t=>`
              <div class="sp-topic-card" style="cursor:pointer;">
                <div class="sp-topic-icon">${t.icon}</div>
                <div class="sp-topic-info">
                  <strong>${t.title}</strong>
                  <span>${t.sub}</span>
                </div>
                <div class="sp-topic-arrow">›</div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Urgent Support Box -->
        <div class="sp-urgent-box">
          <div class="sp-urgent-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#527d24" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
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
  `}function wn(){return`
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
          ${x("track-banner")}
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
  `}function kn(){return`
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
          ${x("contact-banner")}
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
  `}function xn(){return`
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
          ${x("privacy-banner")}
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
  `}function Bn(n=null){switch(n){case"bao-hanh":return fn();case"ky-thuat":return yn();case"tra-cuu":return wn();case"lien-he":return kn();case"bao-mat":return xn();default:return bn()}}function Cn(n=null,t){var d;(d=document.getElementById("sp-crumb-home"))==null||d.addEventListener("click",b=>{b.preventDefault(),window.navigate?window.navigate("/"):window.location.assign("/")}),document.querySelectorAll(".sp-card[data-sub]").forEach(b=>{b.addEventListener("click",()=>{const w=b.dataset.sub;w&&(window.navigate?window.navigate(`/ho-tro/${w}`):window.location.assign(`/ho-tro/${w}`))})});const i=document.getElementById("btn-tab-warranty"),a=document.getElementById("btn-tab-exchange"),e=document.getElementById("panel-warranty"),o=document.getElementById("panel-exchange");i&&a&&e&&o&&(i.addEventListener("click",()=>{i.classList.add("sp-tab-pill--active"),a.classList.remove("sp-tab-pill--active"),e.classList.remove("sp-tab-panel--hidden"),o.classList.add("sp-tab-panel--hidden")}),a.addEventListener("click",()=>{a.classList.add("sp-tab-pill--active"),i.classList.remove("sp-tab-pill--active"),o.classList.remove("sp-tab-panel--hidden"),e.classList.add("sp-tab-panel--hidden")}));const r=document.getElementById("btn-track-submit"),l=document.getElementById("track-input"),h=document.getElementById("track-result");r&&l&&h&&r.addEventListener("click",()=>{const b=l.value.trim();if(!b){t&&t("Vui lòng nhập mã đơn hàng hoặc số điện thoại!");return}h.style.display="block",t&&t(`Đã tìm thấy thông tin đơn hàng: ${b}`)});const c=document.getElementById("sp-quick-form");c&&c.addEventListener("submit",b=>{b.preventDefault(),t&&t("Cảm ơn bạn! Yêu cầu hỗ trợ đã được gửi thành công."),c.reset()})}function Tn(){return`
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
  `}function Mn(){return`
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
  `}function Dn(n){document.getElementById("floating-contact-widget");const t=document.getElementById("chatbox-window"),i=document.getElementById("chatbox-toggle-btn"),a=document.getElementById("chatbox-btn-close"),e=document.getElementById("chatbox-form"),o=document.getElementById("chatbox-input"),r=document.getElementById("chatbox-messages"),l=i==null?void 0:i.querySelector(".icon-chat-open"),h=i==null?void 0:i.querySelector(".icon-chat-close");if(!i||!t)return;function c(){t.classList.add("chatbox-window--active"),l&&(l.style.display="none"),h&&(h.style.display="inline-block"),setTimeout(()=>o==null?void 0:o.focus(),200)}function d(){t.classList.remove("chatbox-window--active"),l&&(l.style.display="inline-block"),h&&(h.style.display="none")}i.addEventListener("click",s=>{s.stopPropagation(),t.classList.contains("chatbox-window--active")?d():c()}),a==null||a.addEventListener("click",s=>{s.stopPropagation(),d()});function b(s,p=!0){if(!r)return;const v=document.createElement("div");v.className=`chat-msg ${p?"chat-msg--outgoing":"chat-msg--incoming"}`,v.innerHTML=`
      <div class="msg-bubble">${s}</div>
      <span class="msg-time">Vừa xong</span>
    `,r.appendChild(v),r.scrollTop=r.scrollHeight}function w(s){const p=document.createElement("div");p.className="chat-typing-indicator",p.innerHTML="<span></span><span></span><span></span>",r.appendChild(p),r.scrollTop=r.scrollHeight,setTimeout(()=>{p.remove();let v="Cảm ơn bạn đã nhắn tin! Chuyên viên Ondata đã nhận được yêu cầu và sẽ phản hồi ngay.";const f=s.toLowerCase();f.includes("all-in-one")||f.includes("aio")||f.includes("máy tính")?v='Dạ máy tính All-in-one Ondata One 24" và Pro 27" 2K hiện đang có sẵn cấu hình i5/i7 cực mạnh, bảo hành chính hãng 24-36 tháng. Quý khách vui lòng để lại SĐT hoặc gọi Hotline <strong>0867036698</strong> để được báo giá ưu đãi nhất ạ!':f.includes("màn hình")||f.includes("monitor")?v='Dạ Ondata có màn hình từ 24" IPS 100Hz đến màn hình cong 27" 165Hz và 34" Ultrawide sắc nét chuẩn màu đồ họa & gaming. Quý khách có thể xem chi tiết tại mục Sản phẩm hoặc liên hệ hotline <strong>0867036698</strong> để được hỗ trợ ạ!':f.includes("báo giá")||f.includes("đại lý")||f.includes("dự án")?v="Dạ phòng kinh doanh Ondata luôn có chính sách chiết khấu đại lý và giá dự án hấp dẫn. Vui lòng gửi email tới <strong>nchieu@xinchen.vn</strong> hoặc gọi hotline <strong>0867036698</strong> để nhận bảng báo giá ngay ạ!":(f.includes("bảo hành")||f.includes("kỹ thuật"))&&(v="Dạ sản phẩm Ondata được bảo hành chính hãng 24 đến 36 tháng (RAM bảo hành trọn đời), tiếp nhận xử lý tận nơi. Mọi sự cố kỹ thuật quý khách hãy liên hệ Hotline <strong>0867036698</strong> để được hỗ trợ tức thì!"),b(v,!1)},700)}e==null||e.addEventListener("submit",s=>{s.preventDefault();const p=o==null?void 0:o.value.trim();p&&(b(p,!0),o.value="",w(p))}),document.querySelectorAll(".chat-quick-btn").forEach(s=>{s.addEventListener("click",()=>{const p=s.dataset.query;p&&(b(p,!0),w(p))})})}let q=0,K="all";const S={aio:{label:"Máy tính All-in-one",sub:"Thiết kế tinh gọn, hiệu năng vượt trội all-in-one"},monitor:{label:"Màn hình",sub:"Hiển thị sắc nét, công nghệ bảo vệ mắt đỉnh cao"},keyboard:{label:"Bàn phím",sub:"Cảm giác gõ êm ái, switch bền bỉ, thiết kế tinh xảo"},mouse:{label:"Chuột",sub:"Độ nhạy chuẩn xác, công thái học vừa vặn lòng bàn tay"},ram:{label:"RAM",sub:"Tốc độ vượt trội, đa nhiệm bền bỉ"},accessories:{label:"Phụ kiện",sub:"Hoàn thiện góc làm việc và trải nghiệm đỉnh cao"},laptop:{label:"Máy tính All-in-one",sub:"Thiết kế tinh gọn, hiệu năng vượt trội all-in-one"},desktop:{label:"Máy tính All-in-one",sub:"Thiết kế tinh gọn, hiệu năng vượt trội all-in-one"},all:{label:"Sản phẩm",sub:"Tất cả sản phẩm chính hãng Ondata"}};function H(n){let t=document.querySelector(".toast-container");t||(t=document.createElement("div"),t.className="toast-container",document.body.appendChild(t));const i=document.createElement("div");i.className="toast-alert",i.innerHTML=`<span style="color:#7ea835;font-weight:700;">✓</span> <span>${n}</span>`,t.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(10px)",setTimeout(()=>i.remove(),300)},3e3)}function Ln(){if(window.location.hash&&window.location.hash.startsWith("#/")){const t=window.location.hash.slice(1);window.history.replaceState({},"",t)}let n=window.location.pathname.replace(/\/+$/,"")||"/";if(n.startsWith("/dist")&&(n=n.replace(/^\/dist/,"")||"/"),n.startsWith("/san-pham")){const t=n.split("/").filter(Boolean),i=t[1]||"all",a=t[2]||null;if(a)return{page:"detail",cat:i,id:a};if(i!=="all"){const e=z(i);if(e)return{page:"detail",cat:e.cat,id:e.id}}return{page:"catalog",cat:i}}return n.startsWith("/ve-ondata")||n.startsWith("/gioi-thieu")?{page:"about"}:n.startsWith("/tin-tuc")?{page:"news"}:n.startsWith("/lien-he")?{page:"contact"}:n.startsWith("/ho-tro")?{page:"support",sub:n.split("/").filter(Boolean)[1]||null}:{page:"home"}}function y(n){const t=n.startsWith("#/")?n.slice(1):n;window.location.pathname!==t&&window.history.pushState({},"",t),C(),window.scrollTo({top:0,behavior:"smooth"})}window.navigate=y;function Hn(){return`
    ${U()}
    ${X()}
    ${Z()}
    ${Y()}
  `}function Sn(){document.querySelectorAll(".sidebar-item a[data-cat]").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),y(`/san-pham/${t.dataset.cat}`)})}),document.querySelectorAll('a[href="#featured-products"], a[href="/san-pham/all"]').forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),y("/san-pham/all")})});const n=document.getElementById("newsletter-form");n&&(n.onsubmit=t=>{t.preventDefault();const i=document.getElementById("newsletter-email");i!=null&&i.value&&(H(`Đã đăng ký nhận tin thành công: ${i.value}`),i.value="")}),document.querySelectorAll(".product-item-card").forEach(t=>{t.onclick=()=>{const i=t.dataset.id,a=t.dataset.cat;y(i&&a?`/san-pham/${a}/${i}`:"/san-pham/all")}})}function An(n){dn(n),document.querySelectorAll(".catsidebar-link[data-cat]").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),y(`/san-pham/${t.dataset.cat}`)})})}function In(n){const t=S[n]||S.all;return _(n,t)}function Pn(n){on(),document.querySelectorAll(".catsidebar-link[data-cat]").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),y(`/san-pham/${t.dataset.cat}`)})})}function En(){const n=document.getElementById("nav-hamburger"),t=document.getElementById("nav-menu");n&&t&&(n.onclick=()=>t.classList.toggle("mobile-open"));const i=document.getElementById("search-input"),a=document.getElementById("search-dropdown"),e=document.querySelector(".search-btn");if(i&&a){let s=[],p=-1;const v=g=>{switch(g){case"aio":case"laptop":case"desktop":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="2"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>';case"monitor":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="10.5" y2="17"/><line x1="16" y1="21" x2="13.5" y2="17"/></svg>';case"keyboard":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2.5"/><line x1="7" y1="14" x2="17" y2="14"/></svg>';case"mouse":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="6"/><circle cx="12" cy="7.5" r="1.2" fill="currentColor"/></svg>';case"ram":return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="9" rx="1.5"/><line x1="5" y1="16" x2="5" y2="18.5"/><line x1="8" y1="16" x2="8" y2="18.5"/><line x1="11" y1="16" x2="11" y2="18.5"/><line x1="13" y1="16" x2="13" y2="18.5"/><line x1="16" y1="16" x2="16" y2="18.5"/><line x1="19" y1="16" x2="19" y2="18.5"/></svg>';case"accessories":default:return'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'}},f=g=>{var m;return((m=S[g])==null?void 0:m.label)||"Sản phẩm"},I=g=>{const m=(g||"").trim();m?(s=O(m),p=-1,s.length>0?a.innerHTML=`
            <div class="search-header-label">Tìm thấy ${s.length} sản phẩm</div>
            ${s.map((u,B)=>`
              <div class="search-item" data-id="${u.id}" data-cat="${u.cat}" data-idx="${B}">
                <span class="search-item-icon">${v(u.cat)}</span>
                <div class="search-item-details">
                  <span class="search-item-name">${u.name}</span>
                  <span class="search-item-cat">${u.badge?`<span class="search-badge">${u.badge}</span>`:""} ${f(u.cat)}</span>
                </div>
                <span class="search-item-price">Liên hệ</span>
              </div>
            `).join("")}
          `:a.innerHTML=`
            <div class="search-empty">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.4">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <span>Không tìm thấy sản phẩm cho "<strong>${m}</strong>"</span>
            </div>
          `):(s=k.slice(0,5),p=-1,a.innerHTML=`
          <div class="search-header-label">Sản phẩm gợi ý</div>
          ${s.map((u,B)=>`
            <div class="search-item" data-id="${u.id}" data-cat="${u.cat}" data-idx="${B}">
              <span class="search-item-icon">${v(u.cat)}</span>
              <div class="search-item-details">
                <span class="search-item-name">${u.name}</span>
                <span class="search-item-cat">${u.badge?`<span class="search-badge">${u.badge}</span>`:""} ${f(u.cat)}</span>
              </div>
              <span class="search-item-price">Liên hệ</span>
            </div>
          `).join("")}
        `),a.querySelectorAll(".search-item").forEach(u=>{u.addEventListener("mousedown",B=>{B.preventDefault();const G=u.dataset.id,R=u.dataset.cat;G&&R&&T(R,G)})})},T=(g,m)=>{a.classList.remove("show"),i.blur(),y(`/san-pham/${g}/${m}`)},P=()=>{if(p>=0&&s[p]){const u=s[p];T(u.cat,u.id);return}const g=i.value.trim();if(!g){s.length>0&&T(s[0].cat,s[0].id);return}const m=O(g);m.length>0?T(m[0].cat,m[0].id):H(`Không tìm thấy sản phẩm phù hợp với "${g}"`)};i.addEventListener("focus",()=>{I(i.value),a.classList.add("show")}),i.addEventListener("input",()=>{I(i.value),a.classList.add("show")}),i.addEventListener("keydown",g=>{const m=a.querySelectorAll(".search-item");g.key==="ArrowDown"?(g.preventDefault(),m.length>0&&(p=(p+1)%m.length,E(m))):g.key==="ArrowUp"?(g.preventDefault(),m.length>0&&(p=(p-1+m.length)%m.length,E(m))):g.key==="Enter"?(g.preventDefault(),P()):g.key==="Escape"&&a.classList.remove("show")});const E=g=>{g.forEach((m,u)=>{m.classList.toggle("search-item--active",u===p),u===p&&m.scrollIntoView({block:"nearest"})})};e&&e.addEventListener("click",g=>{g.preventDefault(),P()}),document.addEventListener("click",g=>{!i.contains(g.target)&&!a.contains(g.target)&&!(e!=null&&e.contains(g.target))&&a.classList.remove("show")})}const o=document.getElementById("back-to-top");window.addEventListener("scroll",()=>{o&&o.classList.toggle("visible",window.scrollY>300)}),o&&(o.onclick=()=>window.scrollTo({top:0,behavior:"smooth"}));const r=document.getElementById("menu-home");r&&r.addEventListener("click",s=>{s.preventDefault(),y("/")});const l=document.getElementById("menu-about");l&&l.addEventListener("click",s=>{s.preventDefault(),y("/ve-ondata")});const h=document.getElementById("menu-products");h&&h.addEventListener("click",s=>{s.preventDefault(),y("/san-pham/all")});const c=document.getElementById("menu-news");c&&c.addEventListener("click",s=>{s.preventDefault(),y("/tin-tuc")});const d=document.getElementById("menu-contact");d&&d.addEventListener("click",s=>{s.preventDefault(),y("/lien-he")});const b=document.getElementById("menu-support");b&&b.addEventListener("click",s=>{s.preventDefault(),y("/ho-tro")});const w=document.getElementById("cart-badge");w&&(w.textContent=q)}function C(){var d,b,w,s,p,v;const n=document.querySelector("#app");if(!n)return;const t=Ln(),i=t.page==="home",a=t.page==="about",e=t.page==="catalog",o=t.page==="detail",r=t.page==="news",l=t.page==="contact",h=t.page==="support";document.body.classList.add("theme-onda-dark");let c=null;o&&(c=z(t.id)),n.innerHTML=`
    ${V(q)}
    <main id="main-content">
      ${i?Hn():""}
      ${a?Tn():""}
      ${e?In(t.cat):""}
      ${o?rn(c):""}
      ${r?gn(K):""}
      ${l?vn():""}
      ${h?Bn(t.sub):""}
    </main>
    ${J()}
    ${Mn()}
    <button class="back-to-top" id="back-to-top" aria-label="Lên đầu trang">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
  `,window.scrollTo({top:0}),En(),Dn(),i&&Sn(),e&&Pn(t.cat),o&&An(c),r&&un(f=>{K=f,C()}),l&&mn(H),h&&Cn(t.sub,H),(d=document.getElementById("menu-home"))==null||d.classList.toggle("active",i),(b=document.getElementById("menu-about"))==null||b.classList.toggle("active",a),(w=document.getElementById("menu-products"))==null||w.classList.toggle("active",e||o),(s=document.getElementById("menu-news"))==null||s.classList.toggle("active",r),(p=document.getElementById("menu-contact"))==null||p.classList.toggle("active",l),(v=document.getElementById("menu-support"))==null||v.classList.toggle("active",h)}window.addEventListener("popstate",C);window.addEventListener("hashchange",C);document.addEventListener("click",n=>{const t=n.target.closest("a");if(!t)return;const i=t.getAttribute("href");if(i){if(i.startsWith("#")&&!i.startsWith("#/")){const a=document.querySelector(i);a&&(n.preventDefault(),a.scrollIntoView({behavior:"smooth"}));return}if(i.startsWith("/")&&!i.startsWith("//")){n.preventDefault(),y(i);return}if(i.startsWith("#/")){n.preventDefault(),y(i.slice(1));return}}});C();
