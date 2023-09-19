import { DM_Sans, Open_Sans } from "next/font/google";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Newsletter = () => {
  return (
    <>
      <div className="newsletter">
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="newsletter-heading">
                  <h4 className={DmSans.className}>
                    Subscirbe to Our Newsletter
                  </h4>
                  <p className={OpenSans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="newsletter-input">
                  <input type="text" placeholder="Email" />
                  <button>
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
