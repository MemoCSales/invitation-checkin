import React from "react";
import { useCountDown } from "hooks/useCountdown";

interface EventHeaderProps {
	title: string
	subtitle: string
	eventDate: Date
	onButtonClick: () => void
	buttonText: string
};

interface TimeBoxProps {
	label: string
	value: number
}

export const EventHeader: React.FunctionComponent<EventHeaderProps> = ({
	title,
	subtitle,
	eventDate,
	onButtonClick,
	buttonText,
}) => {
	const [ days, hours, minutes, seconds ] = useCountDown(eventDate);

	return (
		<div className="p-8 background rounded shadow text-center max-w-x1 mx-auto">
			<h2 className="text-lg text-gray-600 mb-2">{subtitle}</h2>
			<h1 className="text-3xl font-bold mb-4">{title}</h1>
			<p className="mb-4 text-gray-500">
				Evento: { eventDate.toLocaleDateString() } {eventDate.toLocaleTimeString()}
			</p>
			<div className="flex justify-center gap-4 mb-6">
				<TimeBox label="Dias" value={days} />
				<TimeBox label="Horas" value={hours}/>
				<TimeBox label="Minutos" value={minutes}/>
				<TimeBox label="Segundos" value={seconds} />
			</div>
			<button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition" onClick={onButtonClick}>
				{buttonText}
			</button>
		</div>
	)
}


const TimeBox: React.FunctionComponent<TimeBoxProps> = ({
	label,
	value
}) => (
	<div className="flex flex-col items-center">
		<span className="text-2xl font-mono font-bold">{value.toString().padStart(2,"0")}</span>
		<span className="text-xs text-gray-500">{label}</span>
	</div>
)