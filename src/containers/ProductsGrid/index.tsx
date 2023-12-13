import ProductCard from "@/components/common/ProductCard";
import { products } from "@/lib/data";
import React from "react";

type Props = {};

const ProductsGrid = (props: Props) => {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} data={product} />
      ))}
    </section>
  );
};

export default ProductsGrid;
