import React, { useEffect, useState } from "react";

import { LeftPanel, RightPanel } from "./Panels";
import GearBox from "./GearBox";

type PanelContainerProps = {
  content: string;
};

const PanelContainer = ({ content }: PanelContainerProps) => {
  const [panelPosition, setPanelPosition] = useState<"close" | "open">("close");
  const [animateGearBox, setAnimateGearBox] = useState(false);

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
      {/* <GearBox animate={animateGearBox} />
      <div className="relative">
        <LeftPanel position={panelPosition} content={content} />
        <RightPanel position={panelPosition} content={content} />
      </div> */}
    </>
  );
};

export default PanelContainer;
