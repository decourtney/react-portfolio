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
import { GetRandomNumber } from "../../utils/utilities";
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

  // Has to be a cleaner(or fancier) way to handle this but what I dont know, I dont know yet =/
  // Array iterated over in render for tag elements with appropriate class name and ref
  const anims = [
    [centerLight, "centerLight"],
    [topleftLight, "topleftLight"],
    [toprightLight, "toprightLight"],
    [bottomleftLight, "bottomleftLight"],
    [bottomrightLight, "bottomrightLight"],
  ];

  const getTextShadow = (el: String) => {
    let tShadow = "";
    switch (el) {
      case "topleftLight":
        tShadow =
          "0px 0px 1px #62adff, -1px -1px 1px #62adff, -3px -3px 1px #76b7ff, -6px -6px 1px #95c8ff, -10px -10px 1px #b0d6ff, -15px -15px 1px #cae3ff, -20px -20px 1px #e7f2ff, -23px -23px 1px #ffffff";
        break;
      case "toprightLight":
        tShadow =
          "0px 0px 1px #62adff, 1px -1px 1px #62adff, 3px -3px 1px #76b7ff, 6px -6px 1px #95c8ff, 10px -10px 1px #b0d6ff, 15px -15px 1px #cae3ff, 20px -20px 1px #e7f2ff, 23px -23px 1px #ffffff";
        break;
      case "bottomleftLight":
        tShadow =
          "0px 0px 1px #62adff, -1px 1px 1px #62adff, -3px 3px 1px #76b7ff, -6px 6px 1px #95c8ff, -10px 10px 1px #b0d6ff, -15px 15px 1px #cae3ff, -20px 20px 1px #e7f2ff, -23px 23px 1px #ffffff";
        break;
      case "bottomrightLight":
        tShadow =
          "0px 0px 1px #62adff, 1px 1px 1px #62adff, 3px 3px 1px #76b7ff, 6px 6px 1px #95c8ff, 10px 10px 1px #b0d6ff, 15px 15px 1px #cae3ff, 20px 20px 1px #e7f2ff, 23px 23px 1px #ffffff";
        break;
      default:
        tShadow =
          "0px 0px 1px #62adff, 0px 0px 1px #62adff, 0px 0px 1px #76b7ff, 0px 0px 1px #95c8ff, 0px 0px 1px #b0d6ff, 0px 0px 1px #cae3ff, 0px 0px 1px #e7f2ff, 0px 0px 1px #ffffff";
        break;
    }

    return tShadow;
  };

  useEffect(() => {
    // Generates an array sizing between 6 - 10 of numbers between 0.x - 1
    const getOpacity = () => {
      let opacityArr: number[] = [];

      for (let index = 0; index < GetRandomNumber(6, 10); index++) {
        opacityArr.push(GetRandomNumber(4, 10) / 10);
      }

      return opacityArr;
    };

    // Generates an array sizing between 6 - 10 of monotonic numbers up to 10
    const getTimes = () => {
      let timesArr: number[] = [];
      let num = 1;

      for (let index = 0; index < GetRandomNumber(6, 10); index++) {
        num = GetRandomNumber(num, 10);
        timesArr.push(num / 10);
      }

      return timesArr;
    };

    animateCenter(
      centerLight.current,
      { opacity: getOpacity() },
      { duration: 4, times: getTimes(), repeat: Infinity }
    );
    animateTopleft(
      topleftLight.current,
      { opacity: getOpacity() },
      { duration: 4, times: getTimes(), repeat: Infinity }
    );
    animateTopright(
      toprightLight.current,
      { opacity: getOpacity() },
      { duration: 4, times: getTimes(), repeat: Infinity }
    );
    animateBottomleft(
      bottomleftLight.current,
      { opacity: getOpacity() },
      { duration: 4, times: getTimes(), repeat: Infinity }
    );
    animateBottomright(
      bottomrightLight.current,
      { opacity: getOpacity() },
      { duration: 4, times: getTimes(), repeat: Infinity }
    );
  }, []);

  return (
    <>
      <div
        className="absolute w-screen h-screen top-1/2 left-0 -translate-y-[50%] -translate-x-[50%] backdrop-blur-[5px] z-40"
        onClick={() => props.handleDetailsDisplay()}
      />
      <div className="absolute flex top-1/2 left-0 w-full h-full -translate-y-[50%] -translate-x-[50%] z-50">
        <motion.div
          key={props.name}
          className="relative w-full h-full"
          initial="close"
          animate="open"
          variants={detailsVariants}
          exit="close"
        >
          {/* This will create a div of the proj details for each animation needed - 5. */}
          {/* Each div set */}
          {anims.map((item, i) => {
            return (
              <div
                key={i}
                className={`absolute flex top-1/2 left-0 w-full max-h-full -translate-y-1/2 text-blue-700 font-vt323`}
              >
                <div className="project-details-border border-ws absolute top-0 left-0 w-full h-full pointer-events-none z-50" />

                <motion.div
                  ref={item[0] as AnimationScope<any>}
                  className={`${item[1]} bg-white w-full px-[5%] p-[5%] rounded-[8%]`}
                  style={{
                    textShadow: getTextShadow(item[1] as String),
                  }}
                >
                  <div className="flex w-full justify-center items-center">
                    {/* Title */}
                    <h1 className="text-[3vh] pb-[1%]">{props.name}</h1>
                    {/* Icons */}
                    <div className="flex flex-row h-0 space-x-2 ml-[5%] mb-[3%]">
                      <div className="w-[2vh]">
                        <a href={props.repo} target="blank">
                          <img
                            src={githubIcon}
                            className="w-full bg-blue-700"
                          />
                        </a>
                      </div>
                      {props.url && (
                        <div className="w-[2vh]">
                          <a href={props.url} target="blank">
                            <img
                              src={websiteLinkIcon}
                              className="w-full bg-blue-700"
                            />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Content */}
                  {props.description &&
                    props.description.map((p, i) => {
                      return (
                        <p key={i} className="text-[3vh] pb-[2%] leading-tight">
                          {p}
                        </p>
                      );
                    })}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default ProjectDetails;
