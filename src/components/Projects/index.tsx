import React, { useEffect, useState } from "react";

interface Project {
  name?: string;
  date?: string;
  description?: string;
  tags?: string[];
  url?: string;
  repo?: string;
  image?: string;
}

const ProjectLeft = ({ data }: { data: Project[] }) => {
  console.log(data);
  return (
    <>
      <div className="flex-col space-y-5">
        {data.map((project, index) => {
          return (
            <img
              key={index}
              src={project.image}
              alt={project.name}
              className=""
              draggable="false"
            />
          );
        })}
      </div>
    </>
  );
};

// Need to make the list of projects and ul/li
const ProjectRight = ({ data }: { data: Project[] }) => {
  return (
    <>
      <div className="flex  w-full">
        <ul className="flex-col list-none space-y-1">
          {data.map((project, index) => {
            return (
              <li key={project.name} className="cursor-pointer bg-orange-400">
                <a href={project.url || project.repo} target="_blank">
                  <p className="text-6xl">
                    <span>{project.name}</span>
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export { ProjectLeft, ProjectRight };
