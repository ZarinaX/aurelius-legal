"use client";

import { useUIStore } from "@/stores/uiStore";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const { openContactModal, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#servicios" },
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "Casos", href: "#casos" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: isScrolled ? "#050708" : "transparent",
        boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "1.5rem 3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <h1
            style={{
              fontSize: "1.875rem",
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              color: "#d4af37",
              cursor: "pointer",
            }}
          >
            Aurelius
          </h1>
          <p style={{ fontSize: "0.625rem", color: "#b0b0b0", letterSpacing: "0.15em" }}>LEGAL</p>
        </Link>

        {!isMobile && (
          <ul
            style={{
              display: "flex",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    color: "#d3d3d3",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#d3d3d3")}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}

        {!isMobile && (
          <button
            onClick={() => openContactModal()}
            style={{
              backgroundColor: "#b8860b",
              color: "#050708",
              padding: "0.5rem 1.5rem",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#d4af37";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#b8860b";
            }}
          >
            CONSULTA GRATUITA
          </button>
        )}

        {isMobile && (
          <button
            onClick={toggleMobileMenu}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.375rem",
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <span
              style={{
                width: "1.5rem",
                height: "2px",
                backgroundColor: "#d3d3d3",
                transition: "all 0.3s",
                transform: isMobileMenuOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              style={{
                width: "1.5rem",
                height: "2px",
                backgroundColor: "#d3d3d3",
                opacity: isMobileMenuOpen ? 0 : 1,
                transition: "opacity 0.3s",
              }}
            />
            <span
              style={{
                width: "1.5rem",
                height: "2px",
                backgroundColor: "#d3d3d3",
                transition: "all 0.3s",
                transform: isMobileMenuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </button>
        )}
      </nav>

      {isMobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#050708",
            borderTop: "1px solid rgba(212, 175, 55, 0.2)",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              padding: "2rem 1.5rem",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMobileMenu}
                  style={{
                    color: "#d3d3d3",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <button
              onClick={() => {
                openContactModal();
                closeMobileMenu();
              }}
              style={{
                backgroundColor: "#b8860b",
                color: "#050708",
                padding: "0.5rem 1.5rem",
                fontWeight: 600,
                fontSize: "0.875rem",
                letterSpacing: "0.15em",
                border: "none",
                cursor: "pointer",
                marginTop: "1rem",
                width: "100%",
              }}
            >
              CONSULTA GRATUITA
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
