import axios from "axios";

// Base instance (optional)
const api = axios.create({
  baseURL: "http://localhost:8080", // Set your base URL here
});

// Attach token if needed (optional)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("Token");
  if (token) {
    config.headers["Token"] = token;
  }
  return config;
});

/**
 * Reusable Axios POST helper
 * Automatically sends as application/x-www-form-urlencoded
 */
export const axiosPost = async (url, data = {}, config = {}) => {
  const formData = new URLSearchParams();
  for (const key in data) {
    formData.append(key, data[key]);
  }

  try {
    const response = await api.post(url, formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        ...config.headers,
      },
      ...config,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
