import React, { useEffect, useState } from "react";
import ImageSlice from "./ImageSlice";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import forrest from "../../images/forrest1.png";

const AboutLeft = () => {
  const [loadContent, setLoadContent] = useState("");
  const numberOfSlices = 5;
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
        <div className="absolute top-0 left-0 flex w-[100%] h-full">
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

  return (
    <div className="flex justify-center items-center w-full ml-[4%] -z-10 bg-blue-400">
      <div className="aboutme-container relative flex justify-center items-center w-full ml-[3%] mr-[6%]">
        <img src={forrest} className="img w-full -z-10"/>
      </div>
    </div>
  );
};

export { AboutLeft, AboutRight };
