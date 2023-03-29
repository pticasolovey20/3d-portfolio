import { FC } from "react";

import { NavigationComponent } from "./components/navigation";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { EducationPage } from "./pages/EducationPage";
import { TechnologiesPage } from "./pages/TechnologiesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { StarsComponent } from "./components/canvas/stars";
import { MarqueeComponent } from "./components/marquee";

export const App: FC = (): JSX.Element => {
	return (
		<div className="relative z-0 bg-primary">
			<div className="bg-home-pattern bg-cover bg-no-repeat bg-center">
				<HomePage />
				<NavigationComponent />
			</div>
			<AboutPage />
			<MarqueeComponent />
			<EducationPage />
			<TechnologiesPage />
			<ProjectsPage />
			<div className="realtive z-0">
				<MarqueeComponent />
				<ContactPage />
				<StarsComponent />
			</div>
		</div>
	);
};
