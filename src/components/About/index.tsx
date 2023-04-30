import React, { useEffect, useState } from "react";

type AboutProps = {
  data: string;
};

const AboutLeft = ({ data }: AboutProps) => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <div>
        <p className="text-6xl">{data}</p>
      </div>
    </>
  );
};

const AboutRight = ({ data }: AboutProps) => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <div>
        <p className="text-6xl">{data}</p>
      </div>
    </>
  );
};

export { AboutLeft, AboutRight };
