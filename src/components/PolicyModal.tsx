import { X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECT_DETAILS } from "../data";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PolicyModal({ isOpen, onClose }: PolicyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white text-gray-800 border border-gray-200 shadow-2xl z-10 max-h-[85vh] flex flex-col"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#CB7037] via-[#BF5E21] to-[#CB7037]" />

            <div className="p-6 border-b border-gray-150 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#CB7037]">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-lg font-serif font-semibold text-[#2A3A35] uppercase tracking-wider">
                  Chính sách bảo mật & Quyền riêng tư
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-sm text-gray-600 leading-relaxed font-sans">
              <section className="space-y-2">
                <h4 className="font-semibold text-[#CB7037] font-serif">1. Mục đích thu thập dữ liệu</h4>
                <p>
                  Chúng tôi thu thập thông tin cá nhân của quý khách (bao gồm: Họ tên, Số điện thoại di động, Loại căn hộ quan tâm) nhằm mục đích duy nhất là cung cấp thông tin tư vấn chính thức, báo giá chi tiết, sơ đồ mặt bằng tối ưu, và lịch trình thăm quan căn hộ dự án Hà Nội Seasons Garden Nguyễn Trãi.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-semibold text-[#CB7037] font-serif">2. Cam kết bảo mật thông tin</h4>
                <p>
                  Mọi thông tin cá nhân quý cư dân cung cấp được lưu trữ trên máy chủ bảo mật tối ưu của Masterise Homes. Chúng tôi cam kết tuyệt đối:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-500">
                  <li>Không bán, chia sẻ hoặc cho thuê thông tin cá nhân cho bên thứ ba.</li>
                  <li>Không spam tin nhắn quảng cáo không thuộc phạm vi dự án Seasons Garden.</li>
                  <li>Mã hóa các luồng truyền thông tin khách hàng trên hệ thống kỹ thuật số.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-semibold text-[#CB7037] font-serif">3. Quyền hạn của khách hàng</h4>
                <p>
                  Quý khách bất kỳ lúc nào cũng có quyền yêu cầu tư vấn viên sửa đổi, hủy bỏ thông tin cá nhân đã khai báo bằng việc liên hệ trực tiếp số điện thoại đường dây nóng <strong className="text-[#2A3A35]">{PROJECT_DETAILS.hotlineFormatted}</strong> hoặc từ chối cuộc gọi từ chuyên viên tư vấn.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-semibold text-[#CB7037] font-serif">4. Lưu ý quan trọng</h4>
                <p className="italic text-gray-500 text-xs">
                  * Website là trang trung gian cập nhật thông tin kế hoạch phục vụ khách hàng tìm hiểu mua căn hộ Masterise Homes, không phải là trang trực thuộc trực tiếp phòng quan hệ đối tác đầu tư chính phủ của chủ đầu tư. Mọi thiết kế phối cảnh và con số mang tính tham khảo dự án sớm trước kỳ bán hàng chính thức.
                </p>
              </section>
            </div>

            <div className="p-4 border-t border-gray-150 bg-gray-50 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-gradient-to-r from-[#CB7037] to-[#BF5E21] hover:from-[#E68142] hover:to-[#CF6A2A] text-white font-medium text-sm rounded-lg transition-all cursor-pointer"
              >
                Đã hiểu và Chấp nhận
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
