import React from "react";
import { DM_Sans } from "next/font/google";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

const Achievement = () => {
  return (
    <div className="achievement-content">
      <h4>Get So Many Awards In 5 years</h4>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority.
      </p>
      <button className={DmSans.className}>Visit Now</button>
    </div>
  );
};

export default Achievement;
