import React from 'react';

const Hero = () => {
	return (
		<div className='hero min-h-screen bg-[url("skyler-sawyer-Wq-nmL12bCU-unsplash.jpg")] bg-no-repeat bg-center'>
			<div className='hero-overlay bg-opacity-80'></div>
			<div className='hero-content text-center text-neutral-content'>
				<div className='max-w-md'>
					<h1 className='mb-5 text-5xl font-bold text-gray-400'>
						<span className='text-orange-700'>Real</span>Halloween
					</h1>
					<p className='mb-5'>
						We provide{' '}
						<span className='text-orange-700 font-extrabold'>real</span>{' '}
						Halloween decorations. Scare your trick-or-treaters this year with
						living Vampires, Ghosts, Werewolves, etc...
					</p>
					<button className='btn btn-primary bg-black text-gray-400 hover:bg-gray-400 hover:border-black hover:text-black border-black'>
						Shop Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
