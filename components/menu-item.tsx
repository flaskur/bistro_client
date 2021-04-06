import React from 'react';
import MenuItemProps from '../shared/menu-item-props';

const MenuItem = (menuItem: MenuItemProps) => {
	let { foodId, name, category, size, price, spicy, description } = menuItem; // you need to change menuProps to include quantity and comments
	
	// cart item should not be exact as food item, you need to include quantity, etc.
	// cart items only need foodId, quantity, and comment, but you should include name etc for checkout page rendering w/o asking backend to decipher foodId
	const handleAddItem = () => {
		console.log('handling item click');

		// localstorage cart needs to start with {}

		if (!localStorage.getItem('cart')) {
			localStorage.setItem('cart', JSON.stringify([]));
		}

		let existingCart = JSON.parse(localStorage.getItem('cart')!);

		// check if the particular food already exists, if it does increase quantity
		// you can set a flag if quantity increase, so you don't trigger new object add

		let foundDuplicateItem = false;
		
		let newCart = existingCart.map((cartItem: any) => {
			if (cartItem.foodId === menuItem.foodId) {
				// just increase the quantity
				cartItem.quantity += 1;
				foundDuplicateItem = true;
			}

			return cartItem;
		});
		
		console.log('after checking quantity increase', newCart);

		if (!foundDuplicateItem) {
			newCart = [...existingCart, menuItem];
		}
		console.log('after adding non duplicate menu item', newCart);
		
		localStorage.setItem(
			'cart',
			JSON.stringify(newCart),
		);
	}
	
	return (
		<div key={foodId}>
			<p>{foodId}</p>
			<p>{name}</p>
			<p>{category}</p>
			<p>{size}</p>
			<p>{price}</p>
			<p>{spicy.toString()}</p>
			<p>{description}</p>
			<button onClick={handleAddItem}>Add Item</button>
		</div>
	);
};

export default MenuItem;