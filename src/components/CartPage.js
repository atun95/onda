export function renderCartPage() {
  return `
    <div class="page-content">
      <section class="cart-page">
        <div class="container">
          <div class="breadcrumb">
            <a href="#" data-page="home">Trang chủ</a>
            <span class="separator">›</span>
            <span class="current">Giỏ hàng</span>
          </div>
          
          <h1>Giỏ hàng <span>(3 sản phẩm)</span></h1>
          
          <div class="cart-layout">
            <div class="cart-table-wrapper">
              <div class="cart-table" id="cart-table">
                <div class="cart-table-header">
                  <div>Sản phẩm</div>
                  <div>Đơn giá</div>
                  <div>Số lượng</div>
                  <div>Thành tiền</div>
                  <div></div>
                </div>
                
                <div class="cart-item" id="cart-item-1">
                  <div class="cart-item-info">
                    <img src="/office.jpg" alt="Laptop Ondata Pro 15" class="cart-item-img" />
                    <div>
                      <div class="cart-item-name">Laptop Ondata Pro 15</div>
                      <div class="cart-item-variant">Màu: Bạc</div>
                    </div>
                  </div>
                  <div class="cart-item-price">15.000.000đ</div>
                  <div class="cart-qty">
                    <button class="qty-minus" data-id="1">−</button>
                    <input type="text" value="1" readonly />
                    <button class="qty-plus" data-id="1">+</button>
                  </div>
                  <div class="cart-item-total">15.990.000đ</div>
                  <div class="cart-remove" title="Xóa">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  </div>
                </div>
                
                <div class="cart-item" id="cart-item-2">
                  <div class="cart-item-info">
                    <img src="/office.jpg" alt="Màn hình Ondata 27" class="cart-item-img" />
                    <div>
                      <div class="cart-item-name">Màn hình Ondata 27"</div>
                      <div class="cart-item-variant">2K IPS</div>
                    </div>
                  </div>
                  <div class="cart-item-price">7.890.000đ</div>
                  <div class="cart-qty">
                    <button class="qty-minus" data-id="2">−</button>
                    <input type="text" value="1" readonly />
                    <button class="qty-plus" data-id="2">+</button>
                  </div>
                  <div class="cart-item-total">7.890.000đ</div>
                  <div class="cart-remove" title="Xóa">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  </div>
                </div>
                
                <div class="cart-item" id="cart-item-3">
                  <div class="cart-item-info">
                    <img src="/office.jpg" alt="Chuột Gaming Ondata" class="cart-item-img" />
                    <div>
                      <div class="cart-item-name">Chuột Gaming Ondata</div>
                      <div class="cart-item-variant">Đen</div>
                    </div>
                  </div>
                  <div class="cart-item-price">790.000đ</div>
                  <div class="cart-qty">
                    <button class="qty-minus" data-id="3">−</button>
                    <input type="text" value="1" readonly />
                    <button class="qty-plus" data-id="3">+</button>
                  </div>
                  <div class="cart-item-total">790.000đ</div>
                  <div class="cart-remove" title="Xóa">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  </div>
                </div>
                
                <div class="cart-continue">
                  <a class="btn-outline-secondary btn-small" data-page="products">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                    Tiếp tục mua hàng
                  </a>
                </div>
              </div>
            </div>
            
            <div class="cart-summary" id="cart-summary">
              <h3>Thông tin giao hàng</h3>
              
              <div class="form-group" style="margin-bottom: 12px;">
                <label>Họ và tên *</label>
                <input type="text" placeholder="Nhập họ và tên" />
              </div>
              <div class="form-group" style="margin-bottom: 12px;">
                <label>Số điện thoại *</label>
                <input type="tel" placeholder="Nhập số điện thoại" />
              </div>
              <div class="form-group" style="margin-bottom: 12px;">
                <label>Địa chỉ nhận hàng *</label>
                <select>
                  <option>Chọn tỉnh/thành phố</option>
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                </select>
              </div>
              <div class="form-group" style="margin-bottom: 12px;">
                <label>Địa chỉ chi tiết</label>
                <input type="text" placeholder="Số nhà, tên đường..." />
              </div>
              
              <div class="cart-shipping">
                <h4>Phương thức vận chuyển</h4>
                <label class="shipping-option">
                  <input type="radio" name="shipping" value="express" checked />
                  Giao hàng nhanh (1-2 ngày)
                  <span class="fee">35.000đ</span>
                </label>
                <label class="shipping-option">
                  <input type="radio" name="shipping" value="standard" />
                  Giao hàng tiêu chuẩn (3-5 ngày)
                  <span class="fee">Miễn phí</span>
                </label>
              </div>
              
              <div class="cart-summary-row">
                <span class="label">Tạm tính</span>
                <span class="value">24.670.000đ</span>
              </div>
              <div class="cart-summary-row discount">
                <span class="label">Giảm giá</span>
                <span class="value">-400.000đ</span>
              </div>
              <div class="cart-summary-row">
                <span class="label">Phí vận chuyển</span>
                <span class="value">35.000đ</span>
              </div>
              
              <div class="cart-summary-total">
                <span>Tổng cộng</span>
                <span class="total-price">24.270.000đ</span>
              </div>
              
              <button class="btn-primary btn-full btn-large" style="margin-top: 16px;" id="checkout-btn">
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
