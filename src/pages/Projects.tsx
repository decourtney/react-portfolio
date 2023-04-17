import React, { useEffect, useState } from "react";

import { setContent } from "../reducers/panelSlice";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";

import { LeftPanel, RightPanel } from "../components/PanelController/Panels";
import { ProjectLeft, ProjectRight } from "../components/Projects";

const Projects = () => {
  const dispatch = useAppDispatch();

  dispatch(setContent('projects'));



  return (
    <main className="relative h-full">
      <LeftPanel content={<ProjectLeft data={"Projects"} />} />
      <RightPanel content={<ProjectLeft data={"Projects"} />} />
    </main>
  );
};

export default Projects;
