import React from 'react';
import { EventHeader } from './components/EventHeader'
import { TopMenu } from 'components/TopMenu';
import { EventLocations } from "./components/EventLocations";


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
				ceremony="PlaceHolder Text"
				party="PlaceHoder Text for the party"
			/>
		</div>
	);
};

export default App;
