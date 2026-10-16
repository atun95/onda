/* ============================================================
   PRODUCTS DATA STORE
   Mỗi sản phẩm:  id, cat, name, badge, price, oldPrice,
                  discount, stars, reviews, specs[], desc, features[],
                  techSpecs{}
   ============================================================ */

export const PRODUCTS = [
  /* ─────────── LAPTOP ─────────── */
  {
    id: 'laptop-pro-15',
    cat: 'laptop',
    name: 'Laptop Ondata Pro 15',
    badge: 'Bán chạy',
    price: 15990000,
    oldPrice: 17990000,
    discount: 11,
    stars: 4.5,
    reviews: 24,
    specs: [
      { icon: 'cpu',     label: 'CPU',          value: 'Intel Core i5-1240P' },
      { icon: 'ram',     label: 'RAM',          value: '16GB DDR4' },
      { icon: 'hdd',     label: 'Ổ cứng',       value: 'SSD 512GB' },
      { icon: 'monitor', label: 'Màn hình',     value: '15.6" FHD (1920×1080)' },
      { icon: 'gpu',     label: 'Card đồ họa',  value: 'Intel Iris Xe' },
      { icon: 'shield',  label: 'Bảo hành',     value: '24 tháng' },
    ],
    desc: 'Laptop Ondata Pro 15 được thiết kế dành cho người dùng cần hiệu năng ổn định, thiết kế hiện đại và màn hình sắc nét. Sản phẩm phù hợp cho học tập, văn phòng, học lập trình và giải trí.',
    features: [
      'Hiệu năng ổn định, xử lý mượt mà',
      'Thiết kế mỏng nhẹ, sang trọng',
      'Màn hình FHD cho trải nghiệm hình ảnh sống động',
      'Bảo hành chính hãng 24 tháng',
    ],
    techSpecs: {
      'CPU': 'Intel Core i5-1240P (12 nhân, 16 luồng, 4.4GHz)',
      'RAM': '16GB DDR4 3200MHz (có thể nâng cấp lên 32GB)',
      'Ổ cứng': 'SSD NVMe 512GB PCIe Gen 4',
      'Màn hình': '15.6" IPS FHD 1920×1080, 144Hz, 100% sRGB',
      'Card đồ họa': 'Intel Iris Xe Graphics',
      'Pin': '72Wh, sạc nhanh 65W',
      'Hệ điều hành': 'Windows 11 Home',
      'Cổng kết nối': '2× USB-A 3.2, 1× USB-C, HDMI 2.0, SD Card',
      'Kết nối không dây': 'WiFi 6E, Bluetooth 5.2',
      'Trọng lượng': '1.75 kg',
      'Kích thước': '357 × 230 × 17.9 mm',
      'Màu sắc': 'Xám bạc, Đen nhám',
    },
  },
  {
    id: 'laptop-gaming-16',
    cat: 'laptop',
    name: 'Laptop Gaming Ondata 16',
    badge: 'Mới',
    price: 22890000,
    oldPrice: 25990000,
    discount: 12,
    stars: 4.5,
    reviews: 18,
    specs: [
      { icon: 'cpu',     label: 'CPU',          value: 'Intel Core i7-13700H' },
      { icon: 'ram',     label: 'RAM',          value: '16GB DDR5' },
      { icon: 'hdd',     label: 'Ổ cứng',       value: 'SSD 1TB NVMe' },
      { icon: 'monitor', label: 'Màn hình',     value: '16" QHD 165Hz' },
      { icon: 'gpu',     label: 'Card đồ họa',  value: 'NVIDIA RTX 4060 8GB' },
      { icon: 'shield',  label: 'Bảo hành',     value: '24 tháng' },
    ],
    desc: 'Laptop Gaming Ondata 16 mang đến hiệu năng chơi game đỉnh cao với NVIDIA RTX 4060, màn hình QHD 165Hz và tản nhiệt thông minh. Chiếc laptop lý tưởng cho game thủ và nhà sáng tạo nội dung.',
    features: [
      'Card đồ họa RTX 4060 – chơi game 1080p siêu mượt',
      'Màn hình QHD 165Hz, màu sắc chính xác',
      'Tản nhiệt kép, duy trì hiệu năng tối đa',
      'RGB per-key keyboard, tùy chỉnh không giới hạn',
    ],
    techSpecs: {
      'CPU': 'Intel Core i7-13700H (14 nhân, 20 luồng, 5.0GHz)',
      'RAM': '16GB DDR5 4800MHz (tối đa 64GB)',
      'Ổ cứng': 'SSD NVMe 1TB PCIe Gen 4 + khe mở rộng',
      'Màn hình': '16" IPS QHD 2560×1600, 165Hz, 100% DCI-P3',
      'Card đồ họa': 'NVIDIA GeForce RTX 4060 8GB GDDR6',
      'Pin': '90Wh, sạc nhanh 140W',
      'Hệ điều hành': 'Windows 11 Home',
      'Cổng kết nối': '3× USB-A 3.2, 2× USB-C (TB4), HDMI 2.1, RJ45',
      'Kết nối không dây': 'WiFi 6E, Bluetooth 5.3',
      'Trọng lượng': '2.3 kg',
      'Kích thước': '356 × 255 × 22.9 mm',
      'Màu sắc': 'Đen carbon',
    },
  },
  {
    id: 'laptop-air-14',
    cat: 'laptop',
    name: 'Laptop Ondata Air 14',
    badge: 'Mới',
    price: 12990000,
    oldPrice: null,
    discount: 0,
    stars: 4,
    reviews: 12,
    specs: [
      { icon: 'cpu',     label: 'CPU',          value: 'Intel Core i3-1315U' },
      { icon: 'ram',     label: 'RAM',          value: '8GB DDR4' },
      { icon: 'hdd',     label: 'Ổ cứng',       value: 'SSD 256GB' },
      { icon: 'monitor', label: 'Màn hình',     value: '14" FHD IPS' },
      { icon: 'gpu',     label: 'Card đồ họa',  value: 'Intel UHD Graphics' },
      { icon: 'shield',  label: 'Bảo hành',     value: '24 tháng' },
    ],
    desc: 'Ondata Air 14 – mỏng, nhẹ, thời trang. Thiết kế siêu mỏng chỉ 14.9mm cùng trọng lượng 1.3kg, lý tưởng cho sinh viên và người đi làm năng động.',
    features: [
      'Thiết kế siêu mỏng 14.9mm, nhẹ chỉ 1.3kg',
      'Pin 12 giờ sử dụng liên tục',
      'Màn hình IPS góc nhìn rộng 178°',
      'Âm thanh Dolby Atmos, loa kép stereo',
    ],
    techSpecs: {
      'CPU': 'Intel Core i3-1315U (6 nhân, 8 luồng, 4.5GHz)',
      'RAM': '8GB DDR4 3200MHz',
      'Ổ cứng': 'SSD NVMe 256GB PCIe Gen 3',
      'Màn hình': '14" IPS FHD 1920×1080, 60Hz, 250 nits',
      'Card đồ họa': 'Intel UHD Graphics',
      'Pin': '52Wh, sạc nhanh 45W',
      'Hệ điều hành': 'Windows 11 Home',
      'Cổng kết nối': '2× USB-A, 1× USB-C, HDMI 1.4',
      'Kết nối không dây': 'WiFi 5, Bluetooth 5.0',
      'Trọng lượng': '1.3 kg',
      'Kích thước': '323 × 213 × 14.9 mm',
      'Màu sắc': 'Bạc, Vàng hồng',
    },
  },

  /* ─────────── MONITOR ─────────── */
  {
    id: 'monitor-27-curved',
    cat: 'monitor',
    name: 'Màn hình Ondata 27" Curved',
    badge: 'Bán chạy',
    price: 7990000,
    oldPrice: 8990000,
    discount: 11,
    stars: 5,
    reviews: 31,
    specs: [
      { icon: 'monitor', label: 'Kích thước',   value: '27" cong 1500R' },
      { icon: 'gpu',     label: 'Độ phân giải', value: 'QHD 2560×1440' },
      { icon: 'cpu',     label: 'Tần số quét',  value: '165Hz' },
      { icon: 'shield',  label: 'Thời gian đáp ứng', value: '1ms MPRT' },
      { icon: 'ram',     label: 'Tấm nền',      value: 'VA' },
      { icon: 'shield',  label: 'Bảo hành',     value: '36 tháng' },
    ],
    desc: 'Màn hình cong Ondata 27" mang đến trải nghiệm hình ảnh bao trùm với độ phân giải QHD sắc nét, tần số quét 165Hz mượt mà và thời gian đáp ứng 1ms. Hoàn hảo cho gaming và làm việc chuyên nghiệp.',
    features: [
      'Màn hình cong 1500R tạo cảm giác immersive',
      'QHD 2560×1440 – rõ nét hơn FHD 77%',
      '165Hz + 1ms đáp ứng – zero blur trong gaming',
      'AMD FreeSync Premium, G-Sync Compatible',
    ],
    techSpecs: {
      'Kích thước': '27 inch cong 1500R',
      'Độ phân giải': 'QHD 2560 × 1440 (2K)',
      'Tấm nền': 'VA',
      'Tần số quét': '165Hz',
      'Thời gian đáp ứng': '1ms MPRT',
      'Độ sáng': '350 nits (peak 450 nits)',
      'Tỉ lệ tương phản': '3000:1 (static)',
      'Cổng kết nối': '2× HDMI 2.0, 1× DisplayPort 1.4, 4× USB-A 3.0 hub',
      'Điều chỉnh': 'Nghiêng, xoay 90°, điều chỉnh chiều cao',
      'Chứng chỉ': 'VESA, Eye Care, Flicker Free',
      'Bảo hành': '36 tháng chính hãng',
    },
  },

  /* ─────────── DESKTOP ─────────── */
  {
    id: 'desktop-master',
    cat: 'desktop',
    name: 'Máy tính để bàn Ondata Master',
    badge: 'Mới',
    price: 18990000,
    oldPrice: 21500000,
    discount: 12,
    stars: 4.5,
    reviews: 9,
    specs: [
      { icon: 'cpu',     label: 'CPU',          value: 'Intel Core i7-13700K' },
      { icon: 'ram',     label: 'RAM',          value: '32GB DDR5' },
      { icon: 'hdd',     label: 'Ổ cứng',       value: 'SSD 1TB + HDD 2TB' },
      { icon: 'gpu',     label: 'Card đồ họa',  value: 'RTX 4070 12GB' },
      { icon: 'monitor', label: 'Nguồn',        value: '750W 80+ Gold' },
      { icon: 'shield',  label: 'Bảo hành',     value: '36 tháng' },
    ],
    desc: 'Máy tính để bàn Ondata Master – cỗ máy sức mạnh cho đồ họa, video editing và gaming 4K. Được trang bị RTX 4070 và i7-13700K, không có tác vụ nào là quá khó.',
    features: [
      'RTX 4070 – render nhanh, gaming 4K siêu mượt',
      'Case kính cường lực, LED RGB đồng bộ',
      'Tản nhiệt nước AIO 240mm',
      'SSD NVMe Gen 4 + HDD lưu trữ lớn',
    ],
    techSpecs: {
      'CPU': 'Intel Core i7-13700K (16 nhân, 24 luồng, 5.4GHz)',
      'RAM': '32GB DDR5 6000MHz (4× khe, tối đa 128GB)',
      'SSD': 'NVMe PCIe Gen 4 1TB',
      'HDD': 'SATA 2TB 7200 RPM',
      'Card đồ họa': 'NVIDIA GeForce RTX 4070 12GB GDDR6X',
      'Nguồn': '750W 80+ Gold, Modular',
      'Bo mạch chủ': 'ASUS Z790 Prime WiFi',
      'Case': 'Fractal Design Meshify C TG – kính cường lực',
      'Tản nhiệt': 'AIO 240mm + 4 fan ARGB',
      'Kết nối': 'WiFi 6E, Bluetooth 5.2, 2.5Gbps LAN',
    },
  },

  /* ─────────── RAM ─────────── */
  {
    id: 'ram-ddr5-16',
    cat: 'ram',
    name: 'RAM Ondata DDR5 16GB 5600MHz',
    badge: 'Bán chạy',
    price: 1290000,
    oldPrice: 1490000,
    discount: 13,
    stars: 5,
    reviews: 36,
    specs: [
      { icon: 'ram',     label: 'Dung lượng',   value: '16GB (1× 16GB)' },
      { icon: 'cpu',     label: 'Chuẩn',         value: 'DDR5' },
      { icon: 'gpu',     label: 'Tốc độ',        value: '5600MHz' },
      { icon: 'monitor', label: 'Timing',        value: 'CL36-36-36-76' },
      { icon: 'hdd',     label: 'Điện áp',       value: '1.1V' },
      { icon: 'shield',  label: 'Bảo hành',     value: 'Vĩnh viễn' },
    ],
    desc: 'RAM DDR5 Ondata 16GB 5600MHz – nâng cấp hoàn hảo cho hệ thống thế hệ mới. Hiệu năng vượt trội DDR4, độ trễ thấp và bảo hành vĩnh viễn.',
    features: [
      'DDR5 5600MHz – băng thông tối đa 44.8 GB/s',
      'On-Die ECC tự sửa lỗi dữ liệu',
      'Tản nhiệt nhôm cao cấp',
      'Bảo hành vĩnh viễn chính hãng',
    ],
    techSpecs: {
      'Dung lượng': '16GB (1 thanh)',
      'Chuẩn': 'DDR5',
      'Tốc độ': '5600MHz (PC5-44800)',
      'Timing': 'CL36-36-36-76',
      'Điện áp': '1.1V',
      'Form factor': 'DIMM (288 chân)',
      'Tương thích': 'Intel LGA1700, AMD AM5',
      'Tản nhiệt': 'Nhôm mỏng profile thấp',
      'RGB': 'Không',
      'Bảo hành': 'Vĩnh viễn',
    },
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
  if (id === 'desktop-workstation') id = 'desktop-master';
  if (id === 'ram-ddr5-16gb') id = 'ram-ddr5-16';
  return PRODUCTS.find(p => p.id === id) || null;
}

export function getProductsByCat(cat) {
  if (cat === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.cat === cat);
}

export function formatPrice(n) {
  return 'Liên hệ';
}

