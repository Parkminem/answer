import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageCard from '@/components/UI/PageCard';
import SideBar from '@/components/myPage/SideBar';
import SectionCard from '@/components/UI/SectionCard';
import MobilePageHeader from '@/components/common/MobilePageHeader';
import MobileSideBar from '@/components/common/MobileSideBar';
import MobileFooter from '@/components/common/MobileFooter';

export default function PageLayout() {
	const width = window.innerWidth;
	const [mobile, setMobile] = useState(width);

	return (
		<>
			{mobile < 481 ? <MobilePageHeader /> : <Header />}
			{mobile < 481 && <MobileSideBar />}
			<PageCard>
				{mobile < 481 ? '' : <SideBar />}
				<SectionCard>
					<Outlet />
				</SectionCard>
			</PageCard>
			{mobile < 481 ? <MobileFooter /> : <Footer />}
		</>
	);
}
