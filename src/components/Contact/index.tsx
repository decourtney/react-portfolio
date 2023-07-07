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
      <div className="w-full bg-blue-400">
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
      <div className="relative flex-col w-[80%] h-[60%] mt-[10%] text-3xl font-vt323 bg-gray-800">
        {/* <div className="video-overlay pointer-events-none" /> */}
        <form
          className="inline-flex flex-col w-full h-full space-y-0"
          onSubmit={sendEmail}
        >
          <div className="flex">
            <label htmlFor="username">Name:</label>
            <input
              id="username"
              type="text"
              name="user_name"
              className="w-full bg-inherit outline-none"
              style={{ fontVariant: "normal" }}
              placeholder="Name"
              required
            />
          </div>
          <div className="flex bg-pink-400">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="user_email"
              className="w-full bg-inherit outline-none"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex h-full bg-blue-600">
            <label htmlFor="message">Message:</label>
            <div><span></span></div>
            {/* <textarea
              id="message"
              name="message"
              className="h-full w-full bg-inherit resize-none outline-none scrollbar-hide"
              placeholder="Message"
              required
            /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export { ContactLeft, ContactRight };
