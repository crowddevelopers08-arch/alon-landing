'use client'

import React, { useState } from 'react';
import BookingFormModal from './contact-form';

const HealthcareFeaturesSection = () => {
          const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    
      const handleCallNow = () => {
        // Handle call now action
        window.location.href = 'tel:+1234567890'; 
      }
  return (
    <section className="pt-6 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading - Centered */}
        <div className="flex justify-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center leading-tight max-w-4xl" 
              style={{ color: '#9B7057'}}>
            Regenera Activa – Advanced Hair Restoration
          </h2>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-start">
          
          {/* Left Side - Content */}
          <div className="space-y-4">
            {/* Description Paragraph 1 */}
            <p className="text-gray-600 text-base md:text-md leading-relaxed">
              Regenera Activa is an advanced, non-surgical hair restoration option recommended for individuals with moderate to advanced hair thinning where maintenance-based treatments alone may not be sufficient.
            </p>

            {/* Description Paragraph 2 */}
            <p className="text-gray-600 text-base md:text-md leading-relaxed">
              This treatment focuses on reviving dormant hair follicles and improving overall hair density using regenerative principles. It is offered only after a detailed doctor assessment to ensure suitability and realistic outcomes.
            </p>

            {/* Important Note */}
            <div className="bg-orange-50 border-l-4 p-5 rounded-r-md" style={{ borderColor: '#D9953D' }}>
              <p className="text-gray-800 font-semibold text-base md:text-md">
                <span style={{ color: '#D9953D' }}>Important Note:</span> Regenera Activa is advised as a medical decision, not a promotional treatment.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex sm:flex-row gap-4 pt-4">
              {/* Book Now Button */}
              <button  onClick={() => setIsBookingModalOpen(true)}
                className="flex border-1 border-black items-center justify-center gap-2 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:opacity-90 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[180px]"
              >
                Book Now
              </button>

              {/* Call Now Button */}
              <button   onClick={handleCallNow} 
                className="flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:opacity-90 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[180px]"
                style={{ backgroundColor: '#9B7057' }}
              >
                Call Now
              </button>
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="space-y-1">
            {/* Feature 1 */}
            <div className="flex gap-5 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                 <div className="flex-shrink-0">
                  <img 
                    src="/pushing.png" 
                    alt="Excessive daily hair fall icon"
                    className="w-10 h-10 object-contain"
                    style={{ filter: "brightness(0) saturate(100%) invert(64%) sepia(48%) saturate(563%) hue-rotate(1deg) brightness(94%) contrast(92%)" }}
                  />
                </div>
              <div>
                <h4 className="text-md md:text-lg font-bold text-gray-900 mb-2">Have progressive or advanced thinning</h4>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-5 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <img 
                    src="/hourglass.png" 
                    alt="Excessive daily hair fall icon"
                    className="w-10 h-10 object-contain"
                    style={{ filter: "brightness(0) saturate(100%) invert(64%) sepia(48%) saturate(563%) hue-rotate(1deg) brightness(94%) contrast(92%)" }}
                  />
                </div>
              <div>
                <h4 className="text-md md:text-lg font-bold text-gray-900 mb-2">Have seen limited results with earlier treatments</h4>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-5 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 max-sm:mb-5">
                <div className="flex-shrink-0">
                  <img 
                    src="/man.png" 
                    alt="Excessive daily hair fall icon"
                    className="w-10 h-10 object-contain"
                    style={{ filter: "brightness(0) saturate(100%) invert(64%) sepia(48%) saturate(563%) hue-rotate(1deg) brightness(94%) contrast(92%)" }}
                  />
                </div>
              <div>
                <h4 className="text-md md:text-lg font-bold text-gray-900 mb-0">Are looking for long-term hair restoration</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
                      <BookingFormModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default HealthcareFeaturesSection;