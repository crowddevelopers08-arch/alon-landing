'use client'

import { useState, useEffect, useRef } from 'react';
import RevealOnScroll from './RevealOnScroll';

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

const HairSpecialistComponent = () => {
  const { count, ref: sentinelRef } = useCountUp(12);
    return (
        <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

          .vs-cta-strip {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            flex-wrap: wrap;
            background: linear-gradient(135deg, #1a1410 0%, #2a1f16 100%);
            border: 1px solid rgba(155,112,87,0.25);
            border-radius: 20px;
            padding: 32px 36px;
            margin-top: 48px;
            position: relative;
            overflow: hidden;
            font-family: 'Outfit', sans-serif;
          }
          .vs-cta-strip::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(ellipse 60% 80% at 0% 50%, rgba(155,112,87,0.12) 0%, transparent 70%);
            pointer-events: none;
          }
          .vs-cta-strip::after {
            content: '';
            position: absolute;
            top: 0; left: 36px; right: 36px;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(155,112,87,0.4), transparent);
          }
          .vs-cta-heading {
            font-size: clamp(18px, 2.5vw, 22px);
            font-weight: 800;
            color: #f5f0eb;
            margin-bottom: 6px;
            letter-spacing: -0.3px;
          }
          .vs-cta-sub {
            font-size: 14px;
            color: rgba(255,255,255,0.45);
            font-weight: 400;
            line-height: 1.5;
          }
          .vs-cta-buttons {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
            flex-wrap: wrap;
          }
          @keyframes vs-shimmer {
            0%   { background-position: -200% center; }
            100% { background-position:  200% center; }
          }
          .vs-btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 13px 26px;
            border-radius: 50px;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 700;
            color: #ffffff;
            text-decoration: none;
            cursor: pointer;
            background: linear-gradient(90deg, #9B7057 0%, #c4906e 40%, #9B7057 60%, #7d5a42 100%);
            background-size: 200% auto;
            animation: vs-shimmer 3s linear infinite;
            box-shadow: 0 5px 20px rgba(155,112,87,0.4);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            white-space: nowrap;
          }
          .vs-btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 28px rgba(155,112,87,0.55);
          }
          .vs-btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 13px 22px;
            border-radius: 50px;
            font-family: 'Outfit', sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: #f5f0eb;
            text-decoration: none;
            cursor: pointer;
            background: rgba(255,255,255,0.06);
            border: 1.5px solid rgba(255,255,255,0.15);
            transition: all 0.25s ease;
            white-space: nowrap;
          }
          .vs-btn-secondary:hover {
            border-color: rgba(155,112,87,0.5);
            background: rgba(155,112,87,0.1);
            transform: translateY(-2px);
          }
          .vs-call-wrapper { display: none; }

          @keyframes dr-float {
            0%   { transform: translateX(0px) scale(1); }
            30%  { transform: translateX(8px) scale(1.01); }
            60%  { transform: translateX(-5px) scale(1.005); }
            100% { transform: translateX(0px) scale(1); }
          }
          .dr-img-float {
            animation: dr-float 6s ease-in-out infinite;
            will-change: transform;
          }

          @media (max-width: 640px) {
            .vs-cta-strip { padding: 24px 20px; flex-direction: column; align-items: flex-start; }
            .vs-call-wrapper { display: block; }
            .vs-cta-buttons { width: 100%; }
            .btn-cta, .vs-btn-secondary { flex: 1; justify-content: center; }
            .vs-cta-heading { font-size: 16px; }
            .vs-cta-sub { font-size: 14px; }
            .vs-section-heading { font-size: 1.5rem !important; }
            .vs-section-desc { font-size: 14px !important; }
          }
        `}</style>
        <div id='doctor' className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-10 sm:py-12 md:py-14 lg:py-10">
            <div className="max-w-7xl mx-auto">

                {/* ── Section Header ── */}
                <RevealOnScroll direction="up" duration={700}>
                  <div ref={sentinelRef} style={{ textAlign: "center", marginBottom: 48 }}>

                    {/* Eyebrow row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 14 }}>
                      <div style={{ height: 1, width: 52, background: "linear-gradient(90deg, transparent, #9B7057)" }} />
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        // border: "1px solid rgba(155,112,87,0.3)",
                        // background: "rgba(155,112,87,0.07)",
                       padding: "6px 18px",
                        fontSize: 11, fontWeight: 700,
                        letterSpacing: "2px", textTransform: "uppercase" as const,
                        color: "#9B7057",
                      }}>
                        <span style={{ width: 6, height: 6, background: "#9B7057", borderRadius: "50%", display: "inline-block" }} />
                        Expert Care
                      </span>
                      <div style={{ height: 1, width: 52, background: "linear-gradient(90deg, #9B7057, transparent)" }} />
                    </div>

                    <h2 className="vs-section-heading" style={{
                      fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                      fontWeight: 900, color: "#1a1a1a",
                      marginTop: 0, marginBottom: 12,
                      lineHeight: 1.15, letterSpacing: "-0.5px",
                    }}>
                      Meet the{" "}
                      <span style={{ color: "#9B7057" }}>Doctor Behind</span>
                      <br />Your Hair Transformation
                    </h2>

                    <p className="vs-section-desc" style={{
                      fontSize: 15, color: "#6b7280",
                      maxWidth: 780, margin: "0 auto",
                      lineHeight: 1.75, fontWeight: 400,
                    }}>
                      Every treatment at our clinic is personally supervised by our lead dermatologist — combining clinical expertise with a deeply personalised approach to hair restoration.
                    </p>

                    {/* Divider */}
                    {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 20 }}>
                      <div style={{ width: 48, height: 2, background: "rgba(155,112,87,0.2)", borderRadius: 2 }} />
                      <div style={{ width: 8, height: 8, background: "#9B7057", borderRadius: "50%", opacity: 0.5 }} />
                      <div style={{ width: 64, height: 2, background: "rgba(155,112,87,0.5)", borderRadius: 2 }} />
                      <div style={{ width: 10, height: 10, background: "#9B7057", borderRadius: "50%" }} />
                      <div style={{ width: 64, height: 2, background: "rgba(155,112,87,0.5)", borderRadius: 2 }} />
                      <div style={{ width: 8, height: 8, background: "#9B7057", borderRadius: "50%", opacity: 0.5 }} />
                      <div style={{ width: 48, height: 2, background: "rgba(155,112,87,0.2)", borderRadius: 2 }} />
                    </div> */}

                  </div>
                </RevealOnScroll>

                {/* ── Desktop Layout (lg+) ── */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left - slides from left */}
                    <div className="space-y-3">
                            {/* Decorative Elements */}
                            <RevealOnScroll direction="left" duration={700}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-28 h-28 bg-[#9B7057] rounded-full flex-shrink-0"></div>
                                <div className="w-10 h-10 bg-[#9B7057] rounded-full flex-shrink-0"></div>
                                <div className="grid grid-cols-3 gap-1.5 w-11 h-11 flex-shrink-0">
                                    {[...Array(9)].map((_, i) => (
                                        <div key={i} className="w-2.5 h-2.5 bg-gray-900 rounded-full"></div>
                                    ))}
                                </div>
                            </div>
                            </RevealOnScroll>

                            <RevealOnScroll direction="up" duration={700} delay={100}>
                            <h1 className="text-4xl font-bold text-[#9B7057] leading-tight uppercase tracking-tight">
                                GET PROFESSIONAL HAIR TREATMENT ADVICE
                            </h1>
                            </RevealOnScroll>

                            <div className="space-y-2">
                                <RevealOnScroll direction="up" duration={700} delay={200}>
                                <h2 className="text-3xl font-bold text-black">Dr. Nisha R. Srinivas</h2>
                                </RevealOnScroll>
                                <RevealOnScroll direction="up" duration={700} delay={300}>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Dermatosurgeon | Dermatologist | Venereologist | Leprologist<br/>
                                    Aesthetic Physician & Clinical Lead – Anlon Skin & Aesthetics
                                </p>
                                </RevealOnScroll>
                            </div>

                            {/* Feature 1 */}
                            <RevealOnScroll direction="left" delay={200} duration={700}>
                                <div className="flex items-start gap-3">
                                    <svg className="w-12 h-12 text-[#130e0b] flex-shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="24" r="3.5" fill="currentColor"/>
                                        <circle cx="15" cy="24" r="2.5" fill="currentColor"/>
                                        <circle cx="33" cy="24" r="2.5" fill="currentColor"/>
                                        <line x1="17.5" y1="24" x2="21.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="26.5" y1="24" x2="30.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="24" y1="20.5" x2="24" y2="13" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="15" y1="21.5" x2="11" y2="15" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="33" y1="21.5" x2="37" y2="15" stroke="currentColor" strokeWidth="2"/>
                                        <circle cx="24" cy="13" r="2" fill="currentColor"/>
                                        <circle cx="11" cy="15" r="2" fill="currentColor"/>
                                        <circle cx="37" cy="15" r="2" fill="currentColor"/>
                                    </svg>
                                    <div>
                                        <h3 className="text-xl font-bold text-black uppercase leading-snug mb-2">HAIR-ALIGNED PROFILE</h3>
                                        <p className="text-gray-600 md:text-lg leading-relaxed">
                                            Dr. Nisha has 12 years of overall medical experience, with 7+ years specialising in dermatology and medical aesthetics, including extensive experience in hair loss diagnosis, scalp disorders, and hair restoration planning.
                                        </p>
                                    </div>
                                </div>
                            </RevealOnScroll>

                            {/* Feature 2 */}
                            <RevealOnScroll direction="left" delay={350} duration={700}>
                                <div className="flex items-start gap-3">
                                    <svg className="w-12 h-12 text-[#130e0b] flex-shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="24" r="3.5" fill="currentColor"/>
                                        <circle cx="15" cy="24" r="2.5" fill="currentColor"/>
                                        <circle cx="33" cy="24" r="2.5" fill="currentColor"/>
                                        <line x1="17.5" y1="24" x2="21.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="26.5" y1="24" x2="30.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="24" y1="20.5" x2="24" y2="13" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="15" y1="21.5" x2="11" y2="15" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="33" y1="21.5" x2="37" y2="15" stroke="currentColor" strokeWidth="2"/>
                                        <circle cx="24" cy="13" r="2" fill="currentColor"/>
                                        <circle cx="11" cy="15" r="2" fill="currentColor"/>
                                        <circle cx="37" cy="15" r="2" fill="currentColor"/>
                                    </svg>
                                    <div>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            Her approach to hair treatment focuses on understanding the root cause of hair loss, recommending stage-appropriate solutions, and ensuring long-term scalp and follicle health rather than short-term cosmetic fixes.
                                        </p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>

                    {/* Right - Image slides from right */}
                    <RevealOnScroll direction="right" delay={150} duration={800}>
                        <div className="relative">
                            <div className="w-full h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src="/doctored.jpeg"
                                    alt="Dr. Nisha R. Srinivas - Hair Specialist"
                                    className="w-full h-full object-cover dr-img-float"
                                />
                            </div>
                            <div className="absolute top-1/2 left-0 -translate-y-1/2  bg-orange-50 text-black px-8 py-10 shadow-xl">
                                <div className="text-center">
                                    <div className="text-8xl font-bold leading-none mb-2">{count}+</div>
                                    <div className="text-base font-semibold leading-tight">Years<br/>Experience</div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* ── Mobile/Tablet Layout (below lg) ── */}
                <div className="block lg:hidden">

                    {/* Decorative + Heading - from left */}
                    <RevealOnScroll direction="left" duration={700}>
                        <div className="flex items-center gap-2 sm:gap-3 mb-3">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#9B7057] rounded-full flex-shrink-0"></div>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#9B7057] rounded-full flex-shrink-0"></div>
                            <div className="grid grid-cols-3 gap-1 sm:gap-1.5 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full"></div>
                                ))}
                            </div>
                        </div>
                        <h1 className="text-xl sm:text-2xl font-bold text-[#9B7057] leading-tight uppercase tracking-tight mb-3">
                          GET PROFESSIONAL HAIR TREATMENT ADVICE
                        </h1>
                        <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">Dr. Nisha R. Srinivas</h2>
                    </RevealOnScroll>

                    {/* Image - from right */}
                    <RevealOnScroll direction="right" delay={150} duration={800}>
                        <div className="relative mb-6">
                            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src="/doctored.jpeg"
                                    alt="Dr. Nisha R. Srinivas - Hair Specialist"
                                    className="w-full h-full object-cover dr-img-float"
                                />
                            </div>
                            <div className="absolute top-1/2 left-0 -translate-y-1/2  bg-orange-50 text-black px-3 sm:px-4 py-4 sm:py-5 shadow-xl">
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold leading-none mb-1">{count}+</div>
                                    <div className="text-xs sm:text-sm font-semibold leading-tight">Years<br/>Experience</div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Designation - from left */}
                    <RevealOnScroll direction="left" delay={200} duration={700}>
                        <p className="text-gray-600 text-base leading-relaxed mb-4">
                            Dermatosurgeon | Dermatologist | Venereologist | Leprologist<br className="hidden sm:block"/>
                            Aesthetic Physician & Clinical Lead – Anlon Skin & Aesthetics
                        </p>
                    </RevealOnScroll>

                    {/* Feature 1 - from left */}
                    <RevealOnScroll direction="left" delay={250} duration={700}>
                        <div className="flex items-start gap-2 sm:gap-3 mb-4">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6B35] flex-shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="3.5" fill="currentColor"/>
                                <circle cx="15" cy="24" r="2.5" fill="currentColor"/>
                                <circle cx="33" cy="24" r="2.5" fill="currentColor"/>
                                <line x1="17.5" y1="24" x2="21.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                <line x1="26.5" y1="24" x2="30.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                <line x1="24" y1="20.5" x2="24" y2="13" stroke="currentColor" strokeWidth="2"/>
                                <line x1="15" y1="21.5" x2="11" y2="15" stroke="currentColor" strokeWidth="2"/>
                                <line x1="33" y1="21.5" x2="37" y2="15" stroke="currentColor" strokeWidth="2"/>
                                <circle cx="24" cy="13" r="2" fill="currentColor"/>
                                <circle cx="11" cy="15" r="2" fill="currentColor"/>
                                <circle cx="37" cy="15" r="2" fill="currentColor"/>
                            </svg>
                            <div>
                                <h3 className="text-sm sm:text-base font-bold text-black uppercase leading-snug mb-1">HAIR-ALIGNED PROFILE</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Dr. Nisha has 12 years of overall medical experience, with 7+ years specialising in dermatology and medical aesthetics, including extensive experience in hair loss diagnosis, scalp disorders, and hair restoration planning.
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Feature 2 - from right */}
                    <RevealOnScroll direction="right" delay={300} duration={700}>
                        <div className="flex items-start gap-2 sm:gap-3">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6B35] flex-shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="3.5" fill="currentColor"/>
                                <circle cx="15" cy="24" r="2.5" fill="currentColor"/>
                                <circle cx="33" cy="24" r="2.5" fill="currentColor"/>
                                <line x1="17.5" y1="24" x2="21.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                <line x1="26.5" y1="24" x2="30.5" y2="24" stroke="currentColor" strokeWidth="2"/>
                                <line x1="24" y1="20.5" x2="24" y2="13" stroke="currentColor" strokeWidth="2"/>
                                <line x1="15" y1="21.5" x2="11" y2="15" stroke="currentColor" strokeWidth="2"/>
                                <line x1="33" y1="21.5" x2="37" y2="15" stroke="currentColor" strokeWidth="2"/>
                                <circle cx="24" cy="13" r="2" fill="currentColor"/>
                                <circle cx="11" cy="15" r="2" fill="currentColor"/>
                                <circle cx="37" cy="15" r="2" fill="currentColor"/>
                            </svg>
                            <div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Her approach to hair treatment focuses on understanding the root cause of hair loss, recommending stage-appropriate solutions, and ensuring long-term scalp and follicle health rather than short-term cosmetic fixes.
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>

            </div>

            {/* ── CTA Strip ── */}
            <RevealOnScroll direction="up" duration={700} delay={100}>
              <div className="vs-cta-strip">
                <div>
                  <div className="vs-cta-heading">Ready to take the first step?</div>
                  <div className="vs-cta-sub">Book your consultation with Dr. Nisha — no pressure, just answers.</div>
                </div>
                <div className="vs-cta-buttons">
                  <a
                    href="#"
                    onClick={e => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-booking-modal")); }}
                    className="btn-cta"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="white"/>
                    </svg>
                    Book Your Consultation
                  </a>
                  <div className="vs-call-wrapper">
                    <a href="tel:+919500653243" className="vs-btn-secondary">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="#f5f0eb"/>
                      </svg>
                      Let&apos;s Talk
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

        </div>
        </>
    );
};

export default HairSpecialistComponent;