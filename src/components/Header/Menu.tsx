import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { setIsLoading } from "../../reducers/projectSlice";
import {
  motion,
  stagger,
  useAnimation,
  useAnimate,
  AnimatePresence,
  AnimationDefinition,
} from "framer-motion";
import menu_pole from "../../images/menu_pole.png";
import menu_plate from "../../images/menu_plate.png";

type MenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleMenuCapDisplay: (def: AnimationDefinition) => void;
};

const menuDirectionVariants = {
  close: {
    y: "0%",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    y: "90%",
    transition: {
      type: "spring",

      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const menuOptionsVariants = {
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

const Menu = (props: MenuProps) => {
  const isLoading = useAppSelector((state) => state.project.isLoading);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [menuOptionAnimRef, animateMenuOptionAnimRef] = useAnimate();
  const pages = ["contact", "projects", "about", "home"];

  useEffect(() => {
    const closeMenu = () => {};
    setTimeout(() => {}, 3000);
  }, []);

  const AnimateMenuOptions = (page: String) => {
    if (location.pathname === "/" + page) {
      animateMenuOptionAnimRef(
        menuOptionAnimRef.current,
        {
          textShadow: `${
            location.pathname === "/" + page
              ? ["0 0 10px #000000"]
              : [
                  "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #167a00, 0 0 40px #167a00, 0 0 50px #167a00, 0 0 60px #167a00, 0 0 70px #167a00",
                  "0 0 20px #fff, 0 0 30px #fff, 0 0 40px #2eff00, 0 0 50px #2eff00, 0 0 60px #2eff00, 0 0 70px #2eff00",
                ]
          }`,
        },
        { duration: 1, repeat: Infinity, repeatType: "reverse" }
      );
    }
  };

  return (
    <motion.div
      className="absolute bottom-0 left-0 w-full drop-shadow-2xl will-change-transform pointer-events-none z-10"
      variants={menuDirectionVariants}
      initial="close"
      animate={props.isMenuOpen ? "open" : "close"}
      exit="close"
      onAnimationComplete={(anim) => {
        props.handleMenuCapDisplay(anim);
      }}
    >
      <img src={menu_pole} className="w-[6%] ml-[89.1%] drop-shadow-lg" />

      {pages.map((page, index) => {
        return (
          <div key={page} className={`absolute bottom-0 left-0 w-full h-full`}>
            <Link
              className={`${
                location.pathname === "/" + page || isLoading
                  ? "pointer-events-none"
                  : "cursor-pointer pointer-events-auto"
              }`}
              onClick={(event) => {
                props.setIsMenuOpen(false);
                dispatch(setIsLoading(true));
              }}
              to="/"
              state={{ value: page }}
            >
              <motion.div
                className="absolute w-[6%] right-[4.9%] drop-shadow-lg will-change-transform"
                style={{ bottom: `${17 * (index + .9)}%` }}
                variants={menuOptionsVariants}
              >
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[53%] ${
                    location.pathname === "/" + page || isLoading
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  <motion.p
                    // ref={menuOptionAnimRef}
                    className="text-[1vw] text-center tracking-widest"
                    animate={{
                      textShadow: `${
                        location.pathname === "/" + page || isLoading
                          ? ["0 0 0px #000000"]
                          : [
                              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #167a00, 0 0 40px #167a00, 0 0 50px #167a00, 0 0 60px #167a00, 0 0 70px #167a00",
                              "0 0 20px #fff, 0 0 30px #fff, 0 0 40px #2eff00, 0 0 50px #2eff00, 0 0 60px #2eff00, 0 0 70px #2eff00, 0 0 80px #2eff00",
                            ]
                      }`,
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  >
                    {page.toUpperCase()}
                  </motion.p>
                </div>

                <img src={menu_plate} className="w-[100%] h-full" />
              </motion.div>
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Menu;
