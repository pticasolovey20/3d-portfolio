import { FC } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { ServiceCard } from "../components/service-card";
import { WrapperComponent } from "../components/wrapper";

export const AboutPage: FC = (): JSX.Element => {
	return (
		<WrapperComponent id="about">
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-screen-2xl leading-[30px]"
			>
				I'm a skilled software developer with experience in TypeScript and JavaScript, and
				expertise in frameworks like React and Node.js I'm a quick learner and collaborate
				closely with clients to create efficient, scalable, and user-friendly solutions that
				solve real-world problems. Let's work together to bring your ideas to life!
			</motion.p>
			<div className="mt-20 flex flex-wrap justify-between gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} service={service} />
				))}
			</div>
		</WrapperComponent>
	);
};
