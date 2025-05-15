import React from 'react';
import { EventHeader } from './components/EventHeader'
import { TopMenu } from 'components/TopMenu';
import { EventLocations } from "./components/EventLocations";
import { MapComponent } from "./components/MapComponent";
import { VenueInfoComponent } from 'components/VenueInfoComponent';


const App = () => {
	return (
		<div>
			<TopMenu />
			<EventHeader 
				title = "Save the Date!"
				subtitle = "Daniela & Guillermo"
				eventDate = { new Date ("2026-03-21T20:00:00") }
				onButtonClick = { () => alert("Thank you for confirm you assitence!") }
				buttonText = "RSVP"
			/>
			<EventLocations
				ceremony="13:00 horas"
				party="15:00 horas"
			/>
			<MapComponent />
			<VenueInfoComponent />
		</div>
	);
};

export default App;
