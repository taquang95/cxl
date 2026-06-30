import React from "react";
import { MapPin, Phone, Globe } from "lucide-react";
import { PROJECT_DETAILS } from "../data";

interface FooterProps {
  onOpenBooking: (apartmentType?: string) => void;
  onOpenPolicy: () => void;
}

export default function Footer({ onOpenBooking, onOpenPolicy }: FooterProps) {
  const handleFooterNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#FAF9F6] text-[#131E1B] border-t border-gray-200 pt-16 pb-8 relative overflow-hidden font-sans">
      {/* Decorative light gray shadow ambient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#CB7037]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Sizable Footer Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-gray-200 font-sans">
          
          {/* Column 1: Info and Office address */}
          <div className="md:col-span-12 lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://w.ladicdn.com/s450x400/60d9ed782bd66f0013900826/logo-20260513145931-yq7ou.png"
                alt="Hà Nội Seasons Garden Logo"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="w-[1.5px] h-6 bg-gray-300" />
              <img
                src="https://w.ladicdn.com/s400x400/60d9ed782bd66f0013900826/logo_mh_trang-20260417014254-j986k.png"
                alt="Masterise Homes Logo white"
                className="h-9 w-auto object-contain brightness-0 opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-gray-500 leading-relaxed text-left font-sans">
              Đơn vị thông tin và tư vấn phân phối bất động sản căn hộ cao cấp Hà Nội Seasons Garden Nguyễn Trãi. Đặt trọn niềm tin - Nhận trọn tổ ấm.
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#CB7037] shrink-0 mt-0.5" />
                <p className="leading-relaxed text-gray-600">
                  <strong className="text-[#2A3A35]">Địa Chỉ Dự Án & VPGD:</strong> <br />
                  {PROJECT_DETAILS.officeAddress}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#CB7037]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#CB7037] font-bold text-[10px]">
                  GD
                </div>
                <p className="leading-relaxed text-gray-600">
                  <strong className="text-[#2A3A35]">{PROJECT_DETAILS.contactTitle}:</strong> <br />
                  <span className="text-[#CB7037] font-semibold">{PROJECT_DETAILS.contactPerson}</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#CB7037] shrink-0" />
                <p className="text-gray-600">
                  <strong className="text-[#2A3A35]">Hotline Trực Tiếp:</strong> <br />
                  <a href={`tel:${PROJECT_DETAILS.hotline}`} className="text-[#CB7037] font-bold hover:underline text-base">
                    {PROJECT_DETAILS.hotlineFormatted}
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#CB7037] shrink-0" />
                <p className="text-gray-600">
                  <strong className="text-[#2A3A35]">Website Hỗ Trợ:</strong> <br />
                  <a
                    href={PROJECT_DETAILS.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#CB7037] transition-colors hover:underline"
                  >
                    {PROJECT_DETAILS.website}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Chính sách bảo mật & Quyền riêng tư (Replaced from Danh mục truy cập & Đăng ký tư vấn) */}
          <div className="md:col-span-12 lg:col-span-8 space-y-5 text-left font-sans">
            <h4 className="text-sm font-bold tracking-wider text-[#2A3A35] uppercase border-l-2 border-[#CB7037] pl-3">
              CHÍNH SÁCH BẢO MẬT & QUYỀN RIÊNG TƯ
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
              <div className="space-y-4">
                <div className="space-y-1">
                  <h5 className="font-bold text-[#CB7037] text-xs uppercase tracking-wide">1. Mục đích thu thập dữ liệu</h5>
                  <p className="text-gray-600 font-sans leading-relaxed">
                    Chúng tôi thu thập thông tin cá nhân của quý khách (bao gồm: Họ tên, Số điện thoại di động, Loại căn hộ quan tâm) nhằm mục đích duy nhất là cung cấp thông tin tư vấn chính thức, báo giá chi tiết, sơ đồ mặt bằng tối ưu, và lịch trình tham quan căn hộ dự án Hà Nội Seasons Garden Nguyễn Trãi.
                  </p>
                </div>

                <div className="space-y-1">
                  <h5 className="font-bold text-[#CB7037] text-xs uppercase tracking-wide">2. Cam kết bảo mật thông tin</h5>
                  <p className="text-gray-600 font-sans leading-relaxed">
                    Mọi thông tin cá nhân quý cư dân cung cấp được lưu trữ trên máy chủ bảo mật tối ưu của Masterise Homes. Chúng tôi cam kết tuyệt đối:
                  </p>
                  <ul className="space-y-1.5 pl-4 list-disc text-gray-500 font-sans leading-relaxed">
                    <li>Không bán, chia sẻ hoặc cho thuê thông tin cá nhân cho bên thứ ba.</li>
                    <li>Không spam tin nhắn quảng cáo không thuộc phạm vi dự án Seasons Garden.</li>
                    <li>Mã hóa các luồng truyền thông tin khách hàng trên hệ thống kỹ thuật số.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h5 className="font-bold text-[#CB7037] text-xs uppercase tracking-wide">3. Quyền hạn của khách hàng</h5>
                  <p className="text-gray-600 font-sans leading-relaxed">
                    Quý khách bất kỳ lúc nào cũng có quyền yêu cầu tư vấn viên sửa đổi, hủy bỏ thông tin cá nhân đã khai báo bằng việc liên hệ trực tiếp số điện thoại đường dây nóng <a href="tel:0971735999" className="text-[#CB7037] font-bold hover:underline font-mono">0971.735.999</a> hoặc từ chối cuộc gọi từ chuyên viên tư vấn.
                  </p>
                </div>

                <div className="space-y-1">
                  <h5 className="font-bold text-[#CB7037] text-xs uppercase tracking-wide">4. Lưu ý quan trọng</h5>
                  <p className="text-gray-500 italic text-[11px] sm:text-xs leading-normal font-sans">
                    * Website là trang trung gian cập nhật thông tin kế hoạch phục vụ khách hàng tìm hiểu mua căn hộ Masterise Homes, không phải là trang trực tiếp phòng quan hệ đối tác đầu tư chính phủ của chủ đầu tư. Mọi thiết kế phối cảnh và con số mang tính tham khảo dự án sớm trước kỳ bán hàng chính thức.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Company Legal Information - Schema & SEO Compliant (Styled to match attached layout) */}
        <div className="mt-14 p-6 sm:p-10 md:p-12 rounded-2xl bg-[#182622] text-white border border-[#2A3A35]/30 shadow-2xl relative overflow-hidden font-sans">
          {/* Subtle background glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#CB7037]/5 blur-3xl rounded-full pointer-events-none" />

          {/* Top block (Centered) */}
          <div className="relative z-10 text-center space-y-4 max-w-4xl mx-auto">
            <h4 className="text-base sm:text-lg md:text-xl font-bold tracking-wider text-white uppercase font-sans">
              CÔNG TY CỔ PHẦN PHÁT TRIỂN BẤT ĐỘNG SẢN TRƯỜNG PHÁT GROUP
            </h4>
            <p className="text-[#CB7037] text-[11px] sm:text-xs font-bold tracking-widest uppercase">
              ĐƠN VỊ PHÂN PHỐI CHÍNH THỨC DỰ ÁN HANOI SEASONS GARDEN
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white font-medium">Địa chỉ:</strong> Căn biệt thự SB-72, dự án Vinhomes Ocean Park 2 - The Empire, Xã Long Hưng, Huyện Văn Giang, Tỉnh Hưng Yên, Việt Nam
              </p>
              <p>
                <strong className="text-white font-medium">Mã số thuế:</strong> <span className="font-mono text-white font-bold bg-white/10 px-2 py-0.5 rounded border border-white/5">0901144166</span>
              </p>
              <p>
                <strong className="text-white font-medium">Email hóa đơn bản XML và PDF về:</strong>{" "}
                <a href="mailto:ketoan@truongphatgroup.com.vn" className="text-[#CB7037] hover:underline font-bold font-mono">
                  ketoan@truongphatgroup.com.vn
                </a>
              </p>
            </div>
          </div>

          {/* Horizontal dividing line */}
          <div className="w-full h-[1px] bg-white/10 my-8 relative z-10" />

          {/* Bottom columns (2 columns: Commitment & Privacy) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
            {/* Left Column: Commitment */}
            <div className="space-y-4">
              <h5 className="text-xs md:text-sm font-bold tracking-wider text-white uppercase relative pl-3 border-l-2 border-[#CB7037]">
                CAM KẾT TỪ NHÀ PHÂN PHỐI UY TÍN CHÍNH THỨC
              </h5>
              <ul className="space-y-2.5 text-xs text-gray-300 font-sans leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#CB7037] shrink-0 text-[8px] mt-1.5">■</span>
                  <span>Đội ngũ chuyên viên tư vấn Chuyên nghiệp, trung thực, Nhiệt tình, Nhiều năm kinh nghiệm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CB7037] shrink-0 text-[8px] mt-1.5">■</span>
                  <span>Mọi thủ tục, Pháp lý khách hàng đều được thực hiện ký kết trực tiếp với Chủ đầu tư</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CB7037] shrink-0 text-[8px] mt-1.5">■</span>
                  <span>Cung cấp thông tin nhanh chóng, chính xác và cập nhật mới nhất từ chủ đầu tư</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CB7037] shrink-0 text-[8px] mt-1.5">■</span>
                  <span>Hỗ trợ tư vấn trực tiếp, chuyên sâu giúp quý khách tìm căn hộ phù hợp với gia đình</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CB7037] shrink-0 text-[8px] mt-1.5">■</span>
                  <span>Trực tiếp hướng dẫn quý khách tham quan căn hộ thực tế và nhà mẫu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CB7037] shrink-0 text-[8px] mt-1.5">■</span>
                  <span>Hỗ trợ thủ tục giấy tờ Liên quan trong quá trình mua & Hậu chăm sóc lâu dài</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Privacy Policy */}
            <div className="space-y-4">
              <h5 className="text-xs md:text-sm font-bold tracking-wider text-white uppercase relative pl-3 border-l-2 border-[#CB7037]">
                CHÍNH SÁCH BẢO MẬT
              </h5>
              <p className="text-xs text-gray-300 leading-relaxed font-sans font-normal italic">
                Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và không chia sẻ, bán hoặc trao đổi thông tin cá nhân của bạn cho bên thứ ba trừ khi có sự đồng ý rõ ràng từ bạn hoặc theo yêu cầu pháp luật.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-sans">
          <p className="font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Hà Nội Seasons Garden Nguyễn Trãi. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-sans">
            <button
              onClick={onOpenPolicy}
              className="hover:text-[#CB7037] transition-colors underline font-medium cursor-pointer"
            >
              Chính sách & quyền riêng tư
            </button>
          </div>
        </div>

        {/* Structured Schema.org JSON-LD for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Công ty Cổ Phần Phát Triển Bất Động Sản Trường Phát Group",
              "taxID": "0901144166",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Căn biệt thự SB-72, dự án Vinhomes Ocean Park 2 - The Empire, Xã Long Hưng",
                "addressLocality": "Huyện Văn Giang",
                "addressRegion": "Tỉnh Hưng Yên",
                "addressCountry": "VN"
              },
              "email": "ketoan@truongphatgroup.com.vn",
              "telephone": PROJECT_DETAILS.hotline,
              "url": PROJECT_DETAILS.website
            })
          }}
        />

      </div>
    </footer>
  );
}
