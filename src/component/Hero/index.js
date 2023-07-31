"use client";
import React from "react";
import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";
import { motion } from "framer-motion";

const Hero = () => {
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
    <>
      <motion.div
        className="hero"
        initial="hidden"
        whileInView="visible"
        variants={Animation}
        transition={{
          staggerChildren: 0.3,
          duration: 0.5,
          ease: "easeInOut",
        }}
        viewport={{
          once: true,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-left-text">
                <HeroLeft />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-right">
                <HeroRight />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
