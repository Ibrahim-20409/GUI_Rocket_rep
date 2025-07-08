import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  targetValue: number;
  duration?: number;
  decimals?: number;
  unit?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  targetValue, 
  duration = 2000, 
  decimals = 2, 
  unit = '',
  className = ''
}) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Use easeOutCubic for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const newValue = targetValue * easeOutCubic;
      
      setCurrentValue(newValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [targetValue, duration]);

  const formatValue = (value: number) => {
    if (decimals === 0) {
      return Math.round(value).toLocaleString();
    }
    return value.toFixed(decimals);
  };

  return (
    <span className={className}>
      {formatValue(currentValue)}
      {unit && <span className="text-lg text-gray-400 ml-1">{unit}</span>}
    </span>
  );
};