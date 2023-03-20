import { FC } from "react";
import { IIconSelector } from "../../types/props";
import { styles } from "../../styles/styles";

import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TbSchool } from "react-icons/tb";
import { RiStackLine } from "react-icons/ri";
import { BiMailSend } from "react-icons/bi";

export const IconSelectorComponent: FC<IIconSelector> = ({
	icon,
	active,
}: IIconSelector): JSX.Element | null => {
	switch (icon) {
		case "chevron":
			return <AiOutlineRight className={styles.chevron} />;

		case "home":
			return <AiOutlineHome className={active === icon ? styles.active : styles.icon} />;

		case "about":
			return <AiOutlineUser className={active === icon ? styles.active : styles.icon} />;

		case "education":
			return <TbSchool className={active === icon ? styles.active : styles.icon} />;

		case "stack":
			return <RiStackLine className={active === icon ? styles.active : styles.icon} />;

		case "contact":
			return <BiMailSend className={active === icon ? styles.active : styles.icon} />;

		default:
			return null;
	}
};
