import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { LoaderComponent } from "./loader";
import { ICanvas } from "../../types/props";

export const CanvasComponent: FC<ICanvas> = ({
	camera,
	autoRotate,
	children,
}: ICanvas): JSX.Element => {
	const { fov, near, far, position } = camera;

	return (
		<Canvas
			shadows
			frameloop="demand"
			gl={{ preserveDrawingBuffer: true }}
			camera={{ fov: fov, near: near, far: far, position: position }}
		>
			<Suspense fallback={<LoaderComponent />}>
				<OrbitControls
					autoRotate={autoRotate}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				{children}
			</Suspense>
		</Canvas>
	);
};
