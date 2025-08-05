import React from 'react';

interface AnimatedDottedBackgroundProps {
  opacity?: number;
  color?: string;
  size?: number;
  spacing?: number;
  className?: string;
}

const AnimatedDottedBackground: React.FC<AnimatedDottedBackgroundProps> = ({
  opacity = 0.4,
  color = '%239C92AC',
  size = 4,
  spacing = 60,
  className = ""
}) => {
  const dotPattern = `url("data:image/svg+xml,%3Csvg width='${spacing}' height='${spacing}' viewBox='0 0 ${spacing} ${spacing}' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${color}' fill-opacity='0.05'%3E%3Ccircle cx='${spacing/2}' cy='${spacing/2}' r='${size}'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
  
  return (
    <div 
      className={`absolute inset-0 transition-all duration-500 ease-out hover:scale-105 ${className}`}
      style={{
        backgroundImage: dotPattern,
        opacity: opacity,
        animation: 'gentle-pulse 8s ease-in-out infinite'
      }}
    />
  );
};

export default AnimatedDottedBackground;