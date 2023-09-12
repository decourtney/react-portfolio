import { useState, useEffect } from "react";
import { useAppSelector } from "../../reducers/hooks";
import {
  AnimatePresence,
  motion,
  useAnimate,
  usePresence,
} from "framer-motion";
import { GetIcon } from "../../utils/utilities";
import panelCogFrame from "../../images/panel_cog_frame.png";
import panelCog from "../../images/panel_cog.png";
import panelCogLens from "../../images/panel_cog_lens.png";

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
  const [icon, setIcon] = useState("");
  const [isPresent, safeToRemove] = usePresence();
  const [containerAnim, animateContainer] = useAnimate();
  const [cogAnim, animateCog] = useAnimate();

  // Handles the animation and direction for the panel cog
  useEffect(() => {
    if (isPresent) {
      const openCog = async () => {
        const offset = RouteToIndex[nextRoute] - RouteToIndex[prevState];

        // Anim unnecessary on initial site load
        if (nextRoute !== "initial") {
          setIcon(GetIcon(String(prevState)));

          await animateContainer(
            containerAnim.current,
            { x: "-4%" },
            { delay: 0.5, type: "spring", bounce: 0.1 }
          );
        } else {
          // Initial site visit
          setIcon(GetIcon("initial"));
        }

        for (let i = 0; i < Math.abs(offset); i++) {
          // Used to determine icon to display as cog animates
          const nextIcon = Object.keys(RouteToIndex).find(
            (key) =>
              RouteToIndex[key] ===
              RouteToIndex[prevState] + (i + 1) * Math.sign(offset)
          );

          if (Math.sign(offset) === 1) {
            animateCog(
              cogAnim.current,
              { rotate: 360 },
              { duration: 0.25, repeat: 3, ease: "linear" }
            );

            await animateContainer(
              containerAnim.current,
              { y: ["0%", "-55%"] },
              { duration: 0.5, ease: "linear" }
            );

            // Changes Icon while offscreen to next page in index
            setIcon(GetIcon(nextIcon || "initial"));

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

            // Changes Icon while offscreen to next page in index
            setIcon(GetIcon(nextIcon || "initial"));

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
          src={panelCogFrame}
          className="absolute top-1/2 -right-[7%] w-[8.5%] h-[10%] -translate-y-[49%]"
        />
        <motion.img
          key={icon}
          src={icon}
          className="home-icon absolute top-1/2 -right-[.8%] w-[1.5%] h-[3%] -translate-y-[45%] z-50"
          animate={{
            filter: [
              "drop-shadow(0 0 5px #c10000) drop-shadow(0 0 10px #c10000) drop-shadow(0 0 20px #c10000) drop-shadow(0 0 30px #c10000)",
            ],
          }}
        />
        <img
          src={panelCogLens}
          className="absolute top-1/2 -right-[7%] w-[8.5%] h-[10%] -translate-y-[49%] z-50"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PanelCog;
