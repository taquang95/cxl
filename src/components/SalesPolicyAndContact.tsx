import { motion } from "motion/react";
import { PROJECT_DETAILS } from "../data";

export default function SalesPolicyAndContact() {
  return (
    <section id="chinhsach-tuvan" className="py-20 bg-[#FAF9F6] border-t border-gray-200/80 text-[#131E1B]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Policy Cards (7 Columns) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#2A3A35] uppercase tracking-wide border-l-4 border-[#CB7037] pl-3 mb-6">
                Chính sách bán hàng đặc quyền
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Policy 1: Lại suất hỗ trợ 70% */}
                <div className="p-5 rounded-xl bg-white border border-gray-200/80 hover:border-[#CB7037]/50 hover:shadow-md transition-all space-y-2">
                  <span className="text-[10px] font-bold text-[#CB7037] tracking-wider uppercase font-sans">Hỗ Trợ Lãi Suất</span>
                  <h4 className="text-xs font-bold text-[#2A3A35] uppercase font-sans">Vay tối đa 70%</h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Trả trước chỉ <strong>25%</strong>, hưởng lãi suất <strong>0%</strong> đến ngày <strong className="text-[#CB7037]">30/06/2029</strong>.
                  </p>
                </div>

                {/* Policy 2: Lãi suất hỗ trợ 50% */}
                <div className="p-5 rounded-xl bg-white border border-gray-200/80 hover:border-[#CB7037]/50 hover:shadow-md transition-all space-y-2">
                  <span className="text-[10px] font-bold text-[#CB7037] tracking-wider uppercase font-sans">Hỗ Trợ Lãi Suất</span>
                  <h4 className="text-xs font-bold text-[#2A3A35] uppercase font-sans">Vay tối đa 50%</h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Hưởng lãi suất <strong>0%</strong> kéo dài đến hết ngày <strong className="text-[#CB7037]">30/09/2029</strong>.
                  </p>
                </div>

                {/* Policy 3: Chiết khấu thanh toán */}
                <div className="p-5 rounded-xl bg-white border border-gray-200/80 hover:border-[#CB7037]/50 hover:shadow-md transition-all space-y-2">
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
                <div className="p-5 rounded-xl bg-white border border-gray-200/80 hover:border-[#CB7037]/50 hover:shadow-md transition-all space-y-2">
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
                <div className="p-5 rounded-xl bg-white border border-gray-200/80 hover:border-[#CB7037]/50 hover:shadow-md transition-all space-y-2 sm:col-span-2">
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
          </div>

          {/* Right Side: Direct Sales Manager Board (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="h-full flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#2A3A35] uppercase tracking-wide border-l-4 border-[#CB7037] pl-3 mb-6">
                  Thông tin tư vấn trực tiếp
                </h3>
                <div className="p-6 md:p-8 bg-white rounded-2xl border border-[#CB7037]/25 shadow-md space-y-6 h-auto flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div>
                      <h4 className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{PROJECT_DETAILS.contactTitle}</h4>
                      <p className="text-xl text-[#2A3A35] font-serif font-bold tracking-wide mt-0.5">{PROJECT_DETAILS.contactPerson}</p>
                    </div>
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 animate-ping shrink-0" />
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-xs text-gray-600 leading-relaxed font-sans">
                      Liên hệ trực tiếp qua số Hotline để nhận thông tin mật và hỗ trợ đặt lịch hẹn tham quan căn hộ mẫu thực tế.
                    </p>
                    <a
                      href={`tel:${PROJECT_DETAILS.hotline}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#CB7037] to-[#BF5E21] hover:from-[#E68142] hover:to-[#CF6A2A] text-white font-bold text-sm tracking-wide shadow-md transition-all shrink-0 text-center font-sans cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      📞 HOTLINE: {PROJECT_DETAILS.hotlineFormatted}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
