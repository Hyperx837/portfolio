interface Props {
  className?: string;
  content?: string;
  navID?: string;
  nav?: boolean;
}

const NavItem = ({ className, content, navID, nav }: Props) => (
  <a
    href={content ? `#${content.toLowerCase()}` : navID}
    className={
      className ||
      (nav ? "block" : "hidden") +
        " lg:block px-6 lg:px-14 py-6 cursor-pointer  text-center   h-30 my-auto whitespace-nowrap font-[Poppins] text-lg leading-10"
    }
  >
    <span className="text-white transition hover:underline ">{content}</span>
  </a>
);

export default NavItem;
