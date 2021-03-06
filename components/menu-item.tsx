import React, { useState } from 'react';
import MenuItemProps from '../shared/menu-item-props';
import MenuItemModal from './menu-item-modal';

// on click of the menu item card, it will open a modal that allows you to select quantity from a counter, and one of the options if there are multiple, also special comments
const MenuItem = (menuItem: MenuItemProps) => {
	const [showModal, setShowModal] = useState(false);
	
	let { name, category, spicy, description, options } = menuItem; 
	
	const openModal = () => {
		console.log('should open a modal element');
		for (let option of menuItem.options) {
			console.log(option);
		}

		setShowModal(true);
	};

	const closeModal = () => {
		console.log('closing the modal'); // should this be in an effect hook to rerender?
		document.body.style.overflowY = 'auto';
		document.body.style.marginRight = '0';
		setShowModal(false);
	};

	const renderPrices = () => {
		console.log(options);
		let prices = '';
		let flag = false;

		options.map((option) => {
			if (flag === true) {
				prices += `/\$${option.price}`;
			} else {
				flag = true;
				prices += `\$${option.price}`
			}
		});

		return <p>{prices}</p>
	};
	
	// modal should now render the options, quantity, and comments, then add to cart function that we already made
	return (
		<div>
			<MenuItemModal 
				showModal={showModal} 
				closeModal={closeModal}
				name={name}
				category={category}
				spicy={spicy.toString()}
				description={description}
				options={options}
			/>
			<div key={name} onClick={openModal} className="flex items-center justify-between h-32 p-5 border-2 border-gray-100 rounded-md hover:bg-gray-50 w-112">
				<div>
					<p>{name}</p>
				</div>
				{
					renderPrices()
				}
			</div>
		</div>
	);
};

export default MenuItem;