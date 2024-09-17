import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import User from "./User";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./pages/Admin/Dashboard";

// A component to set the page title
const SetPageTitle = ({ title }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div>
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <SetPageTitle title="GW Infra Solutions | Home" />
              <User />
            </>
          }
        />
        {/* Admin route */}
        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Admin setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/admin" />}
        />
        {/* User routes nested under /user */}
        <Route
          path="/user/*"
          element={
            <>
              <SetPageTitle title="User | GW Infra Solutions" />
              <User />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
