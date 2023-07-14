import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TerminalEmailForm = () => {
  return (
    <form className="w-full h-full">
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
    </form>
  );
};

export default TerminalEmailForm;
