import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
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
      "rgba(0,0,0,1)"
    ],
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "linear",
    },
  },
};

const variants2 = {
  initial: {
    translateX: "-50%",
    translateY: "-50%",
    transition: { delay: 0.5 },
  },
  on: {
    translateY: "-49%",
    transition: { duration: 0.2, repeat: Infinity, ease: "linear" },
  },
  off: {
    opacity: 0,
    transition: { duration: 3 },
  },
};

const TerminalDisplay = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-[53%] h-[57%] p-8 -translate-x-[50%] -translate-y-[66%] text-xl font-vt323 text-green-500"
      variants={variants}
      initial="initial"
      animate="on"
      exit="off"
    >
      {/* <AnimatePresence mode="wait"> */}
        <motion.div
          className="video-overlay absolute top-1/2 left-1/2 w-[100%] h-[100%] -translate-x-[50%] -translate-y-[50%] rounded-xl after:rounded-xl after:absolute after:w-full after:h-full pointer-events-none"
          key="video-overlay"
          variants={variants2}
          initial="initial"
          animate="on"
          exit="off"
        />
      {/* </AnimatePresence> */}
    </motion.div>
  );
};

export default TerminalDisplay;
