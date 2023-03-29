export interface IServises {
	title: string;
	text: string[];
}

export interface IExperiences {
	title: string;
	company_name: string;
	iconBg: string;
	icon: any;
	date: string;
	points: string[];
}

export interface ITechnologies {
	name: string;
	icon: any;
}

export interface IProjects {
	name: string;
	description: string;
	tags: ITags[];
	image: any;
	source_code_link: string;
}

interface ITags {
	name: string;
	color: string;
}

export interface IContacts {
	name: string;
	link: string;
}
