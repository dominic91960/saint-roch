"use client";

import React, { useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { IoCall } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const ContactButton = () => {
  const [contactInfoVisible, setContactInfoVisible] = useState(false);
  const toggleVisibility = () => setContactInfoVisible((prev) => !prev);

  return (
    <>
      <div
        className={`fixed bottom-[5%] right-0 z-40 flex flex-col gap-[1em] font-semibold ${contactInfoVisible ? "rounded-s-md bg-white p-[1em] shadow-[-2px_2px_5px_rgba(0,0,0,0.3)]" : "rounded-s-full"}`}
      >
        <button
          className={`flex items-center gap-[0.5em] font-semibold ${contactInfoVisible ? "bg-transparent p-0 shadow-none" : "rounded-s-full bg-white p-[0.3em] pe-[2.2em] shadow-[-2px_2px_5px_rgba(0,0,0,0.3)]"} group`}
          onClick={toggleVisibility}
        >
          <span className="rounded-full bg-primary p-[0.5em] text-white transition-all ease-in group-hover:scale-110 group-hover:bg-transparent group-hover:text-primary">
            {!contactInfoVisible ? <IoCall /> : <IoClose />}
          </span>
          Contact Us
        </button>

        {contactInfoVisible && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-[0.5em] ps-[0.3em]"
          >
            <Link href="tel:+390454450067" className="hover:text-primary">
              <div className="flex items-center gap-[0.3em]">
                <FaPhoneSquareAlt className="text-[1.5em]" />
                <p>+39 045 445 0067</p>
              </div>
            </Link>
            <Link href="tel:+390454450067" className="hover:text-primary">
              <div className="flex items-center gap-[0.3em]">
                <FaPhoneSquareAlt className="text-[1.5em]" />
                <p>+39 045 445 0067</p>
              </div>
            </Link>
            <Link
              href="https://wa.me/+390454450067"
              target="_blank"
              className="hover:text-primary"
            >
              <div className="flex items-center gap-[0.3em]">
                <FaWhatsappSquare className="text-[1.5em] text-green-500" />
                <p>+39 045 445 0067</p>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ContactButton;
