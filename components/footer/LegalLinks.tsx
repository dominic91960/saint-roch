import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

const LegalLinks = () => {
  const path = usePathname();

  const getColor = (currentPath: string) => {
    const activeClasses = "text-primary";
    const inactiveClasses = "text-black hover:text-primary";

    if (path === currentPath) return activeClasses;
    else if (path.includes(currentPath) && currentPath !== "/")
      return activeClasses;
    else return inactiveClasses;
  };

  return (
    <div>
      <h5 className="text-[16px] font-semibold sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[21px]">
        Legal Area:
      </h5>
      <ul className="mt-[0.7em] flex flex-col gap-[0.8em]">
        <li>
          <Link href="/privacy-policy" className={getColor("/privacy-policy")}>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href="/general-conditions-of-sale"
            className={getColor("/general-conditions-of-sale")}
          >
            General conditions of sale
          </Link>
        </li>
        <li>
          <Link
            href="/terms-and-conditions"
            className={getColor("/terms-and-conditions")}
          >
            Terms and conditions
          </Link>
        </li>
        <li>
          <Link
            href="/website-cookies"
            className={getColor("/website-cookies")}
          >
            Website cookies
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LegalLinks;
