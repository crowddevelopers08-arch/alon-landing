'use client'

import React, { useState, useRef, useEffect } from 'react';
import BookingFormModal from './contact-form';
import RevealOnScroll from './RevealOnScroll';

const WhoWeAreSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videosReady, setVideosReady] = useState(false);

  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setVideosReady(true);
  }, []);

  // Separate effects for mobile and desktop videos
  useEffect(() => {
    if (!videosReady) return;
    
    const mobileVideo = mobileVideoRef.current;
    if (!mobileVideo) return;

    const playMobileVideo = async () => {
      try {
        mobileVideo.muted = true; // Start muted
        await mobileVideo.play();
        console.log('Mobile video playing');
      } catch (error) {
        console.log('Mobile video play failed:', error);
      }
    };

    playMobileVideo();
  }, [videosReady]);

  useEffect(() => {
    if (!videosReady) return;
    
    const desktopVideo = desktopVideoRef.current;
    if (!desktopVideo) return;

    const playDesktopVideo = async () => {
      try {
        desktopVideo.muted = true; // Start muted
        await desktopVideo.play();
        console.log('Desktop video playing');
      } catch (error) {
        console.log('Desktop video play failed:', error);
      }
    };

    playDesktopVideo();
  }, [videosReady]);

  // Handle user interaction to unmute
  useEffect(() => {
    const handleUserInteraction = () => {
      const isMobile = window.innerWidth < 1024;
      const activeVideo = isMobile ? mobileVideoRef.current : desktopVideoRef.current;
      
      if (activeVideo) {
        activeVideo.muted = false;
        activeVideo.volume = 1;
        setIsMuted(false);
        localStorage.setItem('anlons_sound_unlocked', '1');
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  const toggleMute = () => {
    const isMobile = window.innerWidth < 1024;
    const activeVideo = isMobile ? mobileVideoRef.current : desktopVideoRef.current;
    
    if (!activeVideo) return;
    
    activeVideo.muted = !activeVideo.muted;
    setIsMuted(activeVideo.muted);
    
    if (!activeVideo.muted) {
      localStorage.setItem('anlons_sound_unlocked', '1');
    }
  };

  const MuteButton = () => (
    <button
      onClick={toggleMute}
      className="absolute bottom-3 right-3 z-30 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-black/70 transition-all"
      aria-label={isMuted ? 'Unmute' : 'Mute'}
    >
      {isMuted ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
      )}
    </button>
  );

  const trustPoints = [
    'Doctor-led scalp & follicle evaluation',
    'Personalised regenerative treatment planning',
    'Ethical, non-aggressive approach',
    'Advanced, non-surgical restoration technique',
    'Follow-up and progress monitoring',
    'No unnecessary or unsuitable procedures'
  ];

  return (
    <section className="py-5 md:pt-14 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <style>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatLeftRight {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(15px); }
        }
        .animate-float-up-down { animation: floatUpDown 4s ease-in-out infinite; }
        .animate-float-left-right { animation: floatLeftRight 5s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* ── Mobile Layout ── */}
        <div className="block lg:hidden">
          <RevealOnScroll direction="left" duration={700}>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight max-sm:mb-10 mb-4">
              Regenera Activa - New Revolution Treatment in Hair Care Industry
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={800}>
            <div className="relative h-[470px] sm:h-[400px] w-full mb-6">
              {/* Video container with solid background */}
              <div className="absolute top-0 right-0 w-[100%] h-[100%] rounded-3xl overflow-hidden shadow-2xl z-10 bg-black">
                <video
                  ref={mobileVideoRef}
                  src="/script-10.mov"
                  loop
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: '#000' }}
                />
                <MuteButton />
              </div>
              {/* Border decoration */}
              <div className="absolute top-[8%] right-[4%] w-[90%] h-[90%] rounded-3xl border-4 -z-10" style={{ borderColor: '#130e0b', opacity: 0.2 }} />
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left" delay={200} duration={700}>
            <div className="space-y-4 mb-4">
              <p className="text-gray-600 text-base leading-relaxed">
                At Anlon Aesthetics, Regenera Activa is approached as a medical hair restoration solution, not a promotional treatment. Every patient undergoes a detailed scalp and follicle evaluation before determining whether this advanced regenerative procedure is suitable.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Our focus is on precision, safety, and realistic outcomes, helping you choose the right treatment based on clinical need.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={250} duration={700}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-orange-50 p-4 rounded-xl border-l-4 mb-6" style={{ borderColor: '#130e0b' }}>
              {trustPoints.map((point, i) => (
                <div key={i} className={`flex items-start gap-2 ${i >= 4 ? 'sm:col-span-2' : ''}`}>
                  <span className="text-lg mt-1 flex-shrink-0" style={{ color: '#130e0b' }}>✔</span>
                  <p className="text-gray-800 text-sm font-medium">{point}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left" delay={300} duration={700}>
            <div className="flex sm:flex-row gap-3">
              <button
                className="group border border-black flex items-center justify-center gap-2 text-black font-bold px-6 py-3 rounded-full w-full transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-sm sm:w-auto"
                onClick={() => setIsBookingModalOpen(true)}
              >
                Book Now
              </button>
              <a href="tel:+919500653243" className="flex w-full sm:w-auto">
                <button className="btn-cta nb-cta w-full" style={{ backgroundColor: '#9B7057' }}>
                  Call Now
                </button>
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* ── Desktop Layout (lg+) ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll direction="left" duration={800}>
            <div className="space-y-2">
              <h2 className="text-5xl font-bold text-gray-900">
                Regenera Activa - New Revolution Treatment in Hair Care Industry
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  At Anlon Aesthetics, Regenera Activa is approached as a medical hair restoration solution, not a promotional treatment. Every patient undergoes a detailed scalp and follicle evaluation before determining whether this advanced regenerative procedure is suitable.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our focus is on precision, safety, and realistic outcomes, helping you choose the right treatment based on clinical need.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-orange-50 p-6 rounded-xl border-l-4" style={{ borderColor: '#130e0b' }}>
                {trustPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xl mt-1" style={{ color: '#130e0b' }}>✔</span>
                    <p className="text-gray-800 font-medium">{point}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  className="group border border-black flex items-center justify-center gap-2 text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-sm"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book Your Consultation
                </button>
                <a href="tel:+919500653243" className="flex">
                  <button
                    className="btn-cta nb-cta"
                    style={{ backgroundColor: '#9B7057' }}
                  >
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={200} duration={800}>
            <div className="relative h-[700px]">
              {/* Video container with solid background */}
              <div className="absolute top-0 right-0 w-[85%] h-[90%] rounded-3xl overflow-hidden shadow-2xl z-10 animate-float-up-down bg-black">
                <video
                  ref={desktopVideoRef}
                  src="/script-10.mov"
                  loop
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                  style={{ backgroundColor: '#000' }}
                />
                <MuteButton />
              </div>
              {/* Border decoration */}
              <div className="absolute top-[10%] right-[5%] w-[70%] h-[65%] rounded-3xl border-4 -z-10" style={{ borderColor: '#130e0b', opacity: 0.2 }} />
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <BookingFormModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default WhoWeAreSection;