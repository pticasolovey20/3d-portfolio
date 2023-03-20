import { FC } from "react";
import { IIconSelector } from "../../types/props";
import { styles } from "../../styles/styles";

import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";

export const IconSelectorComponent: FC<IIconSelector> = ({ icon, active }: IIconSelector): JSX.Element | null => {
	switch (icon) {
		case "chevron":
			return <AiOutlineRight className={styles.chevron} />;

		case "home":
			return <AiOutlineHome className={active === icon ? styles.active : styles.icon} color="white" />;

		case "about":
			return <AiOutlineUser className={active === icon ? styles.active : styles.icon} />;

		case "skills":
			return <AiOutlineBulb className={active === icon ? styles.active : styles.icon} />;

		case "contact":
			return <AiOutlineMessage className={active === icon ? styles.active : styles.icon} />;

		default:
			return null;
	}
};
