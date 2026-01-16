import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: null,
  role: null,
  setToken: (token) => set({ token }),
  setRole: (role) => set({ role }),
  clear: () => set({ token: null, role: null }),
}));
