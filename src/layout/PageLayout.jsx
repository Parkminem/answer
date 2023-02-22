import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageCard from '@/components/UI/PageCard';
import SideBar from '@/components/myPage/SideBar';
import SectionCard from '@/components/UI/SectionCard';
import MobilePageHeader from '@/components/common/MobilePageHeader';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);

	return (
		<>
			{mobile < 401 ? <MobilePageHeader /> : <Header />}
			<PageCard>
				{mobile < 401 ? '' : <SideBar />}
				<SectionCard>
					<Outlet />
				</SectionCard>
			</PageCard>
			{mobile < 401 ? '' : <Footer />}
		</>
	);
}
