import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
	//로컬스토리지의 토큰값 있는지 체크해서, 있으면 header에 login, logout props 내려주는 게 깔끔할 듯...
	//header 합치면 작업...
	return (
		<>
			{/* <Header /> */}
			<Outlet />
			<Footer />
		</>
	);
}
