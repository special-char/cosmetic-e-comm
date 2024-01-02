import React from 'react'
import Image from 'next/image';
import Harecare from "/public/images/harecare.webp";
import Skincare from "/public/images/skincare.webp"
import Lipstick from "/public/images/lipstick.webp";
import Faceskin from "/public/images/faceskin.webp";
import Blusher from "/public/images/blusher.webp";
import Natural from "/public/images/natural.webp";
import Product1 from "/public/images/product01.png";

interface Props {
    
}

const Shop = (props: Props) => {
    return (
      <div>
        {/*----baner section----*/}
        <div className="bg-red-200 w-full h-40 mb-8 py-10 px-8 sm:px-8 md:px-16 lg:px-24 xl:px-16">
          <div className="font-sans mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 ">
            <p className="flex gap-2">
              <a href="/Home">Home</a>/<span>Products</span>
            </p>
          </div>
          <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mt-4 text-3xl">
            Shop
          </div>
        </div>

        {/*-----Product ------ */}

        <section className="flex flex-wrap m-10 gap-10 justify-center">
          <div className="flex flex-col justify-center bg-[#dcffd2] w-40 text-black h-56 rounded-3xl">
            <div className="flex justify-center mb-10">
              <Image
                src={Harecare}
                width={60}
                height={60}
                className="hover:animate-spin"
                alt="img"
              />
            </div>
            <div className="flex justify-center">
              <div className="border bg-red-200 h-1/10 w-10 border-red-200 inline-block"></div>
            </div>
            <p className="flex justify-center pt-5">Hare Care</p>
          </div>
          <div className="flex flex-col justify-center bg-[#FFF3DA] w-40 text-black h-56 rounded-3xl">
            <div className="flex justify-center mb-10">
              <Image
                src={Skincare}
                width={60}
                height={60}
                alt="img"
                className="hover:animate-spin "
              />
            </div>
            <div className="flex justify-center">
              <div className="border bg-red-200 h-1/10 w-10 border-red-200 inline-block"></div>
            </div>
            <p className="flex justify-center pt-5">Skin Care</p>
          </div>
          <div className="flex flex-col justify-center bg-[#FFEDB4] w-40 text-black h-56 rounded-3xl">
            <div className="flex justify-center mb-10">
              <Image
                src={Lipstick}
                width={60}
                height={60}
                className="hover:animate-spin "
                alt="img"
              />
            </div>
            <div className="flex justify-center">
              <div className="border bg-red-200 h-1/10 w-10 border-red-200 inline-block"></div>
            </div>
            <p className="flex justify-center pt-5">Lip Stick</p>
          </div>
          <div className="flex flex-col justify-center bg-[#DFE4FF] w-40 text-black h-56 rounded-3xl">
            <div className="flex justify-center mb-10">
              <Image
                src={Faceskin}
                width={60}
                height={60}
                className="hover:animate-spin "
                alt="img"
              />
            </div>
            <div className="flex justify-center">
              <div className="border bg-red-200 h-1/10 w-10 border-red-200 inline-block"></div>
            </div>
            <p className="flex justify-center pt-5">Face Skin</p>
          </div>
          <div className="flex flex-col justify-center bg-[#FFEACC] w-40 text-black h-56 rounded-3xl">
            <div className="flex justify-center mb-10">
              <Image
                src={Blusher}
                width={60}
                height={60}
                className="hover:animate-spin "
                alt="img"
              />
            </div>
            <div className="flex justify-center">
              <div className="border bg-red-200 h-1/10 w-10 border-red-200 inline-block"></div>
            </div>
            <p className="flex justify-center pt-5">Blusher</p>
          </div>
          <div className="flex flex-col justify-center bg-[#FFDAE0] w-40 text-black h-56 rounded-3xl">
            <div className="flex justify-center mb-10">
              <Image
                src={Natural}
                width={60}
                height={60}
                className="hover:animate-spin "
                alt="img"
              />
            </div>
            <div className="flex justify-center">
              <div className="border bg-red-200 h-1/10 w-10 border-red-200 inline-block"></div>
            </div>
            <p className="flex justify-center pt-5">Natural</p>
          </div>
        </section>

        {/* filter section */}
      </div>
    );
}

export default Shop
