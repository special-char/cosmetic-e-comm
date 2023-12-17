import Input from "../../components/common/formElements/Input";
import TextArea from "@/components/common/formElements/TextArea";
import SubmitButton from "@/components/common/formElements/SubmitButton";
import style from "./contactform.module.css";

const ContactForm = () => {
	async function contactFormSubmit(formData: FormData) {
		"use server";

		const rawFormData = {
			firstname: formData.get("firstname"),
			lastname: formData.get("lastname"),
			email: formData.get("email"),
			message: formData.get("message"),
		};

		console.log("formdata", rawFormData);

		// mutate data
		// revalidate cache
	}
	return (
		<form className={style.form} action={contactFormSubmit}>
			<div className={style.formInput}>
				<div className={style.nameInput}>
					<Input name="firstname" label="First name" />
					<Input name="lastname" label="Last name" />
				</div>
				<Input
					name="email"
					label="Email"
					type="email"
					wrapperClassName="col-span-2"
				/>
				<TextArea
					name="message"
					label="Message"
					rows={5}
					wrapperClassName="col-span-2"
				/>
			</div>
			<div>
				<SubmitButton
					variant="fill"
					color="green"
					title="send message"
					className="!rounded-xl"
				>
					Send Message
				</SubmitButton>
			</div>
		</form>
	);
};

export default ContactForm;
