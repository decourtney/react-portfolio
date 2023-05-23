import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, stagger, useAnimation, useAnimate } from "framer-motion";
import githubIcon from "../../images/github-mark-white.svg";
import websiteLinkIcon from "../../images/websiteLink.svg";
import detailsBorder from "../../images/proj_border.png";

interface Project {
  name: string;
  date?: string;
  description: string[];
  tags?: string[];
  url?: string;
  repo: string;
  image?: string;
}

const detailsVariants = {
  open: {
    scale: 1,
  },
  close: {
    scale: 0,
    // opacity: 0
  },
};

const ProjectDetails = ({ data }: { data: Project }) => {
  console.log(data);
  return (
    <>
      <div className="absolute top-1/2 left-0 h-[90%] transform -translate-y-[50%] -translate-x-[50%]">
        <motion.div
          className="w-full h-full z-10"
          initial="close"
          animate="open"
          variants={detailsVariants}
          exit="close"
          layout
        >
          <div className="details-border absolute flex flex-grow top-0 left-0 w-full h-full pointer-events-none z-50"></div>
          <div className="details-lighting flex flex-col h-full px-[10%] py-[10%] text-[#ffffff] overflow-scroll scrollbar-hide">
            <div className="flex w-full justify-between items-center">
              <h1 className="text-7xl pb-[2%] mr-[1%]">{data.name}</h1>
              <div className="flex flex-row h-0 space-x-2 ml-[5%]">
                <div className="w-[30%] ">
                  <a href={data.repo}>
                    <img src={githubIcon} className="w-full" />
                  </a>
                </div>
                {data.url && (
                  <div className="w-[35%]">
                    <a href={data.url} target="blank">
                      <img src={websiteLinkIcon} className="w-full" />
                    </a>
                  </div>
                )}
              </div>
            </div>
            {data.description &&
              data.description.map((p) => {
                return (
                  <>
                    <p className="text-3xl pb-[2%]">{p}</p>
                  </>
                );
              })}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectDetails;
