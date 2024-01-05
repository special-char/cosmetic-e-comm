import React from "react";
import Image from "next/image";
import Harecare from "/public/images/harecare.webp";
import Skincare from "/public/images/skincare.webp";
import Lipstick from "/public/images/lipstick.webp";
import Faceskin from "/public/images/faceskin.webp";
import Blusher from "/public/images/blusher.webp";
import Natural from "/public/images/natural.webp";
import clsx from "clsx";

const Productbrands = () => {

   const productsbrand = [
     {
       id: 1,
       name: "Product 1",
       image: Harecare,
       color: "bg-[#DCFFD2]",
     },
     {
       id: 2,
       name: "Product 2",
       image: Skincare,
       color: "bg-[#FFEDB4]",
     },
     {
       id: 3,
       name: "Product 3",
       image: Lipstick,
       color: "bg-[#DFE4FF]",
     },
     {
       id: 4,
       name: "Product 4",
       image: Faceskin,
       color: "bg-[#FFEACC]",
     },
     {
       id: 5,
       name: "Product 5",
       image: Blusher,
       color: "bg-[#FFDAE0]",
     },
     {
       id: 6,
       name: "Product 6",
       image: Natural,
       color: "bg-[#FFF3DA]",
     },
   ];


  return (
    <div className="flex flex-wrap justify-center">
      {productsbrand.map((productbrand, index) => (
        <div key={productbrand.id}>
          <section className="flex flex-wrap m-4 mb-28git  justify-center">
            <div className={clsx("flex flex-col justify-center  w-40  text-black h-56 rounded-3xl",productbrand.color)}>
              <div className="flex justify-center mb-10">
                <Image
                  src={productbrand.image}
                  width={60}
                  height={60}
                  alt="img"
                  className="hover:animate-spin "
                />
              </div>
              <div className="flex justify-center">
                <div className="border bg-red-200 h-1/10 w-10 border-red-200 inline-block"></div>
              </div>
              <p className="flex justify-center pt-5">{productbrand.name}</p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Productbrands;
