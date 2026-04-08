// component/banner.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import BookingFormModal from "./contact-form";

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

type BadgeData = { count: number | null; suffix: string; label: string; svg: React.ReactNode };

function CountBadge({ badge }: { badge: BadgeData }) {
  const { count, ref } = useCountUp(badge.count ?? 0, badge.count === 7000 ? 2000 : 1200);
  return (
    <div className="sh-badge">
      <span className="sh-badge-icon">{badge.svg}</span>
      <span ref={ref}>
        {badge.count !== null ? `${count}${badge.suffix} ` : ""}{badge.label}
      </span>
    </div>
  );
}

const BG_IMAGES = [
  "/medium-shots.avif",
  "/jaise-09.jpg",
  "/doctors-using.jpg",
];

const TRUST_BADGES = [
  {
    count: 7000, suffix: "+", label: "Happy Patients",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" fill="currentColor" opacity="0.12"/>
        <circle cx="9" cy="7" r="3"/>
        <path d="M3 20c0-3.314 2.686-6 6-6s6 2.686 6 6"/>
        <circle cx="17" cy="8" r="2.5" fill="currentColor" opacity="0.12"/>
        <circle cx="17" cy="8" r="2.5"/>
        <path d="M21 20c0-2.761-1.791-5-4-5.5"/>
      </svg>
    ),
  },
  {
    count: 12, suffix: "+", label: "Experienced Dermatologists",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="6" r="3" fill="currentColor" opacity="0.12"/>
        <circle cx="12" cy="6" r="3"/>
        <path d="M6 20v-2a4 4 0 014-4h1"/>
        <path d="M16 14a3 3 0 110 6 3 3 0 010-6z" fill="currentColor" opacity="0.12"/>
        <path d="M16 14a3 3 0 110 6 3 3 0 010-6z"/>
        <path d="M11 14h1"/>
      </svg>
    ),
  },
  {
    count: 1000, suffix: "+", label: "Google Reviews",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M17.8 6.2L19 5M12.2 11.8L11 13M12.2 6.2L11 5"/>
        <path d="M15 9a3 3 0 110 0z" fill="currentColor" opacity="0.2"/>
        <circle cx="15" cy="9" r="3"/>
        <path d="M3 21l9-9" strokeWidth={2}/>
      </svg>
    ),
  },
  {
    count: null, suffix: "", label: "Low Downtime in Industry",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.08"/>
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 3"/>
      </svg>
    ),
  },
];

const HEADLINES = [
  { line1: "Leading Skin Care Clinic", line2: "in Chennai" },
  { line1: "Chennai’s Trusted Clinic for", line2: " Skin Care Treatment" },
  { line1: "Advanced Skin Care Treatment", line2: " Clinic in Chennai" },
  { line1: "Top Rated Skin Care Clinic", line2: " in Chennai" },
  { line1: "Premium Clinic for Advanced", line2: "Skin Care in Chennai" },
];

