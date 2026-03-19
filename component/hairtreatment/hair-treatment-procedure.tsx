"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Scalp & Hair Evaluation",
    description:
      "Your journey begins with a detailed consultation where scalp condition, hair loss pattern, and follicle health are carefully evaluated.",
    tag: "Consultation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" strokeWidth={2} />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Diagnosis & Root Cause Analysis",
    description:
      "Advanced trichoscopy and scalp analysis tools identify the root cause — hormonal, nutritional, or genetic.",
    tag: "Diagnosis",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Personalised Treatment Planning",
    description:
      "A customised plan is crafted — from PRP and GFC to LLLT or transplant options, tailored to your specific condition.",
    tag: "Planning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Doctor-Supervised Treatment Session",
    description:
      "The treatment is performed in a safe clinical environment under direct medical supervision by expert dermatologists.",
    tag: "Treatment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Follow-Up & Progress Monitoring",
    description:
      "Regular follow-up consultations and progress tracking to monitor results and fine-tune your personalised plan.",
    tag: "Follow-Up",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function HairTreatmentProcedure() {
  const { ref, visible } = useInView();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => setActiveStep(p => (p + 1) % STEPS.length), 2500);
    return () => clearInterval(t);
  }, [visible]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        .htp-root { font-family: 'Outfit', sans-serif; }

        /* ── Section background ── */
        .htp-section {
          background: #faf8f6;
          position: relative;
          overflow: hidden;
        }
        .htp-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 15% 0%,  rgba(155,112,87,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 85% 100%, rgba(155,112,87,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .htp-section-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(155,112,87,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(155,112,87,0.06) 1px, transparent 1px);
          background-size: 56px 56px;
          pointer-events: none;
        }

        /* ── Header ── */
        .htp-eyebrow {
          display: inline-flex; align-items: center; gap: 9px;
          border: 1px solid rgba(155,112,87,0.3);
          background: rgba(155,112,87,0.08);
          border-radius: 100px;
          padding: 6px 18px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: #c4906e;
        }
        .htp-eyebrow-dot {
          width: 6px; height: 6px;
          background: #9B7057; border-radius: 50%;
          animation: htp-blink 1.4s ease-in-out infinite;
        }
        @keyframes htp-blink {
          0%,100% { opacity: 1; } 50% { opacity: 0.25; }
        }

        /* ── Step reveal ── */
        .htp-item {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        .htp-item.htp-in { opacity: 1; transform: translateY(0); }

        /* ── Card ── */
        .htp-card {
          position: relative;
          border-radius: 22px;
          border: 1px solid #ede8e3;
          background: #ffffff;
          padding: 28px 24px 26px;
          height: 100%;
          overflow: hidden;
          transition: border-color 0.35s, background 0.35s, transform 0.35s, box-shadow 0.35s;
          cursor: default;
          box-shadow: 0 2px 12px rgba(155,112,87,0.06);
        }
        .htp-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(155,112,87,0.05) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .htp-card.htp-active,
        .htp-card:hover {
          border-color: rgba(155,112,87,0.35);
          background: #fff9f6;
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(155,112,87,0.14), 0 0 0 1px rgba(155,112,87,0.15);
        }
        .htp-card.htp-active::after,
        .htp-card:hover::after { opacity: 1; }

        /* ── Top accent bar ── */
        .htp-card-accent {
          position: absolute;
          top: 0; left: 24px; right: 24px;
          height: 2px;
          background: linear-gradient(90deg, #9B7057, #c4906e, transparent);
          border-radius: 0 0 4px 4px;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .htp-card.htp-active .htp-card-accent,
        .htp-card:hover .htp-card-accent { opacity: 1; }

        /* ── Step number bg ── */
        .htp-bg-num {
          position: absolute;
          bottom: -12px; right: 10px;
          font-size: 88px; font-weight: 900;
          line-height: 1; letter-spacing: -6px;
          color: rgba(155,112,87,0.06);
          user-select: none; pointer-events: none;
          transition: color 0.35s ease;
        }
        .htp-card.htp-active .htp-bg-num,
        .htp-card:hover .htp-bg-num { color: rgba(155,112,87,0.11); }

        /* ── Icon circle ── */
        .htp-icon-ring {
          width: 54px; height: 54px;
          border-radius: 16px;
          background: rgba(155,112,87,0.1);
          border: 1px solid rgba(155,112,87,0.2);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          transition: background 0.35s, border-color 0.35s, box-shadow 0.35s;
          flex-shrink: 0;
        }
        .htp-icon-ring svg {
          width: 22px; height: 22px;
          color: rgba(155,112,87,0.75);
          transition: color 0.35s, filter 0.35s, transform 0.35s;
        }
        .htp-card.htp-active .htp-icon-ring,
        .htp-card:hover .htp-icon-ring {
          background: rgba(155,112,87,0.18);
          border-color: rgba(155,112,87,0.45);
          box-shadow: 0 0 18px rgba(155,112,87,0.2);
        }
        .htp-card.htp-active .htp-icon-ring svg,
        .htp-card:hover .htp-icon-ring svg {
          color: #c4906e;
          filter: drop-shadow(0 0 5px rgba(155,112,87,0.5));
          transform: scale(1.1);
        }

        /* ── Step pill ── */
        .htp-pill {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #9B7057;
          background: rgba(155,112,87,0.1);
          border: 1px solid rgba(155,112,87,0.2);
          border-radius: 100px;
          padding: 3px 10px;
          margin-bottom: 10px;
        }

        .htp-card-title {
          font-size: 15px; font-weight: 700;
          color: #1a1a1a; line-height: 1.35;
          margin-bottom: 10px;
        }
        .htp-card-desc {
          font-size: 13px; color: #6b7280;
          line-height: 1.75; font-weight: 400;
        }

        /* ── Desktop timeline track ── */
        .htp-track-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
        }
        .htp-track {
          position: absolute;
          top: 38%; left: 5%;
          right: 5%;
          height: 2px;
          background: rgba(155,112,87,0.18);
          transform: translateY(-50%);
          border-radius: 2px;
          overflow: hidden;
        }
        .htp-track-fill {
          height: 100%;
          background: linear-gradient(90deg, #9B7057, #c4906e);
          border-radius: 2px;
          transition: width 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .htp-track-nodes {
          position: relative;
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .htp-node {
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          cursor: pointer;
          position: relative; z-index: 2;
        }
        .htp-node-circle {
          width: 46px; height: 46px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 800;
          border: 2px solid rgba(155,112,87,0.2);
          background: #ffffff;
          color: rgba(155,112,87,0.4);
          transition: all 0.35s ease;
          position: relative;
          box-shadow: 0 2px 8px rgba(155,112,87,0.1);
        }
        .htp-node-circle::before {
          content: '';
          position: absolute; inset: -5px;
          border-radius: 50%;
          border: 2px solid transparent;
          transition: border-color 0.35s ease;
        }
        .htp-node.htp-node-active .htp-node-circle {
          background: #9B7057;
          border-color: #c4906e;
          color: #ffffff;
          box-shadow: 0 0 20px rgba(155,112,87,0.55), 0 0 0 6px rgba(155,112,87,0.1);
        }
        .htp-node.htp-node-done .htp-node-circle {
          background: #ffffff;
          border-color: rgba(155,112,87,0.5);
          color: #c4906e;
        }
        .htp-node-label {
          font-size: 11px; font-weight: 600;
          color: #b0a89e;
          letter-spacing: 0.5px;
          text-align: center; max-width: 80px;
          transition: color 0.35s ease;
        }
        .htp-node.htp-node-active .htp-node-label { color: #9B7057; }
        .htp-node.htp-node-done .htp-node-label { color: rgba(155,112,87,0.7); }

        /* ── CTA button ── */
        @keyframes htp-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .htp-cta {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 32px; border: none; border-radius: 50px;
          font-family: 'Outfit', sans-serif;
          font-size: 15px; font-weight: 700; letter-spacing: 0.3px;
          color: #ffffff; cursor: pointer; text-decoration: none;
          background: linear-gradient(90deg, #9B7057 0%, #c4906e 40%, #9B7057 60%, #7d5a42 100%);
          background-size: 200% auto;
          animation: htp-shimmer 3s linear infinite;
          box-shadow: 0 6px 24px rgba(155,112,87,0.4);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .htp-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(155,112,87,0.55);
        }

        @media (max-width: 1023px) {
          .htp-track-wrap { display: none; }
        }
        @media (max-width: 640px) {
          .htp-main-heading { font-size: 1.5rem !important; }
          .htp-header-desc { font-size: 14px !important; }
          .htp-card-title { font-size: 14px; }
          .htp-card-desc { font-size: 14px; }
          .htp-cta-sub { font-size: 14px !important; }
        }
      `}</style>

      <section id="procedure" className="htp-root htp-section py-10 lg:py-14">
        <div className="htp-section-grid" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <div className="text-center max-sm:mb-6 mb-12">
            <span className="htp-eyebrow">
              <span className="htp-eyebrow-dot" />
              How It Works
            </span>
            <h2 className="htp-main-heading" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 900, color: "#1a1a1a", marginTop: 16, marginBottom: 12, lineHeight: 1.15, letterSpacing: "-0.5px" }}>
              Hair Treatment{" "}
              <span style={{ color: "#9B7057" }}>Procedure</span>
            </h2>
            <p className="htp-header-desc" style={{ fontSize: 15, color: "#6b7280", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
              A simple, doctor-guided process designed for visible, lasting hair restoration results.
            </p>
          </div>

          {/* ── Desktop Timeline Track ── */}
          <div className="htp-track-wrap hidden lg:flex">
            <div className="htp-track">
              <div
                className="htp-track-fill"
                style={{ width: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
              />
            </div>
            <div className="htp-track-nodes w-full px-8">
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  className={`htp-node ${i === activeStep ? "htp-node-active" : i < activeStep ? "htp-node-done" : ""}`}
                  onClick={() => setActiveStep(i)}
                >
                  <div className="htp-node-circle">
                    {i < activeStep ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : step.number}
                  </div>
                  <span className="htp-node-label">{step.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Cards Grid ── */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className={`htp-item ${visible ? "htp-in" : ""}`}
                style={{ transitionDelay: `${i * 110}ms` }}
                onMouseEnter={() => setActiveStep(i)}
              >
                <div className={`htp-card ${i === activeStep ? "htp-active" : ""}`}>
                  <div className="htp-card-accent" />
                  <span className="htp-bg-num">{step.number}</span>

                  <div className="htp-icon-ring">{step.icon}</div>

                  <span className="htp-pill">Step {step.number}</span>
                  <h3 className="htp-card-title">{step.title}</h3>
                  <p className="htp-card-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="text-center max-sm:mt-6 mt-14">
            <p className="htp-cta-sub" style={{ fontSize: 13, color: "#9ca3af", marginBottom: 18, fontWeight: 500, letterSpacing: "0.3px" }}>
              Begin your personalised hair restoration journey today
            </p>
            <a
              href="#"
              className="htp-cta"
              onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-booking-modal")); }}
            >
              Book a Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
