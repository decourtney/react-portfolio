// This component was put on hold to control my scope. Intentions were to create a simulated terminal
// with options to send email, view social media accounts, and I would like to attempt to create
// galaga using react - for fun.

import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TerminalMainMenu = () => {
  const text = "Functional Utility for Sending Emails";

  const wordAnim = {
    visible: {},
    hidden: {},
  };

  const characterAnim = {
    visible: { opacity: 1, display: "inline" },
    invisible: { opacity: 0, transition: { delay: 2, duration: 1 } },
    display: { display: "inline" },
    hidden: { display: "none", transition: { delay: 2, duration: 1 } },
  };

  return (
    <div className="flex text-4xl">
      <p>
        {/* Destructure title */}
        {text
          .split(" ")
          .map<React.ReactNode>(([fChar, ...rChars], i) => (
            <motion.span
              key={fChar + rChars + i + Math.random()}
              initial="hidden"
              animate="visible"
              variants={wordAnim}
              transition={{
                delay: 2,
                // delayChildren: i * 0.25,
                staggerChildren: 0.5,
              }}
            >
              {/* Assuming title format of string I'm only using the capital letters for additional anim */}
              {fChar === fChar.toUpperCase() ? (
                <motion.span
                  key={fChar + i + Math.random()}
                  className="text-blue-500"
                >
                  {fChar}
                </motion.span>
              ) : (
                <motion.span
                  key={fChar + i + Math.random()}
                  variants={characterAnim}
                >
                  {fChar}
                </motion.span>
              )}

              {/* Render remaining characters under one span tag */}
              {/* <motion.span
                key={rChars[i] + i + Math.random()}
                variants={characterAnim}
              >
                {rChars}
              </motion.span> */}

              {/* Possible future use if I ever need to animate individual characters */}
              {/* Map remaining characters */}
              {rChars
                .map<React.ReactNode>((character, j) => {
                  return (
                    <motion.span
                      key={fChar + j + Math.random()}
                      variants={characterAnim}
                    >
                      {character}
                    </motion.span>
                  );
                })
                .reduce((prev, curr) => [prev, "", curr])}
            </motion.span>
          ))
          .reduce((prev, curr) => [prev, " ", curr])}
      </p>
    </div>
  );
};

export default TerminalMainMenu;
