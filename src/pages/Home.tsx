import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LeftPanel, RightPanel } from "../components/Panels";
import GearBox from "../components/GearBox/GearBox";
import { HomeLeft, HomeRight } from "../components/Home";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { setMarqueeMsg } from "../reducers/projectSlice";

const Home = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const marqueeMsg = useAppSelector((state) => state.project.marqueeMsg);

  useEffect(() => {
    dispatch(setMarqueeMsg("Welcome Home"));
  }, []);

  return (
    <>
      <GearBox animationDir={"open"} />
      <LeftPanel contentLeft={<HomeLeft />} />
      <RightPanel contentRight={<HomeRight />} />
    </>
  );
};

export default Home;
