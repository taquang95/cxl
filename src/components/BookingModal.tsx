import React, { useState, useTransition } from "react";
import { X, CheckCircle, Send, Landmark, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BookingLead } from "../types";
import { PROJECT_DETAILS } from "../data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultApartmentType?: string;
  sourceFormName?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultApartmentType = "",
  sourceFormName = "Nút Hotline"
}: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [apartmentType, setApartmentType] = useState(defaultApartmentType);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const apartmentOptions = [
    "Căn 1PN 43 - 53 m2",
    "Căn 2PN 65 - 75 m2",
    "Căn 3PN 99 - 109 m2",
    "Duplex: 123m2 - 200m2",
    "Penthouse: 141m2 - 232 m2"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setErrorMsg(null);

    startTransition(async () => {
      try {
        const payload: BookingLead = {
          name,
          phone,
          apartmentType: apartmentType || "Chưa lựa chọn",
          sourceForm: sourceFormName,
          timestamp: new Date().toLocaleString("vi-VN")
        };

        const response = await fetch("/api/booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Gửi thông tin không thành công quý khách vui lòng kiểm tra lại cấu hình hoặc kết nối mạng.");
        }

        // Store locally
        const existingLeads = JSON.parse(localStorage.getItem("masterise_leads") || "[]");
        existingLeads.push(payload);
        localStorage.setItem("masterise_leads", JSON.stringify(existingLeads));

        setIsSubmitted(true);
      } catch (err: any) {
        console.error("Error submitting lead:", err);
        setErrorMsg(err.message || "Đã xảy ra lỗi khi kết nối máy chủ gửi thư. Vui lòng liên hệ hỗ trợ!");
      }
    });
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setApartmentType(defaultApartmentType);
    setErrorMsg(null);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/74 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white text-gray-800 border border-gray-200 shadow-2xl z-10"
          >
            {/* Header pattern decoration */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#CB7037] via-[#BF5E21] to-[#CB7037]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 transition-all hover:bg-gray-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              {!isSubmitted ? (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#CB7037]/10 border border-[#CB7037]/20 text-[#CB7037]">
                      <Landmark className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif font-semibold tracking-tight text-[#2A3A35]">
                        ĐĂNG KÝ NHẬN CHỖ TRƯỚC
                      </h3>
                      <p className="text-xs text-[#CB7037] tracking-wider font-medium uppercase mt-0.5">
                        {PROJECT_DETAILS.name}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-6 leading-relaxed font-sans">
                    Đăng ký giữ chỗ ưu tiên căn đẹp tháp Seasons Garden, nhận bảng giá chi tiết đợt 1 và đặc quyền chiết khấu từ chủ đầu tư Masterise Homes.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ví dụ: Nguyễn Văn A"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-250 text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#CB7037] focus:ring-1 focus:ring-[#CB7037] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ví dụ: 0971735999"
                        pattern="(\+84|0)(3|5|7|8|9)[0-9]{8}"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-250 text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#CB7037] focus:ring-1 focus:ring-[#CB7037] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Căn hộ quan tâm
                      </label>
                      <select
                        value={apartmentType}
                        onChange={(e) => setApartmentType(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-250 text-gray-800 focus:outline-none focus:bg-white focus:border-[#CB7037] focus:ring-1 focus:ring-[#CB7037] transition-all"
                      >
                        <option value="">Lựa chọn loại căn hộ</option>
                        {apartmentOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-gray-800">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {errorMsg && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 leading-normal text-center font-medium">
                        {errorMsg}
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isPending}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#CB7037] to-[#BF5E21] hover:from-[#E68142] hover:to-[#CF6A2A] text-white font-bold tracking-wide uppercase transition-all shadow-md active:scale-98 disabled:opacity-50 cursor-pointer"
                      >
                        {isPending ? (
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Gửi yêu cầu ưu tiên
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  <div className="mt-5 flex items-center gap-2 justify-center text-center text-[11px] text-gray-500 leading-normal px-2">
                    <ShieldCheck className="w-4 h-4 text-[#CB7037] shrink-0" />
                    <span>Thông tin của quý khách được bảo mật theo chính sách quyền riêng tư</span>
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex p-3 rounded-full bg-green-50/10 text-green-600 border border-green-500/20 mb-4"
                  >
                    <CheckCircle className="w-12 h-12" />
                  </motion.div>

                  <h3 className="text-2xl font-serif font-bold text-[#2A3A35] mb-2">
                    GỬI ĐĂNG KÝ THÀNH CÔNG!
                  </h3>
                  
                  <div className="bg-gray-50 rounded-xl p-4 my-4 border border-gray-200 text-left space-y-2">
                    <p className="text-xs text-[#CB7037] font-semibold text-center mb-1">XÁC NHẬN THÔNG TIN ĐẠT BOOKING</p>
                    <p className="text-sm"><span className="text-gray-500">Quý khách:</span> <strong className="text-gray-900">{name}</strong></p>
                    <p className="text-sm"><span className="text-gray-500">Số điện thoại:</span> <strong className="text-gray-900">{phone}</strong></p>
                    {apartmentType && (
                      <p className="text-sm"><span className="text-gray-500">Căn hộ quan tâm:</span> <strong className="text-[#CB7037]">{apartmentType}</strong></p>
                    )}
                    <p className="text-[11px] text-gray-500 text-center pt-1 italic">Tư vấn viên trưởng từ Masterise Homes sẽ liên lạc tới Anh/Chị trong vòng 10 phút.</p>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-sans">
                    Chúng tôi đã ghi nhận thông tin giữ chỗ ưu tiên của quý khách. Cảm ơn sự quan tâm tuyệt vời của quý khách dành cho Masterise Homes.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={handleReset}
                      className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-750 rounded-lg font-medium text-sm transition-all cursor-pointer"
                    >
                      Đóng cửa sổ
                    </button>
                    <a
                      href={PROJECT_DETAILS.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-sm transition-all shadow-md cursor-pointer"
                    >
                      Liên hệ Zalo Ngay
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
