"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Form from './Form'
import { FaTimes } from 'react-icons/fa'

export default function MyModal({isOpen, onClose }: any) {


  return (
    <>
      <Transition show={isOpen} appear as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-md transform bg-gray-dark-block text-left align-middle shadow-xl transition-all before:bg-[url('/img/BG-Form.png')] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-no-repeat before:bg-[-10rem]">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium text-white text-center pt-20 px-3 uppercase"
                  >
                    Связаться с нами
                  </Dialog.Title>
                  <Dialog.Description as='div' className="uppercase text-center text-sm text-orange border border-orange px-10 py-3 my-10 mx-5">Получить бесплатную консультацию</Dialog.Description>
                  <Form btn={'Отправить'}></Form>
                  <button type='button' onClick={onClose} className='text-white absolute bg-orange right-[-0.25rem] top-[-0.5rem]  p-1 text-2xl'><FaTimes/> </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
