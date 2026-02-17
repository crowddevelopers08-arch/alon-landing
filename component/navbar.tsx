'use client'

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-white py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              {/* Logo Image */}
              <img 
                src="/logos.png" 
                alt="Anlon Aesthetics Logo" 
                className="h-10 sm:h-12 md:h-14 lg:h-15 w-auto transition-all duration-300"
              />
              {/* Or Text Logo */}
              {/* <h1 
                className="text-xl sm:text-2xl md:text-3xl font-bold transition-all duration-300"
                style={{ color: '#9B7057', fontFamily: 'CaslonCP, serif' }}
              >
                Anlon Aesthetics
              </h1> */}
            </a>
          </div>

          {/* Right Side - Call Now Button */}
          <div className="flex items-center">
            <a 
              href="tel:+919876543210"
              className="group flex items-center gap-2 sm:gap-3 text-white font-bold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl hover:scale-105 text-xs sm:text-sm md:text-base"
              style={{ backgroundColor: '#9B7057' }}
            >
              {/* Phone Icon */}
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;