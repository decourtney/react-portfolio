// This component is a React implementation of https://codepen.io/danwilson/pen/rrYQyP

import React, {
  useEffect,
  useState,
  useRef,
  ReactElement,
  useMemo,
} from "react";
import { AnimatePresence, motion, useAnimate, useScroll } from "framer-motion";
import lilith from "../../images/lilith.png";
import biden from "../../images/biden.png";

const Lenticular = () => {
  const numberOfRows = 1;
  let rows: ReactElement[] = [];
  // const pixelHeight = numberOfRows * 3;
  // const pixelWidth = pixelHeight / numberOfRows;
  const pixelWidth = 100 / (numberOfRows - 1);
  const pixelHeight = 100;

  const buildLenticules = () => {
    const elements = [];
    for (let i = 0; i < numberOfRows; i++) {
      elements.push(
        <div key={i}>
          <motion.div
            className={`absolute top-0 left-0 bottom-0 right-0`}
            initial={{ rotateY: 45, x: '0%', transformPerspective: 1000 }}
            style={{
              background: `url(${lilith})`,
              backgroundRepeat: "no-repeat",
              // backgroundSize: `${pixelHeight} ${(pixelHeight * 9) / 16}px`,
              backgroundSize: `${pixelWidth}% ${pixelHeight}%`,
              backgroundPosition: `${i * pixelWidth}%`,

        
            }}
          />
          <li
            className={`relative w-[${pixelWidth}] h-[${pixelHeight}]`}
            style={{
              transformStyle: "preserve-3d",
              WebkitTransformStyle: "preserve-3d",
            }}
          />
          <motion.div
            className={`absolute top-0 left-0 bottom-0 right-0`}
            initial={{ rotateY: -45, x: '-45%', transformPerspective: 1000 }}
            style={{
              background: `url(${biden})`,
              backgroundRepeat: "no-repeat",
              // backgroundSize: `${pixelHeight} ${(pixelHeight * 9) / 16}px`,
              backgroundSize: `${pixelWidth}% ${pixelHeight}%`,
              backgroundPosition: `${pixelWidth}%`,
    
            }}
          />
        </div>
      );
    }

    return elements;
  };

  const lenticularComponent = useMemo(() => {
    return (
      <ul
        className="flex w-full h-full"
        style={{
          transform: "rotateY(0deg) rotateX(0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {buildLenticules()}
      </ul>
    );
  }, [numberOfRows]);

  return lenticularComponent;
};

export default Lenticular;
