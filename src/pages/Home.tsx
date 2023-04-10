import React, { useEffect, useState } from "react";

import GearBox from "../components/GearBox";
import PanelContainer from "../components/Panel";

type HomeProps = {
  linkClicked: string;
};

const Home = ({ linkClicked }: HomeProps) => {
  const [animateGearBox, setAnimateGearBox] = useState(false);
  const [loadContent, setLoadContent] = useState("");

  useEffect(() => {
    if (linkClicked) {
      console.log("Home settings are changing to: " + linkClicked);
      setLoadContent(linkClicked);
      setAnimateGearBox(true);
    }
  }, [linkClicked]);

  console.log("Home link reference: " + linkClicked);

  return (
    <main className="relative flex mb-auto h-full">
      <PanelContainer content={loadContent} />

      <GearBox animate={animateGearBox} />
    </main>
  );
};

export default Home;
