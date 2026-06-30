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

        let data: any = {};
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          data = await response.json();
        } else {
          const rawText = await response.text();
          const cleanText = rawText.length > 200 ? rawText.substring(0, 200) + "..." : rawText;
          data = { error: `Lỗi máy chủ (${response.status}): ${cleanText || "Không thể kết nối máy chủ gửi thư"}` };
        }

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
      <section id="gioithieu" className="relative w-full overflow-hidden bg-[#131E1B]">
        {/* Background Image Container */}
        <div className="w-full">
          <img
            src="https://i.postimg.cc/nVvWvQQV/hanoi-seasons-garden-banner.webp"
            alt="Hà Nội Seasons Garden Nguyễn Trãi"
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Hero Content - Clean cinematic image mode with scroll indicator only */}
        <div className="absolute inset-x-0 bottom-4 md:bottom-8 z-20 text-center flex flex-col justify-end">
          {/* Scroll down indicator */}
          <div className="mx-auto">
            <button
              onClick={() => scrollToSection("dangky-tuvan")}
              className="animate-bounce inline-flex items-center justify-center p-2.5 md:p-3 rounded-full border border-white/20 text-white hover:text-[#CB7037] hover:border-[#CB7037] transition-all cursor-pointer bg-black/40 backdrop-blur-sm shadow-lg"
            >
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2A3A35] tracking-tight uppercase">
              Chính Sách Bán Hàng <br className="hidden sm:block" />
              <span className="text-[#2A3A35] font-serif">
                Hà Nội Seasons Garden
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-[#CB7037] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Showcase Image of the Project */}
            <div className="lg:col-span-6 w-full flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-full min-h-[350px] md:min-h-[450px] rounded-2xl overflow-hidden border border-gray-200/80 shadow-lg relative group bg-white"
              >
                <img
                  src="https://i.postimg.cc/GpHnchtc/anh-shop-house.jpg"
                  alt="Ảnh Shophouse Seasons Garden"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-shadow-sm pointer-events-none">
                  <p className="text-xs uppercase tracking-widest font-bold text-[#D4AF37] mb-1 font-sans">Hà Nội Seasons Garden</p>
                  <h4 className="text-lg md:text-xl font-serif font-bold leading-tight">Tuyệt tác không gian sống sang trọng giữa lòng Thanh Xuân</h4>
                </div>
              </motion.div>
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
