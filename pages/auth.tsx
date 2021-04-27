import React from 'react';
import {useRouter} from 'next/router';
import Navbar from '../components/navbar';

const Auth = () => {
	const router = useRouter();

	const login = () => {
		localStorage.setItem('token', 'loggedin');
		router.push('/');
	};

	const logout = () => {
		localStorage.removeItem('token');
		router.push('/');
	};
	
	return (
		<div>
			<Navbar isAuth={true} />
			<p>this is the auth page</p>

			<button onClick={login}>login</button>
			<button onClick={logout}>logout</button>
		</div>
	);
};

export default Auth;