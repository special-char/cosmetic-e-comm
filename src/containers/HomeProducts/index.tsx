import React from "react";
import { topProduct, products } from "@/lib/data";
import Button from "@/components/common/Button";
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
type Props = {};

const HomeProducts = (props: Props) => {
	return (
		<section className="grid lg:grid-cols-[25%_1fr] grid-cols-1 items-center gap-2">
			<div className="flex flex-col gap-4">
				<h5 className="font-semibold">{topProduct.heading}</h5>
				<p className="text-caption2 text-gray mb-2">{topProduct.description}</p>
				<Button variant="fill" color="black" className="w-max">
					{topProduct.actionBtn}
				</Button>
			</div>
			<div className="grid md:grid-cols-3 grid-cols-1 gap-4">
				{products.slice(0, 3).map((product, index) => (
					<Link key={index} href={`/products/${product.handle}`} scroll={false}>
						<ProductCard data={product} />
					</Link>
				))}
			</div>
		</section>
	);
};

export default HomeProducts;
