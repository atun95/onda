/* ============================================================
   NEWS & ARTICLES DATA STORE
   ============================================================ */

export const NEWS_CATEGORIES = [
  { id: 'all', label: 'Tất cả' },
  { id: 'buying-guide', label: 'Tư vấn chọn mua' },
  { id: 'tips', label: 'Hướng dẫn sử dụng' },
  { id: 'trends', label: 'Xu hướng công nghệ' },
];

export const ARTICLES = [
  {
    id: 'chon-laptop-sinh-vien',
    featured: true,
    category: 'buying-guide',
    categoryLabel: 'Tư vấn chọn mua',
    title: 'Cách chọn laptop phù hợp cho sinh viên',
    date: '08/10/2025',
    readTime: '5 phút đọc',
    summary: 'Tổng hợp kinh nghiệm chọn mua laptop tối ưu theo ngành học: Kinh tế, CNTT, Thiết kế đồ họa và Y dược với mức ngân sách hợp lý nhất.',
    content: `
      <p>Bước vào giảng đường đại học, một chiếc laptop phù hợp là người bạn đồng hành không thể thiếu. Tùy thuộc vào ngành học và nhu cầu sử dụng thực tế, sinh viên cần cân nhắc các yếu tố then chốt như CPU, RAM, thời lượng pin và trọng lượng máy.</p>
      <h3>1. Xác định nhu cầu theo chuyên ngành</h3>
      <p>• <strong>Khối Kinh tế, Xã hội, Ngôn ngữ:</strong> Ưu tiên laptop mỏng nhẹ dưới 1.5kg, pin từ 8-10 tiếng, cấu hình Core i3/i5 hoặc Ryzen 5, RAM 8GB - 16GB để phục vụ soạn thảo văn bản, làm slide và thuyết trình.</p>
      <p>• <strong>Khối Công nghệ thông tin, Lập trình:</strong> Cần chip đa nhân hiệu năng cao (Core i5/i7 thế hệ 12 trở lên), RAM tối thiểu 16GB, ổ cứng SSD NVMe tốc độ cao để chạy máy ảo, Docker và biên dịch code mượt mà.</p>
      <p>• <strong>Khối Thiết kế đồ họa, Kiến trúc:</strong> Đòi hỏi màn hình chuẩn màu 100% sRGB, độ phân giải cao và card đồ họa rời chuyên dụng (RTX 3050 trở lên).</p>
      <h3>2. Tầm ngân sách tham khảo</h3>
      <p>Mức giá từ 12 - 18 triệu đồng hiện nay đã có thể sở hữu các dòng máy Ondata Pro với cấu hình mạnh mẽ, bảo hành chính hãng 24 tháng và thiết kế kim loại sang trọng.</p>
    `,
  },
  {
    id: 'meo-tang-tuoi-tho-pin-laptop',
    featured: false,
    category: 'tips',
    categoryLabel: 'Hướng dẫn sử dụng',
    title: '5 mẹo tăng tuổi thọ pin laptop',
    date: '06/10/2025',
    readTime: '4 phút đọc',
    summary: 'Những thói quen sử dụng đơn giản nhưng giúp kéo dài độ bền pin Lithium-ion trên laptop thêm từ 2 - 3 năm.',
    content: `
      <p>Pin laptop bị chai nhanh là nỗi lo của hầu hết người dùng. Áp dụng ngay 5 nguyên tắc vàng dưới đây:</p>
      <p>1. <strong>Bật chế độ giới hạn sạc (Battery Care):</strong> Giới hạn mức sạc tối đa ở ngưỡng 80% khi cắm sạc liên tục tại bàn làm việc.</p>
      <p>2. <strong>Tránh để pin cạn kiệt về 0%:</strong> Nên cắm sạc khi pin còn khoảng 15 - 20% để bảo toàn chu kỳ sạc.</p>
      <p>3. <strong>Giữ máy luôn mát mẻ:</strong> Nhiệt độ cao là kẻ thù số 1 của pin. Hãy sử dụng giá đỡ tản nhiệt hoặc kê cao đuôi máy khi làm tác vụ nặng.</p>
      <p>4. <strong>Điều chỉnh độ sáng màn hình hợp lý:</strong> Màn hình tiêu thụ tới 40% điện năng của máy.</p>
      <p>5. <strong>Cập nhật Driver và BIOS định kỳ:</strong> Giúp tối ưu hóa việc quản lý điện áp của hệ thống.</p>
    `,
  },
  {
    id: 'xu-huong-man-hinh-2025',
    featured: false,
    category: 'trends',
    categoryLabel: 'Xu hướng công nghệ',
    title: 'Xu hướng màn hình 2025 – Những điều cần biết',
    date: '05/10/2025',
    readTime: '6 phút đọc',
    summary: 'Công nghệ màn hình cong 1500R, tấm nền OLED tần số quét 240Hz và tỷ lệ 16:10 đang dần định hình tiêu chuẩn làm việc và giải trí mới.',
    content: `
      <p>Năm 2025 đánh dấu bước chuyển mình mạnh mẽ trong ngành sản xuất tấm nền màn hình:</p>
      <p>• <strong>Tần số quét cao trở thành tiêu chuẩn:</strong> Mức 165Hz - 240Hz không còn độc quyền cho giới game thủ mà đã phủ sóng tới các dòng màn hình văn phòng cao cấp, mang lại trải nghiệm cuộn trang và làm việc mượt mà vượt bậc.</p>
      <p>• <strong>Độ cong 1500R ôm trọn góc nhìn:</strong> Giúp mắt điều tiết tự nhiên hơn khi nhìn từ tâm sang các góc mép màn hình, giảm mỏi mắt khi làm việc nhiều giờ liền.</p>
      <p>• <strong>Kết nối Type-C All-in-One:</strong> Một cáp duy nhất vừa truyền hình ảnh 4K, truyền dữ liệu vừa sạc ngược 65W - 90W cho laptop.</p>
    `,
  },
  {
    id: 'so-sanh-ram-ddr4-va-ddr5',
    featured: false,
    category: 'buying-guide',
    categoryLabel: 'Tư vấn chọn mua',
    title: 'So sánh RAM DDR4 và DDR5: Nên chọn loại nào?',
    date: '01/10/2025',
    readTime: '4 phút đọc',
    summary: 'Phân tích chi tiết về tốc độ băng thông, điện năng tiêu thụ và chi phí đầu tư giữa chuẩn DDR4 phổ thông và thế hệ DDR5 tiên tiến.',
    content: `
      <p>Khi build PC hoặc nâng cấp laptop, người dùng thường băn khoăn liệu DDR5 đã thực sự cần thiết hay DDR4 vẫn còn đủ dùng:</p>
      <p>• <strong>Băng thông và tốc độ:</strong> DDR5 khởi điểm ở mức 4800MHz - 6400MHz, gần gấp đôi so với chuẩn DDR4 3200MHz, giúp giải quyết các tác vụ render video 4K và nạp texture game nhanh hơn đáng kể.</p>
      <p>• <strong>Mức giá và độ tương thích:</strong> Hiện nay giá RAM DDR5 đã hạ nhiệt rất nhiều và tiệm cận với DDR4, khiến đây trở thành sự lựa chọn đầu tư dài hạn thông minh cho các dàn máy mới thế hệ 13 và 14.</p>
    `,
  },
];
