import React, { useEffect, useState } from "react";
import label from "../../images/home_label.png"
import cert from "../../images/home_cert.png"

const HomeLeft = () => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <div className="panel-bg flex justify-center w-full ml-[0%] mr-[4%] -z-10">
        <div className="mt-[20%]">
          <img src={label} className="drop-shadow-md"/>
        </div>
      </div>
    </>
  );
};

const HomeRight = () => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <div className="panel-bg flex justify-center w-full ml-[4%] mr-[0%] -z-10">
        <div className="mt-[25%]">
          <img src={cert} className="drop-shadow-md"/>
        </div>
      </div>
    </>
  );
};

export { HomeLeft, HomeRight };
