import { FC } from "react";
import { Vector3 } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import { IComputer } from "../../../types/props";
import { CanvasComponent } from "..";

export const ComputerComponent: FC<IComputer> = ({ isMobile }: IComputer): JSX.Element => {
	const computer = useGLTF("./desktop_pc/scene.gltf");

	const position: Vector3 = [20, 3, 5];

	const camera = {
		position,
		fov: 25,
	};

	return (
		<CanvasComponent camera={camera} autoRotate={false}>
			<mesh>
				<hemisphereLight intensity={0.15} groundColor="black" />
				<pointLight intensity={1} />
				<spotLight
					position={[-20, 50, 10]}
					angle={0.12}
					penumbra={1}
					intensity={1}
					castShadow
					shadow-mapSize={1024}
				/>
				<primitive
					object={computer.scene}
					scale={isMobile ? 0.7 : 0.75}
					position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
					rotation={[-0.01, -0.02, -0.01]}
				/>
			</mesh>
		</CanvasComponent>
	);
};
