import { FC } from "react";
import { motion } from "framer-motion";

import { EarthComponent } from "../components/canvas/earth";
import { WrapperComponent } from "../components/wrapper";
import { HeadLineComponent } from "../components/headline";
import { ContactComponent } from "../components/contact";

import { FormComponent } from "../components/form";

import { slideIn } from "../utils/motion";

export const ContactPage: FC = (): JSX.Element => {
	return (
		<WrapperComponent id="contact">
			<div className={`flex xl:flex-row flex-col-reverse gap-10 xl:mt-12 overflow-hidden`}>
				<motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75]">
					<div className="flex justify-between w-full bg-[#1d1836] rounded-t-2xl border-b border-[#bac5d2]/20 p-5">
						<HeadLineComponent headText="Contact" />
						<ContactComponent />
					</div>
					<div className="w-full bg-black-100 opacity-75 rounded-b-2xl shadow-2xl pt-5">
						<FormComponent />
					</div>
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
