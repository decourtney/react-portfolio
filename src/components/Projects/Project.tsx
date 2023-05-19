import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, stagger, useAnimation, useAnimate } from "framer-motion";


const detailsVariants = {
  open: {
    scale: 1,
  },
  close: {
    scale: 0,
    // opacity: 0
  },
};

const ProjectDetails = () => {
  // const [isDetails, setIsDetails] = useState(false);

  return (
    <>
      {/* <div className="absolute w-screen h-screen top-1/2 left-0 -translate-y-[50%] -translate-x-[50%] backdrop-blur-[2px]" /> */}
      <div className="absolute top-1/2 left-0 w-fit h-fit max-h-screen transform -translate-y-[50%] -translate-x-[50%]">
        <motion.div
          className="relative"
          initial="close"
          animate="open"
          variants={detailsVariants}
          exit="close"
          layout
        >
          <div className="details-border absolute w-full h-full z-10 pointer-events-none" />
          <div className="details-lighting flex-col w-full max-h-screen p-[5%] text-[#ffffff] overflow-auto scrollbar-hide">
            <h1 className="text-center text-7xl pb-[2%]">Lorem ipsum</h1>
            <p className="text-3xl pb-[2%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tristique commodo nibh. In luctus suscipit mauris at dictum.
              Suspendisse eget ex eleifend, tristique nisl vitae, hendrerit
              lorem. Sed nec iaculis ante. Aliquam laoreet, mi eget facilisis
              pellentesque, velit tortor sollicitudin neque, nec condimentum
              risus orci a orci. Sed quis nisi elit. In hac habitasse platea
              dictumst. Mauris rhoncus ligula vitae tortor faucibus auctor. Sed
              feugiat sodales lobortis. Cras et urna quam.
            </p>
            <p className="text-3xl pb-[2%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tristique commodo nibh. In luctus suscipit mauris at dictum.
              Suspendisse eget ex eleifend, tristique nisl vitae, hendrerit
              lorem. Sed nec iaculis ante. Aliquam laoreet, mi eget facilisis
              pellentesque, velit tortor sollicitudin neque, nec condimentum
              risus orci a orci. Sed quis nisi elit. In hac habitasse platea
              dictumst. Mauris rhoncus ligula vitae tortor faucibus auctor. Sed
              feugiat sodales lobortis. Cras et urna quam.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectDetails;