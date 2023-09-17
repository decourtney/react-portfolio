import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GearBox from "../components/GearBox";
import PanelCog from "../components/Loading/PanelCog";
import loadingPanelLeft from "../images/loading_panel_left.png";
import loadingPanelRight from "../images/loading_panel_right.png";
import { useAppDispatch } from "../reducers/hooks";
import { setMarqueeMsg, setPrevState } from "../reducers/projectSlice";

const Loading = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMarqueeMsg(`Loading please wait...`));
    dispatch(
      state ? setPrevState(state.value) : dispatch(setPrevState("home"))
    );

    if (!state) navigate("home");
  }, []);

  const CogAnimComplete = () => {
    navigate(state ? `${state.value}` : "home");
    console.log(state)
  };

  return (
    <>
      <GearBox animationDir={"none"} />
      <div className="absolute top-0 left-0 w-full h-full">
        <PanelCog
          nextRoute={state ? state.value : "initial"}
          CogAnimComplete={CogAnimComplete}
        />
        <img
          src={loadingPanelLeft}
          className="absolute top-[50%] -left-[0%] h-full transform -translate-y-[50%]"
          alt="Left Loading Panel"
        />
        <img
          src={loadingPanelRight}
          className="absolute top-[50%] -right-[0%] h-full transform -translate-y-[50%]"
          alt="Right Loading Panel"
        />
      </div>
    </>
  );
};

export default Loading;
