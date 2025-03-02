import React from "react";

import { contactDetails } from "@/lib/constants/contact";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <div className="mt-[1.5em] flex justify-between sm:mt-[4em]">
      {contactDetails.map(({ Icon, type, href, info }) => (
        <div
          key={type}
          className="flex flex-col items-center gap-[0.7em] xl:flex-row"
        >
          <Icon className="text-[1.3em] sm:text-[1.9em]" />
          <div className="flex flex-col items-center gap-[0.3em] xl:items-start">
            <p className="font-semibold">{type}</p>
            <Link href={href} className="text-primary">
              {info}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
