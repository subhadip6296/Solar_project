import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import BlogManagement from "./BlogManagement";
import EventManagement from "./EventManagement";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("blogs");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin");
    }
  }, [navigate]);

  return (
    <div className="flex-1 p-8">
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "blogs" ? "bg-pcolor text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("blogs")}>
          Manage Blogs
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "events" ? "bg-pcolor text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("events")}>
          Manage Events
        </button>
      </div>

      {activeTab === "blogs" ? <BlogManagement /> : <EventManagement />}
    </div>
  );
};

export default Dashboard;
