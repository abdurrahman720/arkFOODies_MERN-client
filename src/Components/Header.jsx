import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/png/logo-no-background.png";
import { UserContext } from "../Context/UserContext/Context";
const Header = () => {
  const { user, logOut } = useContext(UserContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Log Out Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-myprimary text-mybg rounded-box w-52"
          >
            {/* menu section */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-active btn-ghost" : ""
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-active btn-ghost" : ""
                }
                to="/recipes"
              >
                Recipes
              </NavLink>
            </li>
            {user?.uid && (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "btn btn-active btn-ghost" : ""
                    }
                    to="/addrecipe"
                  >
                    Add Recipe
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "btn btn-active btn-ghost" : ""
                    }
                    to="/myreviews"
                  >
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "btn btn-active btn-ghost" : ""
                    }
                    to="/myrecipes"
                  >
                    My Recipes
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <img className="w-16 m-0 p-0" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* menu section */}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-active btn-ghost" : ""
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-active btn-ghost" : ""
              }
              to="/recipes"
            >
              Recipes
            </NavLink>
          </li>
          {user?.uid && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "btn btn-active btn-ghost" : ""
                  }
                  to="/addrecipe"
                >
                  Add Recipe
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "btn btn-active btn-ghost" : ""
                  }
                  to="/myreviews"
                >
                  My Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "btn btn-active btn-ghost" : ""
                  }
                  to="/myrecipes"
                >
                  My Recipes
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <Link onClick={handleLogOut} to="/" className="btn">
            Log Out
          </Link>
        ) : (
          <Link to="/login" className="btn">
            Join Us!
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
