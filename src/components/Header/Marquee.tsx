import React from "react";
import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";

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

// Marquee needs more styling and breakpoints
const Marquee = () => {
    const message = useAppSelector((state) => state.project.marqueeMsg);

    return (
      <div className="absolute top-[10%] left-[50%] w-[21%] h-[75%] -translate-x-[50%] pointer-events-none bg-neutral-900">
        <div className="relative w-full h-full overflow-x-hidden scrollbar-hide">
          <motion.div
            className="absolute left-[0%] w-fit min-w-full will-change-transform whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
          >
            <h1
              className="text-4xl text-center text-red-700"
              // variants={marqueeVariants}
              // animate="animate"
            >
              {message}
            </h1>
          </motion.div>
        </div>
      </div>
    );
};
export default Marquee;