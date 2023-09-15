import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import TerminalDisplay from "./Terminal";
import tFrame from "../../images/terminal_frame.png";
import tPwr from "../../images/contact_terminal_power.png";
import tDial from "../../images/contact_terminal_dial.png";
import github_icon from "../../images/social_github_icon.png";
import facebook_icon from "../../images/social_facebook_icon.png";
import linkedin_icon from "../../images/social_linkedin_icon.png";
import crane from "../../images/contact_crane.png";
import cog_single from "../../images/cog_single.png";
import cog_large from "../../images/cog_large.png";

const githubAddress = "https://github.com/decourtney";
const facebookAddress = "https://www.facebook.com/Donovan.Courtney78";
const linkedinAddress = "https://www.linkedin.com/in/decourtney/";

const ContactLeft = () => {
  const [smallCog, animateSmallCog] = useAnimate();
  const [largeCog, animateLargeCog] = useAnimate();
  let cogAnimTimer = 5000;

  // Anims just to give some life to the panel
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
    };

    const interval = setInterval(() => {
      animateCogs();
    }, cogAnimTimer);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Very slowly raises and lowers the crane
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
          initial={{ translateY: "44%", translateX: "113%" }}
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

const ContactRight = () => {
  const [terminalPower, setTerminalPower] = useState(false);
  const [isPowerBtnDisabled, setIsPowerBtnDisabled] = useState(false);
  const [powerButton, animatePowerButton] = useAnimate();
  const [socialDial, animateSocialDial] = useAnimate();

  const handlePowerButtonClick = (event: React.MouseEvent) => {
    setTerminalPower(!terminalPower);
    !terminalPower
      ? animatePowerButton(powerButton.current, { rotateZ: 45 })
      : animatePowerButton(powerButton.current, { rotateZ: 0 });
  };

  return (
    <div className="relative flex w-full mr-[3%] ml-[4%] mt-[2%] mb-[5%] justify-center items-center panel-bg">
      <div className="absolute top-1/2 left-1/2 w-[90%] h-auto -translate-x-[50%] -translate-y-[50%]">
        <div className="relative flex w-full h-full">
          <img
            src={tFrame}
            className="w-[100%] rounded-3xl z-20 pointer-events-none"
            alt="Terminal Frame"
          />
          <div className="absolute w-full h-full z-20 pointer-events-none">
            {/* Power Button */}
            <motion.button
              ref={powerButton}
              className={`absolute bottom-[13.3%] right-[11.4%] w-[8%] pointer-events-auto`}
              style={{
                filter: terminalPower
                  ? "drop-shadow(0px 0px 4px green) drop-shadow(0px 0px 6px green)"
                  : "drop-shadow(0px 0px 4px white) drop-shadow(0px 0px 6px white)",
              }}
              initial={{ rotate: 45 }}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                handlePowerButtonClick(e);
              }}
              disabled={isPowerBtnDisabled}
            >
              <img src={tPwr} alt="Terminal Button" />
            </motion.button>

            {/* Unused Button */}
            <motion.button
              className="absolute bottom-[13.3%] right-[27%] w-[8%] rotate-45 drop-shadow-md"
              initial={{ rotate: 45 }}
            >
              <img src={tPwr} alt="Terminal Power Button" />
            </motion.button>

            {/* Expansion of terminal functionality - move dial to Terminal for terminal display of links */}
            {/* Social Dial Group */}
            <div className="absolute bottom-[12.8%] left-[40%] w-[9%] drop-shadow-md">
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
                  style={{ filter: "drop-shadow(0px 0px 3px green)" }}
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
                  style={{ filter: "drop-shadow(0px 0px 3px green)" }}
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
                  style={{ filter: "drop-shadow(0px 0px 3px green)" }}
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
