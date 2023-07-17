import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const wordAnim = {
  visible: {},
  hidden: {},
};

const characterAnim = {
  // visible: { opacity: 1 },
  // hidden: { opacity: 0, transition: { delay: 1, duration: 0.5 }, },
  visible: { display: 'inline' },
  hidden: { display: 'none', transition: { delay: 1, duration: 1 }, },
};

const TerminalMainMenu = () => {
  const text = "Framework for User Engagement";

  return (
    <div className="flex justify-center text-4xl">
      {text.split(" ").map(([fChar, ...rChars], index) => (
        <motion.span
          key={index}
          initial="visible"
          animate="hidden"
          variants={wordAnim}
          transition={{ delay: 1, delayChildren: index * 0.25, staggerChildren: 0.5, }} //stagger for individual chars
        >
          <span className="text-blue-500">{fChar}</span>
          <motion.span key={index} variants={characterAnim}>
            {rChars}
          </motion.span>
          {/* {
            rChars.map((character, index) => {
              return (
                <>
                  <motion.span key={index} variants={characterAnim}>
                    {character}
                  </motion.span>
                </>
              );
            })
          } */}
        </motion.span>
      ))}
    </div>
  );
};

export default TerminalMainMenu;

// Framework for User Engagement
