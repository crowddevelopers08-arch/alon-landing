'use client'

import React, { useEffect, useRef, useState } from 'react';
import BookingFormModal from './contact-form';
import RevealOnScroll from './RevealOnScroll';

const YOUTUBE_VIDEO_ID = 'tteCsoLbBrU';
const ROTATING_PERSONAS = ['Influencers', 'Models', 'Actresses'];

const TickIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="10" cy="10" r="9" fill="#130e0b" opacity="0.1" />
    <path
      d="M6 10.2l2.5 2.5L14 7.8"
      stroke="#130e0b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhoWeAreSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [personaIndex, setPersonaIndex] = useState(0);
  const [personaVisible, setPersonaVisible] = useState(true);
  const mobileVideoRef = useRef<HTMLIFrameElement>(null);
  const desktopVideoRef = useRef<HTMLIFrameElement>(null);
  const personaTimeoutRef = useRef<number | null>(null);

  const desktopEmbedUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=0&controls=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`;
  const mobileAutoplayUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`;

  const postPlayerCommand = (frame: HTMLIFrameElement | null, func: 'mute' | 'unMute' | 'playVideo') => {
    frame?.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func,
        args: [],
      }),
      '*'
    );
  };

  const syncPlayerState = (muted: boolean, desktop: boolean) => {
    const activeFrame = desktop ? desktopVideoRef.current : mobileVideoRef.current;
    const inactiveFrame = desktop ? mobileVideoRef.current : desktopVideoRef.current;

    postPlayerCommand(activeFrame, 'playVideo');
    postPlayerCommand(activeFrame, muted ? 'mute' : 'unMute');
    postPlayerCommand(inactiveFrame, 'mute');
  };

  useEffect(() => {
    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, []);

  useEffect(() => {
    setIsMuted(!isDesktop);
  }, [isDesktop]);

  useEffect(() => {
    syncPlayerState(isMuted, isDesktop);
  }, [isMuted, isDesktop]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPersonaVisible(false);

      personaTimeoutRef.current = window.setTimeout(() => {
        setPersonaIndex((current) => (current + 1) % ROTATING_PERSONAS.length);
        setPersonaVisible(true);
      }, 220);
    }, 2200);

    return () => {
      window.clearInterval(interval);
      if (personaTimeoutRef.current !== null) {
        window.clearTimeout(personaTimeoutRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
  };

  const mobileEmbedUrl = isDesktop ? 'about:blank' : mobileAutoplayUrl;
  const activeDesktopEmbedUrl = isDesktop ? desktopEmbedUrl : 'about:blank';

  const MuteButton = () => (
    <button
      onClick={toggleMute}
      className="absolute bottom-3 right-3 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-black/70 transition-all"
      aria-label={isMuted ? 'Unmute' : 'Mute'}
      type="button"
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
    'Celebrity & influencer trusted clinic',
    'Personalized luxury skin treatments',
    'Advanced, non-invasive technologies',
    'Expert dermatologists & skin specialists',
    'High-end ambiance & premium care',
    'Results designed for natural perfection'
  ];

  return (
    <section className="py-5  md:pt-14 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <style>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatLeftRight {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(15px); }
        }
        @keyframes personaIn {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes personaOut {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-14px); }
        }
        .animate-float-up-down { animation: floatUpDown 4s ease-in-out infinite; }
        .animate-float-left-right { animation: floatLeftRight 5s ease-in-out infinite; }
        .about-rotating-word {
          display: inline-flex;
          min-width: 10.5ch;
          justify-content: flex-start;
          color: #9B7057;
        }
        .about-rotating-word.enter {
          animation: personaIn 0.28s ease-out both;
        }
        .about-rotating-word.exit {
          animation: personaOut 0.22s ease-in both;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="block lg:hidden">
          <RevealOnScroll direction="left" duration={700}>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight max-sm:mb-10 mb-4">
              Premium Skin Care Clinic Chosen by{' '}
              <span className={`about-rotating-word ${personaVisible ? 'enter' : 'exit'}`}>
                {ROTATING_PERSONAS[personaIndex]}
              </span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={800}>
            <div className="relative h-[470px] sm:h-[400px] w-full mb-6">
              <div className="absolute top-0 right-0 w-[100%] h-[100%] rounded-3xl overflow-hidden shadow-2xl z-10 bg-black">
                <iframe
                  ref={mobileVideoRef}
                  src={mobileEmbedUrl}
                  title="Anlon Skin Treatment Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <MuteButton />
              </div>
              <div className="absolute top-[10%] right-[5%] w-[70%] h-[65%] rounded-3xl border-4 -z-10" style={{ borderColor: '#130e0b', opacity: 0.2 }} />
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left" delay={200} duration={700}>
            <div className="space-y-4 mb-4">
              <p className="text-gray-600 text-base leading-relaxed">
                At Anlon Aesthetics, skincare is not just a treatment - it is a premium experience curated for flawless, radiant skin. Trusted by models, actresses, and top influencers, our clinic is designed for those who expect nothing but the best in skin care and aesthetics.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Every client undergoes a detailed skin analysis, ensuring highly personalized treatments tailored to enhance your natural beauty with precision and care.We focus on luxury, safety, and visible results, delivering a skin transformation experience that reflects elegance and confidence.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={250} duration={700}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-orange-50 p-4 rounded-xl border-l-4 mb-6" style={{ borderColor: '#130e0b' }}>
              {trustPoints.map((point, i) => (
                <div key={i} className={`flex items-start gap-2 ${i === 4 ? 'sm:col-span-2' : ''}`}>
                  <TickIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800 text-sm font-medium">{point}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left" delay={300} duration={700}>
            <div className="flex sm:flex-row gap-3">
              <button
                className="group border-1 border-black flex items-center justify-center gap-2 text-black font-bold px-6 py-3 rounded-full w-full transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-sm sm:w-auto"
                onClick={() => setIsBookingModalOpen(true)}
              >
                Book Now
              </button>
              <a href="tel:+91 9500653243" className="flex w-full sm:w-auto">
                <button className="btn-cta nb-cta" style={{ backgroundColor: '#9B7057' }}>
                  Call Now
                </button>
              </a>
            </div>
          </RevealOnScroll>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll direction="left" duration={800}>
            <div className="space-y-2">
              <h2 className="text-5xl font-bold text-gray-900">
                Premium Skin Care Clinic Chosen by{' '}
                <span className={`about-rotating-word ${personaVisible ? 'enter' : 'exit'}`}>
                  {ROTATING_PERSONAS[personaIndex]}
                </span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed m-1">
                  At Anlon Aesthetics, skincare is not just a treatment - it is a premium experience curated for flawless, radiant skin. Trusted by models, actresses, and top influencers, our clinic is designed for those who expect nothing but the best in skin care and aesthetics. Every client undergoes a detailed skin analysis, ensuring highly personalized treatments tailored to enhance your natural beauty with precision and care.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-1">
                  We focus on luxury, safety, and visible results, delivering a skin transformation experience that reflects elegance and confidence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-orange-50 p-6 rounded-xl border-l-4" style={{ borderColor: '#130e0b' }}>
                {trustPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <TickIcon className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-800 font-medium">{point}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  className="group border-1 border-black flex items-center justify-center gap-2 text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:brightness-110 shadow-lg hover:shadow-xl text-sm w-full sm:w-auto"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book Your Consultation
                </button>
                <a href="tel:+91 9500653243" className="flex w-full sm:w-auto">
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
              <div className="absolute top-0 right-0 w-[85%] h-[90%] rounded-3xl overflow-hidden shadow-2xl z-10 animate-float-up-down bg-black">
                <iframe
                  ref={desktopVideoRef}
                  src={activeDesktopEmbedUrl}
                  title="Anlon Skin Treatment Video Desktop"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <MuteButton />
              </div>
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
