"use client";
import Menudata from "@/data/Menudata/Menudata";
import Logo from "@/svg/Logo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Sidebar from "./Sidebar";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});

const Menubar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar
        expand="lg"
        className={
          showNavbar
            ? "navbar stickynav d-none d-lg-block"
            : "navbar d-none d-lg-block"
        }
      >
        <Container>
          <Link href="#">
            <Logo />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {Menudata?.map((menu, i) => (
                <Link
                  className={DmSans.className + " " + "mx-3"}
                  href={menu.url}
                  key={i}
                >
                  {menu.title}
                </Link>
              ))}
            </Nav>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className={DmSans.className}
            >
              contact now
            </motion.button>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
      <div className="mobile-menu d-lg-none py-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <Logo />
            </div>
            <div className="mobile-bars" onClick={() => setShowSidebar(true)}>
              <HiBars3BottomLeft size={35} />
            </div>
          </div>
        </div>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
    </>
  );
};

export default Menubar;
