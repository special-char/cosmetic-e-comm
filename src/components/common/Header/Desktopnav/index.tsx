"use client";
import Link from "next/link";
import CartIcon from "@/public/icons/cart.svg";
import style from "./desktopnav.module.css";
import { DesktopNavType } from "@/utils/types";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import AccountBtn from "../AccountBtn";

const DesktopNav = ({ data }: DesktopNavType) => {
  const pathname = usePathname();

  return (
    <div className={style.deskNav}>
      <Link href={"/"} className={style.logoWrapper}>
        <h1 className={style.heading1}>{data.heading1}</h1>
        <h1 className={style.heading2}>{data.heading2}</h1>
      </Link>
      <div className={style.contentWrapper}>
        <div className={style.navLinks}>
          {data &&
            data.navLinks.map((item) => {
              return (
                // <Link href={item.url} key={item.id} className={style.title}>
                //   {item.title}
                // </Link>
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
          {/* <Link href={"/account"}>
						<span className="sr-only">user account button</span>
						<UserIcon className="h-5" />
					</Link> */}
          <AccountBtn />
          <Link href={"/cart"} scroll={false}>
            <span className="sr-only">go to cart button</span>
            <CartIcon className="h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
