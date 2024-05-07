import { create } from "zustand";
import { User } from "firebase/auth";

interface AuthState {
  user: User | null;
  isLoading: boolean;
}

interface AuthActions {
  setLoading: (loading: boolean) => void;
  setUser: (user: User | null) => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
  setUser: (user) => set({ user }),
  clearAuth: () => set({ user: null }),
}));

export default useAuthStore;
