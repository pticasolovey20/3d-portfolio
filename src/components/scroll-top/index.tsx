import { FC, useState, useEffect } from "react";
import { IconSelectorComponent } from "../icon-selector";

export const ScrollTopComponent: FC = (): JSX.Element => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 200) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<div
			className={`fixed flex flex-col items-center bottom-4 right-4 transition-all duration-300 ${
				isVisible ? "opacity-100" : "opacity-0"
			} cursor-pointer hover:text-purple-500`}
			onClick={handleClick}
		>
			<button className="rotate-[-90deg]">
				<IconSelectorComponent icon="up" />
			</button>
			<span className="font-semibold text-[18px]">UP</span>
		</div>
	);
};
