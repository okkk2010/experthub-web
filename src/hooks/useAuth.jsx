import { useAuthStore } from "../stores/auth.store";

export function useAuth() {
  const token = useAuthStore((state) => state.token);
  const role = useAuthStore((state) => state.role);
  const setToken = useAuthStore((state) => state.setToken);
  const setRole = useAuthStore((state) => state.setRole);
  const clear = useAuthStore((state) => state.clear);

  return { token, role, setToken, setRole, clear };
}
