"use client";

import React, { useState, useEffect } from "react";

const CarRentalHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
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
  const subheadline =
    "Hair fall treatment, hair thinning solutions, and advanced hair restoration planned after detailed doctor-led scalp analysis.";


  const carImages = [
    "/DSC02258.JPG",
    "/DSC02268.JPG",
    "/DSC02275.JPG",
    "/DSC02264.JPG",
  ];

  useEffect(() => {
    if (headlineChars < fullHeadline.length) {
      const timer = setTimeout(() => {
        setHeadlineChars((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timer);
    } else if (subheadlineChars < subheadline.length) {
      const timer = setTimeout(() => {
        setSubheadlineChars((prev) => prev + 1);
      }, 15);
      return () => clearTimeout(timer);
    } else if (!showButtons) {
      const timer = setTimeout(() => {
        setShowButtons(true);
      }, 300);
      return () => clearTimeout(timer);
    } else if (!showIndicators) {
      const timer = setTimeout(() => {
        setShowIndicators(true);
      }, 400);
      return () => clearTimeout(timer);
    } else if (!isRewriting) {
      const timer = setTimeout(() => {
        setIsRewriting(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [
    headlineChars,
    subheadlineChars,
    showButtons,
    showIndicators,
    isRewriting,
  ]);

  useEffect(() => {
    if (!isRewriting) return;

    if (isDeleting) {
      if (rewriteChars > 0) {
        const timer = setTimeout(() => {
          setRewriteChars((prev) => prev - 1);
        }, 20);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsDeleting(false);
        }, 500);
        return () => clearTimeout(timer);
      }
    } else {
      if (rewriteChars < rewritePart.length) {
        const timer = setTimeout(() => {
          setRewriteChars((prev) => prev + 1);
        }, 70);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [isRewriting, isDeleting, rewriteChars]);

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carImages.length);
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
    <div
      className="relative w-full overflow-hidden bg-gray-900 h-[65svh] lg:h-[100svh]"
      // style={{ height: '65vh' }} // ✅ svh fixes mobile browser bar issue
    >
      {/* Background Carousel with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        {carImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`w-full h-full transition-transform duration-[10000ms] ease-out ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60 md:from-black/85 md:via-black/75 md:to-black/60 z-[1]" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center md:items-center items-start">
        <div
          className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24
          pt-20 sm:pt-0
        "
        >
          {/* ✅ pt-16/pb-16 on mobile to avoid navbar overlap and bottom indicator overlap */}
          <div className="max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            {/* Headline */}
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-3 sm:mb-5 md:mb-6 leading-tight">
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
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-orange-50">
                    {rewritePart.substring(0, rewriteChars)}
                  </span>
                  <span className="animate-pulse" style={{ color: "#ffffff" }}>
                    |
                  </span>
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl mb-4 sm:mb-7 md:mb-8 leading-relaxed max-w-full md:max-w-2xl lg:max-w-3xl">
              {subheadline.substring(0, subheadlineChars)}
              {subheadlineChars < subheadline.length && (
                <span className="animate-pulse">|</span>
              )}
            </p>

            {/* CTAs */}
            {/* <div
              className={`flex sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-7 md:mb-8 transition-all duration-1000 ${
                showButtons
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="group bg-white text-black font-bold px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:gap-4 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl hover:brightness-110 w-full sm:w-auto"
              >
                Book Now
              </button>

              <a href="tel:+91 9500653243" className="flex w-full sm:w-auto">
                <button
                  className="group flex items-center justify-center gap-2 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-lg w-full"
                  style={{ backgroundColor: "#9B7057" }}
                >
                  Call Now
                </button>
              </a>
            </div> */}
            <div
  className={`flex sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-7 md:mb-8 transition-all duration-1000 ${
    showButtons ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`}
>
  <button
    onClick={() => setIsBookingModalOpen(true)}
    className="group bg-white text-black font-bold px-4 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:gap-4 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl hover:brightness-110 w-full sm:w-auto"
  >
    Book Now
  </button>

  {/* ✅ Mobile only */}
  <a href="tel:+91 9500653243" className="flex w-full sm:hidden">
    <button
      className="group flex items-center justify-center gap-2 text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-md w-full"
      style={{ backgroundColor: "#9B7057" }}
    >
      Call Now
    </button>
  </a>
</div>

            {/* Trust Indicators */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-2 md:flex md:flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 transition-all duration-1000 ${
                showIndicators
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {[
                "Chennai",
                "Doctor-led evaluation",
                "Before / After Results",
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-2 backdrop-blur-md px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full border-2 text-xs sm:text-sm md:text-base"
                  style={{
                    backgroundColor: "rgba(217, 149, 61, 0.15)",
                    borderColor: "#9B7057",
                  }}
                >
                  <span className="text-white flex items-center font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
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

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {carImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-6 sm:w-7 md:w-8 h-2 sm:h-2.5 md:h-3"
                : "bg-white/50 hover:bg-white/80 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarRentalHero;
