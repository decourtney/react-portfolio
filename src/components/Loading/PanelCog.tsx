import React, { useState, useEffect, useRef, Component } from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { AnimatePresence, motion, useAnimate, usePresence, } from "framer-motion";
import panelCogBase from "../../images/panel_cog_base.png";

interface Props { nextRoute: string, CogAnimComplete: () => void }
interface routeType { [key: string]: number }
const RouteToIndex: routeType = { home: 0, about: 1, projects: 2, contact: 3 }

const PanelCog = ({ nextRoute, CogAnimComplete }: Props) =>
{
  const prevState = useAppSelector((state) => state.project.prevState);
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  // Handles the animation and direction for the panel cog
  useEffect(() =>
  {
    if (isPresent)
    {
      const openCog = async () =>
      {
        const offset = RouteToIndex[nextRoute] - RouteToIndex[prevState];
        // const offset = 1

        await animate(scope.current, { x: "1.5%" }, { delay: 1, duration: 1, ease: "easeOut" });

        for (let i = 0; i < Math.abs(offset); i++)
        {
          if (Math.sign(offset) === 1)
          {
            await animate(scope.current, { y: ["0%", "-55%"] }, { duration: 1, ease: "linear" });
            await animate(scope.current, { y: ["55%", "0%"] }, { duration: 1, ease: "linear" });
          } else
          {
            await animate(scope.current, { y: ["0%", "55%"] }, { duration: 1, ease: "linear" });
            await animate(scope.current, { y: ["-55%", "0%"] }, { duration: 1, ease: "linear" });
          }
        }

        CogAnimComplete();
      };
      openCog();
    }
    else
    {
      const closeCog = async () =>
      {
        await animate(scope.current, { x: "0%" }, { delay: 1, duration: 1 });
        safeToRemove();
      };
      closeCog();
    }
  }, [isPresent]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={ scope }
        key={ "panelCog" }
        className="relative w-full h-full will-change-transform"
      >
        <img
          src={ panelCogBase }
          className="absolute top-1/2 -left-[6%] w-[8.5%] h-[10%] -translate-y-[50%]"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PanelCog;