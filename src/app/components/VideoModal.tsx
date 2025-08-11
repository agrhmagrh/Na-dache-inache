"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <Transition show={isOpen} appear as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть видео"
            className="text-white absolute right-4 top-4 p-2 text-2xl"
          >
            <FaTimes />
          </button>

          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title={title || "Видео"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>,
    document.body
  );
}


