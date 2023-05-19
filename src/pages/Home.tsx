import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LeftPanel, RightPanel } from "../components/Panels";
import GearBox from "../components/GearBox/GearBox";
import { HomeLeft, HomeRight } from "../components/Home";

const Home = () => {
  const location = useLocation();

  return (
    <>
      <GearBox animationDir={"open"} />
      <LeftPanel contentLeft={<HomeLeft data={"Home"} />} />
      <RightPanel contentRight={<HomeRight data={"Under Construction"} />} />
    </>
  );
};

export default Home;
