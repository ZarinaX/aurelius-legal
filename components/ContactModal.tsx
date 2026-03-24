"use client";

import { useUIStore } from "@/stores/uiStore";
import { useState } from "react";

export default function ContactModal() {
  const { isContactModalOpen, closeContactModal, showToast } = useUIStore();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", msg: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast("¡Consulta enviada! Nos contactaremos pronto.");
      setForm({ name: "", email: "", phone: "", type: "", msg: "" });
      closeContactModal();
    }, 1500);
  };

  if (!isContactModalOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "0.5rem",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div style={{ backgroundColor: "#050708", padding: "1.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontFamily: '"Playfair Display", serif', fontWeight: 700, color: "#d4af37" }}>
            Consulta Gratuita
          </h2>
          <button
            onClick={closeContactModal}
            style={{ color: "#d3d3d3", fontSize: "2rem", border: "none", backgroundColor: "transparent", cursor: "pointer" }}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.5rem" }}>
              Nombre Completo
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                outline: "none",
                transition: "border 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#b8860b")}
              onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              placeholder="Tu nombre"
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.5rem" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  outline: "none",
                  transition: "border 0.3s",
                }}
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.5rem" }}>
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  outline: "none",
                  transition: "border 0.3s",
                }}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.5rem" }}>
              Tipo de Caso
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                outline: "none",
                backgroundColor: "white",
              }}
            >
              <option value="">Selecciona una categoría</option>
              <option value="litigio">Litigio Corporativo</option>
              <option value="mercantil">Derecho Mercantil</option>
              <option value="fiscal">Derecho Fiscal</option>
              <option value="laboral">Derecho Laboral</option>
              <option value="ip">Propiedad Intelectual</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.5rem" }}>
              Descripción del Caso
            </label>
            <textarea
              name="msg"
              value={form.msg}
              onChange={handleChange}
              required
              rows={4}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                outline: "none",
                resize: "none",
              }}
              placeholder="Cuéntanos sobre tu situación legal..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              backgroundColor: loading ? "#d1d5db" : "#b8860b",
              color: "#050708",
              padding: "0.75rem",
              fontWeight: 700,
              fontSize: "1.125rem",
              letterSpacing: "0.15em",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = "#d4af37")}
            onMouseLeave={(e) => !loading && (e.currentTarget.style.backgroundColor = "#b8860b")}
          >
            {loading ? "Enviando..." : "ENVIAR CONSULTA"}
          </button>

          <p style={{ fontSize: "0.75rem", color: "#4b5563", textAlign: "center" }}>
            Todos tus datos serán tratados de forma confidencial y segura.
          </p>
        </form>
      </div>
    </div>
  );
}
