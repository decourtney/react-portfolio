import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, stagger, useAnimation, useAnimate } from "framer-motion";
import githubLogo from "../../images/github-mark-white.svg"

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
  console.log(data)
  return (
    <>
      <div className="absolute top-1/2 left-0 w-fit h-fit max-w-fit max-h-screen transform -translate-y-[50%] -translate-x-[50%]">
        <motion.div
          className="relative"
          initial="close"
          animate="open"
          variants={detailsVariants}
          exit="close"
          layout
        >
          <div className="details-border absolute w-full h-full z-10 pointer-events-none" />
          <div className="details-lighting flex-col w-full max-h-screen p-[5%] text-[#ffffff] overflow-y-scroll overflow-x-hidden scrollbar-hide">
            <div className="flex flex-row">
              <div className="flex items-center">
                <a href={data.repo}>
                  <img src={githubLogo} className="object-right w-[45%]" /></a>
              </div>
              <div className="flex justify-center w-full items-center">
                <h1 className=" text-7xl pb-[2%] mr-[1%]">{data.name}</h1>
                <a href={data.url} target="blank">
                  <p className="flex-col text-6xl mb-[10%]">
                    <span className="font-swissSymbol underline">b</span></p></a>
              </div>

            </div>
            {data.description && data.description.map((p) => {
              return (
                <>
                  <p className="text-3xl pb-[2%]">{p}</p>
                </>
              )
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectDetails;