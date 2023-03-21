import {
	firstExample,
	secondExample,
	thirdExample,
	fourthExample,
	wayup,
	upwork,
	html,
	css,
	javascript,
	typescript,
	reactjs,
	redux,
	tailwind,
	nodejs,
	git,
	figma,
	project,
} from "../assets";

import { IExperiences, IProjects, IServises, ITechnologies } from "../types/constants";

export const navigations: string[] = ["home", "about", "education", "stack", "projects", "contact"];

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

export const technologies: ITechnologies[] = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
];

export const projects: IProjects[] = [
	{
		name: "Project 1",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: project,
		source_code_link: "https://github.com/",
	},
	{
		name: "Project 2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: project,
		source_code_link: "https://github.com/",
	},
	{
		name: "Project 3",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: project,
		source_code_link: "https://github.com/",
	},
];
