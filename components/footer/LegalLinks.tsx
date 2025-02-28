import React from "react";
import Link from "next/link";

const LegalLinks = () => {
  return (
    <div>
      <h5 className="text-[16px] font-semibold sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[21px]">
        Legal Area:
      </h5>
      <ul className="mt-[0.7em] flex flex-col gap-[0.8em]">
        <li>
          <Link href="/" className="hover:text-primary">
            Privacy
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-primary">
            General conditions of sale
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-primary">
            Terms and conditions
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-primary">
            Website cookies
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LegalLinks;
