import React from 'react';
import Nav from './Nav';
import Card from './Card';

const Store = (props) => {
	return (
		<>
			<div className='w-full h-full mt-8 grid justify-items-center items-center gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<Card
					setNumberInCart={props.setNumberInCart}
					numberInCart={props.numberInCart}
					cartPrice={props.cartPrice}
					setCartPrice={props.setCartPrice}
					setFirstCount={props.setFirstCount}
					firstCount={props.firstCount}
					price={100}
					title='Water'
					description='Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.'
					image='url(./pexels-david-bartus-879521.jpg)'
				/>
				<Card
					setNumberInCart={props.setNumberInCart}
					numberInCart={props.numberInCart}
					cartPrice={props.cartPrice}
					setCartPrice={props.setCartPrice}
					setSecondCount={props.setSecondCount}
					secondCount={props.secondCount}
					price={200}
					title='Water 2.0'
					description='Water 2.0 is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.'
					image='../pexels-jens-johnsson-66090.jpg'
				/>
				<Card
					setNumberInCart={props.setNumberInCart}
					numberInCart={props.numberInCart}
					cartPrice={props.cartPrice}
					setCartPrice={props.setCartPrice}
					setThirdCount={props.setThirdCount}
					thirdCount={props.thirdCount}
					price={300}
					title='Water 3.0'
					description='Water 3.0 is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.'
					image='../pexels-lisa-fotios-1346155.jpg'
					className='object-left-bottom'
				/>
				<Card
					setNumberInCart={props.setNumberInCart}
					numberInCart={props.numberInCart}
					cartPrice={props.cartPrice}
					setCartPrice={props.setCartPrice}
					setFourthCount={props.setFourthCount}
					fourthCount={props.fourthCount}
					price={400}
					title='Water 4.0'
					description='Water 4.0 is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.'
					image='../pexels-marko-obrvan-304784.jpg'
				/>
				<Card
					setNumberInCart={props.setNumberInCart}
					numberInCart={props.numberInCart}
					cartPrice={props.cartPrice}
					setCartPrice={props.setCartPrice}
					setFifthCount={props.setFifthCount}
					fifthCount={props.fifthCount}
					price={500}
					title='Water 5.0'
					description='Water 5.0 is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.'
					image='../pexels-pixabay-40654.jpg'
				/>
				<Card
					setNumberInCart={props.setNumberInCart}
					numberInCart={props.numberInCart}
					cartPrice={props.cartPrice}
					setCartPrice={props.setCartPrice}
					setSixthCount={props.setSixthCount}
					sixthCount={props.sixthCount}
					price={600}
					title='WATER 6.0!!'
					description='The ULTIMATE inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.'
					image='../pexels-thorn-yang-401098.jpg'
					className='object-left-bottom'
				/>
			</div>
		</>
	);
};

export default Store;
