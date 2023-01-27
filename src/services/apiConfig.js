// Import axios
import axios from "axios";

// Set API Variable
let apiUrl;

// Set URL link
const apiUrls = {
  // Need to change later on real link
  production: "https://shop-production.up.railway.app",
  development: "http://localhost:4000/",
};

// Determine if production or deployment
if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

// Use Axios
const api = axios.create({
  baseURL: apiUrl,
});

// Export API 
export default api;
