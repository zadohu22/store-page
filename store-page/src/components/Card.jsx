import React from 'react';

const Card = (props) => {
	return (
		<div className='card w-96 bg-base-100 shadow-xl max-h-100 h-100 min-w-100'>
			<figure>
				<img
					className={`max-h-60 h-60 w-100 min-w-100 object-cover ${props.class}`}
					src={props.image}
					alt=''
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{props.title}</h2>
				<p>{props.description}</p>
				<div className='flex justify-center'>
					<div className=''>
						<button className='rounded-md border-solid border-gray-400 mr-4 h-8 w-8 border font-extrabold text-xl'>
							-
						</button>

						<input
							type='text'
							placeholder='Enter Amount'
							className='input input-bordered w-36'
						/>
						<button className='rounded-md border-solid border-gray-400 ml-4 h-8 w-8 border font-extrabold text-xl'>
							+
						</button>
					</div>
				</div>
				<div className='card-actions justify-center'>
					<button className='btn btn-primary w-60'>Add to Cart</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
