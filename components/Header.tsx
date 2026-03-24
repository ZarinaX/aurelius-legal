"use client";

import { useUIStore } from "@/stores/uiStore";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const { openContactModal, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#servicios" },
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "Casos", href: "#casos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal-900 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-3xl font-serif font-bold text-gold-400 group-hover:text-gold-300 transition">
            Aurelius
          </h1>
          <p className="text-xs text-platinum-400 tracking-widest">LEGAL</p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-platinum-300 hover:text-gold-400 transition font-medium text-sm tracking-wide"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:flex gap-4">
          <button
            onClick={() => openContactModal()}
            className="bg-gold-500 hover:bg-gold-400 text-charcoal-900 px-6 py-2 font-semibold text-sm tracking-wider transition"
          >
            CONSULTA GRATUITA
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
        >
          <span
            className={`w-6 h-0.5 bg-platinum-300 transition-transform ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-platinum-300 transition-opacity ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-platinum-300 transition-transform ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-charcoal-900 border-t border-gold-500 border-opacity-20">
          <ul className="flex flex-col items-center gap-6 py-8 px-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="text-platinum-300 hover:text-gold-400 transition font-medium text-sm tracking-wide"
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
              className="bg-gold-500 hover:bg-gold-400 text-charcoal-900 px-6 py-2 font-semibold text-sm tracking-wider transition mt-4 w-full"
            >
              CONSULTA GRATUITA
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
