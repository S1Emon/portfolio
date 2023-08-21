"use client";
import React, { useState } from "react";
import { DM_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { motion } from "framer-motion";
import ServiceProvideData from "@/data/ServiceData/ServiceProvideData";
import Image from "next/image";
import ShowService from "./ShowService";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "700",
});

const Service = () => {
  const [active, setActive] = useState(null);
  const [activeBox, setActiveBox] = useState();
  const handleActive = (i) => {
    setActive(i);
    setActiveBox(i);
  };
  return (
    <div className="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="service-heading">
              {active === null && (
                <ShowService
                  title="I Run Company Smartly With My Team Member."
                  btn="Say Hello"
                  para=" There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which do not look."
                />
              )}
              {active === 0 && (
                <ShowService
                  title="I Run Agency Smartly With My Team Member."
                  btn="Say Hello"
                  para=" There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which do not look."
                />
              )}
              {active === 1 && (
                <ShowService
                  title="I Run Business Smartly With My  Team 
        Member."
                  btn="Say Hello"
                  para=" There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which do not look."
                />
              )}
              {active === 2 && (
                <ShowService
                  title="I Run Agency Smartly With My Team 
        Member."
                  btn="Say Hello"
                  para=" There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which do not look."
                />
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-right">
              {ServiceProvideData.map((item, i) => (
                <div
                  className={
                    activeBox === i ? "active-service-box" : "service-box"
                  }
                  key={i}
                  onClick={() => handleActive(i)}
                >
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="service-icon">{item.iconURL}</div>
                    </div>
                    <div className="col-lg-10">
                      <div className="service-content">
                        <h4 className={DmSans.className}>{item.title}</h4>
                        <p className={DmSans.className}>{item.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
