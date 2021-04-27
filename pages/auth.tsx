import React from 'react';
import {useRouter} from 'next/router';

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
			<p>this is the auth page</p>

			<button onClick={login}>login</button>
			<button onClick={logout}>logout</button>
		</div>
	);
};

export default Auth;