import React, { useState, useEffect } from "react";
import { useAnimate, motion, stagger } from "framer-motion";
import Cog from "./Cog";

import smallDoubleCog from "../../images/small_double.svg";
import smallSingleCog from "../../images/small_single.svg";
import spoke1 from "../../images/spoke1.svg";
import spoke2 from "../../images/spoke2.svg";
import leftStraight from "../../images/left_straight.svg";
import rightStraight from "../../images/right_straight.svg";
import gearBoxBG from "../../images/gearbox_bg.svg";
import gearBoxFG from "../../images/gearbox_fg.svg";
import gearBoxDrum from "../../images/gearbox_drum.svg";
import gearBoxPipe from "../../images/gearbox_pipe.svg";


type GearBoxProps = {
  animationDir: string
};

// Still need to control direction of animation
const GearBox = ({ animationDir }: GearBoxProps) => {
  const [direction, setDirection] = useState<"close" | "open" | "none">("none");

  const clockwise = {
    open: {
      rotate: -360,
      transition: {
        duration: 1.6,
        ease: "easeInOut",
      },
    },
    close: {
      rotate: 360,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const counterClockwise = {
    open: {
      rotate: 360,
      transition: {
        duration: 1.6,
        ease: "easeInOut",
      },
    },
    close: {
      rotate: -360,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const slideLeft = {
    open: {
      translateX: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    close: {
      translateX: "60%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const slideRight = {
    open: {
      translateX: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    close: {
      translateX: "-60%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      id="gear-box"
      className="absolute flex items-center justify-center inset-0 top-0 left-0 -z-50 bg-black bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-black overflow-hidden"
    >
      <img src={gearBoxBG} className={"absolute w-[40%] -z-50"} />
      <motion.img src={gearBoxFG} className="absolute w-[40%] -z-20" />

      <img
        src={gearBoxPipe}
        className={"absolute w-[8%] ml-[25%] mt-[22%] -z-10"}
      />
      <img
        src={gearBoxDrum}
        className={"absolute w-[10%] -ml-[27%] -mt-[33%] -z-10"}
      />

      <motion.img
        src={spoke1}
        className={`absolute w-[25%] ml-[13%] -mt-[4%] -z-40`}
        key={"spoke1"}
        variants={counterClockwise}
        initial="close"
        animate={animationDir}
        exit="close"
      />

      <motion.img
        src={spoke2}
        className={`absolute w-[18%] -ml-[20%] mt-[17%] -z-40`}
        key={"spoke2"}
        variants={clockwise}
        initial="close"
        animate={animationDir}
        exit="close"
      />

      <motion.img
        src={smallDoubleCog}
        className={`absolute w-[11%] -ml-[1%] mt-[5.5%] -z-30`}
        key={"smallDoubleCog"}
        variants={clockwise}
        initial="close"
        animate={animationDir}
        exit="close"
      />

      <motion.img
        src={smallSingleCog}
        className={`absolute w-[11%] ml-[16.5%] mt-[16.5%] -z-30`}
        key={"smallSingleCog"}
        variants={counterClockwise}
        initial="close"
        animate={animationDir}
        exit="close"
      />

      <motion.img
        src={rightStraight}
        className="absolute w-[70%] ml-[30%] mt-[12%] -z-20"
        key={"rightStraight"}
        variants={slideRight}
        initial="close"
        animate={animationDir}
        exit="close"
      />

      <motion.img
        src={leftStraight}
        className="absolute w-[70%] -ml-[30%] -mt-[1.5%] -z-20"
        key={"leftStraight"}
        variants={slideLeft}
        initial="close"
        animate={animationDir}
        exit="close"
      />
    </div>
  );
};

export default GearBox;
