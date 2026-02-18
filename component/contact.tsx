'use client'

import Image from "next/image";
import BookingFormModal from "./contact-form";
import { useState } from "react";

export default function HairTreatmentCTA() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
      const handleCallNow = () => {
      // Handle call now action
      window.location.href = 'tel:+ 95006 51761'; 
    }
  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-6xl mx-auto bg-[#F5E6D3] rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Image */}
        <div className="flex-shrink-0">
          <Image
            src="/imageed.jpg" // change to your image
            alt="Medical Team"
            width={220}
            height={220}
            className="object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-3">
            Begin Your Hair Treatment Journey with Medical Clarity
          </h2>
        </div>

        {/* Right CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          
          <button  onClick={() => setIsBookingModalOpen(true)} className="border border-[#9B7057] text-black font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md">
            Book Now
          </button>

          <button onClick={handleCallNow}  className="bg-[#9B7057] hover:bg-[#8a624a] text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md">
            Call Now
          </button>

        </div>

      </div>
          <BookingFormModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
}
