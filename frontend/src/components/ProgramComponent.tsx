import React from "react";
import { ProgramRow } from "./utils/ProgramRowComponent";
import { ProgramImage } from "./utils/ProgramImageComponent";
import { SubtitleComponent } from "./utils/SubtitleComponent";

export const ProgramComponent = () => {
	return (
		<div className="component-container">
			<SubtitleComponent
				subtitle="Programa"
				comment="21 de marzo, 2026"
			/>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-3">
				<ProgramImage
					imageUrl="/images/balcony.jpg"
				/>
				<div className="md:col-span-2 flex flex-col space-y-4">
					<div className="flex flex-col gap-y-8">
						<ProgramRow
							hour="4:30 p.m."
							eventName="Ceremonia"
						/>
						<ProgramRow
							hour="5:30 p.m."
							eventName="Peda numero 1"
						/>
						<ProgramRow
							hour="6:30 p.m."
							eventName="Cena"
						/>
						<ProgramRow
							hour="7:30 p.m."
							eventName="Fieston con perreo"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}