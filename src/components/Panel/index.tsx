import React, { useEffect, useState } from "react";
import { LeftPanel, RightPanel } from "./Panels";

type PanelContainerProps = {
  content: string;
};

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
        <LeftPanel position={panelPosition} />
        <RightPanel position={panelPosition} />
      </div>
    </>
  );
};

export default PanelContainer;
