import React from "react";
import { SubtitleComponent } from "./utils/SubtitleComponent";
// import { ConfirmComponent } from "./ConfirmComponent";
import { useNavigate } from "react-router";

interface RSVPComponentProps {
	buttonText: string
}

export const RSVPComponent: React.FunctionComponent<RSVPComponentProps> = ({
	buttonText
}) => {

	// const [showComponent, setShowComponent] = useState(false)
	const navigate = useNavigate();
	return (
		<div className="component-container" id="RSVP">
			<SubtitleComponent
				subtitle="Confirma tu asistencia"
				comment="Ingresa tu contraseña personal"
			/>
			<div className="relative mx-auto max-w-sm m-2">
				<input
					type="password"
					id="hs-floating-input-password-value"
					className="peer p-4 block w-full border-2 border-gray-300 rounded-lg sm:text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2"
					placeholder="********"
				/>
				<label
					htmlFor="hs-floating-input-password-value"
					className="absolute top-0 start-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:translate-x-0.5 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-gray-500 text-gray-500"
				>
					Contraseña
				</label>
			</div>
			<button className="header-button m-2" onClick={() => navigate("/confirm")}>
				{buttonText}
			</button>
		</div>
	)
}