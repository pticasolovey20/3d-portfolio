import { FC } from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles/styles";
import { staggerContainer } from "../../utils/motion";
import { IWrapper } from "../../types/props";

export const WrapperComponent: FC<IWrapper> = ({ children, id }: IWrapper): JSX.Element => {
	return (
		<motion.section
			variants={staggerContainer()}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: true, amount: 0.25 }}
			className={`${styles.padding} max-w-screen-2xl mx-auto relative z-0`}
			id={id}
		>
			{children}
		</motion.section>
	);
};
