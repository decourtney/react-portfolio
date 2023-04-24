import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
      const location = useLocation();

  const handleMouseOver = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="flex justify-between w-full py-5 px-10 bg-slate-400">
        <div className="flex justify-start">
          <h1>DC</h1>
        </div>
        <div
          className="relative flex bg-emerald-500"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <span className="material-symbols-outlined cursor-pointer">MENU</span>
          {isMenuOpen && (
            <div className="absolute top-full right-0 bg-gray-200 p-2 z-10 shadow-md">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link to="/" state={{ value: '/home' }} className={`mr-6 ${location.pathname === "/home" ? "pointer-events-none" : ""}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" state={{ value: '/projects' }} className={`mr-6 ${location.pathname === "/projects" ? "pointer-events-none" : ""}`}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/" state={{ value: '/about' }} className={`mr-6 ${location.pathname === "/about" ? "pointer-events-none" : ""}`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" state={{ value: '/contact' }} className={`mr-6 ${location.pathname === "/contact" ? "pointer-events-none" : ""}`}>
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
