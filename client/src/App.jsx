import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/default/Navbar";
import Footer from "./components/default/Footer";
import ProductPage from "./pages/ProductPage";

// A component to set the page title
const SetPageTitle = ({ title }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

const App = () => {
  return (
    <>
      <Navbar />
      <main className="w-[80%] m-auto">
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
            path="/about"
            element={
              <>
                <SetPageTitle title="About Us | GW Infra Solutions" />
                <AboutPage />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <SetPageTitle title="Products | GW Infra Solutions" />
                <ProductPage />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <SetPageTitle title="Our Services | GW Infra Solutions" />
                <ServicesPage />
              </>
            }
          />
          <Route
            path="/contact"
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

export default App;
