export function renderHomeNews() {
  return `
    <section class="home-news-section" id="news">
      <div class="container">
        <div class="section-top-bar">
          <h2 class="section-heading">Tin tức & Kiến thức</h2>
          <a href="#/tin-tuc" class="see-all-link">
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
  `;
}
