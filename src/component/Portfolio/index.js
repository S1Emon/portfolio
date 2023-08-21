"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import portfolioHero from "../../images/porfolio-hero.png";
import { DM_Sans, Grechen_Fuemen, Open_Sans } from "next/font/google";
import PortfolioData from "@/data/PortfolioData/PortfolioData";
import { AiOutlineCheck } from "react-icons/ai";
import { motion } from "framer-motion";
import StatisticsData from "@/data/PortfolioData/StatisticsData";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const GrechenFuemen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: ["400"],
});

const Portfolio = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="portfolio-left">
                <div className="portfolio-image">
                  <Image src={portfolioHero} alt="Portfolio Hero" />
                </div>
                <div className="experience">
                  <div className="experience-text">
                    <h4 className={DmSans.className}>5+</h4>
                    <h5 className={DmSans.className}>Years</h5>
                    <p className={DmSans.className}>Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portfolio-right">
                <div className="portfolio-content">
                  <h3 className={DmSans.className}>
                    We <span>Run</span> Agency <span>Smartly</span> With Our{" "}
                    <span>Team</span> Member.
                  </h3>
                  <p className={DmSans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look.
                  </p>
                  <ul>
                    {PortfolioData.map((item, i) => (
                      <li key={i}>
                        {" "}
                        <AiOutlineCheck /> <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
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
                    Explore More
                  </motion.button>
                </div>
                <div className="portfolio-statistics">
                  <div className="statistics">
                    {StatisticsData.map((item, i) => (
                      <div className="statistics-box" key={i}>
                        <h4 className={GrechenFuemen.className}>
                          <CountUp
                            start={0}
                            end={item.number}
                            duration={2}
                            delay={0}
                            scrollSpyOnce={true}
                          />
                          +
                        </h4>
                        <p className={DmSans.className}>{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
