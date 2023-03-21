import { FC } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { IServiceCard } from "../../types/props";

export const ServiceCardComponent: FC<IServiceCard> = ({
	index,
	service,
}: IServiceCard): JSX.Element => {
	return (
		<div className="flex-auto">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
					<img
						src={service.icon}
						alt={service.title}
						className="w-16 h-16 object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold text-center">
						{service.title}
					</h3>
				</div>
			</motion.div>
		</div>
	);
};
