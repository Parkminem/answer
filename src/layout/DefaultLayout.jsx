import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
