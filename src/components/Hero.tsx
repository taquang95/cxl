import React, { useState, useTransition } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, ShieldAlert, Award, Compass, KeyRound, ChevronDown } from "lucide-react";
import { PROJECT_DETAILS, PRODUCTS } from "../data";
import { BookingLead } from "../types";

interface HeroProps {
  onOpenBooking: (apartmentType?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleLocalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setErrorMsg(null);

    startTransition(async () => {
      try {
        const payload: BookingLead = {
          name,
          phone,
          apartmentType: interest || "Căn hộ bất kỳ",
          sourceForm: "Form Hero Banner chính",
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
          throw new Error(data.error || "Gửi đăng ký không thành công. Quý khách vui lòng thử lại sau.");
        }

        try {
          const existingLeads = JSON.parse(localStorage.getItem("masterise_leads") || "[]");
          existingLeads.push(payload);
          localStorage.setItem("masterise_leads", JSON.stringify(existingLeads));
        } catch (storageErr) {
          console.warn("localStorage is not accessible in this context:", storageErr);
        }

        setIsSubmitted(true);
      } catch (err: any) {
        console.error("Hero form submission error:", err);
        setErrorMsg(err.message || "Không thể kết nối máy chủ gửi thư. Vui lòng thử lại!");
      }
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* SECTION 1: CINEMATIC HERO BANNER (Dành riêng cho ảnh bìa, tiêu đề chính & CTA) */}
      <section id="gioithieu" className="relative h-[90vh] md:h-[95vh] flex items-center overflow-hidden bg-[#131E1B]">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          {/* Subtle gradient overlay of 5% opacity per user's request */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#131E1B] via-zinc-900/60 to-transparent z-10 opacity-5" />
          {/* Main dark overlay to guarantee typography contrast & readablity */}
          <div className="absolute inset-0 bg-black/45 z-10" />
          <img
            src="https://i.postimg.cc/J0DGc54N/cao-xa-la-masterise-homee.png"
            alt="Hà Nội Seasons Garden Nguyễn Trãi"
            className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-10000 opacity-90"
            referrerPolicy="no-referrer"
          />
          {/* Elegant bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#131E1B] to-transparent z-10" />
        </div>

        {/* Hero Content - Clean cinematic image mode with scroll indicator only */}
        <div className="container mx-auto px-4 lg:px-8 relative z-25 max-w-7xl text-center h-full flex flex-col justify-end pb-12">
          {/* Scroll down indicator */}
          <div className="mx-auto">
            <button
              onClick={() => scrollToSection("dangky-tuvan")}
              className="animate-bounce inline-flex items-center justify-center p-3 rounded-full border border-white/20 text-white hover:text-[#CB7037] hover:border-[#CB7037] transition-all cursor-pointer bg-black/40 backdrop-blur-sm shadow-lg"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: DEDICATED CONSULTATION SECTION (Nơi đăng ký nhận tài liệu, bảng giá chính thức) */}
      <section id="dangky-tuvan" className="relative py-20 bg-[#FAF9F6] border-t border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#CB7037]/5 via-transparent to-transparent z-0 pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2A3A35] tracking-tight">
              Yêu Cầu Tư Vấn & Nhận <br className="hidden sm:block" />
              <span className="text-[#CB7037] font-serif">
                Bảng Giá Seasons Garden
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-[#CB7037] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Sales Representative info & Project Perks */}
            <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Policy 1: Lãi suất hỗ trợ 70% */}
                  <div className="p-4 rounded-xl bg-white border border-gray-200/80 hover:border-[#CB7037]/50 hover:shadow-md transition-all space-y-1.5">
                    <span className="text-[10px] font-bold text-[#CB7037] tracking-wider uppercase font-sans">Hỗ Trợ Lãi Suất</span>
                    <h4 className="text-xs font-bold text-[#2A3A35] uppercase font-sans">Vay tối đa 70%</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans">
                      Trả trước chỉ <strong>25%</strong>, hưởng lãi suất <strong>0%</strong> đến ngày <strong className="text-[#CB7037]">30/06/2029</strong>.
                    </p>
                  </div>

                  {/* Policy 2: Lãi suất hỗ trợ 50% */}
                  <div className="p-4 rounded-xl bg-white border border-gray-200/80 hover:border-[#CB7037]/50 hover:shadow-md transition-all space-y-1.5">
                    <span className="text-[10px] font-bold text-[#CB7037] tracking-wider uppercase font-sans">Hỗ Trợ Lãi Suất</span>
                    <h4 className="text-xs font-bold text-[#2A3A35] uppercase font-sans">Vay tối đa 50%</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans">
                      Hưởng lãi suất <strong>0%</strong> kéo dài đến hết ngày <strong className="text-[#CB7037]">30/09/2029</strong>.
                    </p>
                  </div>

                  {/* Policy 3: Chiết khấu thanh toán */}
                  <div className="p-4 rounded-xl bg-white border border-gray-200/80 hover:border-[#CB7037]/50 hover:shadow-md transition-all space-y-1.5">
                    <span className="text-[10px] font-bold text-[#CB7037] tracking-wider uppercase font-sans">Phương Thức Thanh Toán</span>
                    <div className="space-y-1 font-sans">
                      <p className="text-xs text-gray-600">
                        • Thanh toán sớm: <strong className="text-[#CB7037]">CK 17%</strong>
                      </p>
                      <p className="text-xs text-gray-600">
                        • Theo tiến độ: <strong className="text-[#CB7037]">CK 8%</strong>
                      </p>
                    </div>
                  </div>

                  {/* Policy 4: Chiết khấu ưu tiên đặc quyền */}
                  <div className="p-4 rounded-xl bg-white border border-gray-200/80 hover:border-[#CB7037]/50 hover:shadow-md transition-all space-y-1.5">
                    <span className="text-[10px] font-bold text-[#CB7037] tracking-wider uppercase font-sans">Ưu Đãi Đặc Quyền</span>
                    <div className="space-y-1 font-sans">
                      <p className="text-xs text-gray-600">
                        • Booking sớm (Early Bird): <strong className="text-[#CB7037]">1%</strong>
                      </p>
                      <p className="text-xs text-gray-600">
                        • Khách hàng cư dân: <strong className="text-[#CB7037]">2%</strong>
                      </p>
                    </div>
                  </div>

                  {/* Policy 5: Quà tặng và Bàn giao */}
                  <div className="p-4 rounded-xl bg-white border border-gray-200/80 hover:border-[#CB7037]/50 hover:shadow-md transition-all space-y-2 md:col-span-2">
                    <span className="text-[10px] font-bold text-[#CB7037] tracking-wider uppercase font-sans">Dịch vụ & Bàn giao</span>
                    <div className="grid grid-cols-2 gap-4 font-sans">
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wide">Quà tặng ưu đãi</p>
                        <p className="text-xs text-gray-800 font-bold">Miễn phí PDV 12 - 24 tháng</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wide">Bàn giao dự kiến</p>
                        <p className="text-xs text-[#CB7037] font-bold">Quý IV / 2028</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Sales Manager Board */}
              <div className="p-5 md:p-6 bg-white rounded-2xl border border-[#CB7037]/25 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <h4 className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold">{PROJECT_DETAILS.contactTitle}</h4>
                    <p className="text-lg text-[#2A3A35] font-serif font-bold tracking-wide mt-0.5">{PROJECT_DETAILS.contactPerson}</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-ping shrink-0" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-gray-600 leading-relaxed font-sans max-w-sm">
                    Liên hệ trực tiếp qua số Hotline để nhận thông tin mật và hỗ trợ đặt lịch hẹn tham quan căn hộ mẫu thực tế.
                  </p>
                  <a
                    href={`tel:${PROJECT_DETAILS.hotline}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#CB7037] to-[#BF5E21] hover:from-[#E68142] hover:to-[#CF6A2A] text-white font-bold text-sm tracking-wide shadow-md transition-all shrink-0 text-center font-sans cursor-pointer"
                  >
                    📞 {PROJECT_DETAILS.hotlineFormatted}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interaction Form Card */}
            <div className="lg:col-span-6 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-white p-6 md:p-8 rounded-2xl border border-gray-200/80 shadow-xl relative"
              >
                {/* Visual light accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#CB7037]/5 blur-2xl rounded-full pointer-events-none" />

                {!isSubmitted ? (
                  <>
                    <div className="mb-6">
                      <h4 className="text-lg md:text-xl font-serif font-bold text-[#2A3A35] text-center sm:text-left">
                        ĐĂNG KÝ NHẬN PROFILE DỰ ÁN
                      </h4>
                      <p className="text-xs text-[#CB7037] tracking-widest mt-1 font-semibold uppercase text-center sm:text-left">
                        Bảng Giá, File Thiết Kế & Quy Hoạch Chi Tiết 2026
                      </p>
                    </div>

                    <form onSubmit={handleLocalSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Họ và tên quý khách *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Nhập tên đầy đủ (Ví dụ: Nguyễn Văn A)"
                          className="w-full px-4 py-3.5 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#CB7037] focus:ring-1 focus:ring-[#CB7037] transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Số điện thoại liên hệ *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Số điện thoại di động chính thức"
                          pattern="(\+84|0)(3|5|7|8|9)[0-9]{8}"
                          className="w-full px-4 py-3.5 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#CB7037] focus:ring-1 focus:ring-[#CB7037] transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Nhu cầu dòng căn hộ</label>
                        <select
                          required
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-[#CB7037] focus:ring-1 focus:ring-[#CB7037] transition-all text-sm"
                        >
                          <option value="" className="text-gray-400">-- Quý khách vui lòng chọn loại căn hộ --</option>
                          {PRODUCTS.map((prod) => (
                            <option key={prod.id} value={prod.title} className="bg-white text-gray-800">
                              {prod.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {errorMsg && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-650 leading-normal text-center font-medium">
                          {errorMsg}
                        </div>
                      )}

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isPending}
                          className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-gradient-to-r from-[#CB7037] to-[#BF5E21] hover:from-[#E68142] hover:to-[#CF6A2A] text-white font-bold text-sm tracking-widest uppercase transition-all shadow-md active:scale-98 cursor-pointer"
                        >
                          {isPending ? (
                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <>
                              <Send className="w-4.5 h-4.5" />
                              <span>GỬI YÊU CẦU ĐỂ CHUYÊN VIÊN LIÊN HỆ NGAY</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>

                    <p className="text-center text-[11px] text-gray-500 mt-4 italic leading-relaxed">
                      * Thông tin đăng ký được xử lý nội bộ, bảo mật tuyệt đối 100% theo tiêu chuẩn an ninh của Masterise Homes.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-10 space-y-5">
                    <div className="inline-flex p-3 rounded-full bg-green-500/15 text-green-600 border border-green-500/20">
                      <CheckCircle2 className="w-12 h-12 animate-pulse" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-[#2A3A35] uppercase tracking-wide">ĐĂNG KÝ THÀNH CÔNG!</h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans max-w-md mx-auto font-medium">
                      Hệ thống đã gửi trọn bộ tài liệu chi tiết của dự án <strong className="text-[#CB7037]">Hà Nội Seasons Garden</strong> đến hòm thư chăm sóc khách hàng.
                    </p>
                    <p className="text-xs text-[#CB7037] font-semibold italic max-w-sm mx-auto">
                      Quản lý dự án trưởng sẽ liên lạc xác nhận trực tiếp tới quý khách qua số điện thoại vừa cung cấp để tư vấn chi tiết.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer font-sans"
                    >
                      Đăng Ký Cho Khách Hàng Khác
                    </button>
                  </div>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
