import React, {
  useEffect,
  useState,
  useRef,
  ReactComponentElement,
  ReactElement,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainMenu from "./MainMenu";
import EmailForm from "./EmailForm";

const tPowerVariants = {
  initial: {
    background: "rgba(0,0,0,1)",
  },
  on: {
    background: [
      "radial-gradient(rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 2%)",
      "radial-gradient(rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 0%)",
      "radial-gradient(rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 75%)",
      "radial-gradient(rgba(31, 41, 55, 1) 0%, rgba(31, 41, 55, 1) 100%)",
      "rgba(31, 41, 55, 1)",
    ],
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "linear",
    },
  },
  off: {
    background: [
      "radial-gradient(rgba(31, 41, 55, 1) 0%, rgba(31, 41, 55, 1) 100%)",
      "radial-gradient(rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 75%)",
      "radial-gradient(rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 2%)",
      "radial-gradient(rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 2%)",
      "rgba(0,0,0,1)",
    ],
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "linear",
    },
  },
};

const tOverlayVariants = {
  initial: {
    x: "-50%",
    y: "-50%",
    transition: { delay: 0.5 },
  },
  on: {
    y: "-49%",
    transition: { duration: 0.2, repeat: Infinity, ease: "linear" },
  },
  off: {
    opacity: 0,
    transition: { duration: 2 },
  },
};

const TerminalDisplay = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [menuSelection, setMenuSelection] = useState("mainMenu");
  const [menuOption, setMenuOption] = useState(0);

  const animComplete = (anim: any) => {
    if (anim === "on") setDisplayMenu(true);
  };
  const animStart = (anim: any) => {
    if (anim === "off") setDisplayMenu(false);
  };

  const selectMenu = (selection: string) => {
    switch (selection) {
      case "mainMenu":
        return <MainMenu />;
      case "emailForm":
        return <EmailForm />;
      default:
        return <div>Menu Selection Broke!</div>;
    }
  };

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-[75%] h-[57%] p-8 -translate-x-[50%] -translate-y-[66%] font-vt323 text-xl text-green-400 text-green-glow screen-glow"
      variants={tPowerVariants}
      initial="initial"
      animate="on"
      exit="off"
      onAnimationComplete={(definition) => animComplete(definition)}
      onAnimationStart={(definition) => animStart(definition)}
    >
      <motion.div
        className="video-overlay absolute top-1/2 left-1/2 w-[100%] h-[100%] -translate-x-[50%] -translate-y-[50%] rounded-xl after:rounded-xl after:absolute after:w-full after:h-full will-change-transform pointer-events-none"
        key="video-overlay"
        variants={tOverlayVariants}
        initial="initial"
        animate="on"
        exit="off"
      />
      {displayMenu ? selectMenu(menuSelection) : null}
    </motion.div>
  );
};

export default TerminalDisplay;
