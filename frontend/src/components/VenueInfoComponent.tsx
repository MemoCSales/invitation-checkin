import React from "react";

// Temporal
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est lorem, eleifend dignissim enim sed, maximus viverra lectus. Vestibulum scelerisque tincidunt urna."

export const VenueInfoComponent = () => {
	return (
		<div className="p-4 m-8 bg-white  text-center font-serif">
			<div className="header-subtitle capitalize text-3xl text-black font-serif font-bold">
				Información del Lugar
			</div>
			<p>Cosas que necesitas saber</p>
			<hr className="divider mt-6 mb-6"/>
			<div className="grid-event-info">
				<div>
					<div className="image-container mx-auto my-4 h-64 w-full mask-[url(/images/accommodation_1.jpg)] bg-[url(/images/accommodation_1.jpg)] bg-cover bg-center"></div>
					<h3 className="text-2xl font-bold mb-2">Viaje</h3>
					<p className="mb-4">{loremIpsum}</p>
				</div>
				<div>
					<div className="image-container mx-auto my-4 h-64 w-full mask-[url(/images/hospedaje.jpg)] bg-[url(/images/hospedaje.jpg)] bg-cover bg-center"></div>
					<h3 className="text-2xl font-bold mb-2">Hospedaje</h3>
					<p className="mb-4">{loremIpsum}</p>
				</div>
				<div>
					<div className="image-container mx-auto my-4 h-64 w-full mask-[url(/images/activities.jpg)] bg-[url(/images/activities.jpg)] bg-cover bg-center"></div>
					<h3 className="text-2xl font-bold mb-2">Actividades</h3>
					<p className="mb-4">{loremIpsum}</p>
				</div>

			</div>
		</div>
	)
}
