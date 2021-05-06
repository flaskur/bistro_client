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
		<div className="flex flex-col items-center pt-20">
			<Navbar isAuth={true} />
			<button onClick={clearCart}>Clear Cart</button>

			<p className="mb-2 text-3xl font-extrabold border-b-2 border-black">Soup</p>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('SOUP')}
			</div>
			<p className="mb-2 text-3xl font-extrabold border-b-2 border-black">Appetizer</p>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('APPETIZER')}
			</div>
			<p className="mb-2 text-3xl font-extrabold border-b-2 border-black">Salad</p>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('SALAD')}
			</div>
			<p className="mb-2 text-3xl font-extrabold border-b-2 border-black">Chinese</p>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('CHINESE')}
			</div>
			<p className="mb-2 text-3xl font-extrabold border-b-2 border-black">Thai</p>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('THAI')}
			</div>
			<p className="mb-2 text-3xl font-extrabold border-b-2 border-black">Rice</p>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('RICE')}
			</div>
			<p className="mb-2 text-3xl font-extrabold border-b-2 border-black">Noodle</p>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('NOODLE')}
			</div>
			<p className="mb-2 text-3xl font-extrabold border-b-2 border-black">Combo</p>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('COMBO')}
			</div>
			<p className="mb-2 text-3xl font-extrabold border-b-2 border-black">Hibachi</p>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('HIBACHI')}
			</div>
			<p className="mb-2 text-3xl font-extrabold border-b-2 border-black">Vegetable</p>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('VEGETABLE')}
			</div>
			<p className="mb-2 text-3xl font-extrabold border-b-2 border-black">Tray</p>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-x-4 gap-y-4">
				{renderCategoryMenu('TRAY')}
			</div>
			<p className="mb-2 text-3xl font-extrabold border-b-2 border-black">Curry</p>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-x-4 gap-y-4">
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