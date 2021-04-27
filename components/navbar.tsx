import Link from 'next/link';
import {ShoppingCartIcon, UserCircleIcon, LoginIcon} from '@heroicons/react/solid';

const Navbar = ({isAuth}: NavbarProps) => {
	
	return (
		<div className="fixed top-0 left-0 flex items-center justify-between w-full h-16 px-5 bg-red-300 bg-opacity-50 rounded-b-xl">
			<div className="">
				<Link href="/menu">
					<img className="cursor-pointer h-7" src="vercel.svg" alt="LOGO"/>
				</Link>
			</div>

			<div className="justify-between hidden h-full align-middle sm:flex">
				<Link href="/menu"><button className="w-32 mx-3 transition hover:bg-red-400">Menu</button></Link>
				<Link href="/gallery"><button className="w-32 mx-3 transition hover:bg-red-400">Gallery</button></Link>
				<Link href="/contact"><button className="w-32 mx-3 transition hover:bg-red-400">Contact</button></Link>
			</div>

			<div className="flex">
				{
					isAuth 
					?
					<UserCircleIcon className="mr-2 cursor-pointer h-7" />
					:
					<Link href="/auth">
						<div>
							<LoginIcon className="mr-2 cursor-pointer h-7" />
						</div>
					</Link>
				}

				<Link href="/cart">
					<div>
						<ShoppingCartIcon className="cursor-pointer h-7" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;

interface NavbarProps {
	isAuth: boolean;
}