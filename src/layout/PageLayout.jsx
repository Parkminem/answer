import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageCard from '@/components/UI/PageCard';
import SideBar from '@/components/myPage/SideBar';
import SectionCard from '@/components/UI/SectionCard';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
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
			<Header />
			<PageCard>
				<SideBar />
				<SectionCard>
					<Outlet />
				</SectionCard>
			</PageCard>
			<Footer />
		</>
	);
}
