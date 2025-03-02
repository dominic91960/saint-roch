import React from "react";
import Image from "next/image";
import Link from "next/link";

import { LuMapPinned } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { otherLocations } from "@/lib/constants/contact";

import locationIcon from "@/assets/images/contact/location-icon.png";

const OtherLocations = () => {
  return (
    <div className="grid gap-[2em] text-[14px] sm:grid-cols-2 sm:gap-x-0 lg:grid-cols-3 xl:flex xl:justify-between">
      {otherLocations.map(
        ({ country, name, address, tel, whatsapp, email }, i) => {
          const lastItem = i + 1 === otherLocations.length;
          const evenItem = i % 2 === 0;
          const secondItem = i === 1;
          const thirdItem = i === 2;

          return (
            <React.Fragment key={address}>
              <div
                className={`flex ${!lastItem ? "border-b border-b-black sm:border-b-0" : ""} ${
                  evenItem
                    ? "sm:border-r sm:border-r-black"
                    : "sm:justify-end lg:justify-start"
                } ${secondItem ? "lg:justify-center lg:border-r lg:border-r-black" : ""} ${thirdItem ? "lg:justify-end lg:border-r-0" : ""} xl:border-r-0`}
              >
                <article>
                  <Image
                    src={locationIcon}
                    alt="location"
                    className="size-[51px]"
                  />
                  <h4 className="mt-[0.5em] text-[20px] font-black">
                    {country}
                  </h4>
                  <p className="mb-[0.3em] text-[20px] font-semibold">{name}</p>
                  <hr className="w-[27ch] border-t-black" />

                  <div className="mb-[1em] mt-[2em] flex items-start gap-[0.5em] whitespace-pre-line font-semibold">
                    <LuMapPinned className="shrink-0 text-[1.4em]" />
                    <Link
                      href="https://www.google.com/maps"
                      target="_blank"
                      className="hover:text-primary"
                    >
                      {address}
                    </Link>
                  </div>

                  <div className="mb-[1em] flex items-start gap-[0.5em] font-semibold">
                    <IoCallOutline className="shrink-0 text-[1.4em]" />
                    <div className="flex flex-col gap-[0.5em]">
                      {tel.map((tel) => (
                        <Link
                          key={tel}
                          href={`tel:${tel}`}
                          className="hover:text-primary"
                        >
                          {tel}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mb-[1em] flex items-start gap-[0.5em] font-semibold">
                    <FaWhatsapp className="shrink-0 text-[1.4em]" />
                    <p>{whatsapp}</p>
                  </div>

                  <div className="mb-[1em] flex items-start gap-[0.5em] font-semibold">
                    <MdOutlineEmail className="shrink-0 text-[1.4em]" />
                    <Link
                      href={`mailto:${email}`}
                      className="hover:text-primary"
                    >
                      {email}
                    </Link>
                  </div>
                </article>
              </div>
              {!lastItem && (
                <div className="hidden h-[20em] w-px bg-black xl:block"></div>
              )}
            </React.Fragment>
          );
        },
      )}
    </div>
  );
};

export default OtherLocations;
