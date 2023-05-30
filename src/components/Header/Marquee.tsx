import React from "react";
import { motion } from "framer-motion";

const marqueeVariants = {
    animate: {
        x: ["100%", "0%"],
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
const Marquee = () => {
    return (
        <div className="absolute top-0 left-1/2 w-1/2 -translate-x-[50%] overflow-x-hidden bg-pink-400">
            <motion.div
                className="w-full"
                variants={marqueeVariants}
                animate="animate"
            >
                <h1>
                    This is Only a Test
                </h1>
            </motion.div>
        </div>
    );
};
export default Marquee;