import React from 'react';
import Nav from './Nav';
import Card from './Card';

const Store = () => {
	return (
		<>
			<div className='w-full h-full mt-8 grid justify-items-center items-center gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<Card
					title='Vampire'
					description="One of our most popular monsters, they will attempt to bite the necks of trick-or-treaters. Keep garlic on hand so you don't become a victim!"
					image='DALL·E 2022-09-01 22.30.27 - large fangs coming out of the mouth.png'
				/>
				<Card
					title='Zombie'
					description="This year's harvest produced the slow-walking zombies! Keep them fenced because they will roam around mindlessly searching for brains to eat."
					image='emad-kolahi-UIKyCJU9QFs-unsplash.jpg'
				/>
				<Card
					title='Ghosts'
					description='New this season, spooky scary ghosts! These ghosts were hand selected directly from Ohio, making them extra scary.'
					image='andrew-neel-hPo-jtai17o-unsplash.jpg'
					className='object-left-bottom'
				/>
				<Card
					title='Vampire'
					description="One of our most popular monsters, they will attempt to bite the necks of trick-or-treaters. Keep garlic on hand so you don't become a victim!"
					image='DALL·E 2022-09-01 22.30.27 - large fangs coming out of the mouth.png'
				/>
				<Card
					title='Zombie'
					description="This year's harvest produced the slow-walking zombies! Keep them fenced because they will roam around mindlessly searching for brains to eat."
					image='emad-kolahi-UIKyCJU9QFs-unsplash.jpg'
				/>
				<Card
					title='Ghosts'
					description='New this season, spooky scary ghosts! These ghosts were hand selected directly from Ohio, making them extra scary.'
					image='andrew-neel-hPo-jtai17o-unsplash.jpg'
					className='object-left-bottom'
				/>
			</div>
		</>
	);
};

export default Store;
