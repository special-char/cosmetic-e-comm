import SignInWith from "@/components/auth/SignInWith";
import RegisterForm from "@/components/auth/register";
import Button from "@/components/common/Button";
import Input from "@/components/common/form/Input";
import Link from "next/link";
import React from "react";

type Props = {};

const Register = (props: Props) => {
	async function register(formData: FormData) {
		"use server";

		const rawFormData = {
			name: formData.get("name"),
			email: formData.get("email"),
			password: formData.get("password"),
		};

		console.log("formdata", rawFormData);

		// mutate data
		// revalidate cache
	}
	return (
		<section className="flex flex-col w-full items-center gap-4">
			<RegisterForm />
		</section>
	);
};

export default Register;
