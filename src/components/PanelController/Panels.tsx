import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { setIsOpen, setIsOpening, setContent } from "../../reducers/panelSlice";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";

import GearBox from "./GearBox";

type PanelProps = {
  content: React.ReactElement;
};

const LeftPanel = ({ content }: PanelProps) => {
  const dispatch = useAppDispatch();
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  // const [newContent, setNewContent] = useState<React.ReactElement>();
  const isOpen = useAppSelector((state) => state.panel.isOpen);
  const isOpening = useAppSelector((state) => state.panel.isOpening);
  // const content = useAppSelector((state) => state.panel.content);

  const controls = useAnimationControls()

  useEffect(() => {
    if (!isOpening) {
      // If not already opening then begin open animation and set isOpening to true
      dispatch(setIsOpening(true));
      controls.start(variants.open)
    }
  }, [content]);

  useEffect(()=>{
    if(isOpen){
      controls.start(variants.closed)
      dispatch(setIsOpening(false))
    }
  },[isOpen])

  // useEffect(() => {
  //   if (content) setNewContent(content);
  // }, [isOpen]);

  const handleSetIsOpening = () => {
    if(isOpening && !isOpen)
      dispatch(setIsOpen(true))
    if(!isOpening && isOpen)
      dispatch(setIsOpen(false))
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

  console.log(isOpening, isOpen);

  return (
    <>
      <GearBox isAnimate={isContentLoaded} />
      <motion.div
        id="left-panel"
        className="absolute h-full p-10 top-0 left-0 w-1/2 bg-orange-500"
        variants={variants}
        initial="closed"
        animate={controls}
        onAnimationComplete={() => handleSetIsOpening()}
      >
        <div className="flex h-full justify-start bg-cyan-500">
          <ul className="flex-col list-none text-9xl space-y-10 scrollbar-hide overflow-auto">
            <li className="cursor-pointer">{content}</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default LeftPanel;

const RightPanel = ({ content }: PanelProps) => {
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
    //         <li className="cursor-pointer">{content}</li>
    //       </ul>
    //     </div>
    //   )}
    // </div>
  );
};

export { LeftPanel, RightPanel };
