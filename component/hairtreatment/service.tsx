"use client";

import { useState, useRef, useEffect } from "react";
import RevealOnScroll from "./RevealOnScroll";

const treatments = [
  {
    id: "regenera",
    number: "01",
    tag: "Regenerative",
    name: "Regenera Activa",
    subtitle: "Regenera Activa is an advanced hair restoration treatment designed to support hair follicles at the cellular level and improve hair density.",
    description:
      "Unlike traditional treatments that require multiple sessions, this procedure is typically performed in a single treatment session, depending on suitability.",
    idealFor: [
      "Progressive hair thinning",
      "Early-stage baldness",
      "Reduced hair density",
      "Individuals seeking advanced hair restoration",
    ],
    image: "https://ik.imagekit.io/xivdiehvf/download5.jpg",
    imageAlt: "Regenera Activa hair restoration treatment",
  },
  {
    id: "prp",
    number: "02",
    tag: "Hair Follicle Stimulation ",
    name: "PRP Hair Therapy",
    subtitle: "Platelet-rich plasma injected into the scalp to stimulate dormant follicles and accelerate natural hair regrowth.",
    description:
      "A regenerative treatment that uses platelet-rich plasma derived from your own blood to stimulate hair follicles and support natural hair growth.",
    idealFor: [
      "Early-stage hair loss",
      "Hair thinning and reduced density",
      "Weak hair follicles",
      "Slowing progressive hair fall",
    ],
    image: "https://ik.imagekit.io/xivdiehvf/download6.avif",
    imageAlt: "PRP platelet rich plasma hair therapy",
  },
  {
    id: "gfc",
    number: "03",
    tag: "Advanced Growth Factor Therapy",
    name: "GFC Hair Treatment",
    subtitle: "A highly concentrated growth factor treatment that delivers superior results compared to standard GFC.",
    description:
      "Growth Factor Concentrate therapy is designed to deliver concentrated growth factors directly to the scalp to support follicle health and improve hair density.",
    idealFor: [
      "Moderate hair thinning",
      "Hair fall due to stress or lifestyle factors",
      "Improving scalp health",
      "Supporting stronger hair growth",
    ],
    image: "https://ik.imagekit.io/xivdiehvf/download7.webp",
    imageAlt: "GFC growth factor concentrate hair treatment",
  },
  {
    id: "lllt",
    number: "04",
    tag: "Follicle Strengthening Treatment",
    name: "BioReselle Hair Restoration",
    subtitle: "A non-invasive, painless treatment that uses low-level laser therapy to strengthen hair follicles and improve scalp health.",
    description:
      "A regenerative therapy designed to strengthen weak follicles and improve scalp environment for healthier hair growth.",
    idealFor: [
      "Weak hair roots",
      "Hair thinning in crown area",
      "Poor scalp condition",
      "Hair density improvement",
    ],
    image: "https://ik.imagekit.io/xivdiehvf/download4.jpg",
    imageAlt: "LLLT low level laser therapy for hair",
  },
  {
    id: "qr678",
    number: "05",
    tag: "Next-Generation Hair Restoration Technology",
    name: "QR 678 PReo",
    subtitle: "We’re proud to introduce QR 678 PReo, a breakthrough in advanced hair science — now available for the first time in India.",
    description:
      "Hair loss is progressive, and traditional treatments may not always deliver optimal results for every stage of hair thinning. ",
    idealFor: [
      " QR 678 PReo represents the next generation of precision hair restoration",
      "designed to support stronger",
      "healthier hair growth by targeting follicle health more effectively.",
      "Developed using advanced growth factor technology, ",
    ],
    image: "https://ik.imagekit.io/xivdiehvf/microscopic.avif",
    imageAlt: "LLLT low level laser therapy for hair",
  },
];

function ContactForm() {
  return (
    <div className="mt-5 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9B7057", marginBottom: 10 }}>
        Book a Consultation
      </p>
      <div style={{ display: "flex", gap: 8, marginTop: 2 }}>
        <a className="htp-cta"
          href="#"
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-booking-modal")); }}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // background: "linear-gradient(90deg,#9B7057,#c4906e)",
            color: "white",
            fontWeight: 600,
            fontSize: 13,
            padding: "10px 0",
            // borderRadius: 10,
            // boxShadow: "0 4px 16px rgba(155,112,87,0.3)",
            textDecoration: "none",
          }}
        >
          Book Now
        </a>
        <a
          href="tel:+919500653243"
          className="sk-call-link"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "white",
            fontWeight: 600,
            fontSize: 13,
            padding: "10px 16px",
            borderRadius: 10,
            textDecoration: "none",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="white" />
          </svg>
          Call Us
        </a>
      </div>
    </div>
  );
}

