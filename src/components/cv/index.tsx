import { FC } from "react";
import { IconSelectorComponent } from "../icon-selector";

export const CvComponent: FC = (): JSX.Element => {
	return (
		<a
			href="https://drive.google.com/file/d/1-dtk-uwG8m5ZpD_QwSIDepcpkDSwK1yx/view?usp=sharing"
			target="_blank"
			rel="noreferrer"
			className="w-[60px] h-[60px] flex items-center justify-center text-[#d4bc22] border-[#00cea8] border-[3px] rounded-full border cursor-pointer"
		>
			<IconSelectorComponent icon="cv" />
		</a>
	);
};
