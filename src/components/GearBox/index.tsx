import { motion } from "framer-motion";
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
      className="gear-bg absolute flex items-center justify-center inset-0 top-0 left-0 w-full h-full bg-slate-900 overflow-hidden"
    >
      <div className="relative w-full h-full">
        <img
          src={gearBoxBG}
          className={
            "absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2 -z-50"
          }
          alt="Gearbox Background"
        />

        <div className="absolute top-1/2 left-1/2 h-full -translate-x-[10%] -translate-y-[26%]">
          <motion.img
            src={cog_large}
            className={`h-[45%] `}
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
            className={`h-[38%] `}
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
            className={`h-[25%] `}
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
            className={`h-[23%] `}
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
            className="h-[4%] "
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
            className="h-[4%] "
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
          alt="Gearbox Foreground"
        />

        <img
          src={gearBoxPipe}
          className="absolute top-1/2 left-1/2 h-[50%] translate-x-[95%] -translate-y-[25%]"
          alt="Gearbox Pipe"
        />
      </div>
    </div>
  );
};

export default GearBox;
