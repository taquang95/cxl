import { useState } from "react";
import { TECHNICAL_PROGRESS, BROCHURES } from "../data";
import { Eye, Calendar, BookOpen, AlertCircle, ChevronRight, ChevronLeft, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Progress() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState("");
  const [activeCatalogPage, setActiveCatalogPage] = useState(0);

  const handleCatalogPrev = () => {
    setActiveCatalogPage((p) => (p === 0 ? BROCHURES.length - 1 : p - 1));
  };

  const handleCatalogNext = () => {
    setActiveCatalogPage((p) => (p === BROCHURES.length - 1 ? 0 : p + 1));
  };

  return (
    <section id="tiendo" className="py-20 bg-white text-[#131E1B] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#CB7037] uppercase bg-[#CB7037]/10 px-4 py-2 rounded-full">
            ĐỒNG BỘ TIẾN TRÌNH THI CÔNG
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#2A3A35] leading-tight">
            TIẾN ĐỘ THI CÔNG & CATALOGUE DỰ ÁN
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Hình ảnh cập nhật công trường thi công thực tế cùng các tài liệu tiếp thị bán hàng chính thức trực tiếp từ các tháp căn hộ.
          </p>
        </div>

        {/* Parallel Layout: Left is Construction progress, Right is Premium Catalog booklet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Construction Progress Grid (4 items) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#CB7037] uppercase tracking-wider font-mono">Hình ảnh công trường thực tế (Quý 2/2026)</span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#2A3A35] tracking-tight">Công Trường Sôi Động Bất Kể Ngày Đêm</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed text-left">
                Các thầu xây dựng quốc tế đang cùng các kỹ sư hàng đầu giám sát và thúc đẩy nhanh chóng hạ tầng móng cọc tháp Hà Nội Seasons Garden nhằm cán mốc bàn giao thần tốc vào Quý 1/2028.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {TECHNICAL_PROGRESS.map((prog) => (
                <div
                  key={prog.id}
                  onClick={() => {
                    setLightboxImg(prog.image);
                    setLightboxTitle(prog.title);
                  }}
                  className="group relative rounded-xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 cursor-pointer h-[150px] sm:h-[180px]"
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 z-10 transition-colors flex items-center justify-center">
                    <span className="p-2 bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white z-20">
                    <p className="text-[10px] sm:text-xs font-medium truncate drop-shadow-sm">{prog.title}</p>
                    <span className="text-[9px] text-[#CB7037] font-semibold block mt-0.5">🔍 Chạm phóng to</span>
                  </div>
                  <div className="absolute top-2 left-2 z-20 px-2 py-0.5 rounded bg-amber-500/90 text-white text-[9px] font-bold flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Real-time</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 flex gap-3 text-xs text-gray-600 mt-2">
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                * Toàn bộ quy trình thi công được thực nghiệm chuẩn hóa, chụp và đo đạc định kỳ vào ngày 10 hàng tháng để gửi báo cáo xác thực tới các cổ đông và ban quản trị khách hàng.
              </p>
            </div>
          </div>

          {/* Right Block: Sizable Brochure Carousel book layout */}
          <div className="lg:col-span-5 space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg text-gray-800">
            <div className="flex items-center gap-2.5 text-[#CB7037] mb-2">
              <Compass className="w-5 h-5" />
              <h3 className="text-base md:text-lg font-serif font-bold uppercase tracking-widest text-[#2A3A35]">
                BROCHURE TÀI LIỆU DỰ ÁN
              </h3>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed text-left font-sans">
              Chụp ảnh thực và scan trọn bộ Catalog chi tiết về cơ cấu, mật độ và nội thất bàn giao từ tập đoàn Masterise Homes để quý khách tra cứu trực tiếp:
            </p>

            {/* Catalog Page Frame Slider */}
            <div className="relative rounded-xl overflow-hidden border border-gray-250 bg-gray-50/50 p-2 mt-4 flex flex-col items-center">
              <div 
                onClick={() => {
                  setLightboxImg(BROCHURES[activeCatalogPage].image);
                  setLightboxTitle(`Tài liệu Brochure Trang 0${activeCatalogPage + 1}`);
                }}
                className="relative w-full max-h-[360px] md:max-h-[420px] overflow-hidden rounded-lg flex items-center justify-center p-1 bg-white cursor-pointer group"
              >
                <img
                  src={BROCHURES[activeCatalogPage].image}
                  alt={`Brochure Page ${BROCHURES[activeCatalogPage].page}`}
                  className="max-h-[380px] w-auto object-contain select-none group-hover:scale-101 transition-transform"
                  referrerPolicy="no-referrer"
                />

                {/* Arrow navigation overlay - with e.stopPropagation to prevent zooming on click of button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCatalogPrev();
                  }}
                  className="absolute left-2 p-1.5 rounded-full bg-black/60 hover:bg-[#CB7037] text-white transition-colors z-10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCatalogNext();
                  }}
                  className="absolute right-2 p-1.5 rounded-full bg-black/60 hover:bg-[#CB7037] text-white transition-colors z-10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Tap to zoom indicator */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="bg-black/70 px-2 py-1 rounded text-[10px] text-white font-bold opacity-100 flex items-center gap-1 border border-white/10 shadow-lg pointer-events-none">
                    <Eye className="w-3.5 h-3.5 text-[#CB7037]" />
                    Chạm phóng to 🔎
                  </span>
                </div>
              </div>

              {/* Indicator Controls */}
              <div className="flex items-center justify-between w-full mt-4 text-xs text-gray-500">
                <span className="font-mono text-gray-500">Trang 0{activeCatalogPage + 1} / 0{BROCHURES.length}</span>
                
                <button
                  onClick={() => {
                    setLightboxImg(BROCHURES[activeCatalogPage].image);
                    setLightboxTitle(`Tài liệu Brochure Trang 0${activeCatalogPage + 1}`);
                  }}
                  className="flex items-center gap-1.5 text-[#CB7037] hover:underline hover:text-[#BF5E21] font-bold cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>XEM HÌNH TO CỰC ĐẠI</span>
                </button>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-150 flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <BookOpen className="w-8 h-8 text-[#CB7037] shrink-0" />
              <div className="text-[11px] text-gray-600 leading-normal font-sans">
                Các bản vẽ mặt cắt tháp T1, T2 và cơ chế bàn giao hệ thống lọc không khí, bếp điện kháng khuẩn đều được in đậm trong cuốn Brochure đầy đủ này.
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Preview popup */}
      <AnimatePresence>
        {lightboxImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setLightboxImg(null);
                setLightboxTitle("");
              }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full p-2 rounded-2xl bg-white text-[#131E1B] z-10 max-h-[85vh] flex flex-col shadow-2xl"
            >
              <button
                onClick={() => {
                  setLightboxImg(null);
                  setLightboxTitle("");
                }}
                className="absolute -top-12 right-0 p-2 text-white hover:text-[#CB7037] transition-all uppercase font-bold text-xs"
              >
                Đóng [X]
              </button>

              <div className="overflow-auto bg-neutral-900 rounded-xl p-2 flex items-center justify-center max-h-[70vh]">
                <img
                  src={lightboxImg}
                  alt={lightboxTitle}
                  className="max-h-[65vh] w-auto object-contain rounded"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 bg-white border-t border-gray-150 text-center text-xs md:text-sm font-semibold text-gray-700">
                {lightboxTitle}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
