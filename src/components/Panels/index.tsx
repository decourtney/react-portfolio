import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { setIsOpen, setIsOpening, setContent } from "../../reducers/panelSlice";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { current } from "@reduxjs/toolkit";
import borderRightImage from "../../images/border_right.svg";
import borderLeftImage from "../../images/border_left.svg";
import borderPad from "../../images/border_pad.png";

type LeftPanelProps = {
  contentLeft: React.ReactElement;
};

type RightPanelProps = {
  contentRight: React.ReactElement;
};

const LeftPanel = ({ contentLeft }: LeftPanelProps) => {
  const direction = {
    close: {
      x: "0%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    open: {
      x: "-100%",
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
        key={contentLeft ? contentLeft.props.data : null}
        variants={direction}
        initial="open"
        animate="close"
        exit="open"
      >
        <img src={borderPad} />
        <div className="leftpanel-border absolute w-full h-full left-0 ml-[1%] pointer-events-none"></div>
        <div className="flex w-full m-[2%] overflow-auto scrollbar-hide bg-cyan-500">
          {contentLeft}
        </div>
      </motion.div>
    </>
  );
};

export default LeftPanel;

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
        className="relative flex w-1/2 z-0"
        key={contentRight ? contentRight.props.data : null}
        variants={variants}
        initial="open"
        animate="close"
        exit="open"
      >
        <div className="rightpanel-border absolute w-full h-full right-0 mr-[1%] pointer-events-none"></div>
        <div className="flex w-full m-[2%] overflow-auto scrollbar-hide bg-cyan-500">
          {contentRight}
        </div>
        <img src={borderPad} className="" />
      </motion.div>
    </>
  );
};

export { LeftPanel, RightPanel };
