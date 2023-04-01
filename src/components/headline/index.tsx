import { FC } from "react";
import { motion } from "framer-motion";

import { textVariant } from "../../utils/motion";
import { IHeadLine } from "../../types/props";

import { styles } from "../../styles/styles";

export const HeadLineComponent: FC<IHeadLine> = ({ subText, headText }: IHeadLine): JSX.Element => {
	return (
		<motion.div variants={textVariant()}>
			<p className={styles.sectionSubText}>{subText}</p>
			<h2 className={styles.sectionHeadText}>{headText}</h2>
		</motion.div>
	);
};
