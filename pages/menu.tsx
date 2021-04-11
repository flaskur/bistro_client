import { GetStaticProps } from "next";
import React from "react";
import MenuItem from "../components/menu-item";
import MenuItemProps from "../shared/menu-item-props";

const Menu = ({message, menu}: any) => {
	// NECESSARY TO COMBINE SIZE/PRICE FOR SAME NAME FOODS
	const mapMenu = () => {
		const existingFood = new Set();
		const newMenu = new Map();

		for (let food of menu) {
			let { foodId, name, category, size, price, spicy, description } = food;

			// HAVE NOT ENCOUNTERED FOOD YET --> NEW ENTRY
			if (!existingFood.has(food.name)) {
				existingFood.add(food.name);

				let newFood = {
					category,
					spicy,
					description,
					options: [{foodId, size, price}],
				};
				newMenu.set(name, newFood);
			} else {
				let prevFood = newMenu.get(name);
				prevFood.options = [...prevFood.options, {foodId, size, price}]
				newMenu.set(name, prevFood);
			}
			
		}

		return newMenu;
	};

	const clearCart = () => {
		localStorage.setItem('cart', JSON.stringify([]));
	};
	
	const renderMenu = () => {
		const renderedMenu: any[] = []; // should be MenuItem[], maybe React.Element[]

		// CANNOT RETURN INSIDE OF JS FOREACH
		mapMenu().forEach((value, key) => {
			renderedMenu.push(
				<MenuItem key={key} name={key} {...value} />
			);
		});

		return renderedMenu;
	};
	
	return (
		<div>
			<button onClick={clearCart}>Clear Cart</button>
			<h2>{message}</h2>
			{renderMenu()}
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const result = await fetch('http://localhost:3001/menu')
	const data = await result.json();

	return {
		props: data
	};
};

export default Menu;