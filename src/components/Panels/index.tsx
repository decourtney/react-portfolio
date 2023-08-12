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
      className="flex w-1/2 h-full will-change-transform"
      key={contentLeft ? contentLeft.props.data : null}
      variants={variantsLeft}
      initial="open"
      animate="close"
      exit="open"
      onAnimationComplete={(variant) => handleAnimationComplete(variant)}
    >
      <img
        src={panelCogBase}
        className="absolute top-[50%] -right-[4.5%] w-[17%] h-[10%] transform -translate-y-[50%] -z-20"
      />
      <div className="leftpanel-border border-ws absolute w-[101%] h-full left-0 pointer-events-none z-40" />
      <div className="flex w-full h-full">{contentLeft}</div>
    </motion.div>
  );
};

const RightPanel = ({ contentRight }: RightPanelProps) => {
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
      className="flex w-1/2 h-full will-change-transform"
      key={contentRight ? contentRight.props.data : null}
      variants={variantsRight}
      initial="open"
      animate="close"
      exit="open"
    >
      {/* Moving the cog has gotten weird. Trying to animate it made it weirder.
        Stick with simple solution - have cog display page icon and move(scale) up maybe. 
        Can probably get rid of the cog. Can adjust PNGs to match changes*/}
      {/* <img
          src={panelCogAlt}
          className="absolute top-[50%] -left-[4%] w-[8%] h-[8%] z-10"
        /> */}
      <div className="rightpanel-border border-ws absolute w-[101%] h-full right-0 pointer-events-none z-40" />
      <div className="flex w-full h-full">{contentRight}</div>
    </motion.div>
  );
};

export { LeftPanel, RightPanel };
