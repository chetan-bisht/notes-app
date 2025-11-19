import axios from "axios";

// Set the base URL depending on the environment
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;

