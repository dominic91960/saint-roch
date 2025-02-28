import React from "react";
import Link from "next/link";

const ProductLinks = () => {
  return (
    <div>
      <h5 className="text-[16px] font-semibold sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[21px]">
        Saint Roch Products:
      </h5>
      <ul className="mt-[0.7em] flex flex-col gap-[0.8em]">
        <li>
          <Link href="/" className="hover:text-primary">
            Boilers
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-primary">
            Burners
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-primary">
            Hot water tanks
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-primary">
            Heat pumps
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductLinks;
