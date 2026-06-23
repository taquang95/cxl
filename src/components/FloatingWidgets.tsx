import { Phone, MessageSquare } from "lucide-react";
import { PROJECT_DETAILS } from "../data";

export default function FloatingWidgets() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* Zalo Floating Button */}
      <a
        href={PROJECT_DETAILS.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-2xl hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all animate-bounce"
        style={{ animationDuration: "3s" }}
        title="Liên hệ tư vấn Zalo"
      >
        <span className="absolute right-16 px-3 py-1 rounded bg-[#131E1B] text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md border border-[#CB7037]/21">
          Zalo Giám đốc: {PROJECT_DETAILS.hotlineFormatted}
        </span>
        <img
          src="https://w.ladicdn.com/s400x450/60d9ed782bd66f0013900826/icon-zalo-20220405145802.png"
          alt="Zalo Chat"
          className="w-full h-full object-contain rounded-full"
          referrerPolicy="no-referrer"
        />
      </a>

      {/* Phone Call Floating Button */}
      <a
        href={`tel:${PROJECT_DETAILS.hotline}`}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#CB7037] to-[#BF5E21] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all overflow-hidden"
        title="Gọi điện hotline hỗ trợ 24/7"
      >
        {/* Pulsing glow surround effect */}
        <span className="absolute inset-0 rounded-full bg-[#CB7037] opacity-25 animate-ping" />
        <span className="absolute right-16 px-3 py-1 rounded bg-[#131E1B] text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md border border-[#CB7037]/21">
          Hotline Giám đốc: {PROJECT_DETAILS.hotlineFormatted}
        </span>
        <img
          src="https://w.ladicdn.com/s400x400/60d9ed782bd66f0013900826/phone-icon-20250511014241-p5dhi.png"
          alt="Gọi Hotline"
          className="w-8 h-8 object-contain z-10"
          referrerPolicy="no-referrer"
        />
      </a>
    </div>
  );
}
