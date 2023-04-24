import React, { useEffect, useState } from "react";
import projects from "../components/Projects/projects.json";

import GearBox from "../components/GearBox/GearBox";

import { setContent } from "../reducers/panelSlice";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";

import { LeftPanel, RightPanel } from "../components/Panels";
import { ProjectLeft, ProjectRight } from "../components/Projects";

const Projects = () => {
  const data = projects;

  return (
    <main className="relative flex flex-grow w-full overflow-auto scrollbar-hide">
      <GearBox animationDir={"open"} />
      <LeftPanel contentLeft={<ProjectLeft data={data} />} />
      <RightPanel contentRight={<ProjectRight data={data} />} />
    </main>
  );
};

export default Projects;
