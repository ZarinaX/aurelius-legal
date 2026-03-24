"use client";

import { useUIStore } from "@/stores/uiStore";

export default function Toast() {
  const { toastMessage, hideToast } = useUIStore();

  if (!toastMessage) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 50,
        animation: "slideInLeft 0.6s ease-out",
      }}
    >
      <div
        style={{
          backgroundColor: "#16a34a",
          color: "white",
          padding: "1rem 1.5rem",
          borderRadius: "0.5rem",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span>✓</span>
        <p style={{ fontWeight: 500 }}>{toastMessage}</p>
        <button
          onClick={hideToast}
          style={{
            color: "white",
            fontSize: "1.5rem",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
