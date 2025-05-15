import React from "react";

interface EventLocationsProps {
	ceremony: string
	party: string
}

export const EventLocations: React.FunctionComponent<EventLocationsProps> = ({
	ceremony,
	party
}) => {
	return (
		<div className="p-4 m-8 bg-white text-center font-serif">
			<div className="header-subtitle text-4xl text-black font-serif font-bold">Día y Lugar</div>
			<hr className="divider mt-6 mb-6"/>
			<div>
				<div className="salon-icon" aria-label="Location Icon"></div>
				<h3 className="text-2xl font-bold mb-2 mt-2">Salón Las Ostias</h3>
			</div>
			<div className="grid-event">
				<div>
					<div className="ceremony-icon" aria-label="Ceremony Icon"></div>
					<h3 className="text-2xl font-bold mb-2">Ceremonia</h3>
					<p className="mb-4">{ceremony}</p>
				</div>
				<div>
					<div className="party-icon" aria-label="Party Icon"></div>
					<h3 className="text-2xl font-bold mb-2">Fiesta</h3>
					<p className="mb-4">{party}</p>
				</div>
			</div>
		</div>
	);
};