import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import navbar from "../../images/navbar.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMouseOver = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Need to work on positioning and styling of navbar and background */}
      <nav className="navbar-bg relative flex justify-between w-full shadow- bg-slate-400">
        <img src={navbar} className="navbar-image w-full" />

        <div
          className=" absolute flex top-[15%] right-[8%] bg-emerald-500"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <span className="material-symbols-outlined cursor-pointer">MENU</span>
          {isMenuOpen && (
            <div className="absolute top-full right-0 bg-gray-200 p-2 z-10 shadow-md">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    to="/"
                    state={{ value: "/home" }}
                    className={`mr-6 ${
                      location.pathname === "/home" ? "pointer-events-none" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    state={{ value: "/projects" }}
                    className={`mr-6 ${
                      location.pathname === "/projects"
                        ? "pointer-events-none"
                        : ""
                    }`}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    state={{ value: "/about" }}
                    className={`mr-6 ${
                      location.pathname === "/about"
                        ? "pointer-events-none"
                        : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    state={{ value: "/contact" }}
                    className={`mr-6 ${
                      location.pathname === "/contact"
                        ? "pointer-events-none"
                        : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
