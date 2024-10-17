import React from "react";
import { TbMail } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl" data-aos="zoom-in-up">Get In touch</h2>
          <p className="text-gray-600 text-[18px] pt-2" data-aos="zoom-in-up">
            Curious About My Work? Reach out!
          </p>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <TbMail size={30} />{" "}
            <a href="mailto:waniaakram777@gmail.com">waniaakram777@gmail.com</a>
          </div>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <BsTelephone size={30} /> 03322200290
          </div>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <FaLinkedin size={30} />
            <a
              href="https://www.linkedin.com/in/wania-akram-87945a2b6"
              target="_blank"
            >
              www.LinkedIn.com
            </a>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-purple-400"
              id="name"
            />
          </div>

          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-purple-400"
              id="email"
            />
          </div>

          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="msg">Message:</label>
            <textarea
              className="bg-transparent border border-purple-400"
              id="msg"
              rows={8}
            />
          </div>
          <button className="bg-purple-400 p-2 px-6" data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
