import { useEffect } from "react";
import projectsData from "../components/Projects/Projects.json";
import GearBox from "../components/GearBox";
import { LeftPanel, RightPanel } from "../components/Panels";
import { ProjectLeft, ProjectRight } from "../components/Projects";
import { useAppDispatch } from "../reducers/hooks";
import { setMarqueeMsg } from "../reducers/projectSlice";

const Projects = () => {
  // Pull project data from local JSON file for now
  const projects = JSON.parse(JSON.stringify(projectsData));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMarqueeMsg(`Some of my work`));
  }, []);

  return (
    <>
      <GearBox animationDir={"open"} />
      <LeftPanel contentLeft={<ProjectLeft data={projects} />} />
      <RightPanel contentRight={<ProjectRight data={projects} />} />
    </>
  );
};

export default Projects;
