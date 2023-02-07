import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '@/layout/DefaultLayout';
import Home from '@/pages/Home/Home';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route path="" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
