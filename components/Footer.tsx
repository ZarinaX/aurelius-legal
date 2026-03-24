"use client";

import { useUIStore } from "@/stores/uiStore";
import Link from "next/link";

export default function Footer() {
  const { openContactModal } = useUIStore();

  return (
    <footer className="bg-charcoal-900 text-platinum-300 py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold-400 mb-4">
              Aurelius
            </h3>
            <p className="text-sm opacity-75">
              Soluciones legales de excelencia para corporaciones y profesionales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="hover:text-gold-400 transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-gold-400 transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-gold-400 transition">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-gold-400 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="hover:text-gold-400 transition">
                  Litigio Corporativo
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-gold-400 transition">
                  Derecho Mercantil
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-gold-400 transition">
                  Asesoramiento Fiscal
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-gold-400 transition">
                  Derecho Laboral
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+1234567890" className="hover:text-gold-400 transition">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:contacto@aureliuslegal.com" className="hover:text-gold-400 transition">
                  contacto@aurelius.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🌐</span>
                <span>www.aureliuslegal.com</span>
              </li>
              <li>
                <button
                  onClick={() => openContactModal()}
                  className="text-gold-400 hover:text-gold-300 transition font-semibold text-sm mt-2"
                >
                  Solicita Consulta →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold-500 border-opacity-20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75">
            © 2024 Aurelius Legal. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-gold-400 transition">
              Privacidad
            </a>
            <a href="#" className="hover:text-gold-400 transition">
              Términos
            </a>
            <a href="#" className="hover:text-gold-400 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
