import React, { useState, useEffect, useRef, createRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  stagger,
  useAnimation,
  useAnimate,
  AnimatePresence,
  useTransform,
  AnimationScope,
} from "framer-motion";
import githubIcon from "../../images/github-mark-white.svg";
import websiteLinkIcon from "../../images/websiteLink.svg";
import detailsBorder from "../../images/proj_border.png";
import { create } from "domain";

interface DetailsProps {
  name: string;
  date?: string;
  description: string[];
  tags?: string[];
  url?: string;
  repo: string;
  image?: string;
  handleDetailsDisplay: (d?: boolean, i?: number) => void;
}

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
  const [centerLight, animateCenter] = useAnimate();
  const [topleftLight, animateTopleft] = useAnimate();
  const [toprightLight, animateTopright] = useAnimate();
  const [bottomleftLight, animateBottomleft] = useAnimate();
  const [bottomrightLight, animateBottomright] = useAnimate();

  // I know there is a cleaner(or fancier) way to handle this but what I dont know, I dont know yet =/
  // Array iterated over in render for tag elements with appropriate class name and ref
  const anims = [
    [centerLight, "centerLight"],
    [topleftLight, "topleftLight"],
    [toprightLight, "toprightLight"],
    [bottomleftLight, "bottomleftLight"],
    [bottomrightLight, "bottomrightLight"],
  ];

  useEffect(() => {
    animateCenter(
      centerLight.current,
      { opacity: [1, 0, 1, 0, 1] },
      { duration: 3, times: [0.3, 0.4, 0.6, 0.8, 1], repeat: Infinity }
    );
    animateTopleft(
      topleftLight.current,
      { opacity: [1, 0, 1, 0, 1] },
      { duration: 3, times: [0.3, 0.4, 0.6, 0.8, 1], repeat: Infinity }
    );
    animateTopright(
      toprightLight.current,
      { opacity: [1, 0, 1, 0, 1] },
      { duration: 3, times: [0.3, 0.4, 0.6, 0.8, 1], repeat: Infinity }
    );
    animateBottomleft(
      bottomleftLight.current,
      { opacity: [1, 0, 1, 0, 1] },
      { duration: 3, times: [0.3, 0.4, 0.6, 0.8, 1], repeat: Infinity }
    );
    animateBottomright(
      bottomrightLight.current,
      { opacity: [1, 0, 1, 0, 1] },
      { duration: 3, times: [0.3, 0.4, 0.6, 0.8, 1], repeat: Infinity }
    );
  }, []);

  return (
    <>
      <div
        className="absolute w-screen h-screen top-1/2 left-0 -translate-y-[50%] -translate-x-[50%] backdrop-blur-[5px] z-40"
        onClick={() => props.handleDetailsDisplay()}
      />
      <div className="absolute top-1/2 left-0 h-[90%] w-full transform -translate-y-[50%] -translate-x-[50%] z-50">
        <motion.div
          key={props.name}
          className="w-full h-full"
          initial="close"
          animate="open"
          variants={detailsVariants}
          exit="close"
        >
          <div className="project-details-border border-ws absolute flex flex-grow top-0 left-0 w-full h-full pointer-events-none z-50" />
          <div className="relative w-full h-full">
            {anims.map((item, i) => {
              return (
                <div
                  key={i}
                  ref={item[0]}
                  className={`${item[1]} bg-black absolute top-0 left-0 h-full w-full px-[10%] py-[10%] text-[#ffffff] overflow-scroll scrollbar-hide rounded-[8%]`}
                  style={{
                    textShadow: "0px 0px 1px #FFFFFF, 0px 0px 5px #FFFFFF",
                    backdropFilter: "blur(3px)",
                  }}
                >
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
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectDetails;
