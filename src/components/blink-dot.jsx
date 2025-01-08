import React from 'react';

const BlinkingDot = ({ size = 'h-[0.625rem] w-[0.625rem]', className = '' }) => {
  return (
    <div 
      className={`
        relative 
        inline-flex 
        ${size} 
        ${className}
      `}
    >
      <div className="absolute w-full h-full rounded-full bg-red-500 animate-[ping_1.5s_ease-in-out_infinite]" />
      <div className="relative rounded-full bg-red-600 w-full h-full" />
    </div>
  );
};

export default BlinkingDot;