import ProductsBanner from "@/containers/ProductsBanner";
import ProductsGrid from "@/containers/ProductsGrid";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <ProductsBanner />
      <ProductsGrid />
    </div>
  );
};

export default page;
