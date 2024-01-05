"use client";
import Link from "next/link";
import React, { useState } from "react";
import LogoImg from "/public/images/logo.jpg";

import { TbMenuDeep } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import clsx from "clsx";

interface Props {}

const Header = (props: Props) => {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "Home",
      link: "/",
    },
    {
      labe: "About",
      link: "/About",
    },
    {
      labe: "Shop",
      link: "/Shop",
    },
    {
      labe: "Pages",
      link: "#",
    },
    {
      labe: "Blog",
      link: "#",
    },
    {
      labe: "Contact",
      link: "/Contact",
    },
  ];

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-6   ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <TbMenuDeep
              onClick={() => setMenu(true)}
              className="text-2xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Link href={"/"}>
              <Image src={LogoImg} alt="logo" width={100} height={100} />
            </Link>
          </section>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block text-gray-500 hover:text-blue-200"
              href={d.link}
            >
              {d.labe}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <CgClose
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.link}>
                {d.labe}
              </Link>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* search icon */}
          <Link href={"#"}>
            <CiSearch className="text-2xl cursor-pointer" />
          </Link>
          {/* cart icon */}
          <Link href={"#"}>
            <FaOpencart className="text-2xl cursor-pointer" />
          </Link>
          {/* account icon */}
          <Link href={"/login"}>
            <VscAccount className="text-2xl cursor-pointer" />
          </Link>
        </section>
      </nav>
    </main>
  );
}

export default Header;