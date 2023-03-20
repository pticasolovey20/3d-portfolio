import firstExample from "../assets/firstExample.png";
import secondExample from "../assets/secondExample.png";
import thirdExample from "../assets/thirdExample.png";
import fourthExample from "../assets/fourthExample.png";

import wayup from "../assets/wayup.png";
import upwork from "../assets/upwork.png";

import { IExperiences, IServises } from "../types/constants";

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

export const experiences: IExperiences[] = [
	{
		title: "JavaScript Developer",
		company_name: "WayUp IT School",
		iconBg: "#383E56",
		icon: wayup,
		date: "Aug 2022 - Jan 2023",
		points: [
			"Studied in detail the basic concepts of JavaScript: variables, data types, conditions, loops, functions, arrays and their methods, working with objects.",
			"Learned the new JavaScript standards and TypeScript.",
			"Worked with asynchronous functions and requests to the server.",
			"Mastered React, and a state manager like Redux (Redux Toolkit)",
			"Participating in code reviews and providing constructive feedback to other students.",
		],
	},
	{
		title: "React Developer",
		company_name: "Upwork",
		iconBg: "#E6DEDD",
		icon: upwork,
		date: "Dec 2022 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Worked with the Rest API",
			"Learning new technologies to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Investigated and fixed bugs reported by users",
			"Optimized applications for maximum speed and scalability",
		],
	},
];
