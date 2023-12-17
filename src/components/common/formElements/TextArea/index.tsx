import React, { memo } from "react";
import style from "./textArea.module.css";
import clsx from "clsx";

type Props = {
	name: string;
	className?: string;
	wrapperClassName?: string;
	label?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = ({
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
			<textarea
				className={clsx("peer/input", {
					[className || ""]: !!className,
				})}
				name={name}
				{...props}
			/>
		</div>
	);
};

export default memo(TextArea);
