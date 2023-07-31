import React from "react";
import AboutExpData from "@/data/AboutData/AboutExpData";
import { DM_Sans } from "next/font/google";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Experience = () => {
  return (
    <div className="row">
      {AboutExpData.map((data, i) => (
        <div className="col-lg-6" key={i}>
          <div className="experience-content-card">
            <h3 className={DmSans.className}>{data.title}</h3>
            <p className={DmSans.className}>{data.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
