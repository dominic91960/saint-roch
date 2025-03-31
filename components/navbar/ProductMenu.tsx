"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

const ProductMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <motion.div
      ref={menuRef}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.6 }}
      className="absolute left-0 right-0 top-[60px] w-full overflow-hidden bg-[rgb(240,240,240)] pb-[3em] pt-[2em] shadow-[0_0_5px_rgba(0,0,0,0.6)] backdrop-blur-sm"
    >
      <div className="section-padding container mx-auto">
        <h5 className="text-[16px] font-semibold sm:text-[17px] md:text-[18px] lg:shrink-0 lg:text-[19px] xl:text-[20px] 2xl:text-[21px]">
          Saint Roch Boilers:
        </h5>
        <ul className="mt-[0.7em] flex gap-[4em]">
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
    </motion.div>
  );
};

export default ProductMenu;
