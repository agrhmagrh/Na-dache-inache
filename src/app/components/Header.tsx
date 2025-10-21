"use client";
import Logo from "./header/Logo";
import Menu from "./header/Menu";
import Contact from "./header/Contact";
import { useEffect, useState, useCallback, useMemo } from "react";
import { TypeDesktopProps, TypeMobileProps } from "@/types";

export default function Header({ isMain }: TypeDesktopProps | TypeMobileProps) {
  const [isShowMobileMenu, setShowMobileMenu] = useState(true);

  const handleResize = useCallback(() => {
    const { offsetWidth } = document.body;
    setShowMobileMenu(offsetWidth <= 1200);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const HeaderComponent = useMemo(
    () =>
      isShowMobileMenu ? (
        <MobileHeader type="mobile" />
      ) : (
        <DesktopHeader type="desktop" />
      ),
    [isShowMobileMenu]
  );

  return HeaderComponent;
}

function DesktopHeader({ type }: TypeDesktopProps) {
  return (
    <header className="header bg-white grid grid-cols-12 items-center max-w-screen-2xl m-auto top-0 z-20">
      <Logo />
      <Menu type={type}></Menu>
      <Contact type={type}></Contact>
    </header>
  );
}
function MobileHeader({ type }: TypeMobileProps) {
  return (
    <header className="header bg-white grid grid-cols-8 items-center w-full m-auto sticky top-0 z-20">
      <Menu type={type}></Menu>
      <Logo></Logo>
      <Contact type={type}></Contact>
    </header>
  );
}
