import { GetStaticProps } from "next";
import React from "react";
import MenuItem from "../components/menu-item";
import Navbar from "../components/navbar";
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

	const renderCategoryMenu = (category: string) => {
		const renderedMenu: any[] = [];

		mapMenu().forEach((value, key) => {
			console.log(category);
			
			if (value.category === category) {
				renderedMenu.push(
					<MenuItem key={key} name={key} {...value} />
				);
			}
		});

		return renderedMenu;
	};
	
	return (
		<div className="flex flex-col items-center pt-20 border-2 border-black">
			<Navbar isAuth={true} />
			<button onClick={clearCart}>Clear Cart</button>
			<h2>{message}</h2>

			<p className="text-3xl font-extrabold">Soup</p>
			<div className="grid grid-cols-1 border-2 border-black sm:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('SOUP')}
			</div>
			<p className="text-3xl font-extrabold">Appetizer</p>
			<div className="grid grid-cols-1 border-2 border-black sm:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('APPETIZER')}
			</div>
			<p className="text-3xl font-extrabold">Salad</p>
			<div className="grid grid-cols-1 border-2 border-black sm:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('SALAD')}
			</div>
			<p className="text-3xl font-extrabold">Chinese</p>
			<div className="grid grid-cols-1 border-2 border-black sm:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('CHINESE')}
			</div>
			<p className="text-3xl font-extrabold">Thai</p>
			<div className="grid grid-cols-1 border-2 border-black sm:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('Thai')}
			</div>
			<p className="text-3xl font-extrabold">Rice</p>
			<div className="grid grid-cols-1 border-2 border-black sm:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('RICE')}
			</div>
			<p className="text-3xl font-extrabold">Noodle</p>
			<div className="grid grid-cols-1 border-2 border-black sm:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('NOODLE')}
			</div>
			<p className="text-3xl font-extrabold">Combo</p>
			<div className="grid grid-cols-1 border-2 border-black sm:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('COMBO')}
			</div>
			<p className="text-3xl font-extrabold">Hibachi</p>
			<div className="grid grid-cols-1 border-2 border-black sm:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('HIBACHI')}
			</div>
			<p className="text-3xl font-extrabold">Vegetable</p>
			<div className="grid grid-cols-1 border-2 border-black sm:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('VEGETABLE')}
			</div>
			<p className="text-3xl font-extrabold">Tray</p>
			<div className="grid grid-cols-1 border-2 border-black sm:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('TRAY')}
			</div>
			<p className="text-3xl font-extrabold">Curry</p>
			<div className="grid grid-cols-1 border-2 border-black sm:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('CURRY')}
			</div>
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