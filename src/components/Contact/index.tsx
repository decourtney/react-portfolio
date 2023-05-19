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
    <>
      <div className="flex w-full justify-center items-center bg-green-400">
        <form className="flex-col space-y-5 bg-pink-300" onSubmit={sendEmail}>
          <div>
            <input type="text" name="user_name" placeholder="Name" required />
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <textarea name="message" placeholder="Message" required />
          </div>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </>
  );
};

export { ContactLeft, ContactRight };
