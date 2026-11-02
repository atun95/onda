/* ============================================================
   PRODUCTS DATA STORE - ONDATA VIETNAM
   6 danh mục lớn vẫn giữ. Chi tiết sản phẩm hiện chỉ có 3 màn hình.
   Các danh mục khác sẽ bổ sung sản phẩm sau.
   ============================================================ */

export const SHARED_MONITOR_IMAGES = [
  '/images/monitors/monitor-01.png?v=2',
  '/images/monitors/monitor-02.png?v=2',
];

export const CATEGORIES_LIST = [
  { id: 'aio',         name: 'Máy tính All-in-one', icon: 'aio',         desc: 'Máy tính tất cả trong một tinh gọn, mạnh mẽ' },
  { id: 'monitor',     name: 'Màn hình',            icon: 'monitor',     desc: 'Hiển thị sắc nét, tần số quét cao, bảo vệ mắt' },
  { id: 'keyboard',    name: 'Bàn phím',            icon: 'keyboard',    desc: 'Bàn phím cơ & công thái học gõ êm mượt' },
  { id: 'mouse',       name: 'Chuột',               icon: 'mouse',       desc: 'Chuột quang học, wireless độ nhạy cao' },
  { id: 'ram',         name: 'RAM',                 icon: 'ram',         desc: 'Bộ nhớ DDR4/DDR5 tốc độ cao, đa nhiệm tối ưu' },
  { id: 'accessories', name: 'Phụ kiện',            icon: 'accessories', desc: 'Giá treo, hub chuyển đổi, lót chuột cao cấp' },
];

