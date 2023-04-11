import React, { useEffect, useState } from "react";

import GearBox from "../components/GearBox";
import PanelContainer from "../components/PanelContainer";

type MainProps = {
  linkClicked: string;
};

// As long as linkClicked stays empty the panels are closed on load. Can I use this time to make sure everything is loaded before loading home
const Main = ({ linkClicked }: MainProps) => {
  const [animateGearBox, setAnimateGearBox] = useState(false);
  const [loadContent, setLoadContent] = useState("");

  useEffect(() => {
    if (linkClicked) {
      console.log("Main settings are changing to: " + linkClicked);
      setLoadContent(linkClicked);
      setAnimateGearBox(true);
    }
  }, [linkClicked]);

  console.log("Main link reference: " + linkClicked);

  return (
    <main className="relative h-full">
        <PanelContainer content={loadContent} />
        <GearBox animate={animateGearBox} />
    </main>
  );
};

export default Main;
