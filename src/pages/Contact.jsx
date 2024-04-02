import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_6u2wdss", "template_g09z40n", form.current, {
        publicKey: "1lGF_5_ROxORUDMsR",
      })
      .then(
        (result) => {
          console.log("Email successfully sent", result.text);
        },
        (error) => {
          console.log("Email sending failed", error.text);
        }
      );
    form.current.reset();
    // used while using userref along with form submission
  };

  return (
    <form
      className="bg-[#aebfcd] w-full h-custom "
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="md:w-[1000px] max-w-[300px] h-full mx-auto flex flex-col items-center justify-center gap-2 bg-emerald-600 text-[#ffffff] text-[22px]  ">
        <div>
          <label className="mb-2 block text-center md:text-3xl">Name</label>
          <input
            className="w-[250px] md:w-[700px] outline-none text-black"
            required
            type="text"
            name="user_name"
          />
        </div>
        <div>
          <label className="mb-2 block  text-center md:text-3xl">Email</label>
          <input
            className="w-[250px] md:w-[700px] outline-none  text-black"
            required
            type="email"
            name="user_email"
          />
        </div>
        <div>
          <label className="mb-2 block  text-center md:text-3xl">Message</label>
          <textarea
            className="md:w-[700px] w-[250px] outline-none text-black"
            rows={5}
            required
            name="message"
          />
        </div>

        <div>
          <button
            className=" mt-4 md:px-12 md:py-3  px-8 py-2 border-2 bg-[salmon] hover:bg-pink-700 hover:text-slate-100 text-slate-900"
            type="submit"
            value="Send"
          >
            send
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
