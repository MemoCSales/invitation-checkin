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
		<div className="event-locations p-4 mt-8 bg-white shadow text-center">
			<div>
				<h3 className="text-2xl font-bold mb-2">Ceremonia</h3>
				<p className="mb-4">{ceremony}</p>
			</div>
			<div>
				<h3 className="text-2xl font-bold mb-2">Fiesta</h3>
				<p className="mb-4">{party}</p>
			</div>
		</div>
	);
};