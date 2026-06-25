import { ProductType, FloorPlanItem, FacilityItem, ProgressItem, BrochurePage } from "./types";

export const PROJECT_DETAILS = {
  name: "HÀ NỘI SEASONS GARDEN",
  developer: "Masterise Homes",
  hotline: "0971735999",
  hotlineFormatted: "0971.735.999",
  zaloUrl: "https://zalo.me/0971735999",
  website: "https://mastericaoxalanguyentrai.com/",
  officeAddress: "233-235 Nguyễn Trãi, Thanh Xuân, Hà Nội",
  address: "233-235 Nguyễn Trãi, Thanh Xuân, Hà Nội",
  contactPerson: "Tạ Định",
  contactTitle: "Giám đốc dự án"
};

export const SPECIFICATIONS = [
  { label: "Tên dự án", value: "Hà Nội Seasons Garden" },
  { label: "Địa chỉ", value: "233 – 233B – 235 Nguyễn Trãi, Thanh Xuân, Hà Nội" },
  { label: "Chủ đầu tư", value: "Masterise Homes" },
  { label: "Tư vấn thiết kế", value: "P&T Group." },
  { label: "Tư vấn cảnh quan", value: "GroupGSA." },
  { label: "Thiết kế nội thất", value: "That’s ITH interior và 2nd Edition." },
  { label: "Tổng diện tích", value: "11 ha." },
  { label: "Quy mô", value: "10 tòa tháp (chiều cao 43 - 46 tầng)" },
  { label: "Cảnh quan", value: "~ 3,5ha." },
  { label: "Loại hình", value: "Căn hộ cao cấp, Duplex, Penthouse, Shophouse khối đế." },
  { label: "Số lượng", value: "4500 căn hộ." },
  { label: "1 phòng ngủ", value: "46 m2 – 56 m2." },
  { label: "2 phòng ngủ", value: "67 m2 – 85 m2." },
  { label: "3 phòng ngủ", value: "~ 99 m2 – 109 m2." },
  { label: "4 phòng ngủ", value: "126 m2 – 142 m2." },
  { label: "Duplex", value: "~ 124m2 – 200m2." },
  { label: "Penthouse", value: "~ 141m2 – 232.0m2." },
  { label: "Tiêu chuẩn bàn giao", value: "Hoàn thiện nội thất chất lượng 6 sao." },
  { label: "Bàn giao", value: "Quý II/2029" },
  { label: "Sở hữu", value: "Sở hữu lâu dài đối với khách hàng người Việt Nam, 50 năm đối với khách hàng người nước ngoài." },
  { label: "Khởi công", value: "Quý 3/2025." }
];

export const FLOOR_PLANS: FloorPlanItem[] = [
  {
    index: 0,
    image: "https://w.ladicdn.com/s1550x1300/60d9ed782bd66f0013900826/z7820205383854_516beecf8b51c77feb2f57a67723162a-20260513151000-oweny.jpg",
    title: "Mặt bằng tổng thể tháp T1"
  },
  {
    index: 1,
    image: "https://w.ladicdn.com/s1550x1300/60d9ed782bd66f0013900826/z7820205387250_f9613e4c87cb670e57451c38faf53063-20260513151001-nkd-v.jpg",
    title: "Mặt bằng tầng điển hình căn hộ"
  },
  {
    index: 2,
    image: "https://w.ladicdn.com/s1550x1300/60d9ed782bd66f0013900826/z7820205396737_84106fbe9e28f96fa3c5c6b760f5b9e3-20260513151002-defpq.jpg",
    title: "Mặt bằng tháp T2 tầng cao"
  },
  {
    index: 3,
    image: "https://w.ladicdn.com/s1550x1300/60d9ed782bd66f0013900826/z7820205391168_c235604113649b225a1687958cc39964-20260513151001-hbz5i.jpg",
    title: "Mẫu phân bổ cơ cấu căn hộ"
  }
];

