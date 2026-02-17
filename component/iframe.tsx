import React from 'react';

const IframeTwoColumnSection = () => {
  return (
    <section className="sm:py-10 md:py-12 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Container - Responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          
          {/* Left Iframe - Full width on mobile, 50% on desktop */}
          <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg lg:shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15546.430967110773!2d80.249948!3d13.060622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52671f836f1fdd%3A0x6bf9614482b4e604!2sAnlon%20Art%20Salon%20Nungambakkam%20Chennai!5e0!3m2!1sen!2sus!4v1771322936310!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map 1 - Nungambakkam"
            ></iframe>
          </div>

          {/* Right Iframe - Full width on mobile, 50% on desktop */}
          <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg lg:shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.00963086079!2d80.241333!3d13.019592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526799d761e8db%3A0xfa412a635db7254!2sAnlon%20Skin%20%26%20Aesthetics%20~%20Kotturpuram!5e0!3m2!1sen!2sus!4v1771323032202!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map 2 - Kotturpuram"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IframeTwoColumnSection;