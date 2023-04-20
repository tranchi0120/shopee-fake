import React from "react";
import "./Header.scss";
import Navbar from "./../Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-orange-600 text-white p-5 ">
      <div className="container">
        <div className="header-main flex justify-between border-b-[1px] border-x-white pb-5">
          <div className="header-links   ">
            <ul className=" flex gap-[20px]  ">
              <Link className="relative before:absolute before:h-[20px] before:w-[1px] before:bg-white before:right-[-10px]">
                Seller Center
              </Link>
              <Link className="relative before:absolute before:h-[20px] before:w-[1px] before:bg-white before:right-[-10px]">
                Download
              </Link>
              <li>Follow us on</li>
            </ul>
          </div>
          <div className="header-links">
            <ul className="flex gap-[20px]">
              <li className="relative before:absolute before:h-[20px] before:w-[1px] before:bg-white before:right-[-10px]">
                Support
              </li>
              <li className="relative before:absolute before:h-[20px] before:w-[1px] before:bg-white before:right-[-10px]">
                Register
              </li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
