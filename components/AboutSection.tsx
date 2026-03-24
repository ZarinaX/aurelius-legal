"use client";

export default function AboutSection() {
  const team = [
    { name: "Dra. Victoria Harrington", pos: "Socia Fundadora", exp: "28 años" },
    { name: "Dr. Marco Delgado", pos: "Socio", exp: "22 años" },
    { name: "Lic. Elena Ramírez", pos: "Asociada Sénior", exp: "18 años" },
    { name: "Dr. Antonio Navarro", pos: "Asociado", exp: "15 años" },
  ];

  return (
    <section id="nosotros" style={{ padding: "5rem 1.5rem", backgroundColor: "white" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "4rem", alignItems: "center" }}>
          <div>
            <p style={{ color: "#b8860b", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem" }}>
              Quiénes Somos
            </p>
            <h2 style={{ fontSize: "2.5rem", fontFamily: '"Playfair Display", serif', color: "#1a1a1a", marginBottom: "1.5rem", fontWeight: 700 }}>
              Excelencia y Confianza
            </h2>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              Aurelius Legal nace de la visión de crear un bufete que combine la tradición legal con la innovación estratégica. Nuestro equipo está compuesto por profesionales de alto nivel.
            </p>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", lineHeight: 1.6 }}>
              Nos especializamos en casos de alto valor y complejidad, trabajando con corporaciones multinacionales y entidades gubernamentales.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { title: "Integridad", desc: "La ética profesional es el pilar de nuestras acciones." },
              { title: "Innovación", desc: "Nos mantenemos a la vanguardia de las tendencias legales." },
              { title: "Resultados", desc: "Nuestro historial habla por sí solo: 98% de tasa de éxito." },
            ].map((v, i) => (
              <div key={i} style={{ backgroundColor: "#f9fafb", padding: "1.5rem", borderLeft: "4px solid #b8860b" }}>
                <h3 style={{ fontSize: "1.25rem", fontFamily: '"Playfair Display", serif', color: "#1a1a1a", marginBottom: "0.75rem", fontWeight: 700 }}>
                  {v.title}
                </h3>
                <p style={{ color: "#4b5563" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "5rem", paddingTop: "5rem", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h3 style={{ fontSize: "2rem", fontFamily: '"Playfair Display", serif', color: "#1a1a1a", fontWeight: 700 }}>
              Nuestro Equipo de Expertos
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
            {team.map((m, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "1.5rem",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "linear-gradient(135deg, #d4af37 0%, #b8860b 100%)",
                    borderRadius: "50%",
                    margin: "0 auto 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "white",
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                  }}
                >
                  {m.name.charAt(0)}
                </div>
                <h4 style={{ fontSize: "1.125rem", fontFamily: '"Playfair Display", serif', color: "#1a1a1a", marginBottom: "0.5rem", fontWeight: 700 }}>
                  {m.name}
                </h4>
                <p style={{ fontSize: "0.875rem", color: "#b8860b", fontWeight: 600, marginBottom: "0.75rem" }}>{m.pos}</p>
                <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>{m.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
