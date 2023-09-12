import { motion } from "framer-motion";
import shadowbox_rod from "../../images/shadowbox_rod.png";

type ImageSliceProps = {
  index: number;
  sliceWidth: number;
  slicePos: number;
  delay: number;
  duration: number;
};

const ImageSlice = ({
  index,
  sliceWidth,
  slicePos,
  delay,
  duration,
}: ImageSliceProps) => {
  const variants1 = {
    rotateY: [0, 0, 120, 120, 240, 240, 360],
    transformPerspective: [1000, 1000, 2000, 2000, 2000, 2000, 1000],
    x: ["0%", "0%", "45%", "45%", "-45%", "-45%", "0%"],
  };

  const variants2 = {
    rotateY: [240, 240, 360, 360, 480, 480, 600],
    transformPerspective: [2000, 2000, 1000, 1000, 2000, 2000, 2000],
    x: ["-45%", "-45%", "-0%", "-0%", "45%", "45%", "-45%"],
  };

  const variants3 = {
    rotateY: [120, 120, 240, 240, 360, 360, 480],
    transformPerspective: [2000, 2000, 2000, 2000, 1000, 1000, 2000],
    x: ["45%", "45%", "-45%", "-45%", "0%", "0%", "45%"],
  };

  const transition = {
    repeat: Infinity,
    duration: duration,
    ease: "easeInOut",
    delay: delay,
  };

  return (
    <div className={`img relative h-full`} style={{ width: `${sliceWidth}%` }}>
      <div
        className={`absolute flex justify-center top-1/2 left-1/2 w-fit h-screen`}
        style={{
          transform: "translateX(-50%) translateY(-50%) translateZ(-100px)",
        }}
      >
        <img src={shadowbox_rod} width="50%" />
      </div>
      <motion.span
        className={`image-1 absolute top-0 left-0 w-full h-full `}
        style={{ backgroundPosition: `${slicePos}%` }}
        initial={{ rotateY: 0, x: "0%" }}
        animate={variants1}
        transition={transition}
      />
      <motion.span
        className={`image-2 absolute top-0 left-0 w-full h-full `}
        style={{ backgroundPosition: `${slicePos}%` }}
        initial={{ rotateY: 240, x: "-45%" }}
        animate={variants2}
        transition={transition}
      />
      <motion.span
        className={`image-3 absolute top-0 left-0 w-full h-full `}
        style={{ backgroundPosition: `${slicePos}%` }}
        initial={{ rotateY: 120, x: "45%" }}
        animate={variants3}
        transition={transition}
      />
    </div>
  );
};

export default ImageSlice;
