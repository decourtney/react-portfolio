import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useAnimate,
  usePresence,
} from "framer-motion";
import panelCogBase from "../../images/panel_cog_base.png";

export enum RouteToIndex {
  home = 0,
  about = 1,
  projects = 2,
  contact = 3,
}

interface Props {
  nextRoute: RouteToIndex;
}

// component primed for animation but need to save previous state - will probably have to use redux slice
const PanelCog = ({ nextRoute }: Props) => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  const { state } = useLocation();

  useEffect(() => {}, [nextRoute]);

  useEffect(() => {
    if (isPresent) {
      const openCog = async () => {
        await animate(scope.current, { x: "1.5%" }, { duration: 3 });
      };
      openCog();
    } else {
      const closeCog = async () => {
        await animate(scope.current, { x: "-1.5%" }, { duration: 3 });
        safeToRemove();
      };
      closeCog();
    }
  }, [isPresent]);

  //   console.log(RouteToIndex[nextRoute]);

  return (
    <AnimatePresence>
      <motion.div
        ref={scope}
        key={"panelCog"}
        className="relative w-full h-full bg-green-400"
      >
        <img
          src={panelCogBase}
          className="absolute top-1/2 -left-[6.1%] w-[8.5%] h-[10%] -translate-y-[50%]"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PanelCog;
