"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductCounter from "../Productcount/index";
import Product1 from "../../../public/images/product01.png";
// import Rating from "../Rating/index";
  // import { FaTimes } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


interface Product {
  stars: number;
  numReviews: number;
}

interface Productcount {
  product: Product;
}

const Productaddcart: React.FC<Productcount> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row justify-center gap-8 h-4/5 p-6 bg-slate-200">
        
        <div className="lg:w-1/2 h-full flex justify-center">
          <Image
            src={Product1}
            alt="img"
            className="bg-violet-400 rounded-md bg-cover"
            width={400}
            height={400}
          />
        </div>
        
        <div className="lg:w-1/2">
          <p>Premium collection</p>
          <h3 className="text-3xl pt-4">
            Offline Instant Age Rewind <br />
            Eraser.
          </h3>

          {/* <Rating stars={product.stars} numReviews={product.numReviews} /> */}

          <p className="mt-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            <br /> repellendus. Nam voluptate illo ut quia non sapiente
            provident alias <br />
            quos laborum incidunt, earum accusamus, natus. Vero pariatur ut
            <br />
            veniam sequi amet consectetur.
          </p>
          <div className="mt-4 ">
            <ProductCounter
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              count={quantity}
            />
          </div>

          <div className="border bg-gray-400 h-1/10 w-full border-gray-400 inline-block mt-6"></div>
          <div className="flex flex-col lg:flex-row justify-start items-center gap-4 w-full mt-2 ">
            <span className="text-5xl font-semibold text-black">$299.00</span>
            <span className="text-gray-500 lg:pt-4 lg:pl-4">
              <del>$399.00</del>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productaddcart;
