"use client";

// import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const YT_EMBED = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`;

const CARDS = [
  {
    id: 1,
    tag: "Hair Restoration",
    name: "Hair Restoration",
    desc: "Advanced hair restoration procedure delivering natural-looking results with minimal downtime.",
    stat: "Visible results from session 1",
    tagColor: "#6d5b8f",
    tagBg: "rgba(109,91,143,0.12)",
    tagBorder: "rgba(109,91,143,0.3)",
    video: YT_EMBED("k5aVT7qcul4"),
  },
  {
    id: 2,
    tag: "Scalp Treatment",
    name: "Scalp Treatment",
    desc: "Targeted scalp therapy that strengthens hair follicles, reduces shedding and promotes healthy regrowth.",
    stat: "Results last 6–12 months",
    tagColor: "#ec778d",
    tagBg: "rgba(236,119,141,0.12)",
    tagBorder: "rgba(236,119,141,0.35)",
    video: YT_EMBED("u8Ypbe_dcF8"),
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
    video: YT_EMBED("8-AtVQb03gs"),
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
    video: YT_EMBED("MUnXQbjTLxk"),
  },
];

export default function CosBeforeAfterSection() {
  const [current, setCurrent] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = CARDS.length;

  const sendYTCommand = (iframe: HTMLIFrameElement | null, func: string) => {
    if (!iframe) return;
    iframe.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*"
    );
  };

  const startAutoScroll = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % total);
      setIsMuted(true);
    }, 10000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When slide changes, mute the previous iframe
  useEffect(() => {
    iframeRefs.current.forEach((iframe, i) => {
      if (i !== current) sendYTCommand(iframe, "mute");
    });
    setIsMuted(true);
  }, [current]);

  const go = (idx: number) => {
    if (autoRef.current) clearInterval(autoRef.current);
    setCurrent((idx + total) % total);
    setIsMuted(true);
    startAutoScroll();
  };

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const iframe = iframeRefs.current[current];
    if (isMuted) {
      sendYTCommand(iframe, "unMute");
      sendYTCommand(iframe, "setVolume");
    } else {
      sendYTCommand(iframe, "mute");
    }
    setIsMuted((m) => !m);
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
        .ba-line-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
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

          {/* Title */}
          {/* <motion.h2
            className="text-4xl max-[470px]:text-[30px] max-[325px]:text-[25px] font-bold text-center mb-4 text-[#180109]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 15 }}
          >
             
          </motion.h2> */}
            <div style={{ marginBottom: 40, textAlign: "center" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 10 }}>
                <div className="ba-eyebrow-l" />
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#9B7057" }}>
                  Hair Treatments
                </span>
                <div className="ba-eyebrow-r" />
              </div>
              <h2 className="ba-main-heading" style={{ fontSize: "clamp(30px,5vw,48px)", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, margin: "0 0 4px" }}>
                Before / After Gallery
              </h2>
              <h2 className="ba-italic-accent ba-accent-heading" style={{ fontSize: "clamp(28px,4.5vw,44px)", lineHeight: 1.25, margin: "0 0 8px" }}>
                Hear from our Hair specialist
              </h2>
              <p className="ba-header-desc" style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, maxWidth: 780, lineHeight: 1.7, margin: "0 auto" }}>
                Precision Treatments. Real Results.Because Hair Loss Needs the Right Diagnosis
              </p>
            </div>

          {/* Carousel */}
          <div className="mb-4">
            <div className="flex items-center gap-3">

              {/* Prev */}
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

              {/* Cards */}
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
                      {/* Video */}
                      <div className="absolute inset-0">
                        <iframe
                          ref={(el) => { iframeRefs.current[cardIdx] = el; }}
                          src={card.video}
                          allow="autoplay; fullscreen; encrypted-media"
                          allowFullScreen
                          className="w-full h-full"
                          style={{ border: "none", pointerEvents: isCenter ? "auto" : "none" }}
                        />
                      </div>

                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(5,5,5,0.25) 75%, rgba(5,5,5,0.55) 100%)" }}
                      />

                      {/* Center card controls */}
                      {isCenter && (
                        <>
                          {/* Audio button — bottom right */}
                          <button
                            onClick={toggleAudio}
                            className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center shadow-lg hover:bg-black/70 transition-colors"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                          >
                            {isMuted ? (
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                                <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                              </svg>
                            )}
                          </button>

                          {/* Card label */}
                          {/* <div className="absolute bottom-16 left-4 right-4 z-20">
                            <div
                              className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border mb-2"
                              style={{ color: card.tagColor, background: card.tagBg, borderColor: card.tagBorder }}
                            >
                              <span style={{ width: 5, height: 5, background: card.tagColor, borderRadius: "50%", display: "inline-block", flexShrink: 0 }} />
                              {card.tag}
                            </div>
                            <div className="text-base font-bold text-white tracking-tight">{card.name}</div>
                          </div> */}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Next */}
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

            {/* Dots — desktop */}
            {/* <div className="flex justify-center items-center gap-2 mt-6 max-sm:hidden">
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
            </div> */}

            {/* Bottom nav — mobile only */}
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