'use client'

import Image from "next/image";
import BookingFormModal from "./contact-form"; // Fixed import name
import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

export default function HairTreatmentCTA() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleCallNow = () => {
    window.location.href = 'tel:+9500651761'; // Fixed phone number format
  };

  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-7xl mx-auto bg-[#F5E6D3] rounded-3xl px-6 md:px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        
        {/* Left Image */}
        <RevealOnScroll direction="left" duration={750}>
          <div className="flex-shrink-0 w-32 md:w-44 lg:w-48">
            <Image
              src="/imageed.jpg"
              alt="Medical Team"
              width={200}
              height={200}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </RevealOnScroll>

        {/* Center Content */}
        <RevealOnScroll direction="up" delay={150} duration={700}>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black leading-tight">
              Begin Your Hair Treatment Journey with Medical Clarity
            </h2>
          </div>
        </RevealOnScroll>

        {/* Right CTA Buttons */}
        <RevealOnScroll direction="right" delay={250} duration={750}>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="border-2 border-[#9B7057] text-[#9B7057] hover:bg-[#9B7057] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base whitespace-nowrap"
            >
              Book Now
            </button>
            <button
              onClick={handleCallNow}
              className="bg-[#9B7057] hover:bg-[#7a4f3a] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base whitespace-nowrap"
            >
              Call Now
            </button>
          </div>
        </RevealOnScroll>
      </div>

      <BookingFormModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
}