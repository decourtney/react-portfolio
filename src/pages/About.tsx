import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LeftPanel, RightPanel } from "../components/Panels";
import { AboutLeft, AboutRight } from "../components/About";
import GearBox from "../components/GearBox/GearBox";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { setMarqueeMsg } from "../reducers/projectSlice";

const About = () => {
  const [loadContent, setLoadContent] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMarqueeMsg(`About page`));
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
