import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';
import MobilePageHeader from '@/components/common/MobilePageHeader';
import MobileFooter from '@/components/common/MobileFooter';

const InterviewLayout = () => {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);
	return (
		<>
			{mobile < 481 ? <MobilePageHeader /> : <Header />}
			<Outlet />
			{mobile < 481 ? <MobileFooter /> : <Footer />}
		</>
	);
};

export default InterviewLayout;
