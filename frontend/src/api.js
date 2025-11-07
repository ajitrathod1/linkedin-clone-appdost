import axios from "axios";

// Auto-switch between local & deployed backend
const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : "https://linkedin-clone-appdost-m3go.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export default api;
