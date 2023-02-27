import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';
import MobileHeader from '@/components/common/MobileHeader';
import MobileSideBar from '@/components/common/MobileSideBar';
import MobileFooter from '@/components/common/MobileFooter';

export default function DefaultLayout() {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	return (
		<>
			{mobile < 401 ? <MobileHeader /> : <Header />}
			{mobile < 401 && <MobileSideBar />}
			<Outlet />
			{mobile < 401 ? <MobileFooter /> : <Footer />}
		</>
	);
}
