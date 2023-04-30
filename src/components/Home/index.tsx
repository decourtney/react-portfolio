import React, { useEffect, useState } from "react";

type HomeProps = {
  data: string;
}

const HomeLeft = ({data}: HomeProps) => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <div>
        <p className="text-8xl">{data}</p>
      </div>
    </>
  );
};

const HomeRight = ({ data }: HomeProps) => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <div>
        <p className="text-8xl">{data}</p>
      </div>
    </>
  );
};

export { HomeLeft, HomeRight };
