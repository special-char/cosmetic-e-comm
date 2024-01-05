import React from "react";
import Link from "next/link";
import Image from "next/image";
import Brand1 from "/public/images/designstudion.jpg";
import Brand2 from "/public/images/caroline.jpg";
import Brand3 from "/public/images/caferestaurant.jpg";
import Brand4 from "/public/images/cherly.jpg";

interface Props {}

const Aboutslider = (props: Props) => {
  return (
    <section className="overflow-x-scroll no-scrollbar w-full  ">
      <div className="flex gap-8 md:gap-12 lg:gap-24 justify-center p-4 mt-16 w-full h-32  ">
        {/* <Image
            src={Brand1}
            className=" aspect-square bg-blue-200 shrink-0   "
            alt="img"
          /> */}
        <div className="relative w-full h-full ">
          <Image src={Brand2} fill className="object-contain" alt="img" />
        </div>
        <div className="relative w-full h-full ">
          <Image src={Brand1} fill className="object-contain" alt="img" />
        </div>
        <div className="relative w-full h-full ">
          <Image src={Brand3} fill className="object-contain" alt="img" />
        </div>
        <div className="relative w-full h-full ">
          <Image src={Brand4} fill className="object-contain" alt="img" />
        </div>
        <div className="relative w-full h-full ">
          <Image src={Brand2} fill className="object-contain" alt="img" />
        </div>
        <div className="relative w-full h-full ">
          <Image src={Brand1} fill className="object-contain" alt="img" />
        </div>
        {/* <Image
            src={Brand3}
            className="h-32 md:h-36 lg:h-44 aspect-square bg-red-200 shrink-0"
            alt="img"
          />
          <Image
            src={Brand4}
            className="h-32 md:h-36 lg:h-44 aspect-square bg-red-200 shrink-0"
            alt="img"
          />
          <Image
            src={Brand1}
            className="h-32 md:h-36 lg:h-44 aspect-square bg-red-200 shrink-0   "
            alt="img"
          />
          <Image
            src={Brand2}
            className="h-32 md:h-36 lg:h-44 aspect-square bg-red-200 shrink-0"
            alt="img"
          />
          <Image
            src={Brand3}
            className="h-32 md:h-36 lg:h-44 aspect-square bg-red-200 shrink-0"
            alt="img"
          />
          <Image
            src={Brand4}
            className="h-32 md:h-36 lg:h-44 aspect-square bg-red-200 shrink-0"
            alt="img"
          /> */}
      </div>
    </section>
  );
};

export default Aboutslider;
