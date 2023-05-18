import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { setNextIndex } from "../../reducers/projectSlice";
import {
  motion,
  useAnimationControls,
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion";

interface Project {
  name?: string;
  date?: string;
  description?: string;
  tags?: string[];
  url?: string;
  repo?: string;
  image?: string;
}

const variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 1,
    // transition: {
    //   duration: 2,
    //   ease: "easeInOut",
    // },
  }),
  active: {
    y: "0%",
    opacity: 1,
    transition: {
      // delay: 0.2,
      // duration: 2,
      // ease: "easeInOut",
    },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 1,
    // transition: {
    //   duration: 2,
    //   ease: "easeInOut",
    // },
  }),
};

const ProjectLeft = ({ data }: { data: Project[] }) => {
  const nextIndex = useAppSelector((state) => state.project.nextIndex);
  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);

  useEffect(() => {
    const newDirection = nextIndex - currentPage;
    setCurrentPage([nextIndex, newDirection]);
  }, [nextIndex]);

  return (
    <>
      {/* Carousel repurposed from https://dev.to/satel/animated-carousel-with-framer-motion-2fp */}
      <div className="relative flex items-center w-[100%] mx-auto bg-green-400 ">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentPage}
            className="absolute"
            data-page={currentPage}
            variants={variants}
            initial="enter"
            animate="active"
            exit="exit"
            custom={direction}
          >
            {/* Need to normalize pic sizes for proper animations */}
            <img
              src={
                !data[currentPage].image
                  ? "images/project-management.jpg"
                  : data[currentPage].image
              }
              alt={data[currentPage].name}
              draggable="false"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

// Need to make the list of projects and ul/li
const ProjectRight = ({ data }: { data: Project[] }) => {
  const dispatch = useAppDispatch();

  const handleMouseClick = () => {};

  const handleMouseEnter = (index: number) => {
    dispatch(setNextIndex(index));
  };
  return (
    <>
      <div className="flex w-full justify-end">
        <ul className="flex-col list-none space-y-10">
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
        <div className="fadinglight absolute top-1/2 left-0 flex justify-center items-center w-fit h-fit z-50 transform -translate-y-[50%] -translate-x-[50%] bg-cyan-50 rounded-full">
          <motion.div className="holo flex-col w-full h-fit p-[5%] text-cyan-400 overflow-hidden">
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
            {/* <p className="text-3xl pb-[2%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tristique commodo nibh. In luctus suscipit mauris at dictum.
              Suspendisse eget ex eleifend, tristique nisl vitae, hendrerit
              lorem. Sed nec iaculis ante. Aliquam laoreet, mi eget facilisis
              pellentesque, velit tortor sollicitudin neque, nec condimentum
              risus orci a orci. Sed quis nisi elit. In hac habitasse platea
              dictumst. Mauris rhoncus ligula vitae tortor faucibus auctor. Sed
              feugiat sodales lobortis. Cras et urna quam.
            </p> */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export { ProjectLeft, ProjectRight };
