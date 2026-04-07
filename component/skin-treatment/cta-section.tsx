"use client";

import RevealOnScroll from "./RevealOnScroll";

export default function CTASection() {
  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Outfit:wght@400;500;600;700&display=swap");

        @keyframes cta-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes cta-pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes cta-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes cta-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }

        .cta-btn-primary {
          background: linear-gradient(90deg, #7d5a42 0%, #9B7057 40%, #c4906e 60%, #9B7057 80%, #7d5a42 100%);
          background-size: 200% 100%;
          animation: cta-shimmer 3s linear infinite;
        }
        .cta-orb-1 { animation: cta-float 6s ease-in-out infinite; }
        .cta-orb-2 { animation: cta-float 8s ease-in-out infinite reverse; }
        .cta-live-dot { animation: cta-blink 1.5s ease-in-out infinite; }
        .cta-ring {
          position: absolute;
          inset: -6px;
          border-radius: 9999px;
          border: 2px solid rgba(155,112,87,0.55);
          animation: cta-pulse-ring 2s ease-out infinite;
        }
        .cta-ring-2 { animation-delay: 1s; }
        @media (max-width: 640px) {
          .cta-main-heading { font-size: 22px !important; }
          .cta-body-text { font-size: 14px !important; }
        }
      `}</style>

      <section
        className="relative overflow-hidden py-10 sm:py-16 px-4 sm:px-6"
        style={{ background: "linear-gradient(135deg, #0f0d0a 0%, #1a1410 50%, #0f0d0a 100%)" }}
      >
        {/* BG orbs */}
        <div className="cta-orb-1 absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(155,112,87,0.18) 0%, transparent 70%)" }} />
        <div className="cta-orb-2 absolute -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(155,112,87,0.14) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(155,112,87,0.07) 0%, transparent 70%)" }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

        <div className="relative max-w-5xl mx-auto text-center" style={{ fontFamily: "Outfit, sans-serif" }}>

          {/* Live badge */}
          <RevealOnScroll direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
              style={{ background: "rgba(155,112,87,0.08)", borderColor: "rgba(155,112,87,0.25)" }}>
              <span className="cta-live-dot w-2 h-2 rounded-full block" style={{ background: "#9B7057" }} />
              <span className="text-[11px] font-semibold tracking-[2.5px] uppercase" style={{ color: "#c4906e" }}>
                Take the First Step Today
              </span>
            </div>
          </RevealOnScroll>

          {/* Headline */}
          <RevealOnScroll direction="up" duration={650} delay={100}>
            <h2 className="cta-main-heading font-bold leading-[1.15] mb-1"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px,5vw,48px)", fontWeight: 700,
                color: "#ffffff", letterSpacing: "-0.5px",
              }}>
              Ready to Start Your Skin Transformation?
            </h2>
            <h2 className="cta-main-heading font-bold italic leading-[1.2] mb-8"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px,5vw,48px)", fontWeight: 700,
                background: "linear-gradient(90deg, #9B7057, #c4906e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.5px",
              }}>
              When Will You Start?
            </h2>
          </RevealOnScroll>

          {/* Divider */}
          <RevealOnScroll direction="up" duration={600} delay={150}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 max-w-[120px]"
                style={{ background: "linear-gradient(90deg, transparent, rgba(155,112,87,0.4))" }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#9B7057" }} />
              <div className="h-px flex-1 max-w-[120px]"
                style={{ background: "linear-gradient(90deg, rgba(155,112,87,0.4), transparent)" }} />
            </div>
          </RevealOnScroll>

          {/* Body */}
          <RevealOnScroll direction="up" duration={650} delay={200}>
            <p className="cta-body-text text-base leading-relaxed mx-auto mb-12 max-w-xl"
              style={{ color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>
              Book a consultation with our dermatologist today. Walk in, get assessed, and leave with a personalised treatment plan designed specifically for your skin, your goals, and your budget.
            </p>
          </RevealOnScroll>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 w-full max-w-sm sm:max-w-none mx-auto" style={{ overflow: "visible" }}>

              {/* Primary — Book */}
              <a
                href="#"
                onClick={e => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-booking-modal")); }}
                className="cta-btn-primary relative inline-flex items-center justify-center gap-3 text-white font-semibold rounded-full px-7 py-4 sm:px-9 sm:py-5 text-[15px] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                style={{
                  boxShadow: "0 8px 32px rgba(155,112,87,0.4), 0 2px 8px rgba(0,0,0,0.3)",
                  fontFamily: "Outfit, sans-serif",
                  textDecoration: "none",
                }}
              >
                <span className="cta-ring" />
                <span className="cta-ring cta-ring-2" />
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" style={{ position: "relative", zIndex: 1 }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span style={{ position: "relative", zIndex: 1 }}>Book Your Consultation Now</span>
              </a>

              {/* Secondary — WhatsApp */}
              <a
                href="https://wa.me/919500653243"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 font-semibold text-[15px] rounded-full px-7 py-4 sm:px-9 sm:py-5 border transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  borderColor: "rgba(155,112,87,0.3)",
                  background: "rgba(155,112,87,0.06)",
                  backdropFilter: "blur(8px)",
                  fontFamily: "Outfit, sans-serif",
                  textDecoration: "none",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>

          </div>

        </div>
      </section>
    </>
  );
}
