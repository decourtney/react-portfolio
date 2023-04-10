import React, { useState, useEffect } from "react";

type PanelProps = {
  position: "close" | "open";
};

const LeftPanel = ({ position }: PanelProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, [position]);

  return (
    <div
      id="left-panel"
      className={`absolute h-full w-1/2 left-0 bg-orange-500 transform transition-all duration-500 ${
        animate
          ? position === "close"
            ? "translate-x-0"
            : "-translate-x-full"
          : ""
      }`}
    >
      <span>Left Panel</span>
    </div>
  );
};

const RightPanel = ({ position }: PanelProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, [position]);

  return (
    <div
      id="right-panel"
      className={`absolute h-full w-1/2 right-0 bg-yellow-500 transform transition-all duration-500 ${
        animate
          ? position === "close"
            ? "translate-x-0"
            : "translate-x-full"
          : ""
      }`}
    >
      <span>Right Panel</span>
    </div>
  );
};

export { LeftPanel, RightPanel };
