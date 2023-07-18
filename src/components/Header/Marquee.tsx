import React, { useEffect } from "react";
import { AnimatePresence, motion, stagger, useAnimation } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";

// Marquee needs more styling and breakpoints
const Marquee = () => {
  const message = useAppSelector((state) => state.project.marqueeMsg);

  const containerVariants = {
    start: {},
    scroll: {},
    exit: {},
  };

  const marqueeVariants = {
    start: { x: "0cqw" },
    scroll: {
      x: ["100cqw", "0cqw"],
      transition: {
        // repeat: Infinity,
        type: "tween",
        ease: "linear",
        duration: 3,
      },
    },
    exit: { x: "-100cqw" },
  };

  return (
    <div className="absolute top-1/2 left-1/2 w-[21%] h-[75%] -translate-x-[50%] -translate-y-[50%] pointer-events-none bg-neutral-900 z-50">
      <div className="marquee-container flex w-full h-full text-xl text-blue-500">
        {/* <h1 className="marquee-container  w-full"> */}
        {message.split(" ").map<React.ReactNode>((word, i) => (
          <motion.span
            key={i}
            className="inline-flex "
            variants={containerVariants}
            initial="start"
            animate="scroll"
            transition={{
              delayChildren: i * 0.25,
              staggerChildren: 0.5,
            }}
          >
            <motion.span
              key={word + i + Math.random()}
              className="inline-flex "
              variants={marqueeVariants}
            >
              {word}
            </motion.span>

            {/* {word.split("").map<React.ReactNode>((character, j) => (
                <motion.span
                  key={j}
                  className="inline will-change-transform"
                  variants={marqueeVariants}
                >
                  {character}
                </motion.span>
              ))} */}
          </motion.span>
        ))}
        {/* </h1> */}
      </div>
    </div>
  );
};
export default Marquee;
