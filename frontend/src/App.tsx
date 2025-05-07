import React from 'react';
import { EventHeader } from './components/EventHeader'

const App = () => {
	return (
		<div>
			<EventHeader 
				title = "Save the Date!"
				subtitle = "Daniela & Guillermo"
				eventDate = { new Date ("2026-03-21T20:00:00") }
				onButtonClick = { () => alert("Thank you for confirm you assitence!") }
				buttonText = "RSVP"
			/>
		</div>
	);
};

export default App;
