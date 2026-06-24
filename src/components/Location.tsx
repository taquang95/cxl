import { MapPin, Milestone, Train, GraduationCap, Building2 } from "lucide-react";
import { motion } from "motion/react";

export default function Location() {
  const connections = [
    { name: "Đường sắt đô thị Cát Linh - Hà Đông", duration: "1 phút đi bộ", desc: "Cách ga Metro Nguyễn Trãi chỉ 150m", icon: Train },
    { name: "Khu đô thị Royal City", duration: "2 phút lái xe", desc: "Cách trung tâm thương mại Vincom Mega Mall Royal City 500m", icon: Building2 },
    { name: "Đại học Quốc gia Hà Nội", duration: "3 phút đi xe", desc: "Nằm kề cận quần thể giáo dục công lập uy tín", icon: GraduationCap },
    { name: "Ngã tư Sở & Đường Vành đai 3", duration: "4 phút di chuyển", desc: "Trực tiếp đón đầu hạ tầng giao thông vàng đi muôn nơi", icon: Milestone }
  ];

  return (
    <section id="vitri" className="py-20 bg-gray-50 text-[#131E1B]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#CB7037] uppercase bg-[#CB7037]/10 px-4 py-2 rounded-full">
            TỌA ĐỘ VÀNG KẾT NỐI
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#2A3A35] leading-tight">
            VỊ TRÍ DỰ ÁN MASTERISE HOMES NGUYỄN TRÃI
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Được phát triển tại địa chỉ đặc quyền 233B - 235 Nguyễn Trãi, quận Thanh Xuân, Hà Nội, đây là mảnh đất hiếm hoi cuối cùng nằm sát ga metro trung tâm thủ đô.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Proximity lists */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#2A3A35] tracking-tight">
              Tọa Độ “Độc Tôn” Đón Đầu Trục Phát Triển Trọng Điểm
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tọa lạc tại mặt tiền trục đường huyết mạch Nguyễn Trãi - Thanh Xuân, Hà Nội, dự án cho phép cư dân nhanh chóng lưu thông qua các trục vành đai lớn và thừa hưởng tiện ích ngoại khu vượt trội của thủ đô ngàn năm văn hiến.
            </p>

            <div className="space-y-4 pt-2">
              {connections.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#CB7037]/30 transition-all duration-300 shadow-sm"
                  >
                    <div className="p-2.5 rounded-lg bg-[#31423C]/10 text-[#CB7037] shrink-0 self-start">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h4 className="text-sm md:text-base font-bold text-[#2E3331]">
                          {item.name}
                        </h4>
                        <span className="text-xs font-semibold text-[#CB7037] px-2 py-0.5 rounded-full bg-[#CB7037]/10 shrink-0">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Location Map Image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-2xl bg-white p-2">
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-white text-gray-800 flex items-center gap-2 shadow-lg border border-gray-150">
                <MapPin className="w-4 h-4 text-[#CB7037]" />
                <span className="text-xs font-bold font-sans tracking-wide">233-235 Nguyễn Trãi, Thanh Xuân, Hà Nội</span>
              </div>
              <img
                src="https://i.postimg.cc/NffJhCLS/vi-tri-ha-noi-sesion.jpg"
                alt="Bản đồ vị trí dự án Hà Nội Seasons Garden Nguyễn Trãi"
                className="w-full h-auto object-contain rounded-xl hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
