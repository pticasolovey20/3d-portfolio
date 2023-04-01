import { FC } from "react";

import { contacts } from "../../constants";
import { IconSelectorComponent } from "../icon-selector";

export const ContactComponent: FC = (): JSX.Element => {
	return (
		<div className="flex flex-col items-center gap-3">
			<div className="flex gap-3 pt-5">
				{contacts.map((element, index) => (
					<div
						key={index}
						className="w-12 h-12 flex items-center rounded-full green-pink-gradient p-[2px] cursor-pointer"
					>
						<a
							href={element.link}
							rel="noreferrer"
							target="_blank"
							className="text-secondary bg-[#151030] rounded-full w-full h-full flex items-center justify-center"
						>
							<IconSelectorComponent icon={element.name} />
						</a>
					</div>
				))}
			</div>
			<p className="text-[16px] text-secondary/50">+38-066-009-82-97</p>
		</div>
	);
};
