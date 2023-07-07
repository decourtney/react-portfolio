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
      <div className="relative flex-col w-[80%] h-[60%] mt-[10%] text-3xl font-vt323 text-green-500 bg-gray-800">
        <div className="video-overlay pointer-events-none" />
        <form
          className="inline-flex flex-col w-full h-full p-[2%] space-y-0"
          onSubmit={sendEmail}
        >
          <div className="flex ">
            {/* <label htmlFor="username">Name:</label> */}
            <input
              id="username"
              type="text"
              name="user_name"
              className="w-full bg-inherit outline-none placeholder-green-400"
              title="Name"
              placeholder="<Name>"
              required
              autoFocus
            />
          </div>
          <div className="flex text-inherit">
            {/* <label htmlFor="email">Email:</label> */}
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
            {/* <label htmlFor="message">Message:</label> */}
            <textarea
              id="message"
              name="message"
              className="h-full w-full bg-inherit resize-none outline-none placeholder-green-400 scrollbar-hide"
              title="Message Contents"
              placeholder="<Message>"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export { ContactLeft, ContactRight };