export default function SkinHeroSection() {
  const [bgIndex, setBgIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [headlineVisible, setHeadlineVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((i) => (i + 1) % BG_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handler = () => setModalOpen(true);
    window.addEventListener("open-booking-modal", handler);
    return () => window.removeEventListener("open-booking-modal", handler);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineVisible(false);
      setTimeout(() => {
        setHeadlineIndex((i) => (i + 1) % HEADLINES.length);
        setHeadlineVisible(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .sh-root { font-family: 'Outfit', sans-serif; }
        @keyframes sh-kenburns {
          0%   { transform: scale(1)    translateX(0px)   translateY(0px); }
          33%  { transform: scale(1.06) translateX(-12px) translateY(-6px); }
          66%  { transform: scale(1.1)  translateX(10px)  translateY(-10px); }
          100% { transform: scale(1)    translateX(0px)   translateY(0px); }
        }
        .sh-bg { position: relative; overflow: hidden; }
        .sh-bg-img { position: absolute; inset: -4%; background-size: cover; background-position: center top; background-repeat: no-repeat; animation: sh-kenburns 18s ease-in-out infinite; will-change: transform, opacity; transition: opacity 1.5s ease-in-out; }
        .sh-bg-img.active { opacity: 1; }
        .sh-bg-img.inactive { opacity: 0; }
        .sh-bg-overlay { position: absolute; inset: 0; background: linear-gradient(145deg, rgba(10,10,10,0.88) 0%, rgba(17,13,26,0.82) 50%, rgba(10,10,10,0.92) 100%); pointer-events: none; }
        .sh-grid-overlay { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 48px 48px; pointer-events: none; }
        @keyframes sh-pulse {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50%       { opacity: 0.22; transform: scale(1.08); }
        }
        .sh-orb { position: absolute; border-radius: 50%; pointer-events: none; animation: sh-pulse 4s ease-in-out infinite; }
        .sh-orb-1 { width: 520px; height: 520px; background: radial-gradient(circle, rgba(155,112,87,0.22) 0%, transparent 70%); top: -120px; left: -160px; }
        .sh-orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(155,112,87,0.15) 0%, transparent 70%); bottom: -100px; right: -100px; animation-delay: 2s; }
        .sh-tagline { display: inline-flex; flex-wrap: wrap; align-items: center; gap: 10px; border: 1px solid rgba(155,112,87,0.3); background: rgba(155,112,87,0.08); border-radius: 100px; padding: 6px 16px; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.8); backdrop-filter: blur(8px); }
        .sh-dot { width: 7px; height: 7px; background: #9B7057; border-radius: 50%; animation: sh-blink 1.4s ease-in-out infinite; }
        @keyframes sh-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        .sh-headline-shell { display: flex; align-items: flex-start; min-height: clamp(5.75rem, 9vw, 8.75rem); }
        .sh-headline { font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 900; line-height: 1.1; color: #ffffff; letter-spacing: -1px; }
        .sh-headline-accent { color: #9B7057; }
        @keyframes sh-headline-in { 0% { opacity: 0; transform: translateY(22px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes sh-headline-out { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-18px); } }
        .sh-headline-enter { animation: sh-headline-in 0.5s cubic-bezier(0.22,1,0.36,1) both; }
        .sh-headline-enter .sh-hl-line2 { animation: sh-headline-in 0.5s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .sh-headline-exit { animation: sh-headline-out 0.4s ease-in both; }
        .sh-rating-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .sh-stars { display: flex; gap: 2px; }
        .sh-star { width: 20px; height: 20px; fill: #FBBC04; }
        .sh-rating-score { font-size: 20px; font-weight: 800; color: #ffffff; line-height: 1; }
        .sh-rating-label { display: flex; align-items: center; gap: 6px; color: rgba(255,255,255,0.55); font-size: 13px; font-weight: 500; }
        .sh-badge-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .sh-badge { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.05); backdrop-filter: blur(12px); color: rgba(255,255,255,0.85); font-size: 13px; font-weight: 500; transition: background 0.2s, border-color 0.2s; }
        .sh-badge:hover { background: rgba(155,112,87,0.1); border-color: rgba(155,112,87,0.3); }
        .sh-badge-icon { width: 26px; height: 26px; flex-shrink: 0; color: rgba(255,255,255,0.7); transition: color 0.2s ease, filter 0.2s ease, transform 0.2s ease; }
        .sh-badge:hover .sh-badge-icon { color: #9B7057; filter: drop-shadow(0 0 5px rgba(155,112,87,0.55)); transform: scale(1.15); }
        .sh-card { background: #ffffff; border-radius: 22px; padding: 32px 28px; box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(155,112,87,0.08); }
        .sh-card-title { font-size: 20px; font-weight: 800; color: #1a1a1a; text-align: center; margin-bottom: 4px; }
        .sh-card-sub { font-size: 13px; color: #6b7280; text-align: center; margin-bottom: 22px; }
        .sh-field { margin-bottom: 14px; }
        .sh-label { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; color: #9ca3af; margin-bottom: 5px; }
        .sh-input { width: 100%; padding: 11px 14px; border: 1.5px solid #e5e7eb; border-radius: 10px; font-size: 14px; color: #111827; background: #f9fafb; outline: none; font-family: 'Outfit', sans-serif; transition: border-color 0.2s, box-shadow 0.2s, background 0.2s; box-sizing: border-box; }
        .sh-input::placeholder { color: #c0c4cc; }
        .sh-input:focus { border-color: #9B7057; background: #ffffff; box-shadow: 0 0 0 3px rgba(155,112,87,0.08); }
        .sh-terms { font-size: 11px; color: #9ca3af; text-align: center; margin-bottom: 14px; line-height: 1.5; }
        .sh-terms a { color: #9B7057; text-decoration: underline; cursor: pointer; }
        .sh-submit { width: 100%; padding: 14px 24px; border: none; border-radius: 50px; font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 700; letter-spacing: 0.3px; cursor: pointer; background: linear-gradient(135deg, #9B7057 0%, #7a5640 100%); color: #ffffff; box-shadow: 0 5px 18px rgba(155,112,87,0.38); transition: all 0.2s ease; }
        .sh-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(155,112,87,0.5); }
        .sh-submit:disabled { opacity: 0.55; cursor: not-allowed; }
        .sh-cta-row { display: flex; gap: 12px; width: 100%; flex-direction: row; }
        @media (max-width: 349px) { .sh-cta-row { flex-direction: column; } .sh-cta-primary, .sh-cta-secondary { width: 100% !important; flex: none !important; } }
        @media (min-width: 350px) { .sh-cta-primary, .sh-cta-secondary { flex: 1; width: auto !important; } }
        @keyframes sh-shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes sh-glow-ring { 0%, 100% { box-shadow: 0 0 0 0 rgba(155,112,87,0.5), 0 6px 20px rgba(155,112,87,0.35); } 50% { box-shadow: 0 0 0 6px rgba(155,112,87,0), 0 6px 24px rgba(155,112,87,0.5); } }
        .sh-cta-primary { position: relative; display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; border: none; border-radius: 50px; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.4px; color: #ffffff; cursor: pointer; text-decoration: none; overflow: hidden; background: linear-gradient(90deg, #9B7057 0%, #7a5640 30%, #9B7057 50%, #7a5640 70%, #9B7057 100%); background-size: 200% auto; animation: sh-shimmer 3s linear infinite, sh-glow-ring 2.5s ease-in-out infinite; transition: transform 0.2s ease; white-space: nowrap; width: 100%; justify-content: center; }
        .sh-cta-primary:hover { transform: translateY(-3px) scale(1.02); animation: sh-shimmer 1.5s linear infinite, sh-glow-ring 2.5s ease-in-out infinite; }
        .sh-cta-primary::before { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%); background-size: 200% auto; animation: sh-shimmer 2s linear infinite; pointer-events: none; }
        .sh-cta-secondary { position: relative; display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; border-radius: 50px; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.4px; color: #ffffff; cursor: pointer; text-decoration: none; overflow: hidden; background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.25); backdrop-filter: blur(8px); transition: all 0.25s ease; white-space: nowrap; width: 100%; justify-content: center; }
        .sh-cta-secondary:hover { border-color: rgba(155,112,87,0.6); background: rgba(155,112,87,0.1); color: #ffffff; transform: translateY(-3px); box-shadow: 0 8px 24px rgba(155,112,87,0.2); }
        .sh-cta-icon { flex-shrink: 0; transition: transform 0.2s ease; }
        .sh-cta-primary:hover .sh-cta-icon { transform: translateX(3px); }
        .sh-cta-secondary:hover .sh-cta-icon { transform: rotate(-8deg) scale(1.15); }
        @media (max-width: 640px) { .sh-badge-grid { grid-template-columns: 1fr; } .sh-card { padding: 24px 18px; } .sh-cta-primary, .sh-cta-secondary { font-size: 13px; padding: 12px 20px; } .sh-card-title { font-size: 18px; } .sh-card-sub { font-size: 14px; } .sh-headline-shell { min-height: 3.75rem; } .sh-headline { font-size: 1.5rem; } .sh-tagline { font-size: 11px; } .sh-rating-score { font-size: 16px; } .sh-rating-label { font-size: 14px; } .sh-badge { font-size: 14px; } .sh-subtext { font-size: 14px !important; } }
        @media (min-width: 641px) { .sh-cta-mobile-only { display: none !important; } }
      `}</style>

      <section className="sh-root sh-bg flex items-center max-sm:pt-22 py-10 lg:pt-25" style={{ scrollMarginTop: "70px" }}>
        {BG_IMAGES.map((src, i) => (
          <div
            key={src}
            className={`sh-bg-img ${i === bgIndex ? "active" : "inactive"}`}
            style={{
              backgroundImage: `url('${src}')`,
              animationDelay: `${i * -4.5}s`,
            }}
          />
        ))}
        <div className="sh-bg-overlay" />
        <div className="sh-grid-overlay" />
        <div className="sh-orb sh-orb-1" />
        <div className="sh-orb sh-orb-2" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch max-sm:gap-8 lg:gap-10 xl:gap-16">

            {/* ─── LEFT ─── */}
            <div className="lg:w-1/2 w-full flex flex-col gap-7">

              {/* Tagline */}
              <div>
                <span className="sh-tagline">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#9B7057" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                  </svg>
                  {/* <span style={{ color: "rgba(155,112,87,0.7)", fontWeight: 800 }}>·</span> */}
                 Nungambakkam, Kotturpuram
                </span>
              </div>

              {/* Headline */}
              <div className="sh-headline-shell">
                <h1
                  className={`sh-headline ${headlineVisible ? "sh-headline-enter" : "sh-headline-exit"}`}
                >
                  {HEADLINES[headlineIndex].line1}
                  <br />
                  <span className="sh-headline-accent sh-hl-line2">
                    {HEADLINES[headlineIndex].line2}
                  </span>
                </h1>
              </div>

              {/* Subtext */}
              <p className="sh-subtext" style={{ color: "rgba(255,255,255,0.52)", fontSize: 15, lineHeight: 1.75, maxWidth: 480, fontWeight: 400 }}>
                Personalized Skin care treatment by experienced skin experts , From Skin analysis to restoration with personzlied treatment plan by certified dermatologist.
              </p>

              {/* Google Rating */}
              <div className="sh-rating-row">
                <div className="sh-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="sh-star" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="sh-rating-score">5/5</span>
                <span className="sh-rating-label">
                  <svg viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google Rating
                </span>
              </div>

              {/* Trust Badges */}
              <div className="sh-badge-grid">
                {TRUST_BADGES.map((badge) => (
                  <CountBadge key={badge.label} badge={badge} />
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="sh-cta-row sh-cta-mobile-only">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-booking-modal")); }}
                  className="sh-cta-primary"
                >
                  Book Your Consultation
                </a>
                <a href="tel:+919500653243" className="sh-cta-secondary sh-cta-mobile-only">
                  <svg className="sh-cta-icon" style={{ width: 16, height: 16 }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Let&apos;s Talk
                </a>
              </div>
            </div>

            {/* ─── RIGHT - FORM ─── */}
            <div className="lg:w-1/2 w-full">
              <div className="sh-card">
                <h2 className="sh-card-title">
                  Book a Quick{" "}
                  <span style={{ color: "#9B7057" }}>Appointment</span>
                </h2>
                <p className="sh-card-sub">Fuller Scalp , Stronger Roots , Stronger Skin.</p>
                <BookingFormModal inline />
              </div>
            </div>

          </div>
        </div>
      </section>

      <BookingFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
