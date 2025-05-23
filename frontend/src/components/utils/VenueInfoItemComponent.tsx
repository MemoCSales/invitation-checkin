import React from "react";

interface VenueInfoItemProps {
	imageUrl: string
	title: string
	description: string
}

export const VenueInfoItem: React.FunctionComponent<VenueInfoItemProps> = ({
	imageUrl,
	title,
	description
}) => {
	return (
		<div>
			<div
				className="image-container mx-auto my-4 h-64 w-full bg-cover bg-center"
				style={{backgroundImage: `url(${imageUrl})`}}
			></div>
			<h3 className="text-2xl font-bold mb-2">{title}</h3>
			<p className="mb-4">{description}</p>
		</div>
	)
}