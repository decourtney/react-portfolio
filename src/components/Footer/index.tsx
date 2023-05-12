import React from "react";
import nameplate from "../../images/nameplate.png"

const Footer = () => {
  
  return (
    <footer className="footer-bg">
      <div className="relative flex flex-shrink justify-center">
        <img
          src={nameplate}
          className="absolute w-[12%] bottom-[50%] left-[50%] transfrom -translate-x-[50%]"
        />
        <h2 className="absolute w-full  text-center bottom-[0%] left-[50%] transfrom -translate-x-[50%] -translate-y-[20%]">
          <span className="font-swissSymbol">&copy;</span>2023 Donovan Courtney
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
