import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GearBox from "../components/GearBox/GearBox";
import { motion } from "framer-motion";
import PanelCog from "../components/Loading/PanelCog";
import panelCogBase from "../images/panel_cog_base.png";
import loadingPanelLeft from "../images/loading_panel_left.png";
import loadingPanelRight from "../images/loading_panel_right.png";
import panelCog from "../images/panel_cog.png";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { setMarqueeMsg } from "../reducers/projectSlice";

const Loading = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setMarqueeMsg(`Loading please wait...`));
  //   const timer = setTimeout(() => {
  //     navigate(state ? `${state.value}` : "/home");
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <>
      <GearBox animationDir={"none"} />
      <div className="absolute top-[0%] left-[0%] w-full h-full">
      <PanelCog />
        {/* <img
          src={panelCogBase}
          className="absolute top-[50%] -left-[6.1%] w-[8.5%] h-[10%] transform -translate-y-[50%]"
        /> */}
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
