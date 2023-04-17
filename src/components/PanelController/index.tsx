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
  const [currentContent, setCurrentContent] = useState({
    left: <></>,
    right: <></>,
  });

  const [animateGearBox, setAnimateGearBox] = useState(false);
  const [isPanelsReady, setIsPanelsReady] = useState(false);

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.panel.isOpen);
  const isOpening = useAppSelector((state) => state.panel.isOpening);

  // useEffect(() => {
  //   if (!isOpening) dispatch(setIsOpening(true));
  //   console.log('Mounted and isOpening set to: ', isOpening)

  // }, []);

  useEffect(() => {
    if (contentLeft || contentRight) {
      setCurrentContent({ left: contentLeft, right: contentRight });
      if (!isOpen && !isOpening) {
        dispatch(setIsOpening(true));
        setIsPanelsReady(false);
      }
    }
  }, [contentLeft, contentRight]);
  console.log('panelcontroller rendered')

  // useEffect(() => {
  //   if (!isOpen) {
  //     dispatch(setIsOpening(true));
  //     setIsPanelsReady(false);
  //   }
  // }, [isOpen]);

  // useEffect(() => {
  //   console.log("PanelController: setIsPanelsReady to true");
  //   if (isOpen) setIsPanelsReady(true);
  // }, [isOpen]);

  // will probably have to change the GearBox a bit. Let the gear box trigger on reducers
  return (
    <>
      <div className="relative h-full">
        <GearBox isAnimate={animateGearBox} />
        <LeftPanel contentLeft={currentContent.left} />
        <RightPanel contentRight={currentContent.right} />
      </div>
    </>
  );
};

export default PanelController;
