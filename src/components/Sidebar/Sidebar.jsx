import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarStatus, setSidebarOff } from "../../feature/sidebarSlice";
import { getAllCategories } from "../../feature/categoriesSlice";
import { Link } from "react-router-dom";

import "./Sidebar.scss";

const Sidebar = () => {
  const OpenSidebar = useSelector(getSidebarStatus);
  const dispatch = useDispatch();

  const categories = useSelector(getAllCategories);

  return (
    <div className="sidebar">
      <div
        className={` ${
          OpenSidebar ? "translate-x-[0]" : ""
        } sidebar-main fixed left-0 top-0 bottom-0 w-[300px] bg-white p-8  translate-x-[-200%] transition-all shadow-3xl z-[100]`}
      >
        <div className="flex justify-between items-center">
          <h2>ALL CATEGORIES</h2>
          <button
            className="g h-[60px]"
            onClick={() => dispatch(setSidebarOff())}
          >
            <i className="ri-close-line text-[20px]"></i>
          </button>
        </div>
        <div>
          <ul className="flex flex-col gap-8 mt-[20px] overflow-y-scroll h-[800px] whitespace-nowrap cart-list ">
            {categories.map((category, index) => (
              <li
                key={index}
                className="relative after:absolute after:w-full after:bg-gray-400 after:h-[1px] after:left-0 after:bottom-[-10px] hover:text-orange-400 hover:translate-x-1 hover:transition-all"
              >
                <Link to={`category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
