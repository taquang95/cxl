import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Landmark, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECT_DETAILS } from "../data";

interface HeaderProps {
  onOpenBooking: (apartmentType?: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "GIỚI THIỆU", href: "#gioithieu" },
    { label: "TỔNG QUAN", href: "#tongquan" },
    { label: "SẢN PHẨM", href: "#sanpham" },
    { label: "MẶT BẰNG", href: "#matbang" },
    { label: "TIỆN ÍCH", href: "#tienich" },
    { label: "VỊ TRÍ", href: "#vitri" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-gray-100"
            : "bg-gradient-to-b from-black/60 to-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Branding Logos */}
            <div className="flex items-center gap-2 md:gap-4 md:basis-1/4">
              <span className="sr-only">{PROJECT_DETAILS.name}</span>
              <a href="#" className="flex items-center gap-2 block outline-none">
                <img
                  src="https://w.ladicdn.com/s450x400/60d9ed782bd66f0013900826/logo-20260513145931-yq7ou.png"
                  alt="Seasons Garden Logo"
                  className={`h-10 md:h-12 w-auto object-contain transition-transform hover:scale-105 ${
                    isScrolled ? "brightness-95 contrast-105" : ""
                  }`}
                  referrerPolicy="no-referrer"
                />
                <div className={`w-[1px] h-8 self-center hidden sm:block transition-colors ${
                  isScrolled ? "bg-gray-300" : "bg-white/20"
                }`} />
                <img
                  src="https://w.ladicdn.com/s400x400/60d9ed782bd66f0013900826/logo_mh_trang-20260417014254-j986k.png"
                  alt="Masterise Homes White Logo"
                  className={`h-9 md:h-10 w-auto object-contain hidden sm:block transition-all ${
                    isScrolled ? "invert brightness-0" : ""
                  }`}
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 justify-center flex-1 md:basis-1/2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs xl:text-sm font-bold tracking-wider transition-colors relative py-1 group uppercase ${
                    isScrolled
                      ? "text-gray-800 hover:text-[#CB7037]"
                      : "text-white/85 hover:text-[#D4AF37]"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#CB7037]" : "bg-[#D4AF37]"
                  }`} />
                </a>
              ))}
            </nav>

            {/* CTA Actions */}
            <div className="hidden lg:flex items-center gap-4 justify-end md:basis-1/4">
              <a
                href={`tel:${PROJECT_DETAILS.hotline}`}
                className={`flex items-center gap-2 text-xs xl:text-sm font-bold border rounded-full transition-all px-4 py-2 ${
                  isScrolled
                    ? "text-[#CB7037] bg-gray-50 border-[#CB7037]/30 hover:bg-gray-100"
                    : "text-[#D4AF37] bg-[#31423C]/50 hover:bg-[#31423C] border-[#CB7037]/43"
                }`}
              >
                <Phone className="w-4 h-4 animate-bounce" />
                <span>{PROJECT_DETAILS.hotlineFormatted}</span>
              </a>
              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#CB7037] to-[#BF5E21] hover:from-[#E68142] hover:to-[#CF6A2A] text-white font-bold text-xs xl:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-[#CB7037]/22 hover:scale-105 active:scale-95"
              >
                YÊU CẦU TƯ VẤN
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${PROJECT_DETAILS.hotline}`}
                className={`p-2 rounded-full border transition-all ${
                  isScrolled
                    ? "bg-gray-50 text-[#CB7037] border-gray-200"
                    : "bg-[#31423C]/90 text-[#D4AF37] border-[#CB7037]/35"
                }`}
              >
                <Phone className="w-4.5 h-4.5 animate-bounce" />
              </a>
              <button
                onClick={() => onOpenBooking()}
                className="px-3.5 py-2 rounded-full bg-gradient-to-r from-[#CB7037] to-[#BF5E21] text-white font-bold text-xs tracking-wider uppercase"
              >
                YÊU CẦU TƯ VẤN
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className={`p-2 transition-colors focus:outline-none ${
                  isScrolled ? "text-gray-800 hover:text-[#CB7037]" : "text-white hover:text-[#D4AF37]"
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-[340px] bg-[#1E2E2A] text-white p-6 shadow-2xl flex flex-col justify-between border-l border-[#CB7037]/30"
            >
              <div>
                {/* Header of Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-[#31423C]">
                  <div className="flex items-center gap-2">
                    <Landmark className="w-6 h-6 text-[#D4AF37]" />
                    <span className="font-serif font-bold text-[#D4AF37] text-sm tracking-widest">SEASONS GARDEN</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-full bg-[#31423C] text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links inside Drawer */}
                <nav className="mt-8 flex flex-col gap-5">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-base font-bold tracking-wider text-gray-200 hover:text-[#D4AF37] transition-colors py-1 block uppercase border-b border-[#31423C]/40"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom Details of Drawer */}
              <div className="pt-6 border-t border-[#31423C] space-y-4">
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Hotline hỗ trợ 24/7</p>
                  <a
                    href={`tel:${PROJECT_DETAILS.hotline}`}
                    className="text-xl font-bold text-[#D4AF37] hover:underline"
                  >
                    {PROJECT_DETAILS.hotlineFormatted}
                  </a>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#CB7037] to-[#BF5E21] hover:from-[#E68142] hover:to-[#CF6A2A] text-white font-bold tracking-wider uppercase transition-all shadow-md text-sm text-center"
                >
                  YÊU CẦU TƯ VẤN
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
