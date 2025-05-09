import React, { useState } from "react";
import { APIProvider, Map, AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";

const API_KEY = 
	import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? (process.env.VITE_GOOGLE_MAPS_API_KEY as string);

const mapStyle = {
	height: "100%",
	width: "100%"
}

const center = {
	lat: 56.149888,
	lng: 10.197981
};

export const MapComponent: React.FunctionComponent = () => {
	const [infoOpen, setInfoOpen] = useState(false);
	const [markerRef, marker] = useAdvancedMarkerRef();

	return (
		<APIProvider apiKey={API_KEY} libraries={['marker']}>
			<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-4">
				<div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
					<Map
						mapId="map-component"
						defaultCenter={center}
						defaultZoom={15} 
						style={mapStyle}
						gestureHandling={'greedy'}
					>
					<AdvancedMarker 
						ref={markerRef}
						position={center}
						onClick={() => setInfoOpen(true)}
					/>
					{infoOpen && (
						<InfoWindow
							anchor={marker}
							onClose={() => setInfoOpen(false)}
						>
								<div className="w-auto inline-block p-4">
								<h2 className="font-bold text-m mb1">
									Hotel Oasia Aarhus
								</h2><br />
								<p>Kriegersvej 27, 31</p>
								<p>8000 Aarhus Centrum</p>
								<p>Dinamarca</p>
									<a className="text-blue-500 hover:underline" href="https://www.google.com/maps/place/Hotel+Oasia+Aarhus/@56.149888,10.197981,16z/data=!4m20!1m10!3m9!1s0x464c3f8da5dd11df:0xa18b471bbc487377!2sHotel+Oasia+Aarhus!5m2!4m1!1i2!8m2!3d56.149885!4d10.2005559!16s%2Fg%2F1v8h_0kr!3m8!1s0x464c3f8da5dd11df:0xa18b471bbc487377!5m2!4m1!1i2!8m2!3d56.149885!4d10.2005559!16s%2Fg%2F1v8h_0kr?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Visit on Google Maps</a>
							</div>
						</InfoWindow>
					)}
					</Map>
				</div>
			</div>
		</APIProvider>
	)
}