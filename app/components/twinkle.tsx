"use client";

import React, { useMemo } from 'react';
import { Star } from './star';

export function Twinkle() {
  const stars = useMemo(() => {
    const count = 500;
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <Star
          key={i}
          top={Math.random() * 100}
          left={Math.random() * 100}
          size={Math.random()* 3}
          duration={Math.random()}
          delay={Math.random() * 100}
        />
      );
    }
    return stars;
  }, []);

  return (
    <div>{stars}</div>
  );
}
