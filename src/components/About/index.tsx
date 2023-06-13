import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import forrest from "../../images/forrest1.png";

const variants1 = {
  rotate: {
    // rotateY: 300,
    rotateY: [-60, 60, 180],
    transformPerspective: [1000], // backfacing could be incorrect
    x: ["-25%", "25%", "0%"],
    transition: {
      repeat: Infinity,
      duration: 9,
      ease: "linear",
    },
  },
};

const variants2 = {
  rotate: {
    rotateY: [180],
    // rotateY: -180,
    transformPerspective: [1000], // backfacing could be incorrect
    x: ["0%"],
    transition: {
      repeat: Infinity,
      duration: 9,
      ease: "linear",
    },
  },
};

const variants3 = {
  rotate: {
    // rotateY: 420,
    rotateY: [60],
    transformPerspective: [1000], // backfacing could be incorrect
    x: ["25%"],
    transition: {
      repeat: Infinity,
      duration: 9,
      ease: "linear",
    },
  },
};



const AboutLeft = () => {
  const [loadContent, setLoadContent] = useState("");

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
          <div className="img absolute top-[0%] flex w-[20%] h-full bg-blue-400">
            <motion.span
              initial={{ rotateY: -60 }}
              variants={variants1}
              animate="rotate"
              className="image-1 absolute top-[0] left-[0%] h-[100%] w-[100%] border z-30"
            />
            {/* <motion.span
              initial={{ rotateY: -180 }}
              variants={variants2}
              animate="rotate"
              className="image-2 absolute top-[0%] left-[0%] h-[100%] w-[100%] border"
            /> */}
            <motion.span
              initial={{ rotateY: 60 }}
              variants={variants3}
              animate="rotate"
              className="image-3 absolute top-0 left-[0%] h-full w-[100%] border"
            />
            {/* <>
            <motion.span
              variants={variants1}
              animate="rotate"
              className="image-1 absolute top-0 left-[20%] h-full w-[20%] border"
            />
            <motion.span
              initial={{ scale: -1 }}
              variants={variants2}
              animate="rotate"
              className="image-2 absolute top-0 left-[20%] h-full w-[20%] border"
            />
            <motion.span
              initial={{ scale: -1 }}
              variants={variants3}
              animate="rotate"
              className="image-2 absolute top-0 left-[20%] h-full w-[20%] border"
            />
          </>
          <>
            <motion.span
              variants={variants1}
              animate="rotate"
              className="image-1 absolute top-0 left-[40%] h-full w-[20%] border"
            />
            <motion.span
              initial={{ scale: -1 }}
              variants={variants2}
              animate="rotate"
              className="image-2 absolute top-0 left-[40%] h-full w-[20%] border"
            />
            <motion.span
              initial={{ scale: -1 }}
              variants={variants3}
              animate="rotate"
              className="image-2 absolute top-0 left-[40%] h-full w-[20%] border"
            />
          </>
          <>
            <motion.span
              variants={variants1}
              animate="rotate"
              className="image-1 absolute top-0 left-[60%] h-full w-[20%] border"
            />
            <motion.span
              initial={{ scale: -1 }}
              variants={variants2}
              animate="rotate"
              className="image-2 absolute top-0 left-[60%] h-full w-[20%] border"
            />
            <motion.span
              initial={{ scale: -1 }}
              variants={variants3}
              animate="rotate"
              className="image-2 absolute top-0 left-[60%] h-full w-[20%] border"
            />
          </>
          <>
            <motion.span
              variants={variants1}
              animate="rotate"
              className="image-1 absolute top-0 left-[80%] h-full w-[20%] border"
            />
            <motion.span
              initial={{ scale: -1 }}
              variants={variants2}
              animate="rotate"
              className="image-2 absolute top-0 left-[80%] h-full w-[20%] border"
            />
            <motion.span
              initial={{ scale: -1 }}
              variants={variants3}
              animate="rotate"
              className="image-2 absolute top-0 left-[80%] h-full w-[20%] border"
            />
          </> */}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export { AboutLeft, AboutRight };
