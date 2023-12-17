import SendIcon from "@/public/icons/send.svg";
import MailIcon from "@/public/icons/envelope-outline.svg";
import styles from "./newsLetter.module.css";
import Input from "../common/formElements/Input";
import { footerData } from "@/lib/data";
import SubmitButton from "../common/formElements/SubmitButton";
import { z } from "zod";

type Props = {};

const NewsLetter = (props: Props) => {
	async function subscribeToNewsletter(formData: FormData) {
		"use server";

		const schema = z.object({
			email: z
				.string({
					invalid_type_error: "Invalid email",
				})
				.min(1, { message: "This field has to be filled." })
				.email("This is not a valid email.")
				.refine(
					(e) => e === "jk@test.com",
					"This email is not in our database"
				),
			name: z
				.string({
					invalid_type_error: "Invalid name",
				})
				.min(4, { message: "min 4 char required.." })
				.max(6, { message: "min 6 char valid.." }),
		});

		const validatedFields = schema.safeParse({
			name: formData.get("name"),
			email: formData.get("email"),
		});

		if (!validatedFields.success) {
			console.log(validatedFields.error.flatten().fieldErrors);

			return {
				errors: validatedFields.error.flatten().fieldErrors,
			};
		}

		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(formData);
			}, 3000);
		});

		console.log("formdata", validatedFields);

		return {
			message: "validated",
			formData: validatedFields,
		};

		// mutate data
		// revalidate cache
	}

	return (
		<section>
			<div className={styles.newsLetterHeadingWrapper}>
				<MailIcon className={styles.newsLetterHeadingIcon} />
				<p className={styles.newsLetterHeading}>
					{footerData.newsLetter.heading}
				</p>
			</div>
			<form className={styles.newsLetterForm} action={subscribeToNewsletter}>
				<Input name="name" placeholder="Enter your name" />
				<Input name="email" placeholder="Enter your email" type="email" />

				<SubmitButton
					variant="fill"
					color="green"
					className="!rounded-xl"
					type="submit"
				>
					<span className="sr-only">Subscribe to Newsletter button</span>
					<SendIcon className={styles.newsLetterFormIcon} />
				</SubmitButton>
			</form>
		</section>
	);
};

export default NewsLetter;
