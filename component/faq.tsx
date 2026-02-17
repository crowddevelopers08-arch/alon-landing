'use client'

import React, { useState } from 'react';
import BookingFormModal from './contact-form';

const FAQSection = () => {
   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do I need a consultation before starting hair treatment?",
      answer: "Yes. Hair loss varies by cause and stage. A consultation ensures the treatment is appropriate and effective for your condition."
    },
    {
      question: "How is the right treatment decided for me?",
      answer: "Based on scalp health, follicle activity, and hair loss pattern identified during evaluation."
    },
    {
      question: "When can I see visible improvement?",
      answer: "Progress depends on hair loss stage and treatment type. Improvement is gradual and monitored over time."
    },
    {
      question: "Is Regenera Activa suitable for everyone?",
      answer: "No. It is recommended only for selected cases after doctor assessment."
    },
    {
      question: "Will there be follow-ups after treatment?",
      answer: "Yes. Follow-ups help track response and refine the treatment plan if required."
    }
  ];

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-10 w-32 md:w-48 h-32 md:h-48 rounded-full opacity-20 z-0" style={{ backgroundColor: '#D9953D' }}></div>
      <div className="hidden md:block absolute top-32 left-40 lg:left-64 w-12 md:w-16 h-12 md:h-16 rounded-full opacity-30 z-0" style={{ backgroundColor: '#9B7057' }}></div>
      <div className="hidden lg:block absolute top-24 left-80 w-20 h-20 opacity-60 z-0">
        <div className="grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D9953D' }}></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Side - FAQ Section */}
          <div className="space-y-4 md:space-y-6">
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-sm:mb-2" style={{ color: '#9B7057'}}>
              Common Questions Before Booking
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-sm:mb-0">
              We understand you may have questions before starting your hair restoration journey. Here are answers to the most common concerns.
            </p>

            {/* FAQ Accordion */}
            <div className="space-y-3 md:space-y-4 pt-4 md:pt-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between font-bold text-left transition-all duration-300 ${
                      openIndex === index 
                        ? 'text-white' 
                        : 'bg-white text-gray-900 hover:bg-gray-50'
                    }`}
                    style={openIndex === index ? { backgroundColor: '#D9953D' } : {}}
                  >
                    <span className="text-xs sm:text-sm md:text-base tracking-wide pr-2">{faq.question}</span>
                    <svg 
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 flex-shrink-0 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      {openIndex === index ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                      )}
                    </svg>
                  </button>

                  {/* Answer Panel */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 sm:px-6 py-4 sm:py-6 bg-white text-gray-700 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - 2x2 Grid of Cards - Same on Mobile */}
          <div className="grid grid-cols-2 gap-0">
            
            {/* Card 1 - Top Left - Image with Hair Treatment */}
            <div className="relative h-[180px] sm:h-[250px] md:h-[300px] lg:h-[360px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" 
                alt="Hair treatment consultation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 2 - Top Right - Book Consultation */}
            <div className="relative h-[180px] sm:h-[250px] md:h-[300px] lg:h-[360px] overflow-hidden" style={{ backgroundColor: '#D9953D' }}>
              {/* Background Decorative Elements */}
              <div className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10 w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 rounded-full opacity-30" style={{ backgroundColor: '#9B7057' }}></div>
              <div className="hidden sm:block absolute top-12 sm:top-20 right-20 sm:right-40 w-10 sm:w-16 h-10 sm:h-16 rounded-full opacity-30" style={{ backgroundColor: '#9B7057' }}></div>
              <div className="hidden md:block absolute top-16 right-56 w-20 h-20 opacity-40">
                <div className="grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: '#9B7057' }}></div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                    BOOK YOUR<br />CONSULTATION
                  </h3>
                  <p className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed hidden sm:block">
                    Schedule a detailed hair and scalp evaluation with our specialists. Get personalized treatment recommendations based on your condition.
                  </p>
                  <p className="text-white text-[9px] leading-tight sm:hidden">
                    Schedule evaluation with specialists
                  </p>
                </div>
                
                <button onClick={() => setIsBookingModalOpen(true)} className="bg-transparent border border-white sm:border-2 text-white font-bold px-2 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-md sm:rounded-lg hover:bg-white transition-all duration-300 w-fit uppercase tracking-wide text-[9px] sm:text-xs md:text-sm" onMouseEnter={(e: any) => e.target.style.color = '#D9953D'} onMouseLeave={(e: any) => e.target.style.color = 'white'}>
                  BOOK NOW
                </button>
              </div>
            </div>

            {/* Card 3 - Bottom Left - Treatment Plans */}
            <div className="relative h-[180px] sm:h-[250px] md:h-[300px] lg:h-[360px] overflow-hidden" style={{ backgroundColor: '#9B7057' }}>
              {/* Background Decorative Elements */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 rounded-full opacity-30" style={{ backgroundColor: '#D9953D' }}></div>
              <div className="hidden sm:block absolute bottom-12 sm:bottom-20 left-20 sm:left-40 w-10 sm:w-16 h-10 sm:h-16 rounded-full opacity-30" style={{ backgroundColor: '#D9953D' }}></div>
              <div className="hidden md:block absolute bottom-16 left-56 w-20 h-20 opacity-40">
                <div className="grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D9953D' }}></div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-3 sm:p-4 md:p-6 lg:p-8 flex items-center h-full">
                <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  TREATMENT<br />PLANS
                </h3>
              </div>
            </div>

            {/* Card 4 - Bottom Right - Image */}
            <div className="relative h-[180px] sm:h-[250px] md:h-[300px] lg:h-[360px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" 
                alt="Professional hair care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:brightness-110"
        style={{ backgroundColor: '#D9953D' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
                        <BookingFormModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default FAQSection;