import { GetStaticProps } from 'next';
import Navbar from '../components/navbar';
import Sample from '../components/sample';

export default function Home({message}: any) {
	return (
		<div>
			<h1>home</h1>
			<Navbar text="banana" />
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