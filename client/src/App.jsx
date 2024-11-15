import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

// SEO Metadata for each route
const routeMetadata = {
  home: {
    title: "GW Infra Solutions | Leading Solar PV Installation Company",
    description:
      "Transform your energy consumption with GW Infra Solutions' innovative solar PV installations for residential, commercial, and industrial clients. Expert solutions for sustainable energy.",
    keywords:
      "solar PV installation, sustainable energy, solar solutions, renewable energy, GW Infra Solutions",
  },
  about: {
    title: "About GW Infra Solutions | Solar Energy Experts",
    description:
      "Discover how GW Infra Solutions is revolutionizing energy consumption through cutting-edge solar solutions and sustainable practices. Learn about our mission and expertise.",
    keywords:
      "about GW Infra Solutions, solar energy company, sustainable solutions, solar expertise",
  },
  products: {
    title: "Solar Products | GW Infra Solutions",
    description:
      "Explore our comprehensive range of solar products including rooftop solar, off-grid systems, solar inverters, batteries, and pumps for residential and commercial use.",
    keywords:
      "solar panels, solar inverters, solar batteries, solar pumps, rooftop solar, off-grid solar",
  },
  services: {
    title: "Solar Installation Services | GW Infra Solutions",
    description:
      "Professional solar installation services for residential and commercial properties. Expert maintenance, support, and backup power solutions available.",
    keywords:
      "solar installation, solar maintenance, backup power, commercial solar, residential solar",
  },
  blogs: {
    title: "Solar Energy Blog | GW Infra Solutions",
    description:
      "Stay informed about solar energy trends, technology updates, and sustainability practices through our expert insights and industry news.",
    keywords:
      "solar energy blog, renewable energy news, solar technology updates, sustainability insights",
  },
  events: {
    title: "Solar Events & Workshops | GW Infra Solutions",
    description:
      "Join our solar energy events, workshops, and demonstrations to learn about sustainable energy solutions and latest solar technologies.",
    keywords:
      "solar events, energy workshops, solar demonstrations, sustainability seminars",
  },
  contact: {
    title: "Contact GW Infra Solutions | Solar Energy Consultation",
    description:
      "Get in touch with GW Infra Solutions for expert solar energy consultation and custom solutions for your residential or commercial needs.",
    keywords:
      "contact solar experts, solar consultation, solar energy inquiry, GW Infra Solutions contact",
  },
  adminLogin: {
    title: "Admin Portal | GW Infra Solutions",
    description:
      "Secure administrative portal for GW Infra Solutions team members.",
    keywords: "admin login, solar management portal",
  },
  dashboard: {
    title: "Solar Projects Dashboard | GW Infra Solutions Admin",
    description:
      "Comprehensive dashboard for managing solar installations and client projects.",
    keywords: "solar project management, installation tracking",
  },
  blogManagement: {
    title: "Solar Content Management | GW Infra Solutions Admin",
    description:
      "Manage and publish solar energy related content and industry updates.",
    keywords: "solar content management, energy blog management",
  },
  eventManagement: {
    title: "Solar Events Management | GW Infra Solutions Admin",
    description:
      "Organize and manage solar energy events, workshops, and client demonstrations.",
    keywords: "solar event management, workshop organization",
  },
};

const PageHelmet = ({ metadata }) => (
  <Helmet>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={metadata.keywords} />
    {/* Additional meta tags for solar energy focus */}
    <meta name="subject" content="Solar Energy Solutions" />
    <meta name="robots" content="index,follow" />
    <meta name="og:type" content="business.business" />
    <meta name="og:site_name" content="GW Infra Solutions" />
    <meta name="og:title" content={metadata.title} />
    <meta name="og:description" content={metadata.description} />
    {/* Schema.org markup for solar company */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "GW Infra Solutions",
          "image": "your-logo-url.jpg",
          "description": "Leading provider of solar PV installations and sustainable energy solutions",
          "@id": "https://www.gwinfrasolutions.com",
          "url": "https://www.gwinfrasolutions.com",
          "telephone": "your-phone-number",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street Address",
            "addressLocality": "Your City",
            "postalCode": "Your Postal Code",
            "addressCountry": "Your Country"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": your-latitude,
            "longitude": your-longitude
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "your-facebook-url",
            "your-twitter-url",
            "your-linkedin-url",
            "your-instagram-url"
          ]
        }
      `}
    </script>
  </Helmet>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route element={<UserLayout />}>
          <Route
            index
            element={
              <>
                <PageHelmet metadata={routeMetadata.home} />
                <HomePage />
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <PageHelmet metadata={routeMetadata.about} />
                <AboutPage />
              </>
            }
          />
          <Route
            path="products"
            element={
              <>
                <PageHelmet metadata={routeMetadata.products} />
                <ProductsPage />
              </>
            }
          />
          <Route
            path="services"
            element={
              <>
                <PageHelmet metadata={routeMetadata.services} />
                <ServicesPage />
              </>
            }
          />
          <Route
            path="blogs"
            element={
              <>
                <PageHelmet metadata={routeMetadata.blogs} />
                <BlogsPage />
              </>
            }
          />
          <Route
            path="events"
            element={
              <>
                <PageHelmet metadata={routeMetadata.events} />
                <EventsPage />
              </>
            }
          />
          <Route
            path="contact"
            element={
              <>
                <PageHelmet metadata={routeMetadata.contact} />
                <ContactPage />
              </>
            }
          />
        </Route>

        {/* Admin Routes */}
        <Route path="admin">
          <Route
            index
            element={
              <>
                <PageHelmet metadata={routeMetadata.adminLogin} />
                <AdminLoginPage />
              </>
            }
          />
          <Route element={<AdminLayout />}>
            <Route
              path="dashboard"
              element={
                <>
                  <PageHelmet metadata={routeMetadata.dashboard} />
                  <DashboardPage />
                </>
              }
            />
            <Route
              path="blogs"
              element={
                <>
                  <PageHelmet metadata={routeMetadata.blogManagement} />
                  <BlogManagement />
                </>
              }
            />
            <Route
              path="events"
              element={
                <>
                  <PageHelmet metadata={routeMetadata.eventManagement} />
                  <EventManagement />
                </>
              }
            />
          </Route>
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
