import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({ className = "", size = "md" }: BrandLogoProps) {
  // Sizing mapping
  const sizeClasses = {
    sm: {
      svg: "w-10 h-10",
      apaga: "text-lg tracking-wide",
      tuCabeza: "text-xs tracking-wider",
      minutes: "text-[8px] tracking-[0.15em]"
    },
    md: {
      svg: "w-16 h-16",
      apaga: "text-2xl tracking-widest",
      tuCabeza: "text-sm tracking-widest",
      minutes: "text-[10px] tracking-[0.2em]"
    },
    lg: {
      svg: "w-24 h-24",
      apaga: "text-4xl tracking-widest",
      tuCabeza: "text-xl tracking-widest",
      minutes: "text-xs tracking-[0.25em]"
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex flex-col items-center lg:items-start text-center lg:text-left select-none ${className}`}>
      {/* SVG Vector Drawing of the Head Graphic */}
      <svg
        className={`${currentSize.svg} text-slate-100 mb-2 transition-transform duration-300 hover:scale-105`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sleeping eye arc */}
        <path
          d="M 33 49 C 34.5 51, 37.5 51, 39 49"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Head Profile Outline facing left */}
        <path
          d="M 68 82 
             C 73 78, 77 68, 77 56 
             C 77 34, 65 19, 50 19 
             C 38 19, 29 27, 27 38 
             C 27 41, 26 43, 24 45 
             C 22 47, 21 47, 22 50 
             C 23 53, 26 53, 24 56 
             C 23.5 57, 24 59, 26 59 
             C 28 59, 29 62, 29 65 
             C 29 69, 26 71, 31 75 
             C 35 78, 41 81, 46 81"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Headset/Power button design matching the blue color */}
        {/* Outer ring (power symbol with upper opening) */}
        <path
          d="M 47.5 44 A 10 10 0 1 0 58.5 44"
          stroke="#38bdf8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Inner vertical power line */}
        <path
          d="M 53 38 L 53 47"
          stroke="#38bdf8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col items-center lg:items-start">
        <span className={`font-extrabold ${currentSize.apaga} text-white uppercase leading-none font-sans`}>
          APAGA
        </span>
        <span className={`font-semibold ${currentSize.tuCabeza} text-cyan-400 uppercase tracking-widest mt-0.5 leading-none font-sans`}>
          TU CABEZA
        </span>
        <div className="flex items-center gap-1.5 mt-1.5 w-full justify-center lg:justify-start">
          <div className="h-[1px] w-4 bg-slate-700" />
          <span className={`font-medium ${currentSize.minutes} text-slate-400 uppercase leading-none font-sans`}>
            en 15 minutos
          </span>
          <div className="h-[1px] w-4 bg-slate-700" />
        </div>
      </div>
    </div>
  );
}
