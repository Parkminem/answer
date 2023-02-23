import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
