"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

export default function ButtonModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="submit text-center text-white bg-orange m-3 text-2xl h-14 px-8">
      <input
        onClick={openModal}
        className="block w-full h-full cursor-pointer"
        type="submit"
        value="Связаться с нами"
      />
      {isOpen &&
        createPortal(
          <Modal isOpen={isOpen} onClose={() => closeModal()} />,
          document.body
        )}
    </div>
  );
}
