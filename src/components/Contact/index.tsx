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
  const form = React.useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        "WiUmD3gJ4iafdCR1R"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export { ContactLeft, ContactRight };
