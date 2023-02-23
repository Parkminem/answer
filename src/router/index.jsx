import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRouter from '@/router/PrivateRouter';
import DefaultLayout from '@/layout/DefaultLayout';
import PageLayout from '@/layout/PageLayout';
import InterviewLayout from '@/layout/InterviewLayout';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import Join from '@/pages/Join/Join';
import FindPw from '@/pages/FindPw/FindPw';
import Modify from '@/components/myPage/Modify';
import InterviewSkeleton from '@/components/UI/InterviewSkeleton';
import ScrollToTop from '@/router/ScrollTop';

const Feedback = React.lazy(() => import('@/components/myPage/Feedback'));
const DiagnosticHistory = React.lazy(() => import('@/components/myPage/DiagnosticHistory'));
const DiagnosticDetail = React.lazy(() => import('@/components/myPage/DiagnosticDetail'));
const Interview = React.lazy(() => import('@/pages/Interview/Interview'));

export default function Router() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route path="" element={<Home />} />
				</Route>
				<Route element={<PrivateRouter authentication={true} />}>
					<Route path="interview" element={<InterviewLayout />}>
						<Route
							path=""
							element={
								<React.Suspense fallback={<InterviewSkeleton />}>
									<Interview />
								</React.Suspense>
							}
						/>
					</Route>
					<Route path="mypage" element={<PageLayout />}>
						<Route
							path="feedback"
							element={
								<React.Suspense fallback={<div></div>}>
									<Feedback />
								</React.Suspense>
							}
						/>
						<Route path="modify" element={<Modify />} />
						<Route
							path="diagnostic_history"
							element={
								<React.Suspense fallback={<div></div>}>
									<DiagnosticHistory />
								</React.Suspense>
							}
						/>
						<Route
							path="diagnostic_detail"
							element={
								<React.Suspense fallback={<div></div>}>
									<DiagnosticDetail />
								</React.Suspense>
							}
						/>
					</Route>
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="join" element={<Join />} />
				<Route path="findpassword" element={<FindPw />} />
				<Route path="/" element={<DefaultLayout />}>
					<Route path="*" element={<Navigate to="/"></Navigate>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
