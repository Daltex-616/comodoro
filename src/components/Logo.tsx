
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="60,20 85,35 85,65 60,80 35,65 35,35" fill="#4B9CD3" />
        <polygon points="60,40 85,55 60,70 35,55" fill="#7B2CBF" />
        <polygon points="60,40 60,70 35,55" fill="#E63E6D" />
        <polygon points="60,40 85,55 60,70" fill="#50B4A1" />
        <polygon points="85,55 60,70 85,65" fill="#E59F33" />
      </svg>
    </div>
  );
};
