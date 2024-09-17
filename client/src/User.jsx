import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/default/Navbar";
import Footer from "./components/default/Footer";
import HomePage from "./pages/User/HomePage";
import AboutPage from "./pages/User/AboutPage";
import ProductPage from "./pages/User/ProductPage";
import ServicesPage from "./pages/User/ServicesPage";
import UpdatesPage from "./pages/User/UpdatesPage";
import EventPage from "./pages/User/EventPage";
import ContactPage from "./pages/User/ContactPage";

// A component to set the page title
const SetPageTitle = ({ title }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

const User = () => {
  return (
    <>
      <Navbar />
      <main className="w-[90%] m-auto">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SetPageTitle title="GW Infra Solutions | Home" />
                <HomePage />
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <SetPageTitle title="About Us | GW Infra Solutions" />
                <AboutPage />
              </>
            }
          />
          <Route
            path="products"
            element={
              <>
                <SetPageTitle title="Products | GW Infra Solutions" />
                <ProductPage />
              </>
            }
          />
          <Route
            path="services"
            element={
              <>
                <SetPageTitle title="Our Services | GW Infra Solutions" />
                <ServicesPage />
              </>
            }
          />
          <Route
            path="update"
            element={
              <>
                <SetPageTitle title="Updates | GW Infra Solutions" />
                <UpdatesPage />
              </>
            }
          />
          <Route
            path="events"
            element={
              <>
                <SetPageTitle title="Events | GW Infra Solutions" />
                <EventPage />
              </>
            }
          />
          <Route
            path="contact"
            element={
              <>
                <SetPageTitle title="Contact Us | GW Infra Solutions" />
                <ContactPage />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default User;
