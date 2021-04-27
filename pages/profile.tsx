import React from 'react';
import Navbar from '../components/navbar';

const Profile = () => {
	return (
		<>
			<Navbar isAuth={true} />
			<p>this it the profile page</p>
		</>
	);
};

export default Profile;