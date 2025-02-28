import React from "react";
import Link from "next/link";

import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="col-span-full mx-auto mt-[0.4em] w-fit text-center">
      <h6 className="text-[1.1em] font-semibold">Follow Us</h6>
      <ul className="mt-[0.8em] flex gap-[0.8em] text-[1.5em]">
        <li>
          <Link href="/" className="hover:text-primary">
            <IoLogoYoutube />
          </Link>
        </li>

        <li>
          <Link href="/" className="hover:text-primary">
            <FaFacebook />
          </Link>
        </li>

        <li>
          <Link href="/" className="hover:text-primary">
            <FaXTwitter />
          </Link>
        </li>

        <li>
          <Link href="/" className="hover:text-primary">
            <FaInstagram />
          </Link>
        </li>

        <li>
          <Link href="/" className="hover:text-primary">
            <FaLinkedin />
          </Link>
        </li>

        <li>
          <Link href="/" className="hover:text-primary">
            <FaGoogle />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
