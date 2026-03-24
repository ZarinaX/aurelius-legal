"use client";

import { useUIStore } from "@/stores/uiStore";

export default function HeroSection() {
  const { openContactModal } = useUIStore();

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a1a 0%, #0f1419 50%, #1a1a1a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Elements */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          right: 0,
          width: "384px",
          height: "384px",
          backgroundColor: "#b8860b",
          opacity: 0.05,
          borderRadius: "50%",
          filter: "blur(3rem)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "288px",
          height: "288px",
          backgroundColor: "#b8860b",
          opacity: 0.05,
          borderRadius: "50%",
          filter: "blur(3rem)",
        }}
      />

      <div
        style={{
          maxWidth: "64rem",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
          animation: "fadeInUp 0.6s ease-out",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#d4af37",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "1.5rem",
          }}
        >
          Excelencia Legal
        </p>

        <h1
          style={{
            fontSize: "4.5rem",
            fontFamily: '"Playfair Display", serif',
            color: "white",
            marginBottom: "1.5rem",
            lineHeight: 1.2,
            fontWeight: 700,
          }}
        >
          Justicia<br />
          <span style={{ color: "#d4af37" }}>Estratégica</span>
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "#d3d3d3",
            marginBottom: "3rem",
            maxWidth: "768px",
            margin: "0 auto 3rem",
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          En Aurelius Legal, combinamos décadas de experiencia con un profundo
          conocimiento del sistema legal. Nos especializamos en litigio corporativo,
          derecho mercantil y asesoramiento estratégico para empresas de alto valor.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", marginBottom: "4rem" }}>
          <button
            onClick={() => openContactModal()}
            style={{
              backgroundColor: "#b8860b",
              color: "#050708",
              padding: "1rem 2rem",
              fontWeight: 700,
              fontSize: "1.125rem",
              letterSpacing: "0.15em",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#d4af37";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(212, 175, 55, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#b8860b";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            SOLICITA UNA CONSULTA
          </button>
          <a
            href="#servicios"
            style={{
              border: "2px solid #d4af37",
              color: "#d4af37",
              padding: "1rem 2rem",
              fontWeight: 700,
              fontSize: "1.125rem",
              letterSpacing: "0.15em",
              textDecoration: "none",
              transition: "all 0.3s",
              display: "inline-block",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#d4af37";
              e.currentTarget.style.color = "#050708";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#d4af37";
            }}
          >
            CONOCE NUESTROS SERVICIOS
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem",
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(212, 175, 55, 0.2)",
          }}
        >
          <div>
            <p style={{ fontSize: "2rem", fontFamily: '"Playfair Display", serif', color: "#d4af37", fontWeight: 700 }}>25+</p>
            <p style={{ color: "#d3d3d3", fontSize: "0.875rem" }}>Años de Experiencia</p>
          </div>
          <div>
            <p style={{ fontSize: "2rem", fontFamily: '"Playfair Display", serif', color: "#d4af37", fontWeight: 700 }}>500+</p>
            <p style={{ color: "#d3d3d3", fontSize: "0.875rem" }}>Casos Ganados</p>
          </div>
          <div>
            <p style={{ fontSize: "2rem", fontFamily: '"Playfair Display", serif', color: "#d4af37", fontWeight: 700 }}>98%</p>
            <p style={{ color: "#d3d3d3", fontSize: "0.875rem" }}>Tasa de Éxito</p>
          </div>
        </div>
      </div>
    </section>
  );
}
