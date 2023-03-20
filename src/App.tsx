import { FC } from "react";

import { NavigationComponent } from "./components/navigation";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

export const App: FC = (): JSX.Element => {
	return (
		<div className="relative z-0 bg-primary">
			<div className="bg-home-pattern bg-cover bg-no-repeat bg-center">
				<HomePage />
				<NavigationComponent />
			</div>
			<AboutPage />
		</div>
	);
};
