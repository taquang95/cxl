import { useState } from "react";
import { Eye, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MasterPlanProps {
  onOpenBooking: (apartmentType?: string) => void;
}

const FLOOR_LAYOUT_SLIDES = [
  "https://i.postimg.cc/BZhVhCbw/mat-bang-can-ho-cao-xa-la-nguyen-trai-(1).jpg",
  "https://i.postimg.cc/RCPDPThD/mat-bang-can-ho-cao-xa-la-nguyen-trai-(2).jpg",
  "https://i.postimg.cc/05tBtCjW/mat-bang-can-ho-cao-xa-la-nguyen-trai-(3).jpg",
  "https://i.postimg.cc/Y2XsXx0D/mat-bang-can-ho-xa-la-nguyen-trai-(4).jpg",
  "https://i.postimg.cc/zXVP4RHj/mat-bang-can-ho-cao-xa-la-nguyen-trai-(5).jpg",
  "https://i.postimg.cc/kMjpjyGL/mat-bang-can-ho-cao-xa-la-nguyen-trai-(6).jpg",
  "https://i.postimg.cc/02bHhJKn/mat-bang-can-ho-cao-xa-la-nguyen-trai-(7).jpg",
  "https://i.postimg.cc/PrPF08vK/mat-bang-can-ho-cao-xa-la-nguyen-trai-(8).jpg",
  "https://i.postimg.cc/pXp13n5s/mat-bang-can-ho-cao-xa-la-nguyen-trai-(9).jpg",
  "https://i.postimg.cc/02bHhJKt/mat-bang-can-ho-cao-xa-la-nguyen-trai-(10).jpg",
  "https://i.postimg.cc/GhHS6sT7/mat-bang-can-ho-cao-xa-la-nguyen-trai-(11).jpg",
  "https://i.postimg.cc/CLz69fnr/mat-bang-can-ho-cao-xa-la-nguyen-trai-(12).jpg"
];

const DETAIL_FLOOR_LAYOUTS = [
  "https://i.postimg.cc/52PnSNkR/mat-bang-chuan-cao-xa-la-nguyen-trai-(1).jpg",
  "https://i.postimg.cc/sgnw4D0q/mat-bang-chuan-cao-xa-la-nguyen-trai-(2).jpg",
  "https://i.postimg.cc/fRHBfTg1/mat-bang-chuan-cao-xa-la-nguyen-trai-(3).jpg",
  "https://i.postimg.cc/kgjfvXhH/mat-bang-chuan-cao-xa-la-nguyen-trai-(4).jpg",
  "https://i.postimg.cc/L8yN36bK/mat-bang-chuan-cao-xa-la-nguyen-trai-(5).jpg",
  "https://i.postimg.cc/y8fvyYbz/mat-bang-chuan-cao-xa-la-nguyen-trai-(6).jpg",
  "https://i.postimg.cc/P562QrRn/mat-bang-chuan-cao-xa-la-nguyen-trai-(7).jpg",
  "https://i.postimg.cc/yNknQ4wp/mat-bang-chuan-cao-xa-la-nguyen-trai-(8).jpg"
];

export default function MasterPlan({ onOpenBooking }: MasterPlanProps) {
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [detailActiveIndex, setDetailActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % FLOOR_LAYOUT_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + FLOOR_LAYOUT_SLIDES.length) % FLOOR_LAYOUT_SLIDES.length);
  };

  return (
    <section id="matbang" className="py-20 bg-white text-[#131E1B] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[#2A3A35] leading-tight uppercase">
            LAYOUT MẶT BẰNG
          </h2>
        </div>

        {/* Segment: Mặt bằng tổng thể & Mặt bằng tòa */}
        <div className="mb-20 pb-16 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#2A3A35] leading-tight uppercase">
              Mặt bằng tổng thể dự án
            </h3>
            <p className="text-gray-500 mt-2 text-sm md:text-base font-sans font-medium">
              Thiết kế quy hoạch đồng bộ, tối ưu hóa không gian xanh và tầm nhìn panorama đắt giá.
            </p>
          </div>

          {/* Master Plan (Mặt bằng tổng thể) Single Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="group flex flex-col bg-gray-50 rounded-2xl border border-gray-150 p-4 mb-12 transition-all duration-300 hover:shadow-xl cursor-pointer"
            onClick={() => setZoomImage("https://i.postimg.cc/fbBL3FWx/tong-the-mat-bang.jpg")}
          >
            <div className="relative aspect-[16/10] md:aspect-[21/9] bg-white rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center p-3">
              <div className="absolute top-4 right-4 z-10 p-2.5 rounded-lg bg-black/60 hover:bg-[#CB7037] text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                <Eye className="w-5 h-5" />
              </div>
              <img
                src="https://i.postimg.cc/fbBL3FWx/tong-the-mat-bang.jpg"
                alt="Mặt bằng tổng thể dự án"
                className="max-h-full max-w-full object-contain select-none transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm font-bold text-[#CB7037] uppercase tracking-wider">Xem Chi Tiết Mặt Bằng Tổng Thể</p>
            </div>
          </motion.div>

          {/* Tower Floor Plans Segment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* Tower L1 */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col bg-gray-50 rounded-2xl border border-gray-150 p-4 transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => setZoomImage("https://i.postimg.cc/HLBxJKW5/mat-bang-l1.jpg")}
            >
              <div className="relative aspect-[4/3] bg-white rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center p-3">
                <div className="absolute top-4 right-4 z-10 p-2.5 rounded-lg bg-black/60 hover:bg-[#CB7037] text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                  <Eye className="w-4 h-4" />
                </div>
                <img
                  src="https://i.postimg.cc/HLBxJKW5/mat-bang-l1.jpg"
                  alt="Mặt bằng tòa L1"
                  className="max-h-full max-w-full object-contain select-none transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-serif font-bold text-[#2A3A35] uppercase tracking-wide">Mặt bằng tòa L1</h4>
                <p className="text-xs text-gray-500 mt-1 font-sans">Click để phóng to xem chi tiết cơ cấu căn hộ</p>
              </div>
            </motion.div>

            {/* Tower L2 */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col bg-gray-50 rounded-2xl border border-gray-150 p-4 transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => setZoomImage("https://i.postimg.cc/Pq2xLcfv/mat-bang-l2.jpg")}
            >
              <div className="relative aspect-[4/3] bg-white rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center p-3">
                <div className="absolute top-4 right-4 z-10 p-2.5 rounded-lg bg-black/60 hover:bg-[#CB7037] text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                  <Eye className="w-4 h-4" />
                </div>
                <img
                  src="https://i.postimg.cc/Pq2xLcfv/mat-bang-l2.jpg"
                  alt="Mặt bằng tòa L2"
                  className="max-h-full max-w-full object-contain select-none transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-serif font-bold text-[#2A3A35] uppercase tracking-wide">Mặt bằng tòa L2</h4>
                <p className="text-xs text-gray-500 mt-1 font-sans">Click để phóng to xem chi tiết cơ cấu căn hộ</p>
              </div>
            </motion.div>
          </div>

          {/* Detailed Floor Plan Typical Layouts Section (8 images in 1-row slider) */}
          <div className="mt-20 pt-16 border-t border-gray-200/80">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-[10px] font-bold text-[#CB7037] tracking-widest uppercase font-sans px-3 py-1 bg-[#CB7037]/10 rounded-full border border-[#CB7037]/20">
                Bản Vẽ Chi Tiết
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2A3A35] leading-tight uppercase mt-3">
                Mặt Bằng Tầng Điển Hình Chi Tiết
              </h3>
              <p className="text-gray-500 mt-2 text-xs md:text-sm font-sans font-medium">
                Sơ đồ thiết kế kiến trúc chuẩn phong cách hiện đại với bố trí không gian thông minh, tối ưu diện tích sử dụng.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Carousel Container */}
              <div className="relative aspect-[4/3] md:aspect-[16/11] bg-gray-50 rounded-2xl border border-gray-150 p-4 md:p-6 overflow-hidden shadow-md flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={detailActiveIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="w-full h-full flex items-center justify-center cursor-pointer group"
                    onClick={() => setZoomImage(DETAIL_FLOOR_LAYOUTS[detailActiveIndex])}
                  >
                    <div className="absolute top-4 right-4 z-10 p-2.5 rounded-lg bg-black/60 hover:bg-[#CB7037] text-white opacity-100 transition-colors duration-300 shadow-md">
                      <Eye className="w-5 h-5" />
                    </div>
                    <img
                      src={DETAIL_FLOOR_LAYOUTS[detailActiveIndex]}
                      alt={`Mặt bằng chi tiết tầng điển hình ${detailActiveIndex + 1}`}
                      className="max-h-full max-w-full object-contain select-none transition-transform duration-500 group-hover:scale-[1.01]"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Slider Controls */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDetailActiveIndex((prev) => (prev - 1 + DETAIL_FLOOR_LAYOUTS.length) % DETAIL_FLOOR_LAYOUTS.length);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 md:p-3 rounded-full bg-white/95 hover:bg-[#CB7037] text-gray-800 hover:text-white border border-gray-200 transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Trang trước"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDetailActiveIndex((prev) => (prev + 1) % DETAIL_FLOOR_LAYOUTS.length);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 md:p-3 rounded-full bg-white/95 hover:bg-[#CB7037] text-gray-800 hover:text-white border border-gray-200 transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Trang tiếp theo"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Badge Indicator */}
                <div className="absolute bottom-6 left-6 bg-black/75 text-white px-3.5 py-1.5 rounded-lg text-[10px] md:text-xs font-bold font-sans tracking-wider backdrop-blur-sm border border-white/10">
                  MẶT BẰNG {detailActiveIndex + 1} / {DETAIL_FLOOR_LAYOUTS.length}
                </div>
              </div>

              {/* Navigation Tabs Indicator Bar */}
              <div className="mt-6 flex flex-wrap justify-center gap-2 px-4">
                {DETAIL_FLOOR_LAYOUTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setDetailActiveIndex(idx)}
                    className={`w-10 h-10 rounded-lg font-sans font-bold text-xs border transition-all duration-300 cursor-pointer ${
                      detailActiveIndex === idx
                        ? "bg-[#CB7037] text-white border-[#CB7037] shadow-md scale-110"
                        : "bg-white hover:bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section: Thiết kế căn hộ chi tiết */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#2A3A35] leading-tight uppercase">
            Thiết kế chi tiết căn hộ điển hình
          </h3>
          <p className="text-gray-500 mt-2 text-sm md:text-base font-sans font-medium">
            Mặt bằng thiết kế chi tiết từng mẫu căn hộ hiện đại mang phong cách kiến trúc thượng lưu.
          </p>
        </div>

        {/* Carousel Slider Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Slider Display Area */}
          <div className="relative aspect-[4/3] md:aspect-[16/11] bg-gray-50 rounded-2xl border border-gray-150 p-4 md:p-6 overflow-hidden shadow-md flex items-center justify-center">
            
            {/* Animated Slide container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center cursor-pointer group"
                onClick={() => setZoomImage(FLOOR_LAYOUT_SLIDES[activeIndex])}
              >
                <div className="absolute top-4 right-4 z-10 p-2.5 rounded-lg bg-black/60 hover:bg-[#CB7037] text-white transition-colors duration-300 shadow-md">
                  <Eye className="w-5 h-5" />
                </div>
                <img
                  src={FLOOR_LAYOUT_SLIDES[activeIndex]}
                  alt={`Mặt bằng chi tiết căn hộ ${activeIndex + 1}`}
                  className="max-h-full max-w-full object-contain select-none transition-transform duration-500 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>

            {/* Left Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 md:p-3 rounded-full bg-white/90 hover:bg-[#CB7037] text-gray-800 hover:text-white border border-gray-200 transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Slide trước"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 md:p-3 rounded-full bg-white/90 hover:bg-[#CB7037] text-gray-800 hover:text-white border border-gray-200 transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Slide tiếp theo"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            {/* Slide Index Badge */}
            <div className="absolute bottom-6 left-6 bg-black/70 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold font-sans tracking-wider backdrop-blur-sm">
              CĂN HỘ {activeIndex + 1} / {FLOOR_LAYOUT_SLIDES.length}
            </div>
          </div>

          {/* Luxury Thumbnails/Indicators Navigation Bar */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 px-4">
            {FLOOR_LAYOUT_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-10 h-10 rounded-lg font-sans font-bold text-xs border transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "bg-[#CB7037] text-white border-[#CB7037] shadow-md scale-110"
                    : "bg-white hover:bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal Component */}
      <AnimatePresence>
        {zoomImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomImage(null)}
              className="fixed inset-0 bg-black/92 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full text-white z-10 p-2 rounded-2xl bg-white shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setZoomImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-[#CB7037] bg-transparent transition-colors uppercase font-bold text-xs flex items-center gap-1 cursor-pointer font-sans"
              >
                <span>Đóng [X]</span>
                <ChevronRight className="w-4 h-4 rotate-90" />
              </button>

              <div className="overflow-auto bg-white rounded-xl p-4 flex items-center justify-center">
                <img
                  src={zoomImage}
                  alt="Phóng đại chi tiết bản vẽ quy hoạch"
                  className="max-h-[75vh] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
