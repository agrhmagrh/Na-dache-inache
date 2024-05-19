"use client"
import Logo from "./header/Logo";
import Menu from "./header/Menu";
import Contact from "./header/Contact"
import { useEffect, useState } from "react";
import { TypeDesktopProps, TypeMobileProps } from "@/types";

export default function Header({isMain}: TypeDesktopProps | TypeMobileProps) {
  const [isShowMobileMenu, setShowMobileMenu] = useState(true)
  useEffect(()=> {
    const {offsetWidth} = document.body
    if(offsetWidth > 1200) {
      setShowMobileMenu(false)

    } else {
      setShowMobileMenu(true)
    }
  }, [])


  return isShowMobileMenu ? <MobileHeader type={"mobile"}/> : <DesktopHeader isMain={isMain} type={"desktop"}/>
}

function DesktopHeader({type, isMain}: TypeDesktopProps) {
  return <header className="header bg-white grid grid-cols-12 items-center max-w-screen-2xl m-auto top-0 z-20" >
  <Logo ></Logo>
  <Menu type={type}></Menu>
  <Contact type={type} isMain={isMain}></Contact>
</header>
}
function MobileHeader({type}: TypeMobileProps) {
  return  <header className="header bg-white grid grid-cols-8 items-center w-full m-auto sticky top-0 z-20">
  <Menu type={type}></Menu>
  <Logo ></Logo>
  <Contact type={type}></Contact>
</header>
}