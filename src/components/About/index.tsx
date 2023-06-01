import React, { useEffect, useState } from "react";

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
    <div>
      <p className="text-6xl">{ }</p>
    </div>
  );
};

export { AboutLeft, AboutRight };
