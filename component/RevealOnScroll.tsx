// 'use client'

// import React, { useEffect, useRef, useState } from 'react';

// interface RevealOnScrollProps {
//   children: React.ReactNode;
//   direction?: 'left' | 'right' | 'up' | 'down';
//   delay?: number;        // delay in ms
//   duration?: number;     // duration in ms
//   className?: string;
// }

// const RevealOnScroll = ({
//   children,
//   direction = 'left',
//   delay = 0,
//   duration = 700,
//   className = '',
// }: RevealOnScrollProps) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setTimeout(() => setVisible(true), delay);
//           observer.disconnect(); // animate only once
//         }
//       },
//       { threshold: 0.15 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [delay]);

//   const getTransform = () => {
//     if (visible) return 'translate(0, 0)';
//     switch (direction) {
//       case 'left':  return 'translate(-60px, 0)';
//       case 'right': return 'translate(60px, 0)';
//       case 'up':    return 'translate(0, -60px)';
//       case 'down':  return 'translate(0, 60px)';
//       default:      return 'translate(-60px, 0)';
//     }
//   };

//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         transform: getTransform(),
//         opacity: visible ? 1 : 0,
//         transition: `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, opacity ${duration}ms ease ${delay}ms`,
//         willChange: 'transform, opacity',
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default RevealOnScroll;


'use client'

import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;        // delay in ms
  duration?: number;     // duration in ms
  className?: string;
}

const RevealOnScroll = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 700,
  className = '',
}: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (visible) return 'translate(0, 0)';
    switch (direction) {
      case 'left':  return 'translate(-40px, 0)';
      case 'right': return 'translate(40px, 0)';
      case 'up':    return 'translate(0, 30px)';
      case 'down':  return 'translate(0, -30px)';
      default:      return 'translate(-40px, 0)';
    }
  };

  return (
    // ✅ outer div: overflow-hidden clips the moving element so it won't cause horizontal scroll or layout shift
    // ✅ w-full + h-full: ensures the wrapper fills the grid/flex cell properly
    <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
      <div
        ref={ref}
        className={className}
        style={{
          transform: getTransform(),
          opacity: visible ? 1 : 0,
          transition: `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, opacity ${duration}ms ease ${delay}ms`,
          willChange: 'transform, opacity',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default RevealOnScroll;