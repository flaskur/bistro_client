const Navbar = ({text}: NavbarProps) => {
	
	return (
		<div>
			<h1>navbar thingy</h1>
			<h2>simple {text}</h2>
		</div>
	);
};

export default Navbar;

interface NavbarProps {
	text: string;
}