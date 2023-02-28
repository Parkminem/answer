import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const PrivateRouter = ({ authentication }) => {
	const token = localStorage.getItem('user');
	const navigate = useNavigate();
	if (authentication) {
		return token === null || token === undefined ? <Navigate to="/login" replace={true} /> : <Outlet />;
	}
};

export default PrivateRouter;
