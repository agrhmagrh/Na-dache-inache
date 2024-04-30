"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BiChevronDown, BiChevronUp, BiMenu } from "react-icons/bi";
import { Popover, Transition } from "@headlessui/react";
import { solutions, callsToAction } from "@/app/contstants/const";
import { usePathname } from "next/navigation";
import { TypeMobileProps } from "@/types";

export default function Menu({ type }: TypeMobileProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandMenu, setExpandMenu] = useState(true);
  const header = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }
  function toggleExpandMenu() {
    setExpandMenu((prev) => !prev);
  }

  return type == "desktop" ? (
    <nav
      className="menu p-6 col-span-4 mx-auto flex max-w-7xl items-center justify-between lg:px-8 xl:text-md md:text-sm"
      aria-label="Global"
    >
      <ul className="menu-list flex items-center justify-around gap-10 cursor-pointer text-nowrap">
        <Popover className="relative">
          <Popover.Button className="outline-none">
            <li className="menu-list-item flex items-center gap-1">
              Каталог <BiChevronDown className="text-2xl" />
            </li>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-[200px] z-100 mt-5 flex w-screen max-w-max -translate-x-1/2  z-20">
              <div className="w-screen max-w-md flex-auto overflow-hidden bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-additional">
                <div className="flex flex-col gap-2">
                  {solutions.map((item) => (
                    <div
                      key={item.name}
                      className={
                        pathname === item.href
                          ? "bg-orange text-white group relative flex  p-4"
                          : "group relative flex p-4 hover:bg-orange hover:text-white"
                      }
                    >
                      <div>
                        <Link href={item.href} className={"font-semibold"}>
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2  bg-gray-dark-block text-white ">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      target={item.target}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-white hover:text-gray-dark"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <li className="menu-list-item">
          <Link href="/production">О произвостве</Link>
        </li>
        <li className="menu-list-item">
          <Link href="/contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  ) : (
    <>
      <div ref={header} className="h-full flex items-center justify-center">
        <button
          onClick={toggleMenu}
          className="md:text-[60px] text-[40px] text-[#C4C4C4] px-5 md:px-10"
        >
          <BiMenu />
        </button>
      </div>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-x-52"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 -translate-x-52"
      >
        <aside
          className={"absolute h-screen bg-white z-30 min-w-[280px]"}
          style={{
            top: header.current?.offsetHeight + "px",
          }}
        >
          <nav className="bg-white h-full border-r border-t border-gray-additional">
            <ul>
              <li
                onClick={toggleExpandMenu}
                className="menu-list-item flex items-center gap-1 text-sm p-4 cursor-pointer"
              >
                Каталог{" "}
                {!expandMenu ? (
                  <BiChevronDown className="text-2xl" />
                ) : (
                  <BiChevronUp className="text-2xl" />
                )}
              </li>
              {expandMenu &&
                solutions.map((solution, i) => {
                  return (
                    <li
                      className={`menu-list-item p-4 pl-6 text-sm ${pathname == solution.href ? "bg-orange text-white" : "hover:bg-gray-light"}`}
                      key={i}
                    >
                      <Link href={solution.href}>{solution.name}</Link>
                    </li>
                  );
                })}
              <li
                className={`menu-list-item p-4 text-sm ${pathname == "/production" ? "bg-orange text-white" : "hover:bg-gray-light"}`}
              >
                <Link href="/production">О произвостве</Link>
              </li>
              <li
                className={`menu-list-item p-4 text-sm ${pathname == "/contacts" ? "bg-orange text-white" : "hover:bg-gray-light"}`}
              >
                <Link href="/contacts">Контакты</Link>
              </li>
            </ul>
          </nav>
        </aside>
      </Transition>
    </>
  );
}
