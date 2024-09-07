import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

const Login = () => {
  const { url, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    loginError: "",
    passwordError: "",
  });

  const { login, password } = formData;
  const { loginError, passwordError } = errors;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "login") {
      const loginRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        loginError: loginRegex.test(value)
          ? ""
          : "Please enter a valid email address.",
      });
    } else if (name === "password") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setErrors({
        ...errors,
        passwordError: passwordRegex.test(value)
          ? ""
          : "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      });
    }
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const newUrl = `${url}/api/user/login`;
    const response = await axios.post(newUrl, formData);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } else {
      alert(response.data.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onLogin} className="space-y-6">
            <InputField
              id="login"
              label="Email"
              type="text"
              value={login}
              onChange={handleChange}
              error={loginError}
            />
            <InputField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={handleChange}
              error={passwordError}
            />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
                Login
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

export default Login;
