import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = ({ authentication }) => {
	const token = localStorage.getItem('user');
	if (authentication) {
		return token === null || token === undefined ? <Navigate to="/login" /> : <Outlet />;
	}
};

export default PrivateRouter;
