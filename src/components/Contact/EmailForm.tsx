import React, { useEffect, useState, useRef, ChangeEventHandler } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { setMarqueeMsg } from "../../reducers/projectSlice";
import TextareaAutosize from "react-textarea-autosize";

const TerminalEmailForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const dispatch = useAppDispatch();
  const [submitBtnAnim, animate] = useAnimate();
  const form = useRef<any>();

  useEffect(() => {
    const formValuesArray = Object.values(formValues);

    setIsButtonDisabled(!formValuesArray.every((value) => value !== ""));
  }, [formValues]);

  useEffect(() => {
    if (!isButtonDisabled)
      animate(
        submitBtnAnim.current,
        { x: ["50%", "5%"], opacity: [0, 100] },
        { duration: 0.3 }
      );
  }, [isButtonDisabled]);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "WiUmD3gJ4iafdCR1R"
      )
      .then(
        (result) => {
          dispatch(setMarqueeMsg("Thank You!"));
          e.target.reset();
          // console.log(result.status, result.text);
        },
        (error) => {
          dispatch(setMarqueeMsg("Something Went Wrong!"));
          // console.log(error.status, error.text);
        }
      );
  };

  return (
    <div className="flex w-full h-full justify-center items-center py-[5%] px-[5%]">
      <form
        ref={form}
        className="w-full h-full font-vt323 text-[2vw] text-green-400 leading-snug space-y-2"
        onSubmit={sendEmail}
      >
        <motion.div ref={submitBtnAnim}>
          <button
            type="submit"
            className={`text-green-400 text-green-glow ${
              isButtonDisabled ? "invisible" : "visible"
            }`}
            disabled={isButtonDisabled}
          >
            SEND
          </button>
        </motion.div>

        <div>
          <input
            id="user_name"
            type="text"
            name="user_name"
            className="w-full bg-inherit outline-none placeholder-green-400 text-green-glow indent-[1%]"
            title="Name"
            placeholder="<Name>"
            onChange={(e) => {
              setFormValues({
                ...formValues,
                user_name: e.target.value.trim(),
              });
            }}
            required
          />
        </div>

        <div>
          <input
            id="user_email"
            type="email"
            name="user_email"
            className="w-full bg-inherit outline-none placeholder-green-400 text-green-glow indent-[1%]"
            title="Email"
            placeholder="<Email>"
            onChange={(e) => {
              setFormValues({
                ...formValues,
                user_email: e.target.value.trim(),
              });
            }}
            required
          />
        </div>

        <div>
          <TextareaAutosize
            maxRows={5}
            id="user_message"
            name="user_message"
            className="w-full bg-inherit resize-none outline-none placeholder-green-400 text-green-glow indent-[1%] scrollbar-hide overflow-hidden"
            title="Message"
            placeholder="<Message>"
            onChange={(e) => {
              setFormValues({
                ...formValues,
                user_message: e.target.value.trim(),
              });
            }}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default TerminalEmailForm;
