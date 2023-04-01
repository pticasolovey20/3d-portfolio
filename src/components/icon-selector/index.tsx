import { FC } from "react";

import { IIconSelector } from "../../types/props";
import { styles } from "../../styles/styles";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TbSchool } from "react-icons/tb";
import { RiStackLine } from "react-icons/ri";
import { VscSymbolMethod } from "react-icons/vsc";
import { BiMailSend } from "react-icons/bi";

import { IoLocationSharp } from "react-icons/io5";
import { BsLaptop } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";

import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";

import { AiOutlineFilePdf } from "react-icons/ai";

export const IconSelectorComponent: FC<IIconSelector> = ({
	icon,
	active,
}: IIconSelector): JSX.Element | null => {
	switch (icon) {
		case "home":
			return <AiOutlineHome className={active === icon ? styles.active : styles.navIcon} />;

		case "about":
			return <AiOutlineUser className={active === icon ? styles.active : styles.navIcon} />;

		case "education":
			return <TbSchool className={active === icon ? styles.active : styles.navIcon} />;

		case "stack":
			return <RiStackLine className={active === icon ? styles.active : styles.navIcon} />;

		case "projects":
			return <VscSymbolMethod className={active === icon ? styles.active : styles.navIcon} />;

		case "contact":
			return <BiMailSend className={active === icon ? styles.active : styles.navIcon} />;

		// small icons

		case "location":
			return <IoLocationSharp className={styles.small} />;

		case "demo":
			return <BsLaptop className={styles.small} />;

		case "github":
			return <AiFillGithub className={styles.small} />;

		// contact icons

		case "telegram":
			return <FaTelegramPlane className={styles.contact} />;

		case "linkedin":
			return <SlSocialLinkedin className={styles.contact} />;

		case "git":
			return <AiFillGithub className={styles.contact} />;

		// control button icons

		case "right":
			return <BsFillCaretRightFill className={styles.chevron} />;

		case "left":
			return <BsFillCaretLeftFill className={styles.chevron} />;

		case "up":
			return <BsFillCaretRightFill className={styles.up} />;

		// others

		case "cv":
			return <AiOutlineFilePdf className={styles.up} />;

		default:
			return null;
	}
};
