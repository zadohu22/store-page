import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hero from './components/Hero';
import Nav from './components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Nav />
		<Hero />
	</>
);