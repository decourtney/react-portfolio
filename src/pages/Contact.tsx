import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { setMarqueeMsg } from "../reducers/projectSlice";
import { useLocation } from "react-router-dom";
import { LeftPanel, RightPanel } from "../components/Panels";
import { ContactLeft, ContactRight } from "../components/Contact";
import GearBox from "../components/GearBox/GearBox";

const Contact = () => {
  const [loadContent, setLoadContent] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMarqueeMsg(`Contact page`));
  }, []);
  
  return (
    <>
      <GearBox animationDir={"open"} />
      <LeftPanel contentLeft={<ContactLeft data={"Contact Me"} />} />
      <RightPanel contentRight={<ContactRight data={"Under Construction"} />} />
    </>
  );
};

export default Contact;
