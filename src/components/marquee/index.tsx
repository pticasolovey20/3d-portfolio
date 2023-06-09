import React, { FC } from "react";
import Marquee from "react-fast-marquee";

import { IMarquee } from "../../types/props";

import { styles } from "../../styles/styles";

const MarqueeItem: FC<IMarquee> = ({ text }: IMarquee): JSX.Element => {
	return <div className={`${styles.marqueeText} select-none`}>{text}</div>;
};

export const MarqueeComponent: React.FC = (): JSX.Element => {
	const array: number[] = [1, 2, 3, 4, 5];

	return (
		<div className="relative sm:h-[120px] xs:h-[100px] h-[140px] overflow-hidden bg-[#1d1836] hover:cursor-pointer">
			<a href="#contact">
				<Marquee
					speed={120}
					gradient={false}
					className="absolute h-[100%] flex items-center uppercase"
				>
					{array.map((item) => (
						<MarqueeItem text="get in touch" key={item} />
					))}
				</Marquee>
			</a>
		</div>
	);
};
