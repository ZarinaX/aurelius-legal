import { create } from "zustand";

interface UIStore {
  isContactModalOpen: boolean;
  isMobileMenuOpen: boolean;
  toastMessage: string | null;
  openContactModal: () => void;
  closeContactModal: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  showToast: (message: string, duration?: number) => void;
  hideToast: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isContactModalOpen: false,
  isMobileMenuOpen: false,
  toastMessage: null,

  openContactModal: () => set({ isContactModalOpen: true }),
  closeContactModal: () => set({ isContactModalOpen: false }),

  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  showToast: (message: string, duration = 4000) => {
    set({ toastMessage: message });
    setTimeout(() => set({ toastMessage: null }), duration);
  },
  hideToast: () => set({ toastMessage: null }),
}));
