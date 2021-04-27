import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Sample from '../components/sample';

export default function Home({message}: any) {
	const [isAuth, setIsAuth] = useState(false);
	
	useEffect(() => {
		// you should probably verify the token is legit and not expired
		let tokenExists = false;
		if (localStorage.getItem('token')) {
			tokenExists = true;
		}
		setIsAuth(tokenExists);
	}, []);

	return (
		<div>
			<Navbar isAuth={isAuth} />
			<main className="flex items-center px-10 bg-gray-400 justify-evenly py-60">
				<div>
					<p className="text-s">Magnificently Simple Asian Cuisine</p>
					<p className="text-5xl">The Finest Asian Cuisine Around</p>
					<Link href="/menu">
						<button className="text-2xl">Order Now</button>
					</Link>
				</div>
				<div>
					<img className="border-2 border-black" src="/vercel.svg" alt="picture" />
				</div>
			</main>

			<section className="flex items-center justify-around py-40 bg-blue-200">
				<div>
					<p>scrumptious</p>
				</div>
				<div>
					<p>delicious</p>
				</div>
				<div>
					<p>mouth watering</p>
				</div>
			</section>

			<section className="flex items-center justify-around py-40 bg-red-300">
				<div>
					<p className="text-3xl">The best cuisine that I've ever tasted</p>
				</div>
				<div>
					<p className="text-3xl">The best cuisine that I've ever tasted</p>
				</div>
				<div>
					<p className="text-3xl">The best cuisine that I've ever tasted</p>
				</div>
				<div>
					<p className="text-3xl">The best cuisine that I've ever tasted</p>
				</div>
			</section>

			<footer className="text-white bg-black">
				<p>Bistro LLC 2021</p>
			</footer>
		</div>
	);
};

// fetch methods must be on pages, not components
export const getStaticProps: GetStaticProps = async () => {
	const result = await fetch('http://localhost:3001/banana');

	const data = await result.json();

	return {
		props: {
			message: data.message,
		}
	}
};