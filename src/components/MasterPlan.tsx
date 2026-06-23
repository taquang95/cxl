import { useState } from "react";
import { Eye, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MasterPlanProps {
  onOpenBooking: (apartmentType?: string) => void;
}

const FLOOR_LAYOUT_IMGS = [
  {
    title: "Mặt bằng chi tiết - Layout 01",
    image: "https://i.postimg.cc/LXFCMNGD/png-7-20260416034050-sx-gb.webp"
  },
  {
    title: "Mặt bằng chi tiết - Layout 02",
    image: "https://i.postimg.cc/mDWXG8Kw/png-8-20260416034050-oyaad.webp"
  },
  {
    title: "Mặt bằng chi tiết - Layout 03",
    image: "https://i.postimg.cc/nzfRt0NG/png-9-20260416034050-pmge2.webp"
  },
  {
    title: "Mặt bằng chi tiết - Layout 04",
    image: "https://i.postimg.cc/cHG9NXPg/png-10-20260416034050-vtpbg.webp"
  },
  {
    title: "Mặt bằng chi tiết - Layout 05",
    image: "https://i.postimg.cc/76rsymj2/png-11-20260416034050-wsg8.webp"
  },
  {
    title: "Mặt bằng chi tiết - Layout 06",
    image: "https://i.postimg.cc/W3cWPXxJ/png-12-20260416034050-dpcay.webp"
  }
];

export default function MasterPlan({ onOpenBooking }: MasterPlanProps) {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <section id="matbang" className="py-20 bg-white text-[#131E1B] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[#2A3A35] leading-tight uppercase">
            LAYOUT MẶT BẰNG
          </h2>
        </div>

        {/* 2-Column, 3-Row Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FLOOR_LAYOUT_IMGS.map((layout, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col bg-gray-50 rounded-2xl border border-gray-100 p-3 md:p-4 transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => setZoomImage(layout.image)}
            >
              <div className="relative aspect-[4/3] bg-white rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center p-2">
                {/* Image magnifier icon */}
                <div className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-black/60 hover:bg-[#CB7037] text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                  <Eye className="w-4 h-4" />
                </div>

                <img
                  src={layout.image}
                  alt={layout.title}
                  className="max-h-full max-w-full object-contain select-none transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
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
