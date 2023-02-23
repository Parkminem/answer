import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';
import MobileFooter from '@/components/common/MobileFooter';

export default function DefaultLayout() {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	return (
		<>
			<Header />
			<Outlet />
			{mobile < 401 ? <MobileFooter /> : <Footer />}
		</>
	);
}
