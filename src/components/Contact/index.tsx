import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import TerminalDisplay from "./Terminal";
import tFrame from "../../images/terminal_frame.png";
import tPwr from "../../images/terminal_pwr.png";
import tDial from "../../images/terminal_dial.png";
import github_icon from "../../images/github_icon_white.png";
import facebook_icon from "../../images/facebook_icon_white.png";
import linkedin_icon from "../../images/linkedin_icon_white.png";

type ContactProps = {
  data: string;
};

const githubAddress = "https://github.com/decourtney";
const facebookAddress = "https://www.facebook.com/Donovan.Courtney78";
const linkedinAddress = "https://www.linkedin.com/in/decourtney/";

const ContactLeft = ({ data }: ContactProps) => {
  return (
    <div className="w-full mr-[4%] bg-blue-400">
      <p className="text-6xl">{data}</p>
    </div>
  );
};

const ContactRight = ({ data }: ContactProps) => {
  const [terminalPower, setTerminalPower] = useState(false);
  const [isPowerBtnDisabled, setIsPowerBtnDisabled] = useState(false);
  const [powerButton, animatePowerButton] = useAnimate();
  const [socialDial, animateSocialDial] = useAnimate();

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

  const handlePowerButtonClick = (event: React.MouseEvent) => {
    setTerminalPower(!terminalPower);
    !terminalPower
      ? animatePowerButton(powerButton.current, { rotateZ: 45 })
      : animatePowerButton(powerButton.current, { rotateZ: 0 });
  };

  return (
    <div className="relative flex w-full mr-[3%] ml-[4%] mt-[2%] mb-[5%] justify-center items-center bg-green-400">
      {/* <div className="relative w-full h-full"> */}
      <div className="absolute top-1/2 left-1/2 w-[90%] h-auto -translate-x-[50%] -translate-y-[50%]">
        <div className="relative flex w-full h-full">
          <img
            src={tFrame}
            className="w-[100%] rounded-3xl z-20 pointer-events-none"
          />
          <div className="absolute w-full h-full z-20 pointer-events-none">
            {/* Power Button */}
            <motion.button
              ref={powerButton}
              className={`absolute bottom-[13.3%] right-[11.4%] w-[8%] pointer-events-auto`}
              initial={{ rotate: 45 }}
              onClick={(e) => {
                handlePowerButtonClick(e);
              }}
              disabled={isPowerBtnDisabled}
            >
              <img src={tPwr} />
            </motion.button>

            {/* Unused Button */}
            <button className="absolute bottom-[13.3%] right-[27%] w-[8%] rotate-45">
              <img src={tPwr} />
            </button>

            {/* Expansion of terminal functionality - move dial to Terminal for terminal display of links */}
            {/* Social Dial Group */}
            <div className="absolute bottom-[12.8%] left-[40%] w-[9%]">
              <motion.img
                ref={socialDial}
                src={tDial}
                className="w-full"
                initial={{ rotate: 0 }}
              />

              <a href={githubAddress} target="blank">
                <motion.img
                  src={github_icon}
                  className="absolute -top-[10%] left-[95%] w-[30%] pointer-events-auto cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  onClick={(e) => {
                    animateSocialDial(socialDial.current, { rotate: 45 });
                  }}
                />
              </a>

              <a href={facebookAddress} target="blank">
                <motion.img
                  src={facebook_icon}
                  className="absolute top-1/2 left-[105%] w-[30%] pointer-events-auto cursor-pointer"
                  initial={{ translateY: "-50%" }}
                  whileHover={{ scale: 1.2 }}
                  onClick={(e) => {
                    animateSocialDial(socialDial.current, { rotate: 90 });
                  }}
                />
              </a>

              <a href={linkedinAddress} target="blank">
                <motion.img
                  src={linkedin_icon}
                  className="absolute -bottom-[10%] left-[95%] w-[30%] pointer-events-auto cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  onClick={(e) => {
                    animateSocialDial(socialDial.current, { rotate: 135 });
                  }}
                />
              </a>
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
        {/* <AnimatePresence mode="wait">
            {terminalPower ? (
              <TerminalDisplay
                key={"terminal"}
                setIsPowerBtnDisabled={setIsPowerBtnDisabled}
              />
            ) : (
              <div className="absolute top-1/2 left-1/2 w-[75%] h-[57%] p-8 -translate-x-[50%] -translate-y-[66%] bg-black" />
            )}
          </AnimatePresence> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export { ContactLeft, ContactRight };
