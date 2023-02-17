import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '@/components/myPage/Breadcrumb.module.scss';

const BreadCrumb = () => {
	const cx = classNames.bind(styles);
	const { pathname } = useLocation();
	const [depth01, setDepth01] = useState('');
	const [depth02, setDepth02] = useState('');

	useEffect(() => {
		if (pathname === '/mypage/modify') {
			setDepth01('회원 정보');
			setDepth02('회원 정보 수정');
		} else {
			setDepth01('면접 진단 내역');
			if (pathname === '/mypage/feedback') {
				setDepth02('면접 피드백');
			} else {
				setDepth02('면접 진단 내용');
			}
		}
	}, [pathname]);
	return (
		<div className={cx('breadcrumb')}>
			<span>마이페이지</span>
			<span>&gt;</span>
			<span>{depth01}</span>
			<span>&gt;</span>
			<span>{depth02}</span>
		</div>
	);
};

export default BreadCrumb;
