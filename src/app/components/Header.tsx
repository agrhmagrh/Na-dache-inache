import Logo from "./header/Logo";
import Menu from "./header/Menu";
import Contact from "./header/Contact";

export default function Header() {
  return (
      <header className="header bg-white grid grid-cols-12 items-center relative max-w-screen-2xl m-auto" >
        <Logo></Logo>
        <Menu></Menu>
        <Contact></Contact>
      </header>
  );
}
