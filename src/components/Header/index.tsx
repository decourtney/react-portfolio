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
  const [isClick, setIsClick] = useState(false);

  const handleMouseOver = () => {
    setIsHover(!isHover);
  };

  const handleMouseClick = (event: React.MouseEvent) => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseDown = () => {
    setIsClick(!isClick);
  };

  const handleMouseUp = () => {
    setIsClick(!isClick);
  };

  return (
    <header>
      <nav className="navbar-bg relative w-full h-full bg-black">
        <div className="loading-backlit absolute top-[25%] left-[45%] pointer-events-none" />
        <img src={loading} className="absolute w-[16%] top-0 left-[44%]" />

        <div id="navbar-button" className="absolute w-full h-full top-0 left-0">
          <img
            src={button_housing}
            className="absolute w-[5.5%] -top-[23%] right-[8%] z-20"
          />

          {/* <div
            className="bg-blue-500 z-50"
            onClick={(e) => {
              handleMouseClick(e);
            }}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOver}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          > */}
          <div
            className={`button-backlit absolute top-[17%] right-[10.5%] w-[1.8%] h-[40%] rounded-full z-20 ${
              isClick
                ? "bg-[#c4ca13]"
                : isHover
                ? "bg-[#b6b6b6]"
                : "bg-[#929292] animate-pulse" // #b7b7b7  #42a036
            }  transition ease-in-out`}
          />
          <img
            src={button}
            className="absolute w-[2%] top-[10%] right-[10.4%] z-20 cursor-pointer active:w-[1.95%] active:top-[12.5%] active:right-[10.45%]"
            onClick={(e) => {
              handleMouseClick(e);
            }}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOver}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          />

          <AnimatePresence mode="wait">
            {/* {isMenuOpen && <Menu isMenuOpen={isMenuOpen} />} */}
            <Menu isMenuOpen={isMenuOpen} />
          </AnimatePresence>
          {/* </div> */}
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
