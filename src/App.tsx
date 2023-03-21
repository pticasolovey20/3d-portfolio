import { FC } from "react";

import { NavigationComponent } from "./components/navigation";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { EducationPage } from "./pages/EducationPage";
import { TechnologiesPage } from "./pages/TechnologiesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { StarsComponent } from "./components/canvas/stars";

export const App: FC = (): JSX.Element => {
	return (
		<div className="relative z-0 bg-primary">
			<div className="bg-home-pattern bg-cover bg-no-repeat bg-center">
				<HomePage />
				<NavigationComponent />
			</div>
			<AboutPage />
			<EducationPage />
			<TechnologiesPage />
			<ProjectsPage />
			<div className="realtive z-0">
				<ContactPage />
				<StarsComponent />
			</div>
		</div>
	);
};
