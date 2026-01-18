import axios from "axios";
import { useAuthStore } from "../stores/auth.store";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false,
});

console.log("API base URL:", import.meta.env.VITE_API_BASE_URL);

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiService = {
  getExpertID: (id) => {
    return api.get(`/experts/${id}`);
  },

  getExpertAll: () => {
    return api.get("/experts");
  },

  getExpertiseAll: () => {
    return api.get("/expertises");
  },

  getExpertiseByName: (name) => {
    return api.get(`/expertises/${name}`);
  },

  getExpertiseByCode: (code) => {
    return api.get(`/expertises/${code}`);
  },

  signupExpert: (payload) => {
    return api.post("/auth/expert/signup", payload);
  },

  signupUser: (payload) => {
    return api.post("/auth/user/signup", payload);
  },
};

