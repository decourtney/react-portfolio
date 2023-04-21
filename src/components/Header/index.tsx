import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { setIsOpen, setIsOpening, setContent } from "../../reducers/panelSlice";

const Header = ({ onLinkClicked }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();



  const handleMouseOver = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleMenuClick = (link: string) => {
  //   onLinkClicked(link);
  // };

  console.log("Header is rendered")

  return (
<<<<<<< Updated upstream
    <header className="flex py-10 px-20 justify-between z-10 bg-slate-400">
      <div className=" bg-violet-500">
        <h1>DC</h1>
      </div>
      <div
        className="relative bg-emerald-500"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOver}
      >
        <span className="material-symbols-outlined cursor-pointer">MENU</span>
        {isMenuOpen && (
          <div className="absolute top-full right-0 bg-gray-200 p-2 shadow-md">
            <ul className="flex flex-col space-y-2">
              <li>
                  <Link to="/" onClick={() => onLinkClicked("home")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" onClick={() => onLinkClicked("projects")}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => onLinkClicked("about")}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => onLinkClicked("contact")}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
=======
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
>>>>>>> Stashed changes
    </header>
  );
};

export default Header;
