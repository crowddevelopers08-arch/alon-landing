import React from 'react';

const WhyChooseUsSection = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-5 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white relative overflow-hidden">
      {/* Background Decorative Circles - Adjusted for mobile */}
      <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full opacity-20 z-0" style={{ backgroundColor: '#D9953D' }}></div>
      <div className="absolute top-16 left-16 sm:top-32 sm:left-32 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full opacity-15 z-0" style={{ backgroundColor: '#9B7057' }}></div>
      <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full opacity-10 z-0" style={{ backgroundColor: '#D9953D' }}></div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Desktop Layout (lg and above) - Original layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-10 items-stretch">
          {/* Left Side - Image (40% width = 2 columns out of 5) */}
          <div className="col-span-2 flex items-center justify-center lg:justify-start h-full">
            <div className="relative w-full h-full flex items-center">
              <img
                src="/download1.avif"   // put your image inside public folder
                alt="Award Badge"
                className="w-full max-w-md h-auto object-cover max-h-[500px]" // Added max-height to match content
              />
            </div>
          </div>

          {/* Right Side - Content (60% width = 3 columns out of 5) */}
          <div className="col-span-3 space-y-2 flex flex-col justify-center h-full">
            {/* Small Title with Golden Bar */}
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 rounded" style={{ backgroundColor: '#D9953D' }}></div>
              <span className="font-semibold text-lg" style={{ color: '#D9953D' }}>Hair Treatment Solutions</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Hair Fall & Hair Thinning Treatment
            </h2>

            {/* Description Paragraph 1 */}
            <p className="text-gray-600 text-lg leading-relaxed">
              This treatment approach is designed for individuals experiencing early to moderate hair fall, gradual thinning, or reduced hair density. The goal is to control ongoing hair loss, improve scalp health, and support natural hair regrowth where follicles are still active.
            </p>

            {/* Description Paragraph 2 */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Treatment planning is based on scalp evaluation, hair loss pattern, and lifestyle factors, ensuring realistic expectations and steady improvement.
            </p>

            {/* Features Grid - 2 columns */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/hair-care.png" 
                    alt="Excessive daily hair fall icon"
                    className="w-10 h-10 object-contain"
                    style={{ filter: "brightness(0) saturate(100%) invert(64%) sepia(48%) saturate(563%) hue-rotate(1deg) brightness(94%) contrast(92%)" }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Excessive daily hair fall</h4>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/face.png" 
                    alt="Early thinning icon"
                    className="w-10 h-10 object-contain"
                    style={{ filter: "brightness(0) saturate(100%) invert(64%) sepia(48%) saturate(563%) hue-rotate(1deg) brightness(94%) contrast(92%)" }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Early thinning at crown or frontal areas</h4>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/hair-loss.png" 
                    alt="Weak fine hair texture icon"
                    className="w-10 h-10 object-contain"
                    style={{ filter: "brightness(0) saturate(100%) invert(64%) sepia(48%) saturate(563%) hue-rotate(1deg) brightness(94%) contrast(92%)" }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Weak, fine hair texture</h4>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/hair.png" 
                    alt="Slow or uneven regrowth icon"
                    className="w-10 h-10 object-contain"
                    style={{ filter: "brightness(0) saturate(100%) invert(64%) sepia(48%) saturate(563%) hue-rotate(1deg) brightness(94%) contrast(92%)" }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Slow or uneven regrowth</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout (below lg) - Image between title and paragraphs */}
        <div className="block lg:hidden">
          {/* Small Title with Golden Bar */}
          <div className="flex items-center gap-2 sm:gap-3 mb-3">
            <div className="w-0.5 sm:w-1 h-4 sm:h-5 rounded" style={{ backgroundColor: '#D9953D' }}></div>
            <span className="font-semibold text-sm sm:text-base" style={{ color: '#D9953D' }}>Hair Treatment Solutions</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Hair Fall & Hair Thinning Treatment
          </h2>

          {/* Image - Positioned after heading */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-full flex items-center justify-center">
              <img
                src="/download1.avif"
                alt="Award Badge"
                className="w-3/4 sm:w-2/3 md:w-3/5 max-w-md h-auto object-cover max-h-[250px] sm:max-h-[300px] md:max-h-[350px]"
              />
            </div>
          </div>

          {/* Description Paragraphs - Positioned after image */}
          <div className="space-y-3 sm:space-y-4 mb-6">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              This treatment approach is designed for individuals experiencing early to moderate hair fall, gradual thinning, or reduced hair density. The goal is to control ongoing hair loss, improve scalp health, and support natural hair regrowth where follicles are still active.
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Treatment planning is based on scalp evaluation, hair loss pattern, and lifestyle factors, ensuring realistic expectations and steady improvement.
            </p>
          </div>

          {/* Features Grid - Positioned after paragraphs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Feature 1 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <img 
                  src="/hair-care.png" 
                  alt="Excessive daily hair fall icon"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                  style={{ filter: "brightness(0) saturate(100%) invert(64%) sepia(48%) saturate(563%) hue-rotate(1deg) brightness(94%) contrast(92%)" }}
                />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">Excessive daily hair fall</h4>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <img 
                  src="/face.png" 
                  alt="Early thinning icon"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                  style={{ filter: "brightness(0) saturate(100%) invert(64%) sepia(48%) saturate(563%) hue-rotate(1deg) brightness(94%) contrast(92%)" }}
                />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">Early thinning at crown or frontal areas</h4>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <img 
                  src="/hair-loss.png" 
                  alt="Weak fine hair texture icon"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                  style={{ filter: "brightness(0) saturate(100%) invert(64%) sepia(48%) saturate(563%) hue-rotate(1deg) brightness(94%) contrast(92%)" }}
                />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">Weak, fine hair texture</h4>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <img 
                  src="/hair.png" 
                  alt="Slow or uneven regrowth icon"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                  style={{ filter: "brightness(0) saturate(100%) invert(64%) sepia(48%) saturate(563%) hue-rotate(1deg) brightness(94%) contrast(92%)" }}
                />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">Slow or uneven regrowth</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;