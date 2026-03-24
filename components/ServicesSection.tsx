"use client";

export default function ServicesSection() {
  const services = [
    { title: "Litigio Corporativo", description: "Representación integral en disputas comerciales de alto valor.", icon: "⚖️" },
    { title: "Derecho Mercantil", description: "Asesoramiento en fusiones, adquisiciones y cumplimiento normativo.", icon: "📊" },
    { title: "Derecho Fiscal", description: "Planificación tributaria avanzada y defensa fiscal.", icon: "💰" },
    { title: "Derecho Laboral", description: "Asesoramiento en conflictos laborales y normativa.", icon: "👥" },
    { title: "Propiedad Intelectual", description: "Defensa de marcas, patentes y derechos de autor.", icon: "🔒" },
    { title: "Asesoramiento Estratégico", description: "Consultoría legal integrada para tu empresa.", icon: "🎯" },
  ];

  return (
    <section
      id="servicios"
      style={{
        padding: "5rem 1.5rem",
        backgroundColor: "#f9fafb",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "#b8860b", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem" }}>
            Nuestras Especialidades
          </p>
          <h2 style={{ fontSize: "2.5rem", fontFamily: '"Playfair Display", serif', color: "#1a1a1a", marginBottom: "1.5rem", fontWeight: 700 }}>
            Servicios Legales Premium
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderLeft: "4px solid #b8860b",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <p style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>{service.icon}</p>
              <h3 style={{ fontSize: "1.25rem", fontFamily: '"Playfair Display", serif', color: "#1a1a1a", marginBottom: "1rem", fontWeight: 700 }}>
                {service.title}
              </h3>
              <p style={{ color: "#4b5563", lineHeight: 1.6 }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
