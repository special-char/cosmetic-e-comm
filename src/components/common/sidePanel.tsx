"use client";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from 'clsx'

type Props = {
  children: React.ReactNode;
  side: 'left' | 'right';
};

const SidePanel = ({ children, side = 'left'  }: Props) => {
  const router = useRouter();

  return (
    <Dialog as="div" open className="relative z-10" onClose={router.back}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className={clsx("pointer-events-none fixed inset-y-0  flex max-w-full", {
            'left-0 pr-10':  side === 'left',
            'right-0 pl-10':  side === 'right'
          })}>
            <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <Dialog.Title className="text-lg font-medium text-gray-900">
                      Shopping cart
                    </Dialog.Title>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={router.back}
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                {children}
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SidePanel;
