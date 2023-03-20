import { FC } from "react";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { WrapperComponent } from "../components/wrapper";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";
import { EducationCard } from "../components/education-card";

export const EducationPage: FC = (): JSX.Element => {
	return (
		<WrapperComponent id="education">
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What i have done so far</p>
				<h2 className={styles.sectionHeadText}>Education and Experience</h2>
			</motion.div>
			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((element, index) => (
						<EducationCard key={index} experience={element} />
					))}
				</VerticalTimeline>
			</div>
		</WrapperComponent>
	);
};
