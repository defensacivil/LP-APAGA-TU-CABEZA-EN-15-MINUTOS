import React, { useState } from "react";
import { MODULES_DATA } from "../data";
import { Module } from "../types";
import { 
  Brain, 
  Flame, 
  Zap, 
  Moon, 
  ShieldAlert, 
  Compass, 
  ChevronDown, 
  Clock, 
  Check, 
  BookOpen 
} from "lucide-react";

// Helper component that maps string to lucide icons
const ModuleIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "Brain":
      return <Brain className={className} />;
    case "Flame":
      return <Flame className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Moon":
      return <Moon className={className} />;
    case "ShieldAlert":
      return <ShieldAlert className={className} />;
    case "Compass":
      return <Compass className={className} />;
    default:
      return <BookOpen className={className} />;
  }
};

export default function ModuleAccordion() {
  const [expandedId, setExpandedId] = useState<number | null>(3); // Keep Module 3 (ATC method) open by default!

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div id="modules-listing" className="w-full max-w-4xl mx-auto space-y-4">
      {MODULES_DATA.map((mod: Module) => {
        const isOpen = expandedId === mod.id;

        return (
          <div
            key={mod.id}
            id={`module-card-${mod.id}`}
            className={`border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen 
                ? "bg-slate-900/60 border-indigo-500/30 shadow-lg shadow-indigo-500/5" 
                : "bg-slate-950/40 hover:bg-slate-900/30 hover:border-slate-700"
            }`}
          >
            {/* Header Clickable Row */}
            <button
              type="button"
              onClick={() => handleToggle(mod.id)}
              className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer select-none"
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* Visual Icon Badge */}
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                    isOpen 
                      ? "bg-indigo-600/20 border-cyan-500/25 text-cyan-400" 
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  <ModuleIcon name={mod.iconName} className="w-5 h-5" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-bold text-cyan-400 tracking-widest bg-cyan-950/70 py-0.5 px-2 rounded-md border border-cyan-500/10">
                      {mod.number}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-indigo-400" />
                      {mod.duration}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight mt-1.5 leading-snug">
                    {mod.title}
                  </h3>
                </div>
              </div>

              {/* Accordion arrow indicator */}
              <div 
                className={`w-8 h-8 rounded-full bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-400 transition-transform duration-300 shrink-0 ${
                  isOpen ? "transform rotate-180 text-cyan-400 border-cyan-500/20" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Content Expand Area */}
            <div 
              className={`transition-all duration-300 ease-in-out origin-top overflow-hidden ${
                isOpen ? "max-h-[500px] border-t border-slate-900" : "max-h-0"
              }`}
            >
              <div className="p-6 sm:px-8 bg-slate-950/45 text-left">
                {/* Secondary subtitle statement */}
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  {mod.subtitle}
                </h4>
                
                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                  {mod.deepDescription}
                </p>

                {/* Bullets lists */}
                <div className="mt-5 pt-4 border-t border-slate-900">
                  <h5 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-3">
                    Lo que desbloquearás en este módulo:
                  </h5>
                  <ul className="space-y-3">
                    {mod.bullets.map((bullet, idx) => {
                      // Detect if there's markdown bold e.g. **A**
                      const isBoldSplit = bullet.includes("**");
                      let renderBullet: React.ReactNode = bullet;
                      
                      if (isBoldSplit) {
                        const parts = bullet.split("**");
                        renderBullet = (
                          <span>
                            {parts[0]}
                            {parts[1] && <strong className="text-cyan-400 font-bold">{parts[1]}</strong>}
                            {parts[2] && parts[2]}
                          </span>
                        );
                      }

                      return (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                          <span className="w-5 h-5 rounded-full bg-indigo-950 border border-indigo-700/30 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </span>
                          <div>
                            {renderBullet}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
