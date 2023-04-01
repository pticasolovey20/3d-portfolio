import { FC } from "react";
import { motion } from "framer-motion";

import { ServiceCardComponent } from "../components/service-card";
import { WrapperComponent } from "../components/wrapper";
import { HeadLineComponent } from "../components/headline";

import { services } from "../constants";
import { fadeIn } from "../utils/motion";

export const AboutPage: FC = (): JSX.Element => {
	return (
		<WrapperComponent id="about">
			<HeadLineComponent subText="Introduction" headText="Overview" />
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="max-w-screen-2xl mt-4 text-secondary text-[17px] leading-[30px]"
			>
				I'm a skilled software developer with experience in TypeScript and JavaScript, and
				expertise in frameworks like React and Node.js I'm a quick learner and collaborate
				closely with clients to create efficient, scalable, and user-friendly solutions that
				solve real-world problems. Let's work together to bring your ideas to life!
			</motion.p>
			<div className="flex flex-wrap justify-center gap-[50px] mt-20">
				{services.map((service, index) => (
					<ServiceCardComponent key={service.title} index={index} service={service} />
				))}
			</div>
		</WrapperComponent>
	);
};
