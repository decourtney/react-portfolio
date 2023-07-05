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
    <div className="flex w-full ml-[4%] justify-center items-center bg-green-400">
      <form
        className="flex-col w-[60%] max-h-[60%] p-[1%] space-y-5 bg-pink-300"
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
        <div className="h-full">
          <textarea
            name="message"
            className="w-full min-h-[100%] resize-none"
            placeholder="Message"
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
          {/* <input type="submit" value="Send" /> */}
        </button>
      </form>
    </div>
  );
};

export { ContactLeft, ContactRight };
