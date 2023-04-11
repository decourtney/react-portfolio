import React, { useState, useEffect } from "react";
import {ProjectLeftPanel, ProjectRightPanel} from '../Projects'

type PanelProps = {
  position: "close" | "open";
  content: string;
};

const LeftPanel = ({ position, content }: PanelProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, [position]);

  return (
    <>
      <div
        id="left-panel"
        className={`absolute h-full p-10 top-0 left-0 w-1/2 bg-orange-500 transform transition-all duration-500 ${
          animate
            ? position === "close"
              ? "translate-x-0"
              : "-translate-x-full"
            : ""
        }`}
      >
        <div className="flex h-full justify-start bg-cyan-500">
          <ul className="flex-col list-none text-9xl space-y-10 scrollbar-hide overflow-auto">
            <li className="cursor-pointer">
              
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

const RightPanel = ({ position, content }: PanelProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, [position]);

  return (
    <div
      id="right-panel"
      className={`absolute h-full p-10 top-0 right-0 w-1/2 bg-yellow-500 transform transition-all duration-500 ${
        animate
          ? position === "close"
            ? "translate-x-0"
            : "translate-x-full"
          : ""
      }`}
    >
      <div className="flex h-full justify-end bg-cyan-500">
        <ul className="flex-col list-none text-9xl space-y-10 scrollbar-hide overflow-auto">
          <li className="cursor-pointer">
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export { LeftPanel, RightPanel };
