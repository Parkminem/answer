import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageCard from '@/components/UI/PageCard';
import SideBar from '@/components/myPage/SideBar';
import SectionCard from '@/components/UI/SectionCard';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
	return (
		<>
			<Header />
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
