import HomeBanner from "@/containers/HomeBanner";
import WhyChooseUs from "@/containers/WhyChooseUs";
import TestimonialCarousel from "@/containers/TestimonialCarousel";
import HomeProducts from "@/containers/HomeProducts";

export default function Home() {
	return (
		<main>
			<HomeBanner />
			<HomeProducts />
			<WhyChooseUs />
			<TestimonialCarousel />
		</main>
	);
}
