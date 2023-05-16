import React, { HTMLAttributes, useRef, useState } from "react";
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
  const buttonGlow = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if(!buttonGlow !== null){
      const ele = buttonGlow.current;
      ele?.classList.remove("bg-[#929292]", "animate-pulse");
      ele?.classList.add("bg-[#b6b6b6]");
    }
  };

  const handleMouseLeave = () =>{
    if (!buttonGlow !== null) {
      const ele = buttonGlow.current;
      ele?.classList.remove("bg-[#b6b6b6]");
      ele?.classList.add("bg-[#929292]", "animate-pulse");
    }
  }

  const handleMouseClick = (event: React.MouseEvent) => {
    setIsMenuOpen(!isMenuOpen);

    if (!buttonGlow !== null) {
      const ele = buttonGlow.current;
      ele?.classList.remove("bg-[#929292]" || "bg-[#b6b6b6]", "animate-pulse");
      ele?.classList.add("blink");

      setTimeout(() =>{
        ele?.classList.remove("blink");
        ele?.classList.add(
          "bg-[#929292]" || "bg-[#b6b6b6]",
          "animate-pulse"
        );
      }, 1400)
    }
  };

  return (
    <header>
      <nav className="navbar-bg relative w-full h-full overflow-hidden bg-black">
        <div className="loading-backlit absolute top-[25%] left-[45%] pointer-events-none" />
        <img src={loading} className="absolute w-[16%] top-0 left-[44%]" />

        <div id="navbar-button" className="absolute w-full h-full top-0 left-0">
          <img
            src={button_housing}
            className="absolute w-[5.5%] -top-[23%] right-[8%] z-20"
          />

          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => {
              handleMouseClick(e);
            }}
          >
            <div
              ref={buttonGlow}
              className={`button-backlit absolute top-[17%] right-[10.5%] w-[1.8%] h-[40%] rounded-full z-20 transition ease-in-out bg-[#929292] animate-pulse`}
            />
            <img
              src={button}
              className="absolute w-[2%] top-[10%] right-[10.4%] z-20 cursor-pointer active:w-[1.95%] active:top-[12.5%] active:right-[10.45%]"
              onClick={(e) => {
                handleMouseClick(e);
              }}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            />

            <AnimatePresence mode="wait">
              {/* {isMenuOpen && <Menu isMenuOpen={isMenuOpen} />} */}
              <Menu isMenuOpen={isMenuOpen} />
            </AnimatePresence>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
