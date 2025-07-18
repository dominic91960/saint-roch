import React from "react";
import Link from "next/link";

const BoilerLinks = () => {
  return (
    <div className="lg:flex lg:flex-col">
      <h5 className="text-[16px] font-semibold sm:text-[17px] md:text-[18px] lg:shrink-0 lg:text-[19px] xl:text-[20px] 2xl:text-[21px]">
        Saint Roch Boilers:
      </h5>
      <ul className="mt-[0.7em] flex flex-col gap-[0.8em] lg:grow lg:justify-between">
        {/* Residential boilers */}
        <li>
          <h6 className="text-[1.1em] font-medium">Residential Boilers</h6>
          <ol className="mt-[0.8em] flex list-inside list-decimal flex-col gap-[0.8em]">
            <li>
              <Link href="/combi" className="hover:text-primary">
                Combi
              </Link>
            </li>
            <li>
              <Link href="/ultra" className="hover:text-primary">
                Ultra
              </Link>
            </li>
          </ol>
        </li>

        {/* Commercial boilers */}
        <li>
          <h6 className="text-[1.1em] font-medium">Commercial Boilers</h6>
          <ol className="mt-[0.8em] flex list-inside list-decimal flex-col gap-[0.8em]">
            <li>
              <Link href="/combi" className="hover:text-primary">
                Combi
              </Link>
            </li>
            <li>
              <Link href="/ultra" className="hover:text-primary">
                Ultra
              </Link>
            </li>
          </ol>
        </li>

        {/* Industrial boilers */}
        <li>
          <h6 className="text-[1.1em] font-medium">Industrial Boilers</h6>
          <ol className="mt-[0.8em] flex list-inside list-decimal flex-col gap-[0.8em]">
            <li>
              <Link href="/optimajor" className="hover:text-primary">
                Optimajor
              </Link>
            </li>
            <li>
              <Link href="/commodore" className="hover:text-primary">
                Commodore
              </Link>
            </li>
          </ol>
        </li>
      </ul>
    </div>
  );
};

export default BoilerLinks;
