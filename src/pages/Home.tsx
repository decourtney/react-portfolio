import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LeftPanel, RightPanel } from "../components/Panels";
import GearBox from "../components/GearBox";
import { HomeLeft, HomeRight } from "../components/Home";
import { useAppDispatch } from "../reducers/hooks";
import { setMarqueeMsg } from "../reducers/projectSlice";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMarqueeMsg("Welcome Home"));
  }, []);

  return (
    <>
      <GearBox animationDir={"open"} />
      <LeftPanel contentLeft={<HomeLeft />} />
      <RightPanel contentRight={<HomeRight />} />
    </>
  );
};

export default Home;
