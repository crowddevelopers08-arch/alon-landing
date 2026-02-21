'use client'

import React, { useState } from 'react';
import BookingFormModal from './contact-form';
import RevealOnScroll from './RevealOnScroll'; // ✅ reusable animation component

const HealthcareFeaturesSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleCallNow = () => {
    window.location.href = 'tel:+919500653243';
  };

  return (
    <section className="pt-6 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading - from up */}
        <RevealOnScroll direction="up" duration={700}>
          <div className="flex justify-center mb-6 md:mb-8">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center leading-tight max-w-4xl px-2"
              style={{ color: '#9B7057' }}
            >
              Regenera Activa – Advanced Hair Restoration
            </h2>
          </div>
        </RevealOnScroll>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">

          {/* Left Side - slides from left */}
          <RevealOnScroll direction="left" delay={150} duration={750}>
            <div className="space-y-4 md:space-y-5">
              <p className="text-gray-600 text-sm sm:text-base md:text-md leading-relaxed">
                Regenera Activa is an advanced, non-surgical hair restoration option recommended for individuals with moderate to advanced hair thinning where maintenance-based treatments alone may not be sufficient.
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-md leading-relaxed">
                This treatment focuses on reviving dormant hair follicles and improving overall hair density using regenerative principles. It is offered only after a detailed doctor assessment to ensure suitability and realistic outcomes.
              </p>

              {/* Important Note */}
              <div className="bg-orange-50 border-l-4 p-4 sm:p-5 rounded-r-md" style={{ borderColor: '#130e0b' }}>
                <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-md">
                  <span style={{ color: '#9B7057' }}>Important Note:</span> Regenera Activa is advised as a medical decision, not a promotional treatment.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex sm:flex-row gap-3 sm:gap-4 pt-4 md:pt-2">
                 <button
    className="group border-1 border-black flex items-center justify-center gap-2 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-sm w-full sm:w-auto"
    onClick={() => setIsBookingModalOpen(true)}
  >
    Book Now
  </button>
  
  <a 
    href="tel:+91 9500653243" 
    className="flex w-full sm:w-auto"
  >
    <button
      className="group flex items-center justify-center gap-2 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-sm w-full"
      style={{ backgroundColor: '#9B7057' }}
    >
      Call Now
    </button>
  </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Side - Feature items slide from right with stagger */}
          <div className="space-y-1 mt-4 lg:mt-0">
            {[
              { src: '/pushing.png',  alt: 'Progressive thinning',     label: 'Have progressive or advanced thinning' },
              { src: '/hourglass.png', alt: 'Limited results',          label: 'Have seen limited results with earlier treatments' },
              { src: '/man.png',       alt: 'Long-term restoration',    label: 'Are looking for long-term hair restoration' },
            ].map((feature, i) => (
              <RevealOnScroll key={i} direction="right" delay={200 + i * 150} duration={700}>
                <div className="flex sm:flex-row items-center gap-4 sm:gap-5 p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center sm:text-left">
                  <div className="flex-shrink-0">
                    <img
                      src={feature.src}
                      alt={feature.alt}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 object-contain"
                      style={{
                        filter: 'brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)',
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-md md:text-lg font-bold text-gray-900">{feature.label}</h4>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
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