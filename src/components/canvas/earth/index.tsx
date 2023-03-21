import { FC } from "react";
import { useGLTF } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";

import { CanvasComponent } from "..";

export const EarthComponent: FC = (): JSX.Element => {
	const earth = useGLTF("./planet/scene.gltf");

	const position: Vector3 = [-4, 3, 6];

	const camera = {
		fov: 45,
		near: 0.1,
		far: 200,
		position,
	};

	return (
		<CanvasComponent camera={camera} autoRotate={true}>
			<primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
		</CanvasComponent>
	);
};
