import { FC } from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";
import { IServiceCard } from "../../types/props";

import { styles } from "../../styles/styles";

export const ServiceCardComponent: FC<IServiceCard> = ({
	index,
	service,
}: IServiceCard): JSX.Element => {
	return (
		<div className="xs:w-[250px] basis-[400px]">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full p-[1px] rounded-[20px] green-pink-gradient shadow-card"
			>
				<div className="h-full flex items-center flex-col py-5 px-12 rounded-[20px] bg-tertiary">
					<h3 className={`${styles.heroText} font-bold text-center select-none`}>
						{service.title}
					</h3>
					<ul className="flex flex-col gap-2 mt-3 select-none list-disc">
						{service.text.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</motion.div>
		</div>
	);
};
