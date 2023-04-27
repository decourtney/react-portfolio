import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LeftPanel, RightPanel } from "../components/Panels";
import GearBox from "../components/GearBox/GearBox";

import { useAppDispatch, useAppSelector } from "../reducers/hooks";
import { setIsOpen, setIsOpening, setContent } from "../reducers/panelSlice";

import { HomeLeft, HomeRight } from "../components/Home";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  const location = useLocation();

  return (
    <main className="relative flex h-full w-full ">
      <GearBox animationDir={"open"} />
      <LeftPanel contentLeft={<HomeLeft data={"Home Left"} />} />
      <RightPanel contentRight={<HomeRight data={"Home Right"} />} />
    </main>
  );
};

export default Home;
