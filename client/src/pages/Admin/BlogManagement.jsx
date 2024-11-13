// client/src/pages/Admin/BlogManagement.jsx
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import axios from "axios";

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
  });
  const { url } = useContext(StoreContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${url}/api/blogs`);
      if (response.data.success) {
        setBlogs(response.data.blogs);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/blogs/create`, formData, {
        headers: { token },
      });
      if (response.data.success) {
        fetchBlogs();
        setFormData({ title: "", content: "", image: "" });
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/blogs/${id}`, {
        headers: { token },
      });
      if (response.data.success) {
        fetchBlogs();
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Blog Content"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          className="w-full p-2 border rounded h-32"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-pcolor text-white rounded">
          Add Blog
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="border rounded p-4">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="font-bold">{blog.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {blog.content.substring(0, 100)}...
            </p>
            <button
              onClick={() => handleDelete(blog._id)}
              className="px-3 py-1 bg-red-500 text-white rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManagement;
