import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, Music, Sparkles } from "lucide-react";

export default function AudioPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const waveOscRef = useRef<OscillatorNode | null>(null);
  const waveOsc2Ref = useRef<OscillatorNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Stop sound synthesis on unmount
  useEffect(() => {
    return () => {
      stopSynthesis();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Update real synthesized volume if active
  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume / 100 * 0.15, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  // Handle tracking progress
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handlePause();
            return 0;
          }
          return prev + 0.5;
        });
      }, 150);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const startSynthesis = () => {
    try {
      // 1. Create context
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtxClass();
      audioCtxRef.current = ctx;

      // 2. High capacity volume control
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume / 100 * 0.15, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 3. Low Pass Filter to make it warm, brownian and soft
      const lowPass = ctx.createBiquadFilter();
      lowPass.type = "lowpass";
      lowPass.frequency.setValueAtTime(220, ctx.currentTime);
      lowPass.Q.setValueAtTime(1, ctx.currentTime);
      lowPass.connect(masterGain);
      filterRef.current = lowPass;

      // 4. Create Left Channel (100Hz Sine) and Right Channel (104.3Hz Sine) for Binaural Theta Beats (4.3Hz)
      // Since standard Panner Node is complex, we use stereo channel merger
      const merger = ctx.createChannelMerger(2);
      merger.connect(lowPass);

      const oscL = ctx.createOscillator();
      oscL.type = "sine";
      oscL.frequency.setValueAtTime(98, ctx.currentTime); // G2 note, very grounded and grounding
      
      const oscR = ctx.createOscillator();
      oscR.type = "sine";
      oscR.frequency.setValueAtTime(102.3, ctx.currentTime); // 4.3Hz delta-theta beating for deep sleep
      
      // Connect to respective left and right channels
      const gainL = ctx.createGain();
      gainL.gain.setValueAtTime(0.5, ctx.currentTime);
      oscL.connect(gainL).connect(merger, 0, 0);

      const gainR = ctx.createGain();
      gainR.gain.setValueAtTime(0.5, ctx.currentTime);
      oscR.connect(gainR).connect(merger, 0, 1);

      // Start frequencies
      oscL.start();
      oscR.start();
      waveOscRef.current = oscL;
      waveOsc2Ref.current = oscR;

      // 5. Let's add a rhythmic breathing LFO to simulate ocean waves washing shore
      // We do this by oscillating the cutoff frequency of the filter
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // 1 cycle every 8 seconds (inhale 4s, exhale 4s)

      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(110, ctx.currentTime); // Modulate between 110Hz and 330Hz

      lfo.connect(lfoGain).connect(lowPass.frequency);
      lfo.start();
      lfoRef.current = lfo;

    } catch (e) {
      console.warn("Navegador no soporta síntesis de audio o fue bloqueado.", e);
    }
  };

  const stopSynthesis = () => {
    try {
      waveOscRef.current?.stop();
      waveOsc2Ref.current?.stop();
      lfoRef.current?.stop();
      
      waveOscRef.current?.disconnect();
      waveOsc2Ref.current?.disconnect();
      lfoRef.current?.disconnect();
      gainNodeRef.current?.disconnect();
      filterRef.current?.disconnect();

      audioCtxRef.current?.close();
    } catch (e) {
      // Ignored
    }

    waveOscRef.current = null;
    waveOsc2Ref.current = null;
    lfoRef.current = null;
    gainNodeRef.current = null;
    filterRef.current = null;
    audioCtxRef.current = null;
  };

  const handlePlay = () => {
    if (!isPlaying) {
      startSynthesis();
      setIsPlaying(true);
    } else {
      handlePause();
    }
  };

  const handlePause = () => {
    stopSynthesis();
    setIsPlaying(false);
  };

  return (
    <div 
      id="sound-box"
      className="w-full bg-slate-950/90 border border-indigo-500/10 rounded-2xl p-6 shadow-xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent blur-2xl pointer-events-none" />

      {/* Header Player */}
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
          <Music className={`w-5 h-5 ${isPlaying ? "animate-bounce" : ""}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">BONUS INCLUIDO</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-[10px] text-amber-400">★</span>
              ))}
            </div>
          </div>
          <h4 className="text-sm font-bold text-white truncate font-sans">
            Muestra: Audio de Desaceleración
          </h4>
          <p className="text-xs text-slate-400 truncate">
            {isPlaying ? "Reproduciendo ondas binaurales theta (4.3Hz)..." : "Haz clic para probar el audio con auriculares de diadema"}
          </p>
        </div>
      </div>

      {/* Interactive Visualizer Canvas (Pure CSS Responsive Equalizer) */}
      <div className="h-10 flex items-end justify-between gap-1 px-2 my-5 bg-slate-900/60 rounded-lg py-1 border border-slate-800/60">
        {Array.from({ length: 24 }).map((_, i) => {
          // Semi-random animation delay for a realistic sound spectrum look
          const delays = [0.1, 0.4, 0.2, 0.6, 0.3, 0.8, 0.5, 0.1, 0.7, 0.3, 0.2, 0.5, 0.6, 0.4, 0.8, 0.1, 0.3, 0.5, 0.7, 0.2, 0.4, 0.6, 0.1, 0.3];
          const delay = delays[i % delays.length];
          return (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-indigo-600 via-indigo-400 to-cyan-300 rounded-md transition-all"
              style={{
                height: isPlaying ? "100%" : "15%",
                maxHeight: isPlaying ? `${Math.floor(Math.random() * 80) + 20}%` : "15%",
                animationName: isPlaying ? "equalizer-pulse" : "none",
                animationDuration: "1.4s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Timeline Controls */}
      <div className="flex items-center gap-3 mb-4 text-xs font-mono text-slate-500">
        <span className="text-indigo-400">0:{(Math.floor(progress * 0.15)).toString().padStart(2, "0")}</span>
        <div 
          className="flex-1 h-1.5 bg-slate-950 rounded-full overflow-hidden relative cursor-pointer group"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = (clickX / rect.width) * 100;
            setProgress(percentage);
          }}
        >
          <div 
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full group-hover:from-indigo-400 group-hover:to-cyan-300 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span>0:15 / Demo</span>
      </div>

      {/* Main Controls Panel */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-900 pt-4">
        {/* Play Button */}
        <button
          onClick={handlePlay}
          className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 ${
            isPlaying 
              ? "bg-slate-800 hover:bg-slate-700 text-rose-400 border border-slate-700 shadow-md"
              : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 fill-current" />
              <span>Silenciar Audio</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Probar Audio Relajante</span>
            </>
          )}
        </button>

        {/* Volume Node */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto bg-slate-900/40 px-3 py-1.5 rounded-xl border border-slate-900">
          <Volume2 className="w-4 h-4 text-slate-500" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-24 sm:w-20 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <span className="text-[10px] font-mono text-slate-400 w-6 text-right">
            {volume}%
          </span>
        </div>
      </div>

      {/* Headphones suggestion */}
      <div className="flex items-center gap-1 mt-3.5 text-[9px] text-slate-500 justify-center">
        <Sparkles className="w-3 h-3 text-amber-500" />
        <span>Usa audífonos de diadema para percibir el batido de 4.3Hz del Método ATC</span>
      </div>

      {/* Injection of Keyframe animations for visualizer via static style block */}
      <style>{`
        @keyframes equalizer-pulse {
          0% { transform: scaleY(0.15); }
          50% { transform: scaleY(0.7); }
          100% { transform: scaleY(0.4); }
        }
      `}</style>
    </div>
  );
}
