import { ReactNode } from "react";

import { IExperiences, IProjects, IServises } from "./constants";

export interface IIconSelector {
	icon: string;
	active?: string | undefined;
}

export interface IComputer {
	isMobile: boolean;
}

export interface IHeadLine {
	subText: string;
	headText: string;
}

export interface IServiceCard {
	index: number;
	service: IServises;
}

export interface IWrapper {
	children: ReactNode;
	id: string;
}

export interface IEducationCard {
	experience: IExperiences;
}

export interface IProjectCard {
	index: number;
	project: IProjects;
}
