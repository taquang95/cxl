import { SPECIFICATIONS } from "../data";

interface OverviewProps {
  onOpenBooking: (apartmentType?: string) => void;
}

export default function Overview({ onOpenBooking }: OverviewProps) {
  return (
    <section id="tongquan" className="py-20 bg-white text-[#131E1B] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#CB7037] uppercase bg-[#CB7037]/10 px-4 py-2 rounded-full">
            KIỆT TÁC KHÔNG GIAN SỐNG
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#2A3A35] leading-tight">
            TỔNG QUAN DỰ ÁN HÀ NỘI SEASONS GARDEN
          </h2>
        </div>

        {/* Side-by-Side Detailed Specs and Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Block: Table of specs */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#2A3A35] border-l-4 border-[#CB7037] pl-4">
              THÔNG SỐ KỸ THUẬT CHI TIẾT
            </h3>
            
            <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-md">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {SPECIFICATIONS.map((spec, index) => (
                    <tr
                      key={spec.label}
                      className={`text-xs md:text-sm transition-colors hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-3.5 font-bold text-gray-700 border-b border-gray-100 w-1/3 shrink-0">
                        {spec.label}
                      </td>
                      <td className="px-4 py-3.5 text-gray-600 border-b border-gray-100 font-medium">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pt-4 flex flex-col md:flex-row gap-4 items-center">
              <button
                onClick={() => onOpenBooking()}
                className="w-full md:w-auto relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#CB7037] to-[#BF5E21] text-white font-extrabold text-sm tracking-widest uppercase rounded-xl shadow-lg ring-2 ring-[#CB7037]/20 hover:scale-105 active:scale-95 transition-all animate-pulse"
              >
                GỬI YÊU CẦU ĐẶT GIỮ CHỖ NGAY
              </button>
            </div>
          </div>

          {/* Right Block: Image mockup showcase */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#CB7037] to-[#D4AF37] rounded-3xl blur opacity-15" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://i.postimg.cc/9QGMt0bP/tong-quan-anh.jpg"
                alt="Phối cảnh tháp Seasons Garden"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <span className="text-[11px] font-bold text-[#CB7037] uppercase tracking-widest">Masterise Homes Nguyễn Trãi</span>
                <p className="text-sm font-serif font-semibold mt-1">Phối cảnh tuyệt tác kiến trúc xanh rực rỡ bên tháp Hà Nội Seasons Garden</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
