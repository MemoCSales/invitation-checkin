import React from "react";

interface ProgramRowProps {
	hour: string
	eventName: string
}

export const ProgramRow: React.FunctionComponent<ProgramRowProps> = ({
	hour,
	eventName
}) => {
	return (
		<div className="flex flex-row">
			<div className="basis-1/3 text-right font-bold">{hour}</div>
			<div className="basis-2/3">{eventName}</div>
		</div>
	)
}