export let PRODUCTS = [
  /* ─────────── MÀN HÌNH (3 SẢN PHẨM) ─────────── */
  {
    id: 'od215100vv',
    cat: 'monitor',
    name: 'Màn hình ONDATA OD215100VV 21.5 inch 100Hz Full HD VA',
    images: SHARED_MONITOR_IMAGES,
    badge: 'Mới',
    price: 0,
    stars: 5,
    reviews: 0,
    seo: {
      title: 'Màn hình ONDATA OD215100VV 21.5 inch 100Hz Full HD VA',
      description: 'Màn hình ONDATA OD215100VV 21.5 inch Full HD, 100Hz, tấm nền VA, 95% sRGB, HDMI + VGA, giảm ánh sáng xanh.',
      keywords: 'màn hình ONDATA OD215100VV, màn hình 21.5 inch, màn hình 100Hz, màn hình VA Full HD, màn hình văn phòng, màn hình 95% sRGB, màn hình HDMI VGA',
    },
    specs: [
      { icon: 'monitor', label: 'Kích thước', value: '21.5" VA Full HD' },
      { icon: 'cpu', label: 'Tần số quét', value: '100Hz' },
      { icon: 'gpu', label: 'Độ tương phản', value: '3000:1 (Typ.)' },
      { icon: 'ram', label: 'Dải màu', value: '95% sRGB' },
      { icon: 'shield', label: 'Kết nối', value: 'HDMI + VGA' },
      { icon: 'shield', label: 'Treo tường', value: 'VESA 75×75 mm' },
    ],
    desc: 'Màn hình ONDATA OD215100VV là màn hình LCD 21.5 inch, độ phân giải Full HD 1920×1080, tấm nền VA, tần số quét 100Hz. Màn hình phủ 95% sRGB, có công nghệ giảm ánh sáng xanh và đủ hai cổng HDMI, VGA. Sản phẩm phù hợp cho văn phòng, học tập, giải trí và công việc thiết kế cơ bản.',
    features: [
      'Tần số quét 100Hz, thao tác mượt hơn màn hình 60Hz',
      'Tấm nền VA, độ tương phản 3000:1',
      'Phủ 95% sRGB, 16.7 triệu màu',
      'HDMI + VGA, hỗ trợ VESA 75×75 mm',
    ],
    techSpecs: {
      'Model': 'OD215100VV',
      'Kích thước': '21.5 inch, tỷ lệ 16:9',
      'Vùng hiển thị': '478.654 (H) × 260.28 (V) mm',
      'Tấm nền / đèn nền': 'VA / ELED',
      'Độ phân giải': '1920 × 1080 (Full HD), 102 PPI',
      'Tần số quét': '100Hz',
      'Thời gian phản hồi': '14ms (Typ.)',
      'Độ sáng': '250 cd/m² (Max.)',
      'Độ tương phản': '3000:1 (Typ.)',
      'Dải màu': '95% sRGB (BT.709), 16.7 triệu màu',
      'Góc nhìn': '178° (H) / 178° (V)',
      'Cổng vào': 'HDMI + VGA',
      'Nguồn điện': '12V / 2.5A, adapter rời',
      'Công suất': 'Tối đa 26W; chờ < 0.5W',
      'Nhiệt độ hoạt động / lưu trữ': '0°C ~ 40°C / -20°C ~ 60°C',
      'Độ ẩm hoạt động / lưu trữ': '10~80% RH / 5~90% (không ngưng tụ)',
      'Chân đế': 'Chữ V, cố định',
      'VESA': '75 × 75 mm',
      'Kích thước sản phẩm': '494 × 153 × 367 mm',
      'Kích thước đóng gói': '546 × 93 × 346 mm',
      'Màu vỏ': 'Đen',
    },
    detailHtml: `
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
    `,
  },
  {
    id: 'od238120iv',
    cat: 'monitor',
    name: 'Màn hình ONDATA OD238120IV 23.8" IPS Full HD 120Hz',
    images: SHARED_MONITOR_IMAGES,
    badge: 'Mới',
    price: 0,
    stars: 5,
    reviews: 0,
    seo: {
      title: 'Màn hình ONDATA OD238120IV 23.8" IPS Full HD 120Hz',
      description: 'ONDATA OD238120IV màn hình 23.8 inch IPS, Full HD, 120Hz mượt mà, phủ 95% sRGB, HDMI + VGA, hỗ trợ VESA.',
      keywords: 'màn hình ONDATA OD238120IV, màn hình 24 inch 120Hz, màn hình 23.8 inch IPS, màn hình Full HD 120Hz, màn hình văn phòng 24 inch, màn hình ONDATA 120Hz, màn hình máy tính 120Hz giá tốt',
    },
    specs: [
      { icon: 'monitor', label: 'Kích thước', value: '23.8" IPS Full HD' },
      { icon: 'cpu', label: 'Tần số quét', value: '120Hz' },
      { icon: 'gpu', label: 'Tấm nền', value: 'IPS, góc nhìn 178°' },
      { icon: 'ram', label: 'Dải màu', value: '95% sRGB' },
      { icon: 'shield', label: 'Kết nối', value: 'HDMI + VGA' },
      { icon: 'shield', label: 'Treo tường', value: 'VESA 75×75 mm' },
    ],
    desc: 'Màn hình ONDATA OD238120IV mang tần số quét 120Hz lên phân khúc màn hình 24 inch phổ thông, kết hợp tấm nền IPS Full HD cho màu sắc đẹp, góc nhìn rộng. Thiết kế viền mỏng, chân đế chữ V gọn gàng và khả năng treo tường VESA 75×75mm giúp máy phù hợp từ bàn làm việc gia đình đến văn phòng, phòng máy và cửa hàng.',
    features: [
      'Tần số quét 120Hz, mượt hơn thấy rõ so với 60Hz',
      'Tấm nền IPS, góc nhìn 178°',
      'Độ phủ màu 95% sRGB, 16.7 triệu màu',
      'Viền mỏng, VESA 75×75mm, HDMI + VGA',
    ],
    techSpecs: {
      'Model': 'OD238120IV',
      'Kích thước': '23.8 inch, tỷ lệ 16:9',
      'Công nghệ LCD': 'IPS, đèn nền DLED',
      'Độ phân giải': '1920 × 1080 (Full HD)',
      'Tần số quét': '120Hz',
      'Độ phủ màu': '95% sRGB (BT.709)',
      'Màu hiển thị': '16.7 triệu màu',
      'Độ sáng': '250 cd/m² (tối đa)',
      'Độ tương phản': '1000:1',
      'Thời gian phản hồi': '14ms (Typ.)',
      'Góc nhìn': '178° (H) / 178° (V)',
      'Vùng hiển thị': '527.04 (H) × 296.46 (V) mm',
      'Cổng kết nối': 'Vào: VGA + HDMI; Ra: không có',
      'Nguồn điện': 'Adapter ngoài 12V/2.5A',
      'Công suất': 'Tối đa 30W; chờ < 0.5W',
      'Nhiệt độ / độ ẩm hoạt động': '0°C ~ 40°C / 10 ~ 80% RH',
      'Nhiệt độ / độ ẩm bảo quản': '-20°C ~ 60°C / 5 ~ 90% (không ngưng tụ)',
      'Chân đế': 'Chữ V cố định',
      'Treo tường': 'VESA 75×75mm',
      'Kích thước sản phẩm': '539 × 153 × 407 mm',
      'Kích thước đóng gói': '617 × 110 × 406 mm',
      'Màu vỏ': 'Đen',
      'Đèn báo': 'Xanh: đang hoạt động; đỏ: không tín hiệu hoặc chế độ chờ',
    },
    detailHtml: `
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
    `,
  },
  {
    id: 'od270100iv',
    cat: 'monitor',
    name: 'Màn hình ONDATA OD270100IV 27 inch IPS 100Hz Full HD',
    images: SHARED_MONITOR_IMAGES,
    badge: 'Mới',
    price: 0,
    stars: 5,
    reviews: 0,
    seo: {
      title: 'Màn hình ONDATA OD270100IV 27 inch IPS 100Hz Full HD',
      description: 'Màn hình ONDATA OD270100IV 27 inch IPS Full HD 100Hz, 95% sRGB, giảm ánh sáng xanh, HDMI + VGA, tặng kèm cáp HDMI.',
      keywords: 'màn hình ONDATA OD270100IV, màn hình 27 inch 100Hz, màn hình IPS 27 inch Full HD, màn hình máy tính 27 inch, màn hình văn phòng 27 inch, màn hình ONDATA chính hãng, màn hình HDMI VGA 27 inch',
    },
    specs: [
      { icon: 'monitor', label: 'Kích thước', value: '27" IPS Full HD' },
      { icon: 'cpu', label: 'Tần số quét', value: '100Hz' },
      { icon: 'gpu', label: 'Tấm nền', value: 'IPS, góc nhìn 178°' },
      { icon: 'ram', label: 'Dải màu', value: '95% sRGB' },
      { icon: 'shield', label: 'Kết nối', value: 'HDMI + VGA, tặng cáp HDMI' },
      { icon: 'shield', label: 'Treo tường', value: 'VESA 75×75 mm' },
    ],
    desc: 'Màn hình ONDATA OD270100IV là màn hình 27 inch tấm nền IPS, độ phân giải Full HD 1920×1080, tần số quét 100Hz. Màn hình có độ phủ màu 95% sRGB, công nghệ giảm ánh sáng xanh và kết nối HDMI + VGA, phù hợp cho văn phòng, học tập, thiết kế cơ bản và giải trí hằng ngày.',
    features: [
      'Tần số quét 100Hz, mượt hơn màn hình 60Hz',
      'Tấm nền IPS, góc nhìn rộng 178°',
      'Dải màu 95% sRGB, màn hình lớn 27 inch',
      'HDMI + VGA, VESA 75×75mm, tặng kèm cáp HDMI',
    ],
    techSpecs: {
      'Model': 'OD270100IV',
      'Kích thước màn hình': '27 inch',
      'Tấm nền / đèn nền': 'IPS / DLED',
      'Tỷ lệ khung hình': '16:9',
      'Độ phân giải': '1920×1080 (Full HD)',
      'Tần số quét': '100Hz',
      'Độ sáng': '250 cd/m² (tối đa)',
      'Độ tương phản': '1000:1',
      'Thời gian phản hồi': '14ms (Typ.)',
      'Màu hiển thị': '16.7 triệu màu',
      'Độ phủ màu': '95% sRGB (BT.709)',
      'Góc nhìn': '178° (H) / 178° (V)',
      'Vùng hiển thị': '597.888 (H) × 336.312 (V) mm',
      'Cổng vào': 'HDMI + VGA',
      'Cổng ra': 'Không có',
      'Nguồn điện': 'Adapter ngoài 12V/2.5A',
      'Công suất': 'Tối đa 30W; chế độ chờ < 0.5W',
      'Điều khiển': '1 nút điều hướng',
      'Chân đế': 'Chữ V, cố định',
      'Chuẩn treo tường': 'VESA 75×75mm',
      'Kích thước sản phẩm': '613.3 × 153 × 441 mm',
      'Kích thước đóng gói': '682 × 123 × 440 mm',
      'Màu vỏ': 'Đen',
      'Nhiệt độ hoạt động': '0°C ~ 40°C',
      'Độ ẩm hoạt động': '10% ~ 80% RH',
      'Điều kiện lưu trữ': '-20°C ~ 60°C; độ ẩm 5% ~ 90% (không ngưng tụ)',
    },
    detailHtml: `
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
    `,
  },
];

/* ── Helpers ──────────────────────────────────────────── */
export function removeVietnameseTones(str) {
  if (!str) return '';
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
  str = str.replace(/\u02C6|\u0306|\u031B/g, '');
  return str.toLowerCase().trim();
}

export function searchProducts(query) {
  if (!query || !query.trim()) return PRODUCTS;
  const q = removeVietnameseTones(query);
  return PRODUCTS.filter(p => {
    const name = removeVietnameseTones(p.name);
    const cat = removeVietnameseTones(p.cat);
    const desc = p.desc ? removeVietnameseTones(p.desc) : '';
    const id = p.id.toLowerCase();
    return name.includes(q) || cat.includes(q) || id.includes(q) || desc.includes(q);
  });
}

export function getProductById(id) {
  if (!id) return null;
  return PRODUCTS.find(p => p.id === id) || null;
}

export function getProductsByCat(cat) {
  if (!cat || cat === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.cat === cat);
}

export function formatPrice(n) {
  return 'Liên hệ';
}

export function replaceProducts(list) {
  PRODUCTS = Array.isArray(list) ? list : [];
}
