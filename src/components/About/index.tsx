import React, { useEffect, useState, useRef } from "react";
import ImageSlice from "./ImageSlice";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import forrest from "../../images/forrest1.png";

const AboutLeft = () => {
  const [loadContent, setLoadContent] = useState("");
  const numberOfSlices = 10;
  const slicesArray = [];

  for (let i = 0; i < numberOfSlices; i++) {
    slicesArray.push(
      <ImageSlice key={`image-slice-${i}`} i={i} s={numberOfSlices} />
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
  const [loadContent, setLoadContent] = useState("");
  const container = useRef<HTMLDivElement>(null); // unclear on useRef use
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [middlePos, setMiddlePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let div = document.getElementById("right-panel");

    const handleMouseMove = (event: MouseEvent) => {
      if (div) {
        let rect = div.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        setMousePos({x: x, y: y})
      }

      // setMousePos({ x: event.clientX, y: event.clientY });
    };

    div?.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("mousemove", handleMouseMove);

    return () => {
      div?.removeEventListener("mousemove", handleMouseMove);
      // window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const checkDivSize = (el: HTMLDivElement) => {
    const newMiddlePos = {
      x: el.getBoundingClientRect().width,
      y: el.getBoundingClientRect().height,
    };

    if (middlePos.x === newMiddlePos.x && middlePos.y === newMiddlePos.y)
      return;

    setMiddlePos(newMiddlePos);
    // console.log(middlePos);
  };

  useEffect(() => {
    if (!container.current) return;

    // console.log(container.current.getBoundingClientRect().width);
  }, []);

  return (
    <div className="flex justify-center items-center w-full ml-[4%] -z-10 bg-blue-400">
      <div
        ref={(el) => (el ? checkDivSize(el) : null)}
        // ref={container}
        className="aboutme-container relative flex-col justify-center items-center w-[80%] h-[75%] shadow-2xl"
      >
        <p>
          Mouse is at position{" "}
          <b>
            x: {mousePos.x} y: {mousePos.y}
          </b>
        </p>
        <span className="h-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          laoreet mi at mollis pretium. Integer ac est vulputate, malesuada elit
          eu, lacinia erat. Maecenas volutpat fringilla elit at molestie. Morbi
          ac justo eu neque tempus venenatis sit amet vitae nisl. Nunc eu
          tristique arcu, sit amet gravida magna. Donec in lectus eget magna
          placerat sodales malesuada a elit. Vivamus ultricies urna nec placerat
          auctor. Vestibulum auctor vehicula maximus. Curabitur posuere gravida
          nibh id varius. Aliquam sed venenatis odio, id ultricies ipsum.
          Curabitur interdum gravida nisi, vel finibus massa finibus ut.
          Phasellus eu lorem venenatis, fermentum dolor malesuada, ullamcorper
          ante. Nunc sed porta lorem. In laoreet est et lacus placerat vehicula.
          Praesent sollicitudin ullamcorper velit id lacinia. Cras in maximus
          nisl, sed pharetra ligula. Pellentesque nunc dui, vestibulum tristique
          purus sed, rhoncus vulputate neque. Vivamus id turpis risus. Ut sed
          est tempus justo semper viverra quis ac mauris. Quisque id semper
          diam, a consequat velit. Mauris fringilla erat mauris, consectetur
          pellentesque urna sodales sit amet. Vivamus pulvinar enim quis congue
          fermentum. Maecenas tristique elit eget risus sollicitudin, vitae
          egestas est ornare.
        </span>
      </div>
    </div>
  );
};

export { AboutLeft, AboutRight };
