// This will be the temporary mobile page until I can create/rewrite for mobile devices
import React from "react";
import { motion } from "framer-motion";
import construction_site from "../images/construction_site.jpg"

const MobileHome = () => {
  return (
    <main className="w-full h-[100vh] bg-[#00afff]">
      <section className="flex w-full h-full">
        <img src={construction_site} className="w-full blur-[2px]"/>
        <div className="mobile-construction absolute w-full h-full" />
      </section>
    </main>
  );
};

export default MobileHome;
