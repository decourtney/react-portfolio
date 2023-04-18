import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { setIsOpen, setIsOpening, setContent } from "../../reducers/panelSlice";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";

type LeftPanelProps = {
  contentLeft: React.ReactElement;
};

type RightPanelProps = {
  contentRight: React.ReactElement;
};

const LeftPanel = ({ contentLeft }: LeftPanelProps) => {
  const [currentContent, setCurrentContent] = useState<React.ReactElement>();

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.panel.isOpen);
  const isOpening = useAppSelector((state) => state.panel.isOpening);

  const controls = useAnimationControls();

  useEffect(() => {
    // If not already opening then begin open animation and set isOpening to true
    if (isOpening) controls.start(variants.open);
    if (!isOpening) controls.start(variants.closed);
  }, [isOpening]);

  useEffect(() => {
    if (isOpen) {
      setCurrentContent(contentLeft);
    }
  }, [isOpen]);

  const handleSetIsOpening = () => {
    if (isOpening && !isOpen) {
      dispatch(setIsOpen(true));
      dispatch(setIsOpening(false));
    }
    if (!isOpening && isOpen) {
      dispatch(setIsOpen(false));
    }
  };

  const variants = {
    closed: {
      x: 0,
      transition: {
        duration: 2,
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

  console.log("Is panel open: ", isOpen);
  console.log("Is panel opening: ", isOpening);

  return (
    <>
      <motion.div
        id="left-panel"
        className="absolute h-full p-10 top-0 left-0 w-1/2 bg-orange-500"
        variants={variants}
        // initial="open"
        initial="closed"
        animate={controls}
        onAnimationComplete={() => handleSetIsOpening()}
      >
        <div className="flex h-full justify-start bg-cyan-500">
          <ul className="flex-col list-none text-9xl space-y-10 scrollbar-hide overflow-auto">
            <li className="cursor-pointer">{currentContent}</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default LeftPanel;

const RightPanel = ({ contentRight }: RightPanelProps) => {
  return (
    <></>
    // <div
    //   id="left-panel"
    //   className={`absolute h-full p-10 top-0 right-0 w-1/2 bg-orange-500 transform transition-all duration-500 ${
    //     isPanelClosed ? "translate-x-0" : "translate-x-full"
    //   }`}
    // >
    //   {isContentLoaded && (
    //     <div className="flex h-full justify-start bg-cyan-500">
    //       <ul className="flex-col list-none text-9xl space-y-10 scrollbar-hide overflow-auto">
    //         <li className="cursor-pointer">{contentRight}</li>
    //       </ul>
    //     </div>
    //   )}
    // </div>
  );
};

export { LeftPanel, RightPanel };
