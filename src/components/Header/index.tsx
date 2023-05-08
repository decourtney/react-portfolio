import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import navbar from "../../images/navbar.png";
import button_housing from "../../images/button_housing.png";
import button from "../../images/button.png";
import loading from "../../images/loading.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isHover, setIsHover] = useState(false);
  const [buttonGlow, setButtonGlow] = useState(false);

  const handleMouseOver = () => {
    setIsHover(!isHover);
  };

  const handleMouseClick = (event: React.MouseEvent) => {
    console.log(event.target);
  };

  const handleMouseDown = () =>{
    setButtonGlow(!buttonGlow);
  }

  return (
    <header>
      <nav className="navbar-bg relative w-full h-full bg-black">
        <div className="loading-backlit absolute top-[25%] left-[45%] pointer-events-none" />
        <img src={loading} className="absolute w-[16%] top-0 left-[44%]" />

        <div
          className={`button-backlit absolute top-[25%] right-[8.2%] z-10 ${
            isHover ? "bg-[#42a036]" : "bg-[#929292] animate-pulse" // #b7b7b7  #42a036
          }  transition ease-in-out`}
        />

        <img
          src={button_housing}
          className="absolute w-[4%] top-[9.5%] right-[7%]"
        />
        <img
          src={button}
          className="absolute w-[2%] top-[17%] right-[7.98%] z-20 cursor-pointer active:w-[1.9%] active:top-[19%] active:right-[8%]"
          onClick={(e) => {
            handleMouseClick(e);
          }}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
          onMouseDown={handleMouseDown}
        />

        {/* <div
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
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
