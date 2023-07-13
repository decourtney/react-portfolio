import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import TerminalDisplay from "./Terminal";
import tFrame from "../../images/terminal_frame.png";
import tPwr from "../../images/terminal_pwr.jpg";

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

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        "WiUmD3gJ4iafdCR1R"
      )
      .then(
        (result) => {
          console.log(result.text);
          // e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    setTerminalPower(!terminalPower);
  };

  return (
    <div className="relative flex w-full ml-[4%] bg-green-400">
      <div className="absolute flex justify-center content-center top-1/2 left-1/2 w-full -translate-x-[50%] -translate-y-[50%] bg-blue-300">
        <div className="relative flex justify-center w-full h-full items-center">
          <img
            src={tFrame}
            className="w-[70%] rounded-3xl z-20 pointer-events-none"
          />
          <button
            className="z-20 bg-blue-800"
            onClick={(e) => {
              handleButtonClick(e);
            }}
          >
            <img
              src={tPwr}
              className="absolute bottom-[12%] right-[21%] w-[7%]"
            />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {terminalPower ? (
            <TerminalDisplay key={"terminal"} />
          ) : (
            <div className="absolute top-1/2 left-1/2 w-[53%] h-[57%] p-8 -translate-x-[50%] -translate-y-[66%] bg-black" />
          )}
        </AnimatePresence>

        {/* <motion.div
          className="absolute top-1/2 left-1/2 w-[53%] h-[57%] p-8 -translate-x-[50%] -translate-y-[66%] text-xl font-vt323 text-green-500"
          initial={{
            background: "rgba(0,0,0,1)",
          }}
          animate={{
            background: [
              "radial-gradient(rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 0%)",
              "radial-gradient(rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 75%)",
              "radial-gradient(rgba(31, 41, 55, 1) 0%, rgba(31, 41, 55, 1) 100%)",
              "rgba(31, 41, 55, 1)",
            ],
          }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "linear",
          }}
        >
          
        </motion.div> */}

        {/* <form className="absolute top-1/2 left-1/2 w-[53%] h-[57%] p-8 -translate-x-[50%] -translate-y-[66%] text-xl font-vt323 text-green-500 bg-gray-800">
          <div className="flex text-inherit">
            <input
              id="username"
              type="text"
              name="user_name"
              className="w-full bg-inherit outline-none placeholder-green-400"
              title="Name"
              placeholder="<Name>"
              required
            />
          </div>
          <div className="flex text-inherit">
            <input
              id="email"
              type="email"
              name="user_email"
              className="w-full bg-inherit outline-none placeholder-green-400"
              title="Email"
              placeholder="<Email>"
              required
            />
          </div>
          <div className="flex w-full h-full text-inherit">
            <textarea
              id="message"
              name="message"
              className="h-full w-full bg-inherit resize-none outline-none placeholder-green-400 scrollbar-hide"
              title="Message Contents"
              placeholder="<Message>"
              required
            />
          </div>
        </form> */}
        {/* {terminalPower ? (
          <motion.div
            className="video-overlay absolute top-1/2 left-1/2 w-[54%] h-[59%] rounded-xl after:rounded-xl after:absolute after:w-full after:h-full pointer-events-none"
            key="video-overlay"
            variants={variants}
            initial="initial"
            animate="on"
            exit="off"
          />
        ) : null} */}
      </div>
    </div>
  );
};

export { ContactLeft, ContactRight };
