import React from "react";
import AuthLayout from "../components/AuthLayout";
import recover from "../assets/images/recover.png";
import logo from "../assets/images/logo.png";

const RecoverPassword = () => {
  return (
    <AuthLayout image={recover}>

      <h1 className="text-3xl font-semibold mb-4">
        Recover Password
      </h1>

      <p className="text-gray-500 mb-8">
        Enter your registered email address and we'll send you a password reset link.
      </p>

      <input
        type="email"
        placeholder="Enter Your Email"
        className="w-full border rounded-md p-3 mb-6"
      />

      <button className="w-full bg-black text-white py-3 rounded-md">
        Send Request
      </button>

    </AuthLayout>
  );
};

export default RecoverPassword;