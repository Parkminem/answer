import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '@/components/myPage/Breadcrumb.module.scss';
import { formatDate } from '@/modules/date';

const BreadCrumb = () => {
	const cx = classNames.bind(styles);
	const [searchParams] = useSearchParams();
	const { pathname } = useLocation();
	const [depth01, setDepth01] = useState('');
	const [depth02, setDepth02] = useState('');
	const [depth03, setDepth03] = useState('');

	useEffect(() => {
		if (pathname === '/mypage/modify') {
			setDepth01('회원 정보');
			setDepth02('회원 정보 수정');
			setDepth03('');
		} else {
			setDepth01('면접 진단 내역');
			if (pathname === '/mypage/feedback') {
				setDepth02('면접 진단 내용');
				setDepth03('면접 피드백');
			} else {
				if (searchParams.get('type')) {
					const type = searchParams.get('type');
					const date = searchParams.get('date');
					setDepth02(`면접 진단 내용 [ ${formatDate(new Date(date))} - ${type}]`);
				} else {
					setDepth02('');
					setDepth03('');
				}
			}
		}
	}, [pathname]);
	return (
		<div className={cx('breadcrumb')}>
			<span>마이페이지</span>
			<span>&gt;</span>
			<span>{depth01}</span>
			{depth02.length > 0 && <span>&gt;</span>}
			<span>{depth02}</span>
			{depth03.length > 0 && <span>&gt;</span>}
			<span>{depth03}</span>
		</div>
	);
};

export default BreadCrumb;
