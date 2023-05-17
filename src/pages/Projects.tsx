import React, { useEffect, useState } from "react";
import projectsData from "../components/Projects/Projects.json";
import GearBox from "../components/GearBox/GearBox";
import { LeftPanel, RightPanel } from "../components/Panels";
import { ProjectLeft, ProjectRight } from "../components/Projects";

const Projects = () => {
  const projects = JSON.parse(JSON.stringify(projectsData))

  return (
    <>
      <GearBox animationDir={"open"} />
      <LeftPanel contentLeft={<ProjectLeft data={projects} />} />
      <RightPanel contentRight={<ProjectRight data={projects} />} />
    </>
  );
};

export default Projects;
