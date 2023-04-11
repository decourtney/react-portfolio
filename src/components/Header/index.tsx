import React, { useState } from "react";
import { Link } from "react-router-dom";

type HeaderProps = {
  onLinkClicked: (link: string) => void;
};

const Header = ({ onLinkClicked }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseOver = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleMenuClick = (link: string) => {
  //   onLinkClicked(link);
  // };

  console.log("Header is rendered")

  return (
    <header>
      <nav className="flex justify-between w-full py-5 px-10 bg-slate-400">
        <div className="flex justify-start">
          <h1>DC</h1>
        </div>
        <div
          className="relative flex bg-emerald-500"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          <span className="material-symbols-outlined cursor-pointer">MENU</span>
          {isMenuOpen && (
            <div className="absolute top-full right-0 bg-gray-200 p-2 z-10 shadow-md">
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link to="/" onClick={() => onLinkClicked("home")}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/work" onClick={() => onLinkClicked("projects")}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => onLinkClicked("about")}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => onLinkClicked("contact")}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
