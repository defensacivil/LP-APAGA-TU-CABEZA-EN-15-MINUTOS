import React from "react";

export default function BookMockup() {
  return (
    <div id="book-mockup-container" className="relative group perspective-1000 py-6 px-4 flex justify-center items-center">
      {/* 3D Wrapper */}
      <div 
        id="book" 
        className="relative w-56 h-80 sm:w-64 sm:h-96 rounded-r-lg shadow-2xl transition-transform duration-700 ease-out transform rotate-y-[-18deg] group-hover:rotate-y-[-8deg] preserve-3d"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
        }}
      >
        {/* Book Spine (Left Edge Thickness) */}
        <div 
          id="book-spine" 
          className="absolute top-0 bottom-0 left-0 w-4 bg-slate-950 rounded-l-sm origin-left transform rotate-y-[-90deg] translate-z-0"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(255,255,255,0.1) 40%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        {/* Book Edge (Pages on Right Side) */}
        <div 
          id="book-pages" 
          className="absolute top-1 bottom-1 -right-2 w-3 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-r-sm transform translate-z-[-8px] border-r border-y border-slate-300"
          style={{
            clipPath: "polygon(0 0, 100% 2%, 100% 98%, 0 100%)"
          }}
        />

        {/* Book Front Cover */}
        <div 
          id="book-cover" 
          className="absolute inset-0 bg-slate-950 rounded-r-md overflow-hidden flex flex-col justify-between p-6 border-l-2 border-indigo-500/20 shadow-inner translate-z-0"
        >
          {/* Newly Generated Custom Cover Image Background */}
          <img 
            src="/src/assets/images/sleep_tech_cover_1781026719400.png" 
            alt="Cubierta de Apaga Tu Cabeza"
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen pointer-events-none"
            referrerPolicy="no-referrer"
          />

          {/* Subtle elegant glowing concentric circles background */}
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full border border-indigo-500/5 pointer-events-none" />
          <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full border border-indigo-400/5 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-teal-500/5 pointer-events-none animate-pulse" />

          {/* Badge */}
          <div className="z-10 flex justify-between items-center text-[9px] uppercase tracking-[0.25em] text-cyan-400 font-semibold">
            <span>MÉTODO CIENTÍFICO</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          </div>

          {/* Book Title Segment */}
          <div className="z-10 flex flex-col mt-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-2">EBOOK DIGITAL</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none uppercase">
              Apaga tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-300 to-teal-300">cabeza</span>
            </h1>
            <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-400 to-teal-400 my-4 rounded-full" />
            <p className="text-[11px] text-slate-300 tracking-wide leading-relaxed font-light font-sans">
              La guía definitiva de 15 minutos para silenciar la rumiación mental, el estrés e inducir un estado de calma total e instantánea.
            </p>
          </div>

          {/* Book Spine/Author Segment */}
          <div className="z-10 flex flex-col pt-4 border-t border-slate-800/60">
            <div className="flex items-center gap-2">
              <div className="px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-[8px] font-mono text-cyan-300 tracking-widest font-bold">
                MÉTODO ATC
              </div>
              <span className="text-[10px] text-slate-400 tracking-wide font-medium">Edición Ampliada</span>
            </div>
            <span className="text-[8px] text-slate-500 tracking-[0.1em] font-semibold mt-1">PAZ MENTAL & NEUROCIENCIA RE-ENTRENADA</span>
          </div>

          {/* Gloss overlay */}
          <div className="absolute top-0 left-0 w-1/3 bottom-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-1/12 bottom-0 bg-black/40 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
