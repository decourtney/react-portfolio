import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LeftPanel, RightPanel } from "../components/Panels";
import GearBox from "../components/GearBox/GearBox";
import { HomeLeft, HomeRight } from "../components/Home";
import testimg from "../images/panel_cog_base.png";

const Home = () => {
  const location = useLocation();

  return (
    <main className="relative flex flex-grow w-full overflow-auto scrollbar-hide">
      <GearBox animationDir={"open"} />
      <LeftPanel
        contentLeft={<HomeLeft data={"Home"} />}
      />
      <RightPanel
        contentRight={<HomeRight data={"Under Construction"} />}
      />
    </main>
  );
};

export default Home;
