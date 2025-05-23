import React from 'react';
import { EventHeader } from './components/EventHeader'
import { TopMenu } from 'components/TopMenu';
import { EventLocations } from "./components/EventLocations";
import { MapComponent } from "./components/MapComponent";
import { VenueInfoComponent } from 'components/VenueInfoComponent';
import { ProgramComponent } from 'components/ProgramComponent';
import { RSVPComponent } from 'components/RSVPComponent';
import { QandAComponent } from 'components/QandAComponent';
import BackToTop from 'components/BackToTopComponent';


const App = () => {
	return (
		<div>
			<div id="back-to-top-anchor"></div>
			<TopMenu />
			<EventHeader 
				title = "Save the Date!"
				subtitle = "Daniela & Guillermo"
				eventDate = { new Date ("2026-03-21T20:00:00") }
				onButtonClick = { () => {
					document?.getElementById("RSVP")?.scrollIntoView({ behavior: "smooth" })
				}}
				buttonText = "RSVP"
			/>
			<EventLocations
				ceremony="13:00 horas"
				party="15:00 horas"
			/>
			<MapComponent />
			<VenueInfoComponent />
			<ProgramComponent />
			<RSVPComponent 
				onButtonClick={ () => alert("Click!")}
				buttonText='Ingresar'/>
			<QandAComponent />
			<BackToTop />
		</div>
	);
};

export default App;
