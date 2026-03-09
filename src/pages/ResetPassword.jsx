import React from "react";
import AuthLayout from "../components/AuthLayout";
import locks from "../assets/images/reset.png";
import logo from "../assets/images/logo.png";

const ResetPassword = () => {
  return (
    <AuthLayout image={locks}>

      <h1 className="text-3xl font-semibold mb-3">
        Reset Password
      </h1>

      <p className="text-gray-500 mb-6">
        Create a new secure password to regain access to your account.
      </p>

      <input
        type="password"
        placeholder="New Password"
        className="w-full border rounded-md p-3 mb-4"
      />

      <input
        type="password"
        placeholder="Confirm New Password"
        className="w-full border rounded-md p-3 mb-6"
      />

      <button className="w-full bg-black text-white py-3 rounded-md">
        Reset Password
      </button>

    </AuthLayout>
  );
};

export default ResetPassword;