"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "#anlon-treatments" },
  { label: "Doctor", href: "#doctor" },
  { label: "Procedure", href: "#procedure" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`nb-root ${scrolled ? "scrolled" : "top"}`}>
        <div className="nb-inner">
          {/* Logo */}
          <Link href="/" className="nb-logo">
            <Image
                src="https://ik.imagekit.io/xivdiehvf/logos.png"
                alt="CrowMedi Logo"
                width={160}
                height={52}
                style={{ objectFit: "contain", width: "160px", height: "52px" }}
              />  
          </Link>

          {/* Desktop links */}
          <ul className="nb-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="nb-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="tel:+919500653243" onClick={e => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-booking-modal")); }} className="btn-cta nb-cta">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="white"/>
            </svg>
            +919500653243
          </a>

          {/* Hamburger */}
          <button
            className={`nb-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="nb-bar" />
            <span className="nb-bar" />
            <span className="nb-bar" />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`nb-mobile-menu ${menuOpen ? "open" : ""}`}>
          <div className="nb-mobile-inner">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nb-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="nb-mobile-divider" />
            <Link
              href="#"
              className="btn-cta flex justify-center"
              onClick={() => { setMenuOpen(false); window.dispatchEvent(new CustomEvent("open-booking-modal")); }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="white"/>
              </svg>
              Book Your Consultation
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
