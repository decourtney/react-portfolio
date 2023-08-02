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

const LenticularToo = () => {
  return (
    <div className="w-full h-full" style={{background: `url(${lilith})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}>

    </div>
  );
};

export default LenticularToo;
