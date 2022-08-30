import { NextComponentType } from "next";
import { AiOutlineBars } from "react-icons/ai";
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
  const scrollTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <nav
      className={
        (scroll ? "backdrop-blur-xl " : "") +
        (navbar ? "h-80" : "h-20") +
        " lg:h-20 sticky top-0 z-50 flex flex-col lg:flex-row w-full transition-all"
      }
    >
      <NavItem
        className="font-[blast] mr-auto mt-1 flex flex-row px-6 lg:px-14 cursor-pointer h-fit text-[3rem] w-full lg:w-auto justify-between"
        noUnderline
        onClick={scrollTop}
      >
        <span>Anupama D.</span>
        <AiOutlineBars className="w-12 my-auto lg:hidden" onClick={popUpNav} />
      </NavItem>
      <NavItem content="About Me" navID="about" nav={navbar} />
      <NavItem content="My Work" navID="work" nav={navbar} />
      {/* <NavItem content="Contact Me" navID="contact" nav={navbar} /> */}
    </nav>
  );
};

export default NavBar;
