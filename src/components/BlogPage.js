export function renderBlogPage() {
  return `
    <div class="page-content">
      <section class="blog-page">
        <div class="container-sm">
          <div class="breadcrumb">
            <a href="#" data-page="home">Trang chủ</a>
            <span class="separator">›</span>
            <a href="#" data-page="blog">Tin tức & Kiến thức</a>
          </div>
          
          <h1>Kiến thức công nghệ</h1>
          <p class="blog-desc">Cập nhật xu hướng, mẹo ứi dụng và kinh nghiệm chọn thiết bị.</p>
          
          <div class="blog-tabs" id="blog-tabs">
            <button class="blog-tab active" data-filter="all">Tất cả</button>
            <button class="blog-tab" data-filter="buying-guide">Tư vấn chọn mua</button>
            <button class="blog-tab" data-filter="how-to">Hướng dẫn sử dụng</button>
            <button class="blog-tab" data-filter="trends">Xu hướng công nghệ</button>
          </div>
          
          <div class="blog-list" id="blog-list">
            <div class="blog-item featured" data-category="buying-guide">
              <img src="/office.jpg" alt="Cách chọn laptop phù hợp cho sinh viên" class="blog-item-img" />
              <div class="blog-item-content">
                <div class="blog-item-meta">04/10/2025 · 10min/read</div>
                <h3>Cách chọn laptop phù hợp cho sinh viên</h3>
                <span class="blog-item-tag">Tư vấn chọn mua</span>
              </div>
            </div>
            
            <div class="blog-item" data-category="how-to">
              <img src="/office.jpg" alt="5 mẹo tăng tuổi thọ pin laptop" class="blog-item-img" />
              <div class="blog-item-content">
                <div class="blog-item-meta">08/10/2025</div>
                <h3>5 mẹo tăng tuổi thọ pin laptop</h3>
                <span class="blog-item-tag">Hướng dẫn sử dụng</span>
              </div>
            </div>
            
            <div class="blog-item" data-category="trends">
              <img src="/office.jpg" alt="Xu hướng màn hình 2025" class="blog-item-img" />
              <div class="blog-item-content">
                <div class="blog-item-meta">05/10/2025</div>
                <h3>Xu hướng màn hình 2025 – Những điều cần biết</h3>
                <span class="blog-item-tag">Xu hướng công nghệ</span>
              </div>
            </div>
            
            <div class="blog-item" data-category="buying-guide">
              <img src="/office.jpg" alt="So sánh RAM DDR4 và DDR5" class="blog-item-img" />
              <div class="blog-item-content">
                <div class="blog-item-meta">01/10/2025</div>
                <h3>So sánh RAM DDR4 và DDR5: Nên chọn loại nào?</h3>
                <span class="blog-item-tag">Tư vấn chọn mua</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
