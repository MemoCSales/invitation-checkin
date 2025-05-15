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
		<div className="p-8 -mt-10 background-color background shadow text-center mx-auto">
			<h2 className="header-subtitle">{subtitle}</h2>
			<h1 className="header-title">{title}</h1>
			<p className="header-details">
				Evento: { eventDate.toLocaleDateString() } {eventDate.toLocaleTimeString()}
			</p>
			<div className="header-countdown">
				<TimeBox label="Dias" value={days} />
				<TimeBox label="Horas" value={hours}/>
				<TimeBox label="Minutos" value={minutes}/>
				<TimeBox label="Segundos" value={seconds} />
			</div>
			<button className="header-button" onClick={onButtonClick}>
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
		<span className="text-2xl font-serif font-bold">{value.toString().padStart(2,"0")}</span>
		<span className="text-medium font-serif text-gray700">{label}</span>
	</div>
)