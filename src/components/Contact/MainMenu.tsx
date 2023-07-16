import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const wordAnim = {
  visible: {},
  hidden: { transitionEnd: { display: "none" } },
};

const characterAnim = {
  visible: { opacity: 1 },
  hidden: { opacity: 0, transition: { duration: 1 } },
};

const TerminalMainMenu = () => {
  const text = "Framework for User Engagement";
  return (
    <div className="flex justify-center text-4xl">
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial="visible"
          animate="hidden"
          variants={wordAnim}
          transition={{delay: 1, delayChildren: index * 0.25, staggerChildren: 0.5 }}
        >
          {word.split("").map((character, index) => {
            return (
              <motion.span key={index} variants={characterAnim}>
                {character}
              </motion.span>
            );
          })}
        </motion.span>
      ))}
    </div>
  );
};

export default TerminalMainMenu;

// Framework for User Engagement
