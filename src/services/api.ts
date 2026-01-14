import axios from 'axios';
import AuthService from './AuthService';

const GITHUB_API_URL = import.meta.env.VITE_API_URL || 'https://api.github.com';

const api = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'Accept': 'application/vnd.github+json',
  },
});

api.interceptors.request.use((config) => {
  const authHeader = AuthService.getAuthHeader();
  if (authHeader && config.headers) {
    (config.headers as any).Authorization = authHeader;
  }
  return config;
}, (error) => Promise.reject(error));

export default api;