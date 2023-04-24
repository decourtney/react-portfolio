import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LeftPanel, RightPanel } from "../components/Panels";
import GearBox from "../components/GearBox/GearBox";
import { ProjectLeft, ProjectRight } from "../components/Projects";

import { useAppDispatch, useAppSelector } from "../reducers/hooks";
import { setIsOpen, setIsOpening, setContent } from "../reducers/panelSlice";

import { HomeLeft, HomeRight } from "../components/Home";
import { AnimatePresence } from "framer-motion";

const TestRoute = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  setTimeout(() => {
    navigate(state ? `${state.value}` : "/home");
  }, 1000);

  return (
    <>
      <main className="relative flex flex-grow w-full overflow-auto scrollbar-hide">
        <GearBox animationDir={"none"} />
        <div></div>
        <div></div>
      </main>
    </>
  );
};

export default TestRoute;
