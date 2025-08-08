// src/lib/api.ts
import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

// 1. Read raw env var (might be "", might end with "/" or start with "http://")
const rawBase = process.env.NEXT_PUBLIC_API_BASE_URL || '';

// 2. Strip any trailing slash
let base = rawBase.replace(/\/$/, '');

// 3. Force HTTPS if someone accidentally used http://
if (base.startsWith('http://')) {
  base = base.replace(/^http:\/\//, 'https://');
}

// Expect caller to provide full base including version, e.g. https://api.example.com/api/v1
export const api: AxiosInstance = axios.create({
  baseURL: base,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers = config.headers ?? {};
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      const savedScheme = localStorage.getItem('authScheme');
      if (token) {
        const scheme = savedScheme || (token.includes('.') ? 'Bearer' : 'Token');
        (config.headers as Record<string, string>)['Authorization'] = `${scheme} ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// helper to clear out the saved JWT on logout
export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('authScheme');
    // expire client cookie used by middleware
    document.cookie = 'accessToken=; Max-Age=0; path=/; samesite=lax';
  }
};
