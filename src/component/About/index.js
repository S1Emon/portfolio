"use client";
import React from "react";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import AboutBottom from "./AboutBottom";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const About = () => {
  const Animation = {
    hidden: {
      y: -15,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={Animation}
      transition={{
        staggerChildren: 0.6,
        duration: 0.9,
        ease: "easeInOut",
      }}
      viewport={{
        once: true,
      }}
      className="about"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-heading">
              <h2 className={DmSans.className}>
                Failure is The Power that Gives <span>Success</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <p className={DmSans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised.
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className={DmSans.className}
              >
                Download Now
              </motion.button>
            </div>
          </div>
        </div>
        <AboutBottom />
      </div>
    </motion.div>
  );
};

export default About;
