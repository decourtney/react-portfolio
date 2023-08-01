import React, { useState, useEffect } from "react";
import { useAnimate, motion, stagger } from "framer-motion";
import Cog from "./Cog";

import smallDoubleCog from "../../images/doubleCog.png";
import smallSingleCog from "../../images/singleCog.png";
import spoke1 from "../../images/largeCog.png";
import spoke2 from "../../images/largeCog.png";
import leftStraight from "../../images/straightLeftCog.png";
import rightStraight from "../../images/straightRightCog.png";
import gearBoxBG from "../../images/gearbox_bg.png";
import gearBoxFG from "../../images/gearbox.png";
import gearBoxPipe from "../../images/gearbox_pipe.png";


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
      translateX: 0,
      transition: {
        duration: 1.4,
        ease: "easeInOut",
      },
    },
    close: {
      translateX: "60%",
      transition: {
        duration: 1.9,
        ease: "easeInOut",
      },
    },
  };

  const slideRight = {
    open: {
      translateX: 0,
      transition: {
        duration: 1.4,
        ease: "easeInOut",
      },
    },
    close: {
      translateX: "-60%",
      transition: {
        duration: 1.9,
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
      <img src={gearBoxFG} className="absolute w-[40%] -z-20" />

      <img
        src={gearBoxPipe}
        className={"absolute w-[8%] ml-[25%] mt-[22%] -z-10"}
      />

      <motion.img
        src={spoke1}
        className={`absolute w-[25%] ml-[13%] -mt-[4%] -z-40 will-change-transform`}
        key={"spoke1"}
        variants={counterClockwise}
        initial="close"
        animate={animationDir}
        exit="close"
      />

      <motion.img
        src={spoke2}
        className={`absolute w-[18%] -ml-[20%] mt-[17%] -z-40 will-change-transform`}
        key={"spoke2"}
        variants={clockwise}
        initial="close"
        animate={animationDir}
        exit="close"
      />

      <motion.img
        src={smallDoubleCog}
        className={`absolute w-[11%] -ml-[1%] mt-[5.5%] -z-30 will-change-transform`}
        key={"smallDoubleCog"}
        variants={clockwise}
        initial="close"
        animate={animationDir}
        exit="close"
      />

      <motion.img
        src={smallSingleCog}
        className={`absolute w-[11%] ml-[16.5%] mt-[16.5%] -z-30 will-change-transform`}
        key={"smallSingleCog"}
        variants={counterClockwise}
        initial="close"
        animate={animationDir}
        exit="close"
      />

      <motion.img
        src={leftStraight}
        className="absolute w-[70%] -ml-[50%] mt-[12%] -z-20 will-change-transform"
        key={"rightStraight"}
        variants={slideLeft}
        initial="close"
        animate={animationDir}
        exit="close"
      />

      <motion.img
        src={rightStraight}
        className="absolute w-[70%] ml-[50%] -mt-[1.5%] -z-20 will-change-transform"
        key={"leftStraight"}
        variants={slideRight}
        initial="close"
        animate={animationDir}
        exit="close"
      />
    </div>
  );
};

export default GearBox;
