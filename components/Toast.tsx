"use client";

import { useUIStore } from "@/stores/uiStore";

export default function Toast() {
  const { toastMessage, hideToast } = useUIStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in-left">
      <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-4">
        <span>✓</span>
        <p className="font-medium">{toastMessage}</p>
        <button
          onClick={hideToast}
          className="text-white hover:text-gray-200 transition text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
}
