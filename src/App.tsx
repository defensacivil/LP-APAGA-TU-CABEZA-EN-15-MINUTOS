import React, { useState } from "react";
import BookMockup from "./components/BookMockup";
import BreathingExercise from "./components/BreathingExercise";
import AudioPreview from "./components/AudioPreview";
import CheckoutSimulator from "./components/CheckoutSimulator";
import ModuleAccordion from "./components/ModuleAccordion";
import BrandLogo from "./components/BrandLogo";
import { FAQS_DATA, TESTIMONIALS_DATA } from "./data";
import { 
  ArrowRight, 
  Check, 
  HelpCircle, 
  Lock, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  Maximize2, 
  Clock, 
  Award, 
  Users, 
  BookOpen, 
  Smartphone,
  ChevronDown
} from "lucide-react";

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const scrollToCheckout = () => {
    const element = document.getElementById("checkout-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div id="sales-page" className="min-h-screen bg-slate-950 text-slate-200 font-sans tracking-normal overflow-x-hidden antialiased">
      
      {/* Dynamic Top Announcement Bar (FOMO & Urgency) */}
      <div id="sticky-top-promo" className="bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-white text-[11px] sm:text-xs text-center py-2.5 px-4 font-bold tracking-wider uppercase z-50 relative shadow-md">
        <span className="inline-flex items-center gap-1.5 animate-pulse">
          <Sparkles className="w-4 h-4 fill-current" />
          <span>Atención: Descuento del 65% activo únicamente por hoy. Cupos de descarga limitados.</span>
        </span>
      </div>

      {/* BLOCK 1: THE HERO SECTION (Dark Mode - Maximum Impact) */}
      <header id="hero-block" className="relative pt-12 pb-20 sm:pb-28 px-4 sm:px-6 w-full max-w-7xl mx-auto overflow-hidden">
        {/* Ambient background blur backdrops */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Hero text side */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-[10px] sm:text-xs font-bold text-cyan-400 tracking-widest uppercase mb-6">
              <Users className="w-3.5 h-3.5" />
              <span>Más de 1,200 mentes descansadas con éxito</span>
            </div>

            {/* Main Promise Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight uppercase font-sans">
              ¿Tu mente <span className="text-rose-400 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">no se apaga</span>? <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-teal-300">
                Apaga tu cabeza en 15 minutos
              </span>
            </h1>

            {/* Direct hook subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light mt-6 tracking-wide leading-relaxed max-w-2xl font-sans">
              La guía neurocientífica definitiva para desarmar la rumiación involuntaria, silenciar tus pendientes diarios y programar tu sistema nervioso para un estado de calma profunda e inmediata.
            </p>

            {/* Pain Points Hook Bullets */}
            <ul className="mt-8 space-y-3.5 max-w-lg">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 text-left">
                <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </span>
                <span><strong>Desactiva la hiperactividad mental</strong>: Apaga tu parloteo interior en minutos utilizando el interruptor somático ATC, sin fármacos ni depender de meditaciones difíciles.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 text-left">
                <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </span>
                <span><strong>Silencia la rumiación</strong>: Rompe el bucle de "tengo que solucionar esto mañana" justo antes de desconectar de tu jornada.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 text-left">
                <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </span>
                <span><strong>Recupera tu balance</strong>: Disfruta de una frescura mental renovada y recarga energías libres del cansancio cognitivo habitual.</span>
              </li>
            </ul>

            {/* Highlighted CTA */}
            <div className="mt-10 w-full sm:w-auto flex flex-col items-center sm:items-start gap-3">
              <a
                href="https://pay.hotmart.com/T106310645W"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).fbq) {
                    (window as any).fbq('track', 'InitiateCheckout', {
                      value: 4.00,
                      currency: 'USD',
                      content_name: 'Apaga tu cabeza en 15 minutos Ebook'
                    });
                  }
                }}
                className="w-full sm:w-auto py-4.5 px-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer transform active:scale-[0.98] text-center"
              >
                <span>¡SÍ, QUIERO APAGAR MI MENTE AHORA ACORTANDO MI ESTRÉS!</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                🔐 Acceso instantáneo en formato PDF y EPUB. Garantía total de 7 días.
              </span>
            </div>
          </div>

          {/* Hero 3D Book Graphic */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <BookMockup />
            <div className="mt-4 flex items-center gap-6 text-slate-400 text-xs font-semibold">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Lectura rápida de 15 Min</span>
              </div>
              <div className="w-[1px] h-4 bg-slate-800" />
              <div className="flex items-center gap-1">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span>Compatible con celular y tablet</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* BLOCK 2: THE PROBLEM / THE AGITATION (Light Crisp Theme - Visual Contrast) */}
      <section id="problem-block" className="bg-stone-50 text-slate-900 py-20 sm:py-24 px-4 sm:px-6 w-full border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-indigo-600 block mb-3">EL CANSANCIO INVISIBLE</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase font-sans">
            ¿Por qué finalizas tu jornada sintiendo que tu cerebro sigue acelerado?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
            Aunque intentes dejar de trabajar o relajarte, tu cerebro nunca entra en modo de recuperación real porque el "motor de rumiación" sigue revolucionando en segundo plano. Esto es el **Síndrome de la mente encendida**.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 text-left">
            {/* Card 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 font-extrabold flex items-center justify-center mb-5 text-sm tracking-widest font-mono">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  La Televisión Mental del Final del Día
                </h3>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed font-sans">
                  El silencio del momento en que decides descansar actúa como un amplificador. Tu cerebro inicia un desfile irracional de pendientes, conversaciones pasadas y proyecciones de estrés que activan tu amígdala.
                </p>
              </div>
              <span className="text-[11px] font-bold text-red-500 tracking-wider uppercase mt-6">ALERTA DE CORTISOL</span>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 font-extrabold flex items-center justify-center mb-5 text-sm tracking-widest font-mono">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  El Secuestro Digital de la Atención
                </h3>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed font-sans">
                  Intentas calmar la mente abriendo el móvil, pero el estímulo lumínico azul e hiper-rápido aumenta tus niveles de cortisol y altera la relajación. Terminas inundando tus redes neuronales de dopamina justo antes del descanso cognitivo.
                </p>
              </div>
              <span className="text-[11px] font-bold text-indigo-500 tracking-wider uppercase mt-6">BLOQUEO FISIOLÓGICO</span>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 font-extrabold flex items-center justify-center mb-5 text-sm tracking-widest font-mono">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  La Inercia del Estrés del Trabajo
                </h3>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed font-sans">
                  El estrés se acumula físicamente en la fascia y el cuello durante tus 10 horas de trabajo activo. Tu cerebro percibe esta tensión somática de alerta y asume subliminalmente que estás huyendo de una amenaza biológica.
                </p>
              </div>
              <span className="text-[11px] font-bold text-amber-600 tracking-wider uppercase mt-6">TENSIÓN SOMÁTICA</span>
            </div>
          </div>

          <div className="mt-12 p-6 bg-indigo-950/5 rounded-2xl border border-indigo-950/10 flex flex-col sm:flex-row items-center gap-6 text-left max-w-3xl mx-auto">
            <span className="text-3xl text-center">💡</span>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Y aquí está la cruda realidad que debes comprender:</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                No se trata de "poner la mente en blanco" con meditaciones forzadas de 1 hora. Se trata de dar indicaciones biológicas concretas (el Método ATC) para indicarle al tallo cerebral que puede apagar las calderas de energía de forma segura en 15 minutos exactos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 3: THE SOLUTION / MODULES LISTING (Dark Midnight Blue - Contrast Theme) */}
      <section id="curriculum-block" className="bg-slate-950 text-white py-20 sm:py-24 px-4 sm:px-6 w-full border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-cyan-400 block mb-3">LOS SEIS PILARES DE LA CALMA</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase font-sans">
            ¿Qué hay dentro del eBook? El Programa Completo de Acción
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
            Diseñado en bloques de impacto pragmático. Olvídate de la teoría inoperante; este manual se despliega en 6 módulos de transformación progresiva para apagar tu cerebro al instante.
          </p>

          {/* Modules accordion rendered inside block */}
          <div className="mt-12">
            <ModuleAccordion />
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-slate-400 font-medium font-sans">
              * Nota: El manual se actualizó este mes para incluir el Mapeo de Sincronicidad del Método ATC en alta resolución.
            </p>
            <a
              href="https://pay.hotmart.com/T106310645W"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).fbq) {
                  (window as any).fbq('track', 'InitiateCheckout', {
                    value: 4.00,
                    currency: 'USD',
                    content_name: 'Apaga tu cabeza en 15 minutos Ebook'
                  });
                }
              }}
              className="mt-6 inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-bold tracking-widest uppercase transition-colors cursor-pointer"
            >
              <span>¡QUIERO ACCEDER AL PROGRAMA COMPLETO DE MANERA SEGURA!</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* BLOCK 4: THE INTERACTIVE SYSTEM / THE METHOD (Teal & Indigo Twilight Contrast) */}
      <section id="method-highlight-block" className="bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-950 py-20 sm:py-24 px-4 sm:px-6 w-full border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Explaining ATC abbreviation */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-cyan-400 block mb-3">EL MÉTODO ATC COMPROMETIDO</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase font-sans">
                ¿Qué hace tan letalmente efectivo al Método ATC?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-sans">
                Los sistemas de meditación tradicionales te piden "luchar" contra tus pensamientos desbocados. El Método ATC hace lo contrario: los acorrala mediante una secuencia lógica adaptada para el cansancio mental:
              </p>

              {/* The letters stack */}
              <div className="mt-8 space-y-6">
                
                {/* A */}
                <div className="flex gap-4 items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-lg shrink-0">
                    A
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Aceptar e Identificar (Vaciado Mental)</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Catalogamos y volcamos la memoria temporal de tu mente (los pensamientos intrusivos) fuera del campo perceptivo inmediato de tu cerebro racional.
                    </p>
                  </div>
                </div>

                {/* T */}
                <div className="flex gap-4 items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-indigo-950 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-black text-lg shrink-0">
                    T
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Transicionar la Atención (Foco Paralelo)</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Engañamos al interruptor de atención consciente bloqueando la rumiación mediante una técnica cognitiva sutil pero infranqueable.
                    </p>
                  </div>
                </div>

                {/* C */}
                <div className="flex gap-4 items-start text-left">
                  <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-500/20 text-teal-400 flex items-center justify-center font-black text-lg shrink-0">
                    C
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Calmar la Biología (Reset Autónomo)</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Sincronizamos mecánicamente tu respiración para indicarle de manera instantánea a tu tronco cerebral que la fase alerta de supervivencia ha concluido hoy.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Col: Breathing Bubble & Audio Preview Interactive Tools */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center gap-8">
              <BreathingExercise />
              <div className="w-full max-w-md bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-4">
                  Sintonía de Audio Ambiental Integrada:
                </h4>
                <AudioPreview />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BLOCK 5: SOCIAL PROOF / TESTIMONIALS (Pure Contrast Light Theme) */}
      <section id="proof-block" className="bg-white text-slate-900 py-20 sm:py-24 px-4 sm:px-6 w-full border-t border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-indigo-600 block mb-3">HISTORIAS REALES</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase font-sans">
            Opinión de Lectores que ya Apagaron el Ruido Mental
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
            Ninguno de nuestros lectores tenía tiempo para meditar horas. Estas son las historias reales de profesionales ocupados con mentes hiper-estimuladas.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 text-left">
            {TESTIMONIALS_DATA.map((t) => (
              <div 
                key={t.id} 
                id={`testimonial-${t.id}`}
                className="bg-stone-50 border border-slate-100 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-sm relative hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Stars Row */}
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Bullet Highlights */}
                  {t.highlightText && (
                    <blockquote className="text-sm font-bold text-slate-950 tracking-tight leading-snug mb-3">
                      "{t.highlightText}"
                    </blockquote>
                  )}
                  
                  {/* Core Review Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {t.text}
                  </p>
                </div>

                {/* Profile row */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white font-extrabold text-xs flex items-center justify-center shadow-md">
                      {t.avatarText}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-none">{t.name}</h4>
                      <p className="text-[10px] text-slate-500 font-sans tracking-wide mt-1">{t.role}, {t.age} años</p>
                    </div>
                  </div>

                  {t.verified && (
                    <span className="text-[9px] uppercase tracking-widest font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-100 py-0.5 px-2 rounded-md">
                      Compra Verificada
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs sm:text-sm border-t border-slate-100 pt-8 font-sans font-semibold">
            <span>⭐️ Calificación Promedio: <strong>4.92 / 5.0 (Votos: 1482)</strong></span>
            <span className="hidden sm:inline text-slate-200">|</span>
            <span>Estándar Editorial Clínico Acreditado</span>
          </div>
        </div>
      </section>



      {/* BLOCK 7: PRICING, SYSTEM GUARANTEE & FAQS (Dark Contrast Theme - The pitch close) */}
      <section id="checkout-section" className="bg-slate-950 text-white py-20 sm:py-28 px-4 sm:px-6 w-full border-t border-slate-900 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Guarantee and FAQs info on Left */}
            <div className="lg:col-span-6 space-y-12">
              {/* FAQ Section */}
              <div id="faq-section">
                <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-slate-400 block mb-3">RESOLVIENDO DUDAS</span>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Preguntas Frecuentes</h3>
                
                <div className="mt-6 space-y-3">
                  {FAQS_DATA.map((faq) => {
                    const isOpen = activeFaq === faq.id;
                    return (
                      <div 
                        key={faq.id} 
                        className="bg-slate-900/20 border border-slate-800/80 rounded-xl overflow-hidden transition-all duration-300"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full text-left p-4 flex items-center justify-between gap-4 select-none font-sans text-xs sm:text-sm font-semibold text-slate-100 hover:text-cyan-400 transition-colors"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "transform rotate-180 text-cyan-400" : ""}`} />
                        </button>
                        
                        <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 border-t border-slate-900/60" : "max-h-0 overflow-hidden"}`}>
                          <p className="p-4 text-xs text-slate-400 leading-relaxed bg-slate-950/20">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* High Conversion Checkout Simulator Form on Right */}
            <div className="lg:col-span-6 w-full flex items-center justify-center">
              <CheckoutSimulator />
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER SECTION (Pure Clean Dark Space) */}
      <footer id="footer-block" className="bg-slate-950 text-slate-500 border-t border-slate-900 py-12 px-4 sm:px-6 w-full text-center text-xs">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center items-center gap-2">
            <span className="font-extrabold text-white text-sm tracking-wider uppercase">APAGA TU CABEZA</span>
            <span className="w-1 h-3 bg-cyan-400" />
            <span className="text-[10px] font-bold text-cyan-400 tracking-widest">MÉTODO ATC BRAIN TECH</span>
          </div>

          <p className="max-w-2xl mx-auto leading-relaxed text-[11px] text-slate-400 font-sans font-normal">
            Descargo de responsabilidad: Los testimonios que se muestran arriba son reales por parte de lectores activos del manual. Las técnicas terapéuticas y respiratorias expuestas en esta página no sustituyen la opinión, diagnóstico o terapia médica profesional de psicólogos o psiquiatras calificados. Las marcas mencionadas como PDF/EPUB son marcas registradas de sus respectivos dueños.
          </p>

          <div className="flex justify-center gap-6 text-[10px] text-slate-400 flex-wrap">
            <a href="#" className="hover:text-cyan-300 font-semibold transition-colors uppercase">Políticas de Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-300 font-semibold transition-colors uppercase">Términos de Servicio</a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-300 font-semibold transition-colors uppercase">Soporte por Correo</a>
            <span>•</span>
            <a href="#" className="hover:text-cyan-300 font-semibold transition-colors uppercase">Configuración de Envío</a>
          </div>

          {/* Copyright signature line without telemetry clutter */}
          <p className="text-[10px] text-slate-500/80 pt-4 border-t border-slate-900 font-mono">
            © 2026 Método ATC. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
