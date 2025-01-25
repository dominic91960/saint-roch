import React from "react";

import { IoCall } from "react-icons/io5";

const ContactButton = () => {
  return (
    <button className="fixed bottom-[5%] right-0 z-40 inline-flex translate-x-[1em] items-center justify-center gap-[0.5em] rounded-s-full bg-white p-[0.3em] pe-[2.2em] font-semibold shadow-md transition-transform ease-in hover:translate-x-0">
      <span className="rounded-full bg-primary p-[0.5em] text-white">
        <IoCall />
      </span>
      Contact Us
    </button>
  );
};

export default ContactButton;
