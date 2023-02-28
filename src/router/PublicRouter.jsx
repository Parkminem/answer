import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRouter = () => {
	const token = localStorage.getItem('user');
	if (token) {
		return <Navigate to="/" replace={true} />;
	} else {
		return <Outlet />;
	}
};

export default PublicRouter;
