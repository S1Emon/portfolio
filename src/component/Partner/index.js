import PartnerData from "@/data/PartnerData/PartnerData";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Partner = () => {
  return (
    <>
      <div className="partner">
        <div className="container">
          <div className="partner-heading text-center">
            <h4 className={DmSans.className}>Reputed Partners</h4>
          </div>
          <div className="row partner-content-box">
            {PartnerData.map((item, i) => (
              <div className="col-lg-3" key={i}>
                <div className="partner-content">
                  <Image src={item.img} height={65} width={65} alt="Icon" />
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
