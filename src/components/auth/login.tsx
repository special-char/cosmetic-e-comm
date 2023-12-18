import Link from "next/link";
import SignInWith from "./SignInWith";
import Input from "../common/formElements/Input";
import SubmitButton from "../common/formElements/SubmitButton";

type Props = {};

const LoginForm = (props: Props) => {
	async function login(formData: FormData) {
		"use server";

		const rawFormData = {
			email: formData.get("email"),
			password: formData.get("password"),
		};

		console.log("formdata", rawFormData);

		// mutate data
		// revalidate cache
	}

	return (
		<div className="flex flex-col w-full items-center gap-4">
			<h4>Login</h4>
			<div className="flex flex-col gap-2">
				<div className="flex gap-2 items-center">
					<p className="text-subtitle2">Don&apos;t have an account ?</p>
					<span>
						<Link className="text-blue-500" scroll={false} href={"/register"}>
							Sign up
						</Link>
					</span>
				</div>
				<form action={login} className="flex flex-col gap-6 max-w-md">
					<Input
						name="email"
						placeholder="Enter your email"
						type="email"
						label="Email"
					/>
					<Input name="password" placeholder="Password" label="Password" />
					<SubmitButton
						variant="fill"
						color="green"
						className="!rounded-xl"
						type="submit"
					>
						Login
					</SubmitButton>
				</form>
				{/* <div className="flex items-center">
					<span className="flex-1">
						<hr />
					</span>
					<p className="text-subtitle2 px-4">Or Login with</p>
					<span className="flex-1">
						<hr />
					</span>
				</div>
				<SignInWith /> */}
			</div>
		</div>
	);
};

export default LoginForm;
