import React, { use, useContext, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../provider/AuthContext";
import { IoArrowRedoCircleOutline, IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "true") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }

    console.log("Dark mode status:", isDarkMode);
  }, []);

  const handleMouse = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        // console.log("User logged out successfully");
        setIsMenuOpen(false);
        navigate("/");
      })
      .catch(() => {
        // console.error("Error logging out:", error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-medium" : "font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-primary font-medium" : "font-medium"
          }
        >
          Services
        </NavLink>
      </li>
      {user && (
        <li className="relative " onClick={handleMouse}>
          <span className="flex justify-center items-center hover:text-primary cursor-pointer">
            Dashboard{" "}
            <RiArrowDropDownLine
              size={24}
              className={isDropdownOpen ? "rotate-180" : ""}
            />{" "}
          </span>
          {isDropdownOpen && (
            <ul
              onMouseLeave={handleMouse}
              className="absolute flex flex-col justify-center gap-2 top-6 bg-base-100 border border-gray-100  rounded w-40 p-3"
            >
              <li className="hover:text-primary">
                <NavLink
                  to="/addService"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-medium" : "font-medium"
                  }
                >
                  Add Service
                </NavLink>
              </li>
              <li className="hover:text-primary">
                <NavLink
                  to="/manageService"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-medium" : "font-medium"
                  }
                >
                  Manage Service
                </NavLink>
              </li>
              <li className="hover:text-primary">
                <NavLink
                  to="/bookedServices"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-medium" : "font-medium"
                  }
                >
                  Booked-Services
                </NavLink>
              </li>
              <li className="hover:text-[#309975]">
                <NavLink
                  to="/service-to-do"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-medium" : "font-medium"
                  }
                >
                  Service-To-Do
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      )}
    </>
  );

  const handleThemeToggle = () => {
    console.log("Theme toggled:", !isDarkMode);
    localStorage.setItem("theme", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex justify-between items-center p-4 container mx-auto sticky top-0 z-10 bg-base-100">
      <div className="relative flex justify-center items-center gap-2 md:block">
        <div className="md:hidden ">
          {isMenuOpen ? (
            <IoClose size={24} onClick={handleMenuToggle} />
          ) : (
            <IoMenu size={24} onClick={handleMenuToggle} />
          )}
        </div>
        <h1 className="md:text-3xl text-2xl font-medium">
          Edu<span className="text-primary">Spark</span>
        </h1>

        {isMenuOpen && (
          <ul
            className="absolute top-10 left-0 bg-base-100 border border-gray-100 rounded p-4 space-y-3 z-1"
            onMouseLeave={handleMenuToggle}
          >
            <div className="md:hidden space-y-3">{links}</div>

            <Link
              onClick={handleLogout}
              className="flex  items-center gap-2 hover:text-primary "
            >
              <IoArrowRedoCircleOutline size={20} />
              Logout
            </Link>
          </ul>
        )}
      </div>

      <div className="flex justify-center items-center gap-4 mr-4 z-1">
        <ul className="gap-4 hidden md:flex">{links}</ul>
      </div>

      <div className="flex justify-center items-center gap-4">
        {user ? (
          <div className="relative cursor-pointer">
            <div
              className="rounded-full w-10 h-10 overflow-hidden relative"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <img referrerPolicy="no-referrer" srcSet={user.photoURL} alt="" />
            </div>
            {isProfileMenuOpen && (
              <ul
                className="absolute top-10 left-0 bg-base-100 border border-gray-100 hidden md:block rounded p-4 space-y-3 z-1"
                onMouseLeave={() => setIsProfileMenuOpen(false)}
              >
                <Link
                  onClick={handleLogout}
                  className="flex  items-center gap-2 hover:text-primary "
                >
                  <IoArrowRedoCircleOutline size={20} />
                  Logout
                </Link>
              </ul>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4">
            <button className="bg-primary text-white btn rounded">
              <NavLink to={"/login"}>Login</NavLink>
            </button>
            <button className="hidden md:block btn btn-soft btn-primary rounded">
              <NavLink to={"/register"}>Register</NavLink>
            </button>
          </div>
        )}

        <div className="flex items-center">
          <label className="toggle text-base-content">
            <input
              type="checkbox"
              value="dark"
              onClick={handleThemeToggle}
              checked={isDarkMode}
              className="theme-controller"
            />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
