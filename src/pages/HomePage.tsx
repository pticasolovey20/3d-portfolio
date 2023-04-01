import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ComputerComponent } from "../components/canvas/cumputer";
import { IconSelectorComponent } from "../components/icon-selector";

import { styles } from "../styles/styles";

export const HomePage: FC = (): JSX.Element => {
	const [isModile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 500px)");

		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event: any) => setIsMobile(event.mathces);
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
	}, []);

	return (
		<section className={`relative w-full h-screen mx-auto`} id="home">
			<div
				className={`absolute inset-0 top-[120px] max-w-screen-2xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915EFF]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm <span className="text-[#915EFF]">Dmytro</span>
					</h1>
					<p className="flex items-center gap-2 text-[15px]">
						<IconSelectorComponent icon="location" />
						Ukraine. Poltava
					</p>
					<p className={`${styles.heroText} mt-2`}>FRONT-END DEVELOPER</p>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						I develop user <br className="sm:block hidden" />
						interfaces and web applications
					</p>
				</div>
			</div>
			<ComputerComponent isMobile={isModile} />
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] flex justify-center items-start p-[5px] rounded-3xl border-4 border-secondary">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-[14px] h-[14px] rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};
