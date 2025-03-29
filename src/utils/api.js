import axios from "axios";

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
 * @param {string} url - The API URL to call
 * @param {FormData} formData - The FormData to send in the POST request
 * @param {Object} [config={}] - Additional Axios configuration (optional)
 */
const axiosPost = async (url, formData, config = {}) => {
  try {
    const response = await api.post(url, formData, config);
    return response.data;
  } catch (error) {
    console.error("Error in Axios POST request:", error);
    throw error;
  }
};
export { axiosPost };
