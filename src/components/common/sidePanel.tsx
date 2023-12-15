"use client";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import React, { Fragment, useCallback } from "react";
import XMarkIcon from "@/public/icons/cencel.svg";

type Props = {
  children: React.ReactNode;
};

const SidePanel = ({ children }: Props) => {
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Dialog as="div" open className="relative z-10" onClose={onDismiss}>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-md transition-opacity" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
            <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
              <div className="flex flex-col bg-white h-screen shadow-xl overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <Dialog.Title className="text-lg font-medium text-gray-900">
                    Shopping cart
                  </Dialog.Title>
                  <div className="ml-3 flex h-5 items-center">
                    <button
                      type="button"
                      className="relative -m-2 p-2 text-gray/40 hover:text-gray-500"
                      onClick={onDismiss}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close panel button</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
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
