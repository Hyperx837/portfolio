import React from "react";

interface Props {
  className?: string;
  content?: string;
  nav?: boolean;
  noUnderline?: boolean;
  children?: React.ReactNode;
  navID?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavItem = ({
  className,
  content,
  children,
  navID,
  nav,
  noUnderline,
  onClick,
}: Props) => (
  <a
    href={`#${navID ? navID : ""}`}
    onClick={onClick}
    className={
      className ||
      (nav ? "block" : "hidden") +
        " lg:flex px-6 lg:px-14 py-6 cursor-pointer  justify-center  text-center   h-30 my-auto whitespace-nowrap font-[Poppins] text-lg leading-10"
    }
  >
    {children ? (
      children
    ) : (
      <span
        className={
          (noUnderline ? "" : "hover:underline") +
          " text-white transition h-1/2 self-center"
        }
      >
        {content}
      </span>
    )}
  </a>
);

export default NavItem;
