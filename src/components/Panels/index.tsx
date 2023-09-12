import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../reducers/hooks";
import { setIsLoading } from "../../reducers/projectSlice";
import iconLens from "../../images/panel_cog_lens.png";
import { GetIcon } from "../../utils/utilities";

type LeftPanelProps = {
  contentLeft: React.ReactElement;
};

type RightPanelProps = {
  contentRight: React.ReactElement;
};

const LeftPanel = ({ contentLeft }: LeftPanelProps) => {
  const dispatch = useAppDispatch();

  const variantsLeft = {
    close: {
      x: ["-99%", "0%"],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    open: {
      x: ["0%", "-99%"],
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  // Once the panel has completed its close anim then the menu drop down is reenabled.
  const handleAnimationComplete = (variant: any) => {
    if (variant === "close") dispatch(setIsLoading(false));
  };

  return (
    <motion.div
      id="left-panel"
      className="relative flex w-1/2 h-full will-change-transform"
      variants={variantsLeft}
      initial="open"
      animate="close"
      exit="open"
      onAnimationComplete={(variant) => handleAnimationComplete(variant)}
    >
      <div className="leftpanel-border border-ws absolute w-[101%] h-full left-0 pointer-events-none z-40" />
      <div className="flex w-full h-full">{contentLeft}</div>
    </motion.div>
  );
};

const RightPanel = ({ contentRight }: RightPanelProps) => {
  let location = useLocation();

  const variantsRight = {
    close: {
      x: ["99%", "0%"],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    open: {
      x: ["0%", "99%"],
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      id="right-panel"
      className="relative flex w-1/2 h-full will-change-transform"
      variants={variantsRight}
      initial="open"
      animate="close"
      exit="open"
    >
      <motion.img
        src={GetIcon(location.pathname)}
        className="home-icon absolute top-1/2 -left-[1.3%] w-[3%] h-[3%] -translate-y-[40%] z-50"
        animate={{
          filter: [
            "drop-shadow(0 0 5px #0072ff) drop-shadow(0 0 10px #0072ff) drop-shadow(0 0 20px #0072ff) drop-shadow(0 0 30px #0072ff)",
          ],
        }}
      />
      <img
        src={iconLens}
        className="absolute top-1/2 -left-[2.5%] w-[15%] h-[9.5%] -translate-y-[48%] z-50"
      />

      <div className="rightpanel-border border-ws absolute w-[101%] h-full right-0 pointer-events-none z-40" />
      <div className="flex w-full h-full">{contentRight}</div>
    </motion.div>
  );
};

export { LeftPanel, RightPanel };
