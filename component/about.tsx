'use client'

import React, { useState } from 'react';
import BookingFormModal from './contact-form';

const WhoWeAreSection = () => {
        const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
    const handleCallNow = () => {
      // Handle call now action
      window.location.href = 'tel:+1234567890'; 
    }
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white">
      <style>
        {`
          @keyframes floatUpDown {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          @keyframes floatLeftRight {
            0%, 100% {
              transform: translateX(0px);
            }
            50% {
              transform: translateX(15px);
            }
          }
          
          .animate-float-up-down {
            animation: floatUpDown 4s ease-in-out infinite;
          }
          
          .animate-float-left-right {
            animation: floatLeftRight 5s ease-in-out infinite;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout - Image between heading and paragraph */}
        <div className="block lg:hidden">
          {/* Heading for mobile */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight max-sm:mb-10 mb-4">
            Trusted Hair Loss Clinic in Chennai — Medical, Ethical, Result-Focused
          </h2>

          {/* Images for mobile - positioned between heading and paragraph */}
          <div className="relative h-[350px] sm:h-[400px] w-full mb-6">
            {/* Background Image - Doctor with Baby */}
            <div className="absolute top-0 right-0 w-[85%] h-[75%] rounded-2xl overflow-hidden shadow-2xl z-10 animate-float-up-down">
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80" 
                alt="Doctor with baby"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foreground Image - Nurse with Patient */}
            <div 
              className="absolute bottom-0 left-0 rounded-2xl overflow-hidden shadow-2xl z-20 animate-float-left-right"
              style={{ 
                width: '60%',
                height: '45%',
                maxHeight: '250px',
                backgroundColor: '#D9953D',
                padding: '6px'
              }}
            >
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80" 
                  alt="Nurse with elderly patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Element */}
            <div 
              className="absolute top-[8%] right-[4%] w-[70%] h-[60%] rounded-2xl border-4 -z-10"
              style={{ borderColor: '#D9953D', opacity: 0.2 }}
            />
          </div>

          {/* Description for mobile */}
          <div className="space-y-4 mb-4">
            <p className="text-gray-600 text-base leading-relaxed">
              At Anlon Aesthetics, hair treatments are approached medically, not commercially. Every patient is first evaluated for hair loss pattern, scalp condition, and follicle activity before any recommendation is made.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Our focus is on clarity, safety, and long-term outcomes, ensuring that the treatment chosen truly matches your hair loss stage.
            </p>
          </div>

          {/* Trust Highlights for mobile */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-orange-50 p-4 rounded-xl border-l-4 mb-6"
            style={{ borderColor: '#D9953D' }}
          >
            <div className="flex items-start gap-2">
              <span className="text-lg mt-1 flex-shrink-0" style={{ color: '#D9953D' }}>✔</span>
              <p className="text-gray-800 text-sm font-medium">
                Doctor-led scalp & hair evaluation
              </p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-lg mt-1 flex-shrink-0" style={{ color: '#D9953D' }}>✔</span>
              <p className="text-gray-800 text-sm font-medium">
                Personalised medical planning
              </p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-lg mt-1 flex-shrink-0" style={{ color: '#D9953D' }}>✔</span>
              <p className="text-gray-800 text-sm font-medium">
                Ethical, non-aggressive approach
              </p>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-lg mt-1 flex-shrink-0" style={{ color: '#D9953D' }}>✔</span>
              <p className="text-gray-800 text-sm font-medium">
                Follow-up and progress monitoring
              </p>
            </div>

            <div className="flex items-start gap-2 sm:col-span-2">
              <span className="text-lg mt-1 flex-shrink-0" style={{ color: '#D9953D' }}>✔</span>
              <p className="text-gray-800 text-sm font-medium">
                No over-pitch or unnecessary procedures
              </p>
            </div>
          </div>

          {/* CTA Buttons for mobile */}
          <div className="flex sm:flex-row gap-3">
            <button 
              className="group  border-1 border-black  flex items-center justify-center gap-2 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-sm w-full sm:w-auto"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Now
            </button>

            <button 
              className="group flex items-center justify-center gap-2 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-sm w-full sm:w-auto"
              style={{ backgroundColor: '#9B7057' }}
               onClick={handleCallNow} 
            >
              Call Now
            </button>
          </div>
        </div>

        {/* Desktop Layout (lg and above) - Original two-column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-2">
            {/* Main Heading */}
            <h2 className="text-5xl font-bold text-gray-900">
              Trusted Hair Loss Clinic in Chennai — Medical, Ethical, Result-Focused
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                At Anlon Aesthetics, hair treatments are approached medically, not commercially. Every patient is first evaluated for hair loss pattern, scalp condition, and follicle activity before any recommendation is made.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our focus is on clarity, safety, and long-term outcomes, ensuring that the treatment chosen truly matches your hair loss stage.
              </p>
            </div>

            {/* Trust Highlights */}
            <div
              className="grid grid-cols-2 gap-4 bg-orange-50 p-6 rounded-xl border-l-4"
              style={{ borderColor: '#D9953D' }}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl mt-1" style={{ color: '#D9953D' }}>✔</span>
                <p className="text-gray-800 font-medium">
                  Doctor-led scalp & hair evaluation
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl mt-1" style={{ color: '#D9953D' }}>✔</span>
                <p className="text-gray-800 font-medium">
                  Personalised medical planning
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl mt-1" style={{ color: '#D9953D' }}>✔</span>
                <p className="text-gray-800 font-medium">
                  Ethical, non-aggressive approach
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl mt-1" style={{ color: '#D9953D' }}>✔</span>
                <p className="text-gray-800 font-medium">
                  Follow-up and progress monitoring
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl mt-1" style={{ color: '#D9953D' }}>✔</span>
                <p className="text-gray-800 font-medium">
                  No over-pitch or unnecessary procedures
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                className="group border-1 border-black flex items-center gap-2 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:brightness-110 "
onClick={() => setIsBookingModalOpen(true)}
              >
                Book Now
              </button>

              <button 
                className="group flex items-center gap-2 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:brightness-110 "
                style={{ backgroundColor: '#9B7057' }}
                 onClick={handleCallNow} 
              >
                Call Now
              </button>
            </div>
          </div>

          {/* Right Side - Overlapping Images */}
          <div className="relative h-[700px]">
            {/* Background Image - Doctor with Baby */}
            <div className="absolute top-0 right-0 w-[85%] h-[80%] rounded-3xl overflow-hidden shadow-2xl z-10 animate-float-up-down">
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80" 
                alt="Doctor with baby"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foreground Image - Nurse with Patient */}
            <div 
              className="absolute bottom-0 left-0 rounded-3xl overflow-hidden shadow-2xl z-20 animate-float-left-right"
              style={{ 
                width: '60%',
                height: '55%',
                backgroundColor: '#D9953D',
                padding: '8px'
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80" 
                  alt="Nurse with elderly patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Element */}
            <div 
              className="absolute top-[10%] right-[5%] w-[70%] h-[65%] rounded-3xl border-4 -z-10"
              style={{ borderColor: '#D9953D', opacity: 0.2 }}
            />
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

export default WhoWeAreSection;