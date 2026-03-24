export default function ServicesSection() {
  const services = [
    {
      title: "Litigio Corporativo",
      description:
        "Representación integral en disputas comerciales de alto valor, con un enfoque estratégico y resultados comprobados.",
      icon: "⚖️",
    },
    {
      title: "Derecho Mercantil",
      description:
        "Asesoramiento en fusiones, adquisiciones, constitución de empresas y cumplimiento normativo corporativo.",
      icon: "📊",
    },
    {
      title: "Derecho Fiscal",
      description:
        "Planificación tributaria avanzada, auditorías fiscales y defensa ante autoridades tributarias.",
      icon: "💰",
    },
    {
      title: "Derecho Laboral",
      description:
        "Asesoramiento en conflictos laborales, cumplimiento normativo y protección de derechos empresariales.",
      icon: "👥",
    },
    {
      title: "Protección de Derechos",
      description:
        "Defensa de propiedad intelectual, marcas y patentes con un alcance nacional e internacional.",
      icon: "🔒",
    },
    {
      title: "Asesoramiento Estratégico",
      description:
        "Consultoría legal integrada para optimizar operaciones y minimizar riesgos legales corporativos.",
      icon: "🎯",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-20 lg:py-32 bg-gray-50 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm tracking-widest uppercase font-semibold mb-4">
            Nuestras Especialidades
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-charcoal-900 mb-6">
            Servicios Legales Premium
          </h2>
          <p className="text-lg text-charcoal-500 max-w-2xl mx-auto">
            Soluciones legales personalizadas para cada necesidad corporativa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 border-l-4 border-gold-500 hover:shadow-xl transition-shadow duration-300 group"
            >
              <p className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </p>
              <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-4">
                {service.title}
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
