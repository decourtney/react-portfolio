import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";
import Marquee from "./Marquee";
import navbar from "../../images/navbar.png";
import button_housing from "../../images/button_housing.png";
import menu_cap from "../../images/button_housing_cap.png"
import button from "../../images/button.png";
import loading from "../../images/loading.png";
import { AnimatePresence } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";

// Header button animations are still using CSS 'blink' class = change to framer-motion for conditional colors red/green
// animate-pulse is Tailwind class
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonGlow = useRef<HTMLDivElement>(null);
  const incMessage = useAppSelector((state) => state.project.marqueeMsg);
  const [isDisplayMessage, setIsDisplayMessage] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const waitingMessage = useRef("");
  const displayedMessage = useRef("");
  const displayTimer = 2000;
  const timeouts: NodeJS.Timeout[] = [];
  const menuRef = useRef<HTMLDivElement>(null);
  const isLoading = useAppSelector((state) => state.project.isLoading);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    });

    return document.removeEventListener("click", (e) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    });
  }, []);

  // Save message in case one is already being displayed
  useEffect(() => {
    waitingMessage.current = incMessage;
  }, [incMessage]);

  // Triggered when either an Exit anim stops or new incoming message
  useEffect(() => {
    if (isAnimating && waitingMessage.current) setIsDisplayMessage(false);

    if (!isAnimating && waitingMessage.current) {
      displayedMessage.current = waitingMessage.current;
      setIsAnimating(true);
      setIsDisplayMessage(true);

      // Clear waiting messages - can be converted to array if necessary
      waitingMessage.current = "";
    }
  }, [isAnimating, incMessage]);

  // Let us know when a scroll or exit anim is complete
  const marqueeAnimComplete = (def: string) => {
    if (def === "scroll") {
      const t = setTimeout(() => {
        setIsDisplayMessage(false);
      }, displayTimer);
      timeouts.push(t);
    } else {
      // Clear timers for any standing displayed messages
      for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
      }
      setIsAnimating(false);
    }
  };

  const handleMouseEnter = () => {
    if (!buttonGlow !== null) {
      const ele = buttonGlow.current;
      ele?.classList.remove("bg-[#929292]", "animate-pulse");
      ele?.classList.add("bg-[#b6b6b6]");
    }
  };

  const handleMouseLeave = () => {
    if (!buttonGlow !== null) {
      const ele = buttonGlow.current;
      ele?.classList.remove("bg-[#b6b6b6]");
      ele?.classList.add("bg-[#929292]", "animate-pulse");
    }
  };

  // Add code to close the menu if user clicks anywhere else on screen
  const handleMouseClick = (event: React.MouseEvent) => {
    setIsMenuOpen(!isMenuOpen);

    // Only play when button is clicked
    if (event) {
      if (!buttonGlow !== null) {
        const ele = buttonGlow.current;
        ele?.classList.remove(
          "bg-[#929292]" || "bg-[#b6b6b6]",
          "animate-pulse"
        );
        ele?.classList.add("blink");

        setTimeout(() => {
          ele?.classList.remove("blink");
          ele?.classList.add("bg-[#929292]" || "bg-[#b6b6b6]", "animate-pulse");
        }, 1400);
      }
    }
  };

  return (
    <header>
      <nav className="navbar-bg relative w-full h-full bg-black">
        <div className="marquee-container absolute top-1/2 left-1/2 w-[21%] h-[75%] -translate-x-[50%] -translate-y-[51%] pointer-events-none bg-neutral-900 overflow-hidden">
          <div className="marquee-overlay absolute w-full h-full z-10" />
          {isDisplayMessage && (
            <AnimatePresence mode="wait">
              <Marquee
                msg={displayedMessage.current}
                marqueeAnimComplete={marqueeAnimComplete}
              />
            </AnimatePresence>
          )}
        </div>
        <img
          src={loading}
          className="absolute w-[24%] top-[52%] left-[48.5%] -translate-x-[50%] -translate-y-[50%]"
        />

        <div
          ref={menuRef}
          id="navbar-button"
          className="absolute w-full h-full top-0 left-0"
        >
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
              className="absolute w-[2%] top-[14%] right-[10.4%] z-20 cursor-pointer active:w-[1.95%] active:top-[15%] "
            />
          </button>
          <AnimatePresence mode="wait">
            {isMenuOpen && !isLoading ? (
              <Menu
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            ) : null}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;
