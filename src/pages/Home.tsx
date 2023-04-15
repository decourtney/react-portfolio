import React, { useEffect, useState } from "react";

import PanelContainer from "../components/PanelContainer";

type HomeProps = {
  linkClicked: string;
};

// As long as linkClicked stays empty the panels are closed on load. Can I use this time to make sure everything is loaded before loading home
const Home = () => {
  const [loadContent, setLoadContent] = useState("");



  return (
    <main className="relative h-full">
      <PanelContainer content={loadContent} />
    </main>
  );
};

export default Home;
