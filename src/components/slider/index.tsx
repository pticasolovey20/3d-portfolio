import { FC } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { ISlider } from "../../types/props";

export const SliderComponent: FC<ISlider> = ({
	disableButtonsControls,
	autoPlayInterval,
	autoPlay,
	items,
	responsive,
}: ISlider): JSX.Element => {
	return (
		<div className="mt-20">
			<AliceCarousel
				infinite
				disableButtonsControls={disableButtonsControls}
				disableDotsControls
				mouseTracking
				autoPlay={autoPlay}
				autoPlayInterval={autoPlayInterval}
				items={items}
				responsive={responsive}
			/>
		</div>
	);
};
