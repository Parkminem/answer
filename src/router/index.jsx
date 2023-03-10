import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '@/layout/DefaultLayout';
import PageLayout from '@/layout/PageLayout';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import Join from '@/pages/Join/Join';
import FindPw from '@/pages/FindPw/FindPw';
import Feedback from '@/components/myPage/Feedback';
import Modify from '@/components/myPage/Modify';
import DiagnosticHistory from '@/components/myPage/DiagnosticHistory';
import DiagnosticDetail from '@/components/myPage/DiagnosticDetail';
import Interview from '@/pages/Interview/Interview';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route path="" element={<Home />} />
					<Route path="interview" element={<Interview />} />
				</Route>
				<Route path="mypage" element={<PageLayout />}>
					<Route path="feedback" element={<Feedback />} />
					<Route path="modify" element={<Modify />} />
					<Route path="diagnostic_history" element={<DiagnosticHistory />} />
					<Route path="diagnostic_detail" element={<DiagnosticDetail />} />
					<Route path="" />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="join" element={<Join />} />
				<Route path="findpassword" element={<FindPw />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
