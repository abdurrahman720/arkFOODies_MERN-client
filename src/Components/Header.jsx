import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/png/logo-no-background.png";
const Header = () => {
  return (
    <div className="navbar bg-mybg font-custom1">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* menu section */}
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/recipes'>Recipes</Link>
            </li>
          </ul>
        </div>
        <img className="w-16 m-0 p-0" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* menu section */}
          <li>
          <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/recipes'>Recipes</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn">Join Us!</Link>
      </div>
    </div>
  );
};

export default Header;