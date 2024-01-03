'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/header/index';
import Harecare from "/public/images/harecare.webp";
import Skincare from "/public/images/skincare.webp"
import Lipstick from "/public/images/lipstick.webp";
import Faceskin from "/public/images/faceskin.webp";
import Blusher from "/public/images/blusher.webp";
import Natural from "/public/images/natural.webp";
import Product1 from "/public/images/product01.png";
import Filter from "/public/images/filter.png"
import Baner from '/public/images/banershop.webp'

interface Props {
    
}

const Shop = (props: Props) => {
  
  const [priceRange, setPriceRange] = useState(50);

    return (
      <div>
      
       <Header />
        
        {/*----baner section----*/}
        <div className="bg-red-100 w-full h-40 mb-4 py-10 px-8 sm:px-8 md:px-16 lg:px-24 xl:px-16">
          <div className="font-sans mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 ">
            <p className="flex gap-2">
              <a href="/Home">Home</a>/<span>Products</span>
            </p>
          </div>
          <div className="sm:mx-8 md:mx-16 lg:mx-22 xl:mx-32 mt-4 text-3xl">
            All Products
          </div>
        </div>

        {/*------------------------- filter / price section -------------------------------------------------------*/}
        <div>
          <div className="flex justify-between">
            <div>
              <p className="flex items-center text-xl flex-shrink-0 gap-1 justify-start ml-96">
                Filter
                <Image src={Filter} alt="filter" width={30} height={30} />
              </p>
            </div>

            <div className="border bg-sky-700 h-8 w-1/10 border-sky-700 ml-80"></div>

            {/* price range */}

            <div className="flex items-center container mx-auto justify-end mr-96">
              <label className="mr-2">Price:</label>
              <input
                type="range"
                min={0}
                max={100}
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-16 h-1"
              />
              <span className="ml-2">{priceRange}</span>
            </div>
          </div>
        </div>
        <hr className="borderbg-sky-400 mt-4 h-1/10 " />

        {/*---------------------------------end of the filter and price section ----------------------------------------------------------------- */}

        {/*---------------------------------Product Brands ------------------------------------------- */}

        <section className="flex flex-wrap m-11 gap-10 justify-center ">
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

        {/*--------Baner section---------------- */}

        <div className=" flex justify-center">
          <Image
            src={Baner}
            alt={"baner"}
            className="m-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          />
        </div>
      </div>
    );
}

export default Shop
