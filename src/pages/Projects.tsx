import React, { useEffect, useState } from "react";
import projects from "../utils/projects.json";

import GearBox from "../components/GearBox/GearBox";

import { setContent } from "../reducers/panelSlice";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";

import { LeftPanel, RightPanel } from "../components/Panels";
import { ProjectLeft, ProjectRight } from "../components/Projects";

const Projects = () => {
  const data = projects;

  return (
    <>
        <GearBox animationDir={"open"} />
        <LeftPanel contentLeft={<ProjectLeft data={data} />} />
        <RightPanel contentRight={<ProjectRight data={data} />} />
    </>
  );
};

export default Projects;
