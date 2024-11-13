// src/services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.token = token;
  }
  return config;
});

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/admin';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => api.post('/api/user/login', credentials),
  register: (userData) => api.post('/api/user/register', userData),
};

export const dashboardAPI = {
  getStats: () => api.get('/api/admin/dashboard/stats'),
  getActivities: () => api.get('/api/admin/dashboard/activities'),
};

export const blogAPI = {
  getAll: () => api.get('/api/admin/blogs'),
  getOne: (id) => api.get(`/api/admin/blogs/${id}`),
  create: (data) => api.post('/api/admin/blogs', data),
  update: (id, data) => api.put(`/api/admin/blogs/${id}`, data),
  delete: (id) => api.delete(`/api/admin/blogs/${id}`),
};

export const eventAPI = {
  getAll: () => api.get('/api/admin/events'),
  getOne: (id) => api.get(`/api/admin/events/${id}`),
  create: (data) => api.post('/api/admin/events', data),
  update: (id, data) => api.put(`/api/admin/events/${id}`, data),
  delete: (id) => api.delete(`/api/admin/events/${id}`),
  getUpcoming: () => api.get('/api/admin/events/upcoming'),
  getPast: () => api.get('/api/admin/events/past'),
};

export const productAPI = {
  getAll: () => api.get('/api/admin/products'),
  getOne: (id) => api.get(`/api/admin/products/${id}`),
  create: (data) => api.post('/api/admin/products', data),
  update: (id, data) => api.put(`/api/admin/products/${id}`, data),
  delete: (id) => api.delete(`/api/admin/products/${id}`),
};

export const serviceAPI = {
  getAll: () => api.get('/api/admin/services'),
  getOne: (id) => api.get(`/api/admin/services/${id}`),
  create: (data) => api.post('/api/admin/services', data),
  update: (id, data) => api.put(`/api/admin/services/${id}`, data),
  delete: (id) => api.delete(`/api/admin/services/${id}`),
};

export const updateAPI = {
  getAll: () => api.get('/api/admin/updates'),
  getOne: (id) => api.get(`/api/admin/updates/${id}`),
  create: (data) => api.post('/api/admin/updates', data),
  update: (id, data) => api.put(`/api/admin/updates/${id}`, data),
  delete: (id) => api.delete(`/api/admin/updates/${id}`),
};

export const uploadAPI = {
  uploadImage: (formData) =>
    api.post('/api/admin/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
};

export default api;