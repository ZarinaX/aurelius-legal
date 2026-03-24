"use client";

import { useUIStore } from "@/stores/uiStore";

export default function Footer() {
  const { openContactModal } = useUIStore();

  return (
    <footer style={{ backgroundColor: "#050708", color: "#d3d3d3", padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.5rem", fontFamily: '"Playfair Display", serif', fontWeight: 700, color: "#d4af37", marginBottom: "1rem" }}>
              Aurelius
            </h3>
            <p style={{ fontSize: "0.875rem", opacity: 0.75 }}>
              Soluciones legales de excelencia para corporaciones.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 700, color: "white", marginBottom: "1rem" }}>Navegación</h4>
            <ul style={{ listStyle: "none" }}>
              {["Servicios", "Sobre Nosotros", "Casos", "Contacto"].map((l, i) => (
                <li key={i} style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  <a href="#" style={{ color: "#d3d3d3", textDecoration: "none" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 700, color: "white", marginBottom: "1rem" }}>Servicios</h4>
            <ul style={{ listStyle: "none" }}>
              {["Litigio Corporativo", "Derecho Mercantil", "Derecho Fiscal", "Derecho Laboral"].map((s, i) => (
                <li key={i} style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                  <a href="#" style={{ color: "#d3d3d3", textDecoration: "none" }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 700, color: "white", marginBottom: "1rem" }}>Contacto</h4>
            <ul style={{ listStyle: "none" }}>
              <li style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                📞 <a href="tel:+1234567890" style={{ color: "#d3d3d3", textDecoration: "none" }}>+1 (555) 123-4567</a>
              </li>
              <li style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                📧 <a href="mailto:contacto@aurelius.com" style={{ color: "#d3d3d3", textDecoration: "none" }}>contacto@aurelius.com</a>
              </li>
              <li style={{ marginBottom: "1rem", fontSize: "0.875rem" }}>
                🌐 www.aureliuslegal.com
              </li>
              <li>
                <button
                  onClick={() => openContactModal()}
                  style={{
                    color: "#d4af37",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  Solicita Consulta →
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(212, 175, 55, 0.2)",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            fontSize: "0.875rem",
            opacity: 0.75,
          }}
        >
          <p>© 2024 Aurelius Legal. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
            <a href="#" style={{ color: "#d3d3d3", textDecoration: "none" }}>Privacidad</a>
            <a href="#" style={{ color: "#d3d3d3", textDecoration: "none" }}>Términos</a>
            <a href="#" style={{ color: "#d3d3d3", textDecoration: "none" }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
