import React from 'react';
import { LayoutComponent } from './components/LayoutComponent';
import { ConfirmComponent } from 'components/ConfirmComponent';
import { BrowserRouter, Routes, Route } from "react-router";


const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LayoutComponent />} />
				<Route path="/confirm" element={<ConfirmComponent />}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
