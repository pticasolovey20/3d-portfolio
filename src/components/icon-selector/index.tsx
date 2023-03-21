import { FC } from "react";

import { IIconSelector } from "../../types/props";
import { styles } from "../../styles/styles";

import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TbSchool } from "react-icons/tb";
import { RiStackLine } from "react-icons/ri";
import { VscSymbolMethod } from "react-icons/vsc";
import { BiMailSend } from "react-icons/bi";
import { BsLaptop } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";

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

		case "projects":
			return <VscSymbolMethod className={active === icon ? styles.active : styles.icon} />;

		case "contact":
			return <BiMailSend className={active === icon ? styles.active : styles.icon} />;

		case "demo":
			return <BsLaptop className={styles.project} />;

		case "github":
			return <AiFillGithub className={styles.project} />;

		case "phone":
			return <BsPhone className={styles.contact} />;

		case "linkedin":
			return <SlSocialLinkedin className={styles.contact} />;

		case "git":
			return <AiFillGithub className={styles.git} />;

		default:
			return null;
	}
};
