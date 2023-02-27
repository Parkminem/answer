import React from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/myPage/MobileInterviewTap.module.scss';

const MobileInterviewTap = (props) => {
	const cx = classNames.bind(styles);
	return (
		<div className={cx('tap')}>
			<h1>{props.title}</h1>
		</div>
	);
};

export default MobileInterviewTap;
