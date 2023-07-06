import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { isEditable } from "@testing-library/user-event/dist/utils";

type ContactProps = {
  data: string;
};

const ContactLeft = ({ data }: ContactProps) => {
  const [loadContent, setLoadContent] = useState("");

  return (
    <>
      <div>
        <p className="text-6xl">{data}</p>
      </div>
    </>
  );
};

const ContactRight = ({ data }: ContactProps) => {
  // const form = React.useRef<HTMLFormElement>('');

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

  return (
    <div className="flex w-full justify-center bg-green-400">
      <div className="relative w-[80%] h-[60%] my-[5%] text-green-500 text-3xl font-vt323">
        <div className="video-overlay pointer-events-none" />
        <div className=" w-full h-full p-[2%] bg-black">
          <form
            className="flex-col w-full h-full p-[1%] space-y-0 bg-gray-800 "
            onSubmit={sendEmail}
          >
            <div className="flex space-x-2">
              <label htmlFor="username">Name:</label>
              <input
                id="username"
                type="text"
                name="user_name"
                className="w-full bg-inherit outline-none"
                style={{ fontVariant: "normal" }}
                placeholder=""
                required
              />
            </div>
            <div className="flex space-x-2">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="user_email"
                className="w-full bg-inherit outline-none"
                placeholder=""
                required
              />
            </div>
            <div className="flex-col bg-blue-200">
              <label htmlFor="message">Message:</label>
              <div className="w-full h-full bg-pink-500">
                <span>stuff</span>
              </div>
              {/* <textarea
                id="message"
                name="message"
                className="flex w-full h-full mt-1 resize-none scrollbar-hide"
                placeholder=""
                required
              /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { ContactLeft, ContactRight };