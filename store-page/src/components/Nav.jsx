import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

const Nav = () => {
	let navigate = useNavigate();
	const [modalOpen, setModalOpen] = useState('');

	const Modal = () => {
		return (
			<>
				<div className={`modal ${modalOpen}`}>
					<div className='modal-box relative'>
						<label
							htmlFor='my-modal-3'
							className='btn btn-sm btn-circle absolute right-2 top-2'
							onClick={() => {
								setModalOpen('');
							}}
						>
							✕
						</label>
						<h3 className='text-lg font-bold'>
							Congratulations random Internet user!
						</h3>
						<p className='py-4'>
							You've been selected for a chance to get one year of subscription
							to use Wikipedia for free!
						</p>
					</div>
				</div>
			</>
		);
	};

	return (
		<div className='navbar bg-base-100 border-b-2 border-gray-400'>
			<Modal />

			<div className='navbar-start'>
				<a
					onClick={() => {
						navigate('/');
					}}
					href='#'
					className='btn btn-ghost normal-case text-xl'
				>
					<span className='text-orange-700'>R</span>
					<span className='text-gray-400'>H</span>
				</a>
			</div>

			<ShoppingCart setModalOpen={setModalOpen} />
		</div>
	);
};

export default Nav;
