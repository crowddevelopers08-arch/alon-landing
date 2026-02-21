'use client'

import React, { useState } from 'react';
import BookingFormModal from './contact-form';
import RevealOnScroll from './RevealOnScroll'; // ✅ reusable animation component

const WhoWeAreSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleCallNow = () => {
    window.location.href = 'tel:+91 9500653243';
  };

  const trustPoints = [
    'Doctor-led scalp & hair evaluation',
    'Personalised medical planning',
    'Ethical, non-aggressive approach',
    'Follow-up and progress monitoring',
    'No over-pitch or unnecessary procedures',
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <style>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatLeftRight {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(15px); }
        }
        .animate-float-up-down { animation: floatUpDown 4s ease-in-out infinite; }
        .animate-float-left-right { animation: floatLeftRight 5s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* ── Mobile Layout ── */}
        <div className="block lg:hidden">

          {/* Heading - from left */}
          <RevealOnScroll direction="left" duration={700}>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight max-sm:mb-10 mb-4">
              Trusted Hair Loss Clinic in Chennai — Medical, Ethical, Result-Focused
            </h2>
          </RevealOnScroll>

          {/* Images - from right */}
          <RevealOnScroll direction="right" delay={150} duration={800}>
            <div className="relative h-[350px] sm:h-[400px] w-full mb-6">
              <div className="absolute top-0 right-0 w-[85%] h-[75%] rounded-2xl overflow-hidden shadow-2xl z-10 animate-float-up-down">
                <img src="/DSC02295.JPG" alt="Doctor with baby" className="w-full h-full object-cover" />
              </div>
              <div
                className="absolute bottom-0 left-0 rounded-2xl overflow-hidden shadow-2xl z-20 animate-float-left-right bg-orange-50"
                style={{ width: '60%', height: '45%', maxHeight: '250px', padding: '6px' }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img src="/DSC02268.JPG" alt="Nurse with elderly patient" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute top-[8%] right-[4%] w-[70%] h-[60%] rounded-2xl border-4 -z-10" style={{ borderColor: '#130e0b', opacity: 0.2 }} />
            </div>
          </RevealOnScroll>

          {/* Description - from left */}
          <RevealOnScroll direction="left" delay={200} duration={700}>
            <div className="space-y-4 mb-4">
              <p className="text-gray-600 text-base leading-relaxed">
                At Anlon Aesthetics, hair treatments are approached medically, not commercially. Every patient is first evaluated for hair loss pattern, scalp condition, and follicle activity before any recommendation is made.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Our focus is on clarity, safety, and long-term outcomes, ensuring that the treatment chosen truly matches your hair loss stage.
              </p>
            </div>
          </RevealOnScroll>

          {/* Trust Highlights - from right */}
          <RevealOnScroll direction="right" delay={250} duration={700}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-orange-50 p-4 rounded-xl border-l-4 mb-6" style={{ borderColor: '#130e0b' }}>
              {trustPoints.map((point, i) => (
                <div key={i} className={`flex items-start gap-2 ${i === 4 ? 'sm:col-span-2' : ''}`}>
                  <span className="text-lg mt-1 flex-shrink-0" style={{ color: '#130e0b' }}>✔</span>
                  <p className="text-gray-800 text-sm font-medium">{point}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* CTA - from left */}
          <RevealOnScroll direction="left" delay={300} duration={700}>
            <div className="flex sm:flex-row gap-3">
              <button
                className="group border-1 border-black flex items-center justify-center gap-2 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-sm w-full sm:w-auto"
                onClick={() => setIsBookingModalOpen(true)}
              >
                Book Now
              </button>
              <a href="tel:+91 9500653243">
              <button
                className="group flex items-center justify-center gap-2 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-sm w-full sm:w-auto"
                style={{ backgroundColor: '#9B7057' }}
                
              >
                Call Now
              </button>
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* ── Desktop Layout (lg+) ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">

          {/* Left - Text slides from left */}
          <RevealOnScroll direction="left" duration={800}>
            <div className="space-y-2">
              <h2 className="text-5xl font-bold text-gray-900">
                Trusted Hair Loss Clinic in Chennai — Medical, Ethical, Result-Focused
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  At Anlon Aesthetics, hair treatments are approached medically, not commercially. Every patient is first evaluated for hair loss pattern, scalp condition, and follicle activity before any recommendation is made.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our focus is on clarity, safety, and long-term outcomes, ensuring that the treatment chosen truly matches your hair loss stage.
                </p>
              </div>

              {/* Trust Highlights */}
              <div className="grid grid-cols-2 gap-4 bg-orange-50 p-6 rounded-xl border-l-4" style={{ borderColor: '#130e0b' }}>
                {trustPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xl mt-1" style={{ color: '#130e0b' }}>✔</span>
                    <p className="text-gray-800 font-medium">{point}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  className="group border-1 border-black flex items-center gap-2 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:brightness-110"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book Now
                </button>
                <button
                  className="group flex items-center gap-2 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:brightness-110"
                  style={{ backgroundColor: '#9B7057' }}
                  onClick={handleCallNow}
                >
                  Call Now
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right - Images slide from right */}
          <RevealOnScroll direction="right" delay={200} duration={800}>
            <div className="relative h-[700px]">
              <div className="absolute top-0 right-0 w-[85%] h-[80%] rounded-3xl overflow-hidden shadow-2xl z-10 animate-float-up-down">
                <img src="/DSC02295.JPG" alt="Doctor with baby" className="w-full h-full object-cover" />
              </div>
              <div
                className="absolute bottom-0 left-0 rounded-3xl overflow-hidden shadow-2xl z-20 animate-float-left-right bg-orange-50"
                style={{ width: '60%', height: '55%', padding: '8px' }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img src="/C6274T01.jpeg" alt="Nurse with elderly patient" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute top-[10%] right-[5%] w-[70%] h-[65%] rounded-3xl border-4 -z-10" style={{ borderColor: '#130e0b', opacity: 0.2 }} />
            </div>
          </RevealOnScroll>

        </div>
      </div>

      <BookingFormModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default WhoWeAreSection;