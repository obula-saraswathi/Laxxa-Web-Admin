import React from "react";
import watermark from "../assets/images/watermark.png";
import logo from "../assets/images/logo.png";

const AuthLayout = ({ image, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">

      <div className="w-[1100px] h-[650px] bg-white rounded-xl overflow-hidden flex shadow-lg">

        {/* LEFT SIDE */}
        <div className="w-1/2 bg-[#111] flex items-center justify-center relative">

          {/* */}
          <img
            src={logo}
            alt="LAXXA"
            className="w-28 absolute top-8 left-1/2 -translate-x-1/2"
          />

          {/* LEFT ILLUSTRATION */}
          <img
            src={image}
            alt="illustration"
            className="w-[320px]"
          />

        </div>

        {/* RIGHT SIDE */}
        <div
          className="w-1/2 flex items-center justify-center"
          style={{
            backgroundImage: `url(${watermark})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "600px"
          }}
        >
          <div className="w-[350px] text-center">
            {children}
          </div>
        </div>

      </div>

    </div>
  );
};

export default AuthLayout;