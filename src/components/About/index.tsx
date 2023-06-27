import React, { useEffect, useState, useRef } from "react";
import ImageSlice from "./ImageSlice";
import { AnimatePresence, motion, useAnimate, useScroll } from "framer-motion";
import forrest from "../../images/forrest1.png";

const AboutLeft = () => {
  const numberOfSlices = 15;
  const slicesArray = [];

  for (let i = 0; i < numberOfSlices; i++) {
    slicesArray.push(
      <ImageSlice
        key={`image-slice-${i}`}
        currentIndex={i}
        numberOfSlices={numberOfSlices}
      />
    );
  }

  return (
    <div className="flex justify-center items-center w-full mr-[4%] pl-[4%] pr-[2%] -z-10 bg-blue-400">
      <div className="image-container relative w-full h-fit ">
        <img src={forrest} className="w-full invisible" />
        <div className="absolute top-0 left-0 flex w-[100%] h-full space-x-0">
          {slicesArray.map((s) => {
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Monitor for mouse movement and window resize
  useEffect(() => {
    const div = document.getElementById("right-panel");

    const handleMouseMove = (event: MouseEvent) => {
      if (div) {
        let rect = div.getBoundingClientRect();
        let x = Math.round(event.clientX - rect.left);
        let y = Math.round(event.clientY - rect.top);

        setMousePos({ x: x, y: y });
      }
    };

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
      x: ((mousePos.x - middlePos.x) / middlePos.x) * 45,
      y: ((mousePos.y - middlePos.y) / middlePos.y) * 45,
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
    <div className="flex justify-center items-center w-full ml-[4%] bg-blue-400">
      <motion.div
        className="relative flex-col justify-center items-center w-[80%] h-[75%] shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: -1 * offset.y + "deg", rotateY: offset.x + "deg" }}
        transition={{ ease: "linear", type: "tween" }}
      >
        <div className="flex w-full h-full overflow-scroll scrollbar-hide bg-gradient-to-b from-green-500 to-blue-500">
          <p className="w-full h-full p-[3%] select-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            laoreet mi at mollis pretium. Integer ac est vulputate, malesuada
            elit eu, lacinia erat. Maecenas volutpat fringilla elit at molestie.
            Morbi ac justo eu neque tempus venenatis sit amet vitae nisl. Nunc
            eu tristique arcu, sit amet gravida magna. Donec in lectus eget
            magna placerat sodales malesuada a elit. Vivamus ultricies urna nec
            placerat auctor. Vestibulum auctor vehicula maximus. Curabitur
            posuere gravida nibh id varius. Aliquam sed venenatis odio, id
            ultricies ipsum. Curabitur interdum gravida nisi, vel finibus massa
            finibus ut. Phasellus eu lorem venenatis, fermentum dolor malesuada,
            ullamcorper ante. Nunc sed porta lorem. In laoreet est et lacus
            placerat vehicula. Praesent sollicitudin ullamcorper velit id
            lacinia. Cras in maximus nisl, sed pharetra ligula. Pellentesque
            nunc dui, vestibulum tristique purus sed, rhoncus vulputate neque.
            Vivamus id turpis risus. Ut sed est tempus justo semper viverra quis
            ac mauris. Quisque id semper diam, a consequat velit. Mauris
            fringilla erat mauris, consectetur pellentesque urna sodales sit
            amet. Vivamus pulvinar enim quis congue fermentum. Maecenas
            tristique elit eget risus sollicitudin, vitae egestas est ornare.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            laoreet mi at mollis pretium. Integer ac est vulputate, malesuada
            elit eu, lacinia erat. Maecenas volutpat fringilla elit at molestie.
            Morbi ac justo eu neque tempus venenatis sit amet vitae nisl. Nunc
            eu tristique arcu, sit amet gravida magna. Donec in lectus eget
            magna placerat sodales malesuada a elit. Vivamus ultricies urna nec
            placerat auctor. Vestibulum auctor vehicula maximus. Curabitur
            posuere gravida nibh id varius. Aliquam sed venenatis odio, id
            ultricies ipsum. Curabitur interdum gravida nisi, vel finibus massa
            finibus ut. Phasellus eu lorem venenatis, fermentum dolor malesuada,
            ullamcorper ante. Nunc sed porta lorem. In laoreet est et lacus
            placerat vehicula. Praesent sollicitudin ullamcorper velit id
            lacinia. Cras in maximus nisl, sed pharetra ligula. Pellentesque
            nunc dui, vestibulum tristique purus sed, rhoncus vulputate neque.
            Vivamus id turpis risus. Ut sed est tempus justo semper viverra quis
            ac mauris. Quisque id semper diam, a consequat velit. Mauris
            fringilla erat mauris, consectetur pellentesque urna sodales sit
            amet. Vivamus pulvinar enim quis congue fermentum. Maecenas
            tristique elit eget risus sollicitudin, vitae egestas est ornare.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            laoreet mi at mollis pretium. Integer ac est vulputate, malesuada
            elit eu, lacinia erat. Maecenas volutpat fringilla elit at molestie.
            Morbi ac justo eu neque tempus venenatis sit amet vitae nisl. Nunc
            eu tristique arcu, sit amet gravida magna. Donec in lectus eget
            magna placerat sodales malesuada a elit. Vivamus ultricies urna nec
            placerat auctor. Vestibulum auctor vehicula maximus. Curabitur
            posuere gravida nibh id varius. Aliquam sed venenatis odio, id
            ultricies ipsum. Curabitur interdum gravida nisi, vel finibus massa
            finibus ut. Phasellus eu lorem venenatis, fermentum dolor malesuada,
            ullamcorper ante. Nunc sed porta lorem. In laoreet est et lacus
            placerat vehicula. Praesent sollicitudin ullamcorper velit id
            lacinia. Cras in maximus nisl, sed pharetra ligula. Pellentesque
            nunc dui, vestibulum tristique purus sed, rhoncus vulputate neque.
            Vivamus id turpis risus. Ut sed est tempus justo semper viverra quis
            ac mauris. Quisque id semper diam, a consequat velit. Mauris
            fringilla erat mauris, consectetur pellentesque urna sodales sit
            amet. Vivamus pulvinar enim quis congue fermentum. Maecenas
            tristique elit eget risus sollicitudin, vitae egestas est ornare.
          </p>
        </div>
        <div
          className="shadow-box absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="glass absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-[50%] -translate-y-[50%] opacity-50 bg-gradient-to-tl from-transparent via-white to-transparent pointer-events-none"
            style={{ transform: "translateZ(40px)" }}
            animate={{
              transform: `translate((${-1 * offset.y})%, ${offset.x}%)`,
            }}
          />
          <div
            className="left-wall absolute top-0 left-0 w-[50px] h-full origin-left bg-slate-500"
            style={{ transform: "rotateY(-90deg)" }}
          />
          <div
            className="right-wall absolute top-0 right-0 w-[50px] h-full origin-right bg-slate-500"
            style={{ transform: "rotateY(90deg)" }}
          />
          <div
            className="top-wall absolute top-0 right-0 w-full h-[50px] origin-top bg-slate-500"
            style={{ transform: "rotateX(90deg)" }}
          />
          <div
            className="bottom-wall absolute bottom-0 left-0 w-full h-[50px] origin-bottom bg-slate-500"
            style={{ transform: "rotateX(-90deg)" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export { AboutLeft, AboutRight };
