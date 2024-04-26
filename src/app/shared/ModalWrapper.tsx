"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../components/Modal";

export default function ModalWrapper({className}: any) {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
    }
    return (
        <div className={className}>
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
    )
}