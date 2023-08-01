import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GearBox from "../components/GearBox";
import { AnimatePresence, motion } from "framer-motion";
import PanelCog from "../components/Loading/PanelCog";
import panelCogBase from "../images/panel_cog_base.png";
import loadingPanelLeft from "../images/loading_panel_left.png";
import loadingPanelRight from "../images/loading_panel_right.png";
import panelCog from "../images/panel_cog.png";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { setMarqueeMsg, setPrevState } from "../reducers/projectSlice";

const Loading = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const prevState = useAppSelector((state) => state.project.prevState);

  useEffect(() => {
    dispatch(setMarqueeMsg(`Loading please wait...`));
    dispatch(
      state ? setPrevState(state.value) : dispatch(setPrevState("home"))
    );
  }, []);

  const CogAnimComplete = () => {
    // console.log('anim complete')
    navigate(state ? `/${state.value}` : "/home");
  };

  return (
    <>
      <GearBox animationDir={"none"} />
      <div className="absolute top-[0%] left-[0%] w-full h-full">
        <PanelCog
          nextRoute={state ? state.value : "home"}
          CogAnimComplete={CogAnimComplete}
        />
        <img
          src={loadingPanelLeft}
          className="absolute top-[50%] -left-[0%] h-full transform -translate-y-[50%]"
        />
        <img
          src={loadingPanelRight}
          className="absolute top-[50%] -right-[0%] h-full transform -translate-y-[50%]"
        />
      </div>
    </>
  );
};

export default Loading;
