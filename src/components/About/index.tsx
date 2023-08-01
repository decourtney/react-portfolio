import React, { useEffect, useState, useRef } from "react";
import ImageSlice from "./ImageSlice";
import { AnimatePresence, motion, useAnimate, useScroll } from "framer-motion";
import forrest from "../../images/forrest1.png";
import lilith from "../../images/lilith.png";
import biden from "../../images/biden.png";

const AboutLeft = () => {
  const numberOfSlices = 15;
  const duration = 20;

  // const slicesArray = [];
  const getDivSlices = () => {
    const slicesArray = [];

    for (let i = 0; i < numberOfSlices; i++) {
      const delay = (i + 1 + Math.random() * 100) / 100;
      const pos = (100 / (numberOfSlices - 1)) * i;
      const sliceWidth = 100 / numberOfSlices;

      // console.log(`Index ${i}: `,delay)

      slicesArray.push(
        <ImageSlice
          key={`div-slice-${i}`}
          sliceWidth={sliceWidth}
          slicePos={pos}
          delay={delay}
          duration={duration}
        />
      );
    }
    return slicesArray;
  };

  return (
    <div className="flex justify-center items-center w-full mr-[4%] pl-[4%] pr-[2%] -z-10 bg-blue-400">
      <div className="trivision-board relative w-full h-fit ">
        <img src={forrest} className="w-full invisible" />
        <div className="absolute top-0 left-0 flex w-[100%] h-full space-x-0">
          {getDivSlices().map((s) => {
            return s;
          })}
        </div>
      </div>
    </div>
  );
};

const AboutRight = () => {
  const [windowSize, setWindowSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  const [middlePos, setMiddlePos] = useState({
    x: windowSize.x / 2,
    y: windowSize.y / 2,
  });
  const [mousePos, setMousePos] = useState({ x: middlePos.x, y: middlePos.y });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Monitor for mouse movement and window resize
  useEffect(() => {
    const div = document.getElementById("info-box");

    // Track mouse movement in and relative to right panel info-box
    const handleMouseMove = (event: MouseEvent) => {
      if (div) {
        const rect = div.getBoundingClientRect();

        let x = Math.round(event.clientX - rect.left);
        let y = Math.round(event.clientY - rect.top);

        setMousePos({ x: x, y: y });
      }
    };

    // Track changes to window resize
    const handleResize = () => {
      setWindowSize({ x: window.innerWidth, y: window.innerHeight });
    };

    div?.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      div?.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calc mouse pos offset relative to middle of panel div
  useEffect(() => {
    setOffset({
      x: ((mousePos.x - middlePos.x) / middlePos.x) * 30,
      y: ((mousePos.y - middlePos.y) / middlePos.y) * 30,
    });
  }, [mousePos]);

  // Calc center of panel when window resizes
  useEffect(() => {
    const div = document.getElementById("right-panel");

    if (div) {
      const newMiddlePos = {
        x: div.getBoundingClientRect().width / 2,
        y: div.getBoundingClientRect().height / 2,
      };

      setMiddlePos(newMiddlePos);
    }
  }, [windowSize]);

  return (
    <div
      id="info-box"
      className="flex justify-center items-center w-full ml-[4%] bg-blue-400"
      onMouseLeave={() => setMousePos({ x: middlePos.x, y: middlePos.y })} // Reset box if not mouse over panel
    >
      <motion.div
        className="relative flex-col justify-center items-center w-[80%] h-[75%] shadow-2xl will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: -1 * offset.y + "deg", rotateY: offset.x + "deg" }}
        transition={{ type: "tween", ease: "easeOut" }}
      >
        <div className="flex items-center w-full h-full overflow-scroll scrollbar-hide">
          {/* <img src={lilith} className="w-full" /> */}
          <div className="w-full p-5 text-2xl space-y-3">
            <p>
              As a dedicated web developer, my coding journey spans several
              years, with a formal focus on web development beginning in 2022.
              Throughout my experience, I've worked with the MERN stack and
              MySQL, building full-stack web applications that showcase my
              abilities in both front-end and back-end development.
            </p>
            <p>
              Adaptability is a core strength, and I'm always eager to explore
              new frameworks and technologies. Keeping my programming skills
              fresh through side projects, I'm well-prepared to tackle diverse
              challenges in the ever-evolving field of web development.
            </p>
            <p>
              Beyond coding, you can find me sketching designs and drawing
              inspiration from various sources. My passion for creativity and
              problem-solving drives me to create exceptional digital
              experiences that leave a lasting impact. I'm thrilled to
              collaborate with like-minded professionals and embark on new
              ventures, continuously learning and growing in this dynamic
              industry. Let's bring innovative web applications to life
              together!
            </p>
          </div>
        </div>
        <div
          id="box-top"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Container for the glass glare effect */}
          <div
            id="glass"
            className="relative w-full h-full overflow-clip backdrop-blur-[1px]"
            style={{
              transform: "translateZ(50px)",
              backgroundImage:
                "radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0) 65%, rgba(103, 74, 49, 0.5) 84%, rgba(43, 23, 0, 0.81) 100%)",
            }}
          >
            <motion.div
              id="glass-glare"
              className="absolute top-1/2 left-1/2 w-[600%] h-[600%] opacity-20 blur-sm pointer-events-none will-change-transform"
              style={{
                background:
                  "linear-gradient(0.4turn, #00000000 58%, #ffffff, #00000000 60%)",
              }}
              initial={{ translateX: "-50%", translateY: "-50%" }}
              animate={{
                translateX: offset.x + -50 + "%",
                translateY: offset.y + -50 + "%",
              }}
              transition={{ type: "tween", ease: "easeOut" }}
            />
          </div>
          <div
            id="left-wall"
            className="absolute top-0 left-0 w-[50px] h-full origin-left bg-slate-500"
            style={{ transform: "rotateY(-90deg)" }}
          />
          <div
            id="right-wall"
            className="absolute top-0 right-0 w-[50px] h-full origin-right bg-slate-500"
            style={{ transform: "rotateY(90deg)" }}
          />
          <div
            id="top-wall"
            className="absolute top-0 right-0 w-full h-[50px] origin-top shadow-lg bg-slate-500"
            style={{ transform: "rotateX(90deg)" }}
          />
          <div
            id="bottom-wall"
            className="absolute bottom-0 left-0 w-full h-[50px] origin-bottom bg-slate-500"
            style={{ transform: "rotateX(-90deg)" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export { AboutLeft, AboutRight };
