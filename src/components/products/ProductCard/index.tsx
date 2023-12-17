import { ProductCardType } from "@/utils/types";
import Image from "next/image";
import Styles from "./productCard.module.css";
import AddToCartBtn from "../AddToCartBtn";

const ProductCard = ({ data }: ProductCardType) => {
	return (
		<div className={Styles.main}>
			<div className={Styles.productWrapper}>
				<div className={Styles.productImage}>
					<Image
						src={data.productThumbnail.url}
						alt={data.productName}
						fill
						style={{ objectFit: "contain" }}
					/>
				</div>
				<div className={Styles.content}>
					<p className={Styles.productName}>{data.productName}</p>
					<p className={Styles.productPrice}>{data.productPrice}</p>
				</div>
			</div>
			<div className={Styles.btnWrapper}>
				<AddToCartBtn varient="icon" />
			</div>
		</div>
	);
};

export default ProductCard;
