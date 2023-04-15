import React, { useEffect } from "react";
import { useAnimate, motion, animate } from "framer-motion";
import Cog from "./Cog";

import smallDoubleCog from "../../images/small_double.svg";
import smallSingleCog from "../../images/small_single.svg";

type GearBoxProps = {
  animate: boolean;
};

// Still need to control direction of animation
const GearBox = ({ animate }: GearBoxProps) => {
  return (
    <div
      id="gear-box"
      className="absolute flex inset-0 justify-center items-center -z-20 bg-red-500"
    >
      <Cog
        size={185}
        image={smallDoubleCog}
        rotate={360}
        delay={0}
        duration={5}
        position={""}
        animate={animate}
      />
      <Cog
        size={185}
        image={smallSingleCog}
        rotate={-360}
        delay={0}
        duration={5}
        position={"ml-[320px] mt-[60px]"}
        animate={animate}
      />
    </div>
  );
};

export default GearBox;
