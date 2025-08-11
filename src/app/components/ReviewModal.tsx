"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { createPortal } from "react-dom";
import { FaTimes, FaStar } from "react-icons/fa";

export interface Review {
  id: number;
  title: string;
  author: string;
  rating: number; // 0..5
  fullText: string;
}

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  review: Review | null;
}

export default function ReviewModal({ isOpen, onClose, review }: ReviewModalProps) {
  if (!isOpen || !review) return null;
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <FaStar key={i} className={"inline mr-1 " + (i < (review?.rating || 0) ? "text-orange" : "text-gray-400")} />
  ));

  return createPortal(
    <Transition show={isOpen} appear as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <button type="button" onClick={onClose} className="text-white absolute right-4 top-4 p-2 text-2xl" aria-label="Закрыть">
            <FaTimes />
          </button>
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="w-full max-w-2xl bg-white rounded-lg text-left shadow-xl">
              <div className="p-6">
                <Dialog.Title className="text-xl font-semibold mb-1">{review.title}</Dialog.Title>
                <p className="text-sm text-gray-500 mb-4">Отзыв оставила {review.author}</p>
                <div className="mb-4">{stars}</div>
                <div className="text-gray-800 leading-relaxed whitespace-pre-line">{review.fullText}</div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>,
    document.body
  );
}


