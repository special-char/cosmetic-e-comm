import React, { memo } from "react";
import style from "./input.module.css";
import clsx from "clsx";

type Props = {
	name: string;
	className?: string;
	wrapperClassName?: string;
	label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
	name,
	label,
	wrapperClassName,
	className,
	...props
}: Props) => {
	return (
		<div className={clsx([style.inputGroup, wrapperClassName])}>
			{label && (
				<label
					htmlFor={name}
					className={clsx(style.label, {
						[style.label_required]: props.required,
					})}
				>
					{label}
				</label>
			)}
			<input
				className={clsx("peer/input", {
					[className || ""]: !!className,
				})}
				name={name}
				{...props}
			/>
		</div>
	);
};

export default memo(Input);
