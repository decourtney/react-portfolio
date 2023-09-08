import { useEffect } from "react";
import { LeftPanel, RightPanel } from "../components/Panels";
import { AboutLeft, AboutRight } from "../components/About";
import GearBox from "../components/GearBox";
import { useAppDispatch } from "../reducers/hooks";
import { setMarqueeMsg } from "../reducers/projectSlice";

const About = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMarqueeMsg(`whoami`));
  }, []);

  return (
    <>
      <GearBox animationDir={"open"} />
      <LeftPanel contentLeft={<AboutLeft />} />
      <RightPanel contentRight={<AboutRight />} />
    </>
  );
};

export default About;
