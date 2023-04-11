import React, { useEffect, useState } from "react";
import { LeftPanel, RightPanel } from "./Panels";

type PanelContainerProps = {
  content: string;
};

// Load content from here and pass relavent Component based on 'content'
// Home, About, Work, Contact components each have two exports for left and right panels.
// Work component will have routes to display but this probably wont work. because the links would be on a panel
const PanelContainer = ({ content }: PanelContainerProps) => {
  const [panelPosition, setPanelPosition] = useState<"close" | "open">("close");

  useEffect(() => {
    if (content) {
      setPanelPosition("open");
      const timeout = setTimeout(() => {
        setPanelPosition("close");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [content]);

  console.log(`Panels loading content for ${content}`);

  return (
    <>
      <div>
        <LeftPanel position={panelPosition} content={content} />
        <RightPanel position={panelPosition} content={content} />
      </div>
    </>
  );
};

export default PanelContainer;
