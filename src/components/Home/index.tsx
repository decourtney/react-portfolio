import React, { useEffect, useState } from "react";
import label from "../../images/home_label.png"
import cert from "../../images/home_cert.png"

const HomeLeft = () => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <div className="panel-bg border-ws flex justify-center w-full ml-[0%] mr-[4%] -z-10">
        <div className="mt-[25%] mx-[5%]">
          <img src={label} className="shadow-[0px_0px_3px_black]" />
        </div>
      </div>
    </>
  );
};

const HomeRight = () => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <div className="panel-bg border-ws flex justify-center w-full ml-[4%] mr-[0%] -z-10">
        <div className="mt-[25%] mx-[5%]">
          <img src={cert} className="drop-shadow-[0px_0px_2px_black]"/>
        </div>
      </div>
    </>
  );
};

export { HomeLeft, HomeRight };
