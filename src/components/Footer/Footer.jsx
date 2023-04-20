import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-orange-600 text-white p-20 mt-6 ">
      <div className="container py-4 text-center flex flex-col gap-6">
        <div className="flex justify-center items-center  gap-[20px]">
          <Link
            to="/"
            className="relative before:absolute before:h-[20px] before:w-[1px] before:bg-white before:right-[-20px]"
          >
            privacy policy
          </Link>
          <div className="vert-line"></div>
          <Link
            to="/"
            className="relative before:absolute before:h-[20px] before:w-[1px] before:bg-white before:right-[-20px]"
          >
            term of service
          </Link>
          <div className="vert-line"></div>
          <Link to="/" className="text-uppercase">
            About SnapUp.
          </Link>
        </div>
        <span className="text-white copyright-text text-manrope fs-14 fw-3">
          &copy; 2022 SnapUp. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
