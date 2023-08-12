import React from "react";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const ShowData = ({ title, para, btn }) => {
  return (
    <motion.div
      initial={{ x: 250 }}
      animate={{ x: 0 }}
      // transition={{
      //   staggerChildren: 0.3,
      //   duration: 0.6,
      //   ease: "easeInOut",
      // }}
      className="showdata"
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
      >
        {btn}
      </motion.button>
    </motion.div>
  );
};

export default ShowData;
