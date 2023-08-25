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
import home_icon from "../../images/home_icon.png";
import about_icon from "../../images/about_icon.png";
import projects_icon from "../../images/work_icon.png";
import contact_icon from "../../images/contact_icon.png";

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
      {/* removed 'transform' class in case something gets effed up */}
      {/* <img
        src={panelCogBase}
        className="absolute top-1/2 -right-[4.5%] w-[17%] h-[10%] -translate-y-1/2 -z-20"
      /> */}

      {/* <img
        src={getLocation()}
        className="home-icon absolute top-1/2 -right-[2.2%] w-[4%] -translate-y-1/2 z-50"
      /> */}

      <div className="leftpanel-border border-ws absolute w-[101%] h-full left-0 pointer-events-none z-40" />
      <div className="flex w-full h-full">{contentLeft}</div>
    </motion.div>
  );
};

const RightPanel = ({ contentRight }: RightPanelProps) => {
  let location = useLocation();

  const getLocation = () => {
    switch (location.pathname) {
      case "/home":
        return home_icon;
      case "/about":
        return about_icon;
      case "/projects":
        return projects_icon;
      case "/contact":
        return contact_icon;
      default:
        return home_icon;
    }
  };

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
      // key={contentRight ? contentRight.props.data : null}
      variants={variantsRight}
      initial="open"
      animate="close"
      exit="open"
    >
      <img
        src={getLocation()}
        className="home-icon absolute top-1/2 -left-[1.8%] w-[3%] -translate-y-1/2 z-50"
      />
      <img
        src={panelCogBase}
        className="absolute top-1/2 -left-[4.2%] w-[17%] h-[9.5%] -translate-y-1/2"
      />

      <div className="rightpanel-border border-ws absolute w-[101%] h-full right-0 pointer-events-none z-40" />
      <div className="flex w-full h-full">{contentRight}</div>
    </motion.div>
  );
};

export { LeftPanel, RightPanel };
