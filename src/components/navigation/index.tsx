import { FC, useState, useRef, useEffect } from "react";

import { navigations } from "../../constants";
import { IconSelectorComponent } from "../icon-selector";

export const NavigationComponent: FC = (): JSX.Element => {
	const [active, setActive] = useState<string>();
	const [open, setOpen] = useState<boolean>(false);
	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, []);

	return (
		<div
			ref={navRef}
			className="fixed top-1/2 left-[-10px] transform -translate-y-1/2 -translate-x-100px p-5 z-10"
		>
			{open ? (
				<nav className="flex flex-col justify-center items-center gap-5 p-3 bg-[#915EFF]/10 rounded-[50px]">
					{navigations.map((link, index) => (
						<a key={index} href={`#${link}`} onClick={() => setActive(link)}>
							<IconSelectorComponent icon={link} active={active} />
						</a>
					))}
				</nav>
			) : (
				<div className="fixed top-1/4 left-[10px]">
					<div className="text-white" onClick={() => setOpen(true)}>
						<IconSelectorComponent icon="right" />
					</div>
				</div>
			)}
		</div>
	);
};
