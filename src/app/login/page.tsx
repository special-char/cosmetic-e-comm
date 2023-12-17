import SiginWith from "@/components/auth/SignInWith";
import LoginForm from "@/components/auth/login";
import Button from "@/components/common/Button";
import Input from "@/components/common/form/Input";
import Link from "next/link";
import React from "react";

type Props = {};

const Login = (props: Props) => {
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
		<section className="flex flex-col w-full items-center gap-4">
			<LoginForm />
		</section>
	);
};

export default Login;
