import React, { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

type ImageSliceProps = {
  currentIndex: number;
  numberOfSlices: number;
};

const ImageSlice = ({ currentIndex, numberOfSlices }: ImageSliceProps) => {
  const [scope, animate] = useAnimate();
  const pos = (100 / (numberOfSlices - 1)) * currentIndex;
  const sliceWidth = 100 / numberOfSlices;
  const duration = 20;
  const delay = ((currentIndex + 1) * Math.random()) / 10; ; // Delay makes the trivision board imperfectly animate sequentially 

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

  const transition = {
    repeat: Infinity,
    duration: duration,
    ease: "easeInOut",
    delay: delay,
  };

  return (
    <div className={`img relative h-full`} style={{ width: `${sliceWidth}%` }}>
      <motion.span
        className={`image-1 absolute top-0 left-0 w-full h-full `}
        style={{ backgroundPosition: `${pos}%` }}
        initial={{ rotateY: 0, x: "0%" }}
        animate={variants1}
        transition={transition}
      />
      <motion.span
        className={`image-2 absolute top-0 left-0 w-full h-full `}
        style={{ backgroundPosition: `${pos}%` }}
        initial={{ rotateY: 240, x: "-45%" }}
        animate={variants2}
        transition={transition}
      />
      <motion.span
        className={`image-3 absolute top-0 left-0 w-full h-full `}
        style={{ backgroundPosition: `${pos}%` }}
        initial={{ rotateY: 120, x: "45%" }}
        animate={variants3}
        transition={transition}
      />
    </div>
  );
};

export default ImageSlice;
