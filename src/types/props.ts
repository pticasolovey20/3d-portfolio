import { Vector3 } from "@react-three/fiber";
import { ReactNode } from "react";
import { Responsive } from "react-alice-carousel";

import { IExperiences, IProjects, IServises } from "./constants";

export interface IIconSelector {
	icon: string;
	active?: string | undefined;
}

export interface IComputer {
	isMobile: boolean;
}

export interface IHeadLine {
	subText?: string;
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
	project: IProjects;
}

export interface ICanvas {
	camera: ICamera;
	autoRotate: boolean;
	children: ReactNode;
}

interface ICamera {
	fov: number;
	near?: number;
	far?: number;
	position: Vector3;
}

export interface IInput {
	field: string;
	type?: string;
	name: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	placeholder: string;
}

export interface ISlider {
	disableButtonsControls?: boolean;
	autoPlayInterval?: number;
	autoPlay?: boolean;
	items: JSX.Element[];
	responsive: Responsive;
}

export interface IMarquee {
	text: string;
}
