import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { SubtitleComponent } from "./utils/SubtitleComponent";

export const QandAComponent = () => {
	return (
		<div className="component-container">
			<SubtitleComponent
				subtitle="Preguntas Frecuentes"
			/>
			<div className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-4xl">
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1-content"
						id="panel1-header"
					>
						<Typography
							variant="subtitle1"
							component="span"
						>
							¿Cuál es el código de vestimenta?
						</Typography>	
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>

				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1-content"
						id="panel2-header"
					>
						<Typography
							variant="subtitle1"
							component="span"
						>
							¿Cuándo necesito confirmar mi asistencia?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>

				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1-content"
						id="panel3-header"
					>
						<Typography
							variant="subtitle1"
							component="span"
						>
							¿Puedo llevar a mis hijos a la boda?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	)
}