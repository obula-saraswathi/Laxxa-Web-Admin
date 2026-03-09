import React from "react";
import AuthLayout from "../components/AuthLayout";
import reset from "../assets/images/locks.png";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const ResetSuccess = () => {
  return (
    <AuthLayout image={reset}>

      <div className="text-center">

        <div className="text-green-500 text-4xl mb-4">
          ✓
        </div>

        <h2 className="text-2xl font-semibold mb-3">
          Password Reset Successfully
        </h2>

        <p className="text-gray-500 mb-8">
          Your password has been updated. You can now log in using your new credentials.
        </p>

        <Link to="/">
          <button className="w-full bg-black text-white py-3 rounded-md">
            Back to Login
          </button>
        </Link>

      </div>

    </AuthLayout>
  );
};

export default ResetSuccess;