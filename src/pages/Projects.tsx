import React, { useEffect, useState } from "react";
import GearBox from "../components/GearBox/GearBox";

import { setContent } from "../reducers/panelSlice";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";

import { LeftPanel, RightPanel } from "../components/PanelController/Panels";
import { ProjectLeft, ProjectRight } from "../components/Projects";
import PanelController from "../components/PanelController";

const Projects = () => {


  return (
    <main className="relative h-full">
      <GearBox isAnimate={true} />
      <LeftPanel contentLeft={<ProjectLeft data={"Project Left"} />} />
      <RightPanel contentRight={<ProjectRight data={"Project Right"} />} />
    </main>
  );
};

export default Projects;
