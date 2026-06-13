import React, { useState, useEffect } from "react";
import { Play, Square, Wind, Sparkles } from "lucide-react";

type BreathPhase = "inhale" | "hold" | "exhale" | "holdEmpty" | "idle";

const PHASE_CONFIG = {
  idle: { text: "Método de Descompresión Rápida", instruction: "Haz clic abajo para experimentar la calma inmediata de 1 minuto.", duration: 0, scale: "scale-100", bgGlow: "bg-indigo-500/0" },
  inhale: { text: "Inhala profundamente...", instruction: "Llena tu abdomen, expande tus pulmones poco a poco.", duration: 4000, scale: "scale-150 bg-teal-500/30 ring-teal-400/40", bgGlow: "bg-teal-500/10" },
  hold: { text: "Mantén el aire...", instruction: "Siente el aire sosteniéndote sin forzar, relaja tus hombros.", duration: 4000, scale: "scale-150 bg-amber-500/35 ring-amber-400/50", bgGlow: "bg-amber-500/10" },
  exhale: { text: "Exhala con calma...", instruction: "Suelta lentamente por la boca, liberando toda tensión residual.", duration: 4000, scale: "scale-90 bg-indigo-500/25 ring-indigo-400/30", bgGlow: "bg-indigo-500/10" },
  holdEmpty: { text: "Pausa en vacío...", instruction: "Disfruta del silencio antes de volver a empezar.", duration: 3000, scale: "scale-90 bg-slate-500/20 ring-slate-400/20", bgGlow: "bg-slate-500/0" }
};

export default function BreathingExercise() {
  const [phase, setPhase] = useState<BreathPhase>("idle");
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [cycleCount, setCycleCount] = useState<number>(0);

  useEffect(() => {
    let phaseTimeout: NodeJS.Timeout;
    let timerInterval: NodeJS.Timeout;

    if (isActive) {
      // Countdown Timer
      timerInterval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleStop();
            return 60;
          }
          return prev - 1;
        });
      }, 1000);

      // Core Loop Controller
      const runBreathingLoop = (currentPhase: BreathPhase) => {
        let nextPhase: BreathPhase = "inhale";
        if (currentPhase === "inhale") nextPhase = "hold";
        else if (currentPhase === "hold") nextPhase = "exhale";
        else if (currentPhase === "exhale") nextPhase = "holdEmpty";
        else if (currentPhase === "holdEmpty") {
          nextPhase = "inhale";
          setCycleCount((c) => c + 1);
        }

        setPhase(nextPhase);
        phaseTimeout = setTimeout(() => {
          runBreathingLoop(nextPhase);
        }, PHASE_CONFIG[nextPhase].duration);
      };

      // Start initial
      setPhase("inhale");
      phaseTimeout = setTimeout(() => {
        runBreathingLoop("inhale");
      }, PHASE_CONFIG["inhale"].duration);
    }

    return () => {
      clearTimeout(phaseTimeout);
      clearInterval(timerInterval);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
    setTimeLeft(60);
    setCycleCount(0);
  };

  const handleStop = () => {
    setIsActive(false);
    setPhase("idle");
    setTimeLeft(60);
  };

  return (
    <div 
      id="breathing-block"
      className="w-full max-w-lg mx-auto bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between shadow-2xl relative overflow-hidden"
    >
      {/* Background glow syncing with target states */}
      <div className={`absolute inset-0 transition-colors duration-1000 pointer-events-none filter blur-3xl opacity-30 ${PHASE_CONFIG[phase].bgGlow}`} />

      {/* Header Info */}
      <div className="z-10 text-center mb-6 w-full">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
          <Wind className="w-3.5 h-3.5" />
          <span>Biología en Calma</span>
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight font-sans">
          Interactivo: Demo Método ATC
        </h3>
        <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
          Prueba este ejercicio guiado de 1 minuto basado en el Módulo 3 y experimenta el frenado mental biológico en tiempo real.
        </p>
      </div>

      {/* Breathing Bubble Stage */}
      <div className="h-64 flex flex-col items-center justify-center relative w-full mb-4">
        {/* Animated outer radiating ripples */}
        {isActive && (
          <>
            <div className={`absolute w-36 h-36 rounded-full border border-teal-500/10 animate-ping duration-1000 ${phase === "inhale" ? "opacity-100" : "opacity-0"}`} />
            <div className={`absolute w-44 h-44 rounded-full border border-amber-500/10 animate-ping duration-[3000ms] ${phase === "hold" ? "opacity-100" : "opacity-0"}`} />
          </>
        )}

        {/* Central Breathing Ring */}
        <div 
          className={`w-32 h-32 rounded-full border-4 border-slate-700 ring-8 ring-slate-800/40 flex flex-col items-center justify-center transition-all duration-[4000ms] ease-in-out transform ${PHASE_CONFIG[phase].scale}`}
        >
          {phase === "idle" ? (
            <Wind className="w-8 h-8 text-indigo-400 animate-pulse" />
          ) : (
            <span className="text-2xl font-bold text-white font-mono uppercase tracking-widest">
              {phase === "inhale" && "4s"}
              {phase === "hold" && "4s"}
              {phase === "exhale" && "4s"}
              {phase === "holdEmpty" && "3s"}
            </span>
          )}
        </div>

        {/* Dynamic Instructional Texts */}
        <div className="absolute bottom-2 text-center w-full px-4 h-12 flex flex-col justify-center">
          <p className="text-base font-semibold text-slate-100 tracking-wide transition-all duration-300">
            {PHASE_CONFIG[phase].text}
          </p>
          <p className="text-xs text-slate-400 tracking-normal transition-all duration-300 mt-1 max-w-xs mx-auto line-clamp-1">
            {PHASE_CONFIG[phase].instruction}
          </p>
        </div>
      </div>

      {/* Stats Line */}
      {isActive && (
        <div className="z-10 flex items-center justify-between w-full max-w-xs px-4 py-2 bg-slate-950/40 rounded-lg text-xs font-semibold text-slate-400 border border-slate-800/50 mb-6">
          <div className="flex items-center gap-1">
            <span className="text-emerald-400 animate-pulse">●</span>
            <span>Ciclos: <strong className="text-white font-mono">{cycleCount}</strong></span>
          </div>
          <div className="w-[1px] h-4 bg-slate-800" />
          <div>
            <span>Tiempo: <strong className="text-white font-mono">{timeLeft}s</strong></span>
          </div>
        </div>
      )}

      {/* Control Actions */}
      <div className="z-10 w-full flex justify-center">
        {!isActive ? (
          <button
            id="start-breath-btn"
            onClick={handleStart}
            className="w-full max-w-xs py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 flex items-center justify-center gap-2 group transform active:scale-[0.98]"
          >
            <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            <span>Iniciar Sesión de Paz (60s)</span>
          </button>
        ) : (
          <button
            id="stop-breath-btn"
            onClick={handleStop}
            className="w-full max-w-xs py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-755 hover:text-rose-400 text-slate-300 border border-slate-700 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-[0.98]"
          >
            <Square className="w-4 h-4 fill-current" />
            <span>Pausar Ejercicio</span>
          </button>
        )}
      </div>

      {/* Key benefit annotation under */}
      <div className="flex items-center gap-1.5 mt-4 text-[10px] text-slate-500 font-medium tracking-wide">
        <Sparkles className="w-3.5 h-3.5 text-amber-500/70" />
        <span>Sincroniza tu ritmo cardíaco y estimula el nervio vago inmediatamente</span>
      </div>
    </div>
  );
}
