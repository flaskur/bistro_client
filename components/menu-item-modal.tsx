import React from 'react';
import Option from '../shared/option';

const MenuItemModal = ({showModal, closeModal, name, category, description, spicy, options}: MenuItemModalProps) => {
	const handleAddItem = () => {
		console.log('handle add item');
		closeModal();
	};
	
	return (
		<div style={{backgroundColor: 'lightblue'}}>
			{
				showModal &&
				<div>
					<button onClick={closeModal}>Close XXX</button>
					<p>{name}</p>
					<p>{category}</p>
					<p>{description}</p>
					<p>{spicy}</p>

					<div>
						{
							options.map(option => {
								const {foodId, price, size} = option;
								return (
									// need to be able to select particular option
									<div key={foodId}>
										<p>{foodId}</p>
										<p>{price}</p>
										<p>{size}</p>
									</div>
								);
							})
						}
					</div>

					<input type="number" />

					<button onClick={handleAddItem}>Add To Cart</button>
				</div>
			}
		</div>
	);
};

interface MenuItemModalProps {
	showModal: boolean;
	closeModal: () => void;
	name: string;
	category: string;
	spicy: string;
	description: string;
	options: Option[];
};

export default MenuItemModal;