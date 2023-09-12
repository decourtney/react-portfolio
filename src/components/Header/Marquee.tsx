import React, { useRef } from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  msg: string;
  marqueeAnimComplete(def: string): void;
}

const Marquee = ({ msg, marqueeAnimComplete }: MarqueeProps) => {
  const number = useRef(1);

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
        duration: 0.4,
      },
    },
    exit: {
      // x: `calc(-10cqw * ${msg.length})`, // Doesnt work as well as I had hoped
      x: "-100cqw",
      transition: {
        type: "tween",
        ease: "linear",
        duration: 0.4,
      },
    },
  };

  return (
    <div className="flex justify-center items-center w-full h-full -translate-y-[10%]">
      <h1 className="inline-flex font-vt323 text-[2vw] text-green-400 text-green-glow">
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
                className="whitespace-pre "
                variants={marqueeVariants}
                onAnimationComplete={(definition) => {
                  if (number.current === msg.length) {
                    marqueeAnimComplete(definition.toString());
                    number.current = 1;
                  } else {
                    number.current += 1;
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
