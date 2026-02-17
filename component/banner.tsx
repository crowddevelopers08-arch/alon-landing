'use client'

import React, { useState, useEffect } from 'react';

const CarRentalHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [headlineChars, setHeadlineChars] = useState(0);
  const [subheadlineChars, setSubheadlineChars] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [showIndicators, setShowIndicators] = useState(false);
  const [isRewriting, setIsRewriting] = useState(false);
  const [rewriteChars, setRewriteChars] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const staticPart = "Doctor-Led Hair Loss Treatment & ";
  const rewritePart = "Hair Restoration in Chennai";
  const fullHeadline = staticPart + rewritePart;
  const subheadline = "Hair fall treatment, hair thinning solutions, and advanced hair restoration planned after detailed doctor-led scalp analysis.";

  // Multiple images for carousel - using hair/medical related images
  const carImages = [
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80', // Medical/clinic
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80', // Professional
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80', // Portrait
  ];

  useEffect(() => {
    // Initial typing of full headline
    if (headlineChars < fullHeadline.length) {
      const timer = setTimeout(() => {
        setHeadlineChars(prev => prev + 1);
      }, 50); // 50ms per character - slow and smooth
      return () => clearTimeout(timer);
    } 
    // Start subheadline after headline completes
    else if (subheadlineChars < subheadline.length) {
      const timer = setTimeout(() => {
        setSubheadlineChars(prev => prev + 1);
      }, 30); // 30ms per character for subheadline
      return () => clearTimeout(timer);
    } 
    // Show buttons after text completes
    else if (!showButtons) {
      const timer = setTimeout(() => {
        setShowButtons(true);
      }, 300);
      return () => clearTimeout(timer);
    } 
    // Show trust indicators after buttons
    else if (!showIndicators) {
      const timer = setTimeout(() => {
        setShowIndicators(true);
      }, 400);
      return () => clearTimeout(timer);
    }
    // Start rewriting animation after everything is done
    else if (!isRewriting) {
      const timer = setTimeout(() => {
        setIsRewriting(true);
      }, 2000); // Wait 2 seconds before starting rewrite loop
      return () => clearTimeout(timer);
    }
  }, [headlineChars, subheadlineChars, showButtons, showIndicators, isRewriting]);

  // Rewriting animation loop - deletes and rewrites "Hair Restoration in Chennai"
  useEffect(() => {
    if (!isRewriting) return;

    if (isDeleting) {
      // Deleting characters
      if (rewriteChars > 0) {
        const timer = setTimeout(() => {
          setRewriteChars(prev => prev - 1);
        }, 40); // 40ms to delete each character
        return () => clearTimeout(timer);
      } else {
        // Finished deleting, start typing again
        const timer = setTimeout(() => {
          setIsDeleting(false);
        }, 500); // Pause before typing again
        return () => clearTimeout(timer);
      }
    } else {
      // Typing characters
      if (rewriteChars < rewritePart.length) {
        const timer = setTimeout(() => {
          setRewriteChars(prev => prev + 1);
        }, 70); // 70ms to type each character
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait then start deleting
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000); // Show full text for 3 seconds before deleting
        return () => clearTimeout(timer);
      }
    }
  }, [isRewriting, isDeleting, rewriteChars]);

  useEffect(() => {
    // Auto-rotate carousel
    const carouselTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carImages.length);
      
      // Reset all animations when slide changes
      setHeadlineChars(0);
      setSubheadlineChars(0);
      setShowButtons(false);
      setShowIndicators(false);
      setIsRewriting(false);
      setRewriteChars(0);
      setIsDeleting(false);
    }, 15000);

    return () => clearInterval(carouselTimer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Background Carousel with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        {carImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className={`w-full h-full transition-transform duration-[10000ms] ease-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay with Gradient - Adjusted for mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60 md:from-black/85 md:via-black/75 md:to-black/60 z-[1]" />

      {/* Content Container - Responsive padding */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          {/* Animated Text Content - Adjusted max-width for mobile */}
          <div className="max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            {/* Headline - Responsive font sizes */}
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
              {!isRewriting ? (
                <>
                  {fullHeadline.substring(0, headlineChars)}
                  {headlineChars < fullHeadline.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </>
              ) : (
                <>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    {staticPart}
                  </span>
                  <span style={{ color: '#D9953D' }} className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    {rewritePart.substring(0, rewriteChars)}
                  </span>
                  <span className="animate-pulse" style={{ color: '#D9953D' }}>|</span>
                </>
              )}
            </h1>

            {/* Subheadline - Responsive font sizes */}
            <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-full md:max-w-2xl lg:max-w-3xl" style={{ fontFamily: 'Aileron, sans-serif' }}>
              {subheadline.substring(0, subheadlineChars)}
              {subheadlineChars < subheadline.length && (
                <span className="animate-pulse">|</span>
              )}
            </p>

            {/* CTAs - Responsive layout */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8 transition-all duration-1000 ${
                showButtons
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ fontFamily: 'Aileron, sans-serif' }}
            >
              {/* Book Now Button - Responsive sizing */}
              <button 
                className="group bg-white text-black font-bold px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:gap-4 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl hover:brightness-110 w-full sm:w-auto"
                
              >
                Book Now
              </button>

              {/* Call Now Button - Responsive sizing */}
              <button 
                className="group text-white font-bold px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:gap-4 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl hover:brightness-110 w-full sm:w-auto"
                style={{ backgroundColor: '#9B7057' }}
              >
                Call Now
              </button>
            </div>

            {/* Sticky Trust Indicators - Responsive grid */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 transition-all duration-1000 ${
                showIndicators
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ fontFamily: 'Aileron, sans-serif' }}
            >
              <div 
                className="flex items-center gap-2 backdrop-blur-md px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full border-2 text-xs sm:text-sm md:text-base"
                style={{ 
                  backgroundColor: 'rgba(217, 149, 61, 0.15)',
                  borderColor: '#D9953D'
                }}
              >
                <span className="text-base sm:text-lg md:text-xl">📍</span>
                <span className="text-white font-medium">Chennai</span>
              </div>

              <div 
                className="flex items-center gap-2 backdrop-blur-md px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full border-2 text-xs sm:text-sm md:text-base"
                style={{ 
                  backgroundColor: 'rgba(217, 149, 61, 0.15)',
                  borderColor: '#D9953D'
                }}
              >
                <span className="text-base sm:text-lg md:text-xl">👩‍⚕️</span>
                <span className="text-white font-medium">Doctor-led evaluation</span>
              </div>

              <div 
                className="flex items-center gap-2 backdrop-blur-md px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full border-2 text-xs sm:text-sm md:text-base"
                style={{ 
                  backgroundColor: 'rgba(217, 149, 61, 0.15)',
                  borderColor: '#D9953D'
                }}
              >
                <span className="text-base sm:text-lg md:text-xl">📸</span>
                <span className="text-white font-medium">Before / After Results</span>
              </div>

              <div 
                className="flex items-center gap-2 backdrop-blur-md px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full border-2 text-xs sm:text-sm md:text-base"
                style={{ 
                  backgroundColor: 'rgba(217, 149, 61, 0.15)',
                  borderColor: '#D9953D'
                }}
              >
                <span className="text-base sm:text-lg md:text-xl">📞</span>
                <span className="text-white font-medium">WhatsApp Call & Chat</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on tablet and up */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-white/50 hover:border-white items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-white/50 hover:border-white items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Carousel Indicators - Responsive positioning and sizing */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {carImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'bg-yellow-500 w-6 sm:w-7 md:w-8 h-2 sm:h-2.5 md:h-3'
                : 'bg-white/50 hover:bg-white/80 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarRentalHero;