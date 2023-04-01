import { FC } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { WrapperComponent } from "../components/wrapper";
import { EducationCardComponent } from "../components/education-card";
import { HeadLineComponent } from "../components/headline";

import { experiences } from "../constants";
import { CvComponent } from "../components/cv";

export const EducationPage: FC = (): JSX.Element => {
	return (
		<WrapperComponent id="education">
			<HeadLineComponent
				subText="What i have done so far"
				headText="Education and Experience"
			/>
			<div className="flex flex-col mt-20">
				<VerticalTimeline>
					{experiences.map((element, index) => (
						<EducationCardComponent key={index} experience={element} />
					))}
				</VerticalTimeline>
			</div>
			<div className="flex justify-end mt-[20px]">
				<CvComponent />
			</div>
		</WrapperComponent>
	);
};
