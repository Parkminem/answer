import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '@/layout/DefaultLayout';
import Home from '@/pages/Home/Home';
import InterviewResult from '@/pages/Interview/InterviewResult';
import InterviewTest from '@/pages/Interview/InterviewTest';
import InterviewTestDetail from '@/pages/Interview/InterviewTestDetail';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route path="" element={<Home />} />
					<Route path="/interviewtest" element={<InterviewTest />} />
					<Route path="/interviewtest/detail" element={<InterviewTestDetail />} />
					<Route path="/interviewtest/result" element={<InterviewResult />} />
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
