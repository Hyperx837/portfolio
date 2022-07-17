import { NextComponentType } from "next";
import NavItem from "./NavItem";

import { useEffect, useState } from "react";

const NavBar: NextComponentType = () => {
  const [scroll, setScroll] = useState(false);
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1);
    });
  }, []);

  const popUpNav = () => {
    setNavbar(!navbar);
  };

  return (
    <nav
      className={
        (scroll ? "bg-[#e1dcd8] " : "") +
        (navbar ? "h-80" : "h-30 ") +
        " sticky top-0 z-50 flex flex-col lg:flex-row transition-[height] lg:h-30"
      }
    >
      <NavItem
        navID="#top"
        className="font-[blast] lg:block px-6 lg:px-14 py-6 cursor-pointer  text-center h-full whitespace-nowrap text-[3rem] mr-auto"
        content="Anupama D."
      />
      <NavItem content="About Me" nav={navbar} />
      <NavItem content="My Work" nav={navbar} />
      <NavItem content="Contact Me" nav={navbar} />
    </nav>
  );
};

export default NavBar;
