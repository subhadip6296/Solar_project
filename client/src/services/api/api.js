// src/services/api.js
import axios from 'axios';

const API_URL = "https://gwinfra-server.onrender.com";

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

// Handle authentication and response transformations in a single interceptor
api.interceptors.response.use(
  (response) => {
    // Successfully return the data property
    return response.data;
  },
  (error) => {
    // Handle 401 unauthorized errors
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/admin';
    }

    // Log the error and return a rejected promise with the error data
    console.error('API Error:', error.response?.data);
    return Promise.reject(error.response?.data || error);
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
  // Public endpoints
  getAll: (params = {}) =>
    api.get('/api/events', { params }),

  getById: (id) =>
    api.get(`/api/events/${id}`),

  getGallery: (id) =>
    api.get(`/api/events/gallery/${id}`),

  // Filtered queries with enhanced filtering
  getFiltered: (filters = {}) => {
    const {
      status,
      past,
      search,
      startDate,
      endDate,
      limit = 10,
      page = 1,
      sortBy,
      sortOrder
    } = filters;

    return api.get('/api/events', {
      params: {
        ...(status && { status }),
        ...(past !== undefined && { past }),
        ...(search && { search }),
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
        ...(sortBy && { sortBy }),
        ...(sortOrder && { sortOrder }),
        limit,
        page
      }
    });
  },

  getUpcoming: (params = {}) =>
    api.get('/api/events', {
      params: {
        ...params,
        past: false,
        status: 'upcoming'
      }
    }),

  getPast: (params = {}) =>
    api.get('/api/events', {
      params: {
        ...params,
        past: true,
        status: 'completed'
      }
    }),

  // Protected endpoints (require auth)
  create: (data) => {
    const { title, description, date, location, images, status } = data;
    return api.post('/api/events', {
      title,
      description,
      date,
      location,
      mainImage: images.main,
      galleryImages: images.gallery || [],
      status: status || 'upcoming'
    });
  },

  update: (id, data) => {
    // Only include fields that are actually being updated
    const updateData = {};

    if (data.title) updateData.title = data.title;
    if (data.description) updateData.description = data.description;
    if (data.date) updateData.date = data.date;
    if (data.location) updateData.location = data.location;
    if (data.status) updateData.status = data.status;
    if (data.images?.main) updateData.mainImage = data.images.main;
    if (data.images?.gallery) updateData.galleryImages = data.images.gallery;

    return api.put(`/api/events/${id}`, updateData);
  },

  delete: (id) => api.delete(`/api/events/${id}`),

  // Utility functions
  validateEventData: (data) => {
    const errors = [];

    if (!data.title?.trim()) errors.push('Title is required');
    if (!data.description?.trim()) errors.push('Description is required');
    if (!data.date) errors.push('Date is required');
    if (!data.location?.trim()) errors.push('Location is required');
    if (!data.images?.main?.trim()) errors.push('Main image is required');
    if (data.images?.gallery && data.images.gallery.length > 4) {
      errors.push('Maximum 4 gallery images allowed');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  },

  formatEventData: (formData) => {
    return {
      title: formData.title?.trim(),
      description: formData.description?.trim(),
      date: formData.date,
      location: formData.location?.trim(),
      mainImage: formData.images?.main?.trim(),
      galleryImages: formData.images?.gallery?.filter(url => url?.trim()) || [],
      status: formData.status || 'upcoming'
    };
  },

  handleApiError: (error) => {
    console.error('Event API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });

    return {
      success: false,
      message: error.response?.data?.message || 'An unexpected error occurred',
      status: error.response?.status,
      error
    };
  },

  // Date helper functions
  isEventPast: (eventDate) => new Date(eventDate) < new Date(),

  formatEventDate: (date) => {
    try {
      return new Date(date).toISOString();
    } catch (error) {
      console.error('Date formatting error:', error);
      return date;
    }
  },

  // Sorting helper
  getSortedEvents: (events, { sortBy = 'date', sortOrder = 'asc' } = {}) => {
    return [...events].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });
  }
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