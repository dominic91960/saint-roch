import React from "react";
import Link from "next/link";

const CorporateLinks = () => {
  return (
    <div>
      <h5 className="text-[16px] font-semibold sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[21px]">
        Corporate:
      </h5>
      <ul className="mt-[0.7em] flex flex-col gap-[0.8em]">
        <li>
          <Link href="/" className="hover:text-primary">
            Sustainability
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-primary">
            Innovation
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-primary">
            Warranty Information
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-primary">
            Production Plants
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-primary">
            Quality and Compliance
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CorporateLinks;
