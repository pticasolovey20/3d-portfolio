import { FC } from "react";

import { IInput } from "../../types/props";

export const InputComponent: FC<IInput> = ({
	field,
	type,
	name,
	value,
	onChange,
	placeholder,
}: IInput): JSX.Element | null => {
	switch (field) {
		case "input":
			return (
				<input
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className="w-full outline-none border-[#bac5d2]/20 border-2 rounded-xl bg-transparent font-medium py-4 px-6 text-white"
				/>
			);

		case "textarea":
			return (
				<textarea
					rows={7}
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className="bg-transparent py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-[#bac5d2]/20 border-2 font-medium"
				/>
			);

		default:
			return null;
	}
};
