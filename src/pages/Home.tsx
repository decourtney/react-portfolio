import React, { useEffect, useState } from "react";
import { LeftPanel, RightPanel } from "../components/PanelController/Panels";
import GearBox from "../components/GearBox/GearBox";

import { useAppDispatch, useAppSelector } from "../reducers/hooks";
import { setIsOpen, setIsOpening, setContent } from "../reducers/panelSlice";

import { HomeLeft, HomeRight } from "../components/Home";
import PanelController from "../components/PanelController";

const Home = () => {
  const [animateGearBox, setAnimateGearBox] = useState(false);

 console.log('home content rendered')




//  return (
//    <>
//      <div className="relative h-full">
//        <GearBox isAnimate={animateGearBox} />
//        <LeftPanel contentLeft={contentLeft} />
//        <RightPanel contentRight={currentContent.right} />
//      </div>
//    </>
//  );

  return (
    <main className="relative h-full">
      <PanelController
        contentLeft={<HomeLeft data={"Home Left"} />}
        contentRight={<HomeRight data={"Home Right"} />}
      />
    </main>
  );
};

export default Home;
