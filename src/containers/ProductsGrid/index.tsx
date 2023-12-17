import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/data";
import Link from "next/link";
import React from "react";

type Props = {};

const ProductsGrid = (props: Props) => {
	return (
		<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
			{products.map((product, index) => (
				<Link key={index} scroll={false} href={`/products/${product.handle}`}>
					<ProductCard data={product} />
				</Link>
			))}
		</section>
	);
};

export default ProductsGrid;
