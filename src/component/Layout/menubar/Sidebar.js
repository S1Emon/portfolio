import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Menudata from "@/data/Menudata/Menudata";
import { DM_Sans } from "next/font/google";
import { useRef } from "react";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowSidebar(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <motion.div
        animate={{
          right: showSidebar ? 0 : "-100%",
          //  left: showSidebar ? "calc(100vw - 350px)":"100%",
          transition: {
            duration: 0.5,
          },
        }}
        className="side-bar"
        ref={menuRef}
      >
        <div className="cross" onClick={() => setShowSidebar(false)}>
          <RxCross2 size={35} />
        </div>
        <ul>
          {Menudata?.map((menu, i) => (
            <li key={i}>
              <Link className={DmSans.className + " " + "mx-3"} href={menu.url}>
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
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
      </motion.div>
    </>
  );
};

export default Sidebar;
