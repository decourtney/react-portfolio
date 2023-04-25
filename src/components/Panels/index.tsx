import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { setIsOpen, setIsOpening, setContent } from "../../reducers/panelSlice";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { current } from "@reduxjs/toolkit";
import borderImage from "../../images/border.svg"

type LeftPanelProps = {
  contentLeft: React.ReactElement;
};

type RightPanelProps = {
  contentRight: React.ReactElement;
};

const LeftPanel = ({ contentLeft }: LeftPanelProps) => {
  const direction = {
    close: {
      x: 0,
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
        <div className="absolute w-full h-full panel-border"></div>
        <div className="flex w-full justify-start bg-cyan-500">
          <ul className="flex-col list-none text-9xl space-y-10 scrollbar-hide overflow-auto">
            <li className="cursor-pointer">{contentLeft}</li>
          </ul>
        </div>

      </motion.div>
    </>
  );
};

export default LeftPanel;

const RightPanel = ({ contentRight }: RightPanelProps) => {
  const variants = {
    close: {
      x: 0,
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
        <div className="absolute w-full h-full panel-border"></div>
        <div className="flex w-full justify-start bg-cyan-500">
          <ul className="flex-col list-none text-9xl space-y-10 scrollbar-hide overflow-auto">
            <li className="cursor-pointer" >{contentRight}</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export { LeftPanel, RightPanel };
