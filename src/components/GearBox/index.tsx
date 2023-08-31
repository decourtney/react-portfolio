import React, { useState, useEffect } from "react";
import { useAnimate, motion, stagger } from "framer-motion";
import Cog from "./Cog";

import cog_double from "../../images/cog_double.png";
import cog_single from "../../images/cog_single.png";
import cog_large from "../../images/cog_large.png";
import leftStraight from "../../images/straightLeftCog.png";
import rightStraight from "../../images/straightRightCog.png";
import gearBoxBG from "../../images/gearbox_bg.png";
import gearBoxFG from "../../images/gearbox.png";
import gearBoxPipe from "../../images/gearbox_pipe.png";

type GearBoxProps = {
  animationDir: string;
};

// Still need to control direction of animation
const GearBox = ({ animationDir }: GearBoxProps) => {
  const [direction, setDirection] = useState<"close" | "open" | "none">("none");

  const clockwise = {
    open: {
      rotate: -360,
      transition: {
        duration: 1.4,
        ease: "easeInOut",
      },
    },
    close: {
      rotate: 360,
      transition: {
        duration: 1.9,
        ease: "easeInOut",
      },
    },
  };

  const counterClockwise = {
    open: {
      rotate: 360,
      transition: {
        duration: 1.4,
        ease: "easeInOut",
      },
    },
    close: {
      rotate: -360,
      transition: {
        duration: 1.9,
        ease: "easeInOut",
      },
    },
  };

  const slideLeft = {
    open: {
      translateX: "0%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    close: {
      translateX: "99%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const slideRight = {
    open: {
      translateX: "0%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    close: {
      translateX: "-99%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      id="gear-box"
      className="absolute flex items-center justify-center inset-0 top-0 left-0 w-full h-full -z-50 bg-black bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-slate-950 overflow-hidden"
    >
      <div className="relative w-full h-full">
        <img
          src={gearBoxBG}
          className={
            "absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2 -z-50"
          }
        />

        <div className="absolute top-1/2 left-1/2 h-full -translate-x-[10%] -translate-y-[26%]">
          <motion.img
            src={cog_large}
            className={`h-[45%] will-change-transform`}
            key={"cog_large1"}
            variants={counterClockwise}
            initial="close"
            animate={animationDir}
            exit="close"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 h-full -translate-x-[108%] -translate-y-[0%]">
          <motion.img
            src={cog_large}
            className={`h-[38%] will-change-transform`}
            key={"cog_large2"}
            variants={clockwise}
            initial="close"
            animate={animationDir}
            exit="close"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 h-full -translate-x-[53%] -translate-y-[6.5%]">
          <motion.img
            src={cog_double}
            className={`h-[25%] will-change-transform`}
            key={"cog_double"}
            variants={counterClockwise}
            initial="close"
            animate={animationDir}
            exit="close"
          />
        </div>

        <div className="absolute top-1/2 right-1/2 h-full translate-x-[131%] translate-y-[6.5%]">
          <motion.img
            src={cog_single}
            className={`h-[23%] will-change-transform`}
            key={"cog_single"}
            variants={clockwise}
            initial="close"
            animate={animationDir}
            exit="close"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 h-full -translate-x-[99%] translate-y-[11%]">
          <motion.img
            src={leftStraight}
            className="h-[4%] will-change-transform"
            key={"rightStraight"}
            variants={slideLeft}
            initial="close"
            animate={animationDir}
            exit="close"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 h-full -translate-x-[5%] -translate-y-[4%]">
          <motion.img
            src={rightStraight}
            className="h-[4%] will-change-transform"
            key={"leftStraight"}
            variants={slideRight}
            initial="close"
            animate={animationDir}
            exit="close"
          />
        </div>

        <img
          src={gearBoxFG}
          className="absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2"
        />

        <img
          src={gearBoxPipe}
          className="absolute top-1/2 left-1/2 h-[50%] translate-x-[95%] -translate-y-[25%]"
        />
      </div>
    </div>
  );
};

export default GearBox;
