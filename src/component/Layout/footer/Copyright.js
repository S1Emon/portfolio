import BottomFooter from "@/data/FooterData/CopyrightData";
import Link from "next/link";
import React from "react";
import { Open_Sans } from "next/font/google";

const OpenSans = Open_Sans({
  subsets: ["latin"],
});

const Copyright = () => {
  return (
    <div className="copyright-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="copyright_Lists">
              <ul className="d-flex justify-content-center gap-4">
                {BottomFooter.map((data, i) => (
                  <li key={i}>
                    <Link href={data.url} className={OpenSans.className}>
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
