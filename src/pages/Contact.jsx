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
      className=" bg-[#0f1056] w-full h-screen overflow-hidden "
      ref={form}
      onSubmit={sendEmail}
    >
      <div className=" md:max-w-[1000px] max-w-[300px] h-full mx-auto flex flex-col items-center justify-center gap-2 text-[#ffffff] text-[22px]  ">
        <div>
          <label className="mb-2 block text-center md:text-3xl">Name</label>
          <input
            className="w-[250px] md:w-[700px] outline-none text-black bg-[#ccd6f6] text-center"
            required
            type="text"
            name="user_name"
            placeholder="Name"
          />
        </div>
        <div>
          <label className="mb-2 block  text-center md:text-3xl">Email</label>
          <input
            className="w-[250px] md:w-[700px] outline-none  text-black bg-[#ccd6f6] text-center"
            required
            type="email"
            name="user_email"
            placeholder="Email"
          />
        </div>
        <div>
          <label className="mb-2 block  text-center md:text-3xl">Message</label>
          <textarea
            className="md:w-[700px] w-[250px] outline-none text-black bg-[#ccd6f6]"
            rows={5}
            required
            name="message"
          />
        </div>

        <div>
          <button
            className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
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
