"use client";

import React from "react";

const Footers = () => {
  return (
    <footer className="w-full bg-white border-t py-6">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center gap-3">

        {/* Logo */}
        <img
          src="/logos.png"
          alt="Sculpt Clinic Logo"
          className="w-32 h-auto object-contain"
        />

        {/* Two Lines */}
        <p className="text-sm text-gray-600">
          Alon & Hair Treatments • Trusted Results
        </p>

        <p className="text-xs text-gray-400">
          © 2026 Alon. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footers;
