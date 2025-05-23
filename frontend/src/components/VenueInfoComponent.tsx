import React from "react";
import { SubtitleComponent } from "./utils/SubtitleComponent";
import { VenueInfoItem } from "./utils/VenueInfoItemComponent";

// Temporal
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est lorem, eleifend dignissim enim sed, maximus viverra lectus. Vestibulum scelerisque tincidunt urna."

export const VenueInfoComponent = () => {
	return (
		<div className="component-container">
			<SubtitleComponent
				subtitle="Información del Lugar"
				comment="Cosas que necesitas saber"
			/>
			<div className="grid-event-info">
				<VenueInfoItem 
					imageUrl="/images/accommodation_1.jpg"
					title="Viaje"
					description={loremIpsum}
				/>
				<VenueInfoItem
					imageUrl="/images/hospedaje.jpg"
					title="Viaje"
					description={loremIpsum}
				/>
				<VenueInfoItem
					imageUrl="/images/activities.jpg"
					title="Viaje"
					description={loremIpsum}
				/>

			</div>
		</div>
	)
}
