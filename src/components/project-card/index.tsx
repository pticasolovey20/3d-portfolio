import { FC } from "react";

import { IProjectCard } from "../../types/props";
import { IconSelectorComponent } from "../icon-selector";

export const ProjectCardComponent: FC<IProjectCard> = ({ project }: IProjectCard): JSX.Element => {
	return (
		<div className="green-pink-gradient p-[1px] rounded-2xl mr-10 cursor-grab select-none">
			<div className="bg-tertiary p-5 rounded-2xl">
				<div className="relative w-full h-[230px]">
					<img
						src={project.image}
						alt={project.name}
						className="w-full h-full object-cover rounded-xl"
					/>
				</div>
				<div className="mt-2 flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<p key={tag.name} className={`text-[14px] ${tag.color}`}>
							#{tag.name.toUpperCase()}
						</p>
					))}
				</div>
				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{project.name}</h3>
					<p className="mt-2 text-secondary text-[14px] border-b-[1px] border-secondary pb-2">
						{project.description}
					</p>
					<div className="mt-1 flex justify-between text-[13px]">
						<a
							href="/#"
							target="_blank"
							className="flex gap-1 items-center text-secondary hover:text-white"
						>
							<IconSelectorComponent icon="demo" />
							<h6 className="learnmore">Live Demo</h6>
						</a>
						<a
							href="/#"
							target="_blank"
							className="flex gap-1 items-center text-secondary hover:text-white"
						>
							<IconSelectorComponent icon="github" />
							<h6 className="learnmore">Source Code</h6>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
