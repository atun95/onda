export function renderAccountPage() {
  return `
    <div class="page-content">
      <section class="account-page">
        <div class="container">
          <div class="breadcrumb">
            <a href="#" data-page="home">Trang chủ</a>
            <span class="separator">›</span>
            <span class="current">Tài khoản</span>
          </div>
          
          <div class="account-layout">
            <div class="account-sidebar" id="account-sidebar">
              <div class="account-user">
                <div class="account-avatar" style="background: var(--primary-xlight); display:flex;align-items:center;justify-content:center;color:var(--primary);font-weight:700;font-size:1.2rem;">N</div>
                <div class="account-user-info">
                  <h4>Nguyễn Văn A</h4>
                  <p>nguyenvana@gmail.com</p>
                </div>
              </div>
              <nav class="account-nav">
                <a class="account-nav-item" data-section="overview">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                  Tổng quan
                </a>
                <a class="account-nav-item active" data-section="orders">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                  Đơn hàng của tôi
                </a>
                <a class="account-nav-item" data-section="profile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Thông tin cá nhân
                </a>
                <a class="account-nav-item" data-section="addresses">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Địa chỉ giao hàng
                </a>
                <a class="account-nav-item" data-section="password">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Đổi mật khẩu
                </a>
                <a class="account-nav-item" data-section="support">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  Hỗ trợ
                </a>
                <a class="account-nav-item" data-section="logout" style="color:#e74c3c;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                  Đăng xuất
                </a>
              </nav>
            </div>
            
            <div class="account-content" id="account-content">
              <h2>Đơn hàng của tôi</h2>
              
              <div class="order-tabs" id="order-tabs">
                <button class="order-tab active" data-status="all">Tất cả</button>
                <button class="order-tab" data-status="confirmed">Chờ xác nhận</button>
                <button class="order-tab" data-status="shipping">Đang giao</button>
                <button class="order-tab" data-status="delivered">Đã giao</button>
                <button class="order-tab" data-status="cancelled">Đã hủy</button>
              </div>
              
              <div class="orders-list" id="orders-list">
                <div class="order-card">
                  <div class="order-card-header">
                    <div>
                      <span class="order-id">#OD125456</span>
                      <span class="order-date" style="margin-left:12px;">10/18/2025 16:30</span>
                    </div>
                    <span class="order-status processing">Đang xử lý</span>
                  </div>
                  <div class="order-card-body">
                    <div class="order-product">
                      <img src="/office.jpg" alt="Product" class="order-product-img" />
                      <div class="order-product-info">
                        <div class="order-total">24.270.000đ</div>
                        <div class="order-total-date">08/10/2025</div>
                      </div>
                    </div>
                    <div class="order-actions">
                      <button class="btn-outline-secondary btn-small">Chi tiết</button>
                    </div>
                  </div>
                </div>
                
                <div class="order-card">
                  <div class="order-card-header">
                    <div>
                      <span class="order-id">#OD125455</span>
                      <span class="order-date" style="margin-left:12px;">10/16/2025 16:30</span>
                    </div>
                    <span class="order-status delivered">Đã giao</span>
                  </div>
                  <div class="order-card-body">
                    <div class="order-product">
                      <img src="/office.jpg" alt="Product" class="order-product-img" />
                      <div class="order-product-info">
                        <div class="order-total">08.200.000đ</div>
                        <div class="order-total-date">08/10/2025</div>
                      </div>
                    </div>
                    <div class="order-actions">
                      <button class="btn-outline-secondary btn-small">Chi tiết</button>
                    </div>
                  </div>
                </div>
                
                <div class="order-card">
                  <div class="order-card-header">
                    <div>
                      <span class="order-id">#OD125454</span>
                      <span class="order-date" style="margin-left:12px;">08/18/2025 09:15</span>
                    </div>
                    <span class="order-status cancelled">Đã hủy</span>
                  </div>
                  <div class="order-card-body">
                    <div class="order-product">
                      <img src="/office.jpg" alt="Product" class="order-product-img" />
                      <div class="order-product-info">
                        <div class="order-total">0đ 110.000.000đ</div>
                        <div class="order-total-date">08/10/2025</div>
                      </div>
                    </div>
                    <div class="order-actions">
                      <button class="btn-outline-secondary btn-small">Chi tiết</button>
                    </div>
                  </div>
                </div>
                
                <div class="order-card">
                  <div class="order-card-header">
                    <div>
                      <span class="order-id">#OD125453</span>
                      <span class="order-date" style="margin-left:12px;">10/05/2025 14:30</span>
                    </div>
                    <span class="order-status shipping">Đang giao</span>
                  </div>
                  <div class="order-card-body">
                    <div class="order-product">
                      <img src="/office.jpg" alt="Product" class="order-product-img" />
                      <div class="order-product-info">
                        <div class="order-total">04.000.000đ</div>
                        <div class="order-total-date">08/10/2025</div>
                      </div>
                    </div>
                    <div class="order-actions">
                      <button class="btn-outline-secondary btn-small">Chi tiết</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
