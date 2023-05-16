import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { setNextIndex } from "../../reducers/projectSlice";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";

interface Project {
  name?: string;
  date?: string;
  description?: string;
  tags?: string[];
  url?: string;
  repo?: string;
  image?: string;
}

const ProjectLeft = ({ data }: { data: Project[] }) => {
  const nextIndex = useAppSelector((state) => state.project.nextIndex);

  const direction = {
    up: {
      y: "-100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    center: {
      y: "0%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    down: {
      y: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          className="flex w-full justify-center items-center -z-10 bg-green-300"
          key={data[nextIndex].name}
          variants={direction}
          initial="up"
          animate="center"
          exit="down"
        >
          <img
            src={
              !data[nextIndex].image
                ? "images/project-management.jpg"
                : data[nextIndex].image
            }
            alt={data[nextIndex].name}
            className=""
            draggable="false"
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

// Need to make the list of projects and ul/li
const ProjectRight = ({ data }: { data: Project[] }) => {
  const dispatch = useAppDispatch();

  const handleMouseEnter = (index: number) => {
    dispatch(setNextIndex(index));
  };
  return (
    <>
      <div className="flex  w-full">
        <ul className="flex-col list-none space-y-1">
          {data.map((project, index) => {
            return (
              <li key={project.name} className="cursor-pointer bg-orange-400">
                <a href={project.url || project.repo} target="_blank">
                  <p
                    className="text-6xl hover:bg-green-400"
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    <span>{project.name}</span>
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export { ProjectLeft, ProjectRight };
