import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // for Vite
  // baseURL: process.env.REACT_APP_API_BASE_URL, // if CRA
});

// Attach token automatically for every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


// 🔹 Helper for storage URLs
export const storageUrl = (path) => {
  const root = import.meta.env.VITE_API_BASE_URL.replace("/api", ""); 
  return `${root}/storage/${path}`;
};

export default api;
