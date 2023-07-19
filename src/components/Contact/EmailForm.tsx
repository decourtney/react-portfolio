import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { setMarqueeMsg } from "../../reducers/projectSlice";

const TerminalEmailForm = () => {
  const [resultMessage, setResultMessage] = useState("");
  const dispatch = useAppDispatch();

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        "WiUmD3gJ4iafdCR1R"
      )
      .then(
        (result) => {
          dispatch(setMarqueeMsg("Thank You!"));
          // console.log(result.status, result.text);
        },
        (error) => {
          dispatch(setMarqueeMsg("Something Went Wrong!"));
          // console.log(error.status, error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="relative flex w-full h-full justify-center items-center -z-10 ">
      {/* add intro splash stuff */}
      {/* <div>TEST</div> */}
      <form
        className="w-full h-full text-inherit text-5xl"
        onSubmit={sendEmail}
      >
        <div className="flex">
          <input
            id="user_name"
            type="text"
            name="user_name"
            className="w-full bg-inherit outline-none placeholder-green-400"
            title="Name"
            placeholder="<Name>"
            required
          />
        </div>
        <div className="flex">
          <input
            id="user_email"
            type="email"
            name="user_email"
            className="w-full bg-inherit outline-none placeholder-green-400"
            title="Email"
            placeholder="<Email>"
            required
          />
        </div>
        <div className="flex w-full h-full">
          <textarea
            id="user_message"
            name="user_message"
            className="w-full h-full bg-inherit resize-none outline-none placeholder-green-400 scrollbar-hide"
            title="Message"
            placeholder="<Message>"
            required
          />
        </div>
        <div className="absolute top-0 right-0">
          <button className="button-border">SEND</button>
        </div>
      </form>
    </div>
  );
};

export default TerminalEmailForm;
