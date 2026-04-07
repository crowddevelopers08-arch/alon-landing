"use client";

import { useState, useEffect, useRef } from "react";

const CARDS = [
  {
    id: 1,
    tag: "Skin Treatment",
    name: "Skin Treatment",
    desc: "Advanced skin treatment designed to improve texture, clarity, and visible glow with expert care.",
    stat: "Visible results from session 1",
    tagColor: "#6d5b8f",
    tagBg: "rgba(109,91,143,0.12)",
    tagBorder: "rgba(109,91,143,0.3)",
    video: "https://www.youtube.com/embed/qHgf4Y1MVUQ?rel=0&modestbranding=1",
  },
  {
    id: 2,
    tag: "Skin Consultation",
    name: "Skin Consultation",
    desc: "Personalized skin consultation focused on understanding your concern and planning the right treatment.",
    stat: "Results last 6-12 months",
    tagColor: "#ec778d",
    tagBg: "rgba(236,119,141,0.12)",
    tagBorder: "rgba(236,119,141,0.35)",
    video: "https://www.youtube.com/embed/-YVzYrH8hMs?rel=0&modestbranding=1",
  },
  {
    id: 3,
    tag: "Before & After",
    name: "Before & After",
    desc: "See the remarkable transformations achieved at our clinic with precision and care.",
    stat: "Zero downtime treatment",
    tagColor: "#f2a0b5",
    tagBg: "rgba(242,160,181,0.12)",
    tagBorder: "rgba(242,160,181,0.35)",
    video: "https://www.youtube.com/embed/iz6t2ydR_J0?rel=0&modestbranding=1",
  },
  {
    id: 4,
    tag: "Before & After",
    name: "Before & After",
    desc: "See the remarkable transformations achieved at our clinic with precision and care.",
    stat: "Zero downtime treatment",
    tagColor: "#f2a0b5",
    tagBg: "rgba(242,160,181,0.12)",
    tagBorder: "rgba(242,160,181,0.35)",
    video: "https://www.youtube.com/embed/tteCsoLbBrU?rel=0&modestbranding=1",
  },
];

export default function CosBeforeAfterSection() {
  const [current, setCurrent] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = CARDS.length;

  const startAutoScroll = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 580;
    const delay = isMobile ? 15 * 60 * 1000 : 10000;
    autoRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % total);
    }, delay);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, []);

  const go = (idx: number) => {
    setCurrent((idx + total) % total);
  };

  const prev = () => go((current - 1 + total) % total);
  const next = () => go((current + 1) % total);

  const visible = [
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ];

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap");
        .ba-wrap { font-family: "Outfit", sans-serif; }
        .ba-card-anim { transition: all 0.45s cubic-bezier(0.4,0,0.2,1); }
        .ba-eyebrow-l { height: 1px; width: 60px; background: linear-gradient(90deg, transparent, #9B7057); }
        .ba-eyebrow-r { height: 1px; width: 60px; background: linear-gradient(90deg, #9B7057, transparent); }
        .ba-italic-accent {
          font-style: italic;
          font-weight: 700;
          background: linear-gradient(90deg, #9B7057, #c4906e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @media (max-width: 860px) {
          .ba-side { display: none !important; }
          .ba-center { width: 100% !important; max-width: 360px !important; }
        }
        @media (max-width: 580px) {
          .ba-side { display: none !important; }
          .ba-center {
            width: calc(100vw - 48px) !important;
            max-width: 100% !important;
            height: 460px !important;
          }
          .ba-cards-container { min-height: 460px !important; }
          .ba-wrap { padding-top: 24px !important; padding-bottom: 24px !important; }
          .ba-arrow-side { display: none !important; }
          .ba-bottom-nav { display: flex !important; }
        }
        @media (max-width: 640px) {
          .ba-main-heading { font-size: 22px !important; }
          .ba-accent-heading { font-size: 20px !important; }
          .ba-header-desc { font-size: 14px !important; }
        }
      `}</style>

      <section className="ba-wrap max-sm:py-5 max-sm:mb-5 py-10" style={{ background: "linear-gradient(180deg, #0d0b0e 0%, #120e0b 100%)" }}>
        <div className="ba-carousel-outer max-w-6xl mx-auto px-6">
          <div style={{ marginBottom: 40, textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 10 }}>
              <div className="ba-eyebrow-l" />
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#9B7057" }}>
                Skin Treatments
              </span>
              <div className="ba-eyebrow-r" />
            </div>
            <h2 className="ba-main-heading" style={{ fontSize: "clamp(30px,5vw,48px)", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, margin: "0 0 4px" }}>
              Before / After Gallery
            </h2>
            <h2 className="ba-italic-accent ba-accent-heading" style={{ fontSize: "clamp(28px,4.5vw,44px)", lineHeight: 1.25, margin: "0 0 8px" }}>
              Hear from our Skin specialist
            </h2>
            <p className="ba-header-desc" style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, maxWidth: 780, lineHeight: 1.7, margin: "0 auto" }}>
              Precision Treatments. Real Results.Because Skin Loss Needs the Right Diagnosis
            </p>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="ba-arrow-side w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(155,112,87,0.12)"; e.currentTarget.style.borderColor = "rgba(155,112,87,0.45)"; e.currentTarget.style.color = "#c4906e"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="ba-cards-container flex-1 flex items-center justify-center gap-5" style={{ perspective: "1200px", minHeight: "540px", width: "100%" }}>
                {visible.map((cardIdx, position) => {
                  const card = CARDS[cardIdx];
                  const isCenter = position === 1;

                  return (
                    <div
                      key={`${card.id}-${position}`}
                      className={`ba-card-anim relative rounded-3xl overflow-hidden flex-shrink-0 cursor-pointer ${isCenter ? "ba-center" : "ba-side"}`}
                      style={isCenter ? {
                        width: "420px", height: "540px",
                        transform: "scale(1) translateZ(0)",
                        border: "1px solid rgba(155,112,87,0.35)",
                        boxShadow: "0 0 40px rgba(155,112,87,0.15), 0 20px 50px rgba(0,0,0,0.3)",
                        zIndex: 2,
                      } : {
                        width: "330px", height: "460px",
                        transform: "scale(0.92)",
                        opacity: 0.55,
                        zIndex: 1,
                        border: "1px solid rgba(0,0,0,0.08)",
                      }}
                      onClick={() => {
                        if (!isCenter) go(cardIdx);
                      }}
                    >
                      <div className="absolute inset-0 bg-black">
                        <iframe
                          src={card.video}
                          title={card.name}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>

                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(5,5,5,0.12) 75%, rgba(5,5,5,0.3) 100%)" }}
                      />
                    </div>
                  );
                })}
              </div>

              <button
                onClick={next}
                aria-label="Next"
                className="ba-arrow-side w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(155,112,87,0.12)"; e.currentTarget.style.borderColor = "rgba(155,112,87,0.45)"; e.currentTarget.style.color = "#c4906e"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="ba-bottom-nav" style={{ display: "none", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "16px" }}>
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="border-none cursor-pointer p-0 rounded-full transition-all duration-300"
                  style={{
                    height: "8px",
                    width: i === current ? "24px" : "8px",
                    borderRadius: i === current ? "4px" : "50%",
                    background: i === current ? "#9B7057" : "rgba(255,255,255,0.2)",
                    boxShadow: i === current ? "0 0 10px rgba(155,112,87,0.45)" : "none",
                  }}
                />
              ))}
              <button
                onClick={next}
                aria-label="Next"
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
