import { useState } from "react";
import { Eye, HelpCircle, Waves, Trees, Sparkles, Sliders } from "lucide-react";
import { FACILITIES } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function Facilities() {
  const [activeLightbox, setActiveLightbox] = useState<number | null>(null);

  const handlePrev = () => {
    setActiveLightbox((prev) => (prev === null || prev === 0 ? FACILITIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveLightbox((prev) => (prev === null || prev === FACILITIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="tienich" className="py-20 bg-gray-50 text-[#131E1B] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#CB7037] uppercase bg-[#CB7037]/10 px-4 py-2 rounded-full">
            HỆ SINH THÁI KHÉP KÍN 6 SAO
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#2A3A35] leading-tight">
            TIỆN ÍCH ĐẲNG CẤP MASTERISE HOMES
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Duy nhất tại Hà Nội Seasons Garden, cư dân được tận hưởng sự riêng tư được phục vụ toàn diện bởi quản gia cùng các tiện ích đỉnh cao chuẩn mực hoàng gia quốc tế.
          </p>
        </div>

        {/* Bento/Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((fac, index) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setActiveLightbox(index)}
              className="group relative rounded-2xl overflow-hidden glass shadow-lg border border-gray-100 bg-white cursor-pointer h-[280px]"
            >
              {/* Graphic background */}
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 z-10 transition-colors duration-300" />
              <img
                src={fac.image}
                alt={fac.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Title & Floating preview */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-bold text-[#CB7037] uppercase tracking-widest mb-1.5 opacity-90">Tiện ích đặc quyền</span>
                <h3 className="text-base md:text-lg font-serif font-bold leading-snug drop-shadow-sm">{fac.title}</h3>
                
                {/* Micro interactivity trigger */}
                <div className="mt-3 flex items-center gap-1.5 text-xs text-white/70 font-semibold group-hover:text-[#CB7037] transition-colors pt-2 border-t border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Eye className="w-4 h-4" />
                  <span>Xem chi tiết ảnh thiết kế</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick bottom visual illustration grid (Grid 21 decorative background) */}
        <div className="mt-16 relative overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white p-6 md:p-8">
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#CB7037]/5 blur-2xl rounded-full" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[#CB7037] font-bold text-xs uppercase tracking-widest font-mono">Dấu ấn tinh hoa</span>
              <h4 className="text-xl md:text-2xl font-serif font-bold text-[#2A3A35]">Thiết kế cảnh quan đa sắc màu độc bản</h4>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed text-left">
                Lấy cảm hứng từ 4 mùa rực rỡ lãng mạn tại các khu vườn treo Âu Châu cổ kính, Hanoi Seasons Garden được bao phủ bởi những hàng cây tùng bách quý, đồi bướm thơ mộng và dàn dây leo lộng lẫy, hòa cùng hàng trăm loài thực vật rực rỡ mang đến nguồn năng lượng tràn trề ngày mới.
              </p>
            </div>
            <div className="lg:col-span-8 overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
              <img
                src="https://w.ladicdn.com/s1550x1250/60d9ed782bd66f0013900826/z7820205379871_809797af018246733de5fda7f43f8565-20260513151425-4hwp2.jpg"
                alt="Thiết kế cảnh quan Hà Nội Seasons Garden"
                className="w-full h-auto object-cover max-h-[300px] hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox component */}
      <AnimatePresence>
        {activeLightbox !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightbox(null)}
              className="fixed inset-0 bg-black/92 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-neutral-950 rounded-2xl overflow-hidden p-2 text-white border border-[#CB7037]/30 shadow-2xl flex flex-col"
            >
              {/* Close trigger */}
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/70 hover:bg-[#CB7037] border border-white/10 rounded-lg text-xs font-semibold uppercase transition-all tracking-wider"
              >
                Đóng
              </button>

              {/* Image Frame */}
              <div className="relative overflow-hidden bg-neutral-900 rounded-xl max-h-[70vh] flex items-center justify-center p-2">
                <img
                  src={FACILITIES[activeLightbox].image}
                  alt={FACILITIES[activeLightbox].title}
                  className="max-h-[60vh] object-contain w-auto select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Left arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-2 bg-black/60 hover:bg-neutral-800 rounded-full text-white border border-white/10 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-2 bg-black/60 hover:bg-neutral-800 rounded-full text-white border border-white/10 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Title descriptions */}
              <div className="p-4 md:p-6 text-center bg-gray-950 border-t border-gray-800">
                <span className="text-xs text-[#CB7037] uppercase font-bold tracking-widest">Chi tiết thiết kế tiện ích</span>
                <h4 className="text-lg md:text-xl font-serif font-bold text-white mt-1">
                  {FACILITIES[activeLightbox].title}
                </h4>
                <p className="text-xs text-gray-400 mt-1 max-w-xl mx-auto leading-relaxed">
                  Thiết kế được thực hiện bởi tập đoàn GroupGSA Australia cùng các đối tác nội thất danh tiếng chuẩn mực Tây Âu, nâng tầm giá trị đẳng cấp sống thượng lưu.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Simple Helper components inside this module for Lightbox navigation
function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
