import React from "react";

interface ProgramComponentProps {
	imageUrl: string
}

export const ProgramImage: React.FunctionComponent<ProgramComponentProps> = ({
	imageUrl
}) => {
	return (
		<div
			className="image-container mx-auto my-4 w-full aspect-[16/9] bg-contain bg-center bg-no-repeat"
			style={{backgroundImage: `url(${imageUrl})`}}
			></div>
	)
}