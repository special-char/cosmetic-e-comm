"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CrossIcon from "@/public/icons/cross.svg";
import UserIcon from "@/public/icons/user.svg";
import CartIcon from "@/public/icons/cart.svg";
import HamburgerIcon from "@/public/icons/hamburger.svg";
import Link from "next/link";
import style from "./mobilenav.module.css";
import Button from "../../Button";
import useToggleState from "@/lib/hooks/use-toggle-state";
import { MobileNavType } from "@/utils/types";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function MobileNav({ data }: MobileNavType) {
  const { state, open, close } = useToggleState();
  const pathname = usePathname();

  return (
    <>
      <div className={style.mobileNav}>
        <Link href={"/"} className={style.logoWrapper}>
          <h1 className={style.heading1}>{data.heading1}</h1>
          <h1 className={style.heading2}>{data.heading2}</h1>
        </Link>

        <Button variant="icon" title="menu button" onClick={open}>
          <span className="sr-only">open menu button</span>
          <HamburgerIcon className="h-6" />
        </Button>
      </div>

      <Transition.Root show={!!state} as={Fragment}>
        <Dialog as="div" className="relative md:hidden" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={style.blurEffect} onClick={close}></div>
          </Transition.Child>

          <div className={style.sideMenu}>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className={`no-scrollbar ${style.dialogPanel}`}>
                <div className={style.container}>
                  <div className={style.menuHeader}>
                    <Link href={"/"} className="flex">
                      <h1 className={style.heading1}>{data.heading1}</h1>
                      <h1 className={style.heading2}>{data.heading2}</h1>
                    </Link>
                    <a>
                      <CrossIcon className="h-6 text-white" onClick={close} />
                    </a>
                  </div>

                  <div className={style.navLinks}>
                    {data &&
                      data.navLinks.map((item) => {
                        return (
                          <Link
                            href={item.url}
                            key={item.id}
                            className={clsx(`${style.link}`, {
                              [style.active]: pathname === item.url,
                            })}
                          >
                            {item.title}
                          </Link>
                        );
                      })}
                  </div>
                  <div className={style.icons}>
                    <Button variant="icon">
                      <span className="sr-only">user account button</span>
                      <UserIcon className="h-5" />
                    </Button>
                    <Link href={"/cart"} onClick={close}>
                      <span className="sr-only">go to cart button</span>
                      <CartIcon className="h-5" />
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default MobileNav;
