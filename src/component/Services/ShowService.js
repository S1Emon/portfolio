"use client";
import React from "react";
import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "700",
});

const ShowService = ({ title, para, btn }) => {
  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="show-service"
    >
      <h4 className={DmSans.className}>{title}</h4>
      <p className={DmSans.className}>{para}</p>
      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
        }}
        className={OpenSans.className}
      >
        {btn}
      </motion.button>
    </motion.div>
  );
};

export default ShowService;
