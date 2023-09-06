import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../reducers/hooks";
import { setMarqueeMsg } from "../reducers/projectSlice";
import { LeftPanel, RightPanel } from "../components/Panels";
import { ContactLeft, ContactRight } from "../components/Contact";
import GearBox from "../components/GearBox";

const Contact = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMarqueeMsg(`Contact Page`));
  }, []);

  return (
    <>
      <GearBox animationDir={"open"} />
      <LeftPanel contentLeft={<ContactLeft />} />
      <RightPanel contentRight={<ContactRight />} />
    </>
  );
};

export default Contact;
