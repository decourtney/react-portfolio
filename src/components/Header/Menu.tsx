import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { setIsLoading } from "../../reducers/projectSlice";
import { motion, stagger, useAnimation, useAnimate } from "framer-motion";
import menu_pole from "../../images/menu_pole.png";
import menu_plate from "../../images/menu_plate.png";

type MenuProps = {
  isMenuOpen?: boolean;
};

const direction = {
  close: {
    y: "6%",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    y: "97%",
    transition: {
      type: "spring",

      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const options = {
  close: {
    rotate: 90,
    transition: {
      type: "spring",
      duration: 0.2,
      ease: "easeOut",
    },
  },
  open: {
    rotate: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Menu = ({ isMenuOpen }: MenuProps) => {
  const isLoading = useAppSelector((state) => state.project.isLoading);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const pages = ["contact", "about", "projects", "home"];

  return (
    <motion.div
      className="absolute bottom-[35%] right-[0%] w-full z-10 pointer-events-none drop-shadow-2xl"
      key="Menu"
      variants={direction}
      initial="close"
      animate={isMenuOpen && !isLoading ? "open" : "close"}
      exit="close"
    >
      <img
        src={menu_pole}
        className="translate-x-[0%] w-[2%] ml-[89.85%] drop-shadow-lg"
      />

      {pages.map((page, index) => {
        return (
          <div key={page} className={`absolute bottom-0 left-0 w-full h-full `}>
            <Link
              className={`${
                location.pathname === "/" + page
                  ? "pointer-events-none"
                  : "cursor-pointer pointer-events-auto"
              }`}
              onClick={() => dispatch(setIsLoading(true))}
              to="/"
              state={{ value: page }}
            >
              <motion.img
                src={menu_plate}
                className={`absolute bottom-[${
                  17 * (index + 1)
                }%] right-[5.6%] w-[7%] drop-shadow-lg`}
                variants={options}
              />
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Menu;
