import React, { useState } from "react";
import "./Navbar.scss";
import { useDispatch } from "react-redux";
import { setSidebarOn } from "../../feature/sidebarSlice";
import { useSelector } from "react-redux";
import {
  fetchCategories,
} from "../../feature/categoriesSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCarts } from "../../feature/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <nav className="navbar mt-4">
      <div className="container">
        <div className="navbar-main flex justify-between items-center gap-20 ">
          <div className="navbar-left flex gap-4 items-center justify-center">
            <button onClick={() => dispatch(setSidebarOn())}>
              <i className="ri-menu-line text-[30px]"></i>
            </button>
            <Link to="/" className=" text-[30px]  ">
              LOGO
            </Link>
          </div>

          <div className="w-[900px] flex flex-col gap-5">
            <div className="flex items-center justify-between w-full bg-white p-1 ">
              <input
                value={searchTerm}
                type="text"
                placeholder="search your preferred items here"
                className="w-full text-black  border-none outline-none px-2"
                onChange={(e) => handleSearchTerm(e)}
              />
              <Link to={`search/${searchTerm}`} className="flex items-center justify-center w-[70px] h-[40px] bg-orange-600 ">
                <i className="ri-search-line"></i>
              </Link>
            </div>

          </div>

          <Link to="/cart">
            <div className="relative">
              <i className="ri-shopping-cart-line text-[35px]"></i>
              <span className="absolute top-0 -right-2 rounded-[50%] text-orange-500 bg-white w-9 h-9 text-center">
                {carts.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