export const PRODUCTS: ProductType[] = [
  {
    id: "1pn",
    title: "CĂN HỘ 1 PHÒNG NGỦ",
    image: "https://w.ladicdn.com/s650x550/60d9ed782bd66f0013900826/1pn-min-768x568-20260417022835-mp2pw.jpg",
    description: "Phối cảnh căn hộ 1 Phòng ngủ",
    bullets: [
      "Diện tích: 46 – 56 m²",
      "Số lượng: 120 căn",
      "Phù hợp cho khách hàng trẻ, gia đình mới lập",
      "Thiết kế tối ưu không gian sống",
      "Ban công riêng với tầm nhìn đẹp"
    ]
  },
  {
    id: "2pn",
    title: "CĂN HỘ 2 PHÒNG NGỦ",
    image: "https://w.ladicdn.com/s650x550/60d9ed782bd66f0013900826/2pn-min-768x568-20260417023032-hkjv_.jpg",
    description: "Phối cảnh căn hộ 2 Phòng ngủ",
    bullets: [
      "Diện tích: 67 – 85 m²",
      "Số lượng: 385 căn",
      "Phòng khách liên thông với bếp",
      "2 phòng ngủ có cửa sổ tự nhiên",
      "2 WC riêng biệt"
    ]
  },
  {
    id: "3pn",
    title: "CĂN HỘ 3 PHÒNG NGỦ",
    image: "https://w.ladicdn.com/s650x550/60d9ed782bd66f0013900826/3pn-min-768x568-20260417023118-ks8pm.jpg",
    description: "Phối cảnh căn hộ 3 Phòng ngủ",
    bullets: [
      "Diện tích: 87,3 – 105,8 m²",
      "Số lượng: 320 căn",
      "Phòng khách rộng rãi",
      "Phòng ngủ master",
      "Ban công lớn hướng ra công viên"
    ]
  },
  {
    id: "4pn",
    title: "CĂN HỘ 4 PHÒNG NGỦ",
    image: "https://w.ladicdn.com/s650x550/60d9ed782bd66f0013900826/4pn-min-768x568-20260417023229-lslay.jpg",
    description: "Phối cảnh căn hộ 4 Phòng ngủ",
    bullets: [
      "Diện tích: 126 – 142 m²",
      "Số lượng: 125 căn",
      "Thiết kế sang trọng với nhiều không gian riêng tư",
      "3-4 WC đầy đủ tiện nghi",
      "Khu vực bếp và phòng ăn tách biệt"
    ]
  },
  {
    id: "duplex",
    title: "CĂN HỘ DUPLEX",
    image: "https://w.ladicdn.com/s650x550/60d9ed782bd66f0013900826/4pn-min-768x568-20260417023229-lslay.jpg",
    description: "Phối cảnh căn hộ Duplex",
    bullets: [
      "Diện tích trung bình: 219 m²",
      "Số lượng: 28 căn",
      "Thiết kế 2 tầng với cầu thang nội bộ",
      "Phòng khách có trần cao tạo cảm giác rộng rãi",
      "Khu vực sinh hoạt riêng biệt ở tầng trên"
    ]
  },
  {
    id: "penthouse",
    title: "BIỆT THỰ PENTHOUSE",
    image: "https://w.ladicdn.com/s650x550/60d9ed782bd66f0013900826/4pn-min-768x568-20260417023229-lslay.jpg",
    description: "Phối cảnh căn hộ Penthouse",
    bullets: [
      "Diện tích: 324 – 783 m²",
      "Số lượng: 12 căn",
      "Sân vườn riêng trên tầng thượng",
      "Tầm nhìn panorama toàn thành phố",
      "Thiết kế nội thất cao cấp theo yêu cầu"
    ]
  }
];

