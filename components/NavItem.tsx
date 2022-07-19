interface Props {
  className?: string;
  content?: string;
  navID?: string;
  nav?: boolean;
  noUnderline?: boolean;
}

const NavItem = ({ className, content, navID, nav, noUnderline }: Props) => (
  <a
    href={content ? `#${content.toLowerCase()}` : navID}
    className={
      className ||
      (nav ? "block" : "hidden") +
        " lg:flex px-6 lg:px-14 py-6 cursor-pointer  justify-center  text-center   h-30 my-auto whitespace-nowrap font-[Poppins] text-lg leading-10"
    }
  >
    <span
      className={
        (noUnderline ? "" : "hover:underline") +
        " text-white transition h-1/2 self-center"
      }
    >
      {content}
    </span>
  </a>
);

export default NavItem;
