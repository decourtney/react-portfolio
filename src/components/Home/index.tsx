import React, { useEffect, useState } from "react";

type HomeProps = {
  data: string;
}

const HomeLeft = ({data}: HomeProps) => {
  const [loadContent, setLoadContent] = useState("");

  return <>{data}</>;
};

const HomeRight = ({ data }: HomeProps) => {
  const [loadContent, setLoadContent] = useState("");

  return <>{data}</>;
};

export { HomeLeft, HomeRight };
