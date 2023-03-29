import { FC } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { ISlider } from "../../types/props";
import { IconSelectorComponent } from "../icon-selector";

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
				renderPrevButton={() => (
					<button className="absolute left-[435px] top-1/2">
						<IconSelectorComponent icon="left" />
					</button>
				)}
				renderNextButton={() => (
					<button className="absolute right-[475px] top-1/2">
						<IconSelectorComponent icon="right" />
					</button>
				)}
			/>
		</div>
	);
};
