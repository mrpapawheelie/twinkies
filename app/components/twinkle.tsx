'use client'

import React, { useState, useEffect } from 'react';

interface StarProps {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const Star: React.FC<StarProps> = ({ top, left, size, duration, delay }) => {
  return (
    <div
      className={`absolute rounded-full bg-white animate-pulse`}
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: size,
        height: size,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
      }}
    />
  );
};

const Twinkle: React.FC = () => {
  const starCount: number = 100;
  const starSize: number = 2;
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newStars: JSX.Element[] = [];

    for (let i = 0; i < starCount; i++) {
      newStars.push(
        <Star
          key={i}
          top={Math.random() * 100}
          left={Math.random() * 100}
          size={starSize}
          duration={Math.random() * 1.5 + 0.5}
          delay={Math.random() * 0.5}
        />
      );
    }

    setStars(newStars);
  }, []);

  return <div className={`relative w-full h-full bg-black`}>{stars}</div>;
};

export default Twinkle;
