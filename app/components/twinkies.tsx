'use client';

import { useEffect, useRef } from 'react';

const Twinkies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const starCount = 250;
    const starSize = 2;
    const starSpeed = 0.5;
    const starOpacity = 0.5;
    let intervals: NodeJS.Timeout[] = [];

    if (containerRef.current) {
      const nightSky = containerRef.current;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star absolute bg-white rounded-full';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.width = starSize + 'px';
        star.style.height = starSize + 'px';
        star.style.opacity = starOpacity.toString();
        star.style.transition = `opacity ${starSpeed}s`;
        // Make the stars twinkle continuously
        const intervalId = setInterval(function() {
          const opacity = Math.random() * 0.5 + 0.5;
          star.style.opacity = opacity.toString();
        }, starSpeed * 1000);
        intervals.push(intervalId);
        nightSky.appendChild(star);
      }
    }

    return () => {
      intervals.forEach((intervalId) => clearInterval(intervalId));
    };
  }, []);

  return <div ref={containerRef} className="nightSky -z-10 absolute w-full h-full bg-black" />;
};

export default Twinkies;
