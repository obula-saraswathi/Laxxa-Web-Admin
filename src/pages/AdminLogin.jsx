import React from "react";
import AuthLayout from "../components/AuthLayout";
import globe from "../assets/images/globe.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <AuthLayout image={globe}>

      <h1 className="text-4xl font-semibold mb-2">
        Welcome
      </h1>

      <p className="text-gray-500 mb-8">
        Please Login To Admin Dashboard
      </p>

      <input
        type="email"
        placeholder="Enter Your Email"
        className="w-full border rounded-md p-3 mb-4"
      />

      <input
        type="password"
        placeholder="Enter Your Password"
        className="w-full border rounded-md p-3 mb-3"
      />

      <div className="text-right text-sm text-gray-500 mb-6">
        <Link to="/recover">Forgot Password ?</Link>
      </div>

      <button className="w-full bg-black text-white py-3 rounded-md">
        Login
      </button>

    </AuthLayout>
  );
};

export default AdminLogin;