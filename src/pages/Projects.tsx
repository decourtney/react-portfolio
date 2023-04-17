import React, { useEffect, useState } from "react";

import { setContent } from "../reducers/panelSlice";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";

import { LeftPanel, RightPanel } from "../components/PanelController/Panels";
import { ProjectLeft, ProjectRight } from "../components/Projects";
import PanelController from "../components/PanelController";

const Projects = () => {
  

  return (
    <main className="relative h-full">
      <PanelController
        contentLeft={<ProjectLeft data={"Projects Left"} />}
        contentRight={<ProjectRight data={"Projects Right"} />}
      />
    </main>
  );
};

export default Projects;
