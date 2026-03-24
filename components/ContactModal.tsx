"use client";

import { useUIStore } from "@/stores/uiStore";
import { useState } from "react";

export default function ContactModal() {
  const { isContactModalOpen, closeContactModal, showToast } = useUIStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envío de formulario
    setTimeout(() => {
      setIsLoading(false);
      showToast("¡Consulta enviada! Nos contactaremos pronto.");
      setFormData({ name: "", email: "", phone: "", caseType: "", message: "" });
      closeContactModal();
    }, 1500);
  };

  if (!isContactModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-xl w-full shadow-2xl animate-fade-in">
        {/* Header */}
        <div className="bg-charcoal-900 px-8 py-6 flex justify-between items-center">
          <h2 className="text-2xl font-serif font-bold text-gold-400">
            Consulta Gratuita
          </h2>
          <button
            onClick={closeContactModal}
            className="text-platinum-300 hover:text-white transition text-2xl"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-charcoal-900 mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 focus:border-gold-500 focus:outline-none transition"
              placeholder="Tu nombre"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-gold-500 focus:outline-none transition"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-gold-500 focus:outline-none transition"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal-900 mb-2">
              Tipo de Caso
            </label>
            <select
              name="caseType"
              value={formData.caseType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 focus:border-gold-500 focus:outline-none transition bg-white"
            >
              <option value="">Selecciona una categoría</option>
              <option value="litigio">Litigio Corporativo</option>
              <option value="mercantil">Derecho Mercantil</option>
              <option value="fiscal">Derecho Fiscal</option>
              <option value="laboral">Derecho Laboral</option>
              <option value="propiedad">Propiedad Intelectual</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal-900 mb-2">
              Descripción del Caso
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 focus:border-gold-500 focus:outline-none transition resize-none"
              placeholder="Cuéntanos sobre tu situación legal..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gold-500 hover:bg-gold-400 disabled:bg-gray-400 text-charcoal-900 py-3 font-bold text-lg tracking-wider transition"
          >
            {isLoading ? "Enviando..." : "ENVIAR CONSULTA"}
          </button>

          <p className="text-xs text-charcoal-500 text-center">
            Todos tus datos serán tratados de forma confidencial y segura.
          </p>
        </form>
      </div>
    </div>
  );
}
