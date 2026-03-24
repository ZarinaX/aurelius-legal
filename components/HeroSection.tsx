"use client";

import { useUIStore } from "@/stores/uiStore";

export default function HeroSection() {
  const { openContactModal } = useUIStore();

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-charcoal-900 via-midnight-700 to-charcoal-900 flex items-center justify-center px-6 pt-24 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500 opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-500 opacity-5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10 fade-in-up text-center">
        <p className="text-gold-400 text-sm tracking-widest uppercase font-semibold mb-6">
          Excelencia Legal
        </p>

        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight font-bold">
          Justicia
          <br />
          <span className="text-gold-400">Estratégica</span>
        </h1>

        <p className="text-xl text-platinum-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          En Aurelius Legal, combinamos décadas de experiencia con un profundo
          conocimiento del sistema legal. Nos especializamos en litigio corporativo,
          derecho mercantil y asesoramiento estratégico para empresas de alto valor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => openContactModal()}
            className="bg-gold-500 hover:bg-gold-400 text-charcoal-900 px-8 py-4 font-bold text-lg tracking-wider transition hover:shadow-xl"
          >
            SOLICITA UNA CONSULTA
          </button>
          <a
            href="#servicios"
            className="border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-charcoal-900 px-8 py-4 font-bold text-lg tracking-wider transition"
          >
            CONOCE NUESTROS SERVICIOS
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gold-500 border-opacity-20">
          <div>
            <p className="text-3xl font-serif text-gold-400 font-bold">25+</p>
            <p className="text-platinum-300 text-sm">Años de Experiencia</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-gold-400 font-bold">500+</p>
            <p className="text-platinum-300 text-sm">Casos Ganados</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-gold-400 font-bold">98%</p>
            <p className="text-platinum-300 text-sm">Tasa de Éxito</p>
          </div>
        </div>
      </div>
    </section>
  );
}
