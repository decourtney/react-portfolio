import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import TerminalDisplay from "./Terminal";
import tFrame from "../../images/terminal_frame.png";
import tPwr from "../../images/terminal_pwr.png";
import tDial from "../../images/terminal_dial.png";
import github_icon from "../../images/github_icon_white.png";
import facebook_icon from "../../images/facebook_icon_white.png";
import linkedin_icon from "../../images/linkedin_icon_white.png";
import left_panel_fg from "../../images/contact_left_fg.png";
import left_panel_bg from "../../images/contact_left_bg.png";
import crane from "../../images/contact_crane.png";
import cog_single from "../../images/cog_single.png";
import cog_large from "../../images/cog_large.png";

type ContactProps = {
  data: string;
};

const githubAddress = "https://github.com/decourtney";
const facebookAddress = "https://www.facebook.com/Donovan.Courtney78";
const linkedinAddress = "https://www.linkedin.com/in/decourtney/";

const ContactLeft = ({ data }: ContactProps) => {
  const [smallCog, animateSmallCog] = useAnimate();
  const [largeCog, animateLargeCog] = useAnimate();
  let cogAnimTimer = 3000;

  useEffect(() => {
    const animateCogs = async () => {
      animateSmallCog(
        smallCog.current,
        { rotate: ["0deg", "-4deg", "-3deg", "-4deg", "0deg"] },
        { duration: 0.5 }
      );
      animateLargeCog(
        largeCog.current,
        { rotate: ["0deg", "4deg", "3deg", "4deg", "0deg"] },
        { duration: 0.5 }
      );

      setTimeout(() => {
        cogAnimTimer = Math.floor(Math.random() * 15) * 1000;
        animateCogs();
      }, cogAnimTimer);
    };

    animateCogs();
  }, []);

  const craneVariants = {
    initial: {
      translateY: "-10%",
      translateX: "45%",
    },
    enter: {
      transition: { duration: 400, ease: "linear", delay: 1, repeat: Infinity },
      translateY: ["-10%", "-50%", "-10%"],
    },
  };

  return (
    <div className="relative w-full mr-[4%]">
      <div className="construction-bg absolute top-0 left-0 w-full h-full blur-[1px] brightness-50" />

      <div className="absolute top-0 left-0 w-full ">
        <motion.img
          src={crane}
          className="w-[20%] origin-top"
          variants={craneVariants}
          initial="initial"
          animate="enter"
        />
      </div>

      <div className="absolute top-0 left-0 w-full">
        <motion.img
          ref={smallCog}
          src={cog_single}
          className="w-[30%]"
          initial={{ translateY: "38%", translateX: "106%" }}
        />
      </div>

      <div className="absolute top-0 left-0 w-full">
        <motion.img
          ref={largeCog}
          src={cog_large}
          className="w-[50%]"
          initial={{ translateY: "-50%", translateX: "100%" }}
        />
      </div>

      <div className="construction-fg absolute top-0 left-0 w-full h-full" />
      <div className="construction-mesh absolute top-0 left-0 w-full h-full" />
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
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                handlePowerButtonClick(e);
              }}
              disabled={isPowerBtnDisabled}
            >
              <img src={tPwr} />
            </motion.button>

            {/* Unused Button */}
            <motion.button
              className="absolute bottom-[13.3%] right-[27%] w-[8%] rotate-45"
              initial={{ rotate: 45 }}
            >
              <img src={tPwr} />
            </motion.button>

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
      </div>
    </div>
  );
};

export { ContactLeft, ContactRight };
