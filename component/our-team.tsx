"use client";

import React, { useState } from "react";
import BookingFormModal from "./contact-form";
import RevealOnScroll from "./RevealOnScroll"; // ✅ reusable animation component

const HairServicesComponents = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleCallNow = () => {
    window.location.href = "tel:+ 9500653243";
  };

  const handleImageError = (imageName: string) => {
    setImageErrors((prev) => ({ ...prev, [imageName]: true }));
  };

  const iconStyle = {
    filter: "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)",
  };

  const leftServices = [
    { src: "/hair-loss.png",  alt: "Hair loss",    title: "Hair Loss Evaluation",    desc: "Comprehensive medical assessment and accurate diagnosis of hair loss patterns." },
    { src: "/hairs-p.png",    alt: "Scalp",        title: "Scalp Disorders",         desc: "Expert management of various scalp conditions affecting hair health." },
    { src: "/hairs-po.png",   alt: "Hair thinning",title: "Hair Thinning Protocols", desc: "Advanced protocols for addressing hair density loss and thinning concerns." },
  ];

  const rightServices = [
    { src: "/hairs-pos.png",  alt: "Regenerative", title: "Regenerative Restoration", desc: "Innovative regenerative approaches for natural hair restoration." },
    { src: "/hairs-pose.png", alt: "Ethical",       title: "Ethical Treatment",        desc: "Conservative, ethical approach to personalized treatment planning." },
    { src: "/hairs-poses.png",alt: "Follicle",      title: "Follicle Health Care",     desc: "Long-term scalp and follicle health maintenance for lasting results." },
  ];

  return (
    <div className="w-full py-0 sm:py-14 md:py-16 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading - from up */}
        <RevealOnScroll direction="up" duration={700}>
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#9B7057] mb-4 sm:mb-5 md:mb-6 uppercase">
              Our teams
            </h2>
          </div>
        </RevealOnScroll>

        {/* ── Desktop Layout (lg+) ── */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-10">

            {/* Left Column - slides from left, staggered */}
            <div className="space-y-12">
              {leftServices.map((s, i) => (
                <RevealOnScroll key={i} direction="left" delay={i * 150} duration={700}>
                  <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                    <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                      <img src={s.src} alt={s.alt} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" onError={() => handleImageError(s.alt)} style={iconStyle} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 uppercase">{s.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base">{s.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Center Image - from up */}
            <RevealOnScroll direction="up" delay={200} duration={800}>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md h-100">
                  <img src="/microscope.webp" alt="Hair Treatment Services" className="w-full h-full object-contain" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Column - slides from right, staggered */}
            <div className="space-y-12">
              {rightServices.map((s, i) => (
                <RevealOnScroll key={i} direction="right" delay={i * 150} duration={700}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                      <img src={s.src} alt={s.alt} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" onError={() => handleImageError(s.alt)} style={iconStyle} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 uppercase">{s.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base">{s.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

          </div>
        </div>

        {/* ── Mobile/Tablet Layout (below lg) ── */}
        <div className="block lg:hidden">
          <div className="flex flex-col items-center space-y-8">

            {/* Image - from up */}
            <RevealOnScroll direction="up" delay={100} duration={700}>
              <div className="w-full flex justify-center mb-4">
                <div className="w-2/4 sm:w-2/3 md:w-1/2 max-w-md">
                  <img src="/microscope.webp" alt="Hair Treatment Services" className="w-full h-auto object-contain" />
                </div>
              </div>
            </RevealOnScroll>

            {/* Service items - alternate left/right staggered */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {[...leftServices, ...rightServices].map((s, i) => (
                <RevealOnScroll key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 100} duration={650}>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                      <img src={s.src} alt={s.alt} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" onError={() => handleImageError(s.alt)} style={iconStyle} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-black mb-1 uppercase">{s.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{s.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

          </div>
        </div>

        {/* CTAs - from up */}
        <RevealOnScroll direction="up" delay={200} duration={700}>
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap mt-8 sm:mt-10 md:mt-12">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="border border-[#9B7057] text-[#9B7057] hover:bg-[#9B7057] hover:text-white font-semibold px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Book Now</span>
            </button>
            <button
              onClick={handleCallNow}
              className="bg-[#9B7057] hover:bg-[#7a5a47] text-white font-semibold px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Call Now</span>
            </button>
          </div>
        </RevealOnScroll>

      </div>

      <BookingFormModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default HairServicesComponents;