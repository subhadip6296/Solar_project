import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../assets/Assets";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { authAPI } from "@/services/api/api";
import { Loader2 } from "lucide-react";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear errors when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    let hasErrors = false;
    const newErrors = { email: "", password: "" };

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      hasErrors = true;
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 6 characters long";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      const response = await authAPI.login(formData);

      // The response is now directly the data object from the server
      if (response.token) {
        // Update auth context and localStorage
        login(response.token);

        toast({
          title: "Success",
          description: "Welcome back!",
          duration: 3000,
        });

        // Navigate to dashboard
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);

      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Invalid credentials",
        duration: 3000,
      });

      setErrors({
        email: error.errors?.email || "",
        password: error.errors?.password || "",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen grid lg:grid-cols-2">
      {/* Left Section - Visible only on large screens */}
      <div className="hidden lg:flex w-full h-full bg-[#009a8d] flex-col justify-center items-center">
        <img src={images.logo_white} width={210} alt="Logo" className="mb-8" />
        <h1 className="text-5xl font-medium text-center text-white max-w-[440px] leading-tight">
          Welcome back to Admin Portal
        </h1>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            src={images.logo_green}
            alt="Logo"
            className="mx-auto h-20 w-auto cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h2 className="mt-8 text-center text-2xl font-bold text-gray-900">
            Admin Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#009a8d] focus:border-[#009a8d] sm:text-sm ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#009a8d] focus:border-[#009a8d] sm:text-sm ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#009a8d] hover:bg-[#008075] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009a8d] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200">
              {loading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Back to Website Link */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Not an admin?{" "}
            <button
              onClick={() => navigate("/")}
              className="font-medium text-[#009a8d] hover:text-[#008075]">
              Return to website
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
