import React, { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

type ImageSliceProps = {
  i: number;
  s: number;
  d: number;
};

const ImageSlice = ({ i, s, d }: ImageSliceProps) => {
  const [scope, animate] = useAnimate();
  const pos = (100 / (s - 1)) * i;
  const w = 100 / s;
  const duration = 15;

  // Duplicate values allow for a slight pause when cycling through images.
  const variants1 = {
    rotateY: [0, 0, 120, 120, 240, 240, 360],
    transformPerspective: [1000, 1000, 2000, 2000, 2000, 2000, 1000],
    x: ["0%", "0%", "45%", "45%", "-45%", "-45%", "0%"],
  };

  const variants2 = {
    rotateY: [240, 240, 360, 360, 480, 480, 600],
    transformPerspective: [2000, 2000, 1000, 1000, 2000, 2000, 2000],
    x: ["-45%", "-45%", "-0%", "-0%", "45%", "45%", "-45%"],
  };

  const variants3 = {
    rotateY: [120, 120, 240, 240, 360, 360, 480],
    transformPerspective: [2000, 2000, 2000, 2000, 1000, 1000, 2000],
    x: ["45%", "45%", "-45%", "-45%", "0%", "0%", "45%"],
  };

  const test = {
    rotateY: [60, 180, 300, 420],
  };

  return (
    <div className="relative w-full h-full">
      <motion.div
        className={`absolute top-0 left-0 w-full h-full`}
        // style={{ width: `${w}%` }}
        // animate={test}
        // transition={{
        //   repeat: Infinity,
        //   duration: duration,
        //   ease: "easeInOut",
        //   delay: d,
        // }}
      >
        <motion.div
          className={`img relative w-full h-full origin-left`}
          // animate={test}
          initial={{rotateX: 85}}
          transition={{
            repeat: Infinity,
            duration: duration,
            ease: "easeInOut",
            delay: d,
          }}
        >
          <motion.span
            className={`image-1 absolute top-0 left-0 w-full h-full`}
            style={{ backgroundPosition: `${pos}%` }}
            initial={{ rotateY: -60, x: "0%" }}
          />
          <motion.span
            className={`image-2 absolute top-0 left-0 w-full h-full`}
            style={{ backgroundPosition: `${pos}%` }}
            initial={{ rotateY: 180, x: "0%" }}
          />
          <motion.span
            className={`image-3 absolute top-0 left-0 w-full h-full`}
            style={{ backgroundPosition: `${pos}%` }}
            initial={{ rotateY: 60, x: "0%" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageSlice;
