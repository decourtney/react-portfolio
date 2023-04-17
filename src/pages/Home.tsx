import React, { useEffect, useState } from "react";

import { setContent } from "../reducers/panelSlice";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";

import { LeftPanel, RightPanel } from "../components/PanelController/Panels";
import { HomeLeft, HomeRight } from "../components/Home";


const Home = () => {
  const dispatch = useAppDispatch();

  dispatch(setContent('Home'));



  return (
    <main className="relative h-full">
      <LeftPanel content={<HomeLeft data={"Home"} />} />
      <RightPanel content={<HomeLeft data={"Home"} />} />
    </main>
  );
};

export default Home;
