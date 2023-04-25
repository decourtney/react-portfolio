import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { setIsOpen, setIsOpening, setContent } from "../../reducers/panelSlice";

import { LeftPanel, RightPanel } from "./Panels";
import GearBox from "../GearBox/GearBox";

type PanelContainerProps = {
  contentLeft: React.ReactElement;
  contentRight: React.ReactElement;
};

const PanelController = ({
  contentLeft,
  contentRight,
}: PanelContainerProps) => {
  const [animateGearBox, setAnimateGearBox] = useState(false);
  const [isPanelsReady, setIsPanelsReady] = useState(false);

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.panel.isOpen);
  const isOpening = useAppSelector((state) => state.panel.isOpening);

  // useEffect(() => {
  //   if (contentLeft || contentRight) {
  //     console.log('PanelController set currentContent to:', contentLeft)
      

  //     if (isOpening) {
  //       console.log('PanelController useEffect 2nd if block')
  //       dispatch(setIsOpening(false));
  //     }

  //   }
  // }, [contentLeft, contentRight]);

  return (
    <>
      {/* <div className="relative h-full">
        <GearBox isAnimate={animateGearBox} />
        <LeftPanel contentLeft={contentLeft} />
        <RightPanel contentRight={contentRight} />
      </div> */}
    </>
  );
};

export default PanelController;