export default function SkinTreatments() {
  const [active, setActive] = useState(treatments[0].id);
  const current = treatments.find((t) => t.id === active) ?? treatments[0];
  const activeIndex = treatments.findIndex((t) => t.id === active);
  const tabsScrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isMounted = useRef(false);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);

  // Start rotating only when section is visible
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-rotate every 3.5s only when visible and not paused
  useEffect(() => {
    if (!inView || paused) return;
    const timer = setInterval(() => {
      setActive((cur) => {
        const idx = treatments.findIndex((t) => t.id === cur);
        return treatments[(idx + 1) % treatments.length].id;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, [inView, paused]);

  // Scroll active tab into view (container only — no page scroll)
  useEffect(() => {
    if (!isMounted.current) { isMounted.current = true; return; }
    const container = tabsScrollRef.current;
    const el = container?.querySelector<HTMLButtonElement>(".sk-tab.active");
    if (!container || !el) return;
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const targetLeft = container.scrollLeft + elRect.left - containerRect.left - (containerRect.width - elRect.width) / 2;
    container.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [active]);

  const handleTabClick = (id: string) => {
    setPaused(true);
    setActive(id);
  };

  const goPrev = () => { setPaused(true); if (activeIndex > 0) setActive(treatments[activeIndex - 1].id); };
  const goNext = () => { setPaused(true); if (activeIndex < treatments.length - 1) setActive(treatments[activeIndex + 1].id); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap');

        .sk-root * { box-sizing: border-box; }
        .sk-root { font-family: 'Outfit', sans-serif; }
        // .sk-serif { font-family: 'Cormorant Garamond', serif; }  

        .sk-eyebrow-l { height: 1px; width: 60px; background: linear-gradient(90deg, transparent, #9B7057); }
        .sk-eyebrow-r { height: 1px; width: 60px; background: linear-gradient(90deg, #9B7057, transparent); }

        .sk-italic-accent {
          // font-family: "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 700;
          background: linear-gradient(90deg, #9B7057, #c4906e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sk-fade {
          animation: skFade 0.38s ease forwards;
        }
        @keyframes skFade {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sk-tab {
          flex: 1;
          text-align: left;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          cursor: pointer;
          transition: border-color 0.22s, background 0.22s;
          white-space: nowrap;
        }
        .sk-tab:hover { border-color: rgba(155,112,87,0.25); }
        .sk-tab.active {
          border-color: rgba(155,112,87,0.55) !important;
          background: rgba(155,112,87,0.07) !important;
        }

        .sk-ideal li {
          position: relative;
          padding-left: 15px;
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          line-height: 1.65;
        }
        .sk-ideal li::before {
          content: '';
          position: absolute;
          left: 0; top: 8px;
          width: 5px; height: 5px;
          background: #9B7057;
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(155,112,87,0.5);
        }

        .sk-img-wrap {
          position: relative;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: #111;
          min-height: 360px;
        }

        .sk-tabs-scroll {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 4px;
        }
        .sk-tabs-scroll::-webkit-scrollbar { display: none; }

        .sk-arrow {
          display: none;
          flex-shrink: 0;
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          color: white;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
        }
        .sk-arrow:hover:not(:disabled) {
          background: rgba(155,112,87,0.2);
          border-color: rgba(155,112,87,0.5);
        }
        .sk-arrow:disabled { opacity: 0.25; cursor: default; }

        .sk-call-link { display: none; }

        /* ── Auto-progress bar ── */
        .sk-progress-bar {
          height: 2px;
          background: rgba(155,112,87,0.15);
          border-radius: 2px;
          margin-bottom: 16px;
          overflow: hidden;
        }
        .sk-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #9B7057, #c4906e);
          border-radius: 2px;
          transform-origin: left;
        }
        @keyframes sk-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .sk-progress-fill.running {
          animation: sk-progress 3s linear forwards;
        }

        @media (max-width: 1023px) {
          .sk-grid { grid-template-columns: 1fr !important; }
          .sk-img-wrap { min-height: 260px; }
        }

        @media (max-width: 640px) {
          .sk-arrow { display: flex; }
          .sk-tabs-row { display: flex; align-items: center; gap: 8px; }
          .sk-tabs-scroll { flex: 1; }
          .sk-img-wrap { min-height: 220px; }
          .sk-call-link { display: flex !important; }
          .sk-main-heading { font-size: 22px !important; }
          .sk-accent-heading { font-size: 20px !important; }
          .sk-card-title { font-size: 20px !important; }
          .sk-header-desc { font-size: 14px !important; }
          .sk-subtitle { font-size: 14px !important; }
          .sk-desc { font-size: 14px !important; }
          .sk-ideal li { font-size: 14px !important; }
        }
      `}</style>

      <section  id="anlon-treatments"  ref={sectionRef} className="sk-root max-sm:py-5" style={{ background:"#080808", padding: "64px 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* ── Header ── */}
          <RevealOnScroll direction="up" duration={700}>
            <div style={{ marginBottom: 40, textAlign: "center" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 10 }}>
                <div className="sk-eyebrow-l" />
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#9B7057" }}>
                  Hair Treatments
                </span>
                <div className="sk-eyebrow-r" />
              </div>
              <h2 className="sk-main-heading" style={{ fontSize: "clamp(30px,5vw,48px)", fontWeight: 700, color: "white", lineHeight: 1.2, margin: "0 0 4px" }}>
                Advanced Treatments For
              </h2>
              <h2 className="sk-italic-accent sk-accent-heading" style={{ fontSize: "clamp(28px,4.5vw,44px)", lineHeight: 1.25, margin: "0 0 16px" }}>
                Every Hair Goal.
              </h2>
              <p className="sk-header-desc" style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, maxWidth: 580, lineHeight: 1.7, margin: "0 auto" }}>
                Five clinically proven hair treatments. Each designed for a specific hair concern — all supervised personally by our expert dermatologists.
              </p>
            </div>
          </RevealOnScroll>

          {/* ── Auto-progress bar ── */}
          {!paused && inView && (
            <div className="sk-progress-bar" style={{ marginBottom: 12 }}>
              <div key={active} className="sk-progress-fill running" />
            </div>
          )}

          {/* ── Tabs ── */}
          <RevealOnScroll direction="up" duration={700} delay={150}>
            <div className="sk-tabs-row" style={{ marginBottom: 24 }}>
              <button className="sk-arrow" onClick={goPrev} disabled={activeIndex === 0} aria-label="Previous">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="sk-tabs-scroll" ref={tabsScrollRef}>
                {treatments.map((t) => (
                  <button key={t.id} onClick={() => handleTabClick(t.id)} className={`sk-tab${active === t.id ? " active" : ""}`}>
                    <span style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 3, color: active === t.id ? "#9B7057" : "rgba(255,255,255,0.22)" }}>
                      {t.number}
                    </span>
                    <span style={{ display: "block", fontSize: 13, fontWeight: 600, lineHeight: 1.35, color: active === t.id ? "#fff" : "rgba(255,255,255,0.45)" }}>
                      {t.name}
                    </span>
                    <span style={{ display: "block", fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 3, color: active === t.id ? "rgba(155,112,87,0.8)" : "rgba(255,255,255,0.16)" }}>
                      {t.tag}
                    </span>
                  </button>
                ))}
              </div>

              <button className="sk-arrow" onClick={goNext} disabled={activeIndex === treatments.length - 1} aria-label="Next">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </RevealOnScroll>

          {/* ── Content Card ── */}
          <RevealOnScroll direction="up" duration={700} delay={250}>
            <div
              key={active}
              className="sk-fade sk-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
            >
              {/* LEFT — Image */}
              <div className="sk-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: 14, left: 14 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.82)", background: "rgba(0,0,0,0.48)", border: "1px solid rgba(255,255,255,0.14)", padding: "5px 12px", borderRadius: 20, backdropFilter: "blur(6px)" }}>
                    {current.name}
                  </span>
                </div>
              </div>

              {/* RIGHT — Info */}
              <div style={{ display: "flex", flexDirection: "column" }}>

                {/* number + tag row */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#9B7057" }}>
                    {current.number}
                  </span>
                  <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: 20 }}>
                    {current.tag}
                  </span>
                </div>

                {/* title */}
                <h3 className="sk-serif sk-card-title" style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: 8 }}>
                  {current.name}
                </h3>

                {/* subtitle */}
                <p className="sk-subtitle" style={{ color: "#c4906e", fontSize: 13, fontWeight: 500, lineHeight: 1.55, marginBottom: 12 }}>
                  {current.subtitle}
                </p>

                {/* description */}
                <p className="sk-desc" style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.75, marginBottom: 16 }}>
                  {current.description}
                </p>

                {/* ideal for */}
                <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "14px 16px" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9B7057", marginBottom: 10 }}>
                    Ideal For
                  </p>
                  <ul className="sk-ideal" style={{ display: "flex", flexDirection: "column", gap: 7, listStyle: "none", margin: 0, padding: 0 }}>
                    {current.idealFor.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <ContactForm />
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>
    </>
  );
}
