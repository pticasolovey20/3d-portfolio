import { FC } from "react";
import $ from "jquery";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { technologies } from "../constants";
import { WrapperComponent } from "../components/wrapper";
import { HeadLineComponent } from "../components/headline";

const body = $("body");

if (body) {
	const offsetTop = body.offsetTop;
	$(window).on("scroll", function (this: Window) {
		const windowHeight = $(this).height();
		const scrollTop = $(this).scrollTop();
		if (scrollTop + windowHeight > offsetTop) {
			$().each(function (this: Window) {
				$(this).animate(
					{
						width: $(this).attr("data-percent"),
					},
					2000
				);
			});
		}
	});
}

export const TechnologiesPage: FC = (): JSX.Element => {
	const responsive = {
		360: {
			items: 2,
		},
		540: {
			items: 3,
		},
		640: {
			items: 4,
		},
		768: {
			items: 4,
		},
		1024: {
			items: 5,
		},
		1280: {
			items: 6,
		},
		1536: {
			items: 9,
		},
	};

	const items = technologies.map((tech) => {
		return (
			<div key={tech.name} className="h-28 w-28">
				<img src={tech.icon} alt={tech.name} className="flex justify-center items-center" />
			</div>
		);
	});

	return (
		<WrapperComponent id="stack">
			<HeadLineComponent subText="Technologies that I own" headText="Technology Skills" />
			<div className="mt-20">
				<AliceCarousel
					infinite
					autoPlay
					disableButtonsControls
					disableDotsControls
					mouseTracking
					autoPlayInterval={750}
					items={items}
					responsive={responsive}
				/>
			</div>
		</WrapperComponent>
	);
};
