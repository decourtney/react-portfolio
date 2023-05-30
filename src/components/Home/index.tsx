import React, { useEffect, useState } from "react";
import label from "../../images/home_label.png"
import cert from "../../images/home_cert.png"

type HomeProps = {
  data: string;
}

const HomeLeft = ({data}: HomeProps) => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <div className="flex justify-center panel-bg w-full ml-[1%] mr-[4%]">
        <div className="mt-[20%]">
          <img src={label} className="" />
        </div>
      </div>
    </>
  );
};

const HomeRight = ({ data }: HomeProps) => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <div className="flex justify-center panel-bg w-full ml-[1%] mr-[4%]">
        <div className="mt-[20%]">
          <img src={cert} className=""/>
        </div>
      </div>
    </>
  );
};

export { HomeLeft, HomeRight };
