import React, { useState, useEffect, useRef, Component } from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import {
  AnimatePresence,
  motion,
  useAnimate,
  usePresence,
} from "framer-motion";
import iconFrame from "../../images/icon_frame.png";
import panelCog from "../../images/panel_cog.png";

interface Props {
  nextRoute: string;
  CogAnimComplete: () => void;
}
interface routeType {
  [key: string]: number;
}
const RouteToIndex: routeType = { home: 0, about: 1, projects: 2, contact: 3 };

const PanelCog = ({ nextRoute, CogAnimComplete }: Props) => {
  const prevState = useAppSelector((state) => state.project.prevState);
  const [isPresent, safeToRemove] = usePresence();
  const [containerAnim, animateContainer] = useAnimate();
  const [cogAnim, animateCog] = useAnimate();

  // Handles the animation and direction for the panel cog
  useEffect(() => {
    if (isPresent) {
      const openCog = async () => {
        const offset = RouteToIndex[nextRoute] - RouteToIndex[prevState];
        // const offset = 1

        // Anim unnecessary on initial site load
        if (nextRoute !== "initial")
          await animateContainer(
            containerAnim.current,
            { x: "-4%" },
            { delay: 0.5, type: "spring", bounce: 0.1 }
          );

        for (let i = 0; i < Math.abs(offset); i++) {
          if (Math.sign(offset) === 1) {
            animateCog(
              cogAnim.current,
              { rotate: 360 },
              { duration: 0.2, repeat: 3, ease: "linear" }
            );

            await animateContainer(
              containerAnim.current,
              { y: ["0%", "-55%"] },
              { duration: 0.5, ease: "linear" }
            );
            await animateContainer(
              containerAnim.current,
              { y: ["55%", "0%"] },
              { duration: 0.5, ease: "linear" }
            );
          } else {
            animateCog(
              cogAnim.current,
              { rotate: -360 },
              { duration: 0.25, repeat: 3, ease: "linear" }
            );

            await animateContainer(
              containerAnim.current,
              { y: ["0%", "55%"] },
              { duration: 0.5, ease: "linear" }
            );
            await animateContainer(
              containerAnim.current,
              { y: ["-55%", "0%"] },
              { duration: 0.5, ease: "linear" }
            );
          }
        }

        CogAnimComplete();
      };

      openCog();
    } else {
      const closeCog = async () => {
        await animateContainer(
          containerAnim.current,
          { x: "0%" },
          { delay: 0.5 }
        );
        safeToRemove();
      };

      closeCog();
    }
  }, [isPresent]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={containerAnim}
        key={"cogContainer"}
        className="relative w-full h-full will-change-transform"
      >
        <div className="absolute flex top-1/2 w-[5%] -right-[7%] -translate-y-[50%]">
          <motion.img
            ref={cogAnim}
            key={"panelCog"}
            src={panelCog}
            className="w-full"
          />
        </div>
        <img
          src={iconFrame}
          className="absolute top-1/2 -right-[7%] w-[8.5%] h-[10%] -translate-y-[49%]"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PanelCog;
