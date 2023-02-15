import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/myPage/Breadcrumb.module.scss';

const BreadCrumb = () => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('breadcrumb')}>
			<span>마이페이지</span>
			<span>&gt;</span>
			<span>회원 정보</span>
			<span>&gt;</span>
			<span>회원 정보 수정</span>
		</div>
	);
};

export default BreadCrumb;
