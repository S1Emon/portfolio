"use client";
import React from "react";
import { DM_Sans } from "next/font/google";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";
import SliderData from "@/data/SliderData/SliderData";
import Image from "next/image";
import Link from "next/link";
import DateIco from "@/svg/DateIco";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function SimpleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <PreviousArrow />
    </div>
  );
}

function SimplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <NextArrow />
    </div>
  );
}

const Blog = () => {
  const Animation = {
    hidden: {
      y: 250,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SimpleNextArrow />,
    prevArrow: <SimplePrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };
  return (
    <motion.div
      className="blog"
      initial="hidden"
      whileInView="visible"
      variants={Animation}
      transition={{
        staggerChildren: 0.8,
        duration: 1,
        ease: "easeInOut",
      }}
    >
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
          <div className="row">
            <Slider {...settings}>
              {SliderData.map((item, i) => (
                <div className="col-lg-4 px-2" key={i}>
                  <div className="card-box">
                    <Image
                      src={item.img}
                      alt=""
                      height={200}
                      width={200}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <span className={DmSans.className}>
                        <DateIco />
                        {item.date}
                      </span>
                      <h4 className={DmSans.className}>{item.title}</h4>
                      <Link href="#" className={DmSans.className}>
                        {item.btn}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
