import React, { useState } from 'react';
import Option from '../shared/option';

const MenuItemModal = ({showModal, closeModal, name, category, description, spicy, options}: MenuItemModalProps) => {
	const [selectedOption, setSelectedOption] = useState<null | Option>(null);
	const [quantity, setQuantity] = useState<number>(1); // need to convert input to number dropdown to disallow null/emptystring
	const [comment, setComment] = useState('');
	
	// each cart item should be an object that has at least foodId, quantity, and comment, but you should include as much as possible so that I can render the checkout page easier.
	const handleAddItem = () => {
		console.log('handle add item');
		if (!selectedOption) {
			console.log('must select an option first');
			return;
		}

		if (!localStorage.getItem('cart')) {
			localStorage.setItem('cart', JSON.stringify([]));
		}

		let existingCart = JSON.parse(localStorage.getItem('cart')!);

		// ONLY INCREASE QUANTITY IF FOOD ID(SIZE/PRICE) AND COMMENTS MATCH
		let foundDuplicateItem = false;
		let newCart = existingCart.map((cartItem: any) => {
			if (cartItem.foodId === selectedOption.foodId && cartItem.comment === comment) {
				cartItem.quantity += quantity;
				foundDuplicateItem = true;
			}

			return cartItem;
		});

		// ADD NEW CART ITEM TO CART
		if (!foundDuplicateItem) {
			const cartItem = {
				name,
				foodId: selectedOption.foodId,
				price: selectedOption.price,
				size: selectedOption.size,
				quantity,
				comment,
			};
			newCart = [...existingCart, cartItem];
		}

		console.log(newCart);
		
		localStorage.setItem(
			'cart',
			JSON.stringify(newCart),
		);

		// RESET SELECTIONS
		setSelectedOption(null);
		setQuantity(1);
		setComment('');
		
		closeModal();
	};

	const handleOptionSelect = (option: Option) => {
		setSelectedOption(option);
		console.log('selected option is', option.foodId, option.price, option.size);
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
									<div 
										key={foodId} 
										onClick={() => handleOptionSelect(option)} 
										style={{backgroundColor: selectedOption && selectedOption.foodId === foodId ? 'lightgray' : 'white'}}
									>
										<p>{foodId}</p>
										<p>{price}</p>
										<p>{size}</p>
									</div>
								);
							})
						}
					</div>

					{/* convert to number dropdown */}
					<input type="number" value={quantity} min={1} max={10} onChange={(e) => {setQuantity(parseInt(e.target.value))}}/>

					<input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />

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