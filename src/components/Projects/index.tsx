import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { setNextIndex } from "../../reducers/projectSlice";
import { motion, AnimatePresence, transform, LayoutGroup, useAnimate } from "framer-motion";
import ProjectDetails from "./Project";
import imageArm from "../../images/image_arm.png";

interface Project {
  name: string;
  date?: string;
  description: string[];
  tags?: string[];
  url?: string;
  repo: string;
  image?: string;
}

const carouselVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "51%" : "-51%",
    opacity: 1,
    scale: 0.7,
    rotateX: direction > 0 ? -90 : 90,
    transformPerspective: 5000,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  }),
  active: {
    y: "0%",
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-51%" : "51%",
    opacity: 1,
    scale: 0.7,
    rotateX: direction > 0 ? 90 : -90,
    transformPerspective: 5000,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const test = {
  spin: (direction: number) => ({
    // transformPerspective: 5000,
    rotateX: direction > 0 ? 180 : -180,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const ProjectLeft = ({ data }: { data: Project[] }) => {
  const nextIndex = useAppSelector((state) => state.project.nextIndex);
  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const newDirection = nextIndex - currentPage;
    setCurrentPage([nextIndex, newDirection]);
    // animate(scope.current, {
    //   // y: direction > 0 ? "51%" : "-51%",
    //   // opacity: 1,
    //   // scale: 0.7,
    //   // rotateX: 90,
    //   style: { WebkitTransform: "rotateX(90deg)" }
    //   // transformPerspective: 5000,
    //   // transition: {
    //   //   duration: 3,
    //   //   ease: "easeInOut",
    //   // },
    // });
  }, [nextIndex]);

  return (
    <>
      {/* Carousel repurposed from https://dev.to/satel/animated-carousel-with-framer-motion-2fp */}
      <div className="relative w-full transform -translate-x-[1%] -translate-y-[2%] -z-10 bg-black">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={nextIndex}
            ref={scope}
            className="absolute flex justify-center top-0 left-0 w-full h-full"
            variants={test}
            // initial="enter"
            animate="spin"
            // exit="exit"
            custom={direction}
          >
            <img
              src={imageArm}
              className="absolute w-full h-1/2 top-0 left-0"
            />
            {/* <img
              src={imageArm}
              className="absolute w-full h-1/2 top-0 left-0"
            /> */}
            <img
              src={imageArm}
              className="absolute w-full h-1/2 bottom-0 left-0 rotate-180"
            />
            {/* <img
              src={imageArm}
              className="absolute w-full h-1/2 top-1/2 left-0"
            /> */}
          </motion.div>
          <motion.div
              key={currentPage}
              className="details-image absolute top-0 left-0 w-full h-full"
              data-page={currentPage}
              variants={carouselVariants}
              initial="enter"
              animate="active"
              exit="exit"
              custom={direction}
            >
              <div className="image-border absolute top-0 left-0 w-full h-full"></div>
              <img
                className="h-full w-full px-[4%] py-[3%]"
                src={
                  !data[currentPage].image
                    ? "/images/project-management.jpg"
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
  const [isDetails, setIsDetails] = useState({ display: false, index: -1 });

  // Listen for ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleDetailsDisplay();
      }
    };
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Handles changing the left panel img display to match moused over proj. timeout controls the frequency of changing images
  let timer: NodeJS.Timeout;
  const handleMouseEnter = (index: number) => {
    timer = setTimeout(() => {
      dispatch(setNextIndex(index));
    }, 500);
  };
  const handleMouseLeave = () => {
    clearTimeout(timer);
  };

  // Handles displaying details component for clicked project
  const handleDetailsDisplay = (d = false, i = -1) => {
    setIsDetails({ ...isDetails, display: d, index: i });
  };

  return (
    <div className="flex w-full justify-end overflow-auto scrollbar-hide bg-black">
      <ul className="flex-col list-none space-y-24">
        {data.map((project, index) => {
          return (
            <li key={project.name} className="cursor-pointer bg-orange-400">
              <p
                className="text-8xl hover:bg-green-400"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleDetailsDisplay(true, index)}
              >
                <span>{project.name}</span>
              </p>
            </li>
          );
        })}
      </ul>
      <AnimatePresence>
        {isDetails.display && (
          <ProjectDetails
            {...data[isDetails.index]}
            handleDetailsDisplay={handleDetailsDisplay}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export { ProjectLeft, ProjectRight };
