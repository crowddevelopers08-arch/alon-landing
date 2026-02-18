"use client";

import React, { useState } from "react";
import BookingFormModal from "./contact-form";

const HairServicesComponents = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleCallNow = () => {
    // Handle call now action
    window.location.href = "tel:+ 95006 51761"; // Replace with your actual phone number
  };

  const handleImageError = (imageName: string) => {
    setImageErrors((prev) => ({ ...prev, [imageName]: true }));
  };

  return (
    <div className="w-full py-0 sm:py-14 md:py-16 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Hair Expertise */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#9B7057] mb-4 sm:mb-5 md:mb-6 uppercase">
            Our teams
          </h2>
        </div>

        {/* Desktop Layout (lg and above) - Original preserved exactly */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-10">
            {/* Left Column - 3 Services */}
            <div className="space-y-12">
              {/* Hair Loss Evaluation */}
              <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                  <img
                    src="/hair-loss.png"
                    alt="Hair loss evaluation icon"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    onError={() => handleImageError("hair-loss")}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2 uppercase">
                    Hair Loss Evaluation
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Comprehensive medical assessment and accurate diagnosis of
                    hair loss patterns.
                  </p>
                </div>
              </div>

              {/* Scalp Disorders */}
              <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                  <img
                    src="/hairs-p.png"
                    alt="Scalp disorders icon"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    onError={() => handleImageError("hair-p")}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2 uppercase">
                    Scalp Disorders
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Expert management of various scalp conditions affecting hair
                    health.
                  </p>
                </div>
              </div>

              {/* Hair Thinning Protocols */}
              <div className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                  <img
                    src="/hairs-po.png"
                    alt="Hair thinning icon"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    onError={() => handleImageError("hairs-po")}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2 uppercase">
                    Hair Thinning Protocols
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Advanced protocols for addressing hair density loss and
                    thinning concerns.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Column - Doctor/Service Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md h-100">
                <img
                  src="/microscope.webp"
                  alt="Hair Treatment Services"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Column - 3 Services */}
            <div className="space-y-12">
              {/* Regenerative Restoration */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                  <img
                    src="/hairs-pos.png"
                    alt="Regenerative restoration icon"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    onError={() => handleImageError("hairs-pos")}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2 uppercase">
                    Regenerative Restoration
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Innovative regenerative approaches for natural hair
                    restoration.
                  </p>
                </div>
              </div>

              {/* Ethical Treatment Planning */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                  <img
                    src="/hairs-pose.png"
                    alt="Ethical treatment icon"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    onError={() => handleImageError("hairs-pose")}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2 uppercase">
                    Ethical Treatment
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Conservative, ethical approach to personalized treatment
                    planning.
                  </p>
                </div>
              </div>

              {/* Follicle Health Care */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                  <img
                    src="/hairs-poses.png"
                    alt="Follicle health icon"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    onError={() => handleImageError("hair")}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2 uppercase">
                    Follicle Health Care
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Long-term scalp and follicle health maintenance for lasting
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout (below lg) - Stacked with centered image */}
        <div className="block lg:hidden">
          <div className="flex flex-col items-center space-y-8">
            {/* Image First - Centered */}
            <div className="w-full flex justify-center mb-4">
              <div className="w-2/4 sm:w-2/3 md:w-1/2 max-w-md">
                <img
                  src="/microscope.webp"
                  alt="Hair Treatment Services"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Hair Loss Evaluation */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                  <img
                    src="/hair-loss.png"
                    alt="Hair loss evaluation icon"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    onError={() => handleImageError("hair-loss")}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black mb-1 uppercase">
                    Hair Loss Evaluation
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Comprehensive medical assessment and accurate diagnosis.
                  </p>
                </div>
              </div>

              {/* Scalp Disorders */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                  <img
                    src="/hairs-p.png"
                    alt="Scalp disorders icon"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    onError={() => handleImageError("hairsp")}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black mb-1 uppercase">
                    Scalp Disorders
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Expert management of various scalp conditions.
                  </p>
                </div>
              </div>

              {/* Hair Thinning Protocols */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                  <img
                    src="/hairs-po.png"
                    alt="Hair thinning icon"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    onError={() => handleImageError("hairs-po")}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black mb-1 uppercase">
                    Hair Thinning
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Advanced protocols for hair density concerns.
                  </p>
                </div>
              </div>

              {/* Regenerative Restoration */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                  <img
                    src="/hairs-pos.png"
                    alt="Regenerative restoration icon"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    onError={() => handleImageError("hairs-po")}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black mb-1 uppercase">
                    Regenerative
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Innovative approaches for natural restoration.
                  </p>
                </div>
              </div>

              {/* Ethical Treatment Planning */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                  <img
                    src="/hairs-pose.png"
                    alt="Ethical treatment icon"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    onError={() => handleImageError("hairs-pose")}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black mb-1 uppercase">
                    Ethical Treatment
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Conservative, personalized treatment planning.
                  </p>
                </div>
              </div>

              {/* Follicle Health Care */}
              <div className="flex items-start gap-3 sm:col-span-2 md:col-span-1">
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                  <img
                    src="/hairs-poses.png"
                    alt="Follicle health icon"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    onError={() => handleImageError("hairs-poses")}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(5%) sepia(20%) saturate(600%) hue-rotate(5deg) brightness(20%) contrast(105%)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black mb-1 uppercase">
                    Follicle Health
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Long-term scalp and follicle health maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs - Responsive */}
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
      </div>
      <BookingFormModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default HairServicesComponents;
