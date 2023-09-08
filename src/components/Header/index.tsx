import React, { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import Marquee from "./Marquee";
import menu_frame from "../../images/menu_frame.png";
import menu_housing from "../../images/menu_housing.png";
import menu_cap from "../../images/menu_cap.png";
import menu_button from "../../images/menu_button.png";
import marquee_frame from "../../images/marquee_frame.png";
import { AnimatePresence, AnimationDefinition, motion } from "framer-motion";
import { useAppSelector } from "../../reducers/hooks";

const Header = () => {
  const incMessage = useAppSelector((state) => state.project.marqueeMsg);
  const isLoading = useAppSelector((state) => state.project.isLoading);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDisplayMessage, setIsDisplayMessage] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDisplayMenuCap, setIsDisplayMenuCap] = useState(true);
  const waitingMessage = useRef(""); // Can use an array for queing multiple messages
  const displayedMessage = useRef("");
  const menuRef = useRef<HTMLDivElement>(null);
  const displayTimer = 2000;
  const timeouts: NodeJS.Timeout[] = [];

  // Closes menu when clicked anywhere except the menu button section
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

      waitingMessage.current = "";
    }
  }, [isAnimating, incMessage]);

  // A scroll or exit anim is complete
  const marqueeAnimComplete = (def: string) => {
    if (def === "scroll") {
      const t = setTimeout(() => {
        setIsDisplayMessage(false);
      }, displayTimer);
      timeouts.push(t);
    } else {
      // Clear timers for any currently displayed messages
      for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
      }
      setIsAnimating(false);
    }
  };

  // Open/close menu
  const handleMouseClick = (event: React.MouseEvent) => {
    setIsMenuOpen(!isMenuOpen);
    setIsDisplayMenuCap(false);
  };

  const handleMenuCapDisplay = (anim: AnimationDefinition) => {
    if (anim === "close") setIsDisplayMenuCap(true);
  };

  return (
    <header>
      <nav className="navbar-bg relative w-full h-full bg-black">
        <div className="marquee-container absolute top-1/2 left-1/2 w-[21%] h-[75%] -translate-x-[50%] -translate-y-[51%] pointer-events-none bg-neutral-900 overflow-hidden">
          <div className="marquee-overlay absolute w-full h-full z-10" />
          <AnimatePresence mode="wait">
            {isDisplayMessage && (
              <Marquee
                msg={displayedMessage.current}
                marqueeAnimComplete={marqueeAnimComplete}
              />
            )}
          </AnimatePresence>
        </div>
        <img
          src={marquee_frame}
          className="absolute w-[24%] top-[52%] left-[48.5%] -translate-x-[50%] -translate-y-[50%]"
        />

        {/* Menu button section */}
        <section
          ref={menuRef}
          id="navbar-button"
          className="absolute h-full top-0 right-[8%] "
        >
          <img src={menu_frame} className="h-full" />
          <img
            src={menu_housing}
            className="absolute bottom-0 left-[23%] h-full z-20"
          />
          {isDisplayMenuCap && (
            <img
              src={menu_cap}
              className="absolute top-0 left-[23%] h-full pointer-events-none z-50"
            />
          )}

          <button
            onClick={(e) => {
              handleMouseClick(e);
            }}
            disabled={isLoading}
          >
            <motion.img
              src={menu_button}
              className="absolute top-0 left-0 h-full z-20 cursor-pointer drop-shadow-none"
              animate={{
                filter: [
                  "drop-shadow(0px 0px 1px #00ff5d)",
                  "drop-shadow(0px 0px 3px #30ff30)",
                ],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{
                filter:
                  "drop-shadow(0px 0px 1px #00ff00) drop-shadow(0px 0px 2px #30ff30) drop-shadow(0px 0px 3px #67ff67)",
              }}
            />
          </button>
        </section>
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <Menu
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              handleMenuCapDisplay={handleMenuCapDisplay}
            />
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
