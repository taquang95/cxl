import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Location from "./components/Location";
import MasterPlan from "./components/MasterPlan";
import Products from "./components/Products";
import Facilities from "./components/Facilities";
import Progress from "./components/Progress";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";
import BookingModal from "./components/BookingModal";
import PolicyModal from "./components/PolicyModal";

import { motion } from "motion/react";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedApartmentType, setSelectedApartmentType] = useState("");
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const handleOpenBooking = (apartmentType: string = "") => {
    setSelectedApartmentType(apartmentType);
    setIsBookingOpen(true);
  };

  const handleOpenPolicy = () => {
    setIsPolicyOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#131E1B] text-white flex flex-col selection:bg-[#CB7037] selection:text-white">
      {/* Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Overview Section */}
        <Overview onOpenBooking={handleOpenBooking} />

        {/* Location Section */}
        <Location />

        {/* Master Plan Section */}
        <MasterPlan onOpenBooking={handleOpenBooking} />

        {/* Products Section */}
        <Products onOpenBooking={handleOpenBooking} />

        {/* Facilities Section */}
        <Facilities />

        {/* Progress & Document Section */}
        <Progress />
      </main>

      {/* Structured Footer */}
      <Footer onOpenBooking={handleOpenBooking} onOpenPolicy={handleOpenPolicy} />

      {/* Permanent floating helper widgets (Zalo & Phone) */}
      <FloatingWidgets />

      {/* Overlay Dialog Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultApartmentType={selectedApartmentType}
      />
      
      <PolicyModal
        isOpen={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
      />
    </div>
  );
}

