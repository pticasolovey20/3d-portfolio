import { FC } from "react";

import { code } from "../../assets";

export const ImageComponent: FC = (): JSX.Element => {
	return (
		<div className="w-full">
			<img className="rounded-2xl shadow-2xl" src={code} alt="code" />
		</div>
	);
};
