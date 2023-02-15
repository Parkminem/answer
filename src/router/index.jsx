import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '@/layout/DefaultLayout';
import PageLayout from '@/layout/PageLayout';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import Join from '@/pages/Join/Join';
import FindPw from '@/pages/FindPw/FindPw';
import Feedback from '@/components/myPage/Feedback';
import InterviewResult from '@/pages/Interview/InterviewResult';
import InterviewTest from '@/pages/Interview/InterviewTest';
import InterviewTestDetail from '@/pages/Interview/InterviewTestDetail';
import Modify from '@/components/myPage/Modify';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route path="" element={<Home />} />
					<Route path="interviewtest" element={<InterviewTest />} />
					<Route path="interviewtest/detail" element={<InterviewTestDetail />} />
					<Route path="interviewtest/result" element={<InterviewResult />} />
				</Route>
				<Route path="mypage" element={<PageLayout />}>
					<Route path="feedback" element={<Feedback />} />
					<Route path="modify" element={<Modify />} />
					<Route path="" />
					<Route path="" />
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
