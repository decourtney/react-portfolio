import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import forrest from "../../images/forrest1.png";

const variants1 = {
  rotate: {
    // rotateY: -60,
    rotateY: [0, 120, 240, 360],
    transformPerspective: [1000, 1000, 1000, 1000],
    // x: ["-25%", "25%", "0%", "-25%"],
    x: ["0%", "44%", "-44%", "0%"],
    transition: {
      repeat: Infinity,
      duration: 9,
      // ease: "easeIn",
    },
  },
};

const variants2 = {
  rotate: {
    // rotateY: 240,
    rotateY: [240, 360, 480, 600],
    transformPerspective: [1000, 1000, 1000, 1000],
    // x: ["0%", "-25%", "25%", "0%"],
    x: ["-44%", "-0%", "44%", "0%"],
    transition: {
      repeat: Infinity,
      duration: 9,
      // ease: "easeIn",
    },
  },
};

const variants3 = {
  rotate: {
    // rotateY: 60,
    rotateY: [120, 240, 360, 480],
    transformPerspective: [1000, 1000, 1000, 1000],
    // x: ["25%", "0%", "-25%", "25%"],
    x: ["44%", "-44%", "0%", "44%"],
    transition: {
      repeat: Infinity,
      duration: 9,
      // ease: "easeIn",
    },
  },
};

const AboutLeft = () => {
  const [loadContent, setLoadContent] = useState("");
  const [scope, animate] = useAnimate();

  return (
    <div className="w-full mx-[3%] mt-[2%] mb-[5%] bg-black">
      <p className="text-6xl">{ }</p>
    </div>
  );
};

const AboutRight = () => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <AnimatePresence>
      <div className="w-full m-[5%]">
        <div className="image-container relative w-full h-fit   text-4xl">
          <img src={forrest} className="w-full invisible" />
          <div className="absolute top-0 left-0 flex w-[100%] h-full">
            <div className="img relative w-[20%] h-full">
              <motion.span
                initial={{ rotateY: 0, x: "0%" }}
                variants={variants1}
                animate="rotate"
                className="image-1 absolute top-0 left-0 w-full h-full border z-20"
              />
              <motion.span
                initial={{ rotateY: 240, x: "-44%" }}
                variants={variants2}
                animate="rotate"
                className="image-2 absolute top-0 left-0 w-full h-full border z-10"
              />
              <motion.span
                initial={{ rotateY: 120, x: "44%" }}
                variants={variants3}
                animate="rotate"
                className="image-3 absolute top-0 left-0 w-full h-full border z-0"
              />
            </div>
            <div className="img relative w-[20%] h-full">
              <motion.span
                initial={{ rotateY: 0, x: "0%" }}
                variants={variants1}
                animate="rotate"
                className="image-1 absolute top-0 left-0 w-full h-full border z-20"
              />
              <motion.span
                initial={{ rotateY: 240, x: "-44%" }}
                variants={variants2}
                animate="rotate"
                className="image-2 absolute top-0 left-0 w-full h-full border z-10"
              />
              <motion.span
                initial={{ rotateY: 120, x: "44%" }}
                variants={variants3}
                animate="rotate"
                className="image-3 absolute top-0 left-0 w-full h-full border z-0"
              />
            </div>
            <div className="img relative w-[20%] h-full">
              <motion.span
                initial={{ rotateY: 0, x: "0%" }}
                variants={variants1}
                animate="rotate"
                className="image-1 absolute top-0 left-0 w-full h-full border z-20"
              />
              <motion.span
                initial={{ rotateY: 240, x: "-44%" }}
                variants={variants2}
                animate="rotate"
                className="image-2 absolute top-0 left-0 w-full h-full border z-10"
              />
              <motion.span
                initial={{ rotateY: 120, x: "44%" }}
                variants={variants3}
                animate="rotate"
                className="image-3 absolute top-0 left-0 w-full h-full border z-0"
              />
            </div>
            <div className="img relative w-[20%] h-full">
              <motion.span
                initial={{ rotateY: 0, x: "0%" }}
                variants={variants1}
                animate="rotate"
                className="image-1 absolute top-0 left-0 w-full h-full border z-20"
              />
              <motion.span
                initial={{ rotateY: 240, x: "-44%" }}
                variants={variants2}
                animate="rotate"
                className="image-2 absolute top-0 left-0 w-full h-full border z-10"
              />
              <motion.span
                initial={{ rotateY: 120, x: "44%" }}
                variants={variants3}
                animate="rotate"
                className="image-3 absolute top-0 left-0 w-full h-full border z-0"
              />
            </div>
            <div className="img relative w-[20%] h-full">
              <motion.span
                initial={{ rotateY: 0, x: "0%" }}
                variants={variants1}
                animate="rotate"
                className="image-1 absolute top-0 left-0 w-full h-full border z-20"
              />
              <motion.span
                initial={{ rotateY: 240, x: "-44%" }}
                variants={variants2}
                animate="rotate"
                className="image-2 absolute top-0 left-0 w-full h-full border z-10"
              />
              <motion.span
                initial={{ rotateY: 120, x: "44%" }}
                variants={variants3}
                animate="rotate"
                className="image-3 absolute top-0 left-0 w-full h-full border z-0"
              />
            </div>

          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export { AboutLeft, AboutRight };
