import ContactUsBanner from "@/containers/ContactUsBanner";
import ContactUsSection from "@/containers/ContactUsSection";

type Props = {};

const page = (props: Props) => {
	return (
		<>
			<ContactUsBanner />
			<ContactUsSection />
		</>
	);
};

export default page;
