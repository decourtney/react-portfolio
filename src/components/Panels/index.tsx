import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../reducers/hooks";
import { setIsLoading } from "../../reducers/projectSlice";
import { GetIconVariants } from "../../utils/utilities";
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

  // Currently this prevents the menu from dropping down until this panel has finished the close animation.
  // For now this is the easiest fix to prevent breaking the routes from spam clicking page links
  const handleAnimationComplete = (variant: any) => {
    if (variant === "close") dispatch(setIsLoading(false));
  };

  return (
    <motion.div
      id="left-panel"
      className="relative flex w-1/2 h-full will-change-transform"
      // key={contentLeft ? contentLeft.props.data : null}
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

  // needs adjustments
  const indicatorVariants = {
    display: {
      filter: [
        `drop-shadow(0 0 5px #0072ff) drop-shadow(0 0 10px #0072ff)
    drop-shadow(0 0 20px #0072ff) drop-shadow(0 0 30px #0072ff)`,
      ],
      opacity: [1, 0, 1, 0, 1],
    },
    enter: {
      filter: [
        `drop-shadow(0 0 5px #c10000) drop-shadow(0 0 10px #c10000)
    drop-shadow(0 0 20px #c10000) drop-shadow(0 0 30px #c10000)`,
      ],
    },
    exit: {
      filter: [
        `drop-shadow(0 0 5px #c10000) drop-shadow(0 0 10px #c10000)
    drop-shadow(0 0 20px #c10000) drop-shadow(0 0 30px #c10000)`,
      ],
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
      {/* <img
        src={panelCog}
        className="absolute top-1/2 left-[4%] w-[8.5%] h-[10%] -translate-y-[49%] z-50"
      /> */}
      <motion.img
        src={GetIcon(location.pathname)}
        className="home-icon absolute top-1/2 -left-[1.3%] w-[3%] h-[3%] -translate-y-[40%] z-50"
        variants={GetIconVariants("0072ff")}
        initial="display"
        animate="display"
        exit="display"
      />
      {/* <img
        src={iconFrame}
        className="absolute top-1/2 -left-[2.5%] w-[15%] h-[9.5%] -translate-y-[48%] -z-50"
      /> */}
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
