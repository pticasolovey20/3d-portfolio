import firstExample from "../assets/firstExample.png";
import secondExample from "../assets/secondExample.png";
import thirdExample from "../assets/thirdExample.png";
import fourthExample from "../assets/fourthExample.png";

import { IServises } from "../types/constants";

export const navigations: string[] = ["home", "about", "education", "stack", "contact"];

export const services: IServises[] = [
	{
		title: "Example 1",
		icon: firstExample,
	},
	{
		title: "Example 2",
		icon: secondExample,
	},
	{
		title: "Example 3",
		icon: thirdExample,
	},
	{
		title: "Example 4",
		icon: fourthExample,
	},
];
