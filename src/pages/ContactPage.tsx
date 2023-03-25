import { FC, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthComponent } from "../components/canvas/earth";
import { WrapperComponent } from "../components/wrapper";
import { slideIn } from "../utils/motion";
import { HeadLineComponent } from "../components/headline";
import { InputComponent } from "../components/input";
import { IconSelectorComponent } from "../components/icon-selector";
import { contacts } from "../constants";

export const ContactPage: FC = (): JSX.Element => {
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
					alert("Thank you! I will get back to you as soon as possible");

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert("Something went wrong");
				}
			);
	};

	return (
		<WrapperComponent id="contact">
			<div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
				<motion.div
					variants={slideIn("left", "tween", 0.2, 1)}
					className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
				>
					<HeadLineComponent subText="Get in Touch" headText="Contact" />
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-12 flex flex-col gap-8"
					>
						<InputComponent
							field="input"
							span="Your Name"
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What is your name?"
						/>
						<InputComponent
							field="input"
							span="Your Email"
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What is your email?"
						/>
						<InputComponent
							field="textarea"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="Lets work together!"
						/>
						<div className="flex justify-between items-center">
							<button
								type="submit"
								className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
							>
								{loading ? "Sending..." : "Send"}
							</button>
							<div className="flex gap-5 items-center">
								<p className="text-[16px] text-secondary">+38-066-009-82-97</p>

								<div className="flex gap-3">
									{contacts.map((element, index) => (
										<div
											key={index}
											className="w-12 h-12 flex items-center rounded-full green-pink-gradient p-[2px] cursor-pointer"
										>
											<a
												href={element.link}
												rel="noreferrer"
												target="_blank"
												className="text-secondary bg-[#151030] rounded-full w-full h-full flex items-center justify-center"
											>
												<IconSelectorComponent icon={element.name} />
											</a>
										</div>
									))}
								</div>
							</div>
						</div>
					</form>
				</motion.div>
				<motion.div
					variants={slideIn("right", "tween", 0.2, 1)}
					className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
				>
					<EarthComponent />
				</motion.div>
			</div>
		</WrapperComponent>
	);
};
