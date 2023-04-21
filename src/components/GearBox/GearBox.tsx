import React, { useState, useEffect } from "react";
import { useAnimate, motion } from "framer-motion";
import Cog from "./Cog";

import smallDoubleCog from "../../images/small_double.svg";
import smallSingleCog from "images/small_single.svg";

type GearBoxProps = {
  animationDir: "close" | "open" | "none";
};

// Still need to control direction of animation
const GearBox = ({ animationDir }: GearBoxProps) => {
  const [direction, setDirection] = useState<"close" | "open" | "none">("none");

  // useEffect(() => {
  //   setDirection(isAnimate ? "open" : "close");
  // }, [isAnimate]);

  const variants = {
    open: {
      rotate: -360,
      transition: {
        duration: 3,
        ease: "easeIn"
      }
    },
    close: {
      rotate: 360,
      transition: {
        duration: 3,
        ease: "easeIn"
      }
    }
  }

  return (
    <div
      id="gear-box"
      className="absolute flex inset-0 top-0 left-0 justify-center items-center -z-20 bg-red-500"
    >
      <motion.img
        src={smallDoubleCog}
        key={'smallDoubleCog'}
        variants={variants}
        initial="close"
        animate={animationDir}
        exit="close"
        className={``}
      />


      {/* <Cog
        size={185}
        image={smallDoubleCog}
        rotate={direction === "open" ? 360 : -360}
        delay={0}
        duration={5}
        position={""}
        animate={isAnimate}
      />
      <Cog
        size={185}
        image={smallSingleCog}
        rotate={direction === "open" ? -360 : 360}
        delay={0}
        duration={5}
        position={"ml-[320px] mt-[60px]"}
        animate={isAnimate}
      /> */}
    </div>
  );
};

export default GearBox;
