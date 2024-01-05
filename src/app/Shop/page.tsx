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
import Productbrands from '@/components/ProductBrands';
import Items from '@/components/Item';

interface Props {
    
}

const Shop = (props: Props) => {
  
  const [priceRange, setPriceRange] = useState(50);

    return (
      <div>
        <Header />

        {/*----baner section----*/}
        <section>
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
                  max={2500}
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-16 h-1"
                />
                <span className="ml-2">{priceRange}</span>
              </div>
            </div>
          </div>
          <hr className="borderbg-sky-400 mt-4 h-1/10 " />

          <Productbrands />
          <Items />

          {/*--------Baner section---------------- */}

          <div className=" flex justify-center">
            <Image
              src={Baner}
              alt={"baner"}
              className="m-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            />
          </div>
        </section>
      </div>
    );
}

export default Shop
