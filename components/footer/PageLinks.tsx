import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const PageLinks = () => {
  const path = usePathname();

  const getColor = (currentPath: string) => {
    const activeClasses = "text-primary border-b-primary";
    const inactiveClasses = "text-black border-b-black/30";

    if (path === currentPath) return activeClasses;
    else if (path.includes(currentPath) && currentPath !== "/")
      return activeClasses;
    else return inactiveClasses;
  };

  return (
    <div>
      <h5 className="text-[16px] font-semibold sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[21px]">
        Pages:
      </h5>
      <ul className="mt-[0.7em] flex flex-col gap-[0.8em]">
        <li>
          <Link href="/" className={`${getColor("/")} hover:text-primary`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className={`${getColor("/about")} hover:text-primary`}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/" className={`${getColor("/blog")} hover:text-primary`}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`${getColor("/downloads")} hover:text-primary`}
          >
            Downloads
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`${getColor("/contact")} hover:text-primary`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PageLinks;
