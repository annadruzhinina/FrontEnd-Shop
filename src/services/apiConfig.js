import axios from "axios";

let apiUrl;

const apiUrls = {
  // Need to change later on real link
  production: "https://shop-production.up.railway.app",
  development: "http://localhost:4000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
