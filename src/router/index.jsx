import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '@/layout/DefaultLayout';
import PageLayout from '@/layout/PageLayout';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import Join from '@/pages/Join/Join';
import FindPw from '@/pages/FindPw/FindPw';
import Feedback from '@/components/myPage/Feedback';
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
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="join" element={<Join />} />
				<Route path="findpassword" element={<FindPw />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
