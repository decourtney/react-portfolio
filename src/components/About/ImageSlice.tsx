import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const variants1 = {
  rotateY: [0, 120, 240, 360],
  transformPerspective: [1000, 2000, 2000, 1000],
  x: ["0%", "45%", "-45%", "0%"],
  transition: {
    repeat: Infinity,
    duration: 9,
    // ease: "easeIn",
  },
};

const variants2 = {
  rotateY: [240, 360, 480, 600],
  transformPerspective: [2000, 1000, 2000, 1000],
  x: ["-45%", "-0%", "45%", "0%"],
  transition: {
    repeat: Infinity,
    duration: 9,
    // ease: "easeIn",
  },
};

const variants3 = {
  rotateY: [120, 240, 360, 480],
  transformPerspective: [2000, 2000, 1000, 2000],
  x: ["45%", "-45%", "0%", "45%"],
  transition: {
    repeat: Infinity,
    duration: 9,
    // ease: "easeIn",
  },
};

type ImageSliceProps = {
  i: number;
  s: number;
};

const ImageSlice = ({ i, s }: ImageSliceProps) => {
  const pos = i * 10;

  return (
    <div className={`img relative h-full`} style={{ width: `${100 / s}%` }}>
      <motion.span
        initial={{ rotateY: 0, x: "0%" }}
        animate={variants1}
        className={`image-1 absolute top-0 left-0 w-full h-full border`}
        style={{ backgroundPosition: `${pos}%` }}
        // This style is not working quite right
      />
      <motion.span
        initial={{ rotateY: 240, x: "-45%" }}
        animate={variants2}
        className={`image-2 absolute top-0 left-0 w-full h-full bg-[${pos}%] border`}
        style={{ backgroundPosition: `${pos}%` }}
      />
      <motion.span
        initial={{ rotateY: 120, x: "45%" }}
        animate={variants3}
        className={`image-3 absolute top-0 left-0 w-full h-full bg-[${pos}%] border`}
        style={{ backgroundPosition: `${pos}%` }}
      />
    </div>
  );
};

export default ImageSlice;
