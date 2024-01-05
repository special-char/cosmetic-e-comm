import React from 'react'
import Image from "next/image";
import Link from "next/link";

interface PriceProps {
  disc: number;
  original: number;
}

const Price = ({ disc, original }: PriceProps) => {
  return (
    <div>
      <div className="flex justify-start  items-center gap-4 w-full">
        <span className="text-xl font-semibold text-slate-700">
          ${disc}
        </span>
        <span className="text-gray-500 line-through text-sm">
          ${original}
        </span>
      </div>
    </div>
  );
};

export default Price
