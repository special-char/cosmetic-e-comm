"use client";

import Button from "@/components/common/Button";
import { useState } from "react";
import PlusIcon from "@/public/icons/plus.svg";
import MinusIcon from "@/public/icons/minus.svg";

type Props = {};

const CounterBtn = (props: Props) => {
	const [count, setCount] = useState<number>(0);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	const decrement = () => {
		setCount((prev) => prev - 1);
	};

	return (
		<div className="flex items-center gap-2">
			<Button variant="round" color="green" type="button" onClick={increment}>
				<MinusIcon className="w-5" />
			</Button>
			{count}
			<Button variant="round" color="green" type="button" onClick={decrement}>
				<PlusIcon className="w-5" />
			</Button>
		</div>
	);
};

export default CounterBtn;
