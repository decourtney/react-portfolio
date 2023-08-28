import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TerminalDisplay from "./Terminal";
import tFrame from "../../images/terminal_frame.png";
import tPwr from "../../images/terminal_pwr.png";
import tDial from "../../images/terminal_dial.png"

type ContactProps = {
  data: string;
};

const ContactLeft = ({ data }: ContactProps) => {
  return (
    <div className="w-full mr-[4%] bg-blue-400">
      <p className="text-6xl">{data}</p>
    </div>
  );
};

const ContactRight = ({ data }: ContactProps) => {
  const [terminalPower, setTerminalPower] = useState(false);
  const [isPowerBtnDisabled, setIsPowerBtnDisabled] = useState(false)

  const variants = {
    initial: {
      translateX: "-50%",
      translateY: "-65%",
    },
    on: {
      translateY: "-64.5%",
      transition: { duration: 0.2, repeat: Infinity, ease: "linear" },
    },
    off: {
      opacity: [0],
      x: "100%",
      transition: { duration: 2, ease: "linear" },
    },
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    setTerminalPower(!terminalPower);
  };

  return (
    <div className="flex w-full mr-[3%] ml-[4%] mt-[2%] mb-[5%] justify-center items-center bg-green-400">
      <div className="relative w-full h-full">
        <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-[50%] -translate-y-[50%]">
          <div className="relative flex w-full h-full">
            <img
              src={tFrame}
              className="w-[100%] rounded-3xl z-20 pointer-events-none"
            />
            <div className="absolute w-full h-full z-20 pointer-events-none">
              <button
                className="pointer-events-auto"
                onClick={(e) => {
                  handleButtonClick(e);
                }}
                disabled={isPowerBtnDisabled}
              >
                <img
                  src={tPwr}
                  className="absolute bottom-[12%] right-[9%] w-[10%] h-[10%]"
                />
              </button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {terminalPower ? (
              <TerminalDisplay
                key={"terminal"}
                setIsPowerBtnDisabled={setIsPowerBtnDisabled}
              />
            ) : (
              <div className="absolute top-1/2 left-1/2 w-[75%] h-[57%] p-8 -translate-x-[50%] -translate-y-[66%] bg-black" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export { ContactLeft, ContactRight };
