'use client'

import React, { useState } from 'react';
import BookingFormModal from './contact-form';

const ClinicVideosResponsiveGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
        const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
    const handleCallNow = () => {
      // Handle call now action
      window.location.href = 'tel:+1234567890'; // Replace with your actual phone number
    }

  const videos = [
    {
      id: 1,
      title: "Doctor Explaining Hair Loss Evaluation",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "5:30"
    },
    {
      id: 2,
      title: "Regenera Activa Treatment Overview",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "8:45"
    },
    {
      id: 3,
      title: "In-Clinic Hair Treatment Process",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "6:15"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index :any ) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4"
            style={{ fontFamily: 'CaslonCP, serif' }}
          >
            Videos from Our Clinic
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Watch our expert doctors explain treatments and see our clinic procedures firsthand
          </p>
        </div>

        {/* Mobile/Tablet Carousel (< lg screens) */}
        <div className="lg:hidden relative mb-8 sm:mb-10">
          
          {/* Video Slides */}
          <div className="relative w-full">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-black">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100' 
                      : 'opacity-0 absolute inset-0'
                  }`}
                >
                  {/* Video Container - 16:9 Aspect Ratio */}
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={`${video.videoUrl}?autoplay=0&rel=0&modestbranding=1`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>

                  {/* Video Info Overlay */}
                  <div className="bg-white p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                        {video.title}
                      </h3>
                      <div 
                        className="flex-shrink-0 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: '#D9953D', color: '#000' }}
                      >
                        🎥 {video.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {videos.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 z-20"
                style={{ backgroundColor: 'rgba(217, 149, 61, 0.9)' }}
                aria-label="Previous video"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 z-20"
                style={{ backgroundColor: 'rgba(217, 149, 61, 0.9)' }}
                aria-label="Next video"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {videos.length > 1 && (
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide 
                      ? 'w-8 sm:w-10 h-3 sm:h-3.5' 
                      : 'w-3 sm:w-3.5 h-3 sm:h-3.5 opacity-50 hover:opacity-75'
                  }`}
                  style={{ 
                    backgroundColor: '#D9953D'
                  }}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Video Counter */}
          <div className="text-center mt-3 sm:mt-4">
            <p className="text-xs sm:text-sm text-gray-500 font-semibold">
              Video {currentSlide + 1} of {videos.length}
            </p>
          </div>
        </div>

        {/* Desktop Grid (lg+ screens) - 3 Columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8 mb-10 lg:mb-12">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Video Container - 16:9 Aspect Ratio */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`${video.videoUrl}?autoplay=0&rel=0&modestbranding=1`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="p-5 xl:p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg xl:text-xl font-bold text-gray-900 leading-tight">
                    {video.title}
                  </h3>
                  <div 
                    className="flex-shrink-0 text-sm font-bold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: '#D9953D', color: '#000' }}
                  >
                    🎥 {video.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <button 
            className="group flex border-1 border-black items-center justify-center gap-2 sm:gap-3 text-black font-bold px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base md:text-lg w-full sm:w-auto max-w-xs sm:max-w-none"
           onClick={() => setIsBookingModalOpen(true)} 
          >
            <span>Book Now</span>
          </button>

          <a 
            href="tel:+919876543210"
            className="group flex items-center justify-center gap-2 sm:gap-3 text-white font-bold px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base md:text-lg w-full sm:w-auto max-w-xs sm:max-w-none"
            style={{ backgroundColor: '#9B7057' }}
            onClick={handleCallNow}
          >
            <span>Call Now</span>
          </a>
        </div>
      </div>
        <BookingFormModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default ClinicVideosResponsiveGrid;