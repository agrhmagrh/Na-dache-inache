"use client";

import { Dialog, DialogPanel, DialogTitle, Description, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import Form from './Form';
import { FaTimes } from 'react-icons/fa';

export type ModalType = 'order' | 'consultation';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType;
  productTitle?: string;
}

const modalConfig = {
  order: {
    title: 'Заказать товар',
    description: 'Оформить заказ с доставкой и монтажом',
    buttonText: 'Оформить заказ'
  },
  consultation: {
    title: 'Получить консультацию',
    description: 'Бесплатная консультация специалиста',
    buttonText: 'Заказать звонок'
  }
};

export default function OrderModal({ isOpen, onClose, type, productTitle }: OrderModalProps) {
  const config = modalConfig[type];

  return (
    <Transition show={isOpen} appear as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-full max-w-md transform bg-gray-dark-block text-left align-middle shadow-xl transition-all before:bg-[url('/img/BG-Form.png')] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-no-repeat before:bg-[-10rem]">
                <DialogTitle
                  as="h3"
                  className="text-3xl font-medium text-white text-center pt-20 px-3 uppercase"
                >
                  {config.title}
                </DialogTitle>
                
                <Description as='div' className="uppercase text-center text-sm text-orange border border-orange px-10 py-3 my-10 mx-5">
                  {config.description}
                </Description>

                {productTitle && (
                  <div className="text-center text-white px-5 mb-4">
                    <div className="text-sm text-gray-300 mb-1">Товар:</div>
                    <div className="text-base font-medium">{productTitle}</div>
                  </div>
                )}

                <Form btn={config.buttonText} />
                
                <button 
                  type='button' 
                  onClick={onClose} 
                  className='text-white absolute bg-orange right-[-0.25rem] top-[-0.5rem] p-1 text-2xl hover:bg-orange-600 transition-colors'
                  aria-label="Закрыть"
                >
                  <FaTimes />
                </button>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}