import { FC, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { notifyError, notifySuccess } from "../../utils/notify";

import { InputComponent } from "../input";

export const FormComponent: FC = (): JSX.Element => {
	const formRef = useRef(null);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!form.name || !form.email || !form.message) {
			notifyError("Fields are required");
			return;
		}

		setLoading(true);

		emailjs
			.send(
				"service_5pwgiim",
				"template_cc577pl",
				{
					from_name: form.name,
					to_name: "Dmytro",
					from_email: form.email,
					to_email: "dy.yev.solovyov@gmail.com",
					message: form.message,
				},
				"sgxFwQa-1jv9B43tg"
			)
			.then(
				() => {
					setLoading(false);
					notifySuccess("Success. I will get back to you");
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					notifyError("Something went wrong");
				}
			);
	};

	return (
		<form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 p-4">
			<InputComponent
				field="input"
				type="text"
				name="name"
				value={form.name}
				onChange={handleChange}
				placeholder="Your Name"
			/>

			<InputComponent
				field="input"
				type="email"
				name="email"
				value={form.email}
				onChange={handleChange}
				placeholder="Your Email"
			/>
			<InputComponent
				field="textarea"
				name="message"
				value={form.message}
				onChange={handleChange}
				placeholder="Write your offer"
			/>

			<button
				type="submit"
				className="rounded-[5px] bg-[#1d1836] py-3 uppercase font-bold tracking-wide"
			>
				{loading ? "Sending..." : "Send"}
			</button>
		</form>
	);
};
