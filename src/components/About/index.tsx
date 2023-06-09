import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import forrest from "../../images/forrest.jpg";

const variants1 = {
  rotate: {
    rotateY: [0, 60, 120, 180, 240, 300, 360],
    transition: {
      repeat: Infinity,
      duration: 10,
      ease: "easeInOut",
    },
  },
};

const variants2 = {
  rotate: {
    rotateY: 360,
    transition: {
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
    },
  },
};

const AboutLeft = () => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <div className="w-full mx-[3%] mt-[2%] mb-[5%] bg-black">
      <p className="text-6xl">{}</p>
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
          <motion.span
            variants={variants1}
            animate="rotate"
            className="image-1 absolute top-0 left-0 h-full w-[20%] border"
          />
          {/* <motion.span
            initial={{ rotateY: -60, scale: -1 }}
            variants={variants2}
            animate="rotate"
            className="image-2 absolute top-0 left-[0%] h-full w-[20%] border"
          /> */}
        </div>
      </div>
    </div>
  );
};

export { AboutLeft, AboutRight };
