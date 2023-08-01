import React, { useEffect, useState, useRef } from "react";
import ImageSlice from "./ImageSlice";
import { AnimatePresence, motion, useAnimate, useScroll } from "framer-motion";
import forrest from "../../images/forrest1.png";
import lilith from "../../images/lilith.png";
import biden from "../../images/biden.png";


const Lenticular = () =>{
  const numberOfRows = 10;
  const rows:HTMLLIElement[] = [];
  const pixelHeight = numberOfRows * 3;
  const pixelWidth = pixelHeight / numberOfRows;

  const buildLenticules = () =>{


    <li
      className={`relative w-[${pixelWidth}] h-[${pixelHeight}] before:bg-no-repeat before:bg-[${}px center]`}
      style={{
        transformStyle: "preserve-3d",
        backgroundSize: `${pixelHeight} ${(pixelHeight * 9) / 16}px`,
      }}
    />;
  }

  return(
    <ul className="flex w-full h-full" style={{transform: 'rotateY(42deg) rotateX(.25deg)', transformStyle: 'preserve-3d'}}></ul>
  )
}

export default Lenticular;