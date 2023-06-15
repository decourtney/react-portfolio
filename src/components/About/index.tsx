import React, { useEffect, useState } from "react";
import ImageSlice from "./ImageSlice";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import forrest from "../../images/forrest1.png";

const AboutLeft = () => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <div className="w-full mx-[3%] mt-[2%] mb-[5%] bg-black">
      <p className="text-6xl">{}</p>
    </div>
  );
};

const AboutRight = () => {
  const [loadContent, setLoadContent] = useState("");
  const numberOfSlices = 20;
  const slicesArray = [];

  for (let i = 0; i < numberOfSlices; i++) {
    slicesArray.push(
      <ImageSlice key={`image-slice-${i}`} i={i} s={numberOfSlices} />
    );
  }

  return (
    <AnimatePresence>
      <div className="w-full m-[5%]">
        <div className="image-container relative w-full h-fit   text-4xl">
          <img src={forrest} className="w-full invisible" />
          <div className="absolute top-0 left-0 flex w-[100%] h-full">
            {slicesArray.map((s) => {
              return s;
            })}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export { AboutLeft, AboutRight };
