"use client";
import React, { useState } from "react";
import { DM_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "700",
});

const Service = () => {
  const [active, setActive] = useState(0);
  const handleClick = (i) => {
    setActive(i);
    console.log(i);
  };
  return (
    <div className="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="service-heading">
              <h4 className={DmSans.className}>
                I <span>Run</span> Agency <span>Smartly</span> With My{" "}
                <span>Team</span> Member.
              </h4>
              <p className={DmSans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which do not look.
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className={OpenSans.className}
                onClick={() => handleClick(i)}
              >
                Say Hello
              </motion.button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
