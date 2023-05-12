import React, { useEffect, useState } from "react";

type HomeProps = {
  data: string;
}

const HomeLeft = ({data}: HomeProps) => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <div>
        <p className="font-swiss text-6xl">{data} &copy; &reg;</p>
      </div>
    </>
  );
};

const HomeRight = ({ data }: HomeProps) => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <div>
        <p className="text-6xl">{data}</p>
      </div>
    </>
  );
};

export { HomeLeft, HomeRight };
