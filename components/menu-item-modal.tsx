import React from 'react';

const MenuItemModal = () => {
	return (
		<div>
			<h1>this is modal that should be opened on click of menu item</h1>
			<h2>should be center screen and include shadowed background that contains entire screen</h2>
			<button onClick={closeModal}>Close XXX</button>
		</div>
	);
};

export default MenuItemModal;