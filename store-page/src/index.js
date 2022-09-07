import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Store from './components/Store';
import RouteSwitch from './components/RouteSwitch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
	// <>
	// 	<Router>
	// 		<Nav />
	// 		<RouteSwitch />
	// 	</Router>
	// </>
);
