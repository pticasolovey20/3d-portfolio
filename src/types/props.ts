import { ReactNode } from "react";
import { IExperiences, IServises } from "./constants";

export interface IIconSelector {
	icon: string;
	active?: string | undefined;
}

export interface IComputer {
	isMobile: boolean;
}

export interface IService {
	index: number;
	service: IServises;
}

export interface IWrapper {
	children: ReactNode;
	id: string;
}

export interface IEducation {
	experience: IExperiences;
}
