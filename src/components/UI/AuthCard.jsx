import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '@/components/UI/AuthCard.module.scss';

const AuthCard = ({ children }) => {
	const cx = classNames.bind(styles);
	const { pathname } = useLocation();
	return (
		<div className={cx('auth-wrap')}>
			<div className={cx('auth-box')}>
				<div className={cx('auth-box__tap-box')}>
					<div className={cx('auth-box__tap-box__login-box', pathname === '/login' ? 'active' : '')}>
						<Link to="/login">
							<span>Login</span>
						</Link>
					</div>
					<div className={cx('auth-box__tap-box__join-box', pathname === '/join' ? 'active' : '')}>
						<Link to="/join">
							<span>Join</span>
						</Link>
					</div>
				</div>
				{children}
			</div>
		</div>
	);
};

export default AuthCard;
