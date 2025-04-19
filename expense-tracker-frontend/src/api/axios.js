import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust the backend URL here if needed
  withCredentials: true, // If you’re handling authentication cookies or JWT
});

export default instance;
