import React from "react";
import { motion } from "framer-motion";

type MarqueeProps = {
    message: string
}

const marqueeVariants = {
    animate: {
        x: ["100%", "-100%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "linear",
            },
        },
    },
};
const Marquee = ({message}: MarqueeProps) => {
    return (
      <div className="absolute top-[10%] left-[50%] w-[21%] h-[75%] -translate-x-[50%] overflow-x-hidden scrollbar-hide pointer-events-none bg-neutral-900">
        <motion.div
          className="w-full"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1 className="text-5xl text-red-700">{message}</h1>
        </motion.div>
      </div>
    );
};
export default Marquee;