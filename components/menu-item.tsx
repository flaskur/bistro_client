import React from 'react';
import MenuItemProps from '../shared/menu-item-props';

// on click of the menu item card, it will open a modal that allows you to select quantity from a counter, and one of the options if there are multiple, also special comments
const MenuItem = (menuItem: MenuItemProps) => {
	let { name, category, spicy, description } = menuItem; 
	
	// cart item should not be exact as food item, you need to include quantity, etc.
	// cart items only need foodId, quantity, and comment, but you should include name etc for checkout page rendering w/o asking backend to decipher foodId
	// this logic should be in menuitemmodal component
	// const handleAddItem = () => {
	// 	console.log('handling item click');

	// 	// IF EMPTY, SET TO EMPTY ARRAY
	// 	if (!localStorage.getItem('cart')) {
	// 		localStorage.setItem('cart', JSON.stringify([]));
	// 	}

	// 	let existingCart = JSON.parse(localStorage.getItem('cart')!);

	// 	// check if the particular food already exists, if it does increase quantity
	// 	// you can set a flag if quantity increase, so you don't trigger new object add

	// 	let foundDuplicateItem = false;
		
	// 	let newCart = existingCart.map((cartItem: any) => {
	// 		if (cartItem.foodId === menuItem.foodId) {
	// 			// just increase the quantity
	// 			cartItem.quantity += 1;
	// 			foundDuplicateItem = true;
	// 		}

	// 		return cartItem;
	// 	});
		
	// 	console.log('after checking quantity increase', newCart);

	// 	if (!foundDuplicateItem) {
	// 		newCart = [...existingCart, menuItem];
	// 	}
	// 	console.log('after adding non duplicate menu item', newCart);
		
	// 	localStorage.setItem(
	// 		'cart',
	// 		JSON.stringify(newCart),
	// 	);
	// }

	// does this generate a new component or just hide an existing modal?
	// they generate it but have a state value for show, then change the css based on that.
	const openModal = () => {
		console.log('should open a modal element');
		for (let option of menuItem.options) {
			console.log(option);
		}
	};
	
	return (
		<div key={name} onClick={openModal}>
			<p>{name}</p>
			<p>{category}</p>
			<p>{spicy.toString()}</p>
			<p>{description}</p>
		</div>
	);
};

export default MenuItem;