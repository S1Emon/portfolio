"use client";
import React from "react";
import { DM_Sans } from "next/font/google";
import Slider from "react-slick";
import NextArrow from "./NextArrow";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-heading text-center">
          <h4 className={DmSans.className}>Latest Blog</h4>
          <p className={DmSans.className}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised.
          </p>
        </div>
        <div className="blog-slider">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blog;
