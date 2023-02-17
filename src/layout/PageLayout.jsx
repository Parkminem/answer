import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageCard from '@/components/UI/PageCard';
import SideBar from '@/components/myPage/SideBar';
import SectionCard from '@/components/UI/SectionCard';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
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
