import { ReactNode } from "react";
import { IServises } from "./constants";

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
