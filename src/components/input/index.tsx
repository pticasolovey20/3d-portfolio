import { FC } from "react";
import { IInput } from "../../types/props";

export const InputComponent: FC<IInput> = ({
	field,
	span,
	type,
	name,
	value,
	onChange,
	placeholder,
}: IInput): JSX.Element | null => {
	switch (field) {
		case "input":
			return (
				<label className="flex flex-col">
					<span className="text-white font-medium mb-4">{span}</span>
					<input
						type={type}
						name={name}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
					/>
				</label>
			);

		case "textarea":
			return (
				<label className="flex flex-col">
					<span className="text-white font-medium mb-4">Your Offer</span>
					<textarea
						rows={7}
						name={name}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
					/>
				</label>
			);

		default:
			return null;
	}
};
