export default function AboutSection() {
  const teamMembers = [
    {
      name: "Dra. Victoria Harrington",
      position: "Socia Fundadora - Litigio Corporativo",
      experience: "28 años",
    },
    {
      name: "Dr. Marco Delgado",
      position: "Socio - Derecho Mercantil",
      experience: "22 años",
    },
    {
      name: "Lic. Elena Ramírez",
      position: "Asociada Sénior - Derecho Fiscal",
      experience: "18 años",
    },
    {
      name: "Dr. Antonio Navarro",
      position: "Asociado - Derecho Laboral",
      experience: "15 años",
    },
  ];

  return (
    <section
      id="nosotros"
      className="py-20 lg:py-32 bg-white px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <p className="text-gold-500 text-sm tracking-widest uppercase font-semibold mb-4">
              Quiénes Somos
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-charcoal-900 mb-6">
              Excelencia y Confianza
            </h2>
            <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
              Aurelius Legal nace de la visión de crear un bufete que combine
              la tradición legal con la innovación estratégica. Nuestro equipo
              está compuesto por profesionales de alto nivel con trayectorias
              probadas en las jurisdicciones más complejas.
            </p>
            <p className="text-lg text-charcoal-600 leading-relaxed">
              Nos especializamos en casos de alto valor y complejidad, trabajando
              con corporaciones multinacionales, empresarios y entidades
              gubernamentales. Cada caso es una oportunidad de demostrar nuestra
              capacidad y compromiso.
            </p>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 border-l-4 border-gold-500">
              <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-3">
                Integridad
              </h3>
              <p className="text-charcoal-600">
                La ética profesional es el pilar de nuestras acciones. Cada consejo
                y estrategia se fundamenta en principios legales sólidos.
              </p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-gold-500">
              <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-3">
                Innovación
              </h3>
              <p className="text-charcoal-600">
                Nos mantenemos a la vanguardia de las tendencias legales y tecnologías
                para ofrecer soluciones modernas y efectivas.
              </p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-gold-500">
              <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-3">
                Resultados
              </h3>
              <p className="text-charcoal-600">
                Nuestro historial habla por sí solo: 98% de tasa de éxito y clientes
                satisfechos que regresan y nos recomiendan.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-charcoal-900 mb-4">
              Nuestro Equipo de Expertos
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white font-serif font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-serif font-bold text-charcoal-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-sm text-gold-500 font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-sm text-charcoal-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
