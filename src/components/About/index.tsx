import { useEffect, useState } from "react";
import ImageSlice from "./ImageSlice";
import { motion } from "framer-motion";
import forrest from "../../images/forrest1.png";
import shadowbox_frame from "../../images/shadowbox_frame.png";
import shadowbox_rod from "../../images/shadowbox_rod.png";
import cert_paper_top from "../../images/cert_paper_top.png";
import cert_paper_bottom from "../../images/cert_paper_bottom.png";

const AboutLeft = () => {
  const numberOfSlices = 20;
  const duration = 20;

  // const slicesArray = [];
  const getDivSlices = () => {
    const slicesArray = [];

    for (let i = 0; i < numberOfSlices; i++) {
      const delay = (i + 1 + Math.random() * 100) / 100;
      const pos = (100 / (numberOfSlices - 1)) * i;
      const sliceWidth = 100 / numberOfSlices;

      slicesArray.push(
        <ImageSlice
          key={i}
          index={i}
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
    <div className="relative flex flex-col justify-center items-center w-full mr-[4%] -z-10">
      {/* Top Background */}
      <div className="panel-bg w-full h-full z-10" />

      {/* Trivision Container */}
      <div className="flex flex-row justify-center items-center w-full h-fit">
        {/* Left Background */}
        <div className="panel-bg w-[8%] h-full" />

        {/* Trivision Board */}
        <div
          className="trivision-board relative w-[100%] h-fit my-[2%] mx-[2%]"
          style={{ boxShadow: "inset 0px 0px 100px 50px" }}
        >
          <div
            className="trivision-border border-ws absolute w-full h-full z-50"
            style={{ boxShadow: "0px 0px 10px 8px" }}
          />
          <img src={forrest} className="w-full h-full invisible" />
          <div className="absolute top-0 left-0 flex w-[100%] h-full space-x-0">
            {getDivSlices()}
          </div>
        </div>

        {/* Right Background */}
        <div className="panel-bg w-[5%] h-full" />
      </div>

      {/* Bottom Background */}
      <div className="panel-bg w-full h-full z-10" />
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
  }, [mousePos, middlePos]);

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
    <>
      <div
        id="info-box"
        className="flex justify-center items-center w-full h-full ml-[4%] mr-[3%]"
        onMouseLeave={() => setMousePos({ x: middlePos.x, y: middlePos.y })} // Reset box if not mouse over panel
      >
        <div className="absolute flex top-0 left-1/2 w-fit h-full -translate-x-[50%] bg-blue-400">
          <img src={shadowbox_rod} />
        </div>

        <motion.div
          className=" flex-col justify-center items-center w-[90%] h-[80%] will-change-transform bg-slate-600"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: "0px 0px 10px 0px rgb(23 23 23)",
          }}
          animate={{
            // rotateX: -1 * offset.y + "deg", // Y-axis movement not needed right now
            rotateY: offset.x + "deg",
          }}
          transition={{ type: "tween", ease: "easeOut" }}
        >
          <div
            className={`w-full h-full py-[3%] px-[5%] overflow-scroll scrollbar-hide`}
          >
            <img src={cert_paper_top} className="w-full" />
            <div className="cert-border border-ws w-full px-[6%] text-[2.1vh] space-y-3">
              <p>
                As a dedicated web developer, my coding journey spans several
                years, with a formal focus on web development beginning in 2022.
                Throughout my experience, Ive worked with the MERN stack and
                MySQL, building full-stack web applications that showcase my
                abilities in both front-end and back-end development.
              </p>
              <p>
                Adaptability is a core strength, and Im always eager to explore
                new frameworks and technologies. Keeping my programming skills
                fresh through side projects, Im well-prepared to tackle diverse
                challenges in the ever-evolving field of web development.
              </p>
              <p>
                Beyond coding, you can find me sketching designs and drawing
                inspiration from various sources. My passion for creativity and
                problem-solving drives me to create exceptional digital
                experiences that leave a lasting impact. Im thrilled to
                collaborate with like-minded professionals and embark on new
                ventures, continuously learning and growing in this dynamic
                industry. Lets bring innovative web applications to life
                together!
              </p>
            </div>
            <img src={cert_paper_bottom} className="w-full" />
          </div>
          <div
            id="box-top"
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute w-full h-full z-10"
              style={{
                translate: "0 0 40px",
                borderImageSource: `url(${shadowbox_frame})`,
                borderImageWidth: "100%",
                borderImageSlice: "50%",
                boxShadow: "0px 0px 30px 10px inset",
              }}
            />

            {/* Container for the glass glare effect */}
            <div
              id="glass"
              className="relative w-full h-full overflow-clip backdrop-blur-[1px]"
              style={{
                transform: "translateZ(40px)",
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
                  translateY: offset.y + -65 + "%",
                }}
                transition={{ type: "tween", ease: "easeOut" }}
              />
            </div>
            <div
              id="left-wall"
              className="absolute top-0 left-0 w-[40px] h-full origin-left bg-slate-800"
              style={{ transform: "rotateY(-90deg)" }}
            />
            <div
              id="right-wall"
              className="absolute top-0 right-0 w-[40px] h-full origin-right bg-slate-800"
              style={{ transform: "rotateY(90deg)" }}
            />
            <div
              id="top-wall"
              className="absolute top-0 right-0 w-full h-[40px] origin-top shadow-lg bg-slate-800"
              style={{ transform: "rotateX(90deg)" }}
            />
            <div
              id="bottom-wall"
              className="absolute bottom-0 left-0 w-full h-[40px] origin-bottom bg-slate-800"
              style={{ transform: "rotateX(-90deg)" }}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export { AboutLeft, AboutRight };

{
  /* <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          backgroundImage: `url(${panel_bg})`,
          clipPath: `polygon(
              0% 0%, 
              0% 100%, 
              7% 100%, 
              7% 23%, 
              93% 23%, 
              93% 77%, 
              7% 77%, 
              7% 100%, 
              100% 100%, 
              100% 0%)`,
        }}
      /> */
}

{
  /* <div className="relative flex flex-row justify-center items-center w-full mr-[2%] -z-10">
  <div
    className="w-[10%] h-[10%]"
    style={{
      backgroundImage: `url(${panel_bg})`,
      backgroundRepeat: "no-repeat",
    }}
  />

  <div className="flex flex-col justify-center items-center w-[85%] h-full">
    <div
      className="w-[10%] h-[100%] z-10"
      style={{
        backgroundImage: `url(${panel_bg})`,
        backgroundRepeat: "repeat",
      }}
    />

    <div className="trivision-board relative w-[100%] h-fit my-[4%]">
      <div
        className="trivision-border border-ws absolute w-full h-full z-50"
        style={{ boxShadow: "0px 0px 10px 5px" }}
      />
      <img src={forrest} className="w-full h-full invisible" />
      <div className="absolute top-0 left-0 flex w-[100%] h-full space-x-0">
        {getDivSlices().map((s) => {
          return s;
        })}
      </div>
    </div>

    <div
      className="w-[10%] h-[100%] z-10"
      style={{ backgroundImage: `url(${panel_bg})` }}
    />
  </div>

  <div
    className="w-[10%] h-[10%]"
    style={{ backgroundImage: `url(${panel_bg})` }}
  />
</div> */
}
