import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import forrest from "../../images/forrest1.png";

const variants1 = {
  rotate: {
    rotateY: [0, 120, 240, 360],
    transformPerspective: [1000], // backfacing could be incorrect
    x: ["0%", "25%", "-25%", "0%"],
    transition: {
      repeat: Infinity,
      duration: 10,
      ease: "easeInOut",
    },
  },
};

const variants2 = {
  rotate: {
    rotateY: [-240, 0, 120, 240],
    transformPerspective: [1000], // backfacing could be incorrect
    x: ["-25%", "0%", "25%", "-25%"],
    transition: {
      repeat: Infinity,
      duration: 10,
      ease: "easeInOut",
    },
  },
};

const variants3 = {
  rotate: {
    rotateY: [-120, -240, 0, 120],
    transformPerspective: [1000], // backfacing could be incorrect
    x: ["25%", "-25%", "0%", "25%"],
    transition: {
      repeat: Infinity,
      duration: 10,
      ease: "easeInOut",
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
    <div className="w-full m-[5%]">
      <div className="image-container relative w-full h-fit overflow-hidden bg-slate-600 text-4xl">
        <img src={forrest} className="w-full invisible" />
        <div className="img absolute top-0 flex w-full h-full">
          <>
            <motion.span
              variants={variants1}
              animate="rotate"
              className="image-1 absolute top-0 left-[0%] h-full w-[20%] border"
            />
            <motion.span
              variants={variants2}
              animate="rotate"
              className="image-2 absolute top-0 left-[0%] h-full w-[20%] border"
            />
            <motion.span
              variants={variants3}
              animate="rotate"
              className="image-3 absolute top-0 left-[0%] h-full w-[20%] border"
            />
          </>
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
  );
};

export { AboutLeft, AboutRight };
