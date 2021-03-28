import { GetStaticProps } from "next";

const Menu = ({message, menu}: any) => {
	const renderMenu = () => {
		console.log('called render');
		return menu.map((food: any) => {
			return <h3 key={food.food_id}>{food.name}</h3>
		});
	};
	
	return (
		<div>
			<h1>menu</h1>
			<h2>{message}</h2>
			{renderMenu()}
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const result = await fetch('http://localhost:3001/menu');
	const data = await result.json();

	return {
		props: data
	};
};

export default Menu;