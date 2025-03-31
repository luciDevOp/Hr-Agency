import axios from "axios";

(function initSnackbar() {
  const existing = document.getElementById("snackbar");
  if (!existing) {
    const snackbar = document.createElement("div");
    snackbar.id = "snackbar";
    document.body.appendChild(snackbar);
  }

  const style = document.createElement("style");
  style.textContent = `
    #snackbar {
      visibility: hidden;
      min-width: 250px;
      background-color: #323232;
      color: #fff;
      text-align: center;
      border-radius: 4px;
      padding: 12px 16px;
      position: fixed;
      z-index: 1000;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 14px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      opacity: 0;
      transition: opacity 0.5s, top 0.5s;
    }

    #snackbar.show {
      visibility: visible;
      opacity: 1;
      top: 100px;
    }
  `;

  document.head.appendChild(style);
})();

function showSnackbar(message) {
  const snackbar = document.getElementById("snackbar");
  if (!snackbar) return;

  snackbar.textContent = message;
  snackbar.className = "show";

  setTimeout(() => {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}

const api = axios.create({
  baseURL: "http://localhost:8080",
});

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
    if (response.data.NotLogged) {
      localStorage.removeItem("Token");
      showSnackbar("The session has expired. Please log in again.");
      setTimeout(() => {
        window.location.href = "/admin";
      }, 3500);
    }

    return response.data;
  } catch (error) {
    console.error("Error in Axios POST request:", error);
    throw error;
  }
};

export { axiosPost };
