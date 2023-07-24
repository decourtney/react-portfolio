import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  stagger,
  useAnimation,
  useAnimate,
  AnimatePresence,
  useTransform,
} from "framer-motion";
import githubIcon from "../../images/github-mark-white.svg";
import websiteLinkIcon from "../../images/websiteLink.svg";
import detailsBorder from "../../images/proj_border.png";

type DetailsProps = {
  name: string;
  date?: string;
  description: string[];
  tags?: string[];
  url?: string;
  repo: string;
  image?: string;
  handleDetailsDisplay: (d?: boolean, i?: number) => void;
};

// interface MouseClickProp {
//   handleMouseClick: (event: React.MouseEvent<HTMLButtonElement>) => void

// }

const detailsVariants = {
  open: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  close: {
    scale: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const ProjectDetails = (props: DetailsProps) => {
  // console.log(data);
  return (
    <>
      <div
        className="absolute w-screen h-screen top-1/2 left-0 -translate-y-[50%] -translate-x-[50%] backdrop-blur-[2px] z-40"
        onClick={() => props.handleDetailsDisplay()}
      />
      <div className="absolute top-1/2 left-0 h-[90%] transform -translate-y-[50%] -translate-x-[50%] z-50">
        <motion.div
          key={props.name}
          className=" w-full h-full"
          initial="close"
          animate="open"
          variants={detailsVariants}
          exit="close"
        >
          <div className="details-border absolute flex flex-grow top-0 left-0 w-full h-full pointer-events-none z-50"></div>
          <div className="details-lighting flex flex-col h-full px-[10%] py-[10%] text-[#ffffff] bg-black overflow-scroll scrollbar-hide">
            <div className="flex w-full justify-between items-center">
              <h1 className="text-[5vw] pb-[2%] mr-[1%]">{props.name}</h1>
              <div className="flex flex-row h-0 space-x-2 ml-[5%]">
                <div className="w-[30%]">
                  <a href={props.repo}>
                    <img src={githubIcon} className="w-full" />
                  </a>
                </div>
                {props.url && (
                  <div className="w-[35%]">
                    <a href={props.url} target="blank">
                      <img src={websiteLinkIcon} className="w-full" />
                    </a>
                  </div>
                )}
              </div>
            </div>
            {props.description &&
              props.description.map((p, i) => {
                return (
                  <p key={i} className="text-[2vw] pb-[2%]">
                    {p}
                  </p>
                );
              })}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectDetails;

{
  /* <div
        className="absolute w-screen h-screen top-1/2 left-0 -translate-y-[50%] -translate-x-[50%] backdrop-blur-[2px]"
        onClick={() => props.handleDetailsDisplay()}
      /> */
}
