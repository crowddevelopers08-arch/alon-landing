'use client'

import React, { MouseEvent } from 'react';

const FurtherQuestionsBanner = () => {
  // Type-safe hover handlers
  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.color = '#D9953D';
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.color = 'white';
  };

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout (lg and above) - Original preserved exactly */}
        <div className="hidden lg:block">
          <div 
            className="relative rounded-[40px] overflow-hidden shadow-2xl"
            style={{ backgroundColor: '#D9953D' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              
              {/* Left Side - Content */}
              <div className="p-12 lg:p-16 z-10 relative">
                <h2 className="text-5xl md:text-4xl font-bold text-white mb-8">
                  Begin Your Hair Treatment Journey with Medical Clarity
                </h2>
                
                <div className="flex flex-wrap gap-4">
                  {/* Book Now Button */}
                  <button className="group bg-white text-black font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 text-lg shadow-lg hover:shadow-xl hover:scale-105">

                    Book Now
                  </button>

                  {/* Call Now Button */}
                  <button 
                    className="group bg-transparent border-3 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 flex items-center gap-3 text-lg shadow-lg hover:shadow-xl"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Call Now
                  </button>
                </div>
              </div>

              {/* Right Side - Illustration */}
              <div className="relative h-full flex items-end justify-end">
                <div className="relative w-full h-[350px] lg:h-[400px]">
                  {/* Person Illustration with SVG */}
                  <svg 
                    className="absolute bottom-0 right-0 w-full h-full" 
                    viewBox="0 0 400 400" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Phone */}
                    <ellipse cx="200" cy="200" rx="30" ry="50" fill="#9B7057" transform="rotate(-20 200 200)" />
                    <rect x="185" y="170" width="8" height="35" rx="4" fill="#FFFFFF" transform="rotate(-20 200 200)" />
                    
                    {/* Head */}
                    <circle cx="250" cy="150" r="60" fill="#FBBF77" />
                    
                    {/* Hair */}
                    <ellipse cx="240" cy="100" rx="65" ry="55" fill="#9B7057" />
                    <path d="M 190 120 Q 200 80, 240 70 Q 280 75, 310 110 Q 320 140, 310 150 L 300 145 Q 305 125, 285 110 Q 260 95, 240 100 Q 215 105, 200 125 Z" fill="#9B7057" />
                    
                    {/* Eyes */}
                    <circle cx="230" cy="145" r="12" fill="white" />
                    <circle cx="270" cy="145" r="12" fill="white" />
                    <circle cx="233" cy="145" r="7" fill="#9B7057" />
                    <circle cx="273" cy="145" r="7" fill="#9B7057" />
                    <circle cx="235" cy="142" r="3" fill="white" />
                    <circle cx="275" cy="142" r="3" fill="white" />
                    
                    {/* Glasses */}
                    <circle cx="230" cy="145" r="18" fill="none" stroke="white" strokeWidth="3" opacity="0.8" />
                    <circle cx="270" cy="145" r="18" fill="none" stroke="white" strokeWidth="3" opacity="0.8" />
                    <line x1="248" y1="145" x2="252" y2="145" stroke="white" strokeWidth="3" opacity="0.8" />
                    
                    {/* Body/Shirt */}
                    <ellipse cx="250" cy="280" rx="80" ry="90" fill="#9B7057" />
                    
                    {/* Arm holding phone */}
                    <ellipse cx="180" cy="250" rx="25" ry="70" fill="#FBBF77" transform="rotate(-45 180 250)" />
                    
                    {/* Hand */}
                    <ellipse cx="165" cy="210" rx="20" ry="25" fill="#FBBF77" />
                    
                    {/* Shirt collar */}
                    <path d="M 210 220 L 200 240 L 220 245 Z" fill="#7A5A47" />
                    <path d="M 290 220 L 300 240 L 280 245 Z" fill="#7A5A47" />
                    
                    {/* Buttons on shirt */}
                    <circle cx="250" cy="250" r="5" fill="#FFFFFF" />
                    <circle cx="250" cy="270" r="5" fill="#FFFFFF" />
                    <circle cx="250" cy="290" r="5" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout (below lg) - Content first, illustration below */}
        <div className="block lg:hidden">
          <div 
            className="relative rounded-3xl sm:rounded-[40px] overflow-hidden shadow-2xl"
            style={{ backgroundColor: '#D9953D' }}
          >
            {/* Content Section */}
            <div className="p-6 sm:p-8 md:p-10 z-10 relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-7 md:mb-8 leading-tight">
                Begin Your Hair Treatment Journey with Medical Clarity
              </h2>
              
              <div className="flex sm:flex-row gap-3 sm:gap-4">
                {/* Book Now Button */}
                <button className="group bg-white text-black font-bold px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto">
                  Book Now
                </button>

                {/* Call Now Button */}
                <button 
                  className="group bg-transparent border-2 sm:border-3 border-white text-white font-bold px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg shadow-lg hover:shadow-xl w-full sm:w-auto"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Call Now
                </button>
              </div>
            </div>

            {/* Illustration Section - Positioned below content */}
            <div className="relative flex items-end justify-center sm:justify-end">
              <div className="relative w-full h-[220px] sm:h-[250px] md:h-[280px]">
                {/* Person Illustration with SVG - Adjusted for mobile */}
                <svg 
                  className="absolute bottom-0 right-0 sm:right-0 w-full h-full" 
                  viewBox="0 0 400 400" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Phone */}
                  <ellipse cx="200" cy="200" rx="30" ry="50" fill="#9B7057" transform="rotate(-20 200 200)" />
                  <rect x="185" y="170" width="8" height="35" rx="4" fill="#FFFFFF" transform="rotate(-20 200 200)" />
                  
                  {/* Head */}
                  <circle cx="250" cy="150" r="60" fill="#FBBF77" />
                  
                  {/* Hair */}
                  <ellipse cx="240" cy="100" rx="65" ry="55" fill="#9B7057" />
                  <path d="M 190 120 Q 200 80, 240 70 Q 280 75, 310 110 Q 320 140, 310 150 L 300 145 Q 305 125, 285 110 Q 260 95, 240 100 Q 215 105, 200 125 Z" fill="#9B7057" />
                  
                  {/* Eyes */}
                  <circle cx="230" cy="145" r="12" fill="white" />
                  <circle cx="270" cy="145" r="12" fill="white" />
                  <circle cx="233" cy="145" r="7" fill="#9B7057" />
                  <circle cx="273" cy="145" r="7" fill="#9B7057" />
                  <circle cx="235" cy="142" r="3" fill="white" />
                  <circle cx="275" cy="142" r="3" fill="white" />
                  
                  {/* Glasses */}
                  <circle cx="230" cy="145" r="18" fill="none" stroke="white" strokeWidth="3" opacity="0.8" />
                  <circle cx="270" cy="145" r="18" fill="none" stroke="white" strokeWidth="3" opacity="0.8" />
                  <line x1="248" y1="145" x2="252" y2="145" stroke="white" strokeWidth="3" opacity="0.8" />
                  
                  {/* Body/Shirt */}
                  <ellipse cx="250" cy="280" rx="80" ry="90" fill="#9B7057" />
                  
                  {/* Arm holding phone */}
                  <ellipse cx="180" cy="250" rx="25" ry="70" fill="#FBBF77" transform="rotate(-45 180 250)" />
                  
                  {/* Hand */}
                  <ellipse cx="165" cy="210" rx="20" ry="25" fill="#FBBF77" />
                  
                  {/* Shirt collar */}
                  <path d="M 210 220 L 200 240 L 220 245 Z" fill="#7A5A47" />
                  <path d="M 290 220 L 300 240 L 280 245 Z" fill="#7A5A47" />
                  
                  {/* Buttons on shirt */}
                  <circle cx="250" cy="250" r="5" fill="#FFFFFF" />
                  <circle cx="250" cy="270" r="5" fill="#FFFFFF" />
                  <circle cx="250" cy="290" r="5" fill="#FFFFFF" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurtherQuestionsBanner;