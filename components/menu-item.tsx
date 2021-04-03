import React from 'react';
import MenuItemProps from '../shared/menu-item-props';

const MenuItem = ({foodId, name, category, size, price, spicy, description}: MenuItemProps) => {
	return (
		<div key={foodId}>
			<p>{foodId}</p>
			<p>{name}</p>
			<p>{category}</p>
			<p>{size}</p>
			<p>{price}</p>
			<p>{spicy.toString()}</p>
			<p>{description}</p>
		</div>
	);
};

export default MenuItem;