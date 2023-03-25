import { FC, useState } from "react";

import { navigations } from "../../constants";
import { IconSelectorComponent } from "../icon-selector";

export const NavigationComponent: FC = (): JSX.Element => {
	const [active, setActive] = useState<string>();
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className="fixed top-1/2 left-[-10px] transform -translate-y-1/2 -translate-x-100px p-5">
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
