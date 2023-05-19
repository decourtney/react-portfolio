import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useFetcher } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { setNextIndex } from "../../reducers/projectSlice";
import {
  motion,
  useAnimationControls,
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion";
import ProjectDetails from "./Project";
import projBorder from "../../images/proj_border.png";

interface Project {
  name: string;
  date?: string;
  description?: string;
  tags?: string[];
  url?: string;
  repo?: string;
  image?: string;
}

const carouselVariants = {
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
            variants={carouselVariants}
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
  const [isDetails, setIsDetails] = useState(false);

  // const handleDetails = () => {
  //   setIsDetails(!isDetails);
  //   !isDetails ? setIsDetails(true) : 
  // };

  const handleMouseEnter = (index: number) => {
    dispatch(setNextIndex(index));
  };

  // Listen
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        if (isDetails) setIsDetails(false)
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <div className="flex w-full justify-end">
        <ul className="flex-col list-none space-y-10">
          {data.map((project, index) => {
            return (
              <li key={project.name} className="cursor-pointer bg-orange-400">
                <p
                  className="text-6xl hover:bg-green-400"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onClick={() => {setIsDetails(true)}}
                >
                  <span>{project.name}</span>
                </p>
              </li>
            );
          })}
        </ul>

        {isDetails ? (
          <div
            className="absolute w-screen h-screen top-1/2 left-0 -translate-y-[50%] -translate-x-[50%] backdrop-blur-[2px]"
            onClick={() => {setIsDetails(false)}}
          />
        ) : null}
        {isDetails ? <ProjectDetails /> : null}
      </div>
    </>
  );
};

export { ProjectLeft, ProjectRight };
