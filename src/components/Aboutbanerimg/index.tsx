import React from "react";
import Link from "next/link";
import Image from "next/image";
import Imgabout from "../../../public/images/imgaboute.webp";

interface Props {}

const Aboutbanerimg = (props: Props) => {
  return (
    <main>
      <div>
        <Image
          src={Imgabout}
          alt="img"
          className="flex flex-col justify-center items-center md:relative mt-16 mb-10"
        />
      </div>
    </main>
  );
};

export default Aboutbanerimg;
