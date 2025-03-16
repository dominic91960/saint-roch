"use client";

import React from "react";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Toast: React.FC<{ type: "SUCCESS" | "ERROR"; message: string }> = ({
  type,
  message,
}) => {
  const Icon = type === "SUCCESS" ? FaCheck : IoClose;

  return (
    <motion.aside
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="fixed bottom-[20px] left-[20px] mx-auto flex w-fit items-center justify-center gap-x-2 rounded-md bg-white px-10 py-4 font-medium text-black shadow-[-2px_2px_5px_rgba(0,0,0,0.3)]"
    >
      <div
        className={`p-[0.4em] ${type === "SUCCESS" ? "bg-emerald-500" : "bg-primary"} rounded-full text-white`}
      >
        <Icon />
      </div>
      <p>{message}</p>
    </motion.aside>
  );
};

export default Toast;
