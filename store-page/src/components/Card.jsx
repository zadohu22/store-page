import React from 'react';

const Card = (props) => {
	return (
		<div class='card w-96 bg-base-100 shadow-xl max-h-100 h-100 min-w-100'>
			<figure>
				<img
					className={`max-h-60 h-60 w-100 min-w-100 object-cover ${props.class}`}
					src={props.image}
					alt=''
				/>
			</figure>
			<div class='card-body'>
				<h2 class='card-title'>{props.title}</h2>
				<p>{props.description}</p>
				<div class='card-actions justify-end'>
					<button class='btn btn-primary'>Add to Cart</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
