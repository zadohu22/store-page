import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Store from './Store';
import Nav from './Nav';

const RouteSwitch = () => {
	return (
		// <Router>
		<Routes>
			<Route path='/' element={<Hero />} />
			<Route path='/store' element={<Store />} />
		</Routes>
		// </Router>
	);
};

export default RouteSwitch;
