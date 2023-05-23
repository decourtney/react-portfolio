import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { setIsLoading } from "../../reducers/projectSlice";
import { current } from "@reduxjs/toolkit";
import borderRightImage from "../../images/border_right.svg";
import borderLeftImage from "../../images/border_left.svg";
import borderPad from "../../images/border_pad.png";
import panelCogBase from "../../images/panel_cog_base.png";
import panelCog from "../../images/panel_cog.png";
import panelCogAlt from "../../images/panel_cogALT.png";

type LeftPanelProps = {
  contentLeft: React.ReactElement;
};

type RightPanelProps = {
  contentRight: React.ReactElement;
};

const LeftPanel = ({ contentLeft }: LeftPanelProps) => {
  const dispatch = useAppDispatch();

  const direction = {
    close: {
      x: "0%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    open: {
      x: "-99.5%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  // Currently this prevents the menu from dropping down until this panel has finished the close animation.
  // For now this is the easiest fix to prevent breaking the routes from spam clicking page links
  const handleAnimationComplete = (variant: any) => {
    if(variant === 'close') dispatch(setIsLoading(false))
  };

  return (
    <>
      <motion.div
        id="left-panel"
        className="relative flex h-full w-1/2"
        key={contentLeft ? contentLeft.props.data : null}
        variants={direction}
        initial="open"
        animate="close"
        exit="open"
        onAnimationComplete={(variant) => handleAnimationComplete(variant)}
      >
        <img src={borderPad} />
        <img
          src={panelCogBase}
          className="absolute top-[50%] -right-[4.5%] w-[17%] transform -translate-y-[50%] -z-10"
        />
        <div className="leftpanel-border absolute w-full h-full left-0 ml-[1%] pointer-events-none"></div>
        <div className="flex w-full m-[2%] overflow-auto scrollbar-hide -z-10 bg-cyan-500">
          {contentLeft}
        </div>
      </motion.div>
    </>
  );
};

const RightPanel = ({ contentRight }: RightPanelProps) => {
  const variants = {
    close: {
      x: "0%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    open: {
      x: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        id="left-panel"
        className="relative flex w-1/2"
        key={contentRight ? contentRight.props.data : null}
        variants={variants}
        initial="open"
        animate="close"
        exit="open"
      >
        <img
          src={panelCog}
          className="absolute top-[50.2%] -left-[3.7%] w-[8%] h-[8%] transform -translate-y-[50%]"
        />
        <div className="rightpanel-border absolute w-full h-full right-0 mr-[1%] pointer-events-none"></div>
        <div className="flex w-full m-[2%] bg-cyan-500">
          {contentRight}
        </div>
        <img src={borderPad} />
      </motion.div>
    </>
  );
};

export { LeftPanel, RightPanel };
