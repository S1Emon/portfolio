"use client";
import Logo from "@/svg/Logo";
import React from "react";
import { Open_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { ResourceData, ServiceData } from "./FooterData";
import Link from "next/link";
import { BsSend } from "react-icons/bs";
import Facebook from "@/svg/Facebook";
import Instagram from "@/svg/Instagram";
import Twitter from "@/svg/Twitter";
import Pinterest from "@/svg/Pinterest";
import { motion } from "framer-motion";
import Copyright from "./Copyright";

const OpenSans = Open_Sans({
  subsets: ["latin"],
});

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-content">
                <Logo />
                <p className={OpenSans.className}>
                  There are many variations of passages of available, but the
                  majority have suffered.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-content-List">
                <h4 className={DmSans.className}>Services</h4>
                {ServiceData.map((data, i) => (
                  <Link className={DmSans.className} href={data.url} key={i}>
                    {data.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-content-List">
                <h4 className={DmSans.className}>Resources</h4>
                {ResourceData.map((data, i) => (
                  <Link className={DmSans.className} href={data.url} key={i}>
                    {data.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-content-subscribe">
                <h4 className={DmSans.className}>Newsletter</h4>
                <p className={DmSans.className}>
                  Subscribe for our upcoming latest address and resources
                </p>
                <div className="newsletter-form d-flex align-items-center justify-content-between">
                  <input
                    type="email"
                    placeholder="email"
                    className={DmSans.className}
                  />
                  <button>
                    <BsSend />
                  </button>
                </div>
                <div className="social-links d-flex align-items-center gap-4 mt-4">
                  <motion.div
                    initial={{ opacity: 1 }}
                    whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                    className="icons-shape"
                  >
                    <Facebook />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 1 }}
                    whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                    className="icons-shape"
                  >
                    <Instagram />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 1 }}
                    whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                    className="icons-shape"
                  >
                    <Twitter />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 1 }}
                    whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                    className="icons-shape"
                  >
                    <Pinterest />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
