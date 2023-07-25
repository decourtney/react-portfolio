import React, { useEffect } from "react";
import { motion } from "framer-motion";

type CogProps = {
  size: number;
  image: string;
  rotate: number;
  delay: number;
  duration: number;
  position: string;
  animate: boolean;
};

const Cog = ({ size, image, rotate, delay, duration, position, animate }: CogProps) => {
  return (
    <motion.img
      src={image}
      alt="Cog"
      animate={animate ? { rotate }: {}}
      transition={{
        ease: "linear",
        // repeat: Infinity,
        duration: duration,
        delay,
      }}
      className={`absolute ${position} will-change-transform`}
      style={{ width: size, height: size }}
    />
  );
};

export default Cog;