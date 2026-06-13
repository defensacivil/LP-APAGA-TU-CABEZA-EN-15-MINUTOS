import React, { useState, useEffect } from "react";
import { ShieldCheck, CreditCard, Lock, Download, Sparkles, CheckCircle, Flame, Mail, Award, Clock, ArrowRight, Check } from "lucide-react";

export default function CheckoutSimulator() {
  // FOMO timer
  const [timerString, setTimerString] = useState("14:59");
  
  useEffect(() => {
    // Track InitiateCheckout with Facebook Pixel when the component mounts
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        value: 4.00,
        currency: 'USD',
        content_name: 'Apaga tu cabeza en 15 minutos Ebook'
      });
    }

    let secondsLeft = 14 * 60 + 59;
    const interval = setInterval(() => {
      secondsLeft--;
      if (secondsLeft <= 0) {
        secondsLeft = 14 * 60 + 59; // Loop timer
      }
      const mins = Math.floor(secondsLeft / 60);
      const secs = secondsLeft % 60;
      setTimerString(`${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePurchaseClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        value: 4.00,
        currency: 'USD',
        content_name: 'Apaga tu cabeza en 15 minutos Ebook'
      });
    }
  };

  return (
    <div id="checkout-component" className="w-full max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 flex flex-col justify-between relative overflow-hidden transition-all duration-300 text-slate-800">
      {/* Sparkle effects on background */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-indigo-50 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-emerald-50 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col h-full z-10 text-left">
        {/* Discount header ribbon */}
        <div className="bg-amber-500/10 text-amber-800 rounded-2xl p-4 mb-6 flex items-center gap-3 border border-amber-500/20">
          <Flame className="w-5 h-5 text-amber-500 fill-current animate-pulse shrink-0" />
          <div className="text-xs">
            <span className="font-bold">¡OFERTA TEMPORAL DE HOY!</span> Consigue el eBook con una reducción masiva del <strong>85% de descuento</strong>.
          </div>
        </div>

        {/* Pricing Details */}
        <div className="mb-6 flex justify-between items-end border-b border-slate-100 pb-5">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400">Total a pagar:</span>
            <h3 className="text-3xl font-extrabold text-slate-900 leading-none mt-1">
              $4.00{" "}
              <span className="text-sm font-semibold text-slate-400 line-through ml-2">
                $27.00
              </span>
            </h3>
            <p className="text-[11px] text-emerald-600 font-bold mt-1 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> Ahórrate $23.00 hoy mismo
            </p>
          </div>
          
          {/* Countdown box */}
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-50 border border-rose-100 rounded-lg text-[11px] text-rose-600 font-bold">
              <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Expira {timerString}</span>
            </div>
            <span className="text-[9px] text-slate-400 font-medium mt-1">Solo quedan 7 copias</span>
          </div>
        </div>

        {/* What is included review list */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Tu pedido incluye acceso a:</h4>
          
          <div className="flex items-start gap-2 text-xs text-slate-700">
            <span className="text-emerald-500 shrink-0 mt-0.5">
              <Check className="w-4 h-4" />
            </span>
            <span><strong>Ebook Completo:</strong> "Apaga tu cabeza en 15 minutos" (PDF y EPUB de alta calidad).</span>
          </div>
        </div>

        {/* Guaranteed Hotmart Secure Button */}
        <div className="mt-4">
          <a
            href="https://pay.hotmart.com/T106310645W"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePurchaseClick}
            id="checkout-trigger-btn"
            className="w-full bg-indigo-600 hover:bg-indigo-700 hover:scale-[1.015] text-white py-4.5 px-6 rounded-2xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-indigo-600/20 active:scale-100 flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <Lock className="w-4 h-4 fill-current" />
            <span>ADQUIERE TU COPIA EN HOTMART AHORA ($4.00)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Secure transaction notice */}
        <div className="mt-6 flex flex-col items-center justify-center gap-2 border-t border-slate-100 pt-5">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-450 font-bold uppercase tracking-wider text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Pago Procesado y Asegurado por HOTMART</span>
          </div>
          <p className="text-[10px] text-slate-400 text-center leading-relaxed">
            Tu información está protegida con cifrado SSL de 256 bits y cuentas con garantía incondicional por 7 días.
          </p>
        </div>
      </div>
    </div>
  );
}
