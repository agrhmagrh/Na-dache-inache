"use client";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

export default function LightImage({ url, alt }: { url: string; alt?: string }) {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  return (
    <>
      <Image
        className="cursor-pointer"
        onClick={openModal}
        width={310}
        height={310}
        src={url}
        alt={alt || "Изображение"}
      />
      {isOpen &&
        createPortal(
          <Transition show={isOpen} appear as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/75" />
              </Transition.Child>
              <div className="fixed inset-0 overflow-y-auto">
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-white absolute right-2 top-2  p-1 text-2xl"
                >
                  <FaTimes />
                </button>
                <div className="flex min-h-full md:w-3/4 m-auto items-center justify-center p-4 text-center">
                  <Image width={1000} height={1000} src={url} alt={alt || "Изображение"} className="rounded" />
                </div>
              </div>
            </Dialog>
          </Transition>,
          document.body
        )}
    </>
  );
}
