import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/default/Navbar";
import Footer from "./components/default/Footer";

// A component to set the page title
const SetPageTitle = ({ title }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
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
      </Router>
      <Footer />
    </div>
  );
};

export default App;
