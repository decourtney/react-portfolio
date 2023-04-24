import React, { useEffect, useState } from "react";

<<<<<<< Updated upstream
type ProjectProps = {
  data: string;
};

const ProjectLeft = ({ data }: ProjectProps) => {
  const [loadContent, setLoadContent] = useState("");

  return <>{data}</>;
};

const ProjectRight = ({ data }: ProjectProps) => {
  const [loadContent, setLoadContent] = useState("");

  return <>{data}</>;
=======
interface Project {
  name?: string
  date?: string
  description?: string
  tags?: string[]
  url?: string
  repo?: string
  image?: string
}

const ProjectLeft = ({ data }: { data: Project[] }) => {
  console.log(data)
  return (
    <>
      {data.map((project, index) => {
        return (<div key={index} className="flex m-1">
          <img src={project.image} alt={project.name} />
        </div>)
      })}
    </>)
};

// Need to make the list of projects and ul/li
const ProjectRight = ({ data }: { data: Project[] }) => {
  return (
    <>
      {data.map((project) => {
        return (<div key={project.name}><p><span>{project.name}</span></p></div>)
      })}
    </>)
>>>>>>> Stashed changes
};

export { ProjectLeft, ProjectRight };
