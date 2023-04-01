import { FC } from "react";
import { motion } from "framer-motion";

import { WrapperComponent } from "../components/wrapper";
import { HeadLineComponent } from "../components/headline";
import { ProjectCardComponent } from "../components/project-card";
import { SliderComponent } from "../components/slider";

import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

export const ProjectsPage: FC = (): JSX.Element => {
	const responsive = {
		540: {
			items: 1,
		},
		820: {
			items: 2,
		},
		1200: {
			items: 3,
		},
	};

	const items = projects.map((project, index) => {
		return <ProjectCardComponent key={`project-${index}`} project={project} />;
	});

	return (
		<WrapperComponent id="projects">
			<HeadLineComponent subText="Little more than a hobby" headText="Projects" />
			<div className="flex w-full">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="max-w-screen-2xl text-secondary text-[17px] leading-[30px] mt-3"
				>
					Following projects showcases my skills and experience through real-world
					examples of my work. Each project is briefly described with links to code
					repositories and live demos in it. It reflects my ability to solve complex
					problems, work with different technologies, and manage projects effectively.
				</motion.p>
			</div>
			<SliderComponent disableButtonsControls={false} items={items} responsive={responsive} />
		</WrapperComponent>
	);
};
