import React, { useState, useTransition } from "react";
import { Landmark, MapPin, Phone, Globe, Shield, FileSpreadsheet, Send, MessageCircle } from "lucide-react";
import { PROJECT_DETAILS } from "../data";
import { BookingLead } from "../types";

interface FooterProps {
  onOpenBooking: (apartmentType?: string) => void;
  onOpenPolicy: () => void;
}

export default function Footer({ onOpenBooking, onOpenPolicy }: FooterProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setErrorMsg(null);

    startTransition(async () => {
      try {
        const payload: BookingLead = {
          name,
          phone,
          apartmentType: "Đăng ký từ chân trang (Footer)",
          sourceForm: "Form Liên Hệ Chân Trang",
          timestamp: new Date().toLocaleString("vi-VN")
        };

        const response = await fetch("/api/booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Có lỗi bất ngờ xảy ra khi gửi đăng ký.");
        }

        try {
          const existingLeads = JSON.parse(localStorage.getItem("masterise_leads") || "[]");
          existingLeads.push(payload);
          localStorage.setItem("masterise_leads", JSON.stringify(existingLeads));
        } catch (storageErr) {
          console.warn("localStorage is not accessible in this context:", storageErr);
        }

        setIsSubmitted(true);
        setName("");
        setPhone("");
      } catch (err: any) {
        console.error("Footer form submission error:", err);
        setErrorMsg(err.message || "Không thể kết nối máy chủ gửi thư. Vui lòng thử lại!");
      }
    });
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

          {/* Column 2: Easy Link anchors navigation */}
          <div className="md:col-span-6 lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-[#2A3A35] uppercase border-l-2 border-[#CB7037] pl-3">
              DANH MỤC TRUY CẬP
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-500 font-sans">
              <li>
                <a href="#gioithieu" className="hover:text-[#CB7037] transition-colors">Giới thiệu tổng quan</a>
              </li>
              <li>
                <a href="#tongquan" className="hover:text-[#CB7037] transition-colors">Thông số dự án Seasons Garden</a>
              </li>
              <li>
                <a href="#sanpham" className="hover:text-[#CB7037] transition-colors">Danh sách 6 loại hình căn hộ</a>
              </li>
              <li>
                <a href="#matbang" className="hover:text-[#CB7037] transition-colors">Bản vẽ thiết kế mặt bằng tầng</a>
              </li>
              <li>
                <a href="#tienich" className="hover:text-[#CB7037] transition-colors">Tiện ích đặc quyền 6 sao</a>
              </li>
              <li>
                <a href="#tiendo" className="hover:text-[#CB7037] transition-colors">Cập nhật tiến trình công trường</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Form Inline */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-[#2A3A35] uppercase border-l-2 border-[#CB7037] pl-3">
              YÊU CẦU ĐOÀN KHẢO SÁT & TƯ VẤN
            </h4>
            
            {!isSubmitted ? (
              <form onSubmit={handleFooterSubmit} className="space-y-3">
                <p className="text-xs text-gray-550 leading-relaxed text-left font-sans">
                  Quý đối tác hoặc quan khách có nhu cầu nhận file thiết kế chuẩn HD hoặc xếp lịch khảo sát căn hộ thực nghiệm hãy gửi yêu cầu nhanh tại đây:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Họ và tên quý khách"
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-250 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#CB7037] text-xs"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Số điện thoại di động"
                    pattern="(\+84|0)(3|5|7|8|9)[0-9]{8}"
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-250 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#CB7037] text-xs"
                  />
                </div>
                {errorMsg && (
                  <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg text-[11px] text-red-700 leading-normal text-center font-medium">
                    {errorMsg}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#CB7037] to-[#BF5E21] hover:from-[#E68142] hover:to-[#CF6A2A] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  {isPending ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>ĐĂNG KÝ NGAY</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="p-4 bg-green-50 rounded-xl border border-green-200 text-center text-xs space-y-2">
                <p className="text-[#CB7037] font-bold uppercase">Gửi yêu cầu thành công!</p>
                <p className="text-gray-600 font-sans">Ban thư ký phòng kinh doanh tháp Seasons Garden sẽ liên hệ với quý khách trong tích tắc.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[10px] text-[#CB7037] underline cursor-pointer"
                >
                  Gửi biểu mẫu khác
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Legal Disclaimers */}
        <div className="mt-8 pt-8 text-left space-y-4 max-w-5xl mx-auto border-t border-gray-200 font-sans">
          <div className="flex flex-col gap-2 text-xs text-gray-500 leading-relaxed font-sans">
            <h5 className="font-bold text-[#CB7037] text-sm tracking-wide uppercase">LƯU Ý</h5>
            <div className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-[#CB7037] shrink-0 mt-0.5" />
              <p>
                * Website này thu thập thông tin cá nhân nhằm mục đích tư vấn sản phẩm. Khi điền thông tin vào các biểu mẫu, quý khách cần đọc kỹ và chấp nhận các điều khoản.
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <FileSpreadsheet className="w-4 h-4 text-gray-550 shrink-0 mt-0.5" />
              <p>
                - Thông tin trên website mang tính tham khảo. Website không phải trang chính thức của chủ đầu tư.
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

      </div>
    </footer>
  );
}
