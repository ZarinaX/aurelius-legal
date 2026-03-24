export default function CasesSection() {
  const cases = [
    {
      title: "Litigio M&A multimillonario",
      description:
        "Representamos a multinacional en disputa sobre términos de adquisición valorizada en $500M. Resultado: acuerdo favorable.",
      year: "2024",
      category: "Derecho Mercantil",
    },
    {
      title: "Defensa fiscal corporativa",
      description:
        "Asistencia integral en auditoría fiscal de 3 años. Reducción de pasivos tributarios en 80%.",
      year: "2023",
      category: "Derecho Fiscal",
    },
    {
      title: "Resolución de conflicto laboral",
      description:
        "Defensa en litigio laboral colectivo con proyección de $10M. Somos victoriosos sin concesiones.",
      year: "2023",
      category: "Derecho Laboral",
    },
    {
      title: "Protección de propiedad intelectual",
      description:
        "Representación contra violación de patentes internacionales. Sentencia favorable con daños y perjuicios.",
      year: "2022",
      category: "Propiedad Intelectual",
    },
    {
      title: "Constitución de holding internacional",
      description:
        "Estructura corporativa compleja para grupo empresarial con operaciones en 5 países.",
      year: "2022",
      category: "Asesoramiento Corporativo",
    },
    {
      title: "Litigio de responsabilidad civil",
      description:
        "Defensa exitosa en caso de responsabilidad civil con demanda inicial de $50M. Desestimado.",
      year: "2021",
      category: "Litigio Civil",
    },
  ];

  return (
    <section
      id="casos"
      className="py-20 lg:py-32 bg-gradient-to-br from-charcoal-50 to-gray-100 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-500 text-sm tracking-widest uppercase font-semibold mb-4">
            Casos de Éxito
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-charcoal-900 mb-6">
            Jurisprudencia que Habla
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Algunos de nuestros casos más relevantes y sus resultados probados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 group border-t-4 border-gold-500"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-gold-500 bg-gold-50 px-3 py-1">
                  {caseItem.category}
                </span>
                <span className="text-sm text-charcoal-500 font-semibold">
                  {caseItem.year}
                </span>
              </div>

              <h3 className="text-lg font-serif font-bold text-charcoal-900 mb-3 group-hover:text-gold-500 transition">
                {caseItem.title}
              </h3>

              <p className="text-charcoal-600 leading-relaxed text-sm">
                {caseItem.description}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <span className="inline-block text-gold-500 font-semibold text-xs">
                  ✓ Caso Exitoso
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
