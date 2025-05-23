import React from 'react';
import { EventHeader } from './EventHeader'
import { TopMenu } from './TopMenu';
import { EventLocations } from "./EventLocations";
import { MapComponent } from "./MapComponent";
import { VenueInfoComponent } from './VenueInfoComponent';
import { ProgramComponent } from './ProgramComponent';
import { RSVPComponent } from './RSVPComponent';
import { QandAComponent } from './QandAComponent';
import BackToTop from './BackToTopComponent';
import { Outlet } from "react-router";

export const LayoutComponent = () => {
	return (
		<div>
			<div id="back-to-top-anchor"></div>
			<TopMenu />
			<EventHeader
				title="Save the Date!"
				subtitle="Daniela & Guillermo"
				eventDate={new Date("2026-03-21T20:00:00")}
				onButtonClick={() => {
					document?.getElementById("RSVP")?.scrollIntoView({ behavior: "smooth" })
				}}
				buttonText="RSVP"
			/>
			<EventLocations
				ceremony="13:00 horas"
				party="15:00 horas"
			/>
			<MapComponent />
			<VenueInfoComponent />
			<ProgramComponent />
			<RSVPComponent
				buttonText='Ingresar' />
			<QandAComponent />
			<BackToTop />
			<Outlet />
		</div>
	)
}