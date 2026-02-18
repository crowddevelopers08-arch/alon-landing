'use client'

import React, { useState, useRef } from 'react';
import BookingFormModal from './contact-form';

const ClinicVideosResponsiveGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleCallNow = () => {
    window.location.href = 'tel:+1234567890';
  };

  const videos = [
    {
      id: 1,
      title: "Doctor Explaining Hair Loss Evaluation",
      videoUrl: "/1760777342410947.mov", // 🔁 Replace with your actual video path
      duration: "5:30"
    },
    {
      id: 2,
      title: "Regenera Activa Treatment Overview",
      videoUrl: "/1768904659105013.mov", // 🔁 Replace with your actual video path
      duration: "8:45"
    },
    {
      id: 3,
      title: "In-Clinic Hair Treatment Process",
      videoUrl: "/IMG_2605.mp4", // 🔁 Replace with your actual video path
      duration: "6:15"
    }
  ];

  const pauseAllVideos = () => {
    videoRefs.current.forEach((ref) => {
      if (ref) ref.pause();
    });
  };

  const nextSlide = () => {
    pauseAllVideos();
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    pauseAllVideos();
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index: number) => {
    pauseAllVideos();
    setCurrentSlide(index);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-15 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-5 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
            Videos from Our Clinic
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Watch our expert doctors explain treatments and see our clinic procedures firsthand
          </p>
        </div>

        {/* ─── MOBILE CAROUSEL (< lg) ─── */}
        <div className="lg:hidden relative mb-8 sm:mb-10">
          <div className="relative w-full">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-black">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 relative'
                      : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  {/* Video — 600px height */}
                  <div className="relative w-full bg-black" style={{ height: '500px' }}>
                    <video
                      ref={(el) => { videoRefs.current[index] = el; }}
                      src={video.videoUrl}
                      className="absolute inset-0 w-full h-full object-cover"
                      controls
                      preload="metadata"
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>


                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next Arrows */}
          {videos.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-[45%] -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 z-20"
                style={{ backgroundColor: 'rgba(217, 149, 61, 0.9)' }}
                aria-label="Previous video"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-[45%] -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 z-20"
                style={{ backgroundColor: 'rgba(217, 149, 61, 0.9)' }}
                aria-label="Next video"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dot Indicators */}
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
                  style={{ backgroundColor: '#D9953D' }}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ─── DESKTOP CAROUSEL (lg+) — 3 visible at once ─── */}
        <div className="hidden lg:block mb-10 lg:mb-12">
          <div className="relative">
            {/* Slides Wrapper */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Each "slide" shows all 3 videos side by side */}
                {[0].map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="min-w-full grid grid-cols-3 gap-6 xl:gap-8"
                  >
                    {videos.map((video, index) => (
                      <div
                        key={video.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                      >
                        {/* Video — 600px height */}
                        <div className="relative w-full bg-black" style={{ height: '600px' }}>
                          <video
                            ref={(el) => { videoRefs.current[index + 3] = el; }}
                            src={video.videoUrl}
                            className="absolute inset-0 w-full h-full object-cover"
                            controls
                            preload="metadata"
                            playsInline
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>


                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Prev / Next Arrows (optional — useful if you add more than 3 videos later) */}
            {videos.length > 3 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:scale-110 z-20"
                  style={{ backgroundColor: 'rgba(217, 149, 61, 0.9)' }}
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:scale-110 z-20"
                  style={{ backgroundColor: 'rgba(217, 149, 61, 0.9)' }}
                  aria-label="Next"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        {/* ─── CTAs ─── */}
        <div className="flex sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <button
            className="group flex border border-black items-center justify-center gap-2 sm:gap-3 text-black font-bold px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base md:text-lg w-full sm:w-auto max-w-xs sm:max-w-none"
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