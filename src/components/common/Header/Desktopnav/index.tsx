"use client";
import Link from "next/link";
import Button from "../../Button";
import UserIcon from "@/public/icons/user.svg";
import CartIcon from "@/public/icons/cart.svg";
import style from "./desktopnav.module.css";
import { DesktopNavType } from "@/utils/types";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const DesktopNav = ({ data }: DesktopNavType) => {
  const pathname = usePathname();

  return (
    <div className={style.deskNav}>
      <div className={style.logoWrapper}>
        <h1 className={style.heading1}>{data.heading1}</h1>
        <h1 className={style.heading2}>{data.heading2}</h1>
      </div>
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
          <Button variant="icon">
            <span className="sr-only">user account button</span>
            <UserIcon className="h-5" />
          </Button>
          <Link href={"/cart"}>
            <span className="sr-only">go to cart button</span>
            <CartIcon className="h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
