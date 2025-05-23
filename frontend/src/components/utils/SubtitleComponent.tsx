import React from "react";

interface SubtitleProps {
	subtitle: string
	comment?: string
}

export const SubtitleComponent: React.FunctionComponent<SubtitleProps> = ({
	subtitle,
	comment
}) => {
	return (
		<>
			<div 
				className="header-subtitle text-4xl text-black font-serif font-bold capitalize">
					{subtitle}
			</div>
			<p>{comment}</p>
			<hr className="divider"/>
		</>
	)
}