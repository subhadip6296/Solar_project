import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

// User Pages
import HomePage from "./pages/user/HomePage";
import AboutPage from "./pages/user/AboutPage";
import ProductsPage from "./pages/user/ProductsPage";
import ServicesPage from "./pages/user/ServicesPage";
import BlogsPage from "./pages/user/BlogsPage";
import EventsPage from "./pages/user/EventsPage";
import ContactPage from "./pages/user/ContactPage";

// Admin Pages
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import DashboardPage from "./pages/admin/DashboardPage";
import BlogManagement from "./pages/admin/BlogManagement";
import EventManagement from "./pages/admin/EventManagement";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      {/* Admin Routes */}
      <Route path="admin">
        <Route index element={<AdminLoginPage />} />
        <Route element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="blogs" element={<BlogManagement />} />
          <Route path="events" element={<EventManagement />} />
        </Route>
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
