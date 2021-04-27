import { GetStaticProps } from 'next';
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
			<h1>home</h1>
			<Navbar isAuth={isAuth} />
			<Sample message={message}/>
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