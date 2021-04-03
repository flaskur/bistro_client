import { GetStaticProps } from "next";
import React from "react";
import MenuItem from "../components/menu-item";
import MenuItemProps from "../shared/menu-item-props";

const Menu = ({message, menu}: any) => {
	const renderMenu = () => {
		return menu.map((menuItem: MenuItemProps) => {
			return <MenuItem {...menuItem} />;
		});
	};
	
	return (
		<div>
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