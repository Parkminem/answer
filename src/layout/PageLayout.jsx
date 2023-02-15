import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageCard from '@/components/UI/PageCard';
import SideBar from '@/components/myPage/SideBar';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
	//로컬스토리지의 토큰값 있는지 체크해서, 있으면 header에 login, logout props 내려주는 게 깔끔할 듯...
	//header 합치면 작업...
	return (
		<>
			<Header />
			<PageCard>
				<SideBar />
				<Outlet />
			</PageCard>
			<Footer />
		</>
	);
}
