import React, { useEffect, useState } from "react";
import Login from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";

const Admin = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return token ? <Dashboard /> : <Login />;
};

export default Admin;
