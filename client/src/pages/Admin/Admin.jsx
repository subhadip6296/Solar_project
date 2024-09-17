import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../assets/Assets";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

const Admin = ({ setIsAuthenticated }) => {
  const { url, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    loginError: "",
    passwordError: "",
    passwordStrong: "",
  });

  const { login, password } = formData;
  const { loginError, passwordError, passwordStrong } = errors;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "login") {
      const loginRegex = /^[a-z0-9]+@[^\s@]+\.[^\s@]+$/i;
      setErrors({
        ...errors,
        loginError: loginRegex.test(value)
          ? ""
          : "Please enter a valid email or username.",
      });
    } else if (name === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setErrors({
        ...errors,
        passwordError: passwordRegex.test(value)
          ? ""
          : "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        passwordStrong: passwordRegex.test(value)
          ? "Your password is strong."
          : "",
      });
    }
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const newUrl = `${url}/api/user/login`;

    try {
      const response = await axios.post(newUrl, { email: login, password });
      if (response.data.success) {
        // Set the token in context and localStorage
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        // Update the authentication state
        setIsAuthenticated(true);

        // Navigate to the dashboard
        navigate("/dashboard");
      } else {
        setErrors({ ...errors, loginError: response.data.message });
      }
    } catch (error) {
      setErrors({ ...errors, loginError: "Login failed. Please try again." });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      navigate("/dashboard");
    }
  }, [navigate, setIsAuthenticated]);

  return (
    <div className="w-[100vw] h-[100vh] grid lg:grid-cols-2 justify-center items-center">
      <div className="hidden lg:flex w-[50vw] h-full bg-pcolor flex-col justify-center items-center">
        <img src={images.logo_white} width={210} alt="" />
        <h1 className="mt-8 text-5xl font-[500] text-center text-white max-w-[440px] leading-[1.15]">
          Welcome back to Admin Portal
        </h1>
      </div>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            onClick={() => navigate("/")}
            alt="Your Company"
            src={images.logo_green}
            className="mx-auto h-20 w-auto cursor-pointer"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Enter the credentials
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onLogin} className="space-y-6">
            <InputField
              id="login"
              label="Email/Username"
              type="text"
              value={login}
              onChange={handleChange}
              error={loginError}
            />

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-pcolor hover:text-black">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 pl-4 pr-4"
                />
                <p className="text-[12px] pl-2 text-red-600">{passwordError}</p>
                <p className="text-[12px] mt-[2px] pl-2 text-green-500">
                  {passwordStrong}
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-pcolor px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ id, label, type, value, onChange, error }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <div className="mt-2">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 pl-4 pr-4"
      />
      <p className="text-[12px] pl-2 text-red-600">{error}</p>
    </div>
  </div>
);

export default Admin;
