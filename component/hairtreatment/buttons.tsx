'use client'

import React, { useState } from 'react';

const ButtonAnimation = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Animation classes based on hover state
  const getAnimatedButtonClasses = () => {
    if (isHovering) {
      return 'animate-bounce bg-red-500 scale-110';
    }
    return 'bg-teal-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center font-sans">
      
      {/* Explanation text */}
      <div className="text-white text-sm mb-5 opacity-90">
        Hover over the red button to animate the teal button
      </div>

      {/* Button container */}
      <div className="flex flex-col items-center gap-4">
        
        {/* First Button - Static Color */}
        <button
          className="bg-red-500 text-white border-none px-10 py-4 text-lg rounded-full cursor-pointer m-5 shadow-lg transform transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Hover Me!
        </button>

        {/* Second Button - Animated */}
        <button
          className={`
            text-white border-none px-10 py-4 text-lg rounded-full cursor-pointer m-5 shadow-lg
            transition-all duration-300
            ${getAnimatedButtonClasses()}
            ${isHovering ? 'animate-pulse' : ''}
            hover:animate-shake hover:bg-teal-600
          `}
        >
          I Animate!
        </button>
      </div>

      {/* Second explanation */}
      <div className="text-white text-sm mt-12 opacity-90">
        The teal button bounces and changes color when you hover over the red button
      </div>
    </div>
  );
};

// Add custom animations to Tailwind
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
  .animate-shake {
    animation: shake 0.5s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default ButtonAnimation; 