import React, { FC } from "react";
import Marquee from "react-fast-marquee";
import { styles } from "../../styles/styles";
import { IMarquee } from "../../types/props";

const MarqueeItem: FC<IMarquee> = ({ text }: IMarquee): JSX.Element => {
	return <div className={`${styles.marqueeText} select-none`}>{text}</div>;
};

export const MarqueeComponent: React.FC = (): JSX.Element => {
	const array: number[] = [1, 2, 3, 4, 5];

	return (
		<div className="relative h-[140px] overflow-hidden bg-[#1d1836] hover:cursor-pointer">
			<Marquee
				speed={120}
				gradient={false}
				className="absolute h-[100%] flex items-center uppercase"
			>
				{array.map((item) => (
					<MarqueeItem text="get in touch" key={item} />
				))}
			</Marquee>
		</div>
	);
};
