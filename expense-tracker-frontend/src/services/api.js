// services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Get token from localStorage (if logged in)
const getToken = () => {
  return localStorage.getItem('token');
};

// Create an Axios instance with JWT token if available
const api = axios.create({
  baseURL: API_URL,
});

// Add token to the headers of all requests if available
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
