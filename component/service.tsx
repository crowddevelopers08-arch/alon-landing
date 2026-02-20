"use client";

import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const WhyChooseUsSection = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-5 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-white relative overflow-hidden">
      {/* Background Decorative Circles - Enhanced for PC/Desktop */}
      <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 2xl:w-80 2xl:h-80 rounded-full opacity-20 z-0" style={{ backgroundColor: "#f7ead8" }}></div>
      <div className="absolute top-16 left-16 sm:top-32 sm:left-32 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 2xl:w-64 2xl:h-64 rounded-full opacity-15 z-0" style={{ backgroundColor: "#9B7057" }}></div>
      <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 2xl:w-72 2xl:h-72 rounded-full opacity-10 z-0" style={{ backgroundColor: "#f7ead8" }}></div>

      <div className="max-w-8xl 2xl:max-w-[1600px] mx-auto relative z-10">

        {/* Desktop Layout (lg+) - Enhanced for PC/Large Desktop */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-10 xl:gap-12 2xl:gap-16 items-stretch">

          {/* col-span on OUTER div, RevealOnScroll inside */}
          <div className="col-span-2 flex items-center justify-center lg:justify-start h-full">
            <RevealOnScroll direction="left" duration={800} className="w-full h-full">
              <div className="relative w-full h-full flex items-center">
                <img
                  src="/download1.avif"
                  alt="Award Badge"
                  className="w-full max-w-md xl:max-w-lg 2xl:max-w-xl h-auto object-cover max-h-[500px] xl:max-h-[600px] 2xl:max-h-[700px]"
                />
              </div>
            </RevealOnScroll>
          </div>

          <div className="col-span-3 flex flex-col justify-center h-full">
            <RevealOnScroll direction="right" duration={800} delay={150} className="w-full">
              <div className="space-y-2 xl:space-y-3 2xl:space-y-4 flex flex-col justify-center">
                <div className="flex items-center gap-3 xl:gap-4">
                  <div className="w-1 h-6 xl:h-7 2xl:h-8 rounded" style={{ backgroundColor: "#9B7057" }}></div>
                  <span className="font-semibold text-lg xl:text-xl 2xl:text-2xl" style={{ color: "#9B7057" }}>Hair Treatment Solutions</span>
                </div>
                <h2 className="text-2xl xl:text-4xl 2xl:text-6xl font-bold text-gray-900 leading-tight">Hair Fall & Hair Thinning Treatment</h2>
                <p className="text-gray-600 text-md xl:text-lg 2xl:text-2xl leading-relaxed">
                  This treatment approach is designed for individuals experiencing early to moderate hair fall, gradual thinning, or reduced hair density. The goal is to control ongoing hair loss, improve scalp health, and support natural hair regrowth where follicles are still active.
                </p>
                <p className="text-gray-600 text-md xl:text-lg 2xl:text-2xl leading-relaxed">
                  Treatment planning is based on scalp evaluation, hair loss pattern, and lifestyle factors, ensuring realistic expectations and steady improvement.
                </p>
                <div className="grid grid-cols-2 gap-6 xl:gap-8 2xl:gap-10 pt-4 xl:pt-0 2xl:pt-8">
                  {[
                    { src: "/hair-care.png", label: "Excessive daily hair fall" },
                    { src: "/face.png",      label: "Early thinning at crown or frontal areas" },
                    { src: "/hair-loss.png", label: "Weak, fine hair texture" },
                    { src: "/hair.png",      label: "Slow or uneven regrowth" },
                  ].map((feature, i) => (
                    <RevealOnScroll key={i} direction="right" delay={300 + i * 100} duration={600}>
                      <div className="flex items-center gap-4 xl:gap-5 2xl:gap-6">
                        <div className="flex-shrink-0 p-2 xl:p-3 2xl:p-4 bg-[#f7ead8] rounded-full">
                          <img src={feature.src} alt={feature.label} className="w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 object-contain"
                            style={{ filter: "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)" }} />
                        </div>
                        <h4 className="text-lg xl:text-lg 2xl:text-2xl font-semibold text-gray-900">{feature.label}</h4>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Mobile/Tablet Layout - NOT TOUCHED */}
        <div className="block lg:hidden">
          <RevealOnScroll direction="left" duration={700}>
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <div className="w-0.5 sm:w-1 h-4 sm:h-5 rounded" style={{ backgroundColor: "#9B7057" }}></div>
              <span className="font-semibold text-sm sm:text-base" style={{ color: "#9B7057" }}>Hair Treatment Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">Hair Fall & Hair Thinning Treatment</h2>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={800}>
            <div className="flex items-center justify-center mb-6">
              <img src="/download1.avif" alt="Award Badge"
                className="w-3/4 sm:w-2/3 md:w-3/5 max-w-md h-auto object-cover max-h-[250px] sm:max-h-[300px] md:max-h-[350px]" />
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left" delay={200} duration={700}>
            <div className="space-y-3 sm:space-y-4 mb-6">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                This treatment approach is designed for individuals experiencing early to moderate hair fall, gradual thinning, or reduced hair density. The goal is to control ongoing hair loss, improve scalp health, and support natural hair regrowth where follicles are still active.
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Treatment planning is based on scalp evaluation, hair loss pattern, and lifestyle factors, ensuring realistic expectations and steady improvement.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {[
              { src: "/hair-care.png", label: "Excessive daily hair fall",               dir: "left"  },
              { src: "/face.png",      label: "Early thinning at crown or frontal areas", dir: "right" },
              { src: "/hair-loss.png", label: "Weak, fine hair texture",                 dir: "left"  },
              { src: "/hair.png",      label: "Slow or uneven regrowth",                 dir: "right" },
            ].map((feature, i) => (
              <RevealOnScroll key={i} direction={feature.dir as 'left' | 'right'} delay={100 * i} duration={600}>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 p-2 bg-[#f7ead8] rounded-full">
                    <img src={feature.src} alt={feature.label} className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                      style={{ filter: "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)" }} />
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900">{feature.label}</h4>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;