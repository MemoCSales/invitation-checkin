import { Fade, useScrollTrigger, Box, Fab } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from "react";

interface Props {
	children?: React.ReactElement;
}

function ScrollTop(props: Props) {
	const { children } = props;

	const trigger =useScrollTrigger({
		target: typeof window !== "undefined" ? window : undefined,
		disableHysteresis: true,
		threshold: 100
	});

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = (
			(event.target as HTMLDivElement).ownerDocument || document
		).querySelector('#back-to-top-anchor');

		if (anchor) {
			anchor.scrollIntoView({
				block: 'center',
				behavior: "smooth"
			});
		}
	};

	return (
		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{ position: 'fixed', bottom: 16, right: 16 }}
			>
				{children}
			</Box>
		</Fade>
	);
}

export default function BackToTop(props: Props) {
	return (
		<ScrollTop {...props}>
			<Fab>
				<KeyboardArrowUpIcon />
			</Fab>
		</ScrollTop>
	)
}