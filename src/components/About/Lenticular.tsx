import React, { useEffect, useState, useRef, ReactElement, useMemo } from "react";
import { AnimatePresence, motion, useAnimate, useScroll } from "framer-motion";
import lilith from "../../images/lilith.png";
import biden from "../../images/biden.png";

const Lenticular = () => {
  const numberOfRows = 10;
  let rows: ReactElement[] = [];
  const pixelHeight = numberOfRows * 3;
  const pixelWidth = pixelHeight / numberOfRows;

  const buildLenticules = () => {
    const elements = [];
    for (let i = 0; i < numberOfRows; i++) {
      elements.push(
        <div key={i}>
          <div
            className={`absolute top-0 left-0 bottom-0 right-0`}
            style={{
              background: `url(${lilith})`,
              transformStyle: "preserve-3d",
              WebkitTransformStyle: "preserve-3d",
              backgroundRepeat: "no-repeat",
              backgroundSize: `${pixelHeight} ${(pixelHeight * 9) / 16}px`,
              backgroundPosition: `${i * pixelHeight} center`,
              transform: `rotateY(calc(60deg * -1))`,
              transformOrigin: `100% 50% 0px`,
            }}
          />
          <li
            className={`relative w-[${pixelWidth}] h-[${pixelHeight}]`}
            style={{
              transformStyle: "preserve-3d",
              WebkitTransformStyle: "preserve-3d",
            }}
          />
          <div
            className={`absolute top-0 left-0 bottom-0 right-0`}
            style={{
              background: `url(${biden})`,
              transformStyle: "preserve-3d",
              WebkitTransformStyle: "preserve-3d",
              backgroundRepeat: "no-repeat",
              backgroundSize: `${pixelHeight} ${(pixelHeight * 9) / 16}px`,
              backgroundPosition: `${i * pixelHeight} center`,
              transform: `rotateY(calc(60deg * 1))`,
              transformOrigin: `0% 50% 0px`,
            }}
          />
        </div>
      );
    }
    console.log('returning elements')
    return elements;
  };

  const lenticularComponent = useMemo(() => {
    return (
      <ul
        className="flex w-full h-full"
        style={{
          transform: "rotateY(42deg) rotateX(.25deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {buildLenticules()}
      </ul>
    );
  }, []);

  return (
    <ul
      className="flex w-full h-full"
      style={{
        transform: "rotateY(42deg) rotateX(.25deg)",
        transformStyle: "preserve-3d",
      }}
    >
      {lenticularComponent}
    </ul>
  );
};

export default Lenticular;
