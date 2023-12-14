import React, { forwardRef, memo } from "react";
import style from "./input.module.css";
import clsx from "clsx";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	name: string;
	color?: "white";
	className?: any;
	label?: string;
};
const Input = ({ name, color, label, className, ...props }: Props) => {
	return (
		<div className={style.inputGroup}>
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
			<span className={clsx(style.inputWrapper)}>
				<input
					className={clsx(style.input, "peer/input", {
						[style[`input--${color}`]]: !!color,
						[className || ""]: !!className,
					})}
					name={name}
					{...props}
				/>
			</span>
		</div>
	);
};

export default memo(Input);
