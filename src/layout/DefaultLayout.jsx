import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
	const [isLoggedIn, setIsLoggedIn] = useState();
	useEffect(() => {
		const token = localStorage.getItem('user');
		if (token) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [isLoggedIn]);
	return (
		<>
			<Header loginState={isLoggedIn} />
			<Outlet />
			<Footer />
		</>
	);
}
