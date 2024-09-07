import React from "react";
import Login from "./pages/Admin/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";

// A component to set the page title
const SetPageTitle = ({ title }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

const Admin = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <SetPageTitle title="Admin Login" />
              <Login />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <SetPageTitle title="Dashboard" />
              <Dashboard />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Admin;
