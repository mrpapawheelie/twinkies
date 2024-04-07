import React from 'react';

interface StarProps {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export function Star({ top, left, size, duration, delay }: StarProps) {
    return (
        <div
        className="absolute rounded-full bg-white/70 animate-pulse ease-in-out duration-1000"
        style={{
            top: `${top}%`,
            left: `${left}%`,
            width: size,
            height: size,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
        }}
        />
    );
}