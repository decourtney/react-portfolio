import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";
import navbar from "../../images/navbar.png";
import button_housing from "../../images/button_housing.png";
import button from "../../images/button.png";
import loading from "../../images/loading.png";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isHover, setIsHover] = useState(false);
  const [buttonGlow, setButtonGlow] = useState(false);

  const handleMouseOver = () => {
    setIsHover(!isHover);
  };

  const handleMouseClick = (event: React.MouseEvent) => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar-bg relative w-full h-full bg-black">
        <div className="loading-backlit absolute top-[25%] left-[45%] pointer-events-none" />
        <img src={loading} className="absolute w-[16%] top-0 left-[44%]" />

        <div className="absolute w-full h-full  top-0 left-0">
          <div
            className={`button-backlit absolute top-[0%] right-[0%] z-50 ${
              isHover ? "bg-[#42a036]" : "bg-[#929292] animate-pulse" // #b7b7b7  #42a036
            }  transition ease-in-out`}
          />
          <img
            src={button_housing}
            className="absolute w-[5%] top-[0%] right-[0%]"
          />

          <div
            onClick={(e) => {
              handleMouseClick(e);
            }}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOver}
          >
            <img
              src={button}
              className="absolute w-[5%] top-[0%] right-[0%] z-20 cursor-pointer active:w-[45%] active:top-[0%] active:right-[0%]"
            />

            <p className="bg-green-400">Menu</p>
            <AnimatePresence mode="wait">
              {isMenuOpen && <Menu isMenuOpen={isMenuOpen} />}
            </AnimatePresence>
          </div>
        </div>

        {/* <div className=" absolute flex top-[100%] right-[8%] z-10 bg-emerald-500">
          <p>Menu POS</p>
          <AnimatePresence mode="wait">
            {isMenuOpen && <Menu isMenuOpen={isMenuOpen} />}
          </AnimatePresence>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
