import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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
      <div className="relative w-[80%] h-[60%] my-[5%] text-green-500 text-3xl">
        <div className="video-overlay pointer-events-none" />
        <div className="flex w-full h-full p-[2%] bg-black">
          <form
            className="flex-col w-full p-[1%] space-y-0 bg-gray-800"
            onSubmit={sendEmail}
          >
            <div className="flex space-x-2">
              <label htmlFor="username">Name:</label>
              <input
                id="username"
                type="text"
                name="user_name"
                className="w-full bg-inherit"
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
                className="w-full bg-inherit"
                placeholder=""
                required
              />
            </div>
            <div className="flex space-x-2  bg-blue-200">
              <label htmlFor="message">Message:</label>
              {/* <div className="w-full break-words h-full">TESTdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div> */}
              {/* <textarea
                id="message"
                name="message"
                className="flex w-full h-full mt-1 scrollbar-hide"
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

{
  /* <form
            className="flex-col h-full p-[1%] space-y-5 bg-orange-300"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              className="w-full"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="user_email"
              className="w-full"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              className="w-full resize-none"
              placeholder="Message"
              required
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </form> */
}
