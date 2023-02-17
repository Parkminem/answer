import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
	const { pathname } = useLocation();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(() => {
		const token = localStorage.getItem('user');
		if (token) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [pathname]);
	return (
		<>
			<Header loginState={isLoggedIn} />
			<Outlet />
			<Footer />
		</>
	);
}
