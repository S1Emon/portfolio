import AboutData from "@/data/AboutData/AboutExpData";
import React, { useState } from "react";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import ShowData from "./ShowData";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const AboutBottom = () => {
  const [active, setActive] = useState(0);
  const [activeBox, setActiveBox] = useState();

  const handleActive = (i) => {
    setActive(i);
    setActiveBox(i);
  };
  return (
    <div className="about-item">
      <div className="row">
        <div className="col-lg-6">
          <div className="row row-gap-4">
            {AboutData.map((item, i) => (
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className="col-lg-6"
                key={i}
                onClick={() => handleActive(i)}
              >
                <div
                  className={activeBox == i ? "active-about-box" : "about-box"}
                >
                  <h4 className={DmSans.className}>{item.heading}</h4>
                  <p className={DmSans.className}>{item.paragraph}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="col-lg-5 ms-auto">
          {/* {active === 0 ? (
            <div className="right-inner-about">
              <h4 className={DmSans.className}>
                Get So Many Awards In 5 years
              </h4>
              <p className={DmSans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority.
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
              >
                Visit Now
              </motion.button>
            </div>
          ) : (
            "nai"
          )} */}
          <div className="right-inner-about">
            {active === 0 && (
              <ShowData
                title="Get So Many Awards In 2 years"
                para="There are many variations of passages of Lorem Ipsum available,
                but the majority."
                btn="Visit Now"
              />
            )}
            {active === 1 && (
              <ShowData
                title="Get So Many Awards In 5 years"
                para="There are many variations of passages of Lorem Ipsum available,
                but the majority."
                btn="Visit Now"
              />
            )}
            {active === 2 && (
              <ShowData
                title="Get So Many Awards In 1 years"
                para="There are many variations of passages of Lorem Ipsum available,
                but the majority."
                btn="Visit Now"
              />
            )}
            {active === 3 && (
              <ShowData
                title="Get So Many Awards In 3 years"
                para="There are many variations of passages of Lorem Ipsum available,
                but the majority."
                btn="Visit Now"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBottom;
