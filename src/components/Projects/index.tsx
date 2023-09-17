import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { setNextIndex } from "../../reducers/projectSlice";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "./ProjectDetails";
import namePlateHead from "../../images/proj_nameplate_top.png";
import namePlateTail from "../../images/proj_nameplate_bottom.png";
import namePlateButtonFrame from "../../images/proj_nameplate_button_frame.png";
import namePlateButton from "../../images/proj_nameplate_button.png";
import namePlateBacking from "../../images/proj_nameplate_backing.png";

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
    y: direction > 0 ? "0%" : "-100%",
    // x: "-50%",
    opacity: [0.5, 1],
    scale: 0.7,
    rotateX: direction > 0 ? -90 : 90,
    transformPerspective: 5000,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  }),
  active: {
    y: "-50%",
    // x: "-50%",
    opacity: 1,
    scale: 1,
    rotateX: 0,
    // transformPerspective: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      ease: "easeInOut",
    },
    zIndex: 1,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "0%",
    // x: "-50%",
    opacity: [1, 0.5],
    scale: 0.7,
    rotateX: direction > 0 ? 80 : -90,
    transformPerspective: 5000,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
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
      <div className="relative w-full h-full ml-[3%] mr-[4%]">
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentPage}
            className="absolute top-1/2 w-full"
            data-page={currentPage}
            variants={carouselVariants}
            initial="enter"
            animate="active"
            exit="exit"
            custom={direction}
          >
            <div className="relative w-full bg-blue-400">
              <div className="project-image-border border-ws absolute top-0 left-0 w-full h-full" />
              <img
                className="w-full"
                src={
                  data[currentPage]
                    ? data[currentPage].image
                    : "/images/project-management.jpg"
                }
                alt={
                  data[currentPage] ? data[currentPage].name : "missing image"
                }
                draggable="false"
              />
            </div>
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
  const isLoading = useAppSelector((state) => state.project.isLoading);

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
    <div className="panel-bg w-full h-full ml-[4%] mr-[2%] overflow-auto scrollbar-hide">
      <div className="relative w-full h-full">
        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-[15%] drop-shadow-md">
          <div className="relative">
            <img
              src={namePlateHead}
              className="w-full drop-shadow-md"
              alt="Right Panel Top"
            />
            <ul className="project-nameplate-bg flex-col columns-2 space-y-[5%] py-[3%] list-none">
              {data.map((project, index) => {
                return (
                  <li
                    key={project.name}
                    className="relative flex space-x-[2%] mx-[5%] group pointer-events-auto cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleDetailsDisplay(true, index)}
                  >
                    <div className="relative w-[30%]">
                      <img
                        src={namePlateButtonFrame}
                        className="w-[100%]"
                        alt="Nameplate button frame"
                      />
                      <img
                        src={namePlateButton}
                        className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 group-active:scale-95"
                        alt="Nameplate button"
                      />
                      <div className="absolute top-1/2 left-1/2 w-2/3 h-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 group-hover:shadow-[inset_0px_0px_5px_5px_#35ff00] pointer-events-none" />
                    </div>

                    <div className="relative w-full">
                      <img
                        src={namePlateBacking}
                        className="absolute w-full h-full"
                        alt="Nameplate backing"
                      />
                      <div className="project-nameplate-border absolute border-ws w-full h-full z-20"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[86%] h-[80%] rounded-sm group-hover:shadow-[inset_0px_0px_20px_5px_#35ff00] z-10" />
                      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
                        <p
                          className={`text-[1.2vw] text-center tracking-tight leading-[80%] text-black`}
                        >
                          <span>{project.name}</span>
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <img
              src={namePlateTail}
              className="w-full"
              alt="Right Panel Bottom"
            />
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isDetails.display && !isLoading && (
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
