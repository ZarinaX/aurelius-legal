"use client";

export default function CasesSection() {
  const cases = [
    { title: "Litigio M&A multimillonario", desc: "Representamos a multinacional en disputa sobre términos de adquisición valorizada en $500M.", year: "2024", cat: "Mercantil" },
    { title: "Defensa fiscal corporativa", desc: "Asistencia integral en auditoría fiscal de 3 años. Reducción de pasivos en 80%.", year: "2023", cat: "Fiscal" },
    { title: "Resolución de conflicto laboral", desc: "Defensa en litigio laboral colectivo con proyección de $10M. Victoriosos.", year: "2023", cat: "Laboral" },
    { title: "Protección de propiedad intelectual", desc: "Representación contra violación de patentes internacionales.", year: "2022", cat: "IP" },
    { title: "Constitución de holding internacional", desc: "Estructura corporativa compleja para grupo empresarial con operaciones en 5 países.", year: "2022", cat: "Corporativo" },
    { title: "Litigio de responsabilidad civil", desc: "Defensa exitosa en caso de responsabilidad civil. Demanda desestimada.", year: "2021", cat: "Civil" },
  ];

  return (
    <section id="casos" style={{ padding: "5rem 1.5rem", backgroundColor: "#f0f0f0" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#b8860b", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem" }}>
            Casos de Éxito
          </p>
          <h2 style={{ fontSize: "2.5rem", fontFamily: '"Playfair Display", serif', color: "#1a1a1a", marginBottom: "1.5rem", fontWeight: 700 }}>
            Jurisprudencia que Habla
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {cases.map((c, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderTop: "4px solid #b8860b",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#b8860b", backgroundColor: "#f0e6d2", padding: "0.25rem 0.75rem" }}>
                  {c.cat}
                </span>
                <span style={{ fontSize: "0.875rem", color: "#4b5563", fontWeight: 600 }}>{c.year}</span>
              </div>

              <h3
                style={{
                  fontSize: "1.125rem",
                  fontFamily: '"Playfair Display", serif',
                  color: "#1a1a1a",
                  marginBottom: "0.75rem",
                  fontWeight: 700,
                }}
              >
                {c.title}
              </h3>

              <p style={{ color: "#4b5563", lineHeight: 1.6, fontSize: "0.875rem", marginBottom: "1.5rem" }}>{c.desc}</p>

              <div style={{ paddingTop: "1.5rem", borderTop: "1px solid #e5e7eb" }}>
                <span style={{ color: "#b8860b", fontWeight: 600, fontSize: "0.75rem" }}>✓ Caso Exitoso</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
