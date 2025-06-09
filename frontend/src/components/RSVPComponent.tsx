import React from "react";
import { SubtitleComponent } from "./utils/SubtitleComponent";
// import { ConfirmComponent } from "./ConfirmComponent";
import { useNavigate } from "react-router";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Card, CardContent, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface RSVPComponentProps {
	buttonText: string
}

export const RSVPComponent: React.FunctionComponent<RSVPComponentProps> = ({
	buttonText
}) => {
	const [showPassword, setShowPassword] = React.useState(false);
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};
	const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	}
	const navigate = useNavigate();

	const isFormValid = username.trim() !== '' && password.trim() !== '';

	return (
		<div className="component-container" id="RSVP">
			<SubtitleComponent
				subtitle="Confirma tu asistencia"
				comment="Ingresa tu usuario y contraseña"
			/>
			<Card sx={{ 
				maxWidth: 350, 
				width: '90%',
				margin: 'auto',
				boxShadow: 3
			}}>
				<CardContent sx={{ padding: {xs: 2, sm: 3 }}}>
					<Stack spacing={2} alignItems="center">
						<FormControl
						fullWidth
						sx={{ maxWidth: {xs: '100%', sm: '90%' } }}
						variant="outlined">
							<InputLabel htmlFor="outlined-adornment-username">Usuario</InputLabel>
							<OutlinedInput
								id="outlined-adornment-username"
								aria-describedby="outlined-username-helper-text"
								inputProps={{
									'aria-label': 'username',
								}}
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								label="Usuario"
							/>
						</FormControl>
						<FormControl 
						fullWidth
						sx={{ maxWidth: { xs: '100%', sm: '90%' } }}
						variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={showPassword ? 'text' : 'password'}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label={
												showPassword ? 'hide the password' : 'display the password'
											}
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											onMouseUp={handleMouseUpPassword}
											edge="end"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Contraseña"
							/>
						</FormControl>
						<Button
							variant="contained"
							disabled={!isFormValid}
							sx={{ mt: 2 }}
							onClick={() => navigate("/login")}>
							{buttonText}
						</Button>
					</Stack>
				</CardContent>
			</Card>
		</div>
	)
}