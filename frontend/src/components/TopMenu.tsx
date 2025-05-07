import React, { useState, useEffect } from "react";

export const TopMenu: React.FunctionComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [atTop, setAtTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			setAtTop(window.scrollY === 0);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll;

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={`nav-bar ${atTop ? 'shadow-none' : 'shadow-md'}`}>
			<div className="nav-container">
				<div className="text-white text-xl font-bold">
					Daniela & Guillermo
				</div>
				<button
				className="text-black md:hidden"
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle menu"
				>
					Menu
				</button>
				<ul className={`md:flex md:items-center md:space-x-6 text-black ${isOpen ? 'block' : 'hidden'}`}>
					<li><a href="#" className="nav-link">Home</a></li>
					<li><a href="#" className="nav-link">About</a></li>
					<li><a href="#" className="nav-link">RSVP</a></li>
				</ul>
			</div>
		</nav>
	);
};