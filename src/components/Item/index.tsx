import React from "react";
import Image from "next/image";
import Link from "next/link";
import product1 from "./3.jpeg";
import { FcLike } from "react-icons/fc";
import { FaExpandAlt } from "react-icons/fa";
import Rating from "../Rating/index";
import Productaddcart from "../Productaddcart/index";
import Price from "../Price/index";
import Addtocartbutton from "../Addtocartbutton/index";
import LikeButton from "../Likebutton/index";

const Items = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "/images/1.jpeg",
      stars: 2,
      numReviews: 120,
      originalPrice: 150.0,
      discountPrice: 99.99,
    },
    {
      id: 2,
      name: "Product 2",
      image: "/images/2.jpeg",
      stars: 3,
      numReviews: 120,
      originalPrice: 250.0,
      discountPrice: 199.99,
    },
    {
      id: 3,
      name: "Product 3",
      image: "/images/3.jpeg",
      stars: 4,
      numReviews: 120,
      originalPrice: 350.0,
      discountPrice: 299.0,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 mb-5">
      {products.map((product, index) => (
        <div key={product.id}>
          <div className="relative overflow-hidden rounded-md group">
            <div className="hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image
                src={product.image}
                alt={product.name}
                width={350}
                height={400}
              />
            </div>

            <section className="">
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-1">
                <Link href="/Productaddcart/index">
                  <button className="bg-transparent text-slate-700 px-2 py-2 rounded-full border-2 border-slate-700">
                    <FaExpandAlt />
                  </button>
                </Link>

                <Addtocartbutton />
                <LikeButton />
              </div>
            </section>
          </div>

          <div className="mt-4">
            <Rating stars={product.stars} numReviews={product.numReviews} />
            <div className="my-4 font-semibold text-2xl">{product.name}</div>

            <Price
              disc={product.discountPrice}
              original={product.originalPrice}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
