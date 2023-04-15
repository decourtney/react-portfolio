import React, { useEffect, useState } from "react";

import PanelContainer from "../components/PanelContainer";

const Projects = () => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <main className="relative h-full">
      <PanelContainer content={loadContent} />
    </main>
  );
};

export default Projects;
