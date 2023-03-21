import { FC } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { WrapperComponent } from "../components/wrapper";
import { experiences } from "../constants";
import { EducationCardComponent } from "../components/education-card";
import { HeadLineComponent } from "../components/headline";

export const EducationPage: FC = (): JSX.Element => {
	return (
		<WrapperComponent id="education">
			<HeadLineComponent
				subText="What i have done so far"
				headText="Education and Experience"
			/>
			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((element, index) => (
						<EducationCardComponent key={index} experience={element} />
					))}
				</VerticalTimeline>
			</div>
		</WrapperComponent>
	);
};
