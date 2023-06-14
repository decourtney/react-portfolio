import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import forrest from "../../images/forrest1.png";

const variants1 = {
  rotate: {
    rotateY: [-60, 60, 180, 300],
    transformPerspective: [1000, 1000, 2000, 1000],
    x: ["-25%", "25%", "0%", "-25%"],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "linear",
    },
  },
};

const variants2 = {
  rotate: {
    rotateY: [-180, -60, 60, 180],
    transformPerspective: [2000, 1000, 1000, 2000],
    x: ["0%", "-25%", "25%", "0%"],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "linear",
    },
  },
};

const variants3 = {
  rotate: {
    rotateY: [60, 180, 300, 420],
    transformPerspective: [1000, 2000, 1000, 1000],
    x: ["25%", "0%", "-25%", "25%"],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "linear",
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
        <div className="image-container relative w-full h-fit  bg-slate-600 text-4xl">
          <img src={forrest} className="w-full invisible" />
          <div className="absolute top-0 left-0 flex w-[100%] h-full">
            <div className="img relative w-[20%] h-full">
              <motion.span
              whileHover={{animation: "pause"}}
                initial={{ rotateY: -60, x: "-25%" }}
                variants={variants1}
                animate="rotate"
                className="image-1 absolute top-0 left-0 w-full h-full border"
              />
              <motion.span
                initial={{ rotateY: -180, x: "0%" }}
                variants={variants2}
                animate="rotate"
                className="image-2 absolute top-0 left-0 w-full h-full border"
              />
              <motion.span
                initial={{ rotateY: 60, x: "25%" }}
                variants={variants3}
                animate="rotate"
                className="image-3 absolute top-0 left-0 w-full h-full border"
              />
            </div>
            <div className="img relative w-[20%] h-full">
              <motion.span
                initial={{ rotateY: -60, x: "-25%" }}
                variants={variants1}
                animate="rotate"
                className="image-1 absolute top-0 left-0 h-[100%] w-[100%] border"
              />
              <motion.span
                initial={{ rotateY: -180, x: "0%" }}
                variants={variants2}
                animate="rotate"
                className="image-2 absolute top-0 left-0 h-[100%] w-[100%] border"
              />
              <motion.span
                initial={{ rotateY: 60, x: "25%" }}
                variants={variants3}
                animate="rotate"
                className="image-3 absolute top-0 left-0 h-full w-[100%] border"
              />
            </div>
            <div className="img relative w-[20%] h-full">
              <motion.span
                initial={{ rotateY: -60, x: "-25%" }}
                variants={variants1}
                animate="rotate"
                className="image-1 absolute top-0 left-0 h-[100%] w-[100%] border"
              />
              <motion.span
                initial={{ rotateY: -180, x: "0%" }}
                variants={variants2}
                animate="rotate"
                className="image-2 absolute top-0 left-0 h-[100%] w-[100%] border"
              />
              <motion.span
                initial={{ rotateY: 60, x: "25%" }}
                variants={variants3}
                animate="rotate"
                className="image-3 absolute top-0 left-0 h-full w-[100%] border"
              />
            </div>
            <div className="img relative w-[20%] h-full">
              <motion.span
                initial={{ rotateY: -60, x: "-25%" }}
                variants={variants1}
                animate="rotate"
                className="image-1 absolute top-0 left-0 h-[100%] w-[100%] border"
              />
              <motion.span
                initial={{ rotateY: -180, x: "0%" }}
                variants={variants2}
                animate="rotate"
                className="image-2 absolute top-0 left-0 h-[100%] w-[100%] border"
              />
              <motion.span
                initial={{ rotateY: 60, x: "25%" }}
                variants={variants3}
                animate="rotate"
                className="image-3 absolute top-0 left-0 h-full w-[100%] border"
              />
            </div>
            <div className="img relative w-[20%] h-full">
              <motion.span
                initial={{ rotateY: -60, x: "-25%" }}
                variants={variants1}
                animate="rotate"
                className="image-1 absolute top-0 left-0 h-[100%] w-[100%] border"
              />
              <motion.span
                initial={{ rotateY: -180, x: "0%" }}
                variants={variants2}
                animate="rotate"
                className="image-2 absolute top-0 left-0 h-[100%] w-[100%] border"
              />
              <motion.span
                initial={{ rotateY: 60, x: "25%" }}
                variants={variants3}
                animate="rotate"
                className="image-3 absolute top-0 left-0 h-full w-[100%] border"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export { AboutLeft, AboutRight };
