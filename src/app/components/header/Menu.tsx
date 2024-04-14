"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { Popover, Transition } from "@headlessui/react";
import { solutions, callsToAction } from "@/app/contstants/const";
import { usePathname } from "next/navigation";
import { TypeMobileProps } from "@/types";



export default function Menu({ type }: TypeMobileProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(prev => !prev)
    
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
                          : "group relative flex  p-4 hover:bg-orange hover:text-white"
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
    <nav className="h-full flex items-center justify-center">
      <button onClick={toggleMenu} className="md:text-[60px] text-[40px] text-[#C4C4C4] px-5 md:px-10">
        <BiMenu />
      </button>
    </nav>
  );
}
