import Image from "next/image";
import StarIcon from "@/public/icons/star.svg";
import clsx from "clsx";
import { ProductCardType } from "@/utils/types";
import AddToCartBtn from "../AddToCartBtn";
import Modal from "@/components/common/Modal";

const ProductModal = ({ data }: ProductCardType) => {
	return (
		<Modal>
			<div className="grid w-full grid-cols-1 sm:grid-cols-2 rounded-md">
				<div className="relative w-full aspect-square">
					<Image
						src={data.productThumbnail.url}
						alt={data.productName}
						fill
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className="flex flex-col justify-between gap-4">
					<h3 className="font-bold">{data.productName}</h3>
					<p className="text-gray">{data.productDescription}</p>

					<h6 className="font-bold">{data.productPrice}</h6>

					<div className="flex items-center gap-4">
						<div className="flex">
							{[0, 1, 2, 3, 4].map((rating) => (
								<StarIcon
									key={rating}
									className={clsx("h-5 w-5 flex-shrink-0", {
										["text-yellow"]: data.rating > rating,
										["text-gray/20"]: data.rating <= rating,
									})}
									aria-hidden="true"
								/>
							))}
						</div>

						<p className="text-gray">{data.reviewCount} reviews</p>
					</div>

					<AddToCartBtn />
					<a
						href={`/products/${data.handle}`}
						className="text-blue-500 text-center"
					>
						view more
					</a>
				</div>
			</div>
		</Modal>
	);
};

export default ProductModal;
