import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LeftPanel, RightPanel } from "../components/Panels";
import { AboutLeft, AboutRight } from "../components/About";
import GearBox from "../components/GearBox/GearBox";

const About = () => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <GearBox animationDir={"open"} />
      <LeftPanel contentLeft={<AboutLeft />} />
      <RightPanel contentRight={<AboutRight />} />
    </>
  );
};

export default About;
