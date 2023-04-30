import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LeftPanel, RightPanel } from "../components/Panels";
import { ContactLeft, ContactRight } from "../components/Contact";
import GearBox from "../components/GearBox/GearBox";

const Contact = () => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <main className="relative flex flex-grow w-full overflow-auto scrollbar-hide">
      <GearBox animationDir={"open"} />
      <LeftPanel contentLeft={<ContactLeft data={"Contact Me"} />} />
      <RightPanel contentRight={<ContactRight data={"Under Construction"} />} />
    </main>
  );
};

export default Contact;
