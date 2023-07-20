import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, stagger, useAnimation } from "framer-motion";

interface MarqueeProps {
  msg: string;
  marqueeAnimComplete(def: string): void;
}

// Marquee needs more styling and breakpoints
const Marquee = ({ msg, marqueeAnimComplete }: MarqueeProps) => {
  const [numberOfAnims, setNumberOfAnims] = useState(1);

  const containerVariants = {
    start: {},
    scroll: {},
    exit: {},
  };

  const marqueeVariants = {
    start: { x: "100cqw" },
    scroll: {
      x: ["100cqw", "0cqw"],
      transition: {
        type: "tween",
        ease: "linear",
        duration: 0.5,
      },
    },
    exit: {
      x: `calc(-7cqw * ${msg.length})`, // This is roughly the minimum space necessary to be off screen
      transition: {
        type: "tween",
        ease: "linear",
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex justify-center items-center w-full h-full -translate-y-[10%]">
      <h1 className="inline-flex font-vt323 text-3xl text-green-400">
        {msg.split("").map<React.ReactNode>((word, i) => (
          <motion.span
            key={i}
            className="inline-flex"
            variants={containerVariants}
            initial="start"
            animate="scroll"
            exit="exit"
            transition={{
              delayChildren: i * 0.1,
              staggerChildren: 0.5,
            }}
          >
            {word.split("").map<React.ReactNode>((character, j) => (
              <motion.span
                key={j}
                className="whitespace-pre will-change-transform"
                variants={marqueeVariants}
                // Once all Exit or Scroll anims are complete 
                onAnimationComplete={(definition) => {
                  if (numberOfAnims === msg.length) {
                    marqueeAnimComplete(definition.toString());
                    setNumberOfAnims(1);
                  } else {
                    setNumberOfAnims(numberOfAnims + 1);
                  }
                }}
              >
                {character}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </h1>
    </div>
  );
};
export default Marquee;
