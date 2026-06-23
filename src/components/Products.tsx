import { useState } from "react";
import { Check, Landmark, ArrowRight, Expand, HelpCircle, Eye, X } from "lucide-react";
import { PRODUCTS, PROJECT_DETAILS } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface ProductsProps {
  onOpenBooking: (apartmentType?: string) => void;
}

export default function Products({ onOpenBooking }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState(PRODUCTS[0].id);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [zoomTitle, setZoomTitle] = useState("");

  const activeProduct = PRODUCTS.find((p) => p.id === selectedCategory) || PRODUCTS[0];

  return (
    <section id="sanpham" className="py-20 bg-[#FAF9F6] text-[#131E1B] overflow-hidden relative border-t border-b border-gray-150">
      {/* Decorative light background blur */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#CB7037]/5 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#CB7037]/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#CB7037] uppercase bg-[#CB7037]/10 border border-[#CB7037]/15 px-4 py-2 rounded-full">
            DANH MỤC CĂN HỘ CAO CẤP
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[#2A3A35] leading-tight">
            SẢN PHẨM HÀ NỘI SEASONS GARDEN
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Hanoi Seasons Garden không chỉ là nơi hội tụ của những căn hộ cao cấp mà còn là biểu tượng của phong cách sống thượng lưu giữa lòng Hà Nội. Mỗi sản phẩm được tối ưu từng centimet vuông nhằm khởi duyên cho tổ ấm trọn vẹn.
          </p>
        </div>

        {/* Tab Buttons bar - scrollable on mobile */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap justify-start md:justify-center items-center gap-2.5 md:gap-3 mb-12 scrollbar-none">
          {PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setSelectedCategory(prod.id)}
              className={`px-5 py-3 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 shrink-0 select-none cursor-pointer ${
                selectedCategory === prod.id
                  ? "bg-gradient-to-r from-[#CB7037] to-[#BF5E21] text-white shadow-lg scale-102 border border-[#CB7037]/30"
                  : "bg-white hover:bg-gray-100/80 text-gray-600 border border-gray-200"
              }`}
            >
              {prod.title.replace("CĂN HỘ ", "").replace("BIỆT THỰ ", "")}
            </button>
          ))}
        </div>

        {/* Interactive Highlight Product view */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 md:p-10 rounded-2xl border border-gray-200/80 shadow-lg"
          >
            {/* Visual render column with Click-to-Zoom */}
            <div className="lg:col-span-6 relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#CB7037] to-[#BF5E21] rounded-xl blur opacity-10" />
              <div 
                onClick={() => {
                  setZoomImage(activeProduct.image);
                  setZoomTitle(activeProduct.title);
                }}
                className="relative rounded-xl overflow-hidden shadow-md border border-gray-250 bg-gray-50 cursor-pointer group"
              >
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className="w-full h-[280px] sm:h-[380px] object-cover md:object-contain bg-white group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                     e.currentTarget.src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                
                {/* Visual badges overlays */}
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-lg border border-gray-100 text-xs font-semibold text-[#CB7037] shadow-sm">
                  {activeProduct.description}
                </div>

                {/* Permanent Tap to Zoom badge on Mobile & Hover Zoom Badge on Desktop */}
                <div className="absolute bottom-4 right-4 bg-white/95 hover:bg-[#CB7037] hover:text-white text-gray-800 px-3 py-2 rounded-lg border border-gray-200 transition-colors flex items-center gap-1.5 text-xs font-bold shadow-md">
                  <Eye className="w-4 h-4 text-[#CB7037] group-hover:text-white" />
                  <span>Chạm để xem ảnh to 🔍</span>
                </div>
              </div>
            </div>

            {/* Spec descriptions column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase text-[#CB7037] font-mono tracking-widest font-bold">Thỏa mãn thị hiếu khắt khe</span>
                <h3 className="text-2xl md:text-3.5xl font-serif font-bold text-[#2A3A35] tracking-tight">{activeProduct.title}</h3>
              </div>

              <div className="space-y-3.5">
                {activeProduct.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex gap-3 text-sm md:text-base leading-relaxed text-gray-600 font-sans">
                    <span className="p-1 h-fit rounded bg-[#CB7037]/10 border border-[#CB7037]/20 text-[#CB7037] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <p className="font-sans font-medium">{bullet}</p>
                  </div>
                ))}
              </div>

              {/* Action grid button */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenBooking(activeProduct.title)}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-[#CB7037] to-[#BF5E21] hover:from-[#E68142] hover:to-[#CF6A2A] text-white font-extrabold text-sm tracking-wider uppercase transition-all shadow-md cursor-pointer"
                >
                  <span>MỞ BOOKING ƯU TIÊN SỚM</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${PROJECT_DETAILS.hotline}`}
                  className="sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 font-bold text-sm"
                >
                  Hotline hỗ trợ: {PROJECT_DETAILS.hotlineFormatted}
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Full-screen high-res lightbox view */}
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
                className="absolute -top-12 right-0 p-2 text-white hover:text-[#CB7037] bg-black/40 rounded px-2.5 py-1.5 transition-colors uppercase font-bold text-xs flex items-center gap-1"
              >
                <span>Đóng [X]</span>
              </button>

              <div className="overflow-auto bg-neutral-950 rounded-xl p-4 flex items-center justify-center">
                <img
                  src={zoomImage}
                  alt={zoomTitle}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 text-center text-xs md:text-sm font-bold text-gray-800 uppercase tracking-wider">
                {zoomTitle} - PHỐI CẢNH SUẤT CĂN HỘ CHI TIẾT
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
