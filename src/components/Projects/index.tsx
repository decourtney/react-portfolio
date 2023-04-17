import React, { useEffect, useState } from "react";

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
};

export { ProjectLeft, ProjectRight };
