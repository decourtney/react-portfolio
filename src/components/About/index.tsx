import React, { useEffect, useState } from "react";
import forrest from "../../images/forrest.jpg"

const AboutLeft = () => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <div className="w-full mx-[3%] mt-[2%] mb-[5%] bg-black">
      <p className="text-6xl">{ }</p>
    </div>
  );
};

const AboutRight = () => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <div className="w-full m-[5%]">
      <div className="image-container relative w-full h-fit overflow-hidden bg-slate-600 text-4xl">
        <img src={forrest} className="w-full invisible"/>
        <div className="img absolute top-0 flex w-full h-full">
          <span className="m-[1%] w-[20%] border overflow-hidden"></span>
          <span className="m-[1%] w-[20%] border overflow-hidden"></span>
          <span className="m-[1%] w-[20%] border overflow-hidden"></span>
          <span className="m-[1%] w-[20%] border overflow-hidden"></span>
          <span className="m-[1%] w-[20%] border overflow-hidden"></span>

          {/* <img src={forrest} className="w-full "></img><img></img><img></img><img></img><img></img> */}
        </div>
      </div>
    </div>
  );
};

export { AboutLeft, AboutRight };