export const FACILITIES: FacilityItem[] = [
  {
    id: "fac_interior",
    image: "https://w.ladicdn.com/s700x600/60d9ed782bd66f0013900826/z7820204877781_0d95f88e496b3825fd1230a63b5b1a1f-20260513144112-en6bc.jpg",
    title: "Thiết kế phòng khách vương giả phong cách Tây Âu"
  },
  {
    id: "fac_pool",
    image: "https://w.ladicdn.com/s700x600/60d9ed782bd66f0013900826/z7820204890660_396af6ffab27ee3ffe08c3ff28977e77-20260513144157-p4hsl.jpg",
    title: "Hồ bơi tràn bờ nước ấm bốn mùa cao cấp"
  },
  {
    id: "fac_garden",
    image: "https://w.ladicdn.com/s700x600/60d9ed782bd66f0013900826/z7820204886900_27501cc8bc07bfc8c182ab72ac1adbd0-20260513144314-b-yd2.jpg",
    title: "Công viên Seasons Garden ngập tràn mảng xanh thư giãn"
  },
  {
    id: "fac_lounge",
    image: "https://w.ladicdn.com/s700x600/60d9ed782bd66f0013900826/z7820204902223_bce145a18ca65f9186adca785b5d7b97-20260513144435-cxv6u.jpg",
    title: "Clubhouse và Business Lounge chuẩn khách sạn 5 sao"
  },
  {
    id: "fac_kids",
    image: "https://w.ladicdn.com/s700x600/60d9ed782bd66f0013900826/z7820204923938_7edfd3f6dc9af9e70c2a1250c12def1f-20260513144546-9ip1l.jpg",
    title: "Khu vui chơi trẻ em năng động giàu trải nghiệm thể chất"
  },
  {
    id: "fac_lobby",
    image: "https://w.ladicdn.com/s700x600/60d9ed782bd66f0013900826/z7820204921978_cf4af016f831877fa5830de24d786583-20260513144615-uqzg2.jpg",
    title: "Sảnh đón tiếp cư dân tráng lệ với quản gia chuyên nghiệp"
  }
];

export const TECHNICAL_PROGRESS: ProgressItem[] = [
  {
    id: "prog_1",
    image: "https://w.ladicdn.com/s800x600/60d9ed782bd66f0013900826/z7723291920913_cb92cf8dbcb7c1ea0a82a4470af640d1-20260417021912-xti7t.jpg",
    title: "Tổng quan giải phóng mặt bằng và san nền đại lộ Nguyễn Trãi"
  },
  {
    id: "prog_2",
    image: "https://w.ladicdn.com/s800x600/60d9ed782bd66f0013900826/z7723291917739_9c179c5977e6e7eeb253a79f851abbd3-20260417021912-ooiaz.jpg",
    title: "Hạ tầng móng cọc các block trung tâm đang được gia công tốc lực"
  },
  {
    id: "prog_3",
    image: "https://w.ladicdn.com/s800x600/60d9ed782bd66f0013900826/z7723291942774_a4284dedbf02b35a50656c7e7b4b8e3b-20260417021912-fsd53.jpg",
    title: "Thiết bị đóng cọc nhồi ép bấc nhập khẩu từ Thổ Nhĩ Kỳ"
  },
  {
    id: "prog_4",
    image: "https://w.ladicdn.com/s800x600/60d9ed782bd66f0013900826/z7723291933874_9b4832cf757e35aed65932e8ff4a7809-20260417021912-a123w.jpg",
    title: "Đội ngũ kỹ sư Masterise sát sao kiểm nghiệm chất lượng bê tông"
  }
];

export const BROCHURES: BrochurePage[] = [
  {
    page: 1,
    image: "https://i.postimg.cc/J046KsjJ/bang-gia-cao-xa-la-1.png"
  },
  {
    page: 2,
    image: "https://i.postimg.cc/D0yj5S1L/bang-gia-cao-xa-la-l2.png"
  },
  {
    page: 3,
    image: "https://i.postimg.cc/k5Kp53nM/anh-ta-dinh.jpg"
  }
];
