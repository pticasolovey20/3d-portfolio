import { FC } from "react";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import { WrapperComponent } from "../components/wrapper";
import { HeadLineComponent } from "../components/headline";
import { ProjectCardComponent } from "../components/project-card";

export const ProjectsPage: FC = (): JSX.Element => {
	return (
		<WrapperComponent id="projects">
			<HeadLineComponent subText="Little more than a hobby" headText="Projects" />
			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-screen-2xl leading-[30px]  "
				>
					Following projects showcases my skills and experience through real-world
					examples of my work. Each project is briefly described with links to code
					repositories and live demos in it. It reflects my ability to solve complex
					problems, work with different technologies, and manage projects effectively.
				</motion.p>
			</div>
			<div className="mt-20 flex flex-wrap gap-[50px]">
				{projects.map((project, index) => (
					<ProjectCardComponent
						key={`project-${index}`}
						project={project}
						index={index}
					/>
				))}
			</div>
		</WrapperComponent>
	);
};
